export interface Prestation {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  publicCible: string;
  deroulement: string;
  duree: string;
  lieux: string[];
  iconName: string;
  tag: string;
  badgeColor: string;
  image: string;
}

export interface PracticalGuide {
  id: string;
  title: string;
  theme: 'parents' | 'couple' | 'stress' | 'handicap' | 'maladies' | 'entreprise';
  themeLabel: string;
  readTime: string;
  type: 'Fiche PDF' | 'Check-list' | 'Guide pratique';
  summary: string;
  points: string[];
  image: string;
  downloadUrl?: string;
}

export interface HeroSlide {
  id: number;
  tag: string;
  title: string;
  highlight: string;
  subtitle: string;
  primaryAction: { label: string; href: string };
  secondaryAction: { label: string; href: string };
  image: string;
  badgeText: string;
  badgeSub: string;
}

export const CABINET_INFO = {
  name: "Le Psy Herb",
  devise: "Le Psy Herb pour vous soulager !",
  sousTitre: "Prise en charge psychologique et psychopathologique de l'enfant et de l'adulte",
  statut: "Cabinet d'expertise psychologique",
  praticien: {
    nom: "Dr. KONE Sionfolo Mohamed",
    titres: "Chercheur • Psychologue clinicien • Psychopathologue • Psychothérapeute",
    description: "Spécialiste de la santé mentale et des thérapies psycho-corporelles à Abidjan, dédié à une écoute empathique, une rigueur scientifique éprouvée et un accompagnement adapté à chaque étape de vie."
  },
  adresse: "Cocody, Riviera 3, Abidjan — Côte d'Ivoire",
  telephone: "+225 07 77 28 51 02",
  telephoneRaw: "+2250777285102",
  email: "sionfolok@gmail.com",
  horaires: "Lundi au samedi : 08h00 – 19h00 (sur rendez-vous)",
  whatsappUrl: "https://wa.me/2250777285102?text=Bonjour%20Dr.%20KONE,%20je%20vous%20contacte%20depuis%20le%20site%20Le%20Psy%20Herb%20pour%20une%20demande%20d'information%20ou%20prise%20de%20rendez-vous."
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    tag: "Cabinet d'expertise psychologique",
    title: "Le Psy Herb pour vous",
    highlight: "soulager !",
    subtitle: "Prise en charge psychologique et psychopathologique de l'enfant et de l'adulte à Cocody, Riviera 3. Une écoute bienveillante et des solutions thérapeutiques adaptées.",
    primaryAction: { label: "Prendre un rendez-vous", href: "#rendez-vous" },
    secondaryAction: { label: "WhatsApp direct", href: CABINET_INFO.whatsappUrl },
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80",
    badgeText: "Écoute et soulagement",
    badgeSub: "Enfant, adulte, couple"
  },
  {
    id: 2,
    tag: "Consultation et thérapie clinique",
    title: "Retrouvez l'équilibre",
    highlight: "intérieur et familial.",
    subtitle: "Des consultations en cabinet, en entreprise ou en privé par le Dr. KONE Sionfolo Mohamed. Psychothérapie individuelle, thérapie de couple et coaching parental bienveillant.",
    primaryAction: { label: "Explorer nos 9 prestations", href: "#prestations" },
    secondaryAction: { label: "Rencontrer le psychologue", href: "#cabinet" },
    image: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?auto=format&fit=crop&w=1200&q=80",
    badgeText: "Dr. KONE Sionfolo M.",
    badgeSub: "Psychologue clinicien"
  },
  {
    id: 3,
    tag: "Ressources et guides pratiques",
    title: "Des clés concrètes pour",
    highlight: "mieux vivre au quotidien.",
    subtitle: "Fiches téléchargeables, astuces d'éducation positive, soutien aux aidants face aux maladies chroniques et gestion saine des conflits professionnels.",
    primaryAction: { label: "Accéder aux astuces et guides", href: "#astuces" },
    secondaryAction: { label: "Cohérence cardiaque 5/5", href: "#relaxation" },
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=1200&q=80",
    badgeText: "Guides et outils pratiques",
    badgeSub: "Téléchargement libre"
  }
];

