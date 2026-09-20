export interface AyurvedicProperties {
  rasa: string; // Taste (e.g., Kashaya, Tikta)
  guna: string; // Qualities (e.g., Laghu, Ruksha)
  virya: string; // Potency (e.g., Ushna, Sheeta)
  vipaka: string; // Post-digestive effect (e.g., Katu, Madhura)
  prabhava?: string; // Special action (e.g., Grahini, Rasayana)
  doshaKarma: string; // Balance Vata, Pitta, Kapha
}

export interface ResearchPossibility {
  formulationType: string; // e.g. "Herbal syrup", "Herbal gel", "Herbal powder", "Herbal tablet"
  plantPart: string; // e.g. "Fruit", "Leaf", "Root"
  rationale: string;
  evaluationParameters: string;
}

export interface PlantQuiz {
  question: string;
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
}

export interface MedicinalPlant {
  id: string;
  name: string;
  marathiName: string; // Marathi script
  botanicalName: string;
  family: string;
  partUsed: string;
  image: string;
  traditionalUses: string[];
  safetyPrecautions: string[];
  phytochemicals: string[];
  dosageForms: string[];
  ayurvedicProperties: AyurvedicProperties;
  researchPossibilities: ResearchPossibility[];
  quiz: PlantQuiz;
  tags: string[];
}

export interface FormulationProtocol {
  title: string;
  plantName: string;
  botanicalName: string;
  plantPart: string;
  dosageForm: string;
  targetActiveMarkers: string[];
  extractionProtocol: {
    method: string;
    solventRatio: string;
    parameters: string;
  };
  formulationMatrix: Array<{
    ingredient: string;
    role: string;
    concentration: string;
  }>;
  evaluationParameters: {
    physical: Array<{ parameter: string; acceptanceCriteria: string }>;
    chemical: Array<{ parameter: string; acceptanceCriteria: string }>;
    pharmacological: Array<{ parameter: string; acceptanceCriteria: string }>;
    stability: Array<{ parameter: string; acceptanceCriteria: string }>;
  };
  noveltyAndInnovation: string;
  regulatoryAndICHNotes: string;
}

export interface DailyTip {
  plantName: string;
  botanicalName: string;
  tip: string;
  practicalUse: string;
  doshaBenefit: string;
}

export type ActiveTab = 'home' | 'scan' | 'search' | 'research' | 'quiz' | 'favorites';
