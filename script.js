/* =====================================================================
   SOUFIANE ZALIK — script.js
   Everything the coach may want to edit lives in CONFIG below.
   (Voir assets/LISEZ-MOI.txt pour le mode d'emploi en français.)
   ===================================================================== */
const CONFIG = {
  /* ---------- Contact ---------- */
  whatsapp: "212632740500",          // international format, no "+" or spaces
  phoneDisplay: "+212 632-740500",
  goatcounter: "",                   // code GoatCounter (ex. "soufianezalik" pour soufianezalik.goatcounter.com) — vide = statistiques désactivées
  formEndpoint: "",                  // optional, e.g. "https://formspree.io/f/xxxxxx" — also receives bookings/waitlist as JSON

  /* ---------- Social networks (footer, menu) ---------- */
  socials: [
    { name: "Instagram", icon: "i-instagram", url: "https://www.instagram.com/soufiane_zalik/" },
    { name: "TikTok",    icon: "i-tiktok",    url: "https://www.tiktok.com/@soufiane_zalik" },
    { name: "Facebook",  icon: "i-facebook",  url: "https://www.facebook.com/soufiane.zalik/" },
    { name: "LinkedIn",  icon: "i-linkedin",  url: "https://www.linkedin.com/in/soufiane-zalik-638149248" },
    { name: "WhatsApp",  icon: "i-whatsapp",  url: "https://wa.me/212632740500" },
  ],

  /* ---------- Offers (cards + booking step 1) ----------
     location: "domicile" | "salle" | null  → pre-selects the place in step 2
     price: leave "" to show "Tarif sur demande" — duration: leave "" to hide */
  offers: [
    {
      id: "decouverte", icon: "i-target", featured: true, badge: "Pour commencer",
      title: "Séance découverte & bilan",
      desc: "Le point de départ idéal : objectifs, niveau, historique, mobilité. On repart avec un plan clair.",
      points: ["Bilan complet de ton niveau", "Objectifs fixés ensemble", "À domicile ou en salle"],
      location: null, price: "", duration: "",
    },
    {
      id: "domicile", icon: "i-home",
      title: "Coaching personnel à domicile",
      desc: "Je me déplace chez toi avec une séance construite pour ton espace et ton objectif. Zéro trajet, zéro excuse.",
      points: ["Séance individuelle sur mesure", "Adaptée à ton espace", "Horaires flexibles"],
      location: "domicile", price: "", duration: "",
    },
    {
      id: "salle", icon: "i-dumbbell",
      title: "Coaching personnel en salle",
      desc: "Tout le matériel pour progresser vite : charges, sled, rameur, SkiErg. Technique et intensité encadrées.",
      points: ["Force, cardio & puissance", "Technique corrigée en direct", "Lieu confirmé ensemble"],
      location: "salle", price: "", duration: "",
    },
    {
      id: "hyrox", icon: "i-bolt",
      title: "Préparation HYROX & hybride",
      desc: "Course + stations : SkiErg, sled push & pull, rameur, wall balls… La méthode d'un coach qui court les courses.",
      points: ["Running & compromised running", "Travail spécifique des stations", "Stratégie de course"],
      location: null, price: "", duration: "",
    },
    {
      id: "boxe", icon: "i-glove",
      title: "Boxe & cardio",
      desc: "Technique, coordination et gros cardio, inspirés de mes certifications BODYCOMBAT™, HBX Boxing et kick-boxing.",
      points: ["Frappes & déplacements", "Conditionnement cardio", "Défoulement garanti"],
      location: null, price: "", duration: "",
    },
    {
      id: "duo", icon: "i-users",
      title: "Duo & petit groupe",
      desc: "Entraîne-toi avec ton partenaire, un ami ou des collègues. La même exigence, l'énergie du groupe en plus.",
      points: ["À 2 ou en petit groupe", "Programme commun adapté", "Motivation partagée"],
      location: null, price: "", duration: "",
    },
    {
      id: "entreprise", icon: "i-building", wide: true, badge: "Entreprises",
      title: "Formule entreprise",
      desc: "Des séances sport pour tes équipes, dans tes locaux ou en salle. Cohésion, énergie et bien-être au travail : un programme adapté au niveau et au planning de chacun.",
      points: ["Séances collectives sur site", "Challenges d'équipe & team building", "Planning adapté à l'entreprise", "Devis selon le nombre de participants"],
      location: "entreprise", price: "", duration: "",
    },
  ],

  /* ---------- Booking availability ----------
     weekly: slots per weekday (0 = dimanche, 1 = lundi … 6 = samedi). [] = closed.
     closedDates: specific days off ("AAAA-MM-JJ").
     extraDates: specific days with custom slots (overrides weekly). */
  availability: {
    daysAhead: 21,
    minNoticeHours: 3,
    sessionMinutes: 60, // only used for the calendar (.ics) file
    weekly: {
      0: [],
      1: ["06:30", "08:00", "12:30", "18:00", "19:30"],
      2: ["06:30", "08:00", "12:30", "18:00", "19:30"],
      3: ["06:30", "08:00", "12:30", "18:00", "19:30"],
      4: ["06:30", "08:00", "12:30", "18:00", "19:30"],
      5: ["06:30", "08:00", "12:30", "18:00", "19:30"],
      6: ["08:00", "09:30", "11:00"],
    },
    closedDates: [],              // e.g. ["2026-12-31", "2027-01-01"]
    extraDates: {},               // e.g. { "2026-12-06": ["09:00", "10:30"] }
  },
  cities: ["Casablanca", "Bouskoura", "Dar Bouazza", "Mohammedia", "Autre (préciser)"],
  goals: ["Remise en forme", "Perte de poids", "Prise de muscle", "Cardio & endurance", "Préparation HYROX / course", "Boxe", "Reprise après une pause", "Autre"],
  levels: ["Débutant", "Intermédiaire", "Confirmé", "Athlète"],

  /* ---------- Photo carousel ("En images") ---------- */
  carousel: { autoplayMs: 4800 },
  gallery: [
    { src: "assets/photos/p02-aug06.jpg", w: 480, h: 640, pos: "45% 40%", tag: "Compétition", title: "Sled push", caption: "HYROX — sous la pression du chrono", url: "https://instagram.com/p/DbtPE-_DK0s", alt: "Soufiane pousse un sled chargé en compétition HYROX" },
    { src: "assets/photos/p01-aug22.jpg", w: 360, h: 640, pos: "62% 45%", tag: "HYROX Istanbul", title: "La ligne d'arrivée", caption: "Le drapeau du Maroc levé sur la scène finale", url: "https://instagram.com/p/DcV0sJ2sW5X", alt: "Soufiane brandit le drapeau marocain sur la scène d'arrivée de HYROX Istanbul" },
    { src: "assets/photos/p04-nov08.jpg", w: 360, h: 640, pos: "50% 35%", tag: "Endurance", title: "Simulation Ironman", caption: "1,2 km nage · 51 km vélo · 10,5 km course, en un jour", url: "https://instagram.com/p/DffVjsTshC9", alt: "Selfie de Soufiane à vélo avec casque et lunettes bleues" },
    { src: "assets/photos/p06-nov04.jpg", w: 360, h: 640, pos: "40% 45%", tag: "Entraînement", title: "WOD HYROX", caption: "Sled sur gazon, compromised running", url: "https://instagram.com/p/DfVFuvQMNZ5", alt: "Soufiane pousse un sled chargé sur un gazon synthétique en salle" },
    { src: "assets/photos/p09-oct06.jpg", w: 360, h: 640, pos: "50% 35%", tag: "Finish", title: "Après l'effort", caption: "Son nom affiché sur l'écran d'arrivée HYROX", url: "https://instagram.com/p/DeKXYc8M2Bx", alt: "Soufiane après la ligne d'arrivée HYROX, l'écran affiche la liste des athlètes" },
    { src: "assets/photos/p07-nov01.jpg", w: 360, h: 640, pos: "50% 30%", tag: "Vélo", title: "Endurance sur la route", caption: "Une sortie prévue courte… 98 km au compteur", url: "https://instagram.com/p/DfM7WaTM8cd", alt: "Soufiane ajuste son casque à côté de son vélo de route sous un ciel bleu" },
    { src: "assets/photos/p08-oct12.jpg", w: 360, h: 640, pos: "60% 40%", tag: "Force", title: "Plus que des muscles", caption: "La vraie force se construit en silence", url: "https://instagram.com/p/DeZuahcM9Er", alt: "Soufiane fait un exercice à l'élastique devant un rack de musculation" },
    { src: "assets/photos/p05-nov05.jpg", w: 360, h: 640, pos: "40% 40%", tag: "Mindset", title: "Discipline", caption: "Même quand la ville dort", url: "https://instagram.com/p/DfXr_beMvkH", alt: "Soufiane assis dans le coffre ouvert de sa voiture, de nuit" },
  ],
};