export const PRESTATIONS_DATA: Prestation[] = [
  {
    id: "consultation-cabinet-entreprise-prive",
    number: "01",
    title: "Consultation en cabinet, en entreprise, en privé",
    shortDescription: "Entretiens psychologiques personnalisés et flexibles selon votre cadre de vie et vos impératifs professionnels.",
    fullDescription: "Cette consultation s'adapte à vos besoins spécifiques : en toute intimité dans notre cabinet de Cocody Riviera 3, au sein de votre entreprise pour le bien-être des collaborateurs, ou en privé à domicile pour les situations nécessitant un déplacement.",
    publicCible: "Adultes, cadres et salariés d'entreprises, particuliers nécessitant une prise en charge à domicile.",
    deroulement: "Premier entretien d'analyse de la demande, définition des axes de travail et cadrage de la fréquence des séances.",
    duree: "45 à 60 minutes",
    lieux: ["Cabinet Riviera 3", "Entreprise", "À domicile / Privé"],
    iconName: "Building2",
    tag: "Polyvalent",
    badgeColor: "bg-psy-paleSky text-psy-blue",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ecoute-entretien-aide",
    number: "02",
    title: "Écoute et entretien psychologique d'aide",
    shortDescription: "Un espace neutre, sécurisant et sans jugement pour déposer votre parole et clarifier vos questionnements.",
    fullDescription: "Face à une situation de doute, de crise existentielle, de séparation ou de transition difficile, l'entretien d'aide offre une écoute active inconditionnelle visant à mobiliser vos propres ressources de résilience.",
    publicCible: "Toute personne traversant une période d'impasse, de tristesse ou de questionnement.",
    deroulement: "Dialogue ouvert, reformulation empathique et identification des leviers d'action immédiats.",
    duree: "45 à 60 minutes",
    lieux: ["Cabinet Riviera 3", "Téléconsultation"],
    iconName: "MessageCircleHeart",
    tag: "Essentiel",
    badgeColor: "bg-sage-100 text-psy-action",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ventilation-psychique",
    number: "03",
    title: "Ventilation psychique / psychologique",
    shortDescription: "Libération émotionnelle pour décharger le trop-plein mental, la surcharge cognitive et les traumatismes récents.",
    fullDescription: "La ventilation psychologique est un protocole de décompression rapide destiné à désamorcer le trop-plein émotionnel après un événement choquant, un stress aigu ou un surmenage intense.",
    publicCible: "Personnes en surcharge mentale, victimes d'accidents ou de stress aigu, soignants et secouristes.",
    deroulement: "Accueil bienveillant de la parole brute, décharge des affects douloureux et techniques d'ancrage somatique.",
    duree: "50 minutes",
    lieux: ["Cabinet Riviera 3", "En entreprise", "Urgences"],
    iconName: "Wind",
    tag: "Décompression",
    badgeColor: "bg-psy-mintSoft text-psy-action",
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "bilan-psychologique-complet",
    number: "04",
    title: "Bilan psychologique complet",
    shortDescription: "Évaluation clinique approfondie de la personnalité, de la sphère affective et des aptitudes cognitives.",
    fullDescription: "Le bilan permet de poser un diagnostic précis ou d'éclairer une orientation éducative ou professionnelle. Il comprend une anamnèse clinique, des tests standardisés et la remise d'un compte-rendu écrit détaillé.",
    publicCible: "Enfants (difficultés scolaires, agitation), adolescents, adultes en quête de diagnostic.",
    deroulement: "2 à 3 séances de passation de tests d'évaluation suivies d'une séance de restitution avec rapport officiel.",
    duree: "3 séances complètes",
    lieux: ["Cabinet Riviera 3"],
    iconName: "ClipboardCheck",
    tag: "Diagnostic",
    badgeColor: "bg-psy-paleSky text-psy-navy",
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "suivi-accompagnement",
    number: "05",
    title: "Suivi, accompagnement psychologique",
    shortDescription: "Programme continu pour ancrer des changements durables et prévenir les rechutes dépressives ou anxieuses.",
    fullDescription: "Un suivi structuré et régulier qui chemine avec vous pour consolider vos acquis psychologiques, travailler sur vos schémas relationnels et développer une autonomie émotionnelle pérenne.",
    publicCible: "Enfants, adolescents et adultes nécessitant un soutien régulier dans le temps.",
    deroulement: "Séances hebdomadaires ou bimensuelles avec objectifs convenus d'un commun accord.",
    duree: "45 minutes / séance",
    lieux: ["Cabinet Riviera 3", "À distance"],
    iconName: "TrendingUp",
    tag: "Continuité",
    badgeColor: "bg-emerald-50 text-emerald-800",
    image: "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "soins-polyhandicap",
    number: "06",
    title: "Soins psychologiques en lien au polyhandicap",
    shortDescription: "Accompagnement adapté pour les personnes en situation de handicap complexe et soutien primordial aux familles.",
    fullDescription: "Prise en charge psychothérapeutique adaptée aux altérations physiques et cognitives, en lien étroit avec l'équipe pluridisciplinaire et un soutien psychologique fort apporté aux aidants familiaux.",
    publicCible: "Enfants et adultes polyhandicapés, fratries, parents et équipes d'accompagnement.",
    deroulement: "Approche sensorielle, communication alternative et entretiens de décharge pour les aidants.",
    duree: "Séance sur-mesure",
    lieux: ["Cabinet Riviera 3", "À domicile", "Structures spécialisées"],
    iconName: "Accessibility",
    tag: "Spécialisé",
    badgeColor: "bg-amber-50 text-amber-800",
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "soins-palliatifs-maladies-chroniques",
    number: "07",
    title: "Soins palliatifs en lien aux maladies chroniques",
    shortDescription: "Présence empathique et soutien psychologique dans l'épreuve de la maladie grave ou en fin de vie.",
    fullDescription: "Un accompagnement axé sur la dignité, la gestion de l'angoisse de mort, le soulagement de la souffrance morale et le travail de deuil pour les patients et leurs proches.",
    publicCible: "Patients atteints de pathologies lourdes (cancer, insuffisances organiques, etc.) et leurs familles.",
    deroulement: "Entretiens de soutien au chevet du patient ou en cabinet, accompagnement au deuil.",
    duree: "Selon tolérance du patient",
    lieux: ["À domicile", "Établissements de santé", "Cabinet"],
    iconName: "HeartPulse",
    tag: "Humanité",
    badgeColor: "bg-rose-50 text-rose-800",
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "psychotherapie-individuelle-groupale",
    number: "08",
    title: "Psychothérapie individuelle ou groupale",
    shortDescription: "Thérapie par la parole et méthodes psycho-dynamiques pour dépasser les troubles anxieux et de l'humeur.",
    fullDescription: "Pratique thérapeutique visant à traiter en profondeur les phobies, l'angoisse généralisée, les épisodes dépressifs et les difficultés d'estime de soi, individuellement ou en dynamique de groupe bienveillante.",
    publicCible: "Toute personne souffrant de difficultés psychologiques répétitives.",
    deroulement: "Cadre confidentiel strict, régularité des séances, exploration des causes et mise en place de nouvelles stratégies.",
    duree: "50 min (individuel) / 90 min (groupe)",
    lieux: ["Cabinet Riviera 3"],
    iconName: "Users",
    tag: "Profondeur",
    badgeColor: "bg-psy-paleSky text-psy-blue",
    image: "https://images.unsplash.com/photo-1573497019236-17f8177b81e8?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "couple-coaching-parental",
    number: "09",
    title: "Psychothérapie de couple et coaching parental",
    shortDescription: "Restauration du dialogue amoureux et outils d'autorité positive pour une vie de famille apaisée.",
    fullDescription: "Aide les partenaires à sortir des cercles vicieux de reproches et d'incompréhension, et guide les parents désemparés face aux comportements difficiles, colères ou troubles scolaires de leurs enfants.",
    publicCible: "Couples en crise ou en questionnement, parents d'enfants et d'adolescents.",
    deroulement: "Médiation guidée, exercices de communication non-violente et protocoles éducatifs concrets.",
    duree: "60 à 75 minutes",
    lieux: ["Cabinet Riviera 3"],
    iconName: "HeartHandshake",
    tag: "Famille et couple",
    badgeColor: "bg-psy-mintSoft text-psy-action",
    image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=600&q=80"
  }
];

