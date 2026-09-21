import { MedicinalPlant } from '../types';

export const USER_HERBS_PART2: MedicinalPlant[] = [
  {
    id: 'coffee',
    name: 'Coffee Herb (Coffee Bean)',
    marathiName: 'कॉफी वनस्पती (कॉफी बिया)',
    botanicalName: 'Coffea arabica L. / Coffea canephora Pierre ex A. Froehner (Robusta)',
    family: 'Rubiaceae',
    partUsed: 'Dried Ripe Seeds (Coffee Beans), Green Unroasted Coffee Beans, Leaves',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/Coffea_arabica_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-038.jpg',
    traditionalUses: [
      'Central nervous system (CNS) stimulant that enhances alertness, psychomotor speed, and reduces mental fatigue.',
      'Chlorogenic acids in unroasted Green Coffee Bean extract support metabolic weight loss and improve glucose tolerance.',
      'Caffeine enhances the analgesic efficacy of paracetamol and aspirin when formulated together in migraine remedies.',
      'Acts as a mild respiratory bronchodilator and peripheral diuretic by antagonizing adenosine receptors.'
    ],
    safetyPrecautions: [
      'Limit intake in severe anxiety disorders, panic disorders, and cardiac arrhythmias (sinus tachycardia).',
      'Avoid high doses during pregnancy; limit caffeine intake to < 200 mg per day to avoid low birth weight risk.',
      'Caffeine interferes with the absorption of iron supplements; consume at least 1 hour apart from meals.'
    ],
    sideEffects: [
      'Caffeine jitteriness, restlessness, muscular tremors, and severe insomnia if taken close to bedtime.',
      'Sinus tachycardia, palpitations, and transient elevation in systemic blood pressure.',
      'Gastric hyperacidity, acid reflux (GERD), and epigastric burning due to stimulation of hydrochloric acid secretion.',
      'Caffeine withdrawal syndrome: throbbing frontal headache, fatigue, irritability, and difficulty concentrating.'
    ],
    phytochemicals: [
      'Caffeine (1,3,7-trimethylxanthine - 1.0-2.5% in Arabica, up to 4% in Robusta)',
      'Chlorogenic acid (5-caffeoylquinic acid - chief antioxidant)',
      'Theobromine and Theophylline (trace xanthines)',
      'Caffeic acid and Ferulic acid',
      'Diterpenes (Cafestol and Kahweol - present in unfiltered coffee)'
    ],
    dosageForms: [
      'Standardized Caffeine: 50 to 200 mg per dose',
      'Green Coffee Bean Extract (50% Chlorogenic acids): 200 to 400 mg twice daily before meals',
      'Infused Coffee Decoction: 1 cup (approx. 80-100 mg caffeine)',
      'Topical Caffeine Gel: 1% to 3% for localized cellulite and dark eye circles'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp stimulant)',
      virya: 'Ushna (Heating potency)',
      vipaka: 'Katu (Pungent post-digestive)',
      prabhava: 'Mada-Janana (Excitant / Stimulant), Hridya (Mild cardiotonic in moderation)',
      doshaKarma: 'Pacifies Kapha; strongly aggravates Vata and Pitta with habitual or excessive consumption'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Unroasted Green Coffee Bean Extract',
        rationale: 'Bilayer anti-obesity tablet combining Green Coffee Chlorogenic acid with Garcinia cambogia HCA for lipid metabolic control.',
        evaluationParameters: 'Chlorogenic acid HPLC assay (min 45%), In vitro pancreatic lipase inhibition, Dissolution kinetics, Friability.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Purified Caffeine Fraction',
        rationale: 'Niosome-based transdermal anti-cellulite slimming gel for targeted lipolysis in subcutaneous adipose tissue.',
        evaluationParameters: 'Encapsulation efficiency, Skin penetration via Franz diffusion cell, Rheological behavior, Cellulite score.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Supercritical Decaffeinated Bean Residue',
        rationale: 'Functional prebiotic dietary fiber extraction from spent coffee grounds rich in soluble galactomannans.',
        evaluationParameters: 'Soluble dietary fiber content, In vitro fecal prebiotic fermentation rate, Water retention capacity.',
      }
    ],
    quiz: {
      question: 'Which prominent polyphenol antioxidant in unroasted Green Coffee Beans is credited with improving glucose tolerance and weight balance?',
      options: ['Chlorogenic acid', 'Caffeine', 'Cafestol', 'Quinine'],
      correctAnswerIndex: 0,
      explanation: 'Chlorogenic acid (5-caffeoylquinic acid) inhibits hepatic glucose-6-phosphatase, regulating glucose output and lipid metabolism.'
    },
    tags: ['Energy', 'Brain', 'Metabolism', 'Weight', 'Stimulant']
  },
  {
    id: 'coriander',
    name: 'Coriander (Dhanyaka / Cilantro)',
    marathiName: 'धने (कोथिंबीर)',
    botanicalName: 'Coriandrum sativum L.',
    family: 'Apiaceae (Umbelliferae)',
    partUsed: 'Dried Ripe Fruits (Coriander Seeds), Fresh Leaves (Cilantro / Kothimbir)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Coriandrum_sativum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-045.jpg',
    traditionalUses: [
      'Ayurveda’s renowned cooling digestive (Tridoshahara) that quells burning sensations, hyperacidity, and thirst (Trishna).',
      'Dhanyaka Hima (Cold water seed infusion) is the gold standard classical remedy for burning micturition, dysuria, and acute fevers.',
      'Soothes gastrointestinal bloating, intestinal cramps, and irritable bowel syndrome through carminative linalool oil.',
      'Assists in heavy metal detoxification and supports healthy fasting blood sugar and lipid profiles.'
    ],
    safetyPrecautions: [
      'Generally exceptionally safe both as food and therapeutic medicine.',
      'Possesses mild diuretic and hypotensive action; monitor when taking high-dose seed extracts with anti-hypertensives.',
      'Some individuals experience genetic sensory aversion to fresh cilantro leaves due to OR6A2 aldehyde olfactory receptors.'
    ],
    sideEffects: [
      'Generally free from toxic side effects at culinary and standard therapeutic doses.',
      'Excessive cold infusions may induce mild polyuria (increased urine output).',
      'Rare contact dermatitis or bronchial asthma in workers handling bulk dried coriander dust.'
    ],
    phytochemicals: [
      'd-Linalool (Coriandrol - 60-70% in seed volatile oil)',
      'alpha-Pinene and gamma-Terpinene',
      'Flavonoids (Quercetin, Rutin, Isoquercitrin)',
      'Phenolic acids (Caffeic acid, Chlorogenic acid)',
      'Petroselinic acid (major fatty acid in fixed seed oil)'
    ],
    dosageForms: [
      'Dhanyaka Churna (Seed powder): 3 to 6 g with water or sugar',
      'Dhanyaka Hima (Cold water seed infusion): 40 to 60 mL twice daily',
      'Coriander Seed Essential Oil: 1 to 3 drops in carrier',
      'Fresh Leaf Juice (Kothimbir Swarasa): 10 to 20 mL'
    ],
    ayurvedicProperties: {
      rasa: 'Kashaya (Astringent), Tikta (Bitter), Madhura (Sweet)',
      guna: 'Laghu (Light), Snigdha (Unctuous)',
      virya: 'Ushna (Mildly warming when dried, yet possesses distinct Sheeta/cooling action on Pitta in cold infusion)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Trishnanigrahana (Thirst quencher), Mutravirechaniya (Diuretic)',
      doshaKarma: 'Pacifies all three doshas (Tridoshahara), uniquely gentle on Pitta dosha'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Cold-Infused Seed Extract',
        rationale: 'Cooling pediatric antipyretic and rehydration syrup formulated with Coriander, Vetiver (Ushira), and Rose petals for heatstroke and burning urination.',
        evaluationParameters: 'Electrolyte content (K+, Na+), pH, Specific gravity, Taste acceptability in sensory panels.',
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Linalool Seed Fraction',
        rationale: 'Chewable carminative tablet for irritable bowel syndrome (IBS) with bloating and postprandial cramping.',
        evaluationParameters: 'In vitro smooth muscle antispasmodic response on isolated ileum, Linalool GC assay, Disintegration.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Whole Dried Coriander Fruits',
        rationale: 'Supercritical CO2 fluid extraction and gas chromatography profiling of Coriander seed oil to maximize linalool yield.',
        evaluationParameters: 'Supercritical extraction efficiency, Acid value, Peroxide value, Linalool percentage (> 65%).',
      }
    ],
    quiz: {
      question: 'Which classical Ayurvedic preparation of coriander seeds steeped overnight in cold water is revered for quenching burning urination and thirst?',
      options: ['Dhanyaka Hima', 'Dhanyaka Kwatha', 'Dhanyaka Taila', 'Dhanyaka Ghrita'],
      correctAnswerIndex: 0,
      explanation: 'Dhanyaka Hima is a cold infusion prepared by soaking crushed coriander seeds overnight (1:6 ratio) to maximize cooling water-soluble principles.'
    },
    tags: ['Cooling', 'Digestion', 'Urinary', 'Pitta', 'Spice']
  },
  {
    id: 'datura',
    name: 'Datura (Thorn Apple / Dhattura)',
    marathiName: 'धोत्रा (धत्तूर)',
    botanicalName: 'Datura metel L. / Datura stramonium L.',
    family: 'Solanaceae',
    partUsed: 'Purified Seeds (Shodhita Dhattura Beeja), Dried Leaves, Roots, Flowers',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Datura_metel_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-048.jpg',
    traditionalUses: [
      'Ayurvedic Upavisha (semi-poison) strictly used only after classical detoxification (Shodhana in cow’s milk or Gomutra).',
      'Potent bronchodilator historically smoked or vaporized to rapidly arrest acute asthmatic bronchospasm (Asthma cigarettes).',
      'Topical medicated oil (Dhattura Taila) is a supreme remedy for severe arthritic joint pain, sciatica, and alopecia areata.',
      'Potent central antispasmodic and peripheral secretagogue suppressor in specialized formulations like Kanakasava.'
    ],
    safetyPrecautions: [
      'HIGHLY TOXIC DELIRIANT PLANT. Ingestion of raw unpurified seeds or leaves can be rapidly fatal.',
      'Contraindicated in narrow-angle glaucoma, benign prostatic hyperplasia with urinary obstruction, and severe cardiac arrhythmias.',
      'Must NEVER be used recreationally; produces terrifying hallucinations, delirium, hyperthermia, and amnesia.'
    ],
    sideEffects: [
      'Severe Anticholinergic Poisoning: Complete xerostomia (extreme dry mouth), dysphagia, and burning thirst.',
      'Widely dilated unreactive pupils (extreme mydriasis) and intense photophobia with blurred vision.',
      'Severe tachycardia, skin flushing, cessation of sweating leading to malignant hyperthermia (fever up to 108°F).',
      'Bizarre hallucinations, aggressive delirium, urinary retention, convulsive seizures, respiratory paralysis, and death.'
    ],
    phytochemicals: [
      'Scopolamine (Hyoscine - predominant alkaloid in Datura metel)',
      '(-)-Hyoscyamine and Atropine',
      'Withanolides (Daturataturin, Withametelin)',
      'Tigloidine and Meteloidine',
      'Flavonoids and Tannins'
    ],
    dosageForms: [
      'CRITICAL: Only for controlled medicinal use under registered Ayurvedic / medical specialists.',
      'Kanakasava (Classical fermented formulation): 10 to 20 mL strictly with water post meals',
      'Purified Seed Powder (Shodhita): 30 to 60 mg (Micro-dose only)',
      'Dhattura Taila (Medicated external oil): For external massage on arthritic joints and scalp only'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Extremely penetrating/toxic - Upavisha)',
      virya: 'Ushna (Intensely Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Shwasahara (Anti-asthmatic), Madakari (Narcotic intoxicant), Vedanahara (Analgesic)',
      doshaKarma: 'Pacifies Vata and Kapha doshas; violently provokes Pitta and Rakta when taken incorrectly'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Topical Leaf and Seed Extract',
        rationale: 'Nano-liposomal topical analgesic gel for intractable osteoarthritic knee pain avoiding systemic anticholinergic toxicity.',
        evaluationParameters: 'Hyoscine skin permeation vs systemic bloodstream leakage, Paw edema inhibition, Local skin tolerability index.',
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Standardized Leaf Extract (Alkaloid < 0.01%)',
        rationale: 'Modern standardized non-alcoholic Kanakasava formulation for chronic refractory asthma and COPD bronchospasm.',
        evaluationParameters: 'Scopolamine and Hyoscyamine quantification via LC-MS/MS, Bronchodilatory index on guinea pig tracheal spirals.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Seeds undergoing classical Shodhana',
        rationale: 'Scientific validation of traditional Shodhana (processing with cow’s milk) on tropane alkaloid degradation and detoxification.',
        evaluationParameters: 'Pre- and post-Shodhana alkaloid profile via HPLC, LD50 toxicity determination in animal models.',
      }
    ],
    quiz: {
      question: 'Which prominent classical fermented Ayurvedic formulation utilizes processed Datura (Kanakah) for relieving chronic asthma and cough?',
      options: ['Kanakasava', 'Drakshasava', 'Arjunarishta', 'Ashokarishta'],
      correctAnswerIndex: 0,
      explanation: 'Kanakasava is an ancient hydroalcoholic Arishta that utilizes processed Kanaka (Datura) along with Vasaka to dilate bronchial passages.'
    },
    tags: ['Toxic', 'Asthma', 'Alkaloid', 'Pain', 'Upavisha']
  },
  {
    id: 'ephedra',
    name: 'Ephedra (Somlata / Ma Huang)',
    marathiName: 'सोमलता (एफेड्रा)',
    botanicalName: 'Ephedra sinica Stapf / Ephedra gerardiana Wall. ex C.A. Mey.',
    family: 'Ephedraceae',
    partUsed: 'Dried Green Herbaceous Aerial Stems',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/75/Ephedra_sinica_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-051.jpg',
    traditionalUses: [
      'Revered in ancient Vedic texts as candidate for sacred "Soma" and in Chinese medicine as Ma Huang for over 5,000 years.',
      'Potent bronchodilator for acute bronchial asthma, wheezing, and allergic respiratory conditions.',
      'Central nervous system stimulant and potent nasal decongestant (precursor to modern Pseudoephedrine).',
      'Historically used for thermogenic metabolic stimulation, diuresis, and alleviation of arthritic joint aches.'
    ],
    safetyPrecautions: [
      'REGULATED BOTANICAL: Banned in over-the-counter dietary weight-loss supplements due to serious cardiovascular risks.',
      'Strictly contraindicated in hypertension, coronary artery disease, hyperthyroidism, glaucoma, and benign prostatic hyperplasia.',
      'Interacts dangerously with monoamine oxidase inhibitors (MAOIs), cardiac glycosides, and sympathomimetic drugs.'
    ],
    sideEffects: [
      'Cardiovascular toxicity: Severe hypertension, tachycardia, palpitations, myocardial infarction, and stroke.',
      'CNS overstimulation: Insomnia, severe restlessness, tremors, anxiety, nervousness, and psychosis.',
      'Urinary retention and painful micturition in males with prostate enlargement.',
      'Tolerance and dependency with repeated consumption.'
    ],
    phytochemicals: [
      '(-)-Ephedrine (up to 90% of total alkaloid content - sympathomimetic alpha and beta adrenergic agonist)',
      '(+)-Pseudoephedrine (stereoisomer with strong nasal decongestant properties)',
      'Norephedrine and Norpseudoephedrine',
      'Catechin and Epicatechin tannins',
      'Flavonoids and volatile oil'
    ],
    dosageForms: [
      'CRITICAL: Regulated prescription / herbal pharmacopoeial item.',
      'Standardized Herbal Ephedrine: Max 8 mg per single dose, not exceeding 24 mg daily under medical supervision',
      'Somlata Kwatha (Ayurvedic classical stem decoction): 15 to 30 mL strictly as advised',
      'Purified Pseudoephedrine: Standard pharmaceutical nasal decongestant'
    ],
    ayurvedicProperties: {
      rasa: 'Kashaya (Astringent), Tikta (Bitter)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp/Penetrating)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Shwasahara (Potent bronchodilator), Hridya-balya (Cardiac stimulant)',
      doshaKarma: 'Aggressively pacifies Kapha and Vata; sharply elevates Pitta and blood pressure'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Alkaloid Extract',
        rationale: 'Controlled-release micro-pellet tablet for nocturnal asthma attacks preventing early-morning bronchoconstriction.',
        evaluationParameters: 'Ephedrine dissolution profile at varying pH, In vitro beta-2 adrenergic selectivity, Hardness, Friability.',
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aerial Stem Aqueous Extract',
        rationale: 'Pediatric non-sedative decongestant elixir combining Ephedra gerardiana with Vasaka and Licorice root.',
        evaluationParameters: 'Total alkaloid titration via non-aqueous acidimetry, Specific gravity, Accelerated stability.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micronized Stems',
        rationale: 'Chiral capillary electrophoresis and HPLC assay protocol for simultaneous quantification of Ephedrine and Pseudoephedrine isomers.',
        evaluationParameters: 'Chiral enantiomer separation factor, Limit of quantification (LOQ), Peak symmetry, System suitability.',
      }
    ],
    quiz: {
      question: 'Which direct and indirect sympathomimetic alkaloid isolated from Ephedra is the chemical precursor to modern OTC nasal decongestants?',
      options: ['Pseudoephedrine & Ephedrine', 'Atropine', 'Reserpine', 'Strychnine'],
      correctAnswerIndex: 0,
      explanation: 'Ephedrine and Pseudoephedrine are phenethylamine alkaloids that stimulate adrenergic receptors to relieve nasal congestion and asthma.'
    },
    tags: ['Respiratory', 'Asthma', 'Decongestant', 'Alkaloid', 'Stimulant']
  },
  {
    id: 'ergot',
    name: 'Ergot of Rye',
    marathiName: 'एर्गॉट (राय धान्यावरील बुरशी)',
    botanicalName: 'Claviceps purpurea (Fr.) Tul.',
    family: 'Clavicipitaceae',
    partUsed: 'Dried Sclerotium (fungal resting body developed in the ovary of Rye grass, Secale cereale)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Claviceps_purpurea_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-039.jpg',
    traditionalUses: [
      'Historic pharmacognostic fungal drug utilized in obstetrics to stimulate vigorous uterine contractions in postpartum hemorrhage (PPH).',
      'Ergotamine is a time-tested specific abortive treatment for acute vascular migraine attacks via cranial vasoconstriction.',
      'Dihydroergotamine and Ergonovine derivatives act on alpha-adrenergic, dopaminergic, and 5-HT serotonergic receptors.',
      'Seminal precursor in neurological pharmacology: Lysergic acid (LSD) was synthesized from ergot by Albert Hofmann.'
    ],
    safetyPrecautions: [
      'DEADLY TOXIC PRESCRIPTION BOTANICAL. Never consume rye grains contaminated with dark horn-shaped ergot sclerotia.',
      'Absolute contraindication in active pregnancy: induces violent uterine contractions and complete fetal death or miscarriage.',
      'Contraindicated in peripheral vascular disease, severe hypertension, coronary artery disease, and impaired liver/kidney function.'
    ],
    sideEffects: [
      'Ergotism ("St. Anthony\'s Fire"): Severe dry gangrene of extremities due to intense unremitting peripheral vasoconstriction.',
      'Convulsive Ergotism: Painful muscle spasms, twitching, paresthesia ("pins and needles"), delirium, and hallucinations.',
      'Severe nausea, vomiting, dizziness, abdominal cramps, and chest tightness.',
      'Loss of fingers, toes, and limbs historically caused by eating contaminated rye bread.'
    ],
    phytochemicals: [
      'Ergometrine (Ergonovine - water-soluble oxytocic alkaloid)',
      'Ergotamine and Ergotaminine (peptide alkaloids - vasoconstrictors)',
      'Ergotoxine group (Ergocristine, Ergocryptine, Ergocornine)',
      'Lysergic acid and Isolysergic acid (tetracyclic indole skeleton)',
      'Fixed oil and Ergosterol'
    ],
    dosageForms: [
      'CRITICAL: Administered solely as purified, standardized pharmaceutical drugs under strict medical orders.',
      'Ergotamine Tartrate Tablets: 1 mg (for acute migraine attack)',
      'Methylergonovine Maleate (Methergine): 0.2 mg IM or IV for postpartum hemorrhage',
      'Raw crude sclerotium is strictly forbidden from domestic use'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Extremely toxic - Mahavisha behavior)',
      virya: 'Ushna (Extremely Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Garbhashaya-Sankochaka (Violent uterine contractant / Oxytocic)',
      doshaKarma: 'Severely vitiates Pitta and Rakta Dhatu, resulting in burning tissue necrosis in toxicity'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Ergotamine Tartrate + Caffeine',
        rationale: 'Sublingual fast-dissolving micro-tablet with Caffeine enhancer for immediate onset of cranial migraine vasoconstriction.',
        evaluationParameters: 'Disintegration time (< 30 seconds), Sublingual mucosal permeability, Ergotamine HPLC purity assay.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Fermentation Broth Fraction',
        rationale: 'Submerged microbial fermentation optimization of Claviceps purpurea strains for high-yield ergometrine biosynthesis.',
        evaluationParameters: 'Bioreactor dissolved oxygen profile, Alkaloid yield per liter, Mycelial dry weight, HPLC broth quantification.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Sclerotia Powder',
        rationale: 'Rapid fluorometric and Van Urk reagent colorimetric screening protocol to detect ergot alkaloid contamination in commercial cereal flours.',
        evaluationParameters: 'Detection limit in rye flour (< 0.05% w/w), Colorimetric absorbance at 590 nm, Recovery percentage.',
      }
    ],
    quiz: {
      question: 'What historical medieval toxic epidemic, marked by burning sensations and gangrene of limbs, was caused by eating bread contaminated with Ergot?',
      options: ['St. Anthony\'s Fire (Ergotism)', 'Black Death', 'Dancing Plague', 'Scurvy'],
      correctAnswerIndex: 0,
      explanation: 'St. Anthony\'s Fire was the historical name for gangrenous ergotism, caused by ergotamine-induced severe vasoconstriction cutting off blood flow to limbs.'
    },
    tags: ['Toxic', 'Migraine', 'Uterine', 'Fungal', 'Alkaloid']
  },
  {
    id: 'fennel',
    name: 'Fennel (Saunf / Shatapushpa)',
    marathiName: 'बडीशेप',
    botanicalName: 'Foeniculum vulgare Mill.',
    family: 'Apiaceae (Umbelliferae)',
    partUsed: 'Dried Ripe Fruits (Cremocarps / Fennel Seeds), Leaves, Roots',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/23/Foeniculum_vulgare_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-060.jpg',
    traditionalUses: [
      'The premier carminative chewed after meals across India to freshen breath, rekindle digestive Agni, and prevent bloating.',
      'Soothes infantile colic, griping abdominal pain, and pediatric indigestion (key ingredient in classic Gripe Water).',
      'Promotes breast milk production (galactagogue) and regulates menstrual irregularities due to phytoestrogenic anethole.',
      'Soothes cough, liquefies bronchial mucus, and works as an expectorant in pediatric cough syrups.'
    ],
    safetyPrecautions: [
      'High concentrated fennel essential oil should be avoided during pregnancy due to uterine stimulating potential.',
      'Safe in culinary and standard tea amounts for nursing mothers; do not give pure undiluted essential oil to infants.',
      'Rare cross-reactivity in individuals with celery-carrot-mugwort-spice allergy syndrome.'
    ],
    sideEffects: [
      'Exceptionally safe with high clinical tolerability.',
      'Excessive consumption of pure essential oil may cause nausea, vomiting, or mild seizures in young infants.',
      'Photodermatitis in sensitive skin following contact with fresh sap and UV exposure.'
    ],
    phytochemicals: [
      'trans-Anethole (50-80% in volatile oil - sweet liquorice aroma & phytoestrogenic action)',
      '(+)-Fenchone (imparts characteristic camphoraceous bitter note)',
      'Estragole (Methyl chavicol)',
      'Flavonoids (Rutin, Quercetin, Kaempferol)',
      'Fixed oil (Petroselinic acid)'
    ],
    dosageForms: [
      'Shatapushpa Churna (Seed powder): 3 to 6 g with warm water',
      'Arka Shatapushpa (Fennel Distillate / Gripe Water): 10 to 20 mL for adults; 2.5 to 5 mL for infants',
      'Fennel Tea: 1 tsp crushed seeds steeped in 1 cup hot water',
      'Fennel Essential Oil: 1 to 2 drops'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura (Sweet), Tikta (Bitter), Katu (Pungent)',
      guna: 'Laghu (Light), Snigdha (Unctuous)',
      virya: 'Sheeta (Cooling potency - uniquely among digestive seeds, Saunf is Pitta-cooling)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Deepana (Digestive kindler), Stanyajanana (Galactagogue), Drishtiprada (Improves eyesight)',
      doshaKarma: 'Pacifies Vata and Pitta doshas; balances digestive fire without overheating'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Seed Aqueous Distillate (Fennel Water)',
        rationale: 'Sugar-free pediatric carminative drops formulated with Fennel distillate and Chamomile for infant colic and gastrointestinal spasm.',
        evaluationParameters: 'Infant colic reduction score, Trans-Anethole content, Viscosity, Microbial safety testing over 12 months.',
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Supercritical CO2 Seed Extract',
        rationale: 'Fast-dissolving mouth freshener tablet with microencapsulated trans-Anethole for instant halitosis eradication and digestive aid.',
        evaluationParameters: 'Mouthfeel and sensory panel testing, Volatile oil retention (> 92%), Disintegration time (< 25s).',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Whole Dried Seeds',
        rationale: 'Standardization and chemotypic differentiation between Sweet Fennel (var. dulce) and Bitter Fennel (var. vulgare) via GC-MS.',
        evaluationParameters: 'trans-Anethole to Fenchone ratio, Volatile oil yield (min 4.0% v/w), Foreign organic matter determination.',
      }
    ],
    quiz: {
      question: 'Which sweet phenylpropanoid compound accounts for up to 80% of Fennel seed essential oil and gives it its signature sweet aroma?',
      options: ['trans-Anethole', 'Marmelosin', 'Curcumin', 'Allicin'],
      correctAnswerIndex: 0,
      explanation: 'trans-Anethole is responsible for the characteristic sweet liquorice-like fragrance and carminative actions of fennel and anise.'
    },
    tags: ['Digestive', 'Colic', 'Cooling', 'Galactagogue', 'Breath']
  },
  {
    id: 'garlic',
    name: 'Garlic (Lashuna)',
    marathiName: 'लसूण',
    botanicalName: 'Allium sativum L.',
    family: 'Amaryllidaceae (Alliaceae)',
    partUsed: 'Compound Bulb (Cloves / Lashuna Kanda), Fresh Bulb Juice, Garlic Oil',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/43/Allium_sativum_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-008.jpg',
    traditionalUses: [
      'Ayurveda’s legendary Rasona (having 5 tastes minus sour): celebrated as the ultimate remedy for Vata disorders and arthritis.',
      'Cardiovascular protector: clinically reduces total cholesterol, LDL, triglycerides, and systolic blood pressure.',
      'Inhibits platelet aggregation, decreases arterial plaque calcification, and prevents thromboembolic events.',
      'Broad-spectrum antimicrobial and antiparasitic: combats respiratory infections, gut parasites, and Helicobacter pylori.'
    ],
    safetyPrecautions: [
      'Stop therapeutic garlic supplements at least 7 to 10 days before elective surgery due to antiplatelet bleeding risks.',
      'Contraindicated in active internal bleeding, peptic ulcers, and high Pitta conditions (severe hyperacidity).',
      'Use with caution alongside pharmaceutical anticoagulants (Warfarin, Clopidogrel, Aspirin).'
    ],
    sideEffects: [
      'Halitosis (characteristic pungent garlic breath) and pungent body odor.',
      'Heartburn, gastrointestinal burning sensation, flatulence, and nausea when consumed raw on an empty stomach.',
      'Increased risk of bleeding or bruising when combined with blood-thinners.',
      'Contact dermatitis in chefs and food handlers handling raw crushed garlic.'
    ],
    phytochemicals: [
      'Alliin (S-allyl-L-cysteine sulfoxide - odorless precursor)',
      'Allicin (diallyl thiosulfinate - produced enzymatically by Alliinase upon crushing/chewing)',
      'Ajoene (E- and Z-isomers - potent antiplatelet agents formed in oil macerates)',
      'Diallyl disulfide (DADS) and Diallyl trisulfide (DATS)',
      'S-Allylcysteine (SAC - bioavailable organosulfur compound in Aged Garlic Extract)'
    ],
    dosageForms: [
      'Fresh Garlic Cloves: 1 to 2 crushed cloves daily with food',
      'Lashuna Ksheerapaka (Garlic boiled in milk and water): 20 to 40 mL for heart and joint health',
      'Enteric-Coated Garlic Powder Tablets: 600 to 900 mg (standardized to 4,000 mcg Allicin potential)',
      'Aged Garlic Extract (Kyolic): 600 to 1200 mg daily'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura, Lavana, Katu, Tikta, Kashaya (Lacks only Amla/Sour rasa - hence named Rasona)',
      guna: 'Guru (Heavy), Snigdha (Unctuous), Tikshna (Sharp/Penetrating), Picchila (Slimy)',
      virya: 'Ushna (Extremely Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Hridya (Cardioprotective), Rasayana, Vatahara (Supreme Vata pacifier)',
      doshaKarma: 'Profoundly pacifies Vata and Kapha; strongly aggravates Pitta and Rakta'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Freeze-Dried Garlic Bulb Powder',
        rationale: 'Enteric-coated odor-free tablet with standardized alliinase activity ensuring high allicin yield in the duodenum without gastric burping.',
        evaluationParameters: 'Allicin potential assay via spectrophotometry (USP monograph), Disintegration in simulated gastric fluid (intact for 1h), Friability.',
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aged Garlic Extract (Fermented Bulb)',
        rationale: 'Water-soluble S-Allylcysteine cardiovascular syrup for elderly hypertension and arterial stiffness reduction.',
        evaluationParameters: 'S-Allylcysteine (SAC) HPLC quantification, Specific gravity, Organoleptic stability, Total antioxidant capacity.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Garlic Oil Oleoresin (Ajoene 0.4%)',
        rationale: 'Topical antifungal cream for tinea pedis (athlete’s foot) and onychomycosis with efficacy matching terbinafine.',
        evaluationParameters: 'Ajoene stability in lipid vehicle, Antifungal MIC against Trichophyton rubrum, Skin tolerability.',
      }
    ],
    quiz: {
      question: 'Which organosulfur compound is rapidly produced when raw garlic cloves are crushed, releasing the enzyme alliinase?',
      options: ['Allicin', 'Alliin', 'Curcumin', 'Capsaicin'],
      correctAnswerIndex: 0,
      explanation: 'Crushing garlic ruptures cell membranes, allowing alliinase enzyme to convert alliin into volatile antimicrobial allicin.'
    },
    tags: ['Heart', 'Cholesterol', 'Blood Pressure', 'Immunity', 'Antimicrobial']
  },
  {
    id: 'ginger',
    name: 'Ginger (Ardraka / Shunthi)',
    marathiName: 'आले (सुंठ)',
    botanicalName: 'Zingiber officinale Roscoe',
    family: 'Zingiberaceae',
    partUsed: 'Fresh Rhizome (Ardraka), Dried Peeled Rhizome (Shunthi / Sonth)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a2/Zingiber_officinale_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-146.jpg',
    traditionalUses: [
      'Ayurveda’s "Universal Medicine" (Vishvabhesaja): supreme digestive stimulant that ignites digestive fire without aggravating Pitta (in dry Shunthi form).',
      'Clinically demonstrated antiemetic for motion sickness, chemotherapy nausea, and pregnancy-induced morning sickness.',
      'Potent anti-inflammatory for osteoarthritis, rheumatoid arthritis, and delayed-onset muscle soreness via 5-LOX and COX inhibition.',
      'Clears respiratory congestion, dissolves thoracic phlegm, and relieves cold, flu, and coughs.'
    ],
    safetyPrecautions: [
      'High therapeutic doses may inhibit platelet thromboxane synthetase; monitor when taken with warfarin or aspirin.',
      'Exercise caution in acute gallstones as ginger promotes gallbladder bile secretion.',
      'Limit fresh ginger in active bleeding disorders or severe ulcerative colitis.'
    ],
    sideEffects: [
      'Mild heartburn, belching, and stomach upset with excessive ingestion of raw pungent ginger.',
      'Mouth and throat irritation when chewing highly concentrated fresh root slices.',
      'Increased tendency to bleed in patients with pre-existing clotting disorders when mega-dosing.'
    ],
    phytochemicals: [
      'Gingerols ([6]-Gingerol - chief pungent principle in fresh rhizome)',
      'Shogaols ([6]-Shogaol - formed upon drying/heating, 2x more pungent and anti-inflammatory)',
      'Zingiberene (up to 30% of volatile oil - sesquiterpene)',
      'Paradols and Zingerone',
      'Curcumene and beta-Bisabolene'
    ],
    dosageForms: [
      'Shunthi Churna (Dry ginger powder): 1 to 2 g with warm water, honey, or ghee',
      'Ardraka Swarasa (Fresh juice): 5 to 10 mL with raw honey',
      'Ginger Tea: 2-3 g freshly grated rhizome steeped in boiling water',
      'Standardized Ginger Extract (5% Gingerols): 250 to 500 mg'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Pungent)',
      guna: 'Fresh Ardraka is Guru, Ruksha, Tikshna; Dried Shunthi is Laghu, Snigdha (Unctuous)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Madhura (Sweet post-digestive in dried Shunthi - remarkably soothing to Pitta)',
      prabhava: 'Deepana (Digestive kindle), Bhedana, Vata-Kapha-hara',
      doshaKarma: 'Dry Shunthi pacifies Vata and Kapha without provoking Pitta; fresh Ardraka stimulates digestion vigorously'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized [6]-Shogaol Enriched Dry Extract',
        rationale: 'Chewable antiemetic fast-melt tablet for motion sickness and morning sickness during early pregnancy.',
        evaluationParameters: 'Taste-masking efficacy, Disintegration time (< 30s), [6]-Gingerol and [6]-Shogaol HPLC quantification, Friability.',
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Fresh Rhizome Juice + Tulsi + Honey',
        rationale: 'Pediatric throat soothing expectorant syrup for bronchial spasm, productive cough, and seasonal flu.',
        evaluationParameters: 'Dynamic viscosity, Refractive index, Preservative efficacy testing (USP <51>), Microbial limit test.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Supercritical CO2 Ginger Oleoresin',
        rationale: 'Micro-emulsion transdermal gel for knee osteoarthritis targeting joint stiffness and inflammatory cytokines.',
        evaluationParameters: 'Skin permeation rate via Franz cell, Viscosity, Carrageenan paw edema inhibition, Anti-COX-2 assay.',
      }
    ],
    quiz: {
      question: 'Which pungent compound is formed when fresh ginger ([6]-gingerol) is dehydrated and dried, making dry Shunthi exceptionally potent?',
      options: ['[6]-Shogaol', 'Allicin', 'Eugenol', 'Marmelosin'],
      correctAnswerIndex: 0,
      explanation: 'Thermal dehydration converts [6]-gingerol into [6]-shogaol, which is significantly more pungent and has twice the anti-inflammatory potency.'
    },
    tags: ['Digestion', 'Nausea', 'Joints', 'Inflammation', 'Cough']
  },
  {
    id: 'henna',
    name: 'Henna (Madayantika / Mehendi)',
    marathiName: 'मेहंदी',
    botanicalName: 'Lawsonia inermis L.',
    family: 'Lythraceae',
    partUsed: 'Dried Leaves (Henna Powder), Seeds, Bark, Fragrant Flowers',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/55/Lawsonia_inermis_%283709419835%29.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    traditionalUses: [
      'Ancient natural dye and cooling dermatological paste applied to palms, soles, and hair for auspicious ceremonies and heat regulation.',
      'Soothes burning sensation in hands and feet (Pada Daha), neuropathy, and plantar erythema through intense cooling virya.',
      'Natural hair conditioner: binds to hair keratin, strengthens hair cuticles, treats dandruff, and prevents premature graying.',
      'Astringent bark and leaf decoction is used for jaundice, liver enlargement, and chronic stubborn eczema.'
    ],
    safetyPrecautions: [
      'STRICT WARNING: In patients with G6PD enzyme deficiency, topical henna application can trigger life-threatening acute hemolytic anemia.',
      'Avoid commercial "Black Henna", which is heavily adulterated with toxic synthetic para-phenylenediamine (PPD) causing severe chemical burns.',
      'Internal consumption of large quantities of leaf paste or decoction is toxic.'
    ],
    sideEffects: [
      'Acute intravascular hemolysis in individuals with Glucose-6-Phosphate Dehydrogenase (G6PD) deficiency.',
      'Severe allergic contact dermatitis, blister formation, and permanent scarring caused by synthetic PPD adulteration in Black Henna.',
      'Mild gastrointestinal cramping if ingested internally in high amounts.'
    ],
    phytochemicals: [
      'Lawsone (2-hydroxy-1,4-naphthoquinone - 1.0-1.4% in leaves - the natural auburn/red-orange dye)',
      'Tannins (5-10% Gallic acid and catechin tannins)',
      'Flavonoids (Luteolin, Apigenin)',
      'Coumarins (Fraxetin, Scopoletin)',
      'Beta-sitosterol and Resins'
    ],
    dosageForms: [
      'Pure Leaf Powder Paste: External application for hair, palms, and soles',
      'Madayantika Kwatha (Leaf decoction): 15 to 30 mL for skin disorders',
      'Henna Hair Oil (Medicated coconut/sesame oil): Topical application on scalp',
      'Purified Lawsone Extract: Standardized cosmetic formulations'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Extremely Cooling potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Dahanashaka (Supreme burner quencher), Keshya (Hair nourisher), Kusthaghna',
      doshaKarma: 'Pacifies Pitta and Kapha dosha; cools agitated Rakta Dhatu (blood)'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Aqueous-Alcoholic Leaf Extract',
        rationale: 'Antifungal and antibacterial hydrogel for tinea pedis and refractory diaper dermatitis utilizing natural Lawsone naphthoquinone.',
        evaluationParameters: 'Zone of inhibition against Malassezia furfur and Candida albicans, Lawsone content by HPTLC, Viscosity.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Pure Pulverized Leaves',
        rationale: 'Rapid electrochemical and spectroscopic screening method to detect harmful p-phenylenediamine (PPD) adulteration in retail henna.',
        evaluationParameters: 'PPD limit of detection (< 0.01%), Lawsone to tannin ratio, Heavy metal limits (Pb, As, Cd) per WHO.',
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Bark and Leaf Decoction',
        rationale: 'Cooling hepatoprotective liquid formulation for toxic hepatitis and bilirubin reduction in mild obstructive jaundice.',
        evaluationParameters: 'Serum bilirubin and ALT/AST reduction in animal models, Specific gravity, Organoleptic stability.',
      }
    ],
    quiz: {
      question: 'Which naturally occurring naphthoquinone pigment found in Lawsonia inermis leaves binds to skin and hair keratin to create reddish-brown stains?',
      options: ['Lawsone', 'Juglone', 'Alizarin', 'Curcumin'],
      correctAnswerIndex: 0,
      explanation: 'Lawsone (2-hydroxy-1,4-naphthoquinone) reacts through Michael addition with amino groups in keratin, permanently binding color.'
    },
    tags: ['Hair', 'Cooling', 'Dye', 'Skin', 'Astringent']
  },
  {
    id: 'lavender',
    name: 'Lavender (True Lavender)',
    marathiName: 'लॅव्हेंडर',
    botanicalName: 'Lavandula angustifolia Mill. (syn. Lavandula officinalis Chaix)',
    family: 'Lamiaceae',
    partUsed: 'Dried Flower Spikes (Flowering Tops), Pure Lavender Essential Oil',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4b/Lavandula_angustifolia_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-085.jpg',
    traditionalUses: [
      'Premier aromatherapeutic anxiolytic and sleep enhancer: inhalation reduces anxiety, calms autonomic nervous system, and induces deep sleep.',
      'Topical antiseptic and rapid wound healer for minor burns, scalds, cuts, and insect stings (pioneered by René-Maurice Gattefossé).',
      'Relieves tension headaches, migraine discomfort, and mental exhaustion through localized temple massage or vaporization.',
      'Soothes gastrointestinal spasms, nervous dyspepsia, and abdominal cramping caused by stress.'
    ],
    safetyPrecautions: [
      'Lavender essential oil should generally be diluted in carrier oils before broad cutaneous application to avoid sensitization.',
      'Avoid high oral doses of pure essential oil as it can irritate gastric mucous membranes.',
      'Prepubertal boys should avoid excessive chronic topical lavender formulations due to potential weak anti-androgenic/phytoestrogenic effects.'
    ],
    sideEffects: [
      'Generally very safe with high clinical tolerability.',
      'Allergic contact dermatitis in individuals sensitive to Linalool or Linalyl acetate.',
      'Nausea, belching, and mild headache if oral essential oil capsules are overconsumed on an empty stomach.',
      'Drowsiness when combined with sedative or hypnotic medications.'
    ],
    phytochemicals: [
      'Linalyl acetate (30-55% in flower essential oil - sweet floral ester)',
      'Linalool (20-35% - monoterpene alcohol modulating GABA-A receptors)',
      'Lavandulyl acetate and Lavandulol (diagnostic authenticity markers)',
      '1,8-Cineole and Camphor (ultra-low in True Lavender < 1%, higher in Spike Lavender)',
      'Rosmarinic acid and Ursolic acid'
    ],
    dosageForms: [
      'Standardized Lavender Oil Capsules (Silexan): 80 mg daily for anxiety and sleep quality',
      'Pure Essential Oil: 2 to 4 drops in an ultrasonic aroma diffuser or pillow spray',
      'Dried Flower Infusion / Tea: 1 to 2 tsp steeped in hot water',
      'Topical Massage Oil: 2% to 5% in sweet almond or jojoba oil'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent), Katu (Pungent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Medhya (Nootropic / Mind calming), Nidrajanana (Sleep inducer), Shirovirechana',
      doshaKarma: 'Profoundly pacifies agitated Vata and Pitta doshas; clears hyperactive mental Prana Vata'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Supercritical CO2 Flower Extract',
        rationale: 'Soft gelatin oral capsule containing 80 mg standardized Lavender essential oil for generalized anxiety disorder (GAD) without sedation.',
        evaluationParameters: 'Linalool and Linalyl acetate GC-FID quantification, Disintegration in simulated gastric fluid, GAD-7 clinical efficacy trial.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Pure Essential Oil + Aloe Vera',
        rationale: 'Fast-cooling topical hydrogel for first-degree thermal burns and solar erythema to accelerate epidermal re-epithelialization.',
        evaluationParameters: 'Burn wound closure rate in rodent models, Anti-inflammatory biomarker reduction, Rheological stability.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Dried Flower Spikes',
        rationale: 'Microencapsulated cyclodextrin complex for slow-release sustained aromatherapy sleep patches and pillow inserts.',
        evaluationParameters: 'Complexation efficiency, Volatile release profile over 12 hours, Headspace GC-MS analysis.',
      }
    ],
    quiz: {
      question: 'Which prominent monoterpene alcohol in lavender essential oil interacts with GABA-A and voltage-dependent calcium channels to produce anti-anxiety effects?',
      options: ['Linalool', 'Menthol', 'Thymol', 'Eugenol'],
      correctAnswerIndex: 0,
      explanation: 'Linalool binds to GABA-A receptors and inhibits voltage-dependent calcium channels in the amygdala, reducing anxiety without dependence.'
    },
    tags: ['Sleep', 'Anxiety', 'Stress', 'Aromatherapy', 'Brain']
  },
  {
    id: 'lemon',
    name: 'Lemon (Nimbuka / Citron)',
    marathiName: 'लिंबू',
    botanicalName: 'Citrus limon (L.) Osbeck',
    family: 'Rutaceae',
    partUsed: 'Fresh Fruit Juice (Nimbuka Swarasa), Outer Fruit Peel (Lemon Zest / Oil), Seeds',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/da/Citrus_limon_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-043.jpg',
    traditionalUses: [
      'Premier natural source of Ascorbic acid (Vitamin C) that boosts immune defense and prevents scurvy.',
      'Rekindles suppressed digestive fire (Deepana), relieves nausea, vomiting (Chhardi), and quenches burning thirst.',
      'Potent alkalizing agent in systemic metabolism: citric acid is metabolized into alkaline bicarbonates, preventing uric acid kidney stones.',
      'Peel bioflavonoids strengthen vascular capillary resistance, reduce capillary fragility, and support microcirculation.'
    ],
    safetyPrecautions: [
      'Excessive consumption of undiluted lemon juice can erode tooth enamel due to high citric acid content; rinse mouth with plain water after drinking.',
      'Avoid applying fresh lemon juice topically before immediate sun exposure; furocoumarins trigger phytophotodermatitis.',
      'Use with caution in active gastric ulceration or severe esophageal reflux.'
    ],
    sideEffects: [
      'Dental enamel demineralization and tooth sensitivity if consumed undiluted frequently.',
      'Heartburn, acid reflux, or epigastric burning in individuals with pre-existing GERD.',
      'Photodermatitis (skin hyperpigmentation, blistering) if peel oil is applied to skin exposed to ultraviolet sunlight.'
    ],
    phytochemicals: [
      'Citric acid (5-7% in fresh juice - responsible for tart taste and alkaline ash)',
      'Ascorbic acid (Vitamin C - 50 mg/100g juice)',
      'd-Limonene (up to 70% in cold-pressed peel oil)',
      'Hesperidin, Neohesperidin, and Eriocitrin (flavanone bioflavonoids)',
      'Pectin and Potassium'
    ],
    dosageForms: [
      'Fresh Lemon Juice: 5 to 15 mL diluted in lukewarm water with honey',
      'Lemon Peel Essential Oil: 1 to 2 drops in culinary or aroma vehicle',
      'Citrus Bioflavonoid Complex: 250 to 500 mg tablets',
      'Nimbuka Arka (Lemon distillate): 10 to 20 mL'
    ],
    ayurvedicProperties: {
      rasa: 'Amla (Sour)',
      guna: 'Laghu (Light), Tikshna (Sharp/Penetrating)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Amla (Sour post-digestive)',
      prabhava: 'Deepana (Digestive kindler), Chhardighna (Antiemetic), Krimighna',
      doshaKarma: 'Pacifies Vata dosha; can elevate Pitta in excessive concentrated doses'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Fresh Peel Bioflavonoid Extract',
        rationale: 'Eriocitrin and Hesperidin rich capillary-strengthening antioxidant syrup for diabetic retinopathy and microvascular protection.',
        evaluationParameters: 'Eriocitrin HPLC quantification, In vitro endothelial barrier permeability, Oxygen radical absorbance capacity (ORAC).',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Spray-Dried Fruit Juice with Potassium Citrate',
        rationale: 'Effervescent lithontriptic drink mix providing high urinary citrate to inhibit calcium oxalate and uric acid kidney stone formation.',
        evaluationParameters: 'Urinary pH alkalinization profile, Effervescence time, In vitro calcium oxalate crystallization inhibition.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Cold-Pressed Peel Essential Oil',
        rationale: 'Clarifying antimicrobial facial wash gel for acne vulgaris targeting Cutibacterium acnes biofilm without skin stripping.',
        evaluationParameters: 'Antimicrobial zone of inhibition, pH (5.5 skin compatible), Foam height, Draize skin irritation test.',
      }
    ],
    quiz: {
      question: 'Why does acidic lemon juice paradoxically exert a systemic alkalizing effect in the human body?',
      options: [
        'Its organic citric acid is fully metabolized in the Krebs cycle into alkaline carbon dioxide and water, leaving alkaline potassium bicarbonate',
        'It destroys gastric acid',
        'It contains large amounts of sodium hydroxide',
        'It absorbs hydrogen ions directly from blood'
      ],
      correctAnswerIndex: 0,
      explanation: 'Citrate ions are completely oxidized by mitochondria into CO2 and H2O, leaving behind alkaline mineral residues (potassium) that raise urine pH.'
    },
    tags: ['Vitamin C', 'Kidney', 'Digestion', 'Immunity', 'Fruit']
  },
  {
    id: 'myrrh',
    name: 'Myrrh (Bola / Guggulu relative)',
    marathiName: 'बोल (मुशीर)',
    botanicalName: 'Commiphora myrrha (Nees) Engl. / Commiphora molmol (Engl.) Engl. ex Tschirch',
    family: 'Burseraceae',
    partUsed: 'Oleo-Gum Resin exuded from Stems and Trunk (Myrrh tears)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Commiphora_myrrha_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-044.jpg',
    traditionalUses: [
      'Ayurveda’s legendary Bola: supreme uterine cleansing agent and emmenagogue used in Bolabaddha Rasa and Bolaparipata.',
      'Classic antimicrobial gargle and mouthwash for aphthous stomatitis, gingivitis, pharyngitis, and periodontal pocket infections.',
      'Potent topical antiseptic and tissue regenerator for slow-healing chronic wounds, bedsores, and varicose ulcers.',
      'Possesses marked antiparasitic and anti-schistosomal activity (standardized formulation Mirazid).'
    ],
    safetyPrecautions: [
      'STRICTLY CONTRAINDICATED IN PREGNANCY: acts as a potent emmenagogue and uterine stimulant, risking miscarriage.',
      'Avoid high doses in severe kidney disease as resin excretion can irritate renal parenchymal tubules.',
      'Do not apply undiluted alcoholic tincture to open wounds; can cause intense stinging pain and tissue irritation.'
    ],
    sideEffects: [
      'Uterine cramping and stimulation of menstrual bleeding.',
      'Gastric irritation, nausea, and loose stools if taken in high doses without demulcents.',
      'Cardiac arrhythmia or palpitations in extreme massive overdose.',
      'Allergic contact stomatitis or skin rash in sensitive individuals.'
    ],
    phytochemicals: [
      'Furanosesquiterpenes (Curzerene, Furanoeudesma-1,3-diene - analgesic and antimicrobial markers)',
      'Commiphoric acids and Myrrhanols',
      'Volatile oil (6-10% rich in Heerabolene)',
      'Water-soluble Gum (arabinose, galactose, 4-O-methylglucuronic acid)',
      'Triterpenoids (Mansumbinone)'
    ],
    dosageForms: [
      'Bola Churna (Purified resin powder): 0.5 to 1.5 g with warm milk or honey',
      'Myrrh Tincture (1:5): 1 to 2 mL diluted in a glass of warm water as mouthwash/gargle',
      'Bolabaddha Rasa (Classical uterine hemostatic tablet): 1 to 2 tablets',
      'Topical Medicated Ointment / Gel: 5% to 10% standardized resin'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp/Penetrating)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Raktashodhaka (Blood cleanser), Artavajanana (Uterine flow stimulator)',
      doshaKarma: 'Pacifies Vata and Kapha dosha; cleanses accumulated deep-seated toxic Ama'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Oleo-Gum Resin Hydroethanolic Extract',
        rationale: 'Bioadhesive periodontal gel for subgingival delivery in chronic periodontitis targeting Porphyromonas gingivalis.',
        evaluationParameters: 'Syringeability, Mucoadhesive force on oral mucosa, Furanoeudesma-1,3-diene release rate, Pocket depth reduction.',
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Oleo-Resin Extract',
        rationale: 'Enteric-coated antiparasitic tablet formulation for human schistosomiasis and fascioliasis targeting adult flukes.',
        evaluationParameters: 'In vitro Schistosoma mansoni parasite mortality, Disintegration in intestinal buffer, Curzerene HPLC assay.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Purified Gum-Resin Tears',
        rationale: 'Gas chromatography-mass spectrometry (GC-MS) fingerprinting protocol to verify botanical authenticity against adulterant resins.',
        evaluationParameters: 'Furanosesquiterpene biomarker ratios, Acid-insoluble ash, Alcohol-soluble extractive (min 30%).',
      }
    ],
    quiz: {
      question: 'Which unique class of sesquiterpenes in Myrrh (Commiphora myrrha) is responsible for its potent localized analgesic and anti-inflammatory action?',
      options: ['Furanosesquiterpenes (Furanoeudesma-1,3-diene)', 'Sennosides', 'Curcuminoids', 'Withanolides'],
      correctAnswerIndex: 0,
      explanation: 'Furanosesquiterpenes in myrrh interact with brain opioid receptors to relieve pain and inhibit inflammatory prostaglandins.'
    },
    tags: ['Resin', 'Dental', 'Gingivitis', 'Uterine', 'Antiseptic']
  },
  {
    id: 'peppermint',
    name: 'Peppermint (Pudina)',
    marathiName: 'पुदिना',
    botanicalName: 'Mentha x piperita L. (hybrid of Mentha aquatica x Mentha spicata)',
    family: 'Lamiaceae',
    partUsed: 'Dried Leaves, Flowering Tops, Peppermint Essential Oil (Menthol)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Mentha_piperita_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-092.jpg',
    traditionalUses: [
      'Clinically proven smooth muscle antispasmodic for Irritable Bowel Syndrome (IBS), abdominal cramps, and flatulence.',
      'Menthol stimulates TRPM8 cold-sensitive receptors in the skin and mucosa, producing a profound cooling and pain-relieving sensation.',
      'Inhalation of peppermint vapors clears congested nasal passages, sinuses, and relieves tension headaches.',
      'Soothes pruritus (intense itching), hives, and insect bites when applied as a localized topical menthol lotion.'
    ],
    safetyPrecautions: [
      'Contraindicated in severe gastroesophageal reflux disease (GERD) and hiatal hernia as it relaxes the lower esophageal sphincter.',
      'Do NOT apply menthol ointments near the nostrils or face of infants; can trigger severe reflex bronchospasm and laryngospasm.',
      'Contraindicated in severe liver damage, biliary tract obstruction, and gallstones without medical supervision.'
    ],
    sideEffects: [
      'Heartburn, esophageal acid regurgitation, and burning sensation in the stomach.',
      'Perianal burning during defecation when high doses of enteric-coated capsules dissolve.',
      'Laryngeal spasm and respiratory arrest in infants exposed to concentrated menthol near the airway.',
      'Rare contact stomatitis or allergic rash in menthol-sensitive individuals.'
    ],
    phytochemicals: [
      '(-)-Menthol (35-55% in essential oil - TRPM8 agonist)',
      'Menthone (15-30%) and Menthyl acetate (gives sweet peppermint note)',
      '1,8-Cineole (Eucalyptol) and Menthofuran',
      'Rosmarinic acid and Luteolin flavonoids',
      'Eriocitrin and Hesperidin'
    ],
    dosageForms: [
      'Enteric-Coated Peppermint Oil Capsules: 0.2 to 0.4 mL (187-374 mg) 3 times daily before meals for IBS',
      'Peppermint Tea: 1 to 2 tsp dried leaves steeped in hot water',
      'Peppermint Arka (Distillate / Pudina Hara): 5 to 10 drops in warm water',
      'Topical Menthol Balm: 1% to 10% menthol in ointment base for headache and muscular pain'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Pungent), Tikta (Bitter)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp)',
      virya: 'Sheeta (Cooling potency - uniquely among pungent herbs, Pudina produces cold sensation due to TRPM8 receptor firing)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Rochana, Deepana, Shulahara (Supreme colic reliever)',
      doshaKarma: 'Pacifies Kapha and Vata doshas; soothes agitated Pitta through localized cooling'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Pure Peppermint Essential Oil',
        rationale: 'pH-dependent colonic delivery capsule using Eudragit FS 30D coating to bypass the stomach and prevent reflux while targeting colonic IBS spasms.',
        evaluationParameters: 'Acid resistance (0% release at pH 1.2 for 2h), Rapid dissolution at pH 7.2, Menthol retention by GC-MS, Friability.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Purified Menthol + Camphor',
        rationale: 'Topical hydrogel for acute tension-type headaches applied to forehead and temples with cooling sensory bio-feedback.',
        evaluationParameters: 'TRPM8 channel activation in sensory assays, Skin permeation, Evaporation rate, Headache relief visual analog score.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Microencapsulated Leaf Essential Oil',
        rationale: 'Spray-dried cyclodextrin complexed peppermint flavor powder for digestive effervescent nutraceutical drinks.',
        evaluationParameters: 'Total oil retention, Encapsulation efficiency (> 90%), Reconstitution time, Volatile loss under accelerated storage.',
      }
    ],
    quiz: {
      question: 'Which sensory receptor is stimulated by (-)-Menthol in peppermint, generating its signature cold sensation and analgesic effect?',
      options: ['TRPM8 (Transient Receptor Potential Melastatin 8)', 'TRPV1', 'CB1 receptor', 'Opioid mu receptor'],
      correctAnswerIndex: 0,
      explanation: 'Menthol specifically activates TRPM8 channels on sensory neurons, creating the illusion of cold and blunting nociceptive pain signals.'
    },
    tags: ['IBS', 'Colic', 'Cooling', 'Headache', 'Digestion']
  },
  {
    id: 'tea',
    name: 'Tea Leaves (Green Tea / Black Tea)',
    marathiName: 'चहाची पाने (ग्रीन टी)',
    botanicalName: 'Camellia sinensis (L.) Kuntze',
    family: 'Theaceae',
    partUsed: 'Young Tender Leaf Shoots (Two Leaves and a Bud), Unfermented (Green), Fermented (Black)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Camellia_sinensis_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-024.jpg',
    traditionalUses: [
      'Powerhouse antioxidant rich in Epigallocatechin Gallate (EGCG) that protects against cellular oxidative damage and carcinogenesis.',
      'Enhances cardiovascular longevity: improves endothelial function, lowers LDL cholesterol, and reduces arterial stiffness.',
      'Promotes calm sustained mental alertness: unique combination of L-Theanine and Caffeine boosts alpha-brainwave synchronization.',
      'Aids in metabolic weight management by stimulating thermogenesis and hepatic fat oxidation.'
    ],
    safetyPrecautions: [
      'High-dose isolated green tea extract supplements taken on an empty stomach have been linked in rare cases to idiosyncratic hepatotoxicity.',
      'Tannins in tea strongly chelate non-heme dietary iron; avoid drinking tea with or immediately after meals in anemic patients.',
      'Consume during daytime; high caffeine in black tea can disturb sleep quality.'
    ],
    sideEffects: [
      'Idiosyncratic hepatotoxicity (elevated ALT/AST enzymes) with high-dose synthetic green tea extract pills taken on empty stomach.',
      'Gastric irritation, nausea, and acid hypersecretion if strong black tea is drunk on an empty stomach.',
      'Iron deficiency anemia with habitual heavy consumption during meals.',
      'Caffeine-induced insomnia, jitteriness, and polyuria in sensitive individuals.'
    ],
    phytochemicals: [
      'Epigallocatechin gallate (EGCG - 50-60% of total catechins in unfermented green tea)',
      'Epicatechin (EC), Epigallocatechin (EGC), Epicatechin gallate (ECG)',
      'L-Theanine (unique psychoactive amino acid - induces calming alpha waves)',
      'Caffeine (Theine - 2-4% in dry leaves)',
      'Theaflavins and Thearubigins (oligomeric polyphenol pigments formed during black tea fermentation)'
    ],
    dosageForms: [
      'Standardized Green Tea Extract (50% EGCG): 250 to 500 mg daily with meals',
      'Infused Green Tea Beverage: 2 to 3 cups freshly brewed (steeped 3 min at 80°C)',
      'Matcha (Stone-ground whole leaf powder): 1 to 2 g whisked in hot water',
      'Topical EGCG Cream: 1% to 2% for photoaging and acne vulgaris'
    ],
    ayurvedicProperties: {
      rasa: 'Kashaya (Astringent), Tikta (Bitter)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp)',
      virya: 'Ushna (Mildly Warming)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Medhya (Cognitive enhancer), Mutravirechaniya (Diuretic), Medohara (Lipid reducer)',
      doshaKarma: 'Pacifies Kapha; in excess, can aggravate Vata (dryness) and Pitta (caffeine heat)'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Epigallocatechin Gallate (EGCG 95%) Extract',
        rationale: 'Phospholipid phytosome complexed EGCG tablet with 3-fold enhanced oral bioavailability for cardiovascular atheroprotection.',
        evaluationParameters: 'EGCG phytosome complexation efficiency, Pharmacokinetic AUC in human plasma, DPPH antioxidant capacity, Friability.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Standardized Green Tea Polyphenol Fraction',
        rationale: 'Topical photoprotective anti-aging gel to reduce UV-induced matrix metalloproteinases (MMP-1) and collagen degradation.',
        evaluationParameters: 'MMP-1 gene expression inhibition in dermal fibroblasts, Viscosity, Polyphenol degradation kinetics, Skin hydration.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'High-L-Theanine Shade-Grown Tea Shoots',
        rationale: 'Soluble nootropic sachet formulation combining L-Theanine with Brahmi for working memory and stress-resilient executive function.',
        evaluationParameters: 'L-Theanine to Caffeine ratio, EEG alpha wave activity monitoring, Solubility, Shelf-life stability at 25°C.',
      }
    ],
    quiz: {
      question: 'Which major catechin polyphenol in Green Tea is considered its primary bioactive molecule for cellular protection and metabolic support?',
      options: ['Epigallocatechin gallate (EGCG)', 'Theaflavin', 'Linalool', 'Caffeic acid'],
      correctAnswerIndex: 0,
      explanation: 'EGCG is the most abundant and biologically active catechin in Camellia sinensis, responsible for the vast majority of its documented health benefits.'
    },
    tags: ['Antioxidant', 'Heart', 'Metabolism', 'Brain', 'Leaves']
  },
  {
    id: 'tragacanth',
    name: 'Tragacanth (Gond Katira)',
    marathiName: 'गोंद कतीरा (डिंक)',
    botanicalName: 'Astragalus gummifer Labill. / Astragalus microcephalus Willd.',
    family: 'Fabaceae (Papilionaceae)',
    partUsed: 'Dried Gummy Exudation from Stems and Branches (Gum Tragacanth / Gond Katira ribbons/flakes)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/87/Astragalus_gummifer_-_K%C3%B6hler%E2%80%93s_Medizinal-Pflanzen-017.jpg',
    traditionalUses: [
      'Ayurveda and Unani’s supreme summer cooling agent: soaked in water, it swells into translucent jelly to prevent heatstroke, nosebleeds, and burning urination.',
      'Pharmaceutical demulcent and outstanding natural suspending and binding agent in tablets, emulsions, and heavy suspensions.',
      'Nutritive tonic for postpartum maternal strength and recovery, often roasted in ghee or mixed in cooling falooda beverages.',
      'Natural bulk-forming laxative that absorbs water in the colon, softening stools and relieving constipation without griping.'
    ],
    safetyPrecautions: [
      'MUST always be consumed with adequate fluids (at least 1-2 full glasses of water) to prevent esophageal choking or bowel impaction.',
      'Do not consume in dry powder form without prior water soaking; it swells up to 10-20 times its original volume.',
      'May slow down the gastrointestinal absorption of orally administered prescription medications if taken together.'
    ],
    sideEffects: [
      'Esophageal obstruction or bowel blockage if swallowed dry without sufficient drinking water.',
      'Abdominal fullness, mild flatulence, and bloating during initial use due to natural prebiotic fiber fermentation.',
      'Rare occupational asthma or contact dermatitis in pharmaceutical manufacturing operators.'
    ],
    phytochemicals: [
      'Bassorin (Tragacanthin insoluble fraction - 60-70% - swells tremendously in water into stiff gel)',
      'Tragacanthin (water-soluble polysaccharide fraction - 30-40% - forms colloidal solution)',
      'D-Galacturonic acid, D-Galactose, L-Fucose, D-Xylose, L-Arabinose',
      'Calcium and magnesium mineral salts',
      'Trace starch and protein'
    ],
    dosageForms: [
      'Gond Katira Crystals: 5 to 10 g soaked overnight in 1 glass of water, consumed as jelly with milk or rose syrup',
      'Pharmaceutical Suspending Mucilage: 1.25% to 2.5% in oral liquid formulations',
      'Natural Tablet Binder: 2% to 5% dry powder',
      'Cooling Summer Drink (Falooda): 2 tablespoons hydrated gel'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura (Sweet), Kashaya (Astringent)',
      guna: 'Guru (Heavy), Snigdha (Unctuous), Picchila (Slimy)',
      virya: 'Sheeta (Intensely Cooling potency)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Balya (Strength giver), Dahanashaka (Heat reliever), Stambhana',
      doshaKarma: 'Profoundly pacifies Pitta and Vata doshas; mitigates hot seasonal ailments'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Purified Bassorin Fraction',
        rationale: 'Sustained-release mucoadhesive buccal hydrogel utilizing natural Gum Tragacanth as eco-friendly non-toxic biopolymer.',
        evaluationParameters: 'Swelling index (> 1500%), Mucoadhesive residence time on oral tissue, Viscosity vs shear rate, Drug release profile.',
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Water-Soluble Tragacanthin Gum',
        rationale: 'Natural plant-derived suspending agent for heavy insoluble pediatric antacid suspensions replacing synthetic carbomers.',
        evaluationParameters: 'Sedimentation volume ratio (F), Redispersibility number, Viscosity stability over 6 months at 40°C/75% RH.',
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'High-Purity Ribbon Tragacanth Powder',
        rationale: 'Direct-compression sustained-release matrix tablet of Metformin HCl utilizing Tragacanth as release-retardant hydrogel polymer.',
        evaluationParameters: 'In vitro drug dissolution kinetics (Korsmeyer-Peppas model), Hardness, Friability, Swelling kinetics in simulated gastric fluid.',
      }
    ],
    quiz: {
      question: 'Which water-insoluble polysaccharide component constitutes up to 70% of Gum Tragacanth and swells tremendously in water into a stiff gel?',
      options: ['Bassorin', 'Tragacanthin', 'Inulin', 'Pectin'],
      correctAnswerIndex: 0,
      explanation: 'Bassorin is the water-insoluble but water-swellable fraction of tragacanth that accounts for its extraordinary water absorption and gel volume.'
    },
    tags: ['Cooling', 'Gum', 'Laxative', 'Heatstroke', 'Demulcent']
  },
  {
    id: 'vinca',
    name: 'Vinca (Periwinkle / Sadaphuli)',
    marathiName: 'सदाफुली (नयनतारा)',
    botanicalName: 'Catharanthus roseus (L.) G. Don (syn. Vinca rosea L.)',
    family: 'Apocynaceae',
    partUsed: 'Dried Whole Plant, Leaves, Roots, Pink/White Flowers',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/6c/Madagascar_Periwinkle_%28Catharanthus_roseus%29.jpg',
    traditionalUses: [
      'The crown jewel of pharmacognostic oncology: source of Vincristine and Vinblastine, lifesaving chemotherapeutic agents.',
      'Vincristine is the mainstay curative treatment for childhood acute lymphoblastic leukemia (ALL), Hodgkin lymphoma, and Wilms tumor.',
      'Vinblastine is employed in testicular cancer, advanced breast cancer, and Kaposi sarcoma.',
      'Traditional folk medicine: fresh leaf decoction is widely utilized in indigenous communities for managing Type-2 diabetes and hypertension.'
    ],
    safetyPrecautions: [
      'CRITICAL MEDICAL ONCOLOGY BOTANICAL: Vinca alkaloids must NEVER be administered intrathecally (intrathecal injection is uniformly FATAL).',
      'Prescription antineoplastic drugs strictly administered by certified oncologists with intensive hematological monitoring.',
      'Crude plant is toxic; do not ingest large quantities of raw garden leaves.',
      'Severe teratogenic and abortifacient agent: absolute contraindication in pregnancy.'
    ],
    sideEffects: [
      'Dose-limiting neurotoxicity (Vincristine): Peripheral sensorimotor neuropathy, loss of deep tendon reflexes, foot drop, and cranial nerve palsies.',
      'Dose-limiting myelosuppression (Vinblastine): Severe leukopenia, neutropenia, and thrombocytopenia.',
      'Severe complete alopecia (hair loss), paralytic ileus, constipation, and jaw pain.',
      'Extravasation necrosis: Severe localized tissue sloughing if IV solution leaks outside veins.'
    ],
    phytochemicals: [
      'Vincristine (Leurocristine - dimeric indole-indoline alkaloid)',
      'Vinblastine (Vincaleukoblastine)',
      'Ajmalicine (Raubasine - hypotensive cardiovascular alkaloid in roots)',
      'Serpentine and Lochnerine',
      'Catharanthine and Vindoline (monomeric biosynthetic precursors)'
    ],
    dosageForms: [
      'CRITICAL: Pharmaceutical injectable chemotherapeutic drugs only.',
      'Vincristine Sulfate IV: 1.4 mg/m² strictly intravenous under oncology hospital protocol',
      'Vinblastine Sulfate IV: 3.7 to 5.5 mg/m² intravenous infusion',
      'Traditional Leaf Infusion (Folk Diabetes): 2-3 leaves steeped in water (monitoring required)'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Intensely Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Extremely sharp/toxic - Upavisha/Visha behavior)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Arbudahara (Anti-tumor / Anti-cancer), Pramehaghna (Anti-diabetic)',
      doshaKarma: 'Pacifies Kapha and Pitta related abnormal growths (Arbuda); vitiates Vata upon systemic neurotoxicity'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Leaf Alkaloid Fraction (Non-toxic dose)',
        rationale: 'Standardized hypoglycemic tablet evaluated for glucose transporter (GLUT-4) upregulation and beta-cell protection.',
        evaluationParameters: 'Ajmalicine and Catharanthine HPLC assay, Fasting blood glucose reduction in diabetic models, Cytotoxicity screen.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Semi-Synthetic Bis-Indole Alkaloid Liposomes',
        rationale: 'PEGylated liposomal nano-carrier delivery of Vincristine to reduce peripheral neurotoxicity and improve tumor accumulation.',
        evaluationParameters: 'Encapsulation efficiency (> 95%), Particle size (< 100 nm), Zeta potential, In vitro tumor cell cytotoxicity IC50.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Root and Shoot Tissue Cultures',
        rationale: 'Elicitation and metabolic engineering of Catharanthus roseus hairy root cultures to amplify Vincristine and Vinblastine yields.',
        evaluationParameters: 'Methyl jasmonate elicitor concentration, Alkaloid yield per gram dry biomass, Gene expression of strictosidine synthase.',
      }
    ],
    quiz: {
      question: 'How do the lifesaving Vinca alkaloids (Vincristine and Vinblastine) arrest cancer cell replication?',
      options: [
        'By binding to tubulin and inhibiting mitotic spindle microtubule assembly, arresting cells in metaphase',
        'By inhibiting DNA topoisomerase II',
        'By alkylating guanine bases in DNA',
        'By blocking tyrosine kinase receptors'
      ],
      correctAnswerIndex: 0,
      explanation: 'Vincristine and vinblastine bind specifically to beta-tubulin, blocking its polymerization into microtubules, which prevents mitotic spindle formation.'
    },
    tags: ['Cancer', 'Leukemia', 'Alkaloid', 'Oncology', 'Toxic']
  },
  {
    id: 'rue',
    name: 'Rue (Common Rue / Satap)',
    marathiName: 'सातप (रु)',
    botanicalName: 'Ruta graveolens L.',
    family: 'Rutaceae',
    partUsed: 'Dried Aerial Herb, Fresh Leaves, Volatile Oil of Rue',
    image: 'https://upload.wikimedia.org/wikipedia/commons/6/66/Die_Weinraute%2C_lat._Ruta_graveolens%2C_Pflanze_mit_den_gelben_Bl%C3%BCten.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    traditionalUses: [
      'Historic Ayurvedic and Mediterranean botanical for pediatric infantile convulsions, colic, and nervous hysteria.',
      'Potent emmenagogue historically used to stimulate delayed menstrual flow and relieve severe spasmodic dysmenorrhea.',
      'Rich natural botanical source of Rutin, the famous capillary-stabilizing bioflavonoid that prevents vascular fragility.',
      'Anti-helminthic and topical repellent applied against lice, fleas, and dermal fungal infections.'
    ],
    safetyPrecautions: [
      'STRICTLY CONTRAINDICATED IN PREGNANCY: potent abortifacient that causes violent pelvic congestion, uterine spasms, and abortion.',
      'Handling fresh leaves in sunlight causes severe phytophotodermatitis with painful blistering due to furanocoumarins.',
      'Overdose causes severe liver damage, acute renal failure, and death.'
    ],
    sideEffects: [
      'Phytophotodermatitis: Severe blistering, Erythema multiforme, and hyperpigmented scars upon contact with skin exposed to sun.',
      'Violent uterine hemorrhage and abortion.',
      'Severe epigastric pain, vomiting, diarrhea, acute hepatitis, nephritis, and circulatory collapse in toxic doses.',
      'Dizziness, mental confusion, and sleepiness.'
    ],
    phytochemicals: [
      'Rutin (quercetin-3-O-rutinoside - vascular protectant bioflavonoid up to 5%)',
      'Furanocoumarins (Bergapten, Psoralen, Xanthotoxin - phototoxic agents)',
      'Acridone and Quinoline alkaloids (Arborinine, Skimmianine, Graveoline)',
      'Volatile oil (rich in 2-undecanone and 2-nonanone)',
      'Coumarins (Rutamarin, Gravelliferone)'
    ],
    dosageForms: [
      'CRITICAL: Use strictly under professional herbalist guidance; never self-medicate high doses.',
      'Satap Churna (Herb powder): 0.5 to 1.0 g',
      'Leaf Infusion: 1 tsp dried herb in hot water (dilute)',
      'Standardized Rutin Extract: 50 to 100 mg tablets'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp/Penetrating)',
      virya: 'Ushna (Extremely Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Garbhashaya-Kshobhaka (Uterine stimulant / Emmenagogue), Krimighna',
      doshaKarma: 'Pacifies Vata and Kapha; sharply provokes Pitta and Rakta Dhatu'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Rutin Bioflavonoid Extract',
        rationale: 'Purified Rutin and Ascorbic acid matrix tablet for chronic venous insufficiency and diabetic capillary fragility.',
        evaluationParameters: 'Rutin assay by HPLC (> 98%), In vitro vascular permeability reduction, Dissolution kinetics, Friability.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Purified Coumarin-Free Leaf Extract',
        rationale: 'Topical anti-inflammatory cream for rheumatoid arthritis and localized tendonitis formulated without phototoxic psoralens.',
        evaluationParameters: 'Absence of Bergapten and Psoralen via HPLC (< 1 ppm), Carrageenan paw edema inhibition, Phototoxicity test.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Dried Aerial Flowering Parts',
        rationale: 'Standardization and chemical fingerprinting of volatile ketones (2-undecanone) and acridone alkaloids via GC-MS.',
        evaluationParameters: '2-Undecanone percentage, Rutin content, Heavy metal limits, Ash values per European Pharmacopoeia.',
      }
    ],
    quiz: {
      question: 'Which prominent capillary-stabilizing bioflavonoid, widely used to prevent capillary bleeding, was first discovered in Ruta graveolens?',
      options: ['Rutin', 'Curcumin', 'Quinine', 'Acemannan'],
      correctAnswerIndex: 0,
      explanation: 'Rutin is a quercetin flavonol glycoside named directly after Ruta graveolens that strengthens fragile blood capillary walls.'
    },
    tags: ['Women Health', 'Vascular', 'Veins', 'Toxic', 'Rutin']
  },
  {
    id: 'asafoetida',
    name: 'Asafoetida (Hing / Devil\'s Dung)',
    marathiName: 'हिंग',
    botanicalName: 'Ferula foetida (Bunge) Regel / Ferula assa-foetida L.',
    family: 'Apiaceae (Umbelliferae)',
    partUsed: 'Oleo-Gum Resin exuded from Incisions in Living Taproots and Rhizomes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Curcuma_amada_Mango_ginger.jpg',
    traditionalUses: [
      'Ayurveda’s supreme carminative and Vata-pacifying spice: miraculous for acute abdominal bloating, flatulence, and colic.',
      'Applied externally as warm paste (Hing water) around the infant navel to instantly release trapped colic gas without ingestion.',
      'Potent antispasmodic and expectorant for whooping cough, chronic bronchitis, and asthmatic attacks.',
      'Emmenagogue and digestive tonic: promotes digestive enzymes, prevents fermentation, and eases painful menstrual cramps.'
    ],
    safetyPrecautions: [
      'Contraindicated in infants orally; apply only as external paste around the navel (oral ingestion in infants can trigger methemoglobinemia).',
      'Avoid high therapeutic doses during pregnancy due to potential emmenagogue and abortifacient actions.',
      'Contraindicated in high Pitta states (severe hyperacidity, acute bleeding disorders).'
    ],
    sideEffects: [
      'Infantile methemoglobinemia if administered orally to young infants (due to fetal hemoglobin oxidation).',
      'Belching, burning sensation in stomach, and diarrhea with excessive raw intake.',
      'Persistent pungent sulfurous breath and body perspiration.',
      'Swelling of lips or mild headache in individuals hypersensitive to Umbelliferae resins.'
    ],
    phytochemicals: [
      'Volatile oil (3-20% containing foul-smelling organic disulfides like sec-butyl propenyl disulfide)',
      'Resin (40-64% containing Asaresinotannols and Ferulic acid esters)',
      'Umbelliferone (hydroxycoumarin - free and combined)',
      'Foetidin and Kamolonol',
      'Water-soluble Gum (25% arabinose, galactose, glucuronic acid)'
    ],
    dosageForms: [
      'Shodhita Hing (Purified by roasting in ghee): 125 to 500 mg with warm water or food',
      'Hingvashtak Churna (Classical 8-herb digestive formula): 2 to 3 g with the first morsel of food with ghee',
      'External Navel Paste: 1 pinch dissolved in warm water applied in circular motion around umbilicus',
      'Compounded Asafoetida: Culinary condiment mixed with rice flour and gum arabic'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Pungent), Tikta (Bitter)',
      guna: 'Laghu (Light), Snigdha (Unctuous), Tikshna (Sharp/Penetrating)',
      virya: 'Ushna (Extremely Hot potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Vatanulomana (Expels flatus downward), Shulahara (Colic destroyer)',
      doshaKarma: 'Profoundly pacifies Vata and Kapha dosha; strongly provokes Pitta'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Oleo-Gum Resin (Ghee-processed)',
        rationale: 'Chewable digestive tablet combining Hing with Rock Salt (Saindhava) and Ajwain for instantaneous postprandial gas relief.',
        evaluationParameters: 'In vitro carminative pressure reduction in artificial bowel model, Ferulic acid assay, Taste-masking evaluation.',
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Organic Disulfide Volatile Fraction',
        rationale: 'Topical transdermal infantile colic roll-on emulsion for safe abdominal skin absorption avoiding oral methemoglobinemia risk.',
        evaluationParameters: 'Infantile crying time reduction, Skin permeation rate, Draize skin irritation test, Volatile oil stability.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Raw Tears of Asafoetida',
        rationale: 'Umbelliferone fluorescence test and GC-MS organosulfur profiling to identify commercial adulteration with colophony or foreign gums.',
        evaluationParameters: 'Umbelliferone test (blue fluorescence with ammonia), Organic sulfur assay, Ash value, Insoluble residue.',
      }
    ],
    quiz: {
      question: 'Which classical Ayurvedic preparation containing roasted Asafoetida is customarily taken with the first morsel of food and ghee for bloating?',
      options: ['Hingvashtak Churna', 'Triphala Churna', 'Saraswatarishta', 'Avipattikar Churna'],
      correctAnswerIndex: 0,
      explanation: 'Hingvashtak Churna contains 8 digestive herbs led by Shodhita Hing to ignite Agni, eliminate gas, and relieve abdominal heaviness.'
    },
    tags: ['Gas', 'Bloating', 'Colic', 'Digestion', 'Vata']
  },
  {
    id: 'amba-halad',
    name: 'Amba Halad (Mango Ginger)',
    marathiName: 'आंबा हळद (कर्पूर हरिद्रा)',
    botanicalName: 'Curcuma amada Roxb.',
    family: 'Zingiberaceae',
    partUsed: 'Fresh and Dried Aromatic Rhizomes',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Unique medicinal rhizome morphologically resembling ginger but possessing the delightful culinary fragrance of green raw mango.',
      'Supreme Ayurvedic topical remedy for traumatic blunt injuries, sprains, bone contusions, hematomas, and joint inflammation (Marmaghata).',
      'Fresh paste mixed with salt or lime applied externally provides miraculous relief in localized swellings, boils, and bruises.',
      'Potent cooling anti-inflammatory, stomachic, and carminative for hyperacidity, biliousness, and loss of appetite.'
    ],
    safetyPrecautions: [
      'Generally very safe; can be consumed both as a food pickle and as medicinal paste.',
      'Distinguish carefully from Yellow Turmeric (Curcuma longa); Amba Halad has pale buff-yellow flesh and raw mango aroma.',
      'Avoid high oral doses in individuals with acute gallstone colic without physician supervision.'
    ],
    sideEffects: [
      'Exceptionally safe with high physiological tolerability.',
      'Excessive consumption may cause mild stomach warmth or loose bowels in very sensitive individuals.',
      'Rare skin irritation when applied in combination with raw slaked lime on sensitive epidermal areas.'
    ],
    phytochemicals: [
      'Curcuminoids (Curcumin, Demethoxycurcumin - in lower concentration than C. longa)',
      'Volatile oil (1.0-1.5% rich in (Z)-beta-Ocimene, Myrcene - imparting green mango aroma)',
      'Amadannulen and Difurocumenonol (unique sesquiterpenes)',
      'Phenolic antioxidants (Caffeic acid, Gallic acid)',
      'Starch and Fiber'
    ],
    dosageForms: [
      'Fresh Rhizome Paste: External application on sprains, bruises, and swollen joints',
      'Amba Halad Churna: 1 to 3 g with warm water or milk',
      'Amba Halad Lepa (Medicated poultice): Combined with Aloe vera gel or castor oil for trauma',
      'Culinary Herbal Pickle / Chutney: 10 to 15 g with meals'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Madhura (Sweet), Kashaya (Astringent)',
      guna: 'Laghu (Light), Snigdha (Unctuous)',
      virya: 'Sheeta (Cooling potency - unlike warm C. longa, Amba Halad is distinctively Sheeta)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Shothahara (Supreme anti-edema/swelling reducer), Abhighatahara (Trauma healer)',
      doshaKarma: 'Pacifies Pitta and Kapha doshas; effectively soothes traumatic Vata swelling'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Fresh Rhizome Hydroethanolic Extract',
        rationale: 'Fast-acting anti-inflammatory sport injury gel for blunt contusions, sprains, and acute hematoma resolution.',
        evaluationParameters: 'In vitro COX-2 and 5-LOX inhibition, Viscosity, Spreadability, Hematoma resorption rate in preclinical models.',
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Rhizome Extract',
        rationale: 'Dual-action gastric-protective anti-inflammatory tablet for joint aches that shields the stomach lining from ulcers.',
        evaluationParameters: 'Anti-inflammatory paw edema reduction, Gastric mucosal ulcer index in ethanol-induced models, Dissolution.',
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Freeze-Dried Rhizome Powder',
        rationale: 'Gas chromatography-olfactometry (GC-O) profiling of volatile aroma compounds to standardize raw mango scent preservation.',
        evaluationParameters: '(Z)-beta-Ocimene and Myrcene retention, Moisture content (< 6%), Free-flowing Carr index, DPPH antioxidant value.',
      }
    ],
    quiz: {
      question: 'What distinctive organoleptic characteristic instantly distinguishes fresh Curcuma amada (Amba Halad) rhizomes from ordinary ginger or turmeric?',
      options: ['Unmistakable aroma of fresh raw green mango', 'Smell of bitter almonds', 'Strong garlic odor', 'Pure sweet rose scent'],
      correctAnswerIndex: 0,
      explanation: 'Curcuma amada rhizomes contain (Z)-beta-ocimene and myrcene, which impart the unmistakable fragrance of fresh raw green mango.'
    },
    tags: ['Trauma', 'Sprain', 'Swelling', 'Cooling', 'Joints']
  }
];
