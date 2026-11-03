import { HerbPractice, MoodEntry } from '../types';

export const HERBS_AND_PRACTICES: HerbPractice[] = [
  {
    id: 'ashwagandha',
    name: 'Ashwagandha Adaptogène',
    latinName: 'Withania somnifera',
    category: 'stress',
    categoryLabel: 'Régulation du Cortisol',
    description: 'Plante adaptogène majeure réputée pour abaisser le niveau de cortisol, modérer l\'anxiété chronique et stabiliser l\'humeur sans provoquer de somnolence diurne.',
    benefits: ['Baisse du stress physiologique', 'Protection neuronale', 'Résilience face aux surcharges'],
    psychologicalImpact: 'Atténue l\'hyperréactivité de l\'axe hypothalamo-hypophyso-surrénalien (HPA), favorisant le retour au calme mental.',
    recommendedUse: 'Cure de 4 à 6 semaines, extrait standardisé en withanolides le soir ou au petit-déjeuner.',
    badge: 'Plante Maîtresse',
    badgeColor: 'sage',
    readTime: '3 min de lecture'
  },
  {
    id: 'passiflore',
    name: 'Passiflore Apaisante',
    latinName: 'Passiflora incarnata',
    category: 'sommeil',
    categoryLabel: 'Sommeil & Ruminations',
    description: 'Fleur réputée pour désamorcer les flux de pensées incessants et l\'agitation mentale avant l\'endormissement en stimulant la voie inhibitrice GABAergique.',
    benefits: ['Facilite l\'endormissement', 'Diminue les ruminations nocturnes', 'Détend le tonus musculaire'],
    psychologicalImpact: 'Action agoniste douce sur les récepteurs GABA-A, apaisant les circuits de l\'hyper-vigilance.',
    recommendedUse: 'Infusion tiède concentrée 45 minutes avant le coucher ou extrait fluide standardisé.',
    badge: 'Sommeil Profond',
    badgeColor: 'lavender',
    readTime: '4 min de lecture'
  },
  {
    id: 'rhodiole',
    name: 'Rhodiole Rose',
    latinName: 'Rhodiola rosea',
    category: 'focus',
    categoryLabel: 'Clarté & Anti-Burnout',
    description: 'Stimule les capacités cognitives et la résistance à l\'épuisement émotionnel en optimisant la biodisponibilité de la sérotonine et de la dopamine.',
    benefits: ['Amélioration de la concentration', 'Lutte contre la fatigue mentale', 'Motivation retrouvée'],
    psychologicalImpact: 'Stimule la plasticité synaptique et combat la léthargie liée au surmenage intellectuel.',
    recommendedUse: 'Prise matinale à jeun pour une stimulation continue et sans nervosité.',
    badge: 'Clarté Mentale',
    badgeColor: 'amber',
    readTime: '3 min de lecture'
  },
  {
    id: 'melisse',
    name: 'Mélisse Officinale',
    latinName: 'Melissa officinalis',
    category: 'humeur',
    categoryLabel: 'Équilibre Digestif & Émotif',
    description: 'Idéale lors de somatisations digestives du stress ("l\'estomac noué") et d\'irritabilité passagère. Une alliée séculaire pour adoucir le quotidien.',
    benefits: ['Calme les spasmes nerveux', 'Action anxiolytique douce', 'Améliore le confort somatique'],
    psychologicalImpact: 'Favorise la communication neuro-entérique (axe intestin-cerveau) et détend les tensions viscérales.',
    recommendedUse: 'Infusion de feuilles fraîches ou séchées après les repas sous tension.',
    badge: 'Douceur & Sérénité',
    badgeColor: 'sage',
    readTime: '2 min de lecture'
  },
  {
    id: 'lavande-vraie',
    name: 'Lavande Vraie',
    latinName: 'Lavandula angustifolia',
    category: 'stress',
    categoryLabel: 'Olfactothérapie & Système Nerveux',
    description: 'Riche en linalol et acétate de linalyle, la lavande régule le système parasympathique par simple olfaction ou application cutanée diluée.',
    benefits: ['Ralentissement du rythme cardiaque', 'Sensation instantanée de sécurité', 'Apaisement de la nervosité'],
    psychologicalImpact: 'Agit directement sur l\'amygdale cérébrale via les voies olfactives limbiques, réduisant la réaction de panique.',
    recommendedUse: '3 gouttes sur un mouchoir à respirer profondément ou diffusion atmosphérique douce.',
    badge: 'Neuro-Olfactif',
    badgeColor: 'lavender',
    readTime: '3 min de lecture'
  },
  {
    id: 'camomille',
    name: 'Camomille Noble',
    latinName: 'Chamaemelum nobile',
    category: 'sommeil',
    categoryLabel: 'Relaxation & Lâcher-prise',
    description: 'Une grande classique aux propriétés neuro-sédatives légères, particulièrement indiquée chez les personnes hypersensibles ou hypersolicitées.',
    benefits: ['Détente globale', 'Sommeil continu', 'Soulagement des crispations'],
    psychologicalImpact: 'L\'apigénine se lie aux récepteurs benzodiazépiniques sans effet d\'accoutumance ni dépendance.',
    recommendedUse: 'Rituel d\'infusion vespérale associé à 5 minutes de respiration lente.',
    badge: 'Rituel Soir',
    badgeColor: 'sage',
    readTime: '3 min de lecture'
  }
];

export const MOOD_OPTIONS: MoodEntry[] = [
  {
    mood: 'serene',
    label: 'Équilibré & Serein',
    emoji: '🌿',
    color: 'border-sage-400 bg-sage-50 text-sage-800',
    advice: 'Votre esprit est posé. Profitez de cet état pour consolider vos habitudes positives et ancrer ce calme intérieur.'
  },
  {
    mood: 'calm',
    label: 'Paisible',
    emoji: '🌸',
    color: 'border-lavender-400 bg-lavender-50 text-lavender-800',
    advice: 'Une énergie douce et stable. Une tasse de mélisse ou un exercice de gratitude préservera cette harmonie.'
  },
  {
    mood: 'neutral',
    label: 'Neutre / Distrait',
    emoji: '🍃',
    color: 'border-warmth-300 bg-warmth-50 text-amber-900',
    advice: 'Prenez 3 minutes pour une courte pause de respiration consciente pour vous reconnecter à votre corps.'
  },
  {
    mood: 'stressed',
    label: 'Tendu / Anxieux',
    emoji: '⚡',
    color: 'border-amber-400 bg-amber-50 text-amber-900',
    advice: 'Le système nerveux est en sur-régime. Activez la cohérence cardiaque ci-dessous pour faire baisser le cortisol.'
  },
  {
    mood: 'exhausted',
    label: 'Épuisé / Débordé',
    emoji: '🌙',
    color: 'border-indigo-400 bg-indigo-50 text-indigo-900',
    advice: 'Votre corps réclame une mise au repos urgente. Ralentissez vos obligations, hydratez-vous et prévoyez une soirée déconnectée.'
  }
];

