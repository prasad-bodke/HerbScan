import { MedicinalPlant } from '../types';

export const USER_HERBS_PART1: MedicinalPlant[] = [
  {
    id: 'aloes',
    name: 'Aloes (Aloe Vera)',
    marathiName: 'कोरफड',
    botanicalName: 'Aloe barbadensis Miller (Aloe vera)',
    family: 'Asphodelaceae (Liliaceae)',
    partUsed: 'Succulent Leaves, Leaf Gel, Dried Leaf Juice (Aloes)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Aloe_arborescens_on_Monte_Vumba_%284387600468%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original',
    traditionalUses: [
      'Topical application of inner gel for 1st & 2nd degree burn healing, sunburn, and skin hydration.',
      'Aloin-containing dried juice acts as a potent anthraquinone stimulant laxative in chronic constipation.',
      'Kumaryasava is an ancient Ayurvedic fermented formulation for liver enlargement, spleen disorders, and amenorrhea.',
      'Soothes gastritis, acid reflux, and mucosal inflammation when decolorized gel is consumed.'
    ],
    safetyPrecautions: [
      'Whole leaf extracts containing latex/aloin should never be consumed during pregnancy as it causes uterine contractions.',
      'Contraindicated in intestinal obstruction, Crohn’s disease, ulcerative colitis, and severe dehydration.',
      'Prolonged use of anthraquinone latex can cause potassium depletion (hypokalemia).'
    ],
    sideEffects: [
      'Abdominal cramping, griping pain, and severe watery diarrhea from the yellow latex (Aloin).',
      'Electrolyte disturbances (hypokalemia) with chronic internal misuse.',
      'Melanosis coli (pigmentation of the colonic mucosa) reversible upon discontinuation.',
      'Contact dermatitis or skin erythema in rare individuals allergic to Liliaceae.'
    ],
    phytochemicals: [
      'Barbaloin (Aloin A and B - anthrone C-glycosides)',
      'Acemannan (immunostimulatory acetylated polymannose)',
      'Aloe-emodin and Chrysophanol',
      'Aloesin and Aloeresin A',
      'Enzymes (Bradykinase, Amylase, Catalase)'
    ],
    dosageForms: [
      'Fresh Leaf Gel: 20 to 30 mL on empty stomach',
      'Kumaryasava: 15 to 25 mL with equal volume of water',
      'Purified Aloe Powder (Cape/Curacao Aloes): 100 to 250 mg',
      'Topical Hydrogel: 0.5% to 70% stabilized gel'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Madhura (Sweet)',
      guna: 'Guru (Heavy), Snigdha (Unctuous), Picchila (Slimy)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Bhedana (Purgative), Rasayana (Rejuvenative)',
      doshaKarma: 'Pacifies Pitta and Kapha dosha; cleanses blood (Raktashodhaka)'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Inner Leaf Parenchyma Gel',
        rationale: 'Nanostructured lipid carrier (NLC) enriched Acemannan hydrogel for accelerated diabetic foot ulcer healing.',
        evaluationParameters: 'Viscosity, Acemannan molecular weight distribution, In vitro keratinocyte proliferation assay, Wound closure rate.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Decolorized Leaf Juice',
        rationale: 'Sustained-release gastroprotective mucosal suspension combining Aloe vera gel with Yashtimadhu for GERD management.',
        evaluationParameters: 'Acid-neutralizing capacity, Viscosity, Bioadhesion on gastric mucosa, Accelerated stability per ICH.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Barbaloin Leaf Extract',
        rationale: 'Enteric-coated colon-targeted microtablets for controlled colonic motility stimulation.',
        evaluationParameters: 'Disintegration in simulated gastric vs intestinal fluid, In vitro dissolution kinetics, HPLC assay of Barbaloin.'
      }
    ],
    quiz: {
      question: 'Which polysaccharide found in inner Aloe vera gel is primarily responsible for its tissue regeneration and wound healing properties?',
      options: ['Acemannan', 'Barbaloin', 'Inulin', 'Pectin'],
      correctAnswerIndex: 0,
      explanation: 'Acemannan is an acetylated polymannose found in the leaf parenchyma that stimulates macrophages and fibroblast collagen synthesis.'
    },
    tags: ['Skin', 'Laxative', 'Liver', 'Wound Healing', 'Burn']
  },
  {
    id: 'senna',
    name: 'Indian Senna (Sonamukhi)',
    marathiName: 'सोनामुखी (सनाय)',
    botanicalName: 'Cassia angustifolia Vahl (Senna alexandrina Mill.)',
    family: 'Fabaceae (Caesalpiniaceae)',
    partUsed: 'Dried Leaflets, Pods (Legumes)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/46/Senna_alexandrina_02.jpg',
    traditionalUses: [
      'Standardized stimulant laxative widely indicated for acute constipation and pre-radiological bowel evacuation.',
      'Used in Ayurvedic formulations like Panchasakar Churna and Swadista Virechan Churna to clear Pitta and digestive toxins.',
      'Assists in treating hemorrhoids and anal fissures by softening stool consistency.',
      'Pods exhibit milder action compared to leaves with significantly less intestinal cramping.'
    ],
    safetyPrecautions: [
      'Should NOT be used for more than 7 consecutive days without medical supervision.',
      'Strictly contraindicated in suspected bowel obstruction, acute appendicitis, and undiagnosed abdominal pain.',
      'Contraindicated in pregnancy due to reflex uterine stimulation and nursing mothers as sennosides pass into breast milk.'
    ],
    sideEffects: [
      'Abdominal griping and spasmodic cramps (often counteracted by formulating with carminatives like Fennel or Ginger).',
      'Electrolyte loss, particularly hypokalemia, with chronic laxative abuse.',
      'Pseudomelanosis coli (reversible dark brown pigmentation of colorectal mucosa).',
      'Albuminuria and hematuria in severe acute overdose.'
    ],
    phytochemicals: [
      'Sennosides A and B (dianthrone glucosides - primary purgative markers)',
      'Sennosides C and D',
      'Rhein and Aloe-emodin',
      'Kaempferol and Isorhamnetin flavonoids',
      'Mucilage and tartaric acid'
    ],
    dosageForms: [
      'Senna Leaf Churna (Powder): 0.5 to 2 g before bedtime',
      'Senna Pod Infusion: 3 to 6 pods steeped in warm water',
      'Standardized Sennoside Tablets: 10 to 20 mg calculated as Sennoside B',
      'Panchasakar Churna: 2 to 4 g with warm water'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent post-digestive)',
      prabhava: 'Sukha-Virechana (Gentle purgative)',
      doshaKarma: 'Pacifies Pitta and Kapha dosha; expels accumulated morbid Pitta through the bowel'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Dried Leaflet Extract',
        rationale: 'Directly compressible chewable tablet formulated with microencapsulated Sennosides and enteric coating to eliminate gastric irritation.',
        evaluationParameters: 'Friability, Disintegration time (< 15 min), HPLC Sennoside A & B assay (min 15 mg/tab), Taste-masking evaluation.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Senna Pod Decoction',
        rationale: 'Pediatric palatable laxative syrup combining Senna pod extract with Prune juice concentrate and Fennel volatile oil.',
        evaluationParameters: 'Viscosity, Microbial limit testing, Total hydroxyanthracene glycoside assay, pH stability.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micro-pulverized leaves',
        rationale: 'Effervescent sachet formulation yielding rapid complete dissolution without gritty mouthfeel.',
        evaluationParameters: 'Effervescence cessation time, Moisture content, Flowability index, Particle size distribution.'
      }
    ],
    quiz: {
      question: 'Which active dianthrone glycosides are the primary pharmacological markers of Senna (Cassia angustifolia)?',
      options: ['Sennosides A & B', 'Ginsenosides Rg1', 'Quinine & Quinidine', 'Atropine & Scopolamine'],
      correctAnswerIndex: 0,
      explanation: 'Sennosides A and B are stereoisomeric dianthrone glycosides hydrolysed by colonic microflora into active rhein-anthrone.'
    },
    tags: ['Laxative', 'Constipation', 'Bowel', 'Detox', 'Digestive']
  },
  {
    id: 'digitalis',
    name: 'Digitalis (Foxglove)',
    marathiName: 'डिजिटलिस (फॉक्सग्लोव्ह)',
    botanicalName: 'Digitalis purpurea L. / Digitalis lanata Ehrh.',
    family: 'Plantaginaceae (Scrophulariaceae)',
    partUsed: 'Dried Leaves (harvested in 2nd year of growth during flowering)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Digitalis_purpurea_LC0101.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original',
    traditionalUses: [
      'Historical cardiotonic discovered by William Withering (1785) for the treatment of congestive heart failure and cardiac edema (dropsy).',
      'Rate-control agent in atrial fibrillation, atrial flutter, and supraventricular tachycardias.',
      'Acts via positive inotropic effect (increases myocardial contraction force) and negative chronotropic effect (decreases heart rate).'
    ],
    safetyPrecautions: [
      'HIGHLY TOXIC PRESCRIPTION BOTANICAL. Overdose can be rapidly fatal.',
      'Extremely narrow therapeutic window (serum digoxin concentration 0.5–0.9 ng/mL).',
      'Serum potassium levels must be maintained; hypokalemia dramatically potentiates digitalis toxicity and life-threatening arrhythmias.'
    ],
    sideEffects: [
      'Cardiac dysrhythmias: ventricular premature beats, bigeminy, AV block, and ventricular tachycardia.',
      'Visual disturbances: xanthopsia (yellow-green halos around light objects), blurred vision.',
      'Gastrointestinal toxicity: anorexia, severe nausea, vomiting, and diarrhea.',
      'Neurological effects: confusion, delirium, hallucination, fatigue, and headache.'
    ],
    phytochemicals: [
      'Digitoxin and Gitoxin (Digitalis purpurea)',
      'Digoxin and Lanatosides A, B, C, D, E (Digitalis lanata)',
      'Purpurea glycosides A and B',
      'Saponins (Digitonin, Gitonin - assist absorption)'
    ],
    dosageForms: [
      'CRITICAL: Never used as home raw herb or crude herbal powder.',
      'Standardized Digoxin Tablets: 0.0625 mg to 0.25 mg (Pure pharmaceutical entity)',
      'Intravenous Digoxin: 0.1 to 0.25 mg/mL for emergency cardiac care'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Tikshna (Extremely sharp/toxic), Ruksha (Dry)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent post-digestive)',
      prabhava: 'Hridya (Potent cardiac inotrope - Upavisha/poison category)',
      doshaKarma: 'Alleviates Vata-Kapha related cardiac lethargy, but causes Pitta and Rakta aggravation in toxicity'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Digitalis Glycoside Fraction',
        rationale: 'Sublingual fast-dissolving micro-matrix system with zero-order release kinetics to prevent peak-concentration cardiac toxicity.',
        evaluationParameters: 'Content uniformity (USP <905>), Disintegration in < 30 seconds, LC-MS/MS quantification, Dissolution profile.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Standardized Leaf Extract',
        rationale: 'Biological assay standardization of cardenolide activity utilizing guinea-pig Langendorff isolated heart perfusion model.',
        evaluationParameters: 'Inotropic vs chronotropic ratio, HPLC glycoside profile, Loss on drying (< 5% to prevent enzyme hydrolysis of glycosides).'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Root/foliage cardiotonic fraction',
        rationale: 'Transdermal iontophoretic patch delivery with micro-reservoir design to achieve steady plasma concentration without GI exposure.',
        evaluationParameters: 'In vitro skin permeation flux, Patch adhesion peel strength, Drug-excipient compatibility via FTIR.'
      }
    ],
    quiz: {
      question: 'What is the characteristic visual disturbance diagnostic of digitalis toxicity?',
      options: ['Xanthopsia (Yellow-green tinted vision)', 'Nyctalopia (Night blindness)', 'Complete color blindness', 'Mydriasis (Pupillary dilation)'],
      correctAnswerIndex: 0,
      explanation: 'Digitalis toxicity causes xanthopsia where patients perceive yellow-green halos around objects and lights due to retinal cone cell inhibition.'
    },
    tags: ['Cardiac', 'Heart', 'Alkaloid', 'Prescription', 'Foxglove']
  },
  {
    id: 'ginseng',
    name: 'Ginseng (Asian Ginseng)',
    marathiName: 'जिनसेंग',
    botanicalName: 'Panax ginseng C.A. Meyer',
    family: 'Araliaceae',
    partUsed: 'Dried Taproot and Rhizome (White Ginseng & Red Steamed Ginseng)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Panax_ginseng_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-101.jpg',
    traditionalUses: [
      'Supreme adaptogen in Traditional Oriental Medicine for replenishing primordial Qi, enhancing stamina, and longevity.',
      'Clinically demonstrated to improve cognitive function, working memory, reaction time, and mental endurance.',
      'Boosts immune resistance, stimulates NK-cell activity, and reduces frequency of upper respiratory infections.',
      'Supports erectile dysfunction and athletic physical performance by boosting nitric oxide synthesis.'
    ],
    safetyPrecautions: [
      'Avoid high doses in uncontrolled hypertension or cardiac arrhythmias.',
      'Contraindicated in acute inflammatory fevers or severe anxiety states.',
      'May interact with MAO inhibitors, warfarin (reduces anticoagulant efficacy), and hypoglycemic agents.'
    ],
    sideEffects: [
      'Insomnia, restlessness, and nervousness if taken late in the evening.',
      'Elevated blood pressure or palpitations in susceptible individuals (Ginseng Abuse Syndrome).',
      'Mild mastalgia (breast tenderness) and postmenopausal vaginal bleeding due to phytoestrogenic effects.',
      'Diarrhea, skin rash, or headache with prolonged mega-dosing.'
    ],
    phytochemicals: [
      'Ginsenosides (Rb1, Rb2, Rc, Rd, Re, Rf, Rg1, Rg3 - dammarane triterpenoid saponins)',
      'Panaxans (hypoglycemic peptidoglycans A through U)',
      'Polyacetylenes (Panaxynol, Panaxydol)',
      'Sesquiterpenes and Polysaccharides'
    ],
    dosageForms: [
      'Standardized Root Extract (4-7% Ginsenosides): 200 to 400 mg daily',
      'Crude Root Powder: 1 to 2 g daily',
      'Red Ginseng Decoction: 3 to 9 g simmered in water',
      'Effervescent Ginseng Tonic: 100 mg extract'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura (Sweet), Tikta (Bitter)',
      guna: 'Guru (Heavy), Snigdha (Unctuous)',
      virya: 'Ushna (Mild warming potency)',
      vipaka: 'Madhura (Sweet post-digestive)',
      prabhava: 'Rasayana (Deep Ojas builder and physical invigorator)',
      doshaKarma: 'Balances Vata and Kapha; in excessive doses can elevate Pitta'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Fermented Red Ginseng Extract (Enriched in Compound K)',
        rationale: 'Bilayer sublingual tablet using microencapsulated Compound K for immediate nootropic mental focus without digestive degradation.',
        evaluationParameters: 'Content uniformity, HPLC of Compound K and Ginsenoside Rg3, In vitro intestinal permeability (Caco-2 cell model).'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Standardized Aqueous Root Extract',
        rationale: 'Bio-energizing sports adaptogenic tonic combining Panax ginseng with Ashwagandha and B-complex vitamins.',
        evaluationParameters: 'Viscosity, Total ginsenoside retention, DPPH radical scavenging assay, Accelerated shelf-life.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micronized White Ginseng Taproot',
        rationale: 'Freeze-dried dispersible powder with instant cold water reconstitution for geriatric physical stamina recovery.',
        evaluationParameters: 'Reconstitution time, Particle size D90, Moisture sorption isotherm, Total polysaccharide content.'
      }
    ],
    quiz: {
      question: 'Which class of bioactive triterpene saponins is specific to Panax species and dictates its adaptogenic benefits?',
      options: ['Ginsenosides', 'Withanolides', 'Sennosides', 'Forskolin'],
      correctAnswerIndex: 0,
      explanation: 'Ginsenosides are unique triterpenoid dammarane saponins classified into protopanaxadiol and protopanaxatriol groups.'
    },
    tags: ['Adaptogen', 'Energy', 'Immunity', 'Brain', 'Vitality']
  },
  {
    id: 'gokhru',
    name: 'Gokhru (Puncture Vine)',
    marathiName: 'गोखरू (सराटा)',
    botanicalName: 'Tribulus terrestris L.',
    family: 'Zygophyllaceae',
    partUsed: 'Spiny Dried Fruits (Burrs), Roots, Whole Plant',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/47/Gokhru_%28Pakhra%29.JPG?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'Premier Ayurvedic Mutravirechaniya (diuretic) and lithontriptic herb for kidney stones (Ashmari) and dysuria.',
      'Supports male reproductive health, boosts vigor, enhances spermatogenesis, and addresses erectile dysfunction.',
      'Potent Rasayana for musculoskeletal strength, athletic endurance, and post-workout recovery.',
      'Cardioprotective properties: relaxes vascular smooth muscles and assists in mild hypertension management.'
    ],
    safetyPrecautions: [
      'Possesses marked diuretic action; maintain adequate hydration during consumption.',
      'Avoid high doses in individuals with prostate hypertrophy without medical guidance.',
      'Discontinue 2 weeks before elective surgical procedures due to blood sugar and blood pressure modulation.'
    ],
    sideEffects: [
      'Mild gastrointestinal upset or gastric reflux in sensitive individuals when taken on an empty stomach.',
      'Sleep disturbance or mild restlessness if taken late in the night due to androgenic modulation.',
      'Increased frequency of urination (diuresis).',
      'Rare photosensitization (Tribulosis) noted in livestock consuming large quantities of fresh aerial parts.'
    ],
    phytochemicals: [
      'Protodioscin (furostanol saponin - chief bioactive for vitality and nitric oxide release)',
      'Tribulosin and Terrestrosins A–K',
      'Harmane and Harmine alkaloids (trace)',
      'Flavonoids (Quercetin, Kaempferol, Rutin)',
      'Potassium salts (accounting for natural alkaline diuresis)'
    ],
    dosageForms: [
      'Gokshura Churna (Fruit powder): 3 to 6 g with warm water or milk',
      'Gokshuradi Guggulu: 2 to 4 tablets (500 mg each) twice daily',
      'Kwatha (Decoction): 30 to 50 mL twice daily',
      'Standardized Extract (40-45% Saponins): 250 to 500 mg'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura (Sweet), Tikta (Bitter)',
      guna: 'Guru (Heavy), Snigdha (Unctuous)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Ashmarighna (Lithontriptic / Stone crusher) & Vrishya (Aphrodisiac)',
      doshaKarma: 'Pacifies Vata and Pitta doshas; balances Mutravaha Srotas'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Dried Fruit Hydroethanolic Extract',
        rationale: 'Dual-action stone dissolver and diuretic effervescent tablet combining Gokshura with Varuna (Crataeva nurvala) and Pashanbhed.',
        evaluationParameters: 'In vitro calcium oxalate crystallization inhibition assay, Hardness, Disintegration time, Protodioscin quantification by HPLC.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Whole Plant Aqueous Extract',
        rationale: 'Soothing urinary antiseptic syrup formulated for recurrent urinary tract infections (UTIs) and burning micturition in females.',
        evaluationParameters: 'pH, Density, Antimicrobial zone of inhibition against uropathogenic E. coli, Accelerated stability.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'De-spined fruit micronized powder',
        rationale: 'Micronized sports recovery powder with high protodioscin content to support endogenous free testosterone support.',
        evaluationParameters: 'Particle size distribution (< 75 microns), Angle of repose, Tap density, Microbial limit test.'
      }
    ],
    quiz: {
      question: 'Which furostanol saponin present in Gokshura (Tribulus terrestris) fruit is responsible for its aphrodisiac and nitric oxide release action?',
      options: ['Protodioscin', 'Curcumin', 'Vasicine', 'Brahmoside'],
      correctAnswerIndex: 0,
      explanation: 'Protodioscin triggers nitric oxide release in endothelial cells and corpus cavernosum, enhancing vascular tone and reproductive vitality.'
    },
    tags: ['Kidney', 'Diuretic', 'Urinary', 'Vitality', 'Stones']
  },
  {
    id: 'bitter-almond',
    name: 'Bitter Almond',
    marathiName: 'कडू बदाम',
    botanicalName: 'Prunus amygdalus Batsch var. amara (DC.) Focke',
    family: 'Rosaceae',
    partUsed: 'Dried Ripe Kernels (Seeds), Volatile Oil of Bitter Almond',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/37/Almonds_-_in_shell%2C_shell_cracked_open%2C_shelled%2C_blanched.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'Historically used in pharmacognosy and homeopathy as an antispasmodic and respiratory cough sedative.',
      'Bitter almond oil (free from hydrocyanic acid / Prussic acid) is used as a premium cosmetic emollient.',
      'Investigated in oncology for cyanogenic glycoside hydrolysis targeting enzyme-rich malignant cells.'
    ],
    safetyPrecautions: [
      'SEVERE TOXICITY WARNING: Ingestion of unpurified bitter almond seeds can cause fatal cyanide poisoning.',
      'As few as 6 to 10 raw bitter almonds can produce lethal poisoning in young children; 30 to 50 in adults.',
      'Must NEVER be consumed raw or confused with Sweet Almonds (Prunus amygdalus var. dulcis).'
    ],
    sideEffects: [
      'Acute Cyanide Poisoning: Dizziness, tachypnea, severe headache, cyanosis, and cherry-red venous blood.',
      'Respiratory failure, convulsive seizures, loss of consciousness, and cardiac arrest.',
      'Gastrointestinal distress: severe nausea, vomiting, and burning epigastric agony.',
      'Bitter taste causing burning sensation in the oropharynx.'
    ],
    phytochemicals: [
      'Amygdalin (cyanogenic diglucoside: mandelonitrile-beta-gentiobioside)',
      'Emulsin enzyme complex (Amygdalase + Prunase)',
      'Benzaldehyde (produces characteristic bitter almond aroma)',
      'Hydrocyanic acid (HCN / Prussic acid - generated upon enzymatic hydrolysis)',
      'Fixed fatty oil (Triolein)'
    ],
    dosageForms: [
      'CRITICAL: Raw seeds are strictly contraindicated for oral OTC consumption.',
      'Hydrocyanic Acid-Free Bitter Almond Oil (Oleum Amygdalae Amarae Rectificatum): cosmetic use only',
      'Purified pharmaceutical dilution or homeopathical tinctures strictly per pharmacopoeial monograph'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Extremely Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Tikshna (Sharp/Poisonous - Upavisha behavior)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Visham (Poisonous cyanogenic effect requiring rigorous Shodhana/processing)',
      doshaKarma: 'Aggravates Pitta and Rakta acutely upon poisoning'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'De-cyanidated Fixed Seed Oil',
        rationale: 'Topical nano-lipid cosmetic emollient cream for hyperpigmentation, skin tone evening, and melasma treatment.',
        evaluationParameters: 'Absence of free cyanide (< 0.1 ppm via Prussian blue / GC-MS), Spreadability, Rheology, Skin irritation test.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Purified Amygdalin',
        rationale: 'Microencapsulated pH-triggered enteric delivery of pure Amygdalin combined with beta-glucosidase for targeted tumor microenvironment apoptosis.',
        evaluationParameters: 'Encapsulation efficiency, In vitro release kinetics, Cytotoxicity on cancer cell lines (MTT assay).'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Defatted Seed Cake',
        rationale: 'Extraction of high-activity natural Emulsin enzyme complex for green biocatalytic synthesis of chiral cyanohydrins.',
        evaluationParameters: 'Enzymatic specific activity (U/mg), Protein content, Storage stability at 4°C, Michaelis-Menten kinetics (Km, Vmax).'
      }
    ],
    quiz: {
      question: 'Which toxic cyanogenic glycoside in bitter almond releases lethal hydrocyanic acid (HCN) upon hydrolysis by emulsin?',
      options: ['Amygdalin', 'Barbaloin', 'Sinigrin', 'Digitoxin'],
      correctAnswerIndex: 0,
      explanation: 'Amygdalin is hydrolysed in the presence of water and emulsin enzyme into benzaldehyde, glucose, and lethal hydrocyanic acid.'
    },
    tags: ['Toxic', 'Kernels', 'Almond', 'Cyanide', 'Cosmetic']
  },
  {
    id: 'acacia',
    name: 'Acacia (Babool / Indian Gum Arabic)',
    marathiName: 'बाभूळ (बबूल)',
    botanicalName: 'Acacia arabica (Lam.) Willd. / Vachellia nilotica (L.) P.J.H. Hurter & Mabb.',
    family: 'Fabaceae (Mimosaceae)',
    partUsed: 'Stem Bark, Natural Exuded Gum (Babool Gond), Fresh Twigs (Datun), Pods',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/70/Seedpods_on_Vachellia_nilotica%2C_Jhunir.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'Fresh tender twigs are traditionally chewed as natural toothbrushes (Datun) to strengthen gums, treat gingivitis, and remove dental plaque.',
      'Bark decoction is an outstanding astringent gargle for bleeding gums, aphthous stomatitis, and sore throat.',
      'Exuded gum (Gond) is a demulcent, nutritive tonic used in post-natal energy laddoos to heal reproductive organs.',
      'High tannin content provides rapid relief in chronic diarrhea, dysentery, and excessive vaginal discharge (leucorrhea).'
    ],
    safetyPrecautions: [
      'High tannin content can decrease the oral absorption of iron supplements and alkaloidal medications if taken simultaneously.',
      'Avoid long-term uninterrupted consumption of heavy bark decoction as it can cause mucosal dryness and constipation.',
      'Excessive gum intake can cause bloating or gas in weak digestive systems.'
    ],
    sideEffects: [
      'Constipation and dry stool consistency caused by powerful astringent tannins.',
      'Mild gastrointestinal irritation or nausea if high-tannin decoctions are consumed on an empty stomach.',
      'Rare occupational asthma or rhinitis from inhaling airborne Acacia gum dust.'
    ],
    phytochemicals: [
      'Condensed tannins (12-20% in bark: Catechin, Epicatechin, Gallic acid)',
      'Arabogalactan complex (Acacia gum / arabin, calcium and magnesium salts)',
      'Ellagic acid and Leucocyanidin',
      'Flavonoids (Kaempferol-3-glucoside)'
    ],
    dosageForms: [
      'Babool Bark Churna: 3 to 6 g',
      'Bark Decoction (Kwatha): 30 to 50 mL for oral use or gargle',
      'Babool Gond (Gum powder): 5 to 10 g roasted in ghee',
      'Herbal Toothpaste / Tooth powder: 5% to 10% standardized bark extract'
    ],
    ayurvedicProperties: {
      rasa: 'Kashaya (Strongly Astringent)',
      guna: 'Guru (Heavy), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Stambhana (Astringent / Hemostatic), Danta-Dardhyakara (Dental strengthener)',
      doshaKarma: 'Pacifies Kapha and Pitta dosha; may elevate Vata in excess'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Bark Hydroalcoholic Extract',
        rationale: 'Mucoadhesive buccal gel with Acacia arabica tannin fraction and Babool gum for periodontal pocket infection and plaque control.',
        evaluationParameters: 'Mucoadhesive force on porcine buccal mucosa, Viscosity, Antimicrobial activity against Porphyromonas gingivalis, Extrudability.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Gum and Bark Extract',
        rationale: 'Directly compressible chewable oral hygiene lozenge formulated with Babool gum as natural binding and matrix-forming polymer.',
        evaluationParameters: 'Friability, In vitro salivation dissolution rate, Tannin release kinetics, Mechanical crushing strength.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Fine Bark and Pod Powder',
        rationale: 'Non-abrasive toothpowder enriched with Camphor and Clove oil for remineralizing weak enamel and arresting gingival bleeding.',
        evaluationParameters: 'Abrasiveness index (RDA < 70), Fineness (sieve mesh #120), Particle shape SEM, Heavy metal analysis per WHO.'
      }
    ],
    quiz: {
      question: 'Which prominent therapeutic property makes Babool (Acacia nilotica) bark ideal for treating gingivitis and bleeding gums?',
      options: ['Strongly Astringent (Kashaya) due to condensed tannins', 'Stimulant laxative due to anthraquinones', 'Bitter digestive due to amaroids', 'Hypnotic narcotic action'],
      correctAnswerIndex: 0,
      explanation: 'Babool bark contains up to 20% condensed tannins that precipitate surface proteins, firm up lax gum tissues, and stop bleeding.'
    },
    tags: ['Dental', 'Astringent', 'Bark', 'Gums', 'Diarrhea']
  },
  {
    id: 'ashoka',
    name: 'Ashoka (Ashoka Bark)',
    marathiName: 'अशोक (अशोकाची साल)',
    botanicalName: 'Saraca asoca (Roxb.) Willd. (syn. Saraca indica L.)',
    family: 'Fabaceae (Caesalpiniaceae)',
    partUsed: 'Stem Bark, Dried Flowers',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Asokaflower.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'The supreme Ayurvedic uterine tonic (Garbhashaya Shothahara) for menorrhagia, metrorrhagia, and dysmenorrhea.',
      'Constitutes the primary active herb in classical Ashokarishta for stabilizing hormonal balance and ovarian cycles.',
      'Relieves uterine congestion, pelvic inflammatory disease (PID), and fibroids due to potent anti-estrogenic & hemostatic actions.',
      'Flowers are traditionally consumed for bleeding hemorrhoids and burning dysuria.'
    ],
    safetyPrecautions: [
      'Avoid consumption during active pregnancy unless specifically prescribed in late third trimester by an Ayurvedic obstetrician.',
      'Check for genuine Saraca asoca bark; Polyalthia longifolia (False Ashoka / Mast tree) is widely substituted or adulterated in commercial markets.',
      'Use with caution in hypomenorrhea (scanty menstrual bleeding) as its astringent action can further reduce flow.'
    ],
    sideEffects: [
      'Constipation and gastrointestinal dryness caused by high concentration of condensed tannins.',
      'Mild nausea or gastric burning if Ashokarishta or decoction is taken without water or food.',
      'Temporary cessation of menstrual flow if overused in cases of light periods.'
    ],
    phytochemicals: [
      'Epicatechin and Procyanidin B2 (chief hemostatic & uterine markers)',
      'Tannins (6-14% condensed catechol tannins)',
      'Beta-sitosterol and Stigmasterol',
      'Saracin and Ketosterol',
      'Leucopelargonidin'
    ],
    dosageForms: [
      'Ashoka Bark Churna: 3 to 6 g with milk or water',
      'Ashoka Ksheerapaka (Bark boiled in milk): 20 to 40 mL',
      'Ashokarishta (Classical fermented wine): 15 to 25 mL with equal volume of water post meals',
      'Standardized Bark Extract: 250 to 500 mg'
    ],
    ayurvedicProperties: {
      rasa: 'Kashaya (Astringent), Tikta (Bitter)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent post-digestive)',
      prabhava: 'Artava-Janana (Uterine regulator) & Hridya',
      doshaKarma: 'Pacifies Pitta and Kapha dosha; cleanses Rakta Dhatu (blood purifier)'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Authentic Stem Bark Extract',
        rationale: 'Modern sugar-free non-alcoholic uterine sedative syrup standardized to Procyanidin B2 for adolescent dysmenorrhea.',
        evaluationParameters: 'Epicatechin and Procyanidin B2 HPLC assay, Dynamic viscosity, Specific gravity, Organoleptic stability for 12 months.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Hydroalcoholic Bark Extract',
        rationale: 'Direct-compression sustained-release matrix tablet combining Ashoka with Lodhra (Symplocos) for menorrhagia control.',
        evaluationParameters: 'Hardness, Friability (< 0.5%), In vitro dissolution in simulated uterine/gastric fluid, HPTLC fingerprinting vs adulterants.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micronized Bark',
        rationale: 'Sachet-packaged effervescent botanical granules providing rapid bioavailability for acute pelvic spasmodic pain relief.',
        evaluationParameters: 'Effervescence time, Moisture content, Total tannin assay, Particle size distribution analysis.'
      }
    ],
    quiz: {
      question: 'Which plant is frequently used as a commercial counterfeit or adulterant of true Ashoka (Saraca asoca) bark?',
      options: ['Polyalthia longifolia (False Ashoka / Cemetery tree)', 'Ocimum sanctum', 'Azadirachta indica', 'Terminalia arjuna'],
      correctAnswerIndex: 0,
      explanation: 'Polyalthia longifolia (False Ashoka) is commonly planted along avenues and widely sold as adulterant; genuine Saraca asoca has distinct warty lenticels.'
    },
    tags: ['Women Health', 'Uterine', 'Menorrhagia', 'Bark', 'Hormones']
  },
  {
    id: 'belladonna',
    name: 'Belladonna (Deadly Nightshade)',
    marathiName: 'बेलाडोना',
    botanicalName: 'Atropa belladonna L.',
    family: 'Solanaceae',
    partUsed: 'Dried Leaves and Flowering Tops, Dried Roots',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/cf/Atropa_belladonna_RF.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'Classic anticholinergic and parasympatholytic botanical containing tropane alkaloids.',
      'Potent antispasmodic for relieving gastrointestinal colic, biliary spasm, and renal colic.',
      'Ophthalmic mydriatic agent historically used by Venetian women to dilate pupils (hence "Bella-donna" = Beautiful lady).',
      'Reduces excessive bronchial, salivary, and gastric secretions before anesthesia and in respiratory catarrh.'
    ],
    safetyPrecautions: [
      'DEADLY POISONOUS BOTANICAL. Pure prescription agent strictly regulated under pharmacopoeial poison schedules.',
      'Contraindicated in glaucoma (narrow-angle), prostatic hypertrophy with urinary retention, and tachycardia.',
      'Never ingest raw berries or leaves; ingestion of 2 to 5 shiny black berries can be lethal in children.'
    ],
    sideEffects: [
      'Classic Anticholinergic Toxidrome: "Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter".',
      'Severe xerostomia (extreme dry mouth) and intense thirst.',
      'Mydriasis (fixed dilated pupils) and photophobia with cycloplegia (loss of visual accommodation).',
      'Tachycardia, flushing of skin, hyperthermia due to suppression of sweating, urinary retention, delirium, and coma.'
    ],
    phytochemicals: [
      '(-)-Hyoscyamine (principal alkaloid, racemizes to Atropine during drying/extraction)',
      'Scopolamine (Hyoscine)',
      'Apoatropine and Belladonnine',
      'Scopoletin (fluorescent coumarin diagnostic marker)',
      'Tannins and Flavonoids'
    ],
    dosageForms: [
      'CRITICAL: Not for domestic OTC or kitchen herbalism.',
      'Belladonna Tincture (standardized to 0.03% total alkaloids calculated as Hyoscyamine): 0.3 to 1.0 mL strictly under medical direction',
      'Atropine Sulfate Injection: 0.5 to 1 mg for organophosphate poisoning & bradycardia',
      'Belladonna Plaster (Topical for lumbago/muscular neuralgia)'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Extremely sharp/toxic - Mahavisha/Upavisha)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Shulahara (Potent anti-spasmodic), Madakari (Narcotic deliriant)',
      doshaKarma: 'Pacifies Vata-Kapha colic; causes extreme Pitta and Rakta aggravation in toxicity'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Topical Leaf Extract',
        rationale: 'Controlled-release transdermal organogel formulation for focal muscle spasm and severe trigeminal neuralgia.',
        evaluationParameters: 'Atropine permeation flux across synthetic skin membrane, Skin irritation index, Viscosity, Physical stability.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Alkaloidal Extract',
        rationale: 'Micro-dose enteric-coated sustained-release antispasmodic tablet for severe spastic colon (IBS).',
        evaluationParameters: 'Content uniformity of Hyoscyamine via GC-MS/HPLC, Dissolution profile at pH 1.2 and 6.8, Hardness.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Dried Leaf Powder',
        rationale: 'HPTLC and fluorescence densitometric fingerprinting method for rapid quantification of Scopoletin and Tropane alkaloids.',
        evaluationParameters: 'Rf values, Linearity range, Limit of detection (LOD), Recovery percentage.'
      }
    ],
    quiz: {
      question: 'Which prominent mnemonic describes the classic toxic syndrome of Atropa belladonna anticholinergic poisoning?',
      options: [
        'Hot as a hare, blind as a bat, dry as a bone, red as a beet, mad as a hatter',
        'Cold as ice, sharp as a tack, clear as glass',
        'Wet as a sponge, slow as a snail, calm as a lake',
        'Blue as the sky, deaf as a post'
      ],
      correctAnswerIndex: 0,
      explanation: 'This classic medical rhyme describes hyperthermia, mydriasis/cycloplegia, lack of sweating/salivation, vasodilation flush, and central delirium.'
    },
    tags: ['Toxic', 'Alkaloid', 'Atropine', 'Spasm', 'Prescription']
  },
  {
    id: 'benzoin',
    name: 'Benzoin (Loban / Gum Benjamin)',
    marathiName: 'लोबान (सुगंधी डिंक)',
    botanicalName: 'Styrax benzoin Dryand. (Sumatra Benzoin) / Styrax tonkinensis (Siam Benzoin)',
    family: 'Styracaceae',
    partUsed: 'Balsamic Resin exuded from Incisions in Trunk Bark',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Styrax_benzoin_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-133.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'Inhaled as steam with hot water (Friar’s Balsam / Compound Tincture of Benzoin) to liquefy tenacious bronchial mucus in laryngitis and bronchitis.',
      'Natural antiseptic skin protectant applied over minor cuts, bedsores, cracked nipples, and cold sores.',
      'Burnt as sacred fragrant incense (Loban) in Indian homes and temples to purify indoor air and repel insects.',
      'Potent natural preservative and antioxidant in cosmetics and pharmaceutical ointments due to high benzoic and cinnamic acid.'
    ],
    safetyPrecautions: [
      'Must NOT be ingested in large doses as balsamic acids cause severe gastric irritation.',
      'Steam inhalation should be carried out carefully to avoid burning facial skin or eyes.',
      'May trigger contact allergic dermatitis in sensitive individuals; perform patch test before topical painting.'
    ],
    sideEffects: [
      'Contact dermatitis, erythema, and localized skin sensitization.',
      'Mucosal irritation or reflex bronchospasm in hypersensitive asthmatic patients during heavy steam inhalation.',
      'Nausea and stomach ache if swallowed internally in excessive quantity.'
    ],
    phytochemicals: [
      'Benzoic acid and Cinnamic acid (free and esterified)',
      'Coniferyl benzoate (up to 70% in Siam Benzoin)',
      'Vanillin (imparts sweet balsamic vanilla aroma)',
      'Siaresinolic acid and Sumaresinolic acid',
      'Styrol and Phenylpropyl cinnamate'
    ],
    dosageForms: [
      'Compound Benzoin Tincture (Friar\'s Balsam): 2 to 5 mL added to boiling water for steam inhalation',
      'Topical Skin Painting Solution: 10% to 20% alcoholic solution',
      'Purified Resin Incense (Loban): for environmental fumigation',
      'Natural Cosmetic Preservative: 0.1% to 0.5% in lipid formulations'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent)',
      guna: 'Laghu (Light), Snigdha (Unctuous), Tikshna (Penetrating)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Kaphaghna (Expectorant), Rakshoghna (Antimicrobial fumigant)',
      doshaKarma: 'Pacifies Vata and Kapha dosha; expels cold sticky phlegm'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Balsamic Resin Extract',
        rationale: 'Topical hydroalcoholic film-forming liquid bandage with Benzoin resin for waterproof wound barrier and microbial protection.',
        evaluationParameters: 'Film drying time (< 2 min), Tensile strength of polymeric film, Microbial barrier efficacy, Water vapor transmission rate.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Purified Benzoic Acid Fraction',
        rationale: 'Natural plant-derived multi-spectrum preservative booster system replacing synthetic parabens in oral herbal formulations.',
        evaluationParameters: 'Preservative challenge test (USP <51>) against Candida albicans, Aspergillus brasiliensis, and E. coli over 28 days.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Purified Siam Benzoin Resin',
        rationale: 'Thermal volatilization profile and GC-MS characterization of Loban incense smoke to demonstrate airborne antimicrobial efficacy.',
        evaluationParameters: 'Volatile organic compound profile, Settling microbial plate count reduction, Particle matter PM2.5 evaluation.'
      }
    ],
    quiz: {
      question: 'What is the historic pharmaceutical name of Compound Benzoin Tincture widely used for steam inhalation in laryngitis?',
      options: ['Friar\'s Balsam', 'Tincture of Iodine', 'Hoffman\'s Drops', 'Lugol\'s Solution'],
      correctAnswerIndex: 0,
      explanation: 'Compound Tincture of Benzoin, known as Friar\'s Balsam, contains benzoin, storax, tolu balsam, and aloes for respiratory steam inhalation.'
    },
    tags: ['Resin', 'Respiratory', 'Steam', 'Inhalation', 'Antiseptic']
  },
  {
    id: 'bitter-orange',
    name: 'Bitter Orange (Seville Orange)',
    marathiName: 'कडू संत्री (हेरंब)',
    botanicalName: 'Citrus aurantium L. subsp. amara',
    family: 'Rutaceae',
    partUsed: 'Dried Outer Fruit Peel (Epicarp and Mesocarp), Flowers (Neroli), Leaves (Petitgrain)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/57/Citrus_aurantium_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-042.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'Aromatic bitter stomachic that stimulates digestive gastric juices, relieves flatulence, and treats loss of appetite.',
      'Rich source of Synephrine utilized in sports nutrition and thermogenic weight management supplements.',
      'Neroli essential oil distilled from the white blossoms is renowned in aromatherapy for alleviating anxiety and insomnia.',
      'Fruit peel bioflavonoids strengthen vascular capillary walls and treat chronic venous insufficiency.'
    ],
    safetyPrecautions: [
      'Synephrine acts as a mild sympathomimetic stimulant; exercise caution in patients with cardiovascular disease or hypertension.',
      'Avoid combining high-dose bitter orange extracts with caffeine or prescription stimulants.',
      'Contains furanocoumarins that can inhibit cytochrome P450 3A4 (CYP3A4), altering drug metabolism similar to grapefruit juice.'
    ],
    sideEffects: [
      'Tachycardia, increased systolic/diastolic blood pressure, and heart palpitations in high doses.',
      'Headache, jitteriness, and insomnia if taken late in the day.',
      'Phototoxicity / phytophotodermatitis if topical citrus oil is applied to skin prior to direct sunlight exposure.'
    ],
    phytochemicals: [
      'p-Synephrine and Octopamine (adrenergic phenethylamines)',
      'Hesperidin and Neohesperidin (flavanone glycosides)',
      'Naringin and Nobiletin',
      'd-Limonene (up to 90% in peel volatile oil)',
      'Linalool and Linalyl acetate (in Neroli flower oil)'
    ],
    dosageForms: [
      'Dried Peel Tincture (1:5): 2 to 4 mL in water before meals',
      'Standardized Synephrine Extract (6%): 100 to 200 mg',
      'Dried Peel Churna: 1 to 2 g as digestive bitter',
      'Neroli Essential Oil: 1 to 2 drops in carrier oil for aromatherapy'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent), Amla (Sour)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Deepana (Digestive fire rekindler), Pachana (Digestant)',
      doshaKarma: 'Pacifies Vata and Kapha dosha; may elevate Pitta in large quantities'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Peel Flavonoid Extract',
        rationale: 'Micronized purified flavonoid fraction (Hesperidin 90%) tablet for chronic venous insufficiency and hemorrhoidal crisis.',
        evaluationParameters: 'Dissolution rate, Particle size distribution (< 2 microns), Hesperidin HPLC assay, Venous tone assessment in vitro.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Dried Peel Aromatic Tincture',
        rationale: 'Classical aromatic bitter digestive elixir for geriatric hypochlorhydria and functional dyspepsia.',
        evaluationParameters: 'Refractive index, Bitterness value determination per European Pharmacopoeia, Specific gravity, Taste profile.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Flower Neroli Distillate and Peel Extract',
        rationale: 'Anti-stress transdermal aromatherapy gel combining Neroli essential oil with microencapsulated melatonin.',
        evaluationParameters: 'Viscosity, Volatile loss rate, Skin permeation, Anxiolytic evaluation via elevated plus maze model.'
      }
    ],
    quiz: {
      question: 'Which adrenergic amine alkaloid present in bitter orange peel is widely utilized in sports thermogenic supplements?',
      options: ['p-Synephrine', 'Ephedrine', 'Caffeine', 'Theobromine'],
      correctAnswerIndex: 0,
      explanation: 'p-Synephrine is an alpha-adrenergic agonist extracted from Citrus aurantium peel that promotes lipolysis and metabolic rate.'
    },
    tags: ['Digestion', 'Bitter', 'Fruit', 'Metabolism', 'Weight']
  },
  {
    id: 'black-catechu',
    name: 'Black Catechu (Khadir / Kattha)',
    marathiName: 'कात (खदिर)',
    botanicalName: 'Acacia catechu (L.f.) Willd. (Senegalia catechu (L.f.) P.J.H. Hurter & Mabb.)',
    family: 'Fabaceae (Mimosaceae)',
    partUsed: 'Dried Aqueous Extract of Heartwood (Kattha / Black Catechu)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/Acacia_catechu_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-003.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'Ayurveda\'s foremost Kusthaghna (anti-dermatosis herb) for chronic eczema, psoriasis, acne, and vitiligo.',
      'Revered oral astringent applied directly on aphthous mouth ulcers, bleeding spongy gums, and pharyngitis.',
      'Traditional component of Indian Paan (betel quid) that strengthens mucosal tissues and stimulates salivary digestion.',
      'Potent intestinal astringent for severe acute watery diarrhea and intestinal hemorrhages.'
    ],
    safetyPrecautions: [
      'Avoid long-term uninterrupted high dosing as intense tannin astringency can cause severe constipation.',
      'May reduce the gastrointestinal bioavailability of oral iron and mineral supplements.',
      'In pure form, Kattha must be purified and standardized to ensure absence of heavy metal contamination.'
    ],
    sideEffects: [
      'Constipation and dry stool consistency.',
      'Mild stomach irritation or epigastric discomfort if taken in high doses without demulcents.',
      'Localized dark staining of teeth and oral mucous membranes.'
    ],
    phytochemicals: [
      'Catechin (+/- acacatechin) and Epicatechin',
      'Catechutannic acid (25-35% - responsible for powerful astringency)',
      'Catechu red (phlobaphene coloring matter)',
      'Quercetin and Taxifolin',
      'Gallic acid'
    ],
    dosageForms: [
      'Khadira Churna (Heartwood powder): 1 to 3 g',
      'Khadirarishta (Fermented classical liquid): 15 to 25 mL with water',
      'Khadiradi Vati (Chewable oral lozenges): 1 to 2 tablets sucked slowly',
      'Purified Kattha extract: 0.5 to 1.5 g'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Strongly Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent post-digestive)',
      prabhava: 'Kusthaghna (Supreme skin remedy) & Raktashodhaka',
      doshaKarma: 'Pacifies Kapha and Pitta doshas; cools inflamed blood tissues'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Heartwood Extract',
        rationale: 'Mucoadhesive buccal mini-tablet for instantaneous healing of recurrent aphthous stomatitis (canker sores).',
        evaluationParameters: 'Bioadhesive strength, In vitro drug release in artificial saliva, HPLC quantification of Catechin, Ulcer diameter reduction.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Aqueous Heartwood Extract',
        rationale: 'Topical cream-gel formulation combining Acacia catechu with Neem for chronic plaque psoriasis and atopic dermatitis.',
        evaluationParameters: 'PASI score improvement in clinical models, Spreadability, Viscosity, Cytokine (TNF-alpha, IL-6) reduction assay.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Fine Kattha Extract Powder',
        rationale: 'Standardized high-catechin dispersible sachet for rapid natural hemostasis and acute non-specific diarrhea.',
        evaluationParameters: 'Catechutannic acid assay, In vitro protein precipitation index, Flow properties, Accelerated stability testing.'
      }
    ],
    quiz: {
      question: 'In Ayurveda, Khadira (Acacia catechu / Black Catechu) is celebrated as the foremost therapeutic agent for which disease category?',
      options: ['Kustha (Dermatological diseases and chronic skin disorders)', 'Unmada (Psychosis)', 'Mutrakrichhra (Dysuria)', 'Hridroga (Heart disease)'],
      correctAnswerIndex: 0,
      explanation: 'Charaka designates Khadira as the prime "Kusthaghna" herb, making it the bedrock of skin therapies like Khadirarishta.'
    },
    tags: ['Skin', 'Astringent', 'Mouth Ulcer', 'Psoriasis', 'Eczema']
  },
  {
    id: 'capsicum',
    name: 'Capsicum (Chilli Pepper / Cayenne)',
    marathiName: 'मिरची (कँप्सिकम)',
    botanicalName: 'Capsicum annuum L. / Capsicum frutescens L.',
    family: 'Solanaceae',
    partUsed: 'Dried Ripe Fruits (Pods with Seeds)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2d/Baby_Bell_pepper_%27%27Capsicum_annuum%27%27_.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'Topical Capsaicin depletes Substance P from sensory C-nerve fibers, providing miraculous relief in osteoarthritis and neuropathic pain.',
      'Powerful circulatory stimulant that triggers peripheral vasodilation and improves systemic blood flow.',
      'Potent carminative and gastric secretagogue that rekindles suppressed Agni (digestive fire) in sluggish digestion.',
      'Used as an effective counter-irritant plaster for intractable lumbago, sciatica, and fibrositis.'
    ],
    safetyPrecautions: [
      'Avoid contact with eyes, broken skin, or mucous membranes; causes excruciating burning sensation.',
      'Contraindicated orally in active peptic ulcer disease, acute gastritis, and gastroesophageal reflux (GERD).',
      'Wash hands thoroughly with soap or vinegar after touching fresh chillies or capsaicin ointments.'
    ],
    sideEffects: [
      'Intense burning sensation, erythema, and stinging pain at topical application site (diminishes after repeated use).',
      'Heartburn, epigastric distress, and anal burning during defecation with excessive oral consumption.',
      'Coughing, sneezing, and lacrimation if capsaicin dust or vapor is inhaled.'
    ],
    phytochemicals: [
      'Capsaicin (8-methyl-N-vanillyl-6-nonenamide - pungent principle)',
      'Dihydrocapsaicin and Nordihydrocapsaicin',
      'Capsanthin and Capsorubin (intense carotenoid red pigments)',
      'Ascorbic acid (Vitamin C - abundant in fresh pods)',
      'Volatile oil and Steroidal glycosides (Capsicosides)'
    ],
    dosageForms: [
      'Topical Capsaicin Cream: 0.025% to 0.075% applied 3-4 times daily',
      'Capsicum Tincture (1:10): 0.3 to 1.0 mL well diluted in warm water',
      'Dried Fruit Churna (Powder): 30 to 100 mg (micro-dosing only)',
      'Transdermal Counter-irritant Plaster: 8% capsaicin patch (medical supervision)'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Intensely Pungent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Extremely penetrating/sharp)',
      virya: 'Ushna (Extremely Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Deepana (Digestive kindle), Vedanasthapana (Topical analgesic)',
      doshaKarma: 'Pacifies Kapha and Vata doshas; strongly aggravates Pitta and Rakta'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Standardized Capsaicin Oleoresin',
        rationale: 'Liposomal nanogel containing 0.075% Capsaicin for diabetic peripheral neuropathy with sustained Substance P depletion and minimal cutaneous burning.',
        evaluationParameters: 'Encapsulation efficiency, Skin permeation rate via Franz diffusion cell, Thermal nociception latency, Sensory burning score.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Enteric-Coated Fruit Oleoresin',
        rationale: 'pH-dependent colon-targeted beadlets for metabolic thermogenesis without esophageal or gastric mucosal irritation.',
        evaluationParameters: 'In vitro gastric resistance (no release at pH 1.2 for 2h), Rapid dissolution at pH 6.8, Capsaicin HPLC assay.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Defatted Fruit Pericarp',
        rationale: 'High-purity Capsanthin carotenoid natural food colorant extraction with potent antioxidant properties.',
        evaluationParameters: 'Color value (ASTA units), In vitro radical scavenging capacity, Thermal stability up to 100°C.'
      }
    ],
    quiz: {
      question: 'How does topical Capsaicin exert its long-lasting analgesic action in diabetic neuropathy and arthritis?',
      options: [
        'By depleting Substance P from peripheral sensory nociceptors',
        'By blocking GABA receptors in the spinal cord',
        'By inhibiting acetylcholinesterase enzyme',
        'By stimulating histamine release from mast cells'
      ],
      correctAnswerIndex: 0,
      explanation: 'Capsaicin binds TRPV1 receptors and repeatedly discharges Substance P, resulting in chemical desensitization of pain pathways.'
    },
    tags: ['Pain', 'Joints', 'Neuropathy', 'Capsaicin', 'Stimulant']
  },
  {
    id: 'cardamom',
    name: 'Cardamom (True Cardamom / Elaichi)',
    marathiName: 'वेलची (एला)',
    botanicalName: 'Elettaria cardamomum (L.) Maton',
    family: 'Zingiberaceae',
    partUsed: 'Dried Ripe Fruits (Tri-locular capsules containing aromatic seeds)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2c/Elettaria_cardamomum_Capsules_and_seeds.jpg?utm_source=commons.wikimedia.org&utm_campaign=imageinfo&utm_content=original',
    traditionalUses: [
      'The "Queen of Spices" - supreme aromatic digestive, antiemetic, and mouth freshener (Mukhadoshahara).',
      'Relieves nausea, vomiting (Chhardi), morning sickness, and burning sensations in the stomach.',
      'Soothes spasmodic stomach cramps, flatulence, and indigestion due to high volatile cineole and terpinyl acetate.',
      'Cardioprotective and bronchodilator: clears respiratory phlegm and promotes heart and breath lightness.'
    ],
    safetyPrecautions: [
      'Patients with gallstones (cholelithiasis) should consult a physician before using large doses, as it stimulates bile flow.',
      'Store whole dried pods; once powdered, the volatile aromatic essential oils rapidly evaporate.',
      'Safe in culinary amounts during pregnancy and lactation.'
    ],
    sideEffects: [
      'Generally very safe and well tolerated.',
      'Overuse can occasionally trigger gallstone colic in individuals with silent gallstones.',
      'Rare contact stomatitis or allergic dermatitis in hypersensitive individuals.'
    ],
    phytochemicals: [
      '1,8-Cineole (Eucalyptol - up to 40% in seed oil)',
      'alpha-Terpinyl acetate (imparts characteristic sweet spicy note)',
      'Limonene and Sabinene',
      'Linalool and Linalyl acetate',
      'Flavonoids (Luteolin, Quercetin)'
    ],
    dosageForms: [
      'Ela Churna (Seed powder): 0.5 to 1.5 g with honey or warm milk',
      'Cardamom Essential Oil: 1 to 3 drops',
      'Eladi Vati (Classical chewable tablets for throat & cough): 1 to 2 tablets',
      'Cardamom Infusion / Tea: 2-3 freshly crushed pods steeped in boiling water'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura (Sweet), Katu (Pungent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency - Sukshma Ela is Sheeta)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Hridya (Heart toner), Mukhagandhahara (Deodorizer)',
      doshaKarma: 'Pacifies all three doshas (Tridoshahara), especially Pitta and Vata'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Cardamom Seed Essential Oil / Supercritical CO2 Extract',
        rationale: 'Fast-melt antiemetic buccal tablet for chemotherapy and pregnancy-induced nausea using beta-cyclodextrin inclusion complexes.',
        evaluationParameters: 'Complexation efficiency, Disintegration time (< 20 seconds), In vitro dissolution, Volatile oil retention via GC.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aqueous-Alcoholic Seed Extract',
        rationale: 'Non-drowsy pediatric carminative and colic syrup combining Cardamom with Fennel and Dill seed waters.',
        evaluationParameters: 'Specific gravity, pH, 1,8-Cineole stability over 180 days, Organoleptic evaluation.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Whole Fruit with Seeds',
        rationale: 'Microencapsulated spray-dried cardamom flavor and digestive powder for functional dairy and nutraceutical applications.',
        evaluationParameters: 'Surface oil content vs total oil, Encapsulation efficiency (> 90%), Hygroscopicity, Bulk density.'
      }
    ],
    quiz: {
      question: 'Which volatile compound contributes the characteristic sweet-spicy aromatic signature and antispasmodic quality to true green Cardamom?',
      options: ['alpha-Terpinyl acetate & 1,8-Cineole', 'Curcumin', 'Marmelosin', 'Azadirachtin'],
      correctAnswerIndex: 0,
      explanation: 'The blend of alpha-terpinyl acetate and 1,8-cineole (eucalyptol) accounts for over 70% of Cardamom seed volatile oil.'
    },
    tags: ['Digestive', 'Spice', 'Nausea', 'Heart', 'Aromatic']
  },
  {
    id: 'castor',
    name: 'Castor (Eranda / Castor Bean)',
    marathiName: 'एरंड',
    botanicalName: 'Ricinus communis L.',
    family: 'Euphorbiaceae',
    partUsed: 'Fixed Seed Oil (Castor Oil), Roots (Eranda Moola), Fresh Leaves',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/18/Ricinus_communis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-119.jpg',
    traditionalUses: [
      'Ayurveda’s supreme Vata-pacifying herb: Eranda taila (Castor oil) is celebrated as the king of Vata diseases and sciatica (Gridhrasi).',
      'Classic purgative (Bhedana) that lubricates the bowels and expels deep-seated toxic Ama from joints and gut.',
      'Roots are a principal component of the classical Dashamoola formula for inflammatory musculoskeletal disorders.',
      'Warm fresh leaves are applied locally over swollen arthritic joints and inflamed breast tissues to relieve pain and edema.'
    ],
    safetyPrecautions: [
      'LETHAL TOXIN WARNING FOR SEEDS: Castor beans contain Ricin, one of the deadliest plant toxins known. NEVER ingest raw unexpressed seeds.',
      'Cold-pressed commercial Castor oil is 100% free of Ricin as ricin is water-soluble and remains in the press-cake.',
      'Contraindicated in pregnancy as it can stimulate violent uterine contractions and induce premature labor.'
    ],
    sideEffects: [
      'Griping abdominal cramps, nausea, and watery diarrhea with internal castor oil purgation.',
      'Electrolyte disturbances and fluid dehydration with repeated high purgative doses.',
      'Pelvic congestion and uterine cramping.',
      'Ingestion of raw crushed seeds causes fatal Ricin poisoning (hemagglutination, multiple organ failure).'
    ],
    phytochemicals: [
      'Ricinoleic acid (up to 90% in fixed oil - unique hydroxylated fatty acid)',
      'Ricin (deadly ribosome-inactivating lectin protein - present in seed cake only, absent in oil)',
      'Ricinine (piperidine alkaloid)',
      'Oleic and Linoleic acids',
      'Flavonoids (Rutin, Quercetin in leaves)'
    ],
    dosageForms: [
      'Castor Oil (Eranda Taila): 10 to 20 mL with warm milk or ginger tea for purgation',
      'Eranda Moola Kwatha (Root decoction): 30 to 50 mL for joint disorders',
      'Sinhanad Guggulu (contains Castor oil & Triphala): 2 tablets twice daily',
      'Topical Warm Oil: for joint massage and abdominal castor oil packs'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura (Sweet), Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Guru (Heavy), Snigdha (Unctuous), Tikshna (Sharp), Sukshma (Subtle penetrating)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Madhura (Sweet)',
      prabhava: 'Vrishya, Vatahara (Supreme conqueror of Vata)',
      doshaKarma: 'Pacifies Vata dosha profoundly; cleanses Kapha through purgation'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Pure Cold-Pressed Castor Oil',
        rationale: 'Self-emulsifying micro-emulsion transdermal gel for knee osteoarthritis and rheumatoid synovitis with deep tissue penetration.',
        evaluationParameters: 'Droplet size (< 50 nm), Viscosity, In vitro anti-inflammatory carrageenan paw edema assay, Skin permeation.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Purified Castor Oil Micro-suspension',
        rationale: 'Palatable fruit-flavored castor oil emulsion using natural acacia emulsifier to eliminate oily mouthfeel and nausea in acute constipation.',
        evaluationParameters: 'Emulsion stability index, Globule size distribution, Laxative onset time in animal models, Viscosity.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Root Hydroalcoholic Extract',
        rationale: 'Standardized anti-arthritic dry extract tablets evaluated against COX-2 and 5-LOX inflammatory enzyme targets.',
        evaluationParameters: 'In vitro COX-2 inhibition IC50, Moisture content, Friability, Disintegration time.'
      }
    ],
    quiz: {
      question: 'Which unique hydroxylated unsaturated fatty acid comprises up to 90% of Castor oil and exerts its purgative action?',
      options: ['Ricinoleic acid', 'Oleic acid', 'Lauric acid', 'Stearic acid'],
      correctAnswerIndex: 0,
      explanation: 'Ricinoleic acid is released in the small intestine by lipases, binding to EP3 prostanoid receptors on intestinal smooth muscle cells.'
    },
    tags: ['Joints', 'Vata', 'Arthritis', 'Laxative', 'Castor Oil']
  },
  {
    id: 'cinchona',
    name: 'Cinchona (Quinine Bark)',
    marathiName: 'सिंकोना (क्विनाईन)',
    botanicalName: 'Cinchona officinalis L. / Cinchona succirubra Pav. ex Klotzsch / Cinchona calisaya Wedd.',
    family: 'Rubiaceae',
    partUsed: 'Dried Stem and Root Bark (Peruvian Bark / Jesuit’s Bark)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/df/Cinchona_officinalis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-036.jpg',
    traditionalUses: [
      'The historic antimalarial that transformed global medicine: source of Quinine, the first effective cure for Plasmodium falciparum malaria.',
      'Acts as a schizonticide against intra-erythrocytic malaria parasites and treats nocturnal muscle leg cramps.',
      'Quinidine (stereoisomer of Quinine) is a Class IA cardiac antiarrhythmic agent for atrial and ventricular arrhythmias.',
      'Aromatic bitter tonic that vigorously stimulates gastric secretions and treats anorexia in convalescent patients.'
    ],
    safetyPrecautions: [
      'PRESCRIPTION BOTANICAL. Overdose produces life-threatening Cinchonism and cardiac arrhythmias.',
      'Contraindicated in G6PD enzyme deficiency (triggers acute intravascular hemolysis), myasthenia gravis, and optic neuritis.',
      'Contraindicated in pregnancy: possesses oxytocic uterine properties and can induce abortion.'
    ],
    sideEffects: [
      'Cinchonism: Tinnitus (ringing in the ears), temporary high-frequency deafness, dizziness, headache, and blurred vision.',
      'Cardiotoxicity: QT-interval prolongation, ventricular arrhythmias (Torsades de pointes), and severe hypotension.',
      'Hematological reactions: immune thrombocytopenia, hemolytic anemia, and leukopenia.',
      'Nausea, vomiting, abdominal pain, and dysphoria.'
    ],
    phytochemicals: [
      'Quinine and Quinidine (quinoline alkaloids - pair of diastereomers)',
      'Cinchonine and Cinchonidine',
      'Cinchotannic acid (tannin yielding cinchona red)',
      'Quinic acid',
      'Indole alkaloid precursors (Cinchonamine)'
    ],
    dosageForms: [
      'CRITICAL: Pure alkaloids are administered strictly under physician prescription.',
      'Quinine Sulfate Tablets: 300 to 600 mg for chloroquine-resistant malaria',
      'Cinchona Bark Tincture (Aromatic Bitter): 1 to 2 mL diluted before meals',
      'Intravenous Quinine Infusion: for severe falciparum cerebral malaria'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Intensely Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent post-digestive)',
      prabhava: 'Vishamajwaraghna (Specific antipyretic for intermittent malarial fevers)',
      doshaKarma: 'Pacifies Pitta and Kapha related fevers; can aggravate Vata in excess'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Quinine Alkaloid Fraction',
        rationale: 'Fixed-dose artemisinin-quinine hybrid liposomal matrix tablet to overcome emerging multidrug resistant malaria strains.',
        evaluationParameters: 'In vitro parasite growth inhibition (IC50 against P. falciparum 3D7 & W2), Dissolution profile, HPLC assay.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Cinchona Bark Decoction',
        rationale: 'Standardized bitter tonic aperitif syrup with sweet orange peel and gentian for convalescent post-fever appetite recovery.',
        evaluationParameters: 'Bitterness index, Total alkaloid content (calculated as Quinine), Shelf life, Microbial stability.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micronized Bark',
        rationale: 'HPTLC and green-solvent ultrasound-assisted extraction of Quinine and Quinidine from sustainable plantation barks.',
        evaluationParameters: 'Extraction yield, Solvent residue analysis, Densitometric quantification at 330 nm, Chromatographic purity.'
      }
    ],
    quiz: {
      question: 'Which symptom complex characterized by ringing in the ears (tinnitus), headache, and dizziness is diagnostic of Cinchona / Quinine toxicity?',
      options: ['Cinchonism', 'Salicylism', 'Atropinism', 'Ergotism'],
      correctAnswerIndex: 0,
      explanation: 'Cinchonism is the medical term for quinine toxicity, manifesting with auditory tinnitus, vestibular vertigo, nausea, and visual impairment.'
    },
    tags: ['Malaria', 'Fever', 'Bark', 'Alkaloid', 'Quinine']
  },
  {
    id: 'cinnamon',
    name: 'Cinnamon (Ceylon Cinnamon / Dalchini)',
    marathiName: 'दालचिनी',
    botanicalName: 'Cinnamomum verum J. Presl (syn. Cinnamomum zeylanicum Blume)',
    family: 'Lauraceae',
    partUsed: 'Dried Inner Bark of Shoots (Quills / Scraped inner bark)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/82/Cinnamomum_verum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-037.jpg',
    traditionalUses: [
      'Insulin-sensitizing spice: dramatically enhances glucose uptake, improves insulin receptor phosphorylation, and lowers HbA1c.',
      'Potent carminative and warming digestive for flatulence, intestinal colic, and slow metabolic fire (Mandagni).',
      'Broad-spectrum antimicrobial and antifungal (particularly potent against Candida albicans and oral bacteria).',
      'Cardiovascular tonic: aids in balancing lipid profiles by lowering total cholesterol, LDL, and triglycerides.'
    ],
    safetyPrecautions: [
      'Distinguish True Ceylon Cinnamon (Cinnamomum verum) from Cassia (Cinnamomum cassia). Cassia contains high levels of hepatotoxic Coumarin.',
      'High doses of Cassia cinnamon can cause liver and kidney damage due to Coumarin accumulation.',
      'May enhance the effect of prescription anti-diabetic medications, requiring blood glucose monitoring.'
    ],
    sideEffects: [
      'Hepatotoxicity with excessive long-term consumption of Cassia cinnamon (due to Coumarin content).',
      'Mouth sores, mucosal peeling, and tongue burning if cinnamon oil is used undiluted.',
      'Hypoglycemia if combined with high-dose diabetic drugs without adjusting dose.',
      'Allergic contact stomatitis and facial flushing in sensitive individuals.'
    ],
    phytochemicals: [
      'Cinnamaldehyde (65-80% in bark volatile oil - chief active principle)',
      'Eugenol (predominant in cinnamon leaf oil, 5-10% in bark)',
      'Type-A Procyanidin oligomers (insulin-mimetic polyphenol polymers)',
      'Cinnamic acid and Coumarin (Coumarin is ultra-low in Ceylon Cinnamon < 0.004%, high in Cassia up to 1%)',
      'Mucilage and Caryophyllene'
    ],
    dosageForms: [
      'Twacha Churna (Bark powder): 1 to 3 g daily with honey or warm water',
      'Dalchini Arka / Oil: 1 to 2 drops in warm vehicle',
      'Water-Soluble Polyphenol Extract: 250 to 500 mg standardized to 10% Polyphenols',
      'Herbal Cinnamon Tea: 1-2 g quills steeped for 10 minutes'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Pungent), Tikta (Bitter), Madhura (Sweet)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Penetrating)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Dipana, Pachana, Hridya (Heart & circulatory invigorator)',
      doshaKarma: 'Pacifies Vata and Kapha doshas; can increase Pitta in excess'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Water-Soluble Type-A Polyphenol Extract (Coumarin-free)',
        rationale: 'Sustained-release tablet for Type-2 Diabetes Mellitus to improve GLUT-4 translocation and reduce postprandial glucose spikes.',
        evaluationParameters: 'In vitro alpha-amylase and alpha-glucosidase enzyme inhibition assays, HPLC Coumarin absence (< 5 ppm), Dissolution profile.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Inner Bark Essential Oil (Cinnamaldehyde 75%)',
        rationale: 'Antifungal nano-emulgel for oral candidiasis (thrush) in immunocompromised patients resistant to fluconazole.',
        evaluationParameters: 'Minimum Inhibitory Concentration (MIC) against Candida albicans, Droplet size, Spreadability, Mucosal tolerance.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'True Ceylon Quills Micronized Powder',
        rationale: 'Standardization and differentiation assay protocol between Ceylon Cinnamon and adulterated Cassia using HPTLC coumarin profiling.',
        evaluationParameters: 'Coumarin vs Cinnamaldehyde peak ratio, Particle size distribution, Ash value, Volatile oil content (min 1.0% v/w).'
      }
    ],
    quiz: {
      question: 'Why is true Ceylon Cinnamon (Cinnamomum verum) vastly preferred for therapeutic use over cheap Cassia bark (Cinnamomum cassia)?',
      options: [
        'Ceylon cinnamon contains virtually no hepatotoxic Coumarin (<0.004%), whereas Cassia has dangerous high levels',
        'Cassia has no aroma',
        'Ceylon cinnamon is completely water soluble',
        'Cassia contains digitalis glycosides'
      ],
      correctAnswerIndex: 0,
      explanation: 'Cassia cinnamon contains up to 1% Coumarin which causes liver damage with regular intake; true Ceylon cinnamon has negligible, safe traces.'
    },
    tags: ['Diabetes', 'Sugar', 'Spice', 'Digestion', 'Bark']
  },
  {
    id: 'clove',
    name: 'Clove (Lavanga)',
    marathiName: 'लवंग',
    botanicalName: 'Syzygium aromaticum (L.) Merr. & L.M. Perry (Eugenia caryophyllata Thunb.)',
    family: 'Myrtaceae',
    partUsed: 'Dried Unexpanded Flower Buds',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Syzygium_aromaticum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-134.jpg',
    traditionalUses: [
      'The supreme dental analgesic and antiseptic: applied directly or as Clove oil on aching teeth, cavities, and gums.',
      'Potent carminative and anti-spasmodic that arrests gastric hiccups, vomiting, flatulence, and indigestion.',
      'Soothes throat irritation, chronic cough, and laryngitis when kept in mouth as a chewable clove lozenge.',
      'Possesses one of the highest ORAC antioxidant values in the botanical kingdom due to phenolic eugenol content.'
    ],
    safetyPrecautions: [
      'Undiluted Clove oil should not be applied freely to oral mucosa; it can cause chemical burns and mucosal sloughing.',
      'In high doses, Eugenol can inhibit platelet aggregation; stop medicinal clove therapy prior to surgery.',
      'Keep clove essential oil out of reach of young children (ingestion of small amounts can cause severe liver failure and seizures).'
    ],
    sideEffects: [
      'Burning sensation, chemical tissue irritation, and mucosal erythema from undiluted clove oil.',
      'Bleeding tendency when combined with anticoagulant medications (warfarin, aspirin).',
      'Hepatotoxicity and metabolic acidosis in children following accidental ingestion of concentrated clove oil.',
      'Allergic contact dermatitis in dental professionals.'
    ],
    phytochemicals: [
      'Eugenol (70-90% in bud volatile oil - responsible for anesthesia and antimicrobial action)',
      'Eugenyl acetate (imparts floral sweet note)',
      'beta-Caryophyllene (sesquiterpene CB2 receptor agonist)',
      'Tannins (10-13% Gallotannic acid)',
      'Flavonoids (Biflorin, Kaempferol, Rhamnetin)'
    ],
    dosageForms: [
      'Lavanga Churna (Clove powder): 0.5 to 1.5 g with honey',
      'Clove Oil (Lavanga Taila): 1 to 2 drops applied via cotton pellet to tooth cavity',
      'Lavangadi Vati (Chewable classical tablet for cough): 1 to 2 tablets sucked slowly',
      'Clove Infusion / Tea: 2-3 cloves steeped in boiling water'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent)',
      guna: 'Laghu (Light), Snigdha (Unctuous), Tikshna (Sharp)',
      virya: 'Sheeta (Cooling potency - uniquely among spices, Lavanga is considered Sheeta in Ayurveda)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Dantashulahara (Toothache reliever), Chhardighna (Antiemetic)',
      doshaKarma: 'Pacifies Kapha and Pitta doshas; balances digestive fire'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Bud Essential Oil (Eugenol 85%)',
        rationale: 'Mucoadhesive thermo-reversible in situ dental gel for dry socket and post-extraction periodontal pain management.',
        evaluationParameters: 'Gelation temperature (32-34°C), Syringeability, In vitro anesthetic duration, Eugenol release kinetics over 8 hours.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Clove Extract and Oil',
        rationale: 'Chewable throat lozenge combining Clove with Yashtimadhu and Khadir for immediate relief in acute pharyngitis.',
        evaluationParameters: 'Crushing strength, Palatability index, Salivary dissolution rate, Antimicrobial inhibition against Streptococcus pyogenes.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Whole Clove Flower Buds',
        rationale: 'Supercritical CO2 extraction optimization and GC-MS profiling of Clove oil to maximize Eugenol and beta-Caryophyllene yields.',
        evaluationParameters: 'Supercritical pressure/temperature matrix, Volatile oil recovery (min 15% v/w), Refractive index (1.528-1.537).'
      }
    ],
    quiz: {
      question: 'Which prominent phenolic volatile compound comprises up to 85% of clove oil and acts as a localized dental anesthetic?',
      options: ['Eugenol', 'Marmelosin', 'Curcumin', 'Capsaicin'],
      correctAnswerIndex: 0,
      explanation: 'Eugenol suppresses voltage-gated sodium channels in sensory nerves, making it a time-tested localized dental anesthetic and antiseptic.'
    },
    tags: ['Dental', 'Toothache', 'Spice', 'Digestion', 'Pain']
  }
];