/* =====================================================================
   LANGUES — FR (par défaut), EN (/en/), AR (/ar/)
   La langue est lue sur <html lang="…">. Les textes générés par le script
   et les traductions des offres / photos / listes sont ci-dessous.
   ===================================================================== */
const LANG = (() => { const l = (document.documentElement.lang || "fr").slice(0, 2); return ["en", "ar"].includes(l) ? l : "fr"; })();
const ROOT = document.documentElement.dataset.root || "";
const LOCALE = { fr: "fr-FR", en: "en-GB", ar: "ar-MA" }[LANG];

const STRINGS = {
  fr: {
    book: "Réserver", menu: "Menu", menuClose: "Fermer le menu", play: "Lancer le défilement automatique", pause: "Mettre en pause le défilement automatique",
    price: "Tarif", onRequest: "Sur demande", onRequestLong: "Tarif sur demande",
    slide: "diapositive", slideOf: (i, n, t) => `${i} sur ${n} : ${t}`, seePostAria: (t) => `${t} — voir le post Instagram (nouvel onglet)`, seePost: "Voir le post", photo: "Photo",
    chooseCity: "Choisis ta ville", chooseGoal: "Choisis un objectif",
    unavailable: " — indisponible", today: "Auj.", chooseHour: "choisis une heure", past: " — passé", noSlot: "Aucun créneau ce jour-là.", hourSep: " h ",
    errType: "Choisis un type de séance pour continuer.", errLieu: "Indique si la séance a lieu à domicile, en salle ou en entreprise.",
    errSociete: "Indique le nom de l'entreprise.", errVille: "Choisis ta ville.", errQuartier: "Indique ton quartier.",
    errDate: "Choisis un jour disponible.", errTime: "Choisis une heure.", errNom: "Indique ton nom.",
    errTel: "Numéro invalide. Ex. 06 12 34 56 78 ou +212 6 12 34 56 78.", missing: "Il manque une information à cette étape.",
    home: "À domicile", gym: "En salle", company: "En entreprise", participants: "participants",
    hello: "Bonjour Soufiane,", wantBook: "Je souhaite réserver une séance via ton site :", confirmAsk: "Peux-tu me confirmer la disponibilité ? Merci !",
    lSession: "Séance", lPlace: "Lieu", lDate: "Date", lTime: "Heure", lName: "Nom", lPhone: "Téléphone", lGoal: "Objectif", lLevel: "Niveau", lMessage: "Message",
    edit: "Modifier", confirm: "Confirmer", confirmOn: " sur WhatsApp", next: "Continuer", stepOf: (s, t) => `Étape ${s} sur ${t}`,
    ready: "Demande prête dans WhatsApp. Il ne reste qu'à envoyer le message.",
    waHello: "Bonjour Soufiane, je viens de ton site web.",
    icsPending: "(à confirmer)", icsDesc: "Demande envoyée sur WhatsApp. Contact :", icsFile: "seance-soufiane-zalik.ics",
    wErrName: "Indique ton prénom.", wErrContact: "Indique un numéro de téléphone ou un email valide.", wErrConsent: "Coche la case pour accepter d'être recontacté(e).",
    wMissing: "Merci de compléter les champs obligatoires.", wJoin: "Je veux rejoindre la liste d'attente de ton app.",
    wFirst: "Prénom", wContact: "Contact", wProfile: "Profil", wNotify: "Préviens-moi dès qu'elle sort ! (J'accepte d'être recontacté(e) à ce sujet.)",
    wOk: "✓ Ta demande est prête dans WhatsApp : il ne reste qu'à appuyer sur Envoyer.",
  },
  en: {
    book: "Book", menu: "Menu", menuClose: "Close menu", play: "Start autoplay", pause: "Pause autoplay",
    price: "Price", onRequest: "On request", onRequestLong: "Price on request",
    slide: "slide", slideOf: (i, n, t) => `${i} of ${n}: ${t}`, seePostAria: (t) => `${t} — view the Instagram post (new tab)`, seePost: "View post", photo: "Photo",
    chooseCity: "Choose your city", chooseGoal: "Choose a goal",
    unavailable: " — unavailable", today: "Today", chooseHour: "choose a time", past: " — past", noSlot: "No slots that day.", hourSep: ":",
    errType: "Choose a session type to continue.", errLieu: "Tell me whether the session is at home, at the gym or at your company.",
    errSociete: "Enter the company name.", errVille: "Choose your city.", errQuartier: "Enter your neighbourhood.",
    errDate: "Choose an available day.", errTime: "Choose a time.", errNom: "Enter your name.",
    errTel: "Invalid number. E.g. 06 12 34 56 78 or +212 6 12 34 56 78.", missing: "Some information is missing at this step.",
    home: "At home", gym: "At the gym", company: "At the company", participants: "participants",
    hello: "Hello Soufiane,", wantBook: "I'd like to book a session through your website:", confirmAsk: "Could you confirm availability? Thank you!",
    lSession: "Session", lPlace: "Place", lDate: "Date", lTime: "Time", lName: "Name", lPhone: "Phone", lGoal: "Goal", lLevel: "Level", lMessage: "Message",
    edit: "Edit", confirm: "Confirm", confirmOn: " on WhatsApp", next: "Continue", stepOf: (s, t) => `Step ${s} of ${t}`,
    ready: "Request ready in WhatsApp. All that's left is to send the message.",
    waHello: "Hello Soufiane, I found you through your website.",
    icsPending: "(to be confirmed)", icsDesc: "Request sent on WhatsApp. Contact:", icsFile: "session-soufiane-zalik.ics",
    wErrName: "Enter your first name.", wErrContact: "Enter a valid phone number or email.", wErrConsent: "Tick the box to agree to be contacted.",
    wMissing: "Please fill in the required fields.", wJoin: "I'd like to join your app's waitlist.",
    wFirst: "First name", wContact: "Contact", wProfile: "Profile", wNotify: "Let me know as soon as it's out! (I agree to be contacted about it.)",
    wOk: "✓ Your request is ready in WhatsApp: just tap Send.",
  },
  ar: {
    book: "احجز", menu: "القائمة", menuClose: "إغلاق القائمة", play: "تشغيل التمرير التلقائي", pause: "إيقاف التمرير التلقائي مؤقتًا",
    price: "السعر", onRequest: "عند الطلب", onRequestLong: "السعر عند الطلب",
    slide: "شريحة", slideOf: (i, n, t) => `${i} من ${n}: ${t}`, seePostAria: (t) => `${t} — عرض منشور إنستغرام (علامة تبويب جديدة)`, seePost: "عرض المنشور", photo: "صورة",
    chooseCity: "اختر مدينتك", chooseGoal: "اختر هدفًا",
    unavailable: " — غير متاح", today: "اليوم", chooseHour: "اختر الساعة", past: " — فات", noSlot: "لا توجد مواعيد في هذا اليوم.", hourSep: ":",
    errType: "اختر نوع الحصة للمتابعة.", errLieu: "حدّد هل الحصة في المنزل أو في القاعة أو في الشركة.",
    errSociete: "اكتب اسم الشركة.", errVille: "اختر مدينتك.", errQuartier: "اكتب اسم حيّك.",
    errDate: "اختر يومًا متاحًا.", errTime: "اختر ساعة.", errNom: "اكتب اسمك.",
    errTel: "رقم غير صالح. مثال: 06 12 34 56 78 أو ‎+212 6 12 34 56 78.", missing: "تنقص معلومة في هذه الخطوة.",
    home: "في المنزل", gym: "في القاعة", company: "في الشركة", participants: "مشاركين",
    hello: "السلام عليكم سفيان،", wantBook: "أرغب في حجز حصة عبر موقعك:", confirmAsk: "هل يمكنك تأكيد التوفر؟ شكرًا!",
    lSession: "الحصة", lPlace: "المكان", lDate: "التاريخ", lTime: "الساعة", lName: "الاسم", lPhone: "الهاتف", lGoal: "الهدف", lLevel: "المستوى", lMessage: "الرسالة",
    edit: "تعديل", confirm: "تأكيد", confirmOn: " على واتساب", next: "متابعة", stepOf: (s, t) => `الخطوة ${s} من ${t}`,
    ready: "الطلب جاهز في واتساب. لم يبقَ سوى إرسال الرسالة.",
    waHello: "السلام عليكم سفيان، وصلت إليك عبر موقعك الإلكتروني.",
    icsPending: "(في انتظار التأكيد)", icsDesc: "تم إرسال الطلب عبر واتساب. للتواصل:", icsFile: "hissa-soufiane-zalik.ics",
    wErrName: "اكتب اسمك الشخصي.", wErrContact: "اكتب رقم هاتف أو بريدًا إلكترونيًا صالحًا.", wErrConsent: "ضع علامة في الخانة للموافقة على التواصل معك.",
    wMissing: "المرجو ملء الحقول الإلزامية.", wJoin: "أريد الانضمام إلى قائمة انتظار تطبيقك.",
    wFirst: "الاسم", wContact: "وسيلة التواصل", wProfile: "الصفة", wNotify: "أخبرني فور صدوره! (أوافق على أن يتم التواصل معي بخصوص ذلك.)",
    wOk: "✓ طلبك جاهز في واتساب: اضغط فقط على إرسال.",
  },
};
const S = STRINGS[LANG];

