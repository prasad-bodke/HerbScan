import { MedicinalPlant } from '../types';

export const EXPANDED_HERBS: MedicinalPlant[] = [
  {
    id: 'shatavari',
    name: 'Shatavari (Wild Asparagus)',
    marathiName: 'शतावरी',
    botanicalName: 'Asparagus racemosus',
    family: 'Asparagaceae',
    partUsed: 'Tuberous Roots',
    image: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/34/Asparagus_racemosus.JPG/3840px-Asparagus_racemosus.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    traditionalUses: [
      'Revered as the supreme female rejuvenative (Rasayana), supporting hormonal balance across life stages.',
      'Potent natural galactagogue proven to increase breast milk production in nursing mothers.',
      'Soothes hyperacidity, gastric mucosal erosion, and peptic ulcers due to high mucilage content.',
      'Adaptogenic tonic that enhances vitality, endurance, and immune resilience against chronic stress.'
    ],
    safetyPrecautions: [
      'Use with clinical supervision in estrogen-dependent conditions or estrogen-receptor positive tumors.',
      'Possesses mild diuretic properties; monitor fluid and electrolyte balance in renal disease.',
      'Occasional allergic reactions in individuals sensitive to the Asparagaceae plant family.'
    ],
    phytochemicals: [
      'Shatavarin I, II, III, IV (steroidal saponins - key active markers)',
      'Sarsasapogenin',
      'Diosgenin',
      'Isoflavones',
      'Asparagamine A (polycyclic alkaloid)',
      'Polysaccharide Mucilage & Oligosaccharides'
    ],
    dosageForms: [
      'Shatavari Churna: 3 to 6 g with warm milk or ghee',
      'Shatavari Ghruta: 5 to 10 g on empty stomach',
      'Shatavari Kalpa (granules): 1 to 2 tsp with milk twice daily',
      'Standardized Aqueous Extract Capsules: 250 to 500 mg'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura (Sweet), Tikta (Bitter)',
      guna: 'Guru (Heavy), Snigdha (Unctuous)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Stanyajanana (Galactagogue) & Rasayana',
      doshaKarma: 'Pacifies Vata and Pitta doshas; can increase Kapha in excess'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Tuberous Root Extract',
        rationale: 'Standardized Shatavarin IV pediatric and maternal liquid tonic for lactation enhancement and postpartum recovery.',
        evaluationParameters: 'Shatavarin IV quantification via RP-HPLC, Specific gravity, Viscosity, Microbial safety testing, Stability per ICH guidelines.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Dried root micronized powder',
        rationale: 'Effervescent dispersible nutritional granules with natural prebiotic fiber to improve bioavailability and taste.',
        evaluationParameters: 'Angle of repose (< 28°), Dispersibility time (< 45s), Moisture content (LOD < 5%), Foam volume, Reconstitution stability.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Root Mucilage Fraction',
        rationale: 'Topical soothing mucoadhesive hydrogel for vaginal dryness and intimate mucosal hydration.',
        evaluationParameters: 'Mucoadhesion force using goat vaginal membrane, Spreadability index, Viscosity, In vitro permeation study.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Hydroethanolic Extract',
        rationale: 'Bilayer sustained-release tablet for adaptogenic adrenal recovery and hormone modulation.',
        evaluationParameters: 'Hardness, Friability (< 0.5%), Drug release kinetics in simulated gastric/intestinal fluid, Dissolution testing.'
      }
    ],
    quiz: {
      question: 'Which class of bioactive compounds serves as the key biomarker for standardizing Shatavari extracts?',
      options: ['Steroidal Saponins (Shatavarins)', 'Volatile Essential Oils', 'Anthraquinones', 'Cardiac Glycosides'],
      correctAnswerIndex: 0,
      explanation: 'Shatavarins (specifically Shatavarin I through IV) are steroidal saponins responsible for Shatavari’s adaptogenic, reproductive, and immunomodulatory activities.'
    },
    tags: ['Women Health', 'Immunity', 'Root', 'Digestion', 'Rasayana']
  },
  {
    id: 'guggulu',
    name: 'Guggulu (Indian Bdellium)',
    marathiName: 'गुग्गुळ',
    botanicalName: 'Commiphora wightii',
    family: 'Burseraceae',
    partUsed: 'Purified Oleo-gum-resin (Shuddha Guggulu)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Premier anti-arthritic (Amavata) herb that relieves joint pain, stiffness, and degenerative changes.',
      'Potent cholesterol and lipid regulator (Medoroga), clearing atherosclerotic plaques from blood vessels.',
      'Supports healthy thyroid functioning and promotes metabolic lipolysis for healthy weight management.',
      'Potent anti-inflammatory agent used in chronic skin disorders, ulcers, and boils.'
    ],
    safetyPrecautions: [
      'Must undergo classical purification (Shodhana) with Triphala or Dashamoola before internal use.',
      'Contraindicated during pregnancy as it may stimulate uterine contractions.',
      'May interact with blood thinners, statins, and thyroid replacement pharmaceuticals.'
    ],
    phytochemicals: [
      'E-Guggulsterone and Z-Guggulsterone (ketosteroids - primary biomarkers)',
      'Guggulsterol I, II, III, IV, and V',
      'Mukulol (allylic alcohol)',
      'Myrcene and alpha-Camphorene',
      'Lignans and Ferulates',
      'Gum Polysaccharides'
    ],
    dosageForms: [
      'Yogaraj Guggulu / Kaishore Guggulu: 500 mg to 1 g twice daily with warm water',
      'Medohar Guggulu: 2 tablets twice daily post meals',
      'Shuddha Guggulu Vati: 250 to 500 mg',
      'Standardized Guggulsterone Capsules: 25 mg guggulsterones'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Katu (Pungent), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp/Penetrating)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Medohara (Fat reducer) & Lekhana (Scraping action)',
      doshaKarma: 'Pacifies Vata and Kapha dosha; does not aggravate Pitta when purified'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Oleo-gum-resin Extract',
        rationale: 'Direct-compression enteric-coated tablet with E/Z-Guggulsterones for targeted intestinal absorption in hyperlipidemia.',
        evaluationParameters: 'Disintegration in simulated intestinal fluid (> 45 min in acid, < 30 min in intestinal pH 6.8), HPTLC assay of E/Z-Guggulsterone.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Hydroethanolic Resin Fraction',
        rationale: 'Topical nano-emulgel for localized transdermal joint delivery in knee osteoarthritis.',
        evaluationParameters: 'Skin permeation via Franz diffusion cell, Rheological viscosity profile, Anti-inflammatory inhibition in carrageenan rat paw model.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Purified Guggulu complexed with Cyclodextrin',
        rationale: 'Self-nanoemulsifying dry powder system (SNEDDS) to overcome poor water solubility of lipophilic guggulsterones.',
        evaluationParameters: 'Droplet size (< 150 nm), Polydispersity index (PDI < 0.3), Dissolution enhancement factor, Stability.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aqueous Triphala-purified resin fraction',
        rationale: 'Palatable lipid-metabolism syrup formulation combined with Garcinia cambogia for metabolic syndrome.',
        evaluationParameters: 'Specific gravity, Sugar concentration, Microbial load, Accelerated ICH stability at 40°C/75% RH.'
      }
    ],
    quiz: {
      question: 'Which pair of bioactive isomer ketosteroids is quantified to confirm pharmaceutical grade Guggulu extract?',
      options: ['E- and Z-Guggulsterone', 'Curcumin I and II', 'Vasicine and Vasicinone', 'Withaferin A and B'],
      correctAnswerIndex: 0,
      explanation: 'E- and Z-Guggulsterone are the primary bioactive steroidal markers in Commiphora wightii responsible for its hypolipidemic and anti-inflammatory mechanisms.'
    },
    tags: ['Joints', 'Metabolic', 'Resin', 'Cardiovascular', 'Inflammation']
  },
  {
    id: 'haritaki',
    name: 'Haritaki (Chebulic Myrobalan)',
    marathiName: 'हिरडा',
    botanicalName: 'Terminalia chebula',
    family: 'Combretaceae',
    partUsed: 'Pericarp of dry ripe fruit',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Celebrated as the "Mother of Herbs" and supreme bowel regulator (Anulomana) that cures constipation.',
      'Cleanses digestive tracts, stimulates sluggish appetite, and heals stubborn aphthous mouth ulcers.',
      'Demonstrated anti-aging (Rasayana) property that revitalizes sensory organs and enhances cognitive recall.',
      'Supports respiratory wellness, relieving hoarseness, chronic bronchial spasms, and allergic rhinitis.'
    ],
    safetyPrecautions: [
      'Avoid in severe acute exhaustion, emaciation, acute dehydration, and during active fasting.',
      'Pregnant women should avoid high doses due to its downward-moving (Vatanulomana) purgative tendencies.',
      'Ensure adequate fluid intake when taking concentrated dry powder.'
    ],
    phytochemicals: [
      'Chebulic acid and Chebulagic acid (unique signature tannins)',
      'Corilagin',
      'Gallic acid and Ellagic acid',
      'Terflavin A',
      'Punicalagin',
      'Hydrolyzable Tannins (30-40% content)'
    ],
    dosageForms: [
      'Haritaki Churna: 3 to 6 g with lukewarm water or castor oil at bedtime',
      'Abhayarishta: 15 to 30 mL with equal amount of water post meals',
      'Triphala Churna (1 part Haritaki, 2 parts Bibhitaki, 4 parts Amla)',
      'Gandharva Haritaki: 3 to 5 g for gentle colon cleansing'
    ],
    ayurvedicProperties: {
      rasa: 'Pancharasa (Has 5 tastes: Kashaya, Tikta, Madhura, Katu, Amla - lacking only Lavana/Salty)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Anulomana (Gentle peristalsis promoter) & Rasayana',
      doshaKarma: 'Tridosha shamaka (Balances all three doshas: Vata, Pitta, and Kapha)'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Fruit pericarp extract',
        rationale: 'Standardized chewable colon health tablet enriched with Corilagin and Chebulic acid for functional chronic constipation.',
        evaluationParameters: 'Friability, In vitro intestinal motility assay, Tannin content assay via UV/HPLC, Disintegration time.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aqueous decoction of fruit',
        rationale: 'Pediatric prebiotic and gastro-protective syrup formulation to heal gastric erosion without causing diarrhea.',
        evaluationParameters: 'Phenolic profile, Viscosity, Microbial limits, Cytoprotective index in ethanol-induced gastric mucosal model.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Astringent polyphenol fraction',
        rationale: 'Topical mucoadhesive oral buccal gel for rapid healing of recurrent aphthous stomatitis and gingivitis.',
        evaluationParameters: 'Mucoadhesion strength, In vitro zone of inhibition against Streptococcus mutans, Spreadability, pH.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Spray-dried aqueous fruit extract',
        rationale: 'Enteric-coated micro-granules ensuring active hydrolyzable tannins bypass stomach acidity into the colon.',
        evaluationParameters: 'Particle size distribution, Angle of repose, Moisture content, Colon drug release kinetics.'
      }
    ],
    quiz: {
      question: 'How many of the six classical Ayurvedic tastes (Shad-rasas) does Haritaki possess?',
      options: ['Five tastes (All except salty)', 'Only one (Bitter)', 'Three tastes', 'All six tastes'],
      correctAnswerIndex: 0,
      explanation: 'Haritaki famously contains five of the six Ayurvedic tastes (Astringent, Bitter, Sweet, Pungent, Sour) lacking only Salty (Lavana), which makes it Tridosha-balancing.'
    },
    tags: ['Digestion', 'Immunity', 'Fruit', 'Detox', 'Rasayana']
  },
  {
    id: 'bibhitaki',
    name: 'Bibhitaki (Belleric Myrobalan)',
    marathiName: 'बेहडा',
    botanicalName: 'Terminalia bellirica',
    family: 'Combretaceae',
    partUsed: 'Fruit rind',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Supreme remedy for chronic respiratory diseases, stubborn cough, hoarseness of voice, and excess throat phlegm.',
      'One of the essential three fruits of classical Triphala formulation, fostering eye health and hair pigmentation.',
      'Acts as a mild laxative when ripe and an astringent digestive binder when unripe.',
      'Possesses proven hepatoprotective and uric acid lowering (anti-gout) capabilities.'
    ],
    safetyPrecautions: [
      'Avoid high doses in severe dehydration or emaciation due to strong drying (Ruksha) property.',
      'Excessive consumption on an empty stomach may cause dry sensation in the mouth and mild nausea.'
    ],
    phytochemicals: [
      'Belleric acid and Bellericoside',
      'Gallic acid and Ellagic acid',
      'Ethyl gallate',
      'Chebulagic acid',
      'beta-Sitosterol',
      'Hydrolyzable Polyphenols'
    ],
    dosageForms: [
      'Bibhitaki Churna: 3 to 5 g with honey for throat and cough relief',
      'Triphala Churna component (equal parts)',
      'Herbal Throat Lozenges: 200 mg extract',
      'Fruit decoction: 20 to 30 mL for gargling'
    ],
    ayurvedicProperties: {
      rasa: 'Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Chedana (Phlegm-scraping) & Kaphahara',
      doshaKarma: 'Primarily pacifies Kapha and Pitta doshas; balances Vata in moderation'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Fruit Rind Hydroethanolic Extract',
        rationale: 'Sugar-free expectorant and mucolytic cough syrup for diabetic asthmatic patients.',
        evaluationParameters: 'Specific gravity, Gallic acid quantification, Phenol-red tracheobronchial secretion test, Viscosity.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Ellagic acid rich extract',
        rationale: 'Sublingual fast-disintegrating tablet for instant soothing of smoker cough and vocal fatigue.',
        evaluationParameters: 'Wetting time (< 25s), Hardness (4-5 kg/cm²), In vitro disintegration time, Throat muco-protective coating.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Fruit pulp micronized powder',
        rationale: 'Xanthine oxidase inhibiting dispersible granules to lower serum uric acid in hyperuricemia and gout.',
        evaluationParameters: 'In vitro Xanthine Oxidase enzyme inhibition IC50, Angle of repose, Moisture absorption isotherm.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Aqueous fruit extract',
        rationale: 'Antioxidant hair scalp serum/gel for premature graying and follicle micro-circulation.',
        evaluationParameters: 'pH (5.5), Viscosity, Polyphenol retention, Stability at accelerated temperatures.'
      }
    ],
    quiz: {
      question: 'Which classical tripartite Ayurvedic compound consists of Amla, Haritaki, and Bibhitaki?',
      options: ['Triphala', 'Trikatu', 'Dashamoola', 'Panchakarma'],
      correctAnswerIndex: 0,
      explanation: 'Triphala ("Three Fruits") is formulated from the pericarp of Amla (Phyllanthus emblica), Haritaki (Terminalia chebula), and Bibhitaki (Terminalia bellirica).'
    },
    tags: ['Respiratory', 'Throat', 'Fruit', 'Kapha', 'Hair']
  },
  {
    id: 'arjuna',
    name: 'Arjuna (White Marudah)',
    marathiName: 'अर्जुन',
    botanicalName: 'Terminalia arjuna',
    family: 'Combretaceae',
    partUsed: 'Stem Bark',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Gold standard Ayurvedic cardiotonic (Hridya) that strengthens heart muscle myocardium and increases ejection fraction.',
      'Supports healthy blood pressure, lowers LDL oxidation, and regulates lipid metabolism.',
      'Famous bone healing accelerator (Asthi-sandhaniya) that speeds up recovery from fractures.',
      'Astringent bark relieves bleeding disorders, menorrhagia, and speeds wound granulations.'
    ],
    safetyPrecautions: [
      'Exercise caution and consult a cardiologist if co-administered with digitalis or synthetic cardiac beta-blockers.',
      'High doses may cause mild flatulence or headache due to strong astringent tannins.'
    ],
    phytochemicals: [
      'Arjunic acid and Arjunolic acid (triterpenoid saponins)',
      'Arjunetin and Arjunoside I, II, III, and IV',
      'Oligomeric Proanthocyanidins (OPCs - vascular protectors)',
      'Natural Coenzyme Q10 precursors',
      'Flavonoids (Luteolin, Kaempferol)',
      'Calcium and Magnesium bio-salts'
    ],
    dosageForms: [
      'Arjuna Ksheerapaka (Milk decoction): 30 to 50 mL twice daily',
      'Arjunarishta: 15 to 30 mL with equal water after meals',
      'Arjuna Churna: 3 to 6 g with honey or milk',
      'Arjuna Ghan Vati: 250 to 500 mg tablets'
    ],
    ayurvedicProperties: {
      rasa: 'Kashaya (Astringent), Tikta (Bitter)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Hridya (Specific affinity and nourishment for heart tissue)',
      doshaKarma: 'Pacifies Kapha and Pitta dosha; does not aggravate Vata when taken with milk'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Stem Bark Extract',
        rationale: 'Sustained-release cardioprotective matrix tablet standardized to Arjunolic acid and Arjunic acid for ischemic heart disease.',
        evaluationParameters: 'In vitro drug release kinetics (Higuchi matrix), HPLC quantification of triterpenoids, Hardness, Friability (< 0.5%).'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Hydroethanolic Bark Extract',
        rationale: 'Alcohol-free cardio-tonic syrup enriched with antioxidant OPC flavonoids and bio-available magnesium.',
        evaluationParameters: 'Specific gravity, DPPH radical scavenging assay, Total flavonoid content, Viscosity, Physical clarity.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Fine Bark Powder with Milk Solids',
        rationale: 'Instant reconstitutable Ksheerapaka beverage mix for convenient daily cardiovascular care.',
        evaluationParameters: 'Dispersibility index, Moisture absorption rate, Reconstitution time (< 20s in warm water), Shelf stability.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Tannin and Phytosterol fraction',
        rationale: 'Topical osteogenic gel applied around cast immobilization to stimulate bone fracture callus formation.',
        evaluationParameters: 'Spreadability, Dermal irritation index, Alkaline phosphatase (ALP) expression in osteoblast cell cultures.'
      }
    ],
    quiz: {
      question: 'Why is Terminalia arjuna classical bark traditionally boiled in milk (Arjuna Ksheerapaka)?',
      options: ['Milk fats extract lipophilic triterpenoids while counteracting dry astringency', 'To destroy all active compounds', 'To add sugar flavor', 'It is only for coloration'],
      correctAnswerIndex: 0,
      explanation: 'Boiling Arjuna bark in cow milk (Ksheerapaka) extracts lipid-soluble cardiotonic saponins (Arjunolic acid) while the unctuous milk fats pacify the dry, astringent qualities.'
    },
    tags: ['Heart', 'Cardiovascular', 'Bark', 'Blood Pressure', 'Bone Healing']
  },
  {
    id: 'manjistha',
    name: 'Manjistha (Indian Madder)',
    marathiName: 'मंजिष्ठा',
    botanicalName: 'Rubia cordifolia',
    family: 'Rubiaceae',
    partUsed: 'Roots and Stems',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Supreme Ayurvedic blood purifier (Raktashodhaka) and deep lymphatic cleanser.',
      'Dermatological miracle herb that clears cystic acne, chronic eczema, psoriasis, and vitiligo.',
      'Brightens skin complexion and normalizes melanin pigmentation (Varnya property).',
      'Assists dissolution of urinary stones and heals damaged capillary microcirculation.'
    ],
    safetyPrecautions: [
      'May temporarily tint urine and perspiration with a harmless light reddish color.',
      'Use with moderation during pregnancy; avoid high doses without physician guidance.'
    ],
    phytochemicals: [
      'Purpurin (trihydroxyanthraquinone - key biomarker)',
      'Munjistin',
      'Alizarin and Ruberythric acid',
      'Rubiadin',
      'Nordamnacanthal',
      'Anthraquinone Glycosides'
    ],
    dosageForms: [
      'Manjishtadi Kwath: 15 to 30 mL with equal water twice daily',
      'Manjistha Churna: 1 to 3 g with warm water or honey',
      'Manjishtadi Thailam (Herbal face/body oil for pigmentation)',
      'Herbal Lepa (Face pack with sandalwood and rose water)'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)',
      guna: 'Guru (Heavy), Ruksha (Dry)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Raktashodhaka (Blood purifier) & Varnya (Complexion enhancer)',
      doshaKarma: 'Pacifies Pitta and Kapha doshas; neutralizes inflammatory toxins (Ama)'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Standardized Root Extract',
        rationale: 'Topical nano-liposomal anti-acne gel targeting Cutibacterium acnes and reducing post-inflammatory hyperpigmentation (PIH).',
        evaluationParameters: 'Zone of inhibition against C. acnes, Melanin synthesis inhibition assay (B16 melanoma cells), Viscosity, Skin tolerance.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purpurin-enriched Hydroethanolic Extract',
        rationale: 'Oral blood-cleansing coated tablet for chronic inflammatory psoriasis and recalcitrant eczema.',
        evaluationParameters: 'HPTLC assay of Purpurin, In vitro TNF-alpha and IL-6 cytokine reduction assay, Disintegration, Dissolution.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Roots and Stem Decoction',
        rationale: 'Detoxifying lymphatic drainage syrup enriched with Sariva for adolescent and adult blemish-prone skin.',
        evaluationParameters: 'Specific gravity, Anthraquinone content, Microbial purity, Stability under accelerated thermal conditions.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Fine Root Powder with Fuller Earth',
        rationale: 'Micro-fine exfoliating mask powder formulation for epidermal pigment turnover without dermal irritation.',
        evaluationParameters: 'Particle size distribution (< 75 microns), Bulk density, pH of 10% slurry, Heavy metal testing compliance.'
      }
    ],
    quiz: {
      question: 'Which prominent anthraquinone pigment serves as the primary bioactive marker of Rubia cordifolia?',
      options: ['Purpurin', 'Curcumin', 'Vasicine', 'Berberine'],
      correctAnswerIndex: 0,
      explanation: 'Purpurin (along with Munjistin and Alizarin) is the characteristic red-tinted anthraquinone giving Manjistha roots their color and therapeutic blood-purifying properties.'
    },
    tags: ['Skin', 'Blood Purifier', 'Root', 'Lymphatic', 'Detox']
  },
  {
    id: 'yashtimadhu',
    name: 'Yashtimadhu (Licorice / Mulethi)',
    marathiName: 'ज्येष्ठमध',
    botanicalName: 'Glycyrrhiza glabra',
    family: 'Fabaceae',
    partUsed: 'Roots and Stolons',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Premier soothing demulcent that relieves gastro-esophageal reflux disease (GERD) and accelerates peptic ulcer healing.',
      'Clarifies and strengthens the vocal cords (Kanthya), treating hoarseness, pharyngitis, and laryngitis.',
      'Acts as an expectorant, loosening dry recalcitrant mucus and calming bronchial inflammation.',
      'Famous brain and memory rejuvenator (Medhya Rasayana) and skin pigment-reducing cosmetic agent.'
    ],
    safetyPrecautions: [
      'Prolonged high-dose intake may cause pseudoaldosteronism (sodium retention, potassium loss, elevated blood pressure).',
      'Hypertensive and congestive heart failure patients should limit prolonged unmonitored consumption.',
      'Use Deglycyrrhizinated Licorice (DGL) for long-term chronic gastrointestinal therapy without hypertension risk.'
    ],
    phytochemicals: [
      'Glycyrrhizin (glycyrrhizic acid - 50 times sweeter than sucrose)',
      'Glabridin (potent skin-lightening isoflavane)',
      'Liquiritin and Isoliquiritin',
      'Formononetin',
      'Polysaccharide Mucilages',
      'Phytosterols'
    ],
    dosageForms: [
      'Yashtimadhu Churna: 2 to 4 g with warm milk or pure honey',
      'Yashtimadhu Ghruta: 5 to 10 g for hyperacidity and stomach ulcers',
      'Chewable DGL Lozenges: 380 mg before meals',
      'Decoction / Herbal Tea: 15 to 30 mL'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura (Naturally sweet), Tikta (Slightly bitter)',
      guna: 'Guru (Heavy), Snigdha (Unctuous)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Kanthya (Vocal enhancer) & Vranaropana (Ulcer healer)',
      doshaKarma: 'Pacifies Vata and Pitta doshas; increases Kapha dosha in heavy doses'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Root Hydroethanolic Extract',
        rationale: 'Soothing mucoadhesive cough syrup formulated with Honey and Tulsi for vocal cord strain and tracheitis.',
        evaluationParameters: 'Viscosity, Specific gravity, Glycyrrhizin quantification via RP-HPLC, Mucoadhesion on synthetic mucus membrane.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Deglycyrrhizinated Licorice (DGL) Extract',
        rationale: 'Chewable rapid-disintegrating antacid tablet that stimulates natural mucus production without elevating blood pressure.',
        evaluationParameters: 'Hardness, Disintegration time (< 30s chewable), In vitro acid neutralization capacity (ANC assay).'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Glabridin-enriched Root Fraction',
        rationale: 'Cosmeceutical depigmentation hydrogel for melasma and UV-induced hyperpigmentation.',
        evaluationParameters: 'Tyrosinase enzyme inhibition IC50, Spreadability index, Dermal penetration profile, Photostability.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micronized Stolons',
        rationale: 'Enteric-coated dispersible sachets for colon mucosal healing in ulcerative colitis.',
        evaluationParameters: 'Particle size (< 50 um), Dissolution profile in pH 1.2 and pH 6.8 media, Moisture content.'
      }
    ],
    quiz: {
      question: 'Which natural compound in Licorice is approximately 50 times sweeter than cane sugar and confers ulcer protection?',
      options: ['Glycyrrhizin', 'Stevioside', 'Aspartame', 'Saccharin'],
      correctAnswerIndex: 0,
      explanation: 'Glycyrrhizin (glycyrrhizic acid) is a triterpenoid saponin glycoside that imparts the sweet taste and anti-ulcer demulcent action to Licorice root.'
    },
    tags: ['Throat', 'Respiratory', 'Digestion', 'Root', 'Skin']
  },
  {
    id: 'punarnava',
    name: 'Punarnava (Spreading Hogweed)',
    marathiName: 'पुनर्नवा',
    botanicalName: 'Boerhavia diffusa',
    family: 'Nyctaginaceae',
    partUsed: 'Whole plant and Roots',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Name literally means "That which renews or regenerates again and again", signaling unmatched renal regeneration.',
      'Potent natural potassium-sparing diuretic (Mutrala) that clears systemic edema, ascites, and swollen ankles.',
      'Protects kidneys from nephrotoxic drug injury, clears urinary tract infections, and normalizes serum creatinine.',
      'Supports healthy liver detox, reduces congestive heart burden, and restores ocular clarity.'
    ],
    safetyPrecautions: [
      'May potentiate the action of synthetic pharmaceutical diuretics; monitor fluid balance.',
      'Patients taking cardiac medications (e.g., digoxin) should monitor serum electrolytes closely.'
    ],
    phytochemicals: [
      'Punarnavine (quinolizidine alkaloid - key biomarker)',
      'Boeravinones A through F (unique rotenoid polyphenols)',
      'Ecdysterone',
      'Ursolic acid',
      'Bioactive Potassium salts',
      'Syringaresinol mono-beta-D-glucoside'
    ],
    dosageForms: [
      'Punarnavasava: 15 to 30 mL with equal water after meals',
      'Punarnavadi Kwath: 20 to 30 mL twice daily',
      'Punarnava Churna: 3 to 5 g with warm water',
      'Punarnava Mandur: 2 tablets twice daily for edema and anemia'
    ],
    ayurvedicProperties: {
      rasa: 'Madhura (Sweet), Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Shothahara (Supreme anti-edema action) & Rasayana',
      doshaKarma: 'Balances Tridosha; powerfully clears accumulated Kapha and Pitta fluids'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Whole Plant Hydroethanolic Extract',
        rationale: 'Nephroprotective pediatric and geriatric oral liquid formulation standardized to Punarnavine.',
        evaluationParameters: 'Punarnavine assay, Diuretic index in metabolic cage animal studies, Electrolyte balance (Na+/K+ ratio), Stability.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Boeravinone-rich Root Extract',
        rationale: 'Direct-compression renal defense matrix tablet to attenuate diabetic nephropathy and proteinuria.',
        evaluationParameters: 'Serum creatinine reduction in nephrotoxic animal models, Hardness, Friability, In vitro dissolution.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Spray-dried extract with effervescent base',
        rationale: 'Instant effervescent urinary alkalizer granules to prevent uric acid and calcium oxalate nephrolithiasis.',
        evaluationParameters: 'Effervescence time (< 60s), Carbon dioxide yield, pH of solution (6.8-7.4), Moisture content.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Root aqueous extract',
        rationale: 'Topical anti-inflammatory soothing gel for diabetic foot edema and lymphatic stasis.',
        evaluationParameters: 'Spreadability, Dermal permeation, Extrudability, Skin irritation testing per OECD guidelines.'
      }
    ],
    quiz: {
      question: 'What is the literal translation and clinical significance of the Sanskrit name "Punarnava"?',
      options: ['"That which renews the body and tissues again and again"', '"The bitter king"', '"The five tastes"', '"The sacred fragrant basil"'],
      correctAnswerIndex: 0,
      explanation: 'Punarnava comes from "Punar" (again) and "Nava" (new), signifying its extraordinary ability to revitalize, renovate, and regenerate damaged kidney and liver tissues.'
    },
    tags: ['Kidney', 'Diuretic', 'Liver', 'Whole Plant', 'Edema']
  },
  {
    id: 'kalmegh',
    name: 'Kalmegh (King of Bitters)',
    marathiName: 'काळमेघ (भुईनिंब)',
    botanicalName: 'Andrographis paniculata',
    family: 'Acanthaceae',
    partUsed: 'Whole plant (Aerial parts)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Hailed as the "King of Bitters", it is the supreme hepatoprotective herb that cures sluggish liver and jaundice.',
      'Potent fever-breaker (Jwarahara) used historically to resolve malaria, dengue, and acute viral influenza.',
      'Stimulates endogenous interferon and leukocyte phagocytosis, building a fortress-like cellular immune shield.',
      'Clears intestinal pathogens, relieves chronic dysentery, and lowers fasting hyperglycemia.'
    ],
    safetyPrecautions: [
      'Intensely bitter taste can cause nausea or gastric reflex if taken directly on an empty stomach without carrier.',
      'Contraindicated during pregnancy due to potential emmenagogue (menstruation stimulating) properties.'
    ],
    phytochemicals: [
      'Andrographolide (labdane diterpenoid - premier therapeutic biomarker)',
      'Neoandrographolide',
      '14-Deoxy-11,12-didehydroandrographolide',
      'Andrograpanin',
      'Flavones and Diterpene Glucosides',
      'Andrographic acid'
    ],
    dosageForms: [
      'Kalmegh Churna: 1 to 3 g with warm water or honey post meals',
      'Kalmegh Navayas Loha: 250 to 500 mg for liver enlargement and anemia',
      'Standardized Andrographolide Capsules: 200 to 400 mg (10% andrographolide)',
      'Classical Kwath (Decoction): 15 to 30 mL'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Intensely bitter)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Yakrit-uttejaka (Hepatic stimulant) & Jwarahara (Antipyretic)',
      doshaKarma: 'Powerfully pacifies Pitta and Kapha dosha; expels accumulated metabolic Ama'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Andrographolide Extract',
        rationale: 'Film-coated taste-masked hepatoprotective tablet for viral hepatitis B and drug-induced liver injury.',
        evaluationParameters: 'Taste-masking efficiency evaluation, Disintegration time (< 15 min), HPLC assay of Andrographolide, Stability.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aqueous-alcoholic Aerial Extract',
        rationale: 'Sugar-free immunity and viral upper respiratory tract infection liquid syrup for seasonal influenza.',
        evaluationParameters: 'Specific gravity, Microbial limits, Antiviral in vitro cytopathic effect inhibition, Viscosity.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micro-encapsulated Plant Extract',
        rationale: 'Taste-masked dispersible granules encapsulated with cyclodextrin to eliminate intense bitterness.',
        evaluationParameters: 'Bitterness threshold sensory evaluation, Angle of repose, Particle size distribution, Dissolution rate.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Ethanolic Leaf Fraction',
        rationale: 'Topical antimicrobial gel against antibiotic-resistant Staphylococcus aureus dermal lesions.',
        evaluationParameters: 'Minimum inhibitory concentration (MIC), Dermal spreadability, Extrudability, Skin irritation testing.'
      }
    ],
    quiz: {
      question: 'Which intense bitter labdane diterpenoid serves as the primary bioactive marker of Kalmegh?',
      options: ['Andrographolide', 'Quinine', 'Curcumin', 'Allicin'],
      correctAnswerIndex: 0,
      explanation: 'Andrographolide is the signature diterpenoid lactone responsible for the intense bitter taste and remarkable antiviral, hepatoprotective, and anti-inflammatory actions of Kalmegh.'
    },
    tags: ['Liver', 'Immunity', 'Fever', 'Bitter', 'Detox']
  },
  {
    id: 'kutki',
    name: 'Kutki (Hellebore-root)',
    marathiName: 'कुटकी',
    botanicalName: 'Picrorhiza kurroa',
    family: 'Plantaginaceae',
    partUsed: 'Dried Rhizome and Roots',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Prized Himalayan high-altitude herb for severe hepatic disorders, cirrhosis, and jaundice.',
      'Stimulates bile secretion from gallbladder (Cholagogue) and clears biliary sludge.',
      'Alleviates allergic bronchial asthma by inhibiting platelet-activating factor and histamine release.',
      'Acts as a deep cellular febrifuge (Tikta-rasa antipyretic) in chronic low-grade pyrexia.'
    ],
    safetyPrecautions: [
      'High doses have strong laxative and purgative actions; avoid in acute diarrhea and dysentery.',
      'Endangered wild species; ensure sourcing only from sustainable, cultivated organic sources.'
    ],
    phytochemicals: [
      'Kutkin (iridoid glycoside complex - primary marker)',
      'Picroside I and Picroside II',
      'Kutkoside',
      'Apocynin (potent antioxidant vanilloid)',
      'Drosin',
      'Cucurbitacin Glycosides'
    ],
    dosageForms: [
      'Katuki Churna: 500 mg to 1 g with lukewarm water or honey',
      'Arogyavardhini Vati (contains 50% Kutki as its core therapeutic base)',
      'Tiktaka Ghruta: 5 to 10 g for chronic skin ailments and liver detox',
      'Standardized Picroside Capsules: 250 mg'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Intensely bitter)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Bhedana (Gentle purgative of stagnant bile) & Yakridroga-hara',
      doshaKarma: 'Pacifies Pitta and Kapha doshas; purges morbid Pitta from the gastrointestinal tract'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Rhizome Extract',
        rationale: 'Enteric-coated hepatoprotective tablet standardized to Picroside I and II for non-alcoholic fatty liver disease (NAFLD).',
        evaluationParameters: 'Assay of Picroside I and II via HPLC, Reduction of AST/ALT liver enzymes in vivo, Friability, Hardness.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Dry Extract with Cyclodextrin Inclusion',
        rationale: 'Dry Powder Inhaler (DPI) formulation with inhalable carrier for acute allergen-induced bronchial spasm.',
        evaluationParameters: 'Aerodynamic particle size distribution, Fine particle fraction (FPF > 45%), Emitted dose reproducibility.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aqueous Rhizome Decoction',
        rationale: 'Pediatric cholagogue syrup formulation for sluggish digestion and loss of appetite.',
        evaluationParameters: 'Viscosity, Specific gravity, Taste-masking efficacy, Shelf-life kinetics per ICH guidelines.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Apocynin-rich fraction',
        rationale: 'Topical anti-psoriatic hydrogel to inhibit epidermal hyper-proliferation and reactive oxygen species.',
        evaluationParameters: 'Spreadability, Franz cell skin permeation, Histopathology of epidermal thickness in mouse models.'
      }
    ],
    quiz: {
      question: 'Which legendary classical Ayurvedic liver tablet contains Picrorhiza kurroa (Kutki) as 50% of its herbal composition?',
      options: ['Arogyavardhini Vati', 'Chitrakadi Vati', 'Sanjeevani Vati', 'Khadiradi Vati'],
      correctAnswerIndex: 0,
      explanation: 'Arogyavardhini Vati is formulated with 50% Kutki (Picrorhiza kurroa) by weight, which is the secret behind its unmatched clinical liver-cleansing efficacy.'
    },
    tags: ['Liver', 'Gallbladder', 'Root', 'Himalayan', 'Detox']
  },
  {
    id: 'bhringraj',
    name: 'Bhringraj (False Daisy)',
    marathiName: 'माका (भृंगराज)',
    botanicalName: 'Eclipta prostrata',
    family: 'Asteraceae',
    partUsed: 'Whole Plant',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Crowned as "King of Hair" (Keshya), it revitalizes dormant hair follicles and reverses premature graying.',
      'Soothes liver inflammation, clears toxic heat from blood, and enhances liver enzyme synthesis.',
      'Acts as an ocular rejuvenator (Chakshushya), improving visual acuity and relieving eye strain.',
      'Supports neuro-cognition, calming mind agitation and promoting sound, deep sleep.'
    ],
    safetyPrecautions: [
      'Very safe for topical cosmetic use; excessive internal intake in cold weather may cause mild chills in sensitive Vata constitutions.',
      'Ensure proper oil preparation without residual moisture to prevent rancidity.'
    ],
    phytochemicals: [
      'Wedelolactone (coumestan - principal bioactive marker)',
      'Demethylwedelolactone',
      'Ecliptine',
      'beta-Amyrin and Luteolin',
      'Desmethyl-wedelolactone-7-glucoside',
      'Triterpene Glycosides'
    ],
    dosageForms: [
      'Mahabhringraj Thailam: Topical scalp application 2 to 3 times weekly',
      'Bhringraj Churna: 2 to 3 g with warm water or cow milk',
      'Bhringrajasava: 15 to 30 mL with equal water post meals',
      'Fresh leaf juice (Swarasa): 5 to 10 mL with honey'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Pungent), Tikta (Bitter)',
      guna: 'Ruksha (Dry), Laghu (Light)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Keshya (Supreme hair revitalizer) & Rasayana',
      doshaKarma: 'Pacifies Vata and Kapha doshas; alleviates Pitta disorders through liver detox'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Whole Plant Extract',
        rationale: 'Liposomal scalp leave-on hydrogel standardized to Wedelolactone for androgenetic alopecia hair follicle reactivation.',
        evaluationParameters: 'Hair follicle anagen/telogen ratio in C57BL/6 mice, Dermal papilla cell proliferation assay, Viscosity, Stability.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aqueous Leaf Extract',
        rationale: 'Pediatric liver tonic syrup to accelerate hepatic regeneration post-jaundice.',
        evaluationParameters: 'Wedelolactone quantification via HPTLC, Specific gravity, Sugar concentration, Microbial limit tests.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Hydroethanolic Extract',
        rationale: 'Hepatoprotective coated tablet to counter acetaminophen and ethanol-induced liver necrosis.',
        evaluationParameters: 'Assay of coumestans, In vitro antioxidant DPPH scavenging, Friability, In vitro disintegration.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Fine leaf and aerial part powder',
        rationale: 'Natural herbal hair dye and conditioning hair pack formulation with Indigofera and Henna.',
        evaluationParameters: 'Particle size (< 60 microns), Color fastness evaluation, Wetting time, Absence of heavy metals and PPD.'
      }
    ],
    quiz: {
      question: 'Which prominent coumestan biomarker in Eclipta prostrata is primarily measured to standardize Bhringraj hair formulas?',
      options: ['Wedelolactone', 'Withanolide A', 'Marmelosin', 'Andrographolide'],
      correctAnswerIndex: 0,
      explanation: 'Wedelolactone is the signature coumestan found in Bhringraj responsible for hair follicle stimulation, melanin synthesis, and potent hepatoprotection.'
    },
    tags: ['Hair', 'Skin', 'Liver', 'Whole Plant', 'Eyesight']
  },
  {
    id: 'gotukola',
    name: 'Gotu Kola (Mandukaparni)',
    marathiName: 'मांडूकपर्णी (ब्राह्मी प्रकार)',
    botanicalName: 'Centella asiatica',
    family: 'Apiaceae',
    partUsed: 'Whole plant and Leaves',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'One of the four elite Medhya Rasayanas (intellect restorers) in Charaka Samhita, boosting memory and neuro-regeneration.',
      'Dramatically accelerates type I and III collagen synthesis, healing chronic venous ulcers and skin scars.',
      'Calms mental stress, relieves anxiety, and alleviates neuro-inflammatory fatigue without drowsiness.',
      'Supports microcirculation, strengthening fragile capillaries and reducing varicose vein stagnation.'
    ],
    safetyPrecautions: [
      'Very safe at recommended doses; high doses may cause temporary mild headache in sensitive individuals.',
      'Rare contact dermatitis reported with crude topical poultices; patch test recommended.'
    ],
    phytochemicals: [
      'Asiaticoside (triterpene saponin - premier wound healer)',
      'Madecassoside',
      'Asiatic acid and Madecassic acid',
      'Centelloside',
      'Brahmoside and Brahmic acid',
      'Bioflavonoids and Phytosterols'
    ],
    dosageForms: [
      'Mandukaparni Swarasa (Fresh leaf juice): 10 to 20 mL with honey',
      'Dry powder: 1 to 3 g with warm milk or ghee',
      'Topical Centella Ointment / Gel (1% standardized asiaticoside)',
      'Standardized Cognitive Extract Capsules: 250 to 500 mg'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent), Madhura (Sweet)',
      guna: 'Laghu (Light)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Medhya (Cognitive enhancer), Hridya (Heart soother), Ayushya (Longevity)',
      doshaKarma: 'Tridosha balancing; particularly pacifies agitated Pitta and Vata'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal gel',
        plantPart: 'Purified Asiaticoside Fraction',
        rationale: 'Advanced wound-healing hydrogel to accelerate fibroblast proliferation and collagen remodeling in diabetic ulcers.',
        evaluationParameters: 'Tensile strength of healed tissue, In vitro scratch wound assay, Asiaticoside assay via HPLC, Spreadability.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Whole Plant Aqueous Extract',
        rationale: 'Pediatric cognitive focus and exam-stress syrup enriched with Shankhpushpi and Yashtimadhu.',
        evaluationParameters: 'Specific gravity, Triterpenoid concentration, Sensory palatability scoring, Microbial limit test.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Madecassoside Extract',
        rationale: 'Oral vascular health tablet for chronic venous insufficiency and micro-vascular retinopathy.',
        evaluationParameters: 'Disintegration, Friability, In vitro vascular endothelial protective assay, Dissolution kinetics.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Spray-dried Leaf Juice',
        rationale: 'Neuro-protective functional beverage powder formulated with adaptogenic mushrooms and green tea L-theanine.',
        evaluationParameters: 'Particle size, Dispersibility, Moisture absorption, Shelf stability under accelerated storage.'
      }
    ],
    quiz: {
      question: 'Which triterpenoid saponin in Centella asiatica is worldwide renowned for collagen synthesis and dermal healing?',
      options: ['Asiaticoside', 'Ginkgolid B', 'Resveratrol', 'Artemisinin'],
      correctAnswerIndex: 0,
      explanation: 'Asiaticoside stimulates type I collagen synthesis in human dermal fibroblasts and plays a central role in skin repair, scar reduction, and neuroprotection.'
    },
    tags: ['Brain', 'Memory', 'Skin', 'Collagen', 'Leaves']
  },
  {
    id: 'shankhpushpi',
    name: 'Shankhpushpi (Speedwheel)',
    marathiName: 'शंखपुष्पी',
    botanicalName: 'Convolvulus pluricaulis',
    family: 'Convolvulaceae',
    partUsed: 'Whole plant (Flowers, leaves, stems, roots)',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Unsurpassed Medhya Rasayana (mind tonic) that enhances retention, recall speed, and intellectual focus.',
      'Potent natural anxiolytic and tranquilizer that reduces cortisol spikes and calms nervous tremors.',
      'Promotes deep, restful sleep (Nidrajanana) without morning grogginess or dependency.',
      'Supports healthy blood pressure by relieving sympathetic autonomic hyper-reactivity.'
    ],
    safetyPrecautions: [
      'May augment the hypnotic effect of pharmaceutical sedatives; reduce dosage if combined.',
      'Extremely safe and well-tolerated across pediatric, adult, and geriatric demographics.'
    ],
    phytochemicals: [
      'Convolvine and Convolamine (signature tropane alkaloids)',
      'Shankhpushpine',
      'Scopoletin (coumarin with neuro-protective properties)',
      'beta-Sitosterol',
      'Hydroxycinnamic acid',
      'Kaempferol Glycosides'
    ],
    dosageForms: [
      'Shankhpushpi Syrup: 10 to 15 mL twice daily with water',
      'Shankhpushpi Churna: 3 to 6 g with warm cow milk at bedtime',
      'Shankhpushpi Oil: Scalp and temple massage for insomnia',
      'Standardized Brain Extract Capsules: 250 to 500 mg'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter), Kashaya (Astringent)',
      guna: 'Snigdha (Unctuous), Pichhila (Soothing)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Madhura (Sweet post-digestive effect)',
      prabhava: 'Medhya (Supreme mind rejuvenator) & Nidrajanana (Sleep inducer)',
      doshaKarma: 'Pacifies Pitta and Vata dosha; balances neurotransmitter equilibrium'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Whole Plant Hydroethanolic Extract',
        rationale: 'Standardized bedtime calming and sleep-induction syrup for high-stress insomnia and student examination anxiety.',
        evaluationParameters: 'Scopoletin quantification via RP-HPLC, Viscosity, In vivo elevated plus-maze anxiolytic animal model, Stability.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Alkaloid-rich Whole Plant Extract',
        rationale: 'Direct-compression sublingual fast-dissolving tablet for rapid panic attack calming and autonomic balance.',
        evaluationParameters: 'Wetting time (< 20s), Disintegration time, Hardness, Bioavailability kinetics.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micronized Whole Plant Powder',
        rationale: 'Nighttime golden milk mix powder formulated with Nutmeg and Brahmi for restorative deep REM sleep.',
        evaluationParameters: 'Angle of repose, Bulk density, Flavor acceptance, Moisture adsorption isotherm.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Flower and Leaf Extract',
        rationale: 'Cooling temple soothing gel roll-on for tension headaches, mental burnout, and screen eye strain.',
        evaluationParameters: 'Spreadability, Cooling sensation persistence, Dermal permeability, Rheology.'
      }
    ],
    quiz: {
      question: 'Why did ancient Ayurvedic sages name this botanical "Shankhpushpi"?',
      options: ['Its delicate blossoms resemble the sacred conch shell (Shankha)', 'It only grows near sea shells', 'It has a shell-like seed coat', 'It makes a sound like a conch'],
      correctAnswerIndex: 0,
      explanation: 'The name Shankhpushpi derives from "Shankha" (Conch shell) and "Pushpa" (Flower), referencing the distinctive conch-like shape of its pristine white/light-blue blossoms.'
    },
    tags: ['Brain', 'Memory', 'Sleep', 'Stress', 'Whole Plant']
  },
  {
    id: 'vacha',
    name: 'Vacha (Sweet Flag)',
    marathiName: 'वेखंड',
    botanicalName: 'Acorus calamus',
    family: 'Acoraceae',
    partUsed: 'Dried Rhizome',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Renowned as "Vak-prada" (Bestower of eloquent speech), treating stuttering, voice hoarseness, and speech impediments.',
      'Clears thick Kapha obstruction from cranial sinuses, throat passages, and nasal pathways.',
      'Stimulates sharp intellect, mental alertness, and sensory awareness.',
      'Effective carminative that relieves abdominal colic, dyspepsia, and infant gas pains.'
    ],
    safetyPrecautions: [
      'Use only purified (Shodhita) rhizomes or certified low beta-asarone varieties to comply with pharmacopoeial safety.',
      'Large doses act as a strong emetic (induces vomiting); keep strictly to micro-dosages (125-250 mg).',
      'Contraindicated in active bleeding disorders and severe hyperacidity.'
    ],
    phytochemicals: [
      'alpha-Asarone and beta-Asarone (essential phenylpropanoids)',
      'Calamene',
      'Acorone and Isoacorone',
      'Calamenol',
      'Eugenol and Methyl eugenol',
      'Sesquiterpenoids'
    ],
    dosageForms: [
      'Shodhita Vacha Churna: 125 to 250 mg with pure honey or ghee',
      'Vacha Taila: Nasal administration (Nasya) for clearing head sinuses',
      'Saraswatarishta component: 15 to 30 mL for intellect and voice',
      'Topical rhizome paste on forehead for tension headache'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Pungent), Tikta (Bitter)',
      guna: 'Laghu (Light), Tikshna (Penetrating/Sharp)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Medhya (Intellect enhancer), Lekhana (Scraping), Vak-prada (Speech promoter)',
      doshaKarma: 'Powerfully pacifies Vata and Kapha dosha; may increase Pitta in high doses'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Rhizome Fraction',
        rationale: 'Micro-dose lozenge for voice projection, vocal resonance, and throat mucosa decongestion in singers and teachers.',
        evaluationParameters: 'Asarone quantification, Muco-dissolution time in oral cavity, Hardness, Palatability score.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aqueous Rhizome Extract',
        rationale: 'Pediatric cognitive speech-therapy syrup formulation to assist articulation and speech developmental milestones.',
        evaluationParameters: 'Specific gravity, Microbial safety testing, Absence of beta-asarone toxicity, Viscosity.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Purified Dried Rhizome Powder',
        rationale: 'Standardized micronized carminative powder with Cumin and Ajwain for chronic infantile colic and flatulence.',
        evaluationParameters: 'Angle of repose (< 25°), Particle size distribution (< 45 um), Volatile oil content, LOD.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Rhizome Essential Oil Fraction',
        rationale: 'Topical micro-emulsion gel for relief of arthritic joint stiffness and peripheral nerve numbness.',
        evaluationParameters: 'Dermal flux rate, Franz diffusion study, Spreadability index, Skin irritation score.'
      }
    ],
    quiz: {
      question: 'Which specific classical action makes Vacha (Acorus calamus) renowned for singers and public speakers?',
      options: ['Vak-prada (Bestower and clarifier of speech & vocal resonance)', 'Natural red dye', 'Sedative only', 'Cooling diuretic'],
      correctAnswerIndex: 0,
      explanation: 'Vacha is classical named "Vak-prada" because its penetrating properties clear Kapha phlegm from vocal cords and cranial nadis, enhancing speech fluency and articulation.'
    },
    tags: ['Speech', 'Brain', 'Rhizome', 'Throat', 'Kapha']
  },
  {
    id: 'sarpgandha',
    name: 'Sarpgandha (Indian Snakeroot)',
    marathiName: 'सर्पगंधा',
    botanicalName: 'Rauvolfia serpentina',
    family: 'Apocynaceae',
    partUsed: 'Root',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Historic botanical marvel from which modern psychiatry and cardiology discovered Reserpine.',
      'Premier remedy for essential hypertension, steadily lowering systolic and diastolic arterial pressures.',
      'Calms severe manic agitation, violent psychotic episodes, and intractable nervous hysteria (Unmada).',
      'Induces deep, prolonged sleep in chronic insomnia resistant to standard therapies.'
    ],
    safetyPrecautions: [
      'Potent prescription botanical that should only be taken under experienced Ayurvedic / medical supervision.',
      'Contraindicated in clinical depression, active peptic ulcer disease, and Parkinsonism.',
      'Monitor blood pressure strictly to avoid excessive hypotension or bradycardia.'
    ],
    phytochemicals: [
      'Reserpine (indole alkaloid - historical antihypertensive breakthrough)',
      'Ajmaline (anti-arrhythmic agent)',
      'Ajmalicine (raubasine - cerebral vasodilator)',
      'Serpentinine and Sarpagine',
      'Yohimbine isomers',
      'Total Rauvolfia Alkaloids (> 1.0% content)'
    ],
    dosageForms: [
      'Sarpagandha Ghan Vati: 250 to 500 mg strictly under physician prescription',
      'Sarpagandha Churna: 250 to 500 mg with warm milk or ghee at bedtime',
      'Sarpagandhadya Churna: 500 mg for calming acute nervous agitation',
      'Standardized Alkaloid Tablets: 50 mg total alkaloids'
    ],
    ayurvedicProperties: {
      rasa: 'Tikta (Bitter)',
      guna: 'Ruksha (Dry)',
      virya: 'Ushna (Warm potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Nidrajanana (Sleep inducer) & Hridya/Raktachapa-hara (Antihypertensive)',
      doshaKarma: 'Pacifies Vata and Kapha dosha; calms aggravated Prana and Vyana Vata'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Root Extract',
        rationale: 'Bilayer sustained-release tablet standardized to Reserpine and Ajmaline for 24-hour baseline hypertension control.',
        evaluationParameters: 'In vitro dissolution profile across 24h, RP-HPLC assay of Reserpine, Hardness, Friability.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aqueous-ethanolic Root Decoction',
        rationale: 'Micro-dose tranquilizing syrup formulation for acute hyper-adrenergic anxiety and severe insomnia.',
        evaluationParameters: 'Specific gravity, Total alkaloid assay, Locomotor activity reduction in open field animal test, Viscosity.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Purified Micronized Root Powder',
        rationale: 'Standardized enteric-coated micro-granules to minimize gastric irritation and prevent nausea.',
        evaluationParameters: 'Angle of repose, Drug release in simulated gastric vs. intestinal fluids, Shelf-life stability.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Root Alkaloid Extract',
        rationale: 'Transdermal therapeutic patch or gel for sustained non-invasive transdermal blood pressure management.',
        evaluationParameters: 'In vitro skin permeation flux across porcine skin, Skin irritation test, Adhesive peel strength.'
      }
    ],
    quiz: {
      question: 'Which landmark modern prescription antihypertensive drug was originally isolated directly from Sarpgandha roots?',
      options: ['Reserpine', 'Aspirin', 'Penicillin', 'Digoxin'],
      correctAnswerIndex: 0,
      explanation: 'Reserpine was famously isolated in 1952 from Rauvolfia serpentina (Sarpgandha), revolutionizing the modern treatment of hypertension and schizophrenia worldwide.'
    },
    tags: ['Blood Pressure', 'Sleep', 'Heart', 'Root', 'Nervous System']
  },
  {
    id: 'chitrak',
    name: 'Chitrak (Ceylon Leadwort)',
    marathiName: 'चित्रक',
    botanicalName: 'Plumbago zeylanica',
    family: 'Plumbaginaceae',
    partUsed: 'Root and Root Bark',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Foremost botanical in Ayurveda for reigniting deficient digestive fire (Supreme Deepana and Pachana).',
      'Melts accumulated metabolic toxins (Ama) and digests sluggish, stagnant gastrointestinal waste.',
      'Revered therapeutic remedy for non-bleeding hemorrhoids, rectal prolapse, and sluggish bowels.',
      'Supports healthy lipid reduction, speeding up basal metabolic breakdown in obesity.'
    ],
    safetyPrecautions: [
      'Intensely hot, sharp, and pungent; strictly contraindicated during pregnancy (potential abortifacient in high doses).',
      'Avoid in active peptic ulcers, gastritis, ulcerative colitis, and internal bleeding disorders.',
      'Always observe strict low dosages and prescribe alongside cooling carriers (Ghee or Milk).'
    ],
    phytochemicals: [
      'Plumbagin (5-hydroxy-2-methyl-1,4-naphthoquinone - key active biomarker)',
      'Chitranone',
      'Zeylinone and Isozeylinone',
      'Droserone',
      'Plumbagic acid',
      'beta-Sitosterol'
    ],
    dosageForms: [
      'Chitrakadi Vati: 1 to 2 tablets chewed before meals with warm water',
      'Chitrak Haritaki Avaleha: 5 to 10 g for respiratory and digestive Kapha',
      'Shodhita Chitrak Churna: 250 to 500 mg with ghee',
      'Chitrakadi Ghruta: 3 to 5 g for sluggish digestion'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Pungent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp/Penetrating)',
      virya: 'Ushna (Intensely hot potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Deepana (Kindler of Agni), Pachana (Digester of Ama), Arshoghna (Piles cure)',
      doshaKarma: 'Powerfully destroys Kapha and Vata doshas; increases Pitta dosha'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Plumbagin Root Extract',
        rationale: 'Direct-compression enteric-coated tablet for stimulating sluggish digestive enzymes without causing stomach heartburn.',
        evaluationParameters: 'Plumbagin quantification via RP-HPLC, Gastric mucosal tolerance assay, Disintegration, Friability.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Root bark micronized powder',
        rationale: 'Digestive enzyme stimulating sachet formulated with Ginger, Black Pepper, and Rock Salt.',
        evaluationParameters: 'Angle of repose, Flowability, Moisture content, In vitro starch and protein enzymatic digestion assay.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Aqueous Root Extract',
        rationale: 'Appetite-stimulating pediatric and adult carminative syrup for anorexia and post-fever digestive weakness.',
        evaluationParameters: 'Specific gravity, Sugar content, Viscosity, Organoleptic evaluation, Stability per ICH.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Ethanolic Root Bark Fraction',
        rationale: 'Topical antibacterial Plumbagin nano-emulgel for recalcitrant fungal tinea infections and scabies.',
        evaluationParameters: 'Antifungal zone of inhibition against Trichophyton rubrum, Skin penetration rate, Spreadability.'
      }
    ],
    quiz: {
      question: 'Which biological entity does Chitrak most famously rekindle and optimize in Ayurvedic physiology?',
      options: ['Agni (Digestive Fire / Metabolic Enzymes)', 'Prana Vayu only', 'Kapha hydration', 'Bone marrow density'],
      correctAnswerIndex: 0,
      explanation: 'Chitrak is considered the archetypal Deepana herb, sparking and optimizing Agni (Digestive & Metabolic Fire) to incinerate Ama (metabolic toxins).'
    },
    tags: ['Digestion', 'Metabolism', 'Root', 'Deepana', 'Weight']
  },
  {
    id: 'vidanga',
    name: 'Vidanga (False Black Pepper)',
    marathiName: 'वावडिंग',
    botanicalName: 'Embelia ribes',
    family: 'Primulaceae',
    partUsed: 'Dried Fruit / Berries',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Uncontested "Krimighna" (supreme destroyer of intestinal parasites, worms, and micro-pathogens).',
      'Clears abdominal distension, stubborn flatulence, bloating, and painful cramps.',
      'Clears fungal skin infections, improves dermatological tone, and purifies lymphatic fluids.',
      'Stimulates healthy fat metabolism and eliminates toxic stagnation from digestive channels.'
    ],
    safetyPrecautions: [
      'Prolonged high-dose intake possesses reversible contraceptive / anti-fertility effects in animal studies.',
      'Women actively attempting to conceive should avoid continuous therapeutic high dosages.'
    ],
    phytochemicals: [
      'Embelin (2,5-dihydroxy-6-undecyl-1,4-benzoquinone - premier active marker)',
      'Embelic acid',
      'Quercitol',
      'Vilangin',
      'Tannins and Resins',
      'Volatile Essential Oil'
    ],
    dosageForms: [
      'Vidangarishta: 15 to 30 mL with equal water after meals',
      'Vidangadi Churna: 2 to 4 g with warm water or honey',
      'Vidanga Lauha: 250 to 500 mg for worm infestations and anemia',
      'Krimi Kuthar Ras: 1 to 2 tablets for acute intestinal parasites'
    ],
    ayurvedicProperties: {
      rasa: 'Katu (Pungent), Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry), Tikshna (Sharp)',
      virya: 'Ushna (Hot potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Krimighna (Supreme vermicidal and anti-parasitic action)',
      doshaKarma: 'Pacifies Kapha and Vata doshas; eliminates cold damp stagnation'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Standardized Embelin Fruit Extract',
        rationale: 'Chewable pediatric and adult anthelmintic tablet for broad-spectrum eradication of roundworms, pinworms, and tapeworms.',
        evaluationParameters: 'In vitro paralysis and mortality assay on earthworms, HPLC assay of Embelin, Palatability, Friability.'
      },
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Fruit Hydroethanolic Decoction',
        rationale: 'Flavored pediatric deworming syrup formulation with natural honey and peppermint for routine school deworming.',
        evaluationParameters: 'Specific gravity, Viscosity, Microbial safety limits, Accelerated stability at 40°C/75% RH.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micronized Dried Berries',
        rationale: 'Gut-cleansing carminative dispersible sachet to eliminate abdominal bloating and intestinal dysbiosis.',
        evaluationParameters: 'Angle of repose, Particle size distribution, Dispersion time, Moisture sorption analysis.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Embelin-rich Lipid Extract',
        rationale: 'Topical antifungal cream/gel for ringworm (Tinea corporis) and scalp fungal infections.',
        evaluationParameters: 'Minimum fungicidal concentration (MFC) against Candida and Microsporum, Spreadability, Extrudability.'
      }
    ],
    quiz: {
      question: 'Which prominent quinone biomarker in Embelia ribes gives Vidanga its anti-parasitic and deworming power?',
      options: ['Embelin', 'Piperine', 'Gingerol', 'Allicin'],
      correctAnswerIndex: 0,
      explanation: 'Embelin is the signature bright orange benzoquinone derivative responsible for paralyzing and expelling intestinal helminths and parasites.'
    },
    tags: ['Parasites', 'Digestion', 'Fruit', 'Krimighna', 'Detox']
  },
  {
    id: 'lodhra',
    name: 'Lodhra (Symplocos Bark)',
    marathiName: 'लोध्र',
    botanicalName: 'Symplocos racemosa',
    family: 'Symplocaceae',
    partUsed: 'Stem Bark',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Ash_Tree_-_geograph.org.uk_-_590710.jpg/1280px-Ash_Tree_-_geograph.org.uk_-_590710.jpg',
    traditionalUses: [
      'Pre-eminent Ayurvedic gynecological astringent, arresting menorrhagia, metrorrhagia, and leucorrhea.',
      'Firms and tones the female reproductive tract, strengthening uterine ligaments and pelvic floor health.',
      'Clears oily acne-prone skin, tightens large open pores, and soothes inflammatory skin breakouts.',
      'Potent hemostatic (Stambhana) that stops bleeding gums, nosebleeds, and capillary hemorrhages.'
    ],
    safetyPrecautions: [
      'High doses on an empty stomach may cause mild constipation due to high astringent tannin concentration.',
      'Take with warm water or light decoctions to facilitate optimal absorption.'
    ],
    phytochemicals: [
      'Loturine and Colloturine (characteristic quinoline alkaloids)',
      'Loturidine',
      'Betulinic acid (triterpenoid)',
      'Ellagic acid and Gallic acid derivatives',
      'Symposide (glycoside)',
      'Astringent Condensed Tannins'
    ],
    dosageForms: [
      'Lodhrasava: 15 to 30 mL with equal water post meals',
      'Lodhra Churna: 3 to 5 g with rice water (Tandulodaka) or honey',
      'Pushyanug Churna component: 2 to 3 g for female gynecological balance',
      'Lodhra Lepa: Topical bark paste with rose water for acne and blemishes'
    ],
    ayurvedicProperties: {
      rasa: 'Kashaya (Astringent)',
      guna: 'Laghu (Light), Ruksha (Dry)',
      virya: 'Sheeta (Cooling potency)',
      vipaka: 'Katu (Pungent post-digestive effect)',
      prabhava: 'Grahi / Stambhana (Hemostatic & binding) & Raktapittahara',
      doshaKarma: 'Pacifies Kapha and Pitta doshas; checks excess heat and fluid discharge'
    },
    researchPossibilities: [
      {
        formulationType: 'Herbal syrup',
        plantPart: 'Standardized Bark Decoction',
        rationale: 'Uterine tonic and hormonal balancing syrup enriched with Ashoka and Shatavari for abnormal uterine bleeding.',
        evaluationParameters: 'Specific gravity, Total alkaloid content, Hemostatic clotting time acceleration assay, Viscosity.'
      },
      {
        formulationType: 'Herbal gel',
        plantPart: 'Aqueous-ethanolic Bark Extract',
        rationale: 'Astringent pore-refining and anti-acne sebum control topical gel for adolescent hormonal cystic acne.',
        evaluationParameters: 'Spreadability, Sebum secretion reduction in human volunteer trials, Anti-inflammatory inhibition, pH.'
      },
      {
        formulationType: 'Herbal tablet',
        plantPart: 'Purified Bark Extract',
        rationale: 'Direct-compression hemostatic tablet for controlling heavy menstrual flow without hormonal side-effects.',
        evaluationParameters: 'Disintegration time (< 15 min), Tannin and betulinic acid assay, Friability (< 0.6%), Hardness.'
      },
      {
        formulationType: 'Herbal powder',
        plantPart: 'Micro-fine Bark Powder',
        rationale: 'Hemostatic dental toothpowder and mouthwash formulation for bleeding gums (gingivitis) and loose teeth.',
        evaluationParameters: 'Astringency index, Microbial limit testing, Particle size (< 45 um), In vitro anti-Streptococcal assay.'
      }
    ],
    quiz: {
      question: 'Which taste (Rasa) and primary pharmacological action makes Lodhra bark revered for stopping hemorrhages?',
      options: ['Kashaya (Astringent) with Stambhana (Hemostatic/Binding)', 'Tikta (Bitter) with Purgation', 'Madhura (Sweet) with Bulk forming', 'Lavana (Salty) with Hydration'],
      correctAnswerIndex: 0,
      explanation: 'Lodhra bark is rich in Kashaya (Astringent) tannins, giving it profound Stambhana (hemostatic) efficacy to halt excessive menstrual bleeding, leucorrhea, and hemorrhages.'
    },
    tags: ['Women Health', 'Astringent', 'Bark', 'Skin', 'Gynecology']
  }
];
