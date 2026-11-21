# -*- coding: utf-8 -*-
"""Génère les versions anglaise (/en/) et arabe (/ar/) du site à partir des pages françaises.

Usage (depuis le dossier du site) :   python i18n/build.py

- Les traductions des textes des pages sont dans i18n/pages.py
- Les textes générés par le script (offres, calendrier, messages WhatsApp…) sont dans script.js (STRINGS / CONTENT_I18N)
- Ajoute aussi le sélecteur de langue et les balises hreflang dans toutes les pages (FR comprises).
Ne modifie jamais directement les fichiers de /en/ ou /ar/ : ils sont écrasés à chaque génération.
"""
import html, io, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.join(ROOT, "i18n"))
from pages import T  # noqa: E402

BASE = "https://obiodev.github.io/soufian/"
PAGES = ["index.html", "app.html", "mentions-legales.html"]
LANGS = {"fr": "", "en": "en/", "ar": "ar/"}
LABELS = {"fr": ("FR", "Français"), "en": ("EN", "English"), "ar": ("ع", "العربية")}
OG_LOCALE = {"fr": "fr_MA", "en": "en_US", "ar": "ar_MA"}
TOKEN = re.compile(r"(<script\b.*?</script>|<style\b.*?</style>|<!--.*?-->|<[^>]+>)", re.S)
ATTR = re.compile(r'\b(aria-label|placeholder|alt|title)="([^"]*)"')
META_KEYS = ("description", "og:title", "og:description", "og:image:alt", "og:site_name")
EXTRA = {  # textes hors du texte courant (SVG…)
    "en": [("HYROX PERFORMANCE COACH • DEPUIS 2020 •", "HYROX PERFORMANCE COACH • SINCE 2020 •")],
    "ar": [("HYROX PERFORMANCE COACH • DEPUIS 2020 •", "HYROX PERFORMANCE COACH • SINCE 2020 •")],
}
missing = set()


def norm(s):
    return re.sub(r"\s+", " ", html.unescape(s)).strip()


def tr(text, lang):
    key = norm(text)
    if not key or not re.search(r"[A-Za-zÀ-ÿ]", key):
        return None
    if key in T:
        return T[key][0 if lang == "en" else 1]
    if any(key == b for _, b in EXTRA.get(lang, [])):
        return None
    missing.add(key)
    return None


def translate_text(tok, lang):
    t = tr(tok, lang)
    if t is None:
        return tok
    lead = re.match(r"^(?:\s|&nbsp;|\xa0)*", tok).group(0)
    trail = re.search(r"(?:\s|&nbsp;|\xa0)*$", tok).group(0)
    return lead + html.escape(t, quote=False) + trail


def translate_tag(tok, lang):
    if tok.startswith("<meta"):
        key = re.search(r'\b(?:name|property)="([^"]+)"', tok)
        if key and key.group(1) in META_KEYS:
            def rep(m):
                t = tr(m.group(1), lang)
                return 'content="%s"' % html.escape(t) if t else m.group(0)
            return re.sub(r'content="([^"]*)"', rep, tok)
        return tok

    def rep(m):
        t = tr(m.group(2), lang)
        return '%s="%s"' % (m.group(1), html.escape(t)) if t else m.group(0)
    return ATTR.sub(rep, tok)


def switcher(page, lang, cls):
    prefix = "" if lang == "fr" else "../"
    items = []
    for l, folder in LANGS.items():
        short, full = LABELS[l]
        href = prefix + folder + page
        cur = ' aria-current="true"' if l == lang else ""
        items.append('<a href="%s" hreflang="%s" lang="%s" title="%s"%s>%s</a>' % (href, l, l, full, cur, short))
    aria = {"fr": "Langue", "en": "Language", "ar": "اللغة"}[lang]
    return '<nav class="lang-switch %s" aria-label="%s">%s</nav>' % (cls, aria, "".join(items))


def head_links(page, lang):
    out = []
    for l, folder in LANGS.items():
        out.append('<link rel="alternate" hreflang="%s" href="%s%s%s" />' % (l, BASE, folder, "" if page == "index.html" else page))
    out.append('<link rel="alternate" hreflang="x-default" href="%s%s" />' % (BASE, "" if page == "index.html" else page))
    return "\n  ".join(out)


def strip(s):
    s = re.sub(r'\s*<link rel="alternate" hreflang="[^"]*" href="[^"]*" />', "", s)
    return re.sub(r'\s*<nav class="lang-switch[^"]*"[^>]*>.*?</nav>', "", s, flags=re.S)


def decorate(s, page, lang):
    """Sélecteur de langue + hreflang (idempotent)."""
    s = strip(s)
    s = re.sub(r'(<link rel="canonical"[^>]*/>)', lambda m: m.group(1) + "\n  " + head_links(page, lang), s, count=1)
    # barre de navigation (desktop) : avant le bouton Réserver
    s = re.sub(r'(\n(\s*)<a class="btn btn--volt nav__cta)', lambda m: "\n" + m.group(2) + switcher(page, lang, "lang-switch--bar") + m.group(1), s, count=1)
    # menu mobile : en tête du pied de menu
    s = re.sub(r'(<div class="nav__menu-foot">)', lambda m: m.group(1) + "\n          " + switcher(page, lang, "lang-switch--menu"), s, count=1)
    # pied de page
    s = re.sub(r'(<div class="footer__bottom">)', lambda m: m.group(1) + "\n        " + switcher(page, lang, "lang-switch--footer"), s, count=1)
    return s


def build(page, lang):
    src = io.open(os.path.join(ROOT, page), encoding="utf-8").read()
    if lang == "fr":
        return decorate(src, page, "fr")
    src = strip(src)
    for a, b in EXTRA.get(lang, []):
        src = src.replace(a, b)
    parts = TOKEN.split(src)
    out = []
    for tok in parts:
        if not tok:
            continue
        if tok.startswith("<script") or tok.startswith("<style") or tok.startswith("<!--"):
            out.append(tok)
        elif tok.startswith("<"):
            out.append(translate_tag(tok, lang))
        else:
            out.append(translate_text(tok, lang))
    s = "".join(out)
    # langue, direction, chemins
    attrs = 'lang="%s" data-root="../"' % lang + (' dir="rtl"' if lang == "ar" else "")
    s = s.replace('<html lang="fr">', "<html %s>" % attrs, 1)
    s = re.sub(r'(\b(?:href|src)=")(?!https?:|#|tel:|mailto:|data:|\.\./|index\.html|app\.html|mentions-legales\.html)([^"]+")', r"\1../\2", s)
    s = re.sub(r'(<link rel="canonical" href=")%s' % re.escape(BASE), r"\1%s%s" % (BASE, LANGS[lang]), s)
    s = re.sub(r'(<meta property="og:url" content=")%s' % re.escape(BASE), r"\1%s%s" % (BASE, LANGS[lang]), s)
    s = s.replace('content="fr_MA"', 'content="%s"' % OG_LOCALE[lang])
    s = s.replace('"inLanguage": "fr"', '"inLanguage": "%s"' % lang)
    s = decorate(s, page, lang)
    return s


def main():
    for lang, folder in LANGS.items():
        if folder:
            os.makedirs(os.path.join(ROOT, folder), exist_ok=True)
        for page in PAGES:
            s = build(page, lang)
            io.open(os.path.join(ROOT, folder, page), "w", encoding="utf-8", newline="").write(s)
    if missing:
        print("Textes sans traduction (%d) :" % len(missing))
        for m in sorted(missing):
            print("  -", m)
    else:
        print("OK : toutes les pages sont traduites.")


if __name__ == "__main__":
    main()