/* Traductions du contenu de CONFIG (offres, listes, photos). Le français reste dans CONFIG ci-dessus. */
const CONTENT_I18N = {
  en: {
    offers: {
      decouverte: { badge: "To get started", title: "Discovery session & assessment", desc: "The ideal starting point: goals, level, history, mobility. You leave with a clear plan.", points: ["Full assessment of your level", "Goals set together", "At home or at the gym"] },
      domicile: { title: "Personal training at home", desc: "I come to you with a session built for your space and your goal. No commute, no excuses.", points: ["Tailored one-to-one session", "Adapted to your space", "Flexible times"] },
      salle: { title: "Personal training at the gym", desc: "All the equipment to progress fast: weights, sled, rower, SkiErg. Coached technique and intensity.", points: ["Strength, cardio & power", "Technique corrected live", "Location agreed together"] },
      hyrox: { title: "HYROX & hybrid prep", desc: "Running + stations: SkiErg, sled push & pull, rower, wall balls… The method of a coach who races.", points: ["Running & compromised running", "Station-specific work", "Race strategy"] },
      boxe: { title: "Boxing & cardio", desc: "Technique, coordination and serious cardio, drawn from my BODYCOMBAT™, HBX Boxing and kickboxing certifications.", points: ["Strikes & footwork", "Cardio conditioning", "Guaranteed release"] },
      duo: { title: "Duo & small group", desc: "Train with your partner, a friend or colleagues. Same standards, plus the energy of the group.", points: ["In pairs or small groups", "Shared, adapted program", "Shared motivation"] },
      entreprise: { badge: "Companies", title: "Corporate package", desc: "Fitness sessions for your teams, at your premises or at the gym. Team spirit, energy and wellbeing at work: a program adapted to everyone's level and schedule.", points: ["On-site group sessions", "Team challenges & team building", "Schedule adapted to the company", "Quote based on the number of participants"] },
    },
    cities: ["Casablanca", "Bouskoura", "Dar Bouazza", "Mohammedia", "Other (please specify)"],
    goals: ["Get fit", "Lose weight", "Build muscle", "Cardio & endurance", "HYROX / race prep", "Boxing", "Return after a break", "Other"],
    levels: ["Beginner", "Intermediate", "Advanced", "Athlete"],
    gallery: [
      { tag: "Race", title: "Sled push", caption: "HYROX — racing against the clock", alt: "Soufiane pushing a loaded sled at a HYROX race" },
      { tag: "HYROX Istanbul", title: "The finish line", caption: "The Moroccan flag raised on the finish stage", alt: "Soufiane holding up the Moroccan flag on the HYROX Istanbul finish stage" },
      { tag: "Endurance", title: "Ironman simulation", caption: "1.2 km swim · 51 km bike · 10.5 km run, in one day", alt: "Soufiane's selfie on his bike with helmet and blue sunglasses" },
      { tag: "Training", title: "HYROX WOD", caption: "Sled on turf, compromised running", alt: "Soufiane pushing a loaded sled on artificial turf at the gym" },
      { tag: "Finish", title: "After the effort", caption: "His name on the HYROX finish screen", alt: "Soufiane past the HYROX finish line, the screen shows the athletes list" },
      { tag: "Cycling", title: "Endurance on the road", caption: "A ride planned short… 98 km on the clock", alt: "Soufiane adjusting his helmet next to his road bike under a blue sky" },
      { tag: "Strength", title: "More than muscles", caption: "Real strength is built in silence", alt: "Soufiane doing a band exercise in front of a weight rack" },
      { tag: "Mindset", title: "Discipline", caption: "Even when the city sleeps", alt: "Soufiane sitting in the open trunk of his car at night" },
    ],
  },
  ar: {
    offers: {
      decouverte: { badge: "للبداية", title: "حصة اكتشاف وتقييم", desc: "نقطة الانطلاق المثالية: الأهداف، المستوى، التاريخ الرياضي، المرونة. تخرج بخطة واضحة.", points: ["تقييم شامل لمستواك", "أهداف نحدّدها معًا", "في المنزل أو في القاعة"] },
      domicile: { title: "تدريب شخصي في المنزل", desc: "آتي إليك بحصة مبنية لمساحتك وهدفك. لا تنقّل، لا أعذار.", points: ["حصة فردية على المقاس", "ملائمة لمساحتك", "مواعيد مرنة"] },
      salle: { title: "تدريب شخصي في القاعة", desc: "كل المعدات للتقدّم بسرعة: أوزان، زلاجة، آلة تجديف، SkiErg. تقنية وشدة تحت الإشراف.", points: ["قوة، تحمّل وانفجارية", "تصحيح التقنية مباشرة", "نتفق على المكان معًا"] },
      hyrox: { title: "تحضير HYROX والتدريب الهجين", desc: "جري + محطات: SkiErg، دفع وسحب الزلاجة، التجديف، كرات الحائط… منهج مدرب يشارك في السباقات.", points: ["الجري و compromised running", "عمل خاص بكل محطة", "استراتيجية السباق"] },
      boxe: { title: "ملاكمة وتحمّل", desc: "تقنية وتنسيق وتحمّل قوي، مستوحاة من شهاداتي في BODYCOMBAT™ وHBX Boxing والكيك بوكسينغ.", points: ["الضربات والتنقلات", "تقوية التحمّل", "تفريغ مضمون للطاقة"] },
      duo: { title: "ثنائي ومجموعة صغيرة", desc: "تدرّب مع شريكك أو صديق أو زملاء. نفس الصرامة، مع طاقة المجموعة.", points: ["ثنائي أو مجموعة صغيرة", "برنامج مشترك ملائم", "تحفيز مشترك"] },
      entreprise: { badge: "الشركات", title: "باقة الشركات", desc: "حصص رياضية لفرقك، في مقرّاتك أو في القاعة. روح الفريق، طاقة ورفاهية في العمل: برنامج ملائم لمستوى وجدول كل فرد.", points: ["حصص جماعية في مقرّ العمل", "تحديات وأنشطة لروح الفريق", "جدول ملائم للشركة", "عرض سعر حسب عدد المشاركين"] },
    },
    cities: ["الدار البيضاء", "بوسكورة", "دار بوعزة", "المحمدية", "أخرى (حدّدها)"],
    goals: ["استعادة اللياقة", "إنقاص الوزن", "بناء العضلات", "التحمّل والقلب", "تحضير HYROX / سباق", "ملاكمة", "العودة بعد انقطاع", "أخرى"],
    levels: ["مبتدئ", "متوسط", "متقدّم", "رياضي"],
    gallery: [
      { tag: "منافسة", title: "دفع الزلاجة", caption: "HYROX — تحت ضغط الوقت", alt: "سفيان يدفع زلاجة محمّلة في سباق HYROX" },
      { tag: "HYROX إسطنبول", title: "خط الوصول", caption: "العلم المغربي مرفوع على منصة الوصول", alt: "سفيان يرفع العلم المغربي على منصة الوصول في HYROX إسطنبول" },
      { tag: "تحمّل", title: "محاكاة Ironman", caption: "1,2 كلم سباحة · 51 كلم دراجة · 10,5 كلم جري، في يوم واحد", alt: "صورة ذاتية لسفيان على دراجته بخوذة ونظارات زرقاء" },
      { tag: "تدريب", title: "WOD HYROX", caption: "زلاجة على العشب، compromised running", alt: "سفيان يدفع زلاجة محمّلة على عشب صناعي في القاعة" },
      { tag: "الوصول", title: "بعد المجهود", caption: "اسمه على شاشة الوصول في HYROX", alt: "سفيان بعد خط الوصول في HYROX، والشاشة تعرض قائمة الرياضيين" },
      { tag: "دراجة", title: "التحمّل على الطريق", caption: "جولة كانت مقرّرة قصيرة… 98 كلم في العدّاد", alt: "سفيان يضبط خوذته بجانب دراجته تحت سماء زرقاء" },
      { tag: "قوة", title: "أكثر من عضلات", caption: "القوة الحقيقية تُبنى في صمت", alt: "سفيان يقوم بتمرين بالمطاط أمام رف الأثقال" },
      { tag: "عقلية", title: "انضباط", caption: "حتى عندما تنام المدينة", alt: "سفيان جالس في صندوق سيارته المفتوح ليلًا" },
    ],
  },
};
(() => {
  const tr = CONTENT_I18N[LANG];
  if (tr) {
    CONFIG.offers.forEach((o) => Object.assign(o, tr.offers[o.id] || {}));
    ["cities", "goals", "levels"].forEach((k) => { if (tr[k]) CONFIG[k] = tr[k]; });
    CONFIG.gallery.forEach((g, i) => Object.assign(g, tr.gallery[i] || {}));
  }
  CONFIG.gallery.forEach((g) => { g.src = ROOT + g.src; });
})();

