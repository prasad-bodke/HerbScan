import { MedicinalPlant } from '../types';

export const HERBAL_DATABASE: MedicinalPlant[] = [
  {
    id: 'bael',
    name: 'Bael (Bengal Quince)',
    marathiName: 'बेल',
    botanicalName: 'Aegle marmelos',
    family: 'Rutaceae',
    partUsed: 'Fruit (ripe & unripe), Leaves, Bark, Root',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
    traditionalUses: [
      'Unripe fruit is a revered remedy for chronic diarrhea, dysentery, and irritable bowel syndrome (IBS).',
      'Ripe fruit pulp acts as a refreshing digestive cooling tonic and gentle laxative.',
      'Leaves are traditionally used in treating diabetes, intermittent fevers, and ophthalmia.',
      'Bark decoction is utilized for palpitation, melancholia, and intermittent fevers.'
    ],
    safetyPrecautions: [
      'Excessive consumption of unripe fruit pulp can lead to stomach bloating and constipation.',
      'Pregnant or nursing mothers should avoid high-dose bark or leaf extracts.',
      'May lower blood glucose levels; diabetic patients taking hypoglycemic medication should monitor sugar levels.'
    ],
    phytochemicals: [
      'Marmelosin (coumarin derivative - key biomarker)',
      'Aegeline / N-[2-hydroxy-2(4-methoxyphenyl)ethyl]-cinnamamide',
      'Imperatorin',
      'Marmelide',
      'Pectin and Mucilage',
      'Tannins (condensed and hydrolyzable)'
    ],
    dosageForms: [
      'Bilva Churna (Dry fruit powder): 3 to 6 g with lukewarm water',
      'Bilva Avaleha (Herbal paste/jam): 5 to 10 g twice daily',
      'Swarasa (Fresh leaf juice): 10 to 20 mL',
      'Herbal Bilva Syrup: 10 to 15 mL post meals'
    ],
    ayurvedicProperties: {
      rasa: 'Kashaya (Astringent), Tikta (Bitter)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Ushna (Warm potency in unripe fruit); Sheeta (Cooling in ripe pulp)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Grahini (Deepana, digestant and bowel binder)',
      doshaKarma: 'Pacifies Vata and Kapha dosha; ripe fruit cools Pitta'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Ripe / Semi-ripe Fruit Pulp',
        rationale: 'Formulation of standardized Marmelosin-rich pediatric & adult syrup for inflammatory bowel disease (IBD) and gastric ulcer healing without artificial colorants.',
        evaluationParameters: 'Specific gravity (1.25–1.32 g/mL), pH (4.8–5.4), Viscosity (Brookfield LV spindle 2 @ 50 rpm: 180–240 cP), HPTLC quantification of Marmelosin (min 0.25% w/w), Stability testing per ICH Q1A at 40°C/75% RH for 6 months.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Leaf extract / Fruit seed mucilage',
        rationale: 'Topical Carbopol-940 / Sodium CMC hydrogel utilizing Bael leaf polyphenol fraction for diabetic wound healing and antimicrobial dermal applications.',
        evaluationParameters: 'Spreadability index (18–25 g.cm/s), Extrudability (90%+), pH (6.2–6.8 skin-compatible), In vitro Franz diffusion permeation, Skin irritation testing (OECD Guideline 404).'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Unripe dried fruit slices (Bilva Churna)',
        rationale: 'Micronized, enteric-coated dispersible granules/powder to protect active coumarins through gastric acid and deliver targeted release in the colon for Ulcerative Colitis.',
        evaluationParameters: 'Angle of repose (< 30° indicating free flowing), Carr’s compressibility index (< 15%), Loss on drying (LOD < 4.5%), Total ash (< 5.0%), Dissolution profile in simulated intestinal fluid (pH 6.8).'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Hydroethanolic Fruit Extract',
        rationale: 'Direct-compression sustained-release matrix tablet using natural Bael gum/mucilage as an eco-friendly binder and release retardant.',
        evaluationParameters: 'Hardness (Monsanto 5.5–7.0 kg/cm²), Friability (< 0.8%), Disintegration time (< 15 min for uncoated), In vitro drug release kinetics (Higuchi & Korsmeyer-Peppas models), Assay by RP-HPLC.'
      }
    ],
    quiz: {
      question: 'Which key coumarin compound is considered the primary diagnostic bioactive marker of Bael (Aegle marmelos) fruit?',
      options: ['Marmelosin', 'Curcumin', 'Azadirachtin', 'Withaferin A'],
      correctAnswerIndex: 0,
      explanation: 'Marmelosin is a furanocoumarin isolated from Aegle marmelos fruit pulp responsible for gastroprotective, antidiarrheal, and anti-inflammatory properties.'
    },
    tags: ['Digestion', 'IBS', 'Fruit', 'Bowel', 'Ulcer']
  },
  {
    id: 'tulsi',
    name: 'Tulsi (Holy Basil)',
    marathiName: 'तुळस',
    botanicalName: 'Ocimum sanctum (syn. Ocimum tenuiflorum)',
    family: 'Lamiaceae',
    partUsed: 'Leaves, Seeds, Whole aerial herb',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1000&q=80',
    traditionalUses: [
      'Adaptogen that promotes resilience against environmental and physical stress.',
      'Soothes respiratory tract inflammation, bronchitis, allergic cough, and asthma.',
      'Enhances cellular immunity and works as an antimicrobial prophylaxis.',
      'Used in herbal teas (Kashayam) to combat fevers and seasonal flu.'
    ],
    safetyPrecautions: [
      'May reduce platelet aggregation; exercise caution before elective surgery or with anticoagulants.',
      'May decrease blood sugar levels; monitor when combined with antidiabetic drugs.',
      'Not recommended in high therapeutic doses during early pregnancy.'
    ],
    phytochemicals: [
      'Eugenol (essential oil up to 70%)',
      'Rosmarinic acid',
      'Ursolic acid',
      'Caryophyllene',
      'Apigenin',
      'Luteolin'
    ],
    dosageForms: [
      'Tulsi Churna (Leaf powder): 2 to 3 g daily',
      'Tulsi Swarasa (Fresh juice): 5 to 10 mL with raw honey',
      'Tulsi Arka (Distillate): 5 to 10 drops in water',
      'Tulsi Capsule / Tablet: 500 mg standardized to 2.5% Ursolic acid'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Pungent), Tikta (Bitter)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Penetrating)',
      virya: 'Ushna (Heating potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Kaphaghna, Hridya (Heart toner & adaptogen)',
      doshaKarma: 'Pacifies Vata and Kapha dosha; may mildly elevate Pitta in excess'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Leaves',
        rationale: 'Non-drowsy pediatric anti-tussive syrup combining Tulsi with Vasaka (Adhatoda) and Pippali in an invert sugar vehicle.',
        evaluationParameters: 'Viscosity, Eugenol retention via GC-MS, Preservative efficacy testing (USP <51>), Stability over 12 months.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Essential Oil / Hydroalcoholic Extract',
        rationale: 'Nanoemulsion-based dental gel for combating periodontal pathogens (Streptococcus mutans) and gingivitis.',
        evaluationParameters: 'Zeta potential (-25 to -35 mV), Droplet size (< 150 nm), Antimicrobial MIC determination, In vitro mucosal adhesion.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Leaf Extract (Ursolic acid 5%)',
        rationale: 'Bilayer immune-boosting chewable tablet with Vitamin C from Amla extract.',
        evaluationParameters: 'Hardness, Friability, In vitro radical scavenging activity (DPPH assay), Accelerated stability.'
      }
    ],
    quiz: {
      question: 'Which major volatile phenylpropanoid gives Tulsi its distinct aromatic fragrance and respiratory benefits?',
      options: ['Eugenol', 'Marmelosin', 'Piperine', 'Vasicine'],
      correctAnswerIndex: 0,
      explanation: 'Eugenol represents up to 60-70% of Tulsi volatile oil and provides powerful antioxidant, analgesic, and antimicrobial properties.'
    },
    tags: ['Immunity', 'Respiratory', 'Leaves', 'Adaptogen', 'Cough']
  },
  {
    id: 'ashwagandha',
    name: 'Ashwagandha (Indian Ginseng)',
    marathiName: 'अश्वगंधा',
    botanicalName: 'Withania somnifera',
    family: 'Solanaceae',
    partUsed: 'Root (tuberous dried roots)',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    traditionalUses: [
      'Premier Ayurvedic Rasayana (rejuvenator) for vitality, cognitive support, and muscle strength.',
      'Reduces cortisol, alleviates chronic stress, insomnia, and nervous debility.',
      'Acts as an adaptogen to stimulate stamina, libido, and athletic recovery.',
      'Anti-inflammatory adjuvant in rheumatoid arthritis (Amavata).'
    ],
    safetyPrecautions: [
      'May stimulate thyroid hormone production; monitor in hyperthyroidism.',
      'Avoid during pregnancy as large doses may exert abortifacient/uterine-stimulating effects.',
      'May potentiate central nervous system depressants and sedatives.'
    ],
    phytochemicals: [
      'Withanolides (Withaferin A, Withanolide A, Withanolide D)',
      'Sitoindosides VII to X',
      'Somniferine',
      'Anaferine',
      'Steroidal lactones'
    ],
    dosageForms: [
      'Ashwagandha Churna: 3 to 6 g with warm milk and ghee',
      'Ashwagandha Arishta (Fermented tonic): 15 to 30 mL',
      'Standardized Extract (Withanolides > 5%): 300 to 600 mg daily',
      'Herbal tablet: 500 mg compressed root powder'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)',
      guna: 'Guru (Heavy), Snigdha (Unctuous)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Madhura (Sweet post-digestive)',
      prabhava: 'Rasayana, Vajikarana, Balya (Strength promoter)',
      doshaKarma: 'Pacifies Vata and Kapha; increases Pitta in large excess'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Root Extract',
        rationale: 'Sustained-release cognitive enhancer tablet targeting cortisol regulation with Withanolide A biomarker standardization.',
        evaluationParameters: 'Weight variation, Uniformity of dosage units, Dissolution profile, HPLC quantification of Withaferin A and Withanolide A.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Root (fine micronized churna)',
        rationale: 'Effervescent instant nutraceutical granules blended with Pippali bio-enhancer for improved GI bioavailability.',
        evaluationParameters: 'Effervescence time (< 3 min), Moisture content (< 2%), Palatability evaluation, Sensory analysis.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Root extract',
        rationale: 'Transdermal proniosomal anti-arthritic gel for localized knee joint delivery in osteoarthritis.',
        evaluationParameters: 'Vesicle size, Entrapment efficiency (> 75%), Ex vivo skin permeation using porcine ear skin, Anti-inflammatory paw edema model.'
      }
    ],
    quiz: {
      question: 'Which class of steroidal lactones represents the chief active pharmacological constituents of Ashwagandha?',
      options: ['Withanolides', 'Ginsenosides', 'Curcuminoids', 'Bacocides'],
      correctAnswerIndex: 0,
      explanation: 'Withanolides (specifically Withaferin A and Withanolide A) are steroidal lactones responsible for Ashwagandha’s adaptogenic and neuroprotective actions.'
    },
    tags: ['Rejuvenation', 'Stress', 'Root', 'Strength', 'Immunity']
  },
  {
    id: 'neem',
    name: 'Neem (Indian Lilac)',
    marathiName: 'कडू लिंब',
    botanicalName: 'Azadirachta indica',
    family: 'Meliaceae',
    partUsed: 'Leaves, Bark, Seeds, Seed oil, Flowers',
    image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=1000&q=80',
    traditionalUses: [
      'Potent blood purifier (Rakta shodhak) for skin diseases like psoriasis, eczema, and acne.',
      'Antimicrobial, antifungal, and insecticidal properties widely used in natural hygiene.',
      'Traditional twig used as a dental toothbrush (Datun) preventing oral plaque.',
      'Leaves boiled in water for antiseptic baths and wound irrigation.'
    ],
    safetyPrecautions: [
      'Neem seed oil is strictly for external use; internal ingestion can cause toxic encephalopathy in infants.',
      'Avoid long-term uninterrupted internal consumption due to potential immunosuppressive or contraceptive effects.',
      'Contraindicated in pregnant women and couples actively trying to conceive.'
    ],
    phytochemicals: [
      'Azadirachtin (tetranortriterpenoid)',
      'Nimbin and Nimbidin',
      'Salannin',
      'Quercetin',
      'Beta-sitosterol',
      'Gedunin'
    ],
    dosageForms: [
      'Neem Leaf Powder: 2 to 3 g daily',
      'Neem Oil (Cold pressed): External application diluted with sesame/coconut oil',
      'Neem Kwath (Decoction): 15 to 30 mL',
      'Neem Topical Gel/Cream: 2 to 5% extract'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Krimighna (Antiparasitic), Kushtaghna (Skin disease destroyer)',
      doshaKarma: 'Pacifies Pitta and Kapha; increases Vata'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Leaves and Bark',
        rationale: 'Topical anti-acne hydrogel containing Neem leaf polyphenols and tea tree oil with Carbopol-940 base.',
        evaluationParameters: 'pH, Viscosity, In vitro disc diffusion against Cutibacterium acnes, Stability under freeze-thaw cycles.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Leaf and stem bark',
        rationale: 'Herbal blood-purifier syrup formulated with natural non-glycemic sweetener (Stevia) for diabetic dermatological lesions.',
        evaluationParameters: 'Microbial limit test (TAMC/TYMC), Absence of pathogens, HPLC quantification of Nimbin.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Dry Leaf Extract',
        rationale: 'Film-coated gastro-resistant tablet to mask the intensely bitter taste while preserving antifungal systemic efficacy.',
        evaluationParameters: 'Taste masking score, Coating thickness, Hardness, Disintegration in pH 1.2 vs 6.8 buffer.'
      }
    ],
    quiz: {
      question: 'In Ayurveda, Neem is prized for which classical Prabhava (specific therapeutic action)?',
      options: ['Kushtaghna (Skin healer & blood purifier)', 'Vajikarana (Aphrodisiac)', 'Bruhana (Weight gainer)', 'Nidrajanana (Sedative)'],
      correctAnswerIndex: 0,
      explanation: 'Neem is classically designated as Kushtaghna (effective against skin ailments) and Krimighna (antimicrobial/antiparasitic) due to its Sheeta Virya and bitter Rasa.'
    },
    tags: ['Skin', 'Antimicrobial', 'Leaves', 'Bark', 'Detox']
  },
  {
    id: 'amla',
    name: 'Amla (Indian Gooseberry)',
    marathiName: 'आवळा',
    botanicalName: 'Phyllanthus emblica (syn. Emblica officinalis)',
    family: 'Phyllanthaceae',
    partUsed: 'Fruit (fresh and pericarp of dried fruit)',
    image: 'https://images.unsplash.com/photo-1596547609652-9cf5d8d76921?auto=format&fit=crop&w=1000&q=80',
    traditionalUses: [
      'Richest natural antioxidant source, fundamental cornerstone of Chyawanprash.',
      'Supports healthy eyesight (Chakshushya), hair luster, and collagen synthesis.',
      'Enhances digestive assimilation without aggravating acid reflux or Pitta.',
      'Cardioprotective and lipid-regulating dietary supplement.'
    ],
    safetyPrecautions: [
      'Very high doses on an empty stomach may cause mild hyperacidity in hypersensitive individuals.',
      'May enhance the action of anticoagulant medications.'
    ],
    phytochemicals: [
      'Ascorbic acid (Vitamin C complex)',
      'Emblicanin A and B (tannoids)',
      'Punigluconin',
      'Ellagic acid',
      'Gallic acid',
      'Chebulinic acid'
    ],
    dosageForms: [
      'Amalaki Churna: 3 to 6 g with honey or warm water',
      'Fresh Juice (Swarasa): 15 to 20 mL',
      'Chyawanprash: 10 to 15 g daily',
      'Amla Hair Oil & Extracts'
    ],
    ayurvedicProperties: {
      rasa: 'Pancha Rasa (5 tastes: Sour, Sweet, Bitter, Astringent, Pungent; lacks salty)',
      guna: 'Guru (Heavy), Ruksha (Dry), Sheeta (Cold)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Madhura (Sweet post-digestive)',
      prabhava: 'Rasayana (Ultimate rejuvenator), Chakshushya (Eye toner)',
      doshaKarma: 'Tridoshahara (Balances all three doshas: Vata, Pitta, and Kapha)'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Fresh Fruit Juice',
        rationale: 'Thermal-stabilized antioxidant syrup preventing ascorbic acid oxidation through synergistic bioflavonoid complexes.',
        evaluationParameters: 'Ascorbic acid assay via 2,6-dichlorophenolindophenol titration, HPLC polyphenol profile, ORAC value stability.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Tannoid Extract',
        rationale: 'Effervescent chewable vitamin C & polyphenol tablet for anti-aging and daily cellular repair.',
        evaluationParameters: 'Dissolution rate, Palatability score, Hardness, Friability, Humidity challenge testing.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Fruit Extract',
        rationale: 'Topical anti-photoaging serum-gel with hyaluronic acid for UV-induced skin erythema prevention.',
        evaluationParameters: 'In vitro SPF determination, DPPH free radical scavenging IC50, Viscosity, Cytotoxicity assay on keratinocytes.'
      }
    ],
    quiz: {
      question: 'Which unique taste characteristic makes Amla nearly singular among Ayurvedic fruits?',
      options: ['Contains 5 of the 6 tastes (Pancha Rasa)', 'Only extremely sweet', 'Purely salty', 'Contains zero acidity'],
      correctAnswerIndex: 0,
      explanation: 'Amla possesses 5 of the 6 Ayurvedic tastes (Astringent, Bitter, Sweet, Pungent, Sour), lacking only Lavana (salt), giving it Tridoshic balancing power.'
    },
    tags: ['Antioxidant', 'Immunity', 'Fruit', 'Hair', 'Rejuvenation']
  },
  {
    id: 'brahmi',
    name: 'Brahmi (Water Hyssop)',
    marathiName: 'ब्राह्मी',
    botanicalName: 'Bacopa monnieri',
    family: 'Plantaginaceae',
    partUsed: 'Whole plant, Leaves, Stems',
    image: 'https://images.unsplash.com/photo-1546842931-886c185b4c8c?auto=format&fit=crop&w=1000&q=80',
    traditionalUses: [
      'Renowned Medhya Rasayana (nootropic brain tonic) improving cognitive retention and mental clarity.',
      'Reduces anxiety, mental fatigue, and oxidative stress in neuronal tissue.',
      'Traditional remedy for epilepsy, speech disorders, and ADHD in children.',
      'Soothes nervous tension and promotes deep restorative sleep.'
    ],
    safetyPrecautions: [
      'May occasionally cause mild gastrointestinal upset, nausea, or dry mouth if taken on an empty stomach.',
      'May increase acetylcholine levels; use with care when taking anticholinergic or cholinergic drugs.'
    ],
    phytochemicals: [
      'Bacoside A & B (dammarane-type triterpenoid saponins)',
      'Bacopasaponins',
      'Betulinic acid',
      'Monnierin',
      'Luteolin',
      'Apigenin'
    ],
    dosageForms: [
      'Brahmi Ghrita (Medicated ghee): 5 to 10 g with warm milk',
      'Brahmi Churna: 2 to 3 g daily',
      'Brahmi Vati / Tablets: 250 to 500 mg',
      'Brahmi Taila (External head massage oil)'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Sara (Flowing)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Madhura (Sweet post-digestive)',
      prabhava: 'Medhya (Cognitive enhancer, brain rejuvenator)',
      doshaKarma: 'Balances Vata, Pitta, and Kapha; exceptional for calming Pitta in the nervous system'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Whole Herb',
        rationale: 'Pediatric cognitive performance and memory consolidation syrup with bio-fortified DHA and Shankhpushpi.',
        evaluationParameters: 'Bacoside A & B quantification by HPLC, Taste score, Rheology, Sedative vs alertness behavioral study.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Dry Extract (20% Bacosides)',
        rationale: 'Liposomal or solid lipid nanoparticle (SLN) compressed tablet to bypass blood-brain barrier for Alzheimer’s disease models.',
        evaluationParameters: 'Drug entrapment efficiency, In vitro release kinetics, Brain tissue bio-distribution in animal models, ICH stability.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Aerial parts',
        rationale: 'Transdermal iontophoretic gel for targeted delivery across the temporal scalp area.',
        evaluationParameters: 'Permeation flux rate, Skin irritation index, Spreadability, Viscoelastic modulus.'
      }
    ],
    quiz: {
      question: 'What are the main dammarane triterpenoid saponins in Bacopa monnieri responsible for enhancing memory and nerve repair?',
      options: ['Bacosides A & B', 'Withanolides', 'Marmelosins', 'Curcuminoids'],
      correctAnswerIndex: 0,
      explanation: 'Bacosides A & B facilitate repair of damaged neurons by enhancing kinase activity and promoting synaptic transmission.'
    },
    tags: ['Brain', 'Memory', 'Whole Plant', 'Nootropic', 'Anxiety']
  },
  {
    id: 'turmeric',
    name: 'Turmeric (Haridra)',
    marathiName: 'हळद',
    botanicalName: 'Curcuma longa',
    family: 'Zingiberaceae',
    partUsed: 'Rhizome (fresh and cured dried)',
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=1000&q=80',
    traditionalUses: [
      'Universal anti-inflammatory, antiseptic, and natural antibiotic in Ayurveda.',
      'Soothes joint pain, swelling, and musculoskeletal stiffness.',
      'Topical application for wound healing, burns, and glowing complexion (Varnya).',
      'Supports healthy liver detox and optimal bile secretion.'
    ],
    safetyPrecautions: [
      'Avoid high therapeutic doses in patients with obstructive gallstones or acute bile duct obstruction.',
      'May increase risk of bruising/bleeding when used with strong blood thinners.'
    ],
    phytochemicals: [
      'Curcumin (diferuloylmethane)',
      'Demethoxycurcumin',
      'Bisdemethoxycurcumin',
      'Turmerone and ar-turmerone (essential oils)',
      'Zingiberene'
    ],
    dosageForms: [
      'Haridra Churna (Turmeric powder): 2 to 4 g with warm milk',
      'Curcumin standard extract (95% curcuminoids) + Piperine: 500 mg',
      'Haridra Khanda (Classical granules): 5 to 10 g',
      'Topical paste (Lepa) with sandalwood or honey'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent)',
      guna: 'Ruksha (Dry), Laghu (Light)',
      virya: 'Ushna (Heating potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Varnya (Complexion enhancer), Vishaghna (Anti-toxic)',
      doshaKarma: 'Tridoshahara (Balances Kapha and Vata, purifies Pitta)'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Cured Rhizome Extract',
        rationale: 'Nano-curcumin topical hydrogel with enhanced cutaneous penetration for psoriasis and localized joint inflammation.',
        evaluationParameters: 'Particle size (< 100 nm), Polydispersity index (< 0.2), Ex vivo skin retention, Anti-inflammatory COX-2 inhibition.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized 95% Curcuminoid Extract',
        rationale: 'Self-microemulsifying drug delivery system (SMEDDS) compressed tablet providing 20x oral bioavailability.',
        evaluationParameters: 'Emulsification time (< 1 min), Droplet size distribution, In vitro dissolution at pH 1.2 and 6.8, Pharmacokinetic Cmax.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Hydroalcoholic Rhizome Extract',
        rationale: 'Bioavailable anti-asthmatic oral suspension with natural emulsifiers and black pepper extract.',
        evaluationParameters: 'Zeta potential, Sedimentation volume (F ratio), Curcumin content stability, Microbial contamination tests.'
      }
    ],
    quiz: {
      question: 'Which natural bio-enhancer alkaloid from black pepper is commonly co-formulated with Turmeric to boost Curcumin absorption by 2000%?',
      options: ['Piperine', 'Marmelosin', 'Eugenol', 'Aegeline'],
      correctAnswerIndex: 0,
      explanation: 'Piperine inhibits intestinal and hepatic glucuronidation of Curcumin, drastically improving its systemic bioavailability.'
    },
    tags: ['Anti-inflammatory', 'Antiseptic', 'Rhizome', 'Skin', 'Liver']
  },
  {
    id: 'giloy',
    name: 'Giloy (Guduchi / Amrita)',
    marathiName: 'गुळवेल',
    botanicalName: 'Tinospora cordifolia',
    family: 'Menispermaceae',
    partUsed: 'Stem (mature greenish succulent stems)',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=1000&q=80',
    traditionalUses: [
      'Called "Amrita" (nectar of immortality) for immunomodulation and fever management (Jwarahara).',
      'Removes metabolic toxins (Ama) in chronic infections and autoimmune disorders.',
      'Regulates blood glucose and improves insulin sensitivity.',
      'Hepatoprotective agent countering drug-induced liver injury.'
    ],
    safetyPrecautions: [
      'May lower blood sugar; monitor glucose in diabetic patients.',
      'Autoimmune conditions: may theoretically stimulate immune activity; consume under Ayurvedic supervision.'
    ],
    phytochemicals: [
      'Tinosporide',
      'Cordifolioside A to E',
      'Berberine (alkaloid)',
      'Giloin and Gilenin',
      'Arabinogalactan polysaccharides',
      'Tinocordiside'
    ],
    dosageForms: [
      'Guduchi Satva (Starchy aqueous sediment): 500 mg to 1 g',
      'Guduchi Kwath (Stem decoction): 20 to 30 mL',
      'Guduchi Ghana Vati (Solid extract tablet): 500 mg',
      'Guduchi Churna: 2 to 3 g with warm water'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Snigdha (Unctuous)',
      virya: 'Ushna (Heating, yet uniquely balances Pitta)',
      vipaka: 'Madhura (Sweet post-digestive)',
      prabhava: 'Rasayana (Rejuvenator), Jwarahara (Antipyretic)',
      doshaKarma: 'Tridoshahara (Balances all three doshas: Vata, Pitta, and Kapha)'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Fresh Mature Stem',
        rationale: 'Synergistic immunomodulatory syrup combining Giloy with Tulsi and Papaya leaf extract for thrombocytopenia in viral fevers.',
        evaluationParameters: 'Platelet count efficacy in animal models, Berberine assay via HPLC, Preservative challenge test, Shelf life at 30°C/65% RH.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Guduchi Ghana (Solidified Water Extract)',
        rationale: 'Gastro-protective effervescent tablet for chronic low-grade inflammation and metabolic syndrome.',
        evaluationParameters: 'Disintegration time, Hardness, Total polysaccharide assay by phenol-sulfuric acid method, Heavy metal testing.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Starch precipitate (Guduchi Satva)',
        rationale: 'Spray-dried ready-to-reconstitute prebiotic powder targeting gut microbiome enrichment and intestinal barrier integrity.',
        evaluationParameters: 'Bulk density, Moisture adsorption isotherm, Particle morphology via SEM, In vitro macrophage phagocytosis assay.'
      }
    ],
    quiz: {
      question: 'What is the classical starchy sediment extracted from Guduchi stems known as in Ayurvedic pharmacy?',
      options: ['Guduchi Satva', 'Bilva Avaleha', 'Haridra Khanda', 'Chyawanprash'],
      correctAnswerIndex: 0,
      explanation: 'Guduchi Satva is the cold-water extracted pure starch derived from mature stems, prized as a gentle, non-irritating antipyretic and immune tonic.'
    },
    tags: ['Immunity', 'Fever', 'Stem', 'Detox', 'Rejuvenation']
  },
  {
    id: 'adhatoda',
    name: 'Vasaka (Malabar Nut)',
    marathiName: 'अडुळसा',
    botanicalName: 'Justicia adhatoda (syn. Adhatoda vasica)',
    family: 'Acanthaceae',
    partUsed: 'Leaves, Flowers, Root',
    image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?auto=format&fit=crop&w=1000&q=80',
    traditionalUses: [
      'The supreme Ayurvedic bronchodilator and expectorant for productive cough and asthma.',
      'Liquefies thick bronchial mucus and eases dyspnea.',
      'Arrests pulmonary hemoptysis and bleeding disorders (Raktapitta).',
      'Antimicrobial action against respiratory tract pathogens.'
    ],
    safetyPrecautions: [
      'Contraindicated in early pregnancy because the alkaloid vasicine can stimulate uterine contractions.',
      'Overdose may cause nausea, vomiting, and diarrhea.'
    ],
    phytochemicals: [
      'Vasicine (quinazoline alkaloid)',
      'Vasicinone',
      'Adhatodine',
      'Vasicol',
      'Betaine',
      'Essential oils'
    ],
    dosageForms: [
      'Vasa Swarasa (Fresh leaf juice): 10 to 20 mL with honey',
      'Vasa Avaleha: 5 to 10 g',
      'Vasasava (Fermented tonic): 15 to 30 mL',
      'Standardized dry leaf extract: 250 to 500 mg'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent)',
      prabhava: 'Kaphaghna, Kasa-Shwasahara (Cough and asthma alleviator)',
      doshaKarma: 'Pacifies Pitta and Kapha; increases Vata in excess'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Leaves',
        rationale: 'Alcohol-free pediatric & adult mucolytic herbal syrup standardized to 0.5% Vasicine content.',
        evaluationParameters: 'Vasicine assay via RP-HPLC, Expectorant activity in phenol-red tracheobronchial secretion test, Viscosity, Microbial limits.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Vasicine Fraction',
        rationale: 'Fast-dissolving sublingual tablet for rapid bronchospasm relief during acute asthmatic episodes.',
        evaluationParameters: 'Wetting time (< 20 seconds), In vitro disintegration, In vivo guinea pig bronchoprotection model, Friability.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Leaf Churna',
        rationale: 'Dry powder inhaler (DPI) formulation with inhalable carrier lactose for direct pulmonary delivery.',
        evaluationParameters: 'Aerodynamic particle size distribution via Cascade Impactor, Fine particle fraction (FPF > 40%), Emitted dose.'
      }
    ],
    quiz: {
      question: 'Which modern pharmaceutical respiratory drug was synthetically developed as a derivative of the Vasaka alkaloid Vasicine?',
      options: ['Bromhexine and Ambroxol', 'Aspirin', 'Metformin', 'Paracetamol'],
      correctAnswerIndex: 0,
      explanation: 'Bromhexine (and its active metabolite Ambroxol) were directly developed by synthesizing analogues of Vasicine, the natural alkaloid from Adhatoda vasica.'
    },
    tags: ['Respiratory', 'Cough', 'Asthma', 'Leaves', 'Expectorant']
  }
];