export const PRACTICAL_GUIDES: PracticalGuide[] = [
  {
    id: "3-phrases-enfant",
    title: "3 phrases essentielles pour sécuriser votre enfant face à l'angoisse",
    theme: "parents",
    themeLabel: "Parents et enfants",
    readTime: "3 min de lecture",
    type: "Fiche PDF",
    summary: "Découvrez les mots précis qui activent le sentiment de sécurité intérieure chez l'enfant et désamorcent immédiatement les crises d'angoisse ou de colère.",
    points: [
      "« Je vois que tu as peur, et je suis là avec toi » : valider l'émotion sans la minimiser.",
      "« Ton corps réagit normalement, respire avec moi » : ramener l'attention au corps.",
      "« Ensemble, nous trouverons une solution » : sortir de la solitude de l'angoisse."
    ],
    image: "https://images.unsplash.com/photo-1476703993599-0035a21b17a9?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "gerer-conflit-sans-aggraver",
    title: "Gérer un conflit professionnel ou de couple sans l'aggraver",
    theme: "entreprise",
    themeLabel: "Entreprise et conflits",
    readTime: "4 min de lecture",
    type: "Check-list",
    summary: "Méthode en 5 étapes pour désamorcer l'agressivité verbale, sortir du rapport de force et restaurer une négociation constructive.",
    points: [
      "La règle du temps mort de 20 minutes (baisse de l'amygdale cérébrale).",
      "Exprimer ses besoins avec le « Je » sans accuser avec le « Tu ».",
      "Reformuler les propos de l'autre pour valider l'écoute avant de répondre."
    ],
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "accompagner-proche-maladie-chronique",
    title: "Accompagner un proche atteint d'une maladie chronique sans s'épuiser",
    theme: "maladies",
    themeLabel: "Maladies chroniques",
    readTime: "5 min de lecture",
    type: "Guide pratique",
    summary: "Conseils du psychologue clinicien pour préserver la santé mentale des aidants et éviter le syndrome d'épuisement émotionnel.",
    points: [
      "Reconnaître les signes précurseurs du burn-out de l'aidant.",
      "Maintenir des espaces personnels sacrés et sans culpabilité.",
      "Déléguer les soins logistiques pour préserver la relation affective."
    ],
    image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "communication-couple-bienveillante",
    title: "Sortir des reproches : reconnecter le dialogue dans le couple",
    theme: "couple",
    themeLabel: "Couple et famille",
    readTime: "4 min de lecture",
    type: "Fiche PDF",
    summary: "Comment transformer une critique destructrice en une demande claire et renouer avec la complicité affective des débuts.",
    points: [
      "Remplacer le reproche par l'expression sincère de sa vulnérabilité.",
      "Le rituel des 10 minutes d'écoute sans interruption chaque soir.",
      "Redécouvrir la gratitude quotidienne pour les petits gestes du partenaire."
    ],
    image: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "sommeil-ruminations-nocturnes",
    title: "Désamorcer le petit vélo mental et retrouver un sommeil réparateur",
    theme: "stress",
    themeLabel: "Stress et émotions",
    readTime: "3 min de lecture",
    type: "Check-list",
    summary: "Techniques psychologiques concrètes pour stopper les ruminations nocturnes et préparer le système nerveux au repos.",
    points: [
      "Le carnet de décharge mentale à poser sur la table de chevet.",
      "La cohérence cardiaque 5/5 pratiquée 15 minutes avant d'éteindre la lumière.",
      "La défocalisation cognitive pour calmer l'hyper-vigilance cérébrale."
    ],
    image: "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "soutien-famille-polyhandicap",
    title: "Guide de soutien psychologique pour les familles touchées par le polyhandicap",
    theme: "handicap",
    themeLabel: "Polyhandicap et famille",
    readTime: "6 min de lecture",
    type: "Guide pratique",
    summary: "Un guide chaleureux pour soutenir le moral des parents, intégrer la fratrie et rompre l'isolement social.",
    points: [
      "Préserver l'équilibre de la fratrie et l'attention accordée à chaque enfant.",
      "Créer un réseau de relais bienveillants et d'entraide communautaire.",
      "Accueillir le deuil de l'enfant idéal pour célébrer chaque progrès réel."
    ],
    image: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80"
  }
];