/* =====================================================================
   Helpers
   ===================================================================== */
const $ = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => [...c.querySelectorAll(s)];
const reduceMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = matchMedia("(hover: hover) and (pointer: fine)").matches;
const esc = (str) => String(str).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
const pad = (n) => String(n).padStart(2, "0");
const dateKey = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
const waLink = (text) => `https://wa.me/${CONFIG.whatsapp}${text ? "?text=" + encodeURIComponent(text) : ""}`;
const openWhatsApp = (text) => {
  const url = waLink(text);
  const w = window.open(url, "_blank", "noopener,noreferrer");
  if (!w) location.href = url;
  return url;
};
const postJSON = (payload) => {
  if (!CONFIG.formEndpoint) return;
  fetch(CONFIG.formEndpoint, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  }).catch(() => { /* WhatsApp remains the main channel */ });
};

/* =====================================================================
   Global: year, socials, loaded state
   ===================================================================== */
$$("[data-year]").forEach((el) => (el.textContent = new Date().getFullYear()));
const socialHTML = CONFIG.socials
  .filter((s) => s.url)
  .map((s) => `<a class="social" href="${esc(s.url)}" target="_blank" rel="noopener noreferrer" aria-label="${esc(s.name)}"><svg aria-hidden="true"><use href="#${s.icon}"/></svg></a>`)
  .join("");
$$("[data-socials]").forEach((el) => (el.innerHTML = socialHTML));
requestAnimationFrame(() => requestAnimationFrame(() => document.documentElement.classList.add("is-loaded")));

/* =====================================================================
   Origine des contacts + statistiques sans cookie (GoatCounter)
   - Chaque lien WhatsApp ouvre un message pré-rempli contenant [SITE …]
     → dans WhatsApp, cherche « [SITE » pour retrouver les contacts venus du site.
   - Si CONFIG.goatcounter est rempli, les visites et les clics (WhatsApp,
     téléphone, réseaux, réservations) sont comptés, sans cookie.
   ===================================================================== */
const PAGE = document.body.classList.contains("page-app") ? "app" : document.body.classList.contains("page-legal") ? "mentions" : "accueil";
const siteTag = (what) => `[SITE · ${what || PAGE} · ${LANG.toUpperCase()}]`;
$$('a[href^="https://wa.me/"]').forEach((a) => {
  if (!a.getAttribute("href").includes("?")) a.href = waLink(`${S.waHello}\n\n${siteTag()}`);
});

const track = (() => {
  const code = CONFIG.goatcounter;
  const local = /^(localhost|127\.0\.0\.1|\[::1\])$/.test(location.hostname);
  if (!code || local) return () => {};
  const send = (path, title, isEvent) => {
    const q = new URLSearchParams({
      p: path, t: title || document.title, r: isEvent ? "" : document.referrer,
      s: `${screen.width},${screen.height},${window.devicePixelRatio || 1}`, b: "0", rnd: Math.random().toString(36).slice(2),
    });
    if (isEvent) q.set("e", "true");
    const img = new Image();
    img.referrerPolicy = "strict-origin-when-cross-origin";
    img.src = `https://${code}.goatcounter.com/count?${q}`;
  };
  send(location.pathname, document.title, false);
  return (name) => send(`${name}-${LANG}`, name, true);
})();

document.addEventListener("click", (e) => {
  const a = e.target.closest("a[href]");
  if (!a) return;
  const h = a.getAttribute("href");
  const zone = a.classList.contains("wa-float") ? "bouton-flottant" : a.closest(".nav") ? "menu" : a.closest(".footer") ? "pied-de-page" : a.closest(".final") ? "fin-de-page" : a.closest("#reserver") ? "reservation" : "page";
  if (h.startsWith("https://wa.me/")) track(`clic-whatsapp-${zone}`);
  else if (h.startsWith("tel:")) track(`clic-telephone-${zone}`);
  else if (/instagram\.com|facebook\.com|linkedin\.com|tiktok\.com/.test(h)) track(`clic-reseau-${new URL(h, location.href).hostname.replace(/^www\./, "").split(".")[0]}`);
}, { capture: true });

/* =====================================================================
   Nav: scrolled, progress, active link, mobile menu
   ===================================================================== */
(() => {
  const nav = $("#nav");
  if (!nav) return;
  const bar = $("#progress");
  const onScroll = () => {
    const y = scrollY;
    nav.classList.toggle("is-scrolled", y > 20);
    const h = document.documentElement.scrollHeight - innerHeight;
    if (bar) bar.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  };
  addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // Active section highlight
  const links = $$(".nav__links a[href^='#']");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) links.forEach((l) => l.classList.toggle("is-active", l.getAttribute("href") === "#" + e.target.id));
    });
  }, { rootMargin: "-45% 0px -50% 0px" });
  links.forEach((l) => { const s = $(l.getAttribute("href")); if (s) io.observe(s); });
  // Sections not in the menu (hero, booking, faq…) clear the highlight
  $$("main > section[id]").forEach((s) => { if (!links.some((l) => l.getAttribute("href") === "#" + s.id)) io.observe(s); });

  // Burger
  const burger = $("#burger");
  const menu = $("#navMenu");
  const mq = matchMedia("(min-width: 1024px)");
  const setOpen = (open) => {
    burger.setAttribute("aria-expanded", String(open));
    burger.querySelector(".sr-only").textContent = open ? S.menuClose : S.menu;
    nav.classList.toggle("menu-open", open);
    document.body.classList.toggle("is-locked", open);
    if (open) setTimeout(() => $("a", menu)?.focus(), 80);
  };
  burger.addEventListener("click", () => setOpen(burger.getAttribute("aria-expanded") !== "true"));
  $$("a", menu).forEach((a) => a.addEventListener("click", () => setOpen(false)));
  addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("menu-open")) { setOpen(false); burger.focus(); }
  });
  // Focus trap while the mobile menu is open
  nav.addEventListener("keydown", (e) => {
    if (e.key !== "Tab" || !nav.classList.contains("menu-open")) return;
    const f = [burger, ...$$("a, button", menu)].filter((el) => el.offsetParent !== null);
    const first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  });
  mq.addEventListener?.("change", () => setOpen(false));
})();

/* =====================================================================
   Reveals + counters
   ===================================================================== */
(() => {
  const els = $$("[data-reveal]");
  if (reduceMotion || !("IntersectionObserver" in window)) { els.forEach((el) => el.classList.add("is-in")); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
  }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
  els.forEach((el) => {
    const sibs = [...el.parentElement.children].filter((c) => c.hasAttribute("data-reveal"));
    if (!el.style.getPropertyValue("--d")) el.style.setProperty("--d", Math.min(sibs.indexOf(el), 6) * 0.08 + "s");
    io.observe(el);
  });
})();

function observeCounters(root = document) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (!e.isIntersecting) return;
      const el = e.target;
      io.unobserve(el);
      const target = parseFloat(el.dataset.count);
      const dec = parseInt(el.dataset.decimals || "0", 10);
      const fmt = (v) => v.toLocaleString(LOCALE, { minimumFractionDigits: dec, maximumFractionDigits: dec });
      if (reduceMotion) { el.textContent = fmt(target); return; }
      const t0 = performance.now(), dur = 1600;
      const tick = (now) => {
        const t = Math.min((now - t0) / dur, 1);
        el.textContent = fmt(target * (1 - Math.pow(1 - t, 4)));
        if (t < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    });
  }, { threshold: 0.6 });
  $$("[data-count]", root).forEach((el) => io.observe(el));
}
observeCounters();

/* =====================================================================
   Micro-interactions: magnetic buttons, custom cursor, hero parallax
   ===================================================================== */