export const DAILY_TIPS: Array<{
  plantName: string;
  botanicalName: string;
  tip: string;
  practicalUse: string;
  doshaBenefit: string;
}> = [
  {
    plantName: 'Bael (बेल)',
    botanicalName: 'Aegle marmelos',
    tip: 'Drinking a diluted sherbet of ripe Bael fruit with roasted cumin seeds before midday soothes the intestinal lining and regulates healthy peristalsis in hot weather.',
    practicalUse: 'Digestive elixir: Soak 2 tbsp fruit pulp in 200ml water, strain, add a pinch of rock salt and cumin.',
    doshaBenefit: 'Pacifies Pitta and Kapha, cools internal heat'
  },
  {
    plantName: 'Tulsi (तुळस)',
    botanicalName: 'Ocimum sanctum',
    tip: 'Chewing 4-5 fresh Tulsi leaves with a drop of pure honey every morning strengthens the protective lung mucosa and builds cellular immunity.',
    practicalUse: 'Morning ritual: Steep crushed Tulsi leaves in warm water for 5 minutes before breakfast.',
    doshaBenefit: 'Dispels Kapha congestion and balances Vata'
  },
  {
    plantName: 'Ashwagandha (अश्वगंधा)',
    botanicalName: 'Withania somnifera',
    tip: 'Taking half a teaspoon of Ashwagandha root powder with warm milk and a pinch of nutmeg 45 minutes before sleep calms cortisol spikes and promotes deep restorative REM sleep.',
    practicalUse: 'Moon Milk: Whisk half tsp root powder in warm cow milk or almond milk.',
    doshaBenefit: 'Pacifies aggravated Vata and calms the nervous system'
  },
  {
    plantName: 'Giloy (गुळवेल)',
    botanicalName: 'Tinospora cordifolia',
    tip: 'A fresh stem decoction of Giloy taken during seasonal changes helps maintain balanced WBC counts and burns away accumulated metabolic toxins (Ama).',
    practicalUse: 'Boil a thumb-sized crushed green stem in 2 cups water until reduced to half a cup.',
    doshaBenefit: 'Tridoshic harmonizer, especially pacifies high Pitta'
  },
  {
    plantName: 'Amla (आवळा)',
    botanicalName: 'Phyllanthus emblica',
    tip: 'Amla has heat-stable Vitamin C bound to complex polyphenols (emblicanins), making fresh Amla juice an extraordinary shield against UV damage and premature graying.',
    practicalUse: 'Drink 15ml fresh Amla juice with equal amount of water on an empty stomach.',
    doshaBenefit: 'Balances all three doshas without increasing stomach acid'
  }
];