if (finePointer && !reduceMotion) {
  $$(".magnetic").forEach((b) => {
    b.addEventListener("pointermove", (e) => {
      const r = b.getBoundingClientRect();
      b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * 0.22}px, ${(e.clientY - r.top - r.height / 2) * 0.32}px)`;
    });
    b.addEventListener("pointerleave", () => (b.style.transform = ""));
  });

  const cursor = $(".cursor");
  if (cursor) {
    document.body.classList.add("has-cursor");
    const dot = $(".cursor__dot", cursor), ring = $(".cursor__ring", cursor);
    let x = innerWidth / 2, y = innerHeight / 2, rx = x, ry = y;
    addEventListener("pointermove", (e) => { x = e.clientX; y = e.clientY; cursor.classList.remove("is-hidden"); }, { passive: true });
    document.addEventListener("pointerleave", () => cursor.classList.add("is-hidden"));
    const loop = () => {
      rx += (x - rx) * 0.18; ry += (y - ry) * 0.18;
      dot.style.transform = `translate(${x}px, ${y}px)`;
      ring.style.transform = `translate(${rx}px, ${ry}px)`;
      requestAnimationFrame(loop);
    };
    loop();
    document.addEventListener("pointerover", (e) => {
      cursor.classList.toggle("is-hover", !!e.target.closest("a, button, label, summary, input, select, textarea, .carousel__stage"));
    });
  }

  const heroImg = $(".hero__media img");
  if (heroImg) {
    addEventListener("scroll", () => {
      const y = scrollY;
      if (y < innerHeight * 1.2) heroImg.style.transform = `translateY(${y * 0.12}px) scale(1.12)`;
    }, { passive: true });
  }
}

/* =====================================================================
   Offers (cards rendered from CONFIG)
   ===================================================================== */
(() => {
  const grid = $("#offersGrid");
  if (!grid) return;
  grid.innerHTML = CONFIG.offers.map((o, i) => `
    <article class="offer${o.featured ? " offer--featured" : ""}${o.wide ? " offer--wide" : ""}" data-reveal>
      ${o.badge ? `<span class="offer__badge">${esc(o.badge)}</span>` : ""}
      <div class="offer__top">
        <span class="offer__ico" aria-hidden="true"><svg><use href="#${o.icon}"/></svg></span>
        <span class="offer__num">${pad(i + 1)} / ${pad(CONFIG.offers.length)}</span>
      </div>
      <h3 class="offer__title">${esc(o.title)}</h3>
      <p class="offer__desc">${esc(o.desc)}</p>
      <ul class="ticks">${o.points.map((p) => `<li><svg class="ico" aria-hidden="true"><use href="#i-check"/></svg>${esc(p)}</li>`).join("")}</ul>
      <div class="offer__foot">
        <p class="offer__price"><small>${o.duration ? esc(o.duration) : S.price}</small><b>${o.price ? esc(o.price) : S.onRequest}</b></p>
        <a class="btn btn--volt" href="#reserver" data-offer="${o.id}" aria-label="${S.book} : ${esc(o.title)}">${S.book} <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg></a>
      </div>
    </article>`).join("");
  const io = new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } }), { threshold: 0.1 });
  $$(".offer", grid).forEach((el, i) => {
    el.style.setProperty("--d", (i % 3) * 0.08 + "s");
    reduceMotion ? el.classList.add("is-in") : io.observe(el);
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", e.clientX - r.left + "px");
      el.style.setProperty("--my", e.clientY - r.top + "px");
    });
  });
})();

/* =====================================================================
   Photo carousel (coverflow, infinite, autoplay, drag, keyboard)
   ===================================================================== */
(() => {
  const root = $("#carousel");
  if (!root) return;
  const stage = $("#carStage"), track = $("#carTrack"), dotsWrap = $("#carDots"), cap = $("#carCaption");
  const btnPrev = $("#carPrev"), btnNext = $("#carNext"), btnPlay = $("#carPlay");
  const items = CONFIG.gallery;
  const n = items.length;
  let active = 0;

  track.innerHTML = items.map((g, i) => `
    <li class="cslide" data-i="${i}" aria-roledescription="${S.slide}" aria-label="${esc(S.slideOf(i + 1, n, g.title))}">
      <a href="${esc(g.url)}" target="_blank" rel="noopener noreferrer" draggable="false" aria-label="${esc(S.seePostAria(g.title))}">
        <img src="${g.src}" width="${g.w}" height="${g.h}" alt="${esc(g.alt)}" loading="${i < 3 || i === n - 1 ? "eager" : "lazy"}" decoding="async" draggable="false" style="object-position:${g.pos}" />
        <span class="cslide__tag">${esc(g.tag)}</span>
        <span class="cslide__num" aria-hidden="true">${pad(i + 1)}</span>
        <span class="cslide__ig" aria-hidden="true"><svg><use href="#i-instagram"/></svg>${S.seePost}</span>
      </a>
    </li>`).join("");
  dotsWrap.innerHTML = items.map((g, i) => `<button type="button" class="cdot" data-i="${i}" aria-label="${S.photo} ${i + 1} : ${esc(g.title)}"><span></span></button>`).join("");
  const slides = $$(".cslide", track);
  const dots = $$(".cdot", dotsWrap);

  const offsetOf = (i, base = active) => {
    let o = (i - base) % n;
    if (o < -n / 2) o += n;
    if (o >= n / 2) o -= n;
    return o;
  };
  const layout = (drag = 0) => {
    slides.forEach((s, i) => {
      const o = offsetOf(i) + drag;
      const ao = Math.abs(o);
      s.style.setProperty("--o", o.toFixed(3));
      s.style.setProperty("--ao", ao.toFixed(3));
      s.style.zIndex = String(50 - Math.round(ao * 10));
      s.classList.toggle("is-far", ao > 2.5);
      const isActive = offsetOf(i) === 0;
      s.classList.toggle("is-active", isActive);
      s.setAttribute("aria-hidden", String(!isActive));
      $("a", s).tabIndex = isActive ? 0 : -1;
    });
  };
  const renderCaption = () => {
    const g = items[active];
    cap.innerHTML = `<span class="mono">${pad(active + 1)} / ${pad(n)} — ${esc(g.tag)}</span><strong>${esc(g.title)}</strong><span class="carousel__sub">${esc(g.caption)}</span>`;
    if (!reduceMotion) { cap.classList.remove("is-swap"); void cap.offsetWidth; cap.classList.add("is-swap"); }
    dots.forEach((d, i) => {
      d.setAttribute("aria-current", String(i === active));
      d.classList.toggle("is-past", i < active);
      d.style.removeProperty("--p");
    });
  };
  const go = (i) => {
    active = ((i % n) + n) % n;
    elapsed = 0;
    layout();
    renderCaption();
  };

  /* Autoplay with visible progress + pause control */
  let userPaused = reduceMotion, hover = false, focusIn = false, inView = false, elapsed = 0, last = 0;
  const DUR = CONFIG.carousel.autoplayMs;
  const running = () => !userPaused && !hover && !focusIn && inView && !document.hidden;
  const tick = (now) => {
    const dt = last ? now - last : 0;
    last = now;
    if (running()) {
      elapsed += dt;
      dots[active]?.style.setProperty("--p", Math.min(elapsed / DUR, 1) * 100 + "%");
      if (elapsed >= DUR) go(active + 1);
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
  const setPlayUI = () => {
    btnPlay.innerHTML = `<svg aria-hidden="true"><use href="#${userPaused ? "i-play" : "i-pause"}"/></svg>`;
    btnPlay.setAttribute("aria-label", userPaused ? S.play : S.pause);
  };
  btnPlay.addEventListener("click", () => { userPaused = !userPaused; setPlayUI(); });
  setPlayUI();
  new IntersectionObserver((en) => { inView = en[0].isIntersecting; }, { threshold: 0.35 }).observe(root);
  stage.addEventListener("pointerenter", (e) => { if (e.pointerType === "mouse") hover = true; });
  stage.addEventListener("pointerleave", () => { hover = false; });
  root.addEventListener("focusin", () => (focusIn = true));
  root.addEventListener("focusout", (e) => { if (!root.contains(e.relatedTarget)) focusIn = false; });

  btnPrev.addEventListener("click", () => go(active - 1));
  btnNext.addEventListener("click", () => go(active + 1));
  dots.forEach((d) => d.addEventListener("click", () => go(+d.dataset.i)));
  stage.addEventListener("keydown", (e) => {
    if (e.key === "ArrowRight") { e.preventDefault(); go(active + 1); }
    else if (e.key === "ArrowLeft") { e.preventDefault(); go(active - 1); }
    else if (e.key === "Home") { e.preventDefault(); go(0); }
    else if (e.key === "End") { e.preventDefault(); go(n - 1); }
    else if (e.key === "Enter" && e.target === stage) { e.preventDefault(); $("a", slides[active]).click(); }
  });

  /* Drag / swipe */
  let startX = 0, startY = 0, dx = 0, dragging = false, pid = null, moved = false;
  const unit = () => slides[0].getBoundingClientRect().width * 0.66 || 200;
  stage.addEventListener("pointerdown", (e) => {
    if (e.button !== 0) return;
    pid = e.pointerId; startX = e.clientX; startY = e.clientY; dx = 0; dragging = false; moved = false;
  });
  stage.addEventListener("pointermove", (e) => {
    // Parallax on the active slide (mouse only)
    if (e.pointerType === "mouse" && !reduceMotion && pid === null) {
      const a = slides[active], r = a.getBoundingClientRect();
      const px = ((e.clientX - r.left) / r.width - 0.5) * -18;
      const py = ((e.clientY - r.top) / r.height - 0.5) * -18;
      a.style.setProperty("--px", px.toFixed(1) + "px");
      a.style.setProperty("--py", py.toFixed(1) + "px");
    }
    if (pid !== e.pointerId) return;
    dx = e.clientX - startX;
    const dy = e.clientY - startY;
    if (!dragging) {
      if (Math.abs(dx) > 8 && Math.abs(dx) > Math.abs(dy)) {
        dragging = true; moved = true;
        stage.classList.add("is-drag");
        try { stage.setPointerCapture(pid); } catch (_) {}
      } else if (Math.abs(dy) > 10) { pid = null; return; }
    }
    if (dragging) layout(dx / unit());
  });
  const end = (e) => {
    if (pid !== e.pointerId) return;
    pid = null;
    if (!dragging) return;
    dragging = false;
    stage.classList.remove("is-drag");
    let steps = Math.round(-dx / unit());
    if (steps === 0 && Math.abs(dx) > 40) steps = dx < 0 ? 1 : -1;
    go(active + steps);
  };
  stage.addEventListener("pointerup", end);
  stage.addEventListener("pointercancel", end);
  stage.addEventListener("pointerleave", () => slides[active]?.style.removeProperty("--px"));
  // Clicks: side slide → bring to front; suppress click after a drag
  track.addEventListener("click", (e) => {
    const li = e.target.closest(".cslide");
    if (!li) return;
    if (moved) { e.preventDefault(); moved = false; return; }
    const i = +li.dataset.i;
    if (i !== active) { e.preventDefault(); go(i); }
  });

  layout();
  renderCaption();
})();

/* =====================================================================
   BOOKING WIZARD
   ===================================================================== */
(() => {
  const form = $("#wzForm");
  if (!form) return;
  const A = CONFIG.availability;
  const steps = $$(".wz-step", form);
  const progress = $$("#wzProgress li");
  const bar = $("#wzBar");
  const btnPrev = $("#wzPrev"), btnNext = $("#wzNext"), nav = $("#wzNav");
  const live = $("#wzLive"), summary = $("#wzSummary"), done = $("#wzDone");
  const TOTAL = steps.length;
  let step = 1, maxStep = 1, lastMsg = "";
  const state = { date: null, time: null };

  const offerById = (id) => CONFIG.offers.find((o) => o.id === id);
  const fmtDateLong = (key) => {
    const [y, m, d] = key.split("-").map(Number);
    const s = new Date(y, m - 1, d).toLocaleDateString(LOCALE, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
    return s.charAt(0).toUpperCase() + s.slice(1);
  };

  /* --- Step 1: types --- */
  $("#wzTypes").innerHTML = CONFIG.offers.map((o) => `
    <label class="choice">
      <input type="radio" name="type" value="${o.id}" />
      <span class="choice__box">
        <svg class="choice__ico" aria-hidden="true"><use href="#${o.icon}"/></svg>
        <span class="choice__t">${esc(o.title)}</span>
        <span class="choice__d">${o.price ? esc(o.price) : S.onRequestLong}</span>
        <span class="choice__tick" aria-hidden="true"><svg><use href="#i-check"/></svg></span>
      </span>
    </label>`).join("");

  /* --- Selects / chips --- */
  $("#f-ville").innerHTML = `<option value="">${S.chooseCity}</option>` + CONFIG.cities.map((c) => `<option>${esc(c)}</option>`).join("");
  $("#f-obj").innerHTML = `<option value="">${S.chooseGoal}</option>` + CONFIG.goals.map((c) => `<option>${esc(c)}</option>`).join("");
  $("#lvlChips").innerHTML = CONFIG.levels.map((l) => `<label class="chip"><input type="radio" name="niveau" value="${esc(l)}" /><span>${esc(l)}</span></label>`).join("");

  /* --- Lieu sub-fields --- */
  const syncLieu = () => {
    const v = form.lieu.value;
    $("#wzHome").hidden = v !== "domicile";
    $("#wzGym").hidden = v !== "salle";
    $("#wzCompany").hidden = v !== "entreprise";
  };
  $$("input[name=lieu]", form).forEach((r) => r.addEventListener("change", () => { syncLieu(); setErr("lieu", ""); }));
  $$("input[name=type]", form).forEach((r) => r.addEventListener("change", () => {
    setErr("type", "");
    const loc = offerById(r.value)?.location;
    if (loc) { form.querySelector(`input[name=lieu][value=${loc}]`).checked = true; syncLieu(); }
    updateSummary();
  }));

  /* --- Calendar --- */
  const slotsFor = (d) => {
    const key = dateKey(d);
    if (A.closedDates.includes(key)) return [];
    if (A.extraDates[key]) return A.extraDates[key];
    return A.weekly[d.getDay()] || [];
  };
  const slotTime = (d, hhmm) => { const [h, m] = hhmm.split(":").map(Number); const t = new Date(d); t.setHours(h, m, 0, 0); return t; };
  const isSlotOpen = (d, hhmm) => slotTime(d, hhmm).getTime() >= Date.now() + A.minNoticeHours * 3600e3;
  const days = [];
  const buildCalendar = () => {
    const today = new Date(); today.setHours(0, 0, 0, 0);
    days.length = 0;
    for (let i = 0; i < A.daysAhead; i++) { const d = new Date(today); d.setDate(today.getDate() + i); days.push(d); }
    const monthName = (d) => d.toLocaleDateString(LOCALE, { month: "long" });
    const first = days[0], lastD = days[days.length - 1];
    const label = first.getMonth() === lastD.getMonth()
      ? `${monthName(first)} ${first.getFullYear()}`
      : `${monthName(first)} — ${monthName(lastD)} ${lastD.getFullYear()}`;
    $("#calMonth").textContent = label.charAt(0).toUpperCase() + label.slice(1);
    let html = "", curMonth = first.getMonth();
    const padN = (d) => (d.getDay() + 6) % 7; // Monday-first
    for (let p = 0; p < padN(first); p++) html += `<span class="cal__pad" aria-hidden="true"></span>`;
    days.forEach((d, i) => {
      if (d.getMonth() !== curMonth) {
        curMonth = d.getMonth();
        // close previous row with pads, then a month label row
        const prevPad = (padN(d) === 0) ? 0 : 7 - padN(d);
        for (let p = 0; p < prevPad; p++) html += `<span class="cal__pad" aria-hidden="true"></span>`;
        html += `<span class="cal__sep" aria-hidden="true">${monthName(d)}</span>`;
        for (let p = 0; p < padN(d); p++) html += `<span class="cal__pad" aria-hidden="true"></span>`;
      }
      const open = slotsFor(d).some((s) => isSlotOpen(d, s));
      const isToday = i === 0;
      const full = d.toLocaleDateString(LOCALE, { weekday: "long", day: "numeric", month: "long" });
      html += `<button type="button" class="cal__day${isToday ? " is-today" : ""}" data-key="${dateKey(d)}" aria-pressed="false" ${open ? "" : "disabled"} aria-label="${full}${open ? "" : S.unavailable}"><b>${d.getDate()}</b><small>${isToday ? S.today : d.toLocaleDateString(LOCALE, { weekday: "short" }).replace(".", "")}</small></button>`;
    });
    $("#calGrid").innerHTML = html;
    if (state.date) {
      const btn = $(`.cal__day[data-key="${state.date}"]`);
      if (btn && !btn.disabled) btn.setAttribute("aria-pressed", "true"); else { state.date = null; state.time = null; }
    }
  };
  const renderSlots = () => {
    const wrap = $("#slotsWrap"), grid = $("#slotsGrid");
    if (!state.date) { wrap.hidden = true; return; }
    const d = days.find((x) => dateKey(x) === state.date);
    const list = slotsFor(d);
    wrap.hidden = false;
    $("#slotsTitle").innerHTML = `${esc(fmtDateLong(state.date))} <span>· ${S.chooseHour}</span>`;
    grid.innerHTML = list.length
      ? list.map((t) => { const ok = isSlotOpen(d, t); return `<button type="button" class="slot" data-time="${t}" aria-pressed="${state.time === t}" ${ok ? "" : "disabled"} aria-label="${t.replace(":", S.hourSep)}${ok ? "" : S.past}">${t}</button>`; }).join("")
      : `<p class="slots__empty">${S.noSlot}</p>`;
  };
  $("#calGrid").addEventListener("click", (e) => {
    const b = e.target.closest(".cal__day");
    if (!b || b.disabled) return;
    $$(".cal__day", form).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    if (state.date !== b.dataset.key) state.time = null;
    state.date = b.dataset.key;
    setErr("date", "");
    renderSlots();
    updateSummary();
  });
  $("#calGrid").addEventListener("keydown", (e) => {
    const b = e.target.closest(".cal__day");
    if (!b) return;
    const all = $$(".cal__day", form);
    const i = all.indexOf(b);
    const delta = { ArrowRight: 1, ArrowLeft: -1, ArrowDown: 7, ArrowUp: -7 }[e.key];
    if (delta === undefined) return;
    e.preventDefault();
    let j = i + delta;
    while (j >= 0 && j < all.length && all[j].disabled) j += Math.sign(delta);
    all[j]?.focus();
  });
  $("#slotsGrid").addEventListener("click", (e) => {
    const b = e.target.closest(".slot");
    if (!b || b.disabled) return;
    state.time = b.dataset.time;
    $$(".slot", form).forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    setErr("time", "");
    updateSummary();
  });

  /* --- Errors --- */
  function setErr(name, msg) {
    const el = $("#err-" + name);
    if (el) el.textContent = msg;
    const field = form.elements[name];
    if (field && field.closest) {
      field.closest(".field")?.classList.toggle("is-invalid", !!msg);
      field.setAttribute?.("aria-invalid", msg ? "true" : "false");
    }
  }
  ["nom", "tel", "ville", "quartier"].forEach((n) => form.elements[n].addEventListener("input", () => setErr(n, "")));

  const validate = (s) => {
    const errs = [];
    const need = (cond, name, msg) => { if (!cond) { setErr(name, msg); errs.push(name); } else setErr(name, ""); };
    if (s === 1) need(form.type.value, "type", S.errType);
    if (s === 2) {
      need(form.lieu.value, "lieu", S.errLieu);
      if (form.lieu.value === "entreprise") {
        need(form.societe.value.trim().length >= 2, "societe", S.errSociete);
      }
      if (form.lieu.value === "domicile") {
        need(form.ville.value, "ville", S.errVille);
        need(form.quartier.value.trim().length >= 2, "quartier", S.errQuartier);
      }
    }
    if (s === 3) {
      need(state.date, "date", S.errDate);
      if (state.date) need(state.time, "time", S.errTime);
    }
    if (s === 4) {
      need(form.nom.value.trim().length >= 2, "nom", S.errNom);
      const digits = form.tel.value.replace(/[\s().+-]/g, "");
      need(/^\d{9,15}$/.test(digits), "tel", S.errTel);
    }
    if (errs.length) {
      const first = form.elements[errs[0]];
      const target = first && first.focus && !(first instanceof RadioNodeList) ? first : $(`.wz-step[data-step="${s}"] input:not([disabled]), .wz-step[data-step="${s}"] button:not([disabled])`);
      target?.focus?.();
      announce(S.missing);
    }
    return errs.length === 0;
  };

  /* --- Data + message --- */
  const data = () => {
    const o = offerById(form.type.value);
    const lieu = form.lieu.value;
    let lieuTxt = "";
    if (lieu === "domicile") lieuTxt = `${S.home} — ${form.ville.value}${form.quartier.value.trim() ? ", " + form.quartier.value.trim() : ""}`;
    else if (lieu === "salle") lieuTxt = `${S.gym}${form.salle.value.trim() ? " — " + form.salle.value.trim() : ""}`;
    else if (lieu === "entreprise") {
      const extra = [form.effectif.value.trim() && `${form.effectif.value.trim()} ${S.participants}`, form.villeEnt.value.trim()].filter(Boolean).join(", ");
      lieuTxt = `${S.company} — ${form.societe.value.trim()}${extra ? " (" + extra + ")" : ""}`;
    }
    return {
      type: o?.title || "", lieu: lieuTxt, date: state.date ? fmtDateLong(state.date) : "", heure: state.time || "",
      nom: form.nom.value.trim(), telephone: form.tel.value.trim(), objectif: form.objectif.value,
      niveau: form.niveau.value, message: form.message.value.trim(),
    };
  };
  const message = (d) => [
    S.hello,
    S.wantBook,
    "",
    `- *${S.lSession} :* ${d.type}`,
    `- *${S.lPlace} :* ${d.lieu}`,
    `- *${S.lDate} :* ${d.date}`,
    `- *${S.lTime} :* ${d.heure}`,
    "",
    `- *${S.lName} :* ${d.nom}`,
    `- *${S.lPhone} :* ${d.telephone}`,
    d.objectif ? `- *${S.lGoal} :* ${d.objectif}` : null,
    d.niveau ? `- *${S.lLevel} :* ${d.niveau}` : null,
    d.message ? `- *${S.lMessage} :* ${d.message}` : null,
    "",
    S.confirmAsk,
    "",
    siteTag("réservation"),
  ].filter((l) => l !== null).join("\n");

  const renderRecap = () => {
    const d = data();
    const row = (label, val, s, cls = "") => `<div class="recap__row ${cls}"><dt>${label}</dt><dd>${esc(val || "—")}</dd><button type="button" class="recap__edit" data-goto="${s}" aria-label="${S.edit} : ${label}">${S.edit}</button></div>`;
    $("#recap").innerHTML =
      row(S.lSession, d.type, 1, "recap__row--hl") + row(S.lPlace, d.lieu, 2) +
      row(S.lDate, d.date, 3, "recap__row--hl") + row(S.lTime, d.heure, 3) +
      row(S.lName, d.nom, 4) + row(S.lPhone, d.telephone, 4) +
      row(S.lGoal, d.objectif, 4) + row(S.lLevel, d.niveau, 4) +
      (d.message ? row(S.lMessage, d.message, 4, "recap__row--full") : "");
  };
  $("#recap").addEventListener("click", (e) => { const b = e.target.closest("[data-goto]"); if (b) goTo(+b.dataset.goto); });

  function updateSummary() {
    const parts = [];
    const o = offerById(form.type.value); if (o) parts.push(o.title);
    if (form.lieu.value) parts.push({ domicile: S.home, salle: S.gym, entreprise: S.company }[form.lieu.value]);
    if (state.date) parts.push(fmtDateLong(state.date).split(" ").slice(0, 3).join(" ") + (state.time ? " · " + state.time : ""));
    summary.textContent = parts.join(" — ");
  }
  function announce(msg) { live.textContent = ""; setTimeout(() => (live.textContent = msg), 30); }

  /* --- Navigation --- */
  function goTo(s, { focus = true } = {}) {
    const back = s < step;
    step = Math.max(1, Math.min(TOTAL, s));
    maxStep = Math.max(maxStep, step);
    steps.forEach((el) => { const on = +el.dataset.step === step; el.hidden = !on; el.classList.toggle("is-back", back); });
    done.hidden = true; nav.hidden = false;
    progress.forEach((li) => {
      const n = +li.dataset.step, b = $("button", li);
      li.classList.toggle("is-current", n === step);
      li.classList.toggle("is-done", n < step || (n <= maxStep && n !== step));
      b.disabled = n > maxStep;
      if (n === step) b.setAttribute("aria-current", "step"); else b.removeAttribute("aria-current");
    });
    bar.style.width = (step / TOTAL) * 100 + "%";
    btnPrev.hidden = step === 1;
    btnNext.innerHTML = step === TOTAL
      ? `<svg class="ico" aria-hidden="true"><use href="#i-whatsapp"/></svg><span>${S.confirm}<span class="hide-sm">${S.confirmOn}</span></span>`
      : `${S.next} <svg class="ico" aria-hidden="true"><use href="#i-arrow"/></svg>`;
    if (step === 3) { buildCalendar(); renderSlots(); }
    if (step === TOTAL) renderRecap();
    updateSummary();
    const title = $(`.wz-step[data-step="${step}"] .wz-step__title`);
    announce(`${S.stepOf(step, TOTAL)} : ${title.textContent.replace(/^[^0-9]*\d\/\d/, "").trim()}`);
    if (focus) {
      title.focus({ preventScroll: true });
      const top = $("#wizard").getBoundingClientRect().top;
      if (top < 0 || top > innerHeight * 0.5) $("#wizard").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
    }
  }
  progress.forEach((li) => $("button", li).addEventListener("click", () => {
    const n = +li.dataset.step;
    if (n > maxStep) return;
    if (n > step) { for (let s = step; s < n; s++) if (!validate(s)) return goTo(s); }
    goTo(n);
  }));
  btnPrev.addEventListener("click", () => goTo(step - 1));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (step < TOTAL) { if (validate(step)) goTo(step + 1); return; }
    for (let s = 1; s < TOTAL; s++) if (!validate(s)) return goTo(s);
    const d = data();
    lastMsg = message(d);
    const url = openWhatsApp(lastMsg);
    postJSON({ source: "reservation", ...d, dateISO: state.date });
    track(`reservation-${form.type.value}`);
    $("#wzWaAgain").href = url;
    steps.forEach((el) => (el.hidden = true));
    nav.hidden = true;
    done.hidden = false;
    progress.forEach((li) => { li.classList.remove("is-current"); li.classList.add("is-done"); });
    bar.style.width = "100%";
    done.focus();
    announce(S.ready);
  });

  $("#wzRestart").addEventListener("click", () => {
    form.reset(); state.date = null; state.time = null; maxStep = 1; syncLieu(); goTo(1);
  });

  /* .ics file for the client's calendar */
  $("#wzIcs").addEventListener("click", () => {
    if (!state.date || !state.time) return;
    const [y, m, d] = state.date.split("-").map(Number);
    const [hh, mm] = state.time.split(":").map(Number);
    const start = new Date(y, m - 1, d, hh, mm);
    const endT = new Date(start.getTime() + A.sessionMinutes * 60000);
    const f = (t) => `${t.getFullYear()}${pad(t.getMonth() + 1)}${pad(t.getDate())}T${pad(t.getHours())}${pad(t.getMinutes())}00`;
    const dd = data();
    const ics = [
      "BEGIN:VCALENDAR", "VERSION:2.0", "PRODID:-//Soufiane Zalik//Reservation//FR", "BEGIN:VEVENT",
      `UID:${Date.now()}@soufiane-zalik`, `DTSTAMP:${f(new Date())}`, `DTSTART:${f(start)}`, `DTEND:${f(endT)}`,
      `SUMMARY:${dd.type} — Soufiane Zalik ${S.icsPending}`, `LOCATION:${dd.lieu.replace(/,/g, "\\,")}`,
      `DESCRIPTION:${S.icsDesc} ${CONFIG.phoneDisplay}`, "END:VEVENT", "END:VCALENDAR",
    ].join("\r\n");
    const a = document.createElement("a");
    a.href = URL.createObjectURL(new Blob([ics], { type: "text/calendar" }));
    a.download = S.icsFile;
    document.body.appendChild(a); a.click(); a.remove();
    setTimeout(() => URL.revokeObjectURL(a.href), 1000);
  });

  /* --- Deep links: offer cards, lieu buttons, URL params --- */
  const preselect = ({ offre, lieu }) => {
    if (offre && offerById(offre)) {
      const r = form.querySelector(`input[name=type][value="${offre}"]`);
      r.checked = true; r.dispatchEvent(new Event("change"));
    }
    if (lieu === "domicile" || lieu === "salle" || lieu === "entreprise") { form.querySelector(`input[name=lieu][value=${lieu}]`).checked = true; syncLieu(); }
    if (offre && offerById(offre)) { maxStep = Math.max(maxStep, 2); goTo(2, { focus: false }); }
  };
  document.addEventListener("click", (e) => {
    const a = e.target.closest("[data-offer], [data-book-lieu]");
    if (!a) return;
    preselect({ offre: a.dataset.offer, lieu: a.dataset.bookLieu });
    setTimeout(() => $(`.wz-step[data-step="${step}"] .wz-step__title`)?.focus({ preventScroll: true }), 700);
  });
  const params = new URLSearchParams(location.search);
  goTo(1, { focus: false });
  if (params.get("offre") || params.get("lieu")) preselect({ offre: params.get("offre"), lieu: params.get("lieu") });
  syncLieu();
  // Refresh availability if the tab stays open across time
  setInterval(() => { if (step === 3) { buildCalendar(); renderSlots(); } }, 5 * 60000);
})();

/* =====================================================================
   Mobile dock: hide when booking / final CTA / footer is visible
   ===================================================================== */
(() => {
  const dock = $("#dock");
  if (!dock) return;
  const targets = ["#reserver", ".final", ".footer", ".waitlist-sec"].map((s) => $(s)).filter(Boolean);
  const visible = new Set();
  const io = new IntersectionObserver((en) => {
    en.forEach((e) => (e.isIntersecting ? visible.add(e.target) : visible.delete(e.target)));
    dock.classList.toggle("is-hidden", visible.size > 0 || scrollY < 200);
  }, { threshold: 0.05 });
  targets.forEach((t) => io.observe(t));
  addEventListener("scroll", () => dock.classList.toggle("is-hidden", visible.size > 0 || scrollY < 200), { passive: true });
  dock.classList.add("is-hidden");
})();

/* =====================================================================
   APP PAGE — live timers, tour, waitlist
   ===================================================================== */
(() => {
  const timers = $$("[data-timer]");
  if (timers.length) {
    let s = 12 * 60 + 47;
    const fmt = (v) => `${pad(Math.floor(v / 60))}:${pad(v % 60)}`;
    timers.forEach((t) => (t.textContent = fmt(s)));
    if (!reduceMotion) setInterval(() => { s++; timers.forEach((t) => (t.textContent = fmt(s))); }, 1000);
  }

  const tour = $("#tour");
  if (tour) {
    const screens = $$(".tour__phone .scr", tour);
    const items = $$(".tour__item", tour);
    const tabs = $$(".tour__tab", tour);
    const show = (id) => {
      screens.forEach((s) => s.classList.toggle("is-active", s.dataset.screen === id));
      items.forEach((s) => s.classList.toggle("is-active", s.dataset.screen === id));
      tabs.forEach((t) => { const on = t.dataset.screen === id; t.setAttribute("aria-selected", String(on)); t.tabIndex = on ? 0 : -1; });
    };
    tabs.forEach((t, i) => {
      t.addEventListener("click", () => show(t.dataset.screen));
      t.addEventListener("keydown", (e) => {
        const d = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
        if (!d) return;
        const n = tabs[(i + d + tabs.length) % tabs.length];
        n.focus(); show(n.dataset.screen);
      });
    });
    const io = new IntersectionObserver((en) => en.forEach((e) => { if (e.isIntersecting) show(e.target.dataset.screen); }), { rootMargin: "-45% 0px -45% 0px" });
    items.forEach((it) => io.observe(it));
    show(items[0].dataset.screen);
  }

  const wl = $("#waitlistForm");
  if (wl) {
    const status = $("#wlStatus");
    const setStatus = (m, t) => { status.textContent = m; status.className = "form-status" + (t ? " is-" + t : ""); };
    wl.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = wl.prenom.value.trim();
      const contact = wl.contact.value.trim();
      let ok = true;
      const mark = (el, bad, msg) => { el.closest(".field").classList.toggle("is-invalid", bad); el.setAttribute("aria-invalid", String(bad)); $("#" + el.getAttribute("aria-describedby")).textContent = bad ? msg : ""; if (bad) ok = false; };
      mark(wl.prenom, name.length < 2, S.wErrName);
      const isMail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
      const isTel = /^\d{9,15}$/.test(contact.replace(/[\s().+-]/g, ""));
      mark(wl.contact, !(isMail || isTel), S.wErrContact);
      mark(wl.consent, !wl.consent.checked, S.wErrConsent);
      if (!ok) { setStatus(S.wMissing, "error"); wl.querySelector(".is-invalid input")?.focus(); return; }
      const profil = wl.profil.value;
      const msg = [
        S.hello,
        S.wJoin,
        "",
        `- *${S.wFirst} :* ${name}`,
        `- *${S.wContact} :* ${contact}`,
        profil ? `- *${S.wProfile} :* ${profil}` : null,
        "",
        S.wNotify,
        "",
        siteTag("liste d'attente app"),
      ].filter((l) => l !== null).join("\n");
      openWhatsApp(msg);
      track("liste-attente-app");
      postJSON({ source: "liste-attente-app", prenom: name, contact, profil, consentement: new Date().toISOString() });
      setStatus(S.wOk, "ok");
      wl.reset();
    });
  }
})();
