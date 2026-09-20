import React, { useState, useEffect } from 'react';
import {
  FlaskConical,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  FileText,
  Printer,
  ChevronDown,
  Layers,
  Atom,
  ShieldCheck,
  Zap,
  BookMarked,
} from 'lucide-react';
import { MedicinalPlant, FormulationProtocol } from '../types';
import { HERBAL_DATABASE } from '../data/herbalDatabase';

interface ResearchIdeaScreenProps {
  initialPlant?: MedicinalPlant | null;
  initialFormulationType?: string;
  onSelectPlant: (plant: MedicinalPlant) => void;
}

const FORMULATION_TYPES = [
  'Herbal syrup',
  'Herbal gel',
  'Herbal powder',
  'Herbal tablet',
  'Nanoemulsion',
  'Transdermal patch',
];

const BAEL_PARTS = [
  'Fruit (unripe slices)',
  'Fruit pulp (ripe)',
  'Leaves',
  'Root Bark',
  'Seeds (oil fraction)',
];

export const ResearchIdeaScreen: React.FC<ResearchIdeaScreenProps> = ({
  initialPlant,
  initialFormulationType,
  onSelectPlant,
}) => {
  const [selectedPlantId, setSelectedPlantId] = useState<string>(
    initialPlant ? initialPlant.id : 'bael'
  );
  const [selectedPart, setSelectedPart] = useState<string>('Fruit (unripe slices)');
  const [selectedFormulation, setSelectedFormulation] = useState<string>(
    initialFormulationType || 'Herbal syrup'
  );
  const [focusArea, setFocusArea] = useState<string>(
    'Gastric ulcer healing and IBS gastro-protection'
  );

  const [isLoading, setIsLoading] = useState(false);
  const [protocol, setProtocol] = useState<FormulationProtocol | null>(null);
  const [copied, setCopied] = useState(false);

  // Active plant object
  const currentPlant =
    HERBAL_DATABASE.find((p) => p.id === selectedPlantId) || HERBAL_DATABASE[0];

  // Update when props change
  useEffect(() => {
    if (initialPlant) {
      setSelectedPlantId(initialPlant.id);
      if (initialPlant.id === 'bael') {
        setSelectedPart('Fruit (unripe slices)');
      } else {
        setSelectedPart(initialPlant.partUsed.split(',')[0].trim());
      }
    }
    if (initialFormulationType) {
      setSelectedFormulation(initialFormulationType);
    }
  }, [initialPlant, initialFormulationType]);

  // Generate initial research dossier on mount or herb selection
  useEffect(() => {
    generateLocalProtocol(currentPlant, selectedPart, selectedFormulation, focusArea);
  }, [selectedPlantId, selectedFormulation, selectedPart]);

  const generateLocalProtocol = (
    plant: MedicinalPlant,
    part: string,
    formulation: string,
    indication: string
  ) => {
    const isBael = plant.id === 'bael';

    let title = `${formulation} Formulation and Pharmacotechnical Evaluation of ${plant.name} (${plant.botanicalName})`;
    let targetMarkers = plant.phytochemicals.slice(0, 3);
    let novelty = `Overcomes instability and low bioavailability of ${targetMarkers[0]} by developing an optimized herbal drug delivery system.`;

    if (isBael) {
      title = `Standardized ${formulation} of Bael (Aegle marmelos ${part}) for ${indication}`;
      targetMarkers = ['Marmelosin (coumarin biomarker)', 'Aegeline (alkaloid)', 'Pectin / Mucilage'];
      if (formulation === 'Herbal syrup') {
        novelty = 'Development of an alcohol-free, non-crystallizing gastro-protective Bael fruit syrup with standardized Marmelosin content (min 0.25% w/w) for clinical remission in irritable bowel syndrome.';
      } else if (formulation === 'Herbal gel') {
        novelty = 'Bio-adhesive topical hydrogel combining Bael leaf polyphenols with natural pectin matrix, exhibiting high spreadability and enhanced transdermal wound healing in diabetic models.';
      } else if (formulation === 'Herbal powder') {
        novelty = 'Micronized enteric-coated Bilva Churna granules designed to resist harsh stomach acid and selectively release active coumarins in the distal colon for Ulcerative Colitis.';
      } else if (formulation === 'Herbal tablet') {
        novelty = 'Direct-compression sustained-release matrix tablet utilizing purified natural Bael seed gum as an eco-friendly biopolymer binder and release retardant.';
      }
    }

    // Dynamic Excipient matrix based on formulation type
    let matrix = [
      {
        ingredient: `${plant.name} Standardized Extract`,
        role: 'Active Pharmaceutical Ingredient (API)',
        concentration: formulation === 'Herbal syrup' ? '5.0% w/v' : formulation === 'Herbal gel' ? '2.5% w/w' : '250 mg / unit',
      },
    ];

    if (formulation === 'Herbal syrup') {
      matrix.push(
        { ingredient: 'Liquid Invert Sugar (67% w/v)', role: 'Base Vehicle & Demulcent', concentration: 'q.s. to 100 mL' },
        { ingredient: 'Glycerin / Propylene glycol', role: 'Co-solvent & Anti-crystallizing agent', concentration: '10.0% v/v' },
        { ingredient: 'Sodium Benzoate + Potassium Sorbate (1:1)', role: 'Synergistic Preservatives', concentration: '0.2% w/v' },
        { ingredient: 'Citric Acid Monohydrate', role: 'pH Buffer (4.8 - 5.2)', concentration: '0.15% w/v' },
        { ingredient: 'Natural Cardamom / Mint Flavor', role: 'Organoleptic Taste Masker', concentration: '0.1% v/v' }
      );
    } else if (formulation === 'Herbal gel') {
      matrix.push(
        { ingredient: 'Carbopol 940 / Sodium CMC', role: 'Gelling Polymer', concentration: '1.2% w/w' },
        { ingredient: 'Triethanolamine (TEA)', role: 'Neutralizing & Cross-linking agent', concentration: 'q.s. to pH 6.4' },
        { ingredient: 'Propylene Glycol', role: 'Permeation Enhancer & Humectant', concentration: '5.0% w/w' },
        { ingredient: 'Methyl Paraben + Propyl Paraben', role: 'Antimicrobial Preservatives', concentration: '0.2% w/w' },
        { ingredient: 'Purified Water (Milli-Q)', role: 'Aqueous Vehicle', concentration: 'q.s. to 100 g' }
      );
    } else if (formulation === 'Herbal tablet') {
      matrix.push(
        { ingredient: 'Microcrystalline Cellulose (Avicel PH-102)', role: 'Direct Compression Binder/Diluent', concentration: '35.0% w/w' },
        { ingredient: 'Bael Fruit Mucilage / HPMC K100M', role: 'Sustained Release Matrix Polymer', concentration: '15.0% w/w' },
        { ingredient: 'Crosscarmellose Sodium', role: 'Superdisintegrant (Core layer)', concentration: '4.0% w/w' },
        { ingredient: 'Colloidal Silicon Dioxide (Aerosil 200)', role: 'Glidant & Anti-caking agent', concentration: '1.0% w/w' },
        { ingredient: 'Magnesium Stearate', role: 'Hydrophobic Lubricant', concentration: '1.0% w/w' }
      );
    } else {
      // Herbal powder
      matrix.push(
        { ingredient: 'Maltodextrin DE-10', role: 'Spray Drying Carrier', concentration: '20.0% w/w' },
        { ingredient: 'Eudragit L-100-55', role: 'Enteric pH-Dependent Coating Polymer', concentration: '5.0% w/w' },
        { ingredient: 'Aerosil 200', role: 'Free-flow Glidant', concentration: '1.5% w/w' },
        { ingredient: 'Stevia Rebaudiana Extract', role: 'Natural Zero-calorie Sweetener', concentration: '0.5% w/w' }
      );
    }

    // Evaluation parameters per Pharmacopoeial Standards
    const evaluationParameters = {
      physical: [
        { parameter: 'Organoleptic Characterization', acceptanceCriteria: 'Uniform consistency, characteristic herbal aroma, devoid of sedimentation or phase separation' },
        { parameter: 'pH Measurement (Direct electrode at 25°C)', acceptanceCriteria: formulation === 'Herbal syrup' ? '4.8 - 5.4' : formulation === 'Herbal gel' ? '6.0 - 6.8 (skin neutral)' : '5.5 - 6.5 (1% w/v dispersion)' },
        { parameter: formulation === 'Herbal tablet' ? 'Hardness & Friability' : 'Viscosity & Rheology', acceptanceCriteria: formulation === 'Herbal tablet' ? 'Hardness: 5.5 - 7.5 kg/cm²; Friability < 0.8% w/w' : 'Brookfield spindle 2/3: 150 - 350 cP with pseudoplastic shear-thinning' },
        { parameter: formulation === 'Herbal powder' ? 'Flow Properties (Carr’s Index & Hausner Ratio)' : 'Specific Gravity / Density', acceptanceCriteria: formulation === 'Herbal powder' ? 'Carr’s Index < 15%, Angle of repose < 30°' : '1.24 - 1.30 g/cm³' },
      ],
      chemical: [
        { parameter: `HPLC Assay of Active Marker (${targetMarkers[0].split(' ')[0]})`, acceptanceCriteria: 'Not less than 95.0% and not more than 105.0% of labeled target' },
        { parameter: 'Total Phenolic & Flavonoid Content', acceptanceCriteria: 'Standardized by Folin-Ciocalteu and AlCl3 colorimetric assays' },
        { parameter: 'Heavy Metal Contaminants (ICP-MS per WHO/AYUSH)', acceptanceCriteria: 'Pb < 10.0 ppm, As < 3.0 ppm, Cd < 0.3 ppm, Hg < 1.0 ppm' },
        { parameter: 'Aflatoxins (B1, B2, G1, G2) & Pesticide Residues', acceptanceCriteria: 'Aflatoxin B1 < 5 ppb; Total aflatoxins < 10 ppb (Complies with USP <561>)' },
      ],
      pharmacological: [
        { parameter: 'In Vitro Drug Release / Dissolution Profile', acceptanceCriteria: formulation === 'Herbal tablet' ? '> 80% release over 8 hours (Higuchi matrix diffusion)' : '> 85% release within 45 minutes in phosphate buffer pH 6.8' },
        { parameter: 'In Vitro DPPH & ABTS Antioxidant Capacity', acceptanceCriteria: 'IC50 < 45 µg/mL compared to Ascorbic acid standard' },
        { parameter: 'Biological Antimicrobial Zone of Inhibition', acceptanceCriteria: '> 16 mm against E. coli, S. aureus, and H. pylori' },
      ],
      stability: [
        { parameter: 'Accelerated Stability per ICH Q1A(R2)', acceptanceCriteria: '40°C ± 2°C / 75% RH ± 5% RH for 6 months: no physical instability, > 90% marker retention' },
        { parameter: 'Long-term Room Temperature Storage', acceptanceCriteria: '25°C ± 2°C / 60% RH ± 5% RH for 12, 24, and 36 months' },
        { parameter: 'Microbial Enumeration (USP <61>/<62>)', acceptanceCriteria: 'Total Aerobic Microbial Count < 10³ CFU/g; E. coli, Salmonella, P. aeruginosa absent' },
      ],
    };

    setProtocol({
      title,
      plantName: plant.name,
      botanicalName: plant.botanicalName,
      plantPart: part,
      dosageForm: formulation,
      targetActiveMarkers: targetMarkers,
      extractionProtocol: {
        method: 'Ultrasound-Assisted Hydroethanolic Extraction (UAE) with Sonication probe',
        solventRatio: 'Ethanol:Water (70:30 v/v), Solid-to-liquid ratio 1:10 (w/v)',
        parameters: 'Frequency 24 kHz, 40°C, 35 minutes, followed by vacuum rotavapor evaporation at 45°C.',
      },
      formulationMatrix: matrix,
      evaluationParameters,
      noveltyAndInnovation: novelty,
      regulatoryAndICHNotes: 'Formulated in compliance with AYUSH Good Manufacturing Practices (GMP) and Pharmacopoeial Laboratory for Indian Medicine (PLIM) monograph standards.',
    });
  };

  const handleGenerateAIProtocol = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/generate-research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          plantName: currentPlant.name,
          botanicalName: currentPlant.botanicalName,
          plantPart: selectedPart,
          dosageForm: selectedFormulation,
          focusArea,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data && data.title) {
          setProtocol(data);
          setIsLoading(false);
          return;
        }
      }
    } catch (err) {
      console.warn('AI research generation fallback:', err);
    }
    // Fallback to rich local generator
    generateLocalProtocol(currentPlant, selectedPart, selectedFormulation, focusArea);
    setIsLoading(false);
  };

  const handleCopyProtocol = () => {
    if (!protocol) return;
    const text = `HerbScan Formulation Research Protocol
Title: ${protocol.title}
Plant: ${protocol.plantName} (${protocol.botanicalName})
Part Used: ${protocol.plantPart} | Dosage Form: ${protocol.dosageForm}
Active Markers: ${protocol.targetActiveMarkers.join(', ')}

Extraction Protocol:
- Method: ${protocol.extractionProtocol.method}
- Solvent & Ratio: ${protocol.extractionProtocol.solventRatio}
- Parameters: ${protocol.extractionProtocol.parameters}

Formulation Matrix:
${protocol.formulationMatrix.map((m) => `- ${m.ingredient} (${m.role}): ${m.concentration}`).join('\n')}

Evaluation Parameters:
Physical: ${protocol.evaluationParameters.physical.map((p) => `${p.parameter}: ${p.acceptanceCriteria}`).join('; ')}
Chemical: ${protocol.evaluationParameters.chemical.map((p) => `${p.parameter}: ${p.acceptanceCriteria}`).join('; ')}
Stability: ${protocol.evaluationParameters.stability.map((p) => `${p.parameter}: ${p.acceptanceCriteria}`).join('; ')}

Novelty: ${protocol.noveltyAndInnovation}
`;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-4 space-y-6 pb-24 text-left">
      {/* Header */}
      <div className="space-y-1">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/30 text-xs font-semibold">
          <FlaskConical className="w-3.5 h-3.5" />
          <span>Research Idea Generator • Pharmacognosy Studio</span>
        </div>
        <h2 className="text-2xl font-black text-white tracking-tight">
          Formulation & Research Ideas 🧪
        </h2>
        <p className="text-xs text-emerald-300/80">
          Transform medicinal herbs (especially <strong>Bael / Aegle marmelos</strong>) into standardized dosage forms with complete evaluation parameters.
        </p>
      </div>

      {/* Bael Formulation Highlight Banner */}
      <div className="bg-gradient-to-r from-emerald-950 via-teal-950/70 to-slate-900 border border-amber-500/40 rounded-2xl p-4 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-sm font-bold text-amber-300">
              🌿 Bael (बेल) Formulation Research Hub
            </span>
            <span className="text-[10px] bg-amber-400 text-slate-950 font-black px-2 py-0.5 rounded-full uppercase">
              Featured Focus
            </span>
          </div>
          <p className="text-xs text-slate-300">
            Bael → Fruit → Powder → Possible formulation → Evaluation parameters (Herbal syrup, Herbal gel, Herbal powder, Herbal tablet).
          </p>
        </div>
        <button
          onClick={() => {
            setSelectedPlantId('bael');
            setSelectedPart('Fruit (unripe slices)');
            setSelectedFormulation('Herbal syrup');
          }}
          className="px-3.5 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shrink-0 shadow-md shadow-amber-500/20 active:scale-95 transition-all"
        >
          Load Bael Preset
        </button>
      </div>

      {/* Interactive Research Configurator */}
      <div className="bg-slate-900/80 border border-emerald-800/40 rounded-3xl p-5 space-y-4 shadow-xl">
        <h3 className="text-sm font-bold text-emerald-300 uppercase tracking-wider flex items-center gap-2">
          <Layers className="w-4 h-4 text-emerald-400" />
          <span>Formulation Design Parameters</span>
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {/* Plant Selector */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              1. Select Medicinal Plant
            </label>
            <div className="relative">
              <select
                id="select-research-plant"
                value={selectedPlantId}
                onChange={(e) => setSelectedPlantId(e.target.value)}
                className="w-full bg-slate-950 border border-emerald-800/50 rounded-xl px-3 py-2.5 text-xs text-slate-100 font-medium appearance-none focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {HERBAL_DATABASE.map((p) => (
                  <option key={p.id} value={p.id}>
                    {p.name} ({p.marathiName}) - {p.botanicalName}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Plant Part */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              2. Plant Part
            </label>
            <div className="relative">
              <select
                id="select-research-part"
                value={selectedPart}
                onChange={(e) => setSelectedPart(e.target.value)}
                className="w-full bg-slate-950 border border-emerald-800/50 rounded-xl px-3 py-2.5 text-xs text-slate-100 font-medium appearance-none focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {selectedPlantId === 'bael' ? (
                  BAEL_PARTS.map((part) => (
                    <option key={part} value={part}>
                      {part}
                    </option>
                  ))
                ) : (
                  currentPlant.partUsed
                    .split(',')
                    .map((p) => p.trim())
                    .map((part) => (
                      <option key={part} value={part}>
                        {part}
                      </option>
                    ))
                )}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>

          {/* Desired Formulation */}
          <div>
            <label className="block text-xs font-semibold text-slate-300 mb-1.5">
              3. Desired Formulation
            </label>
            <div className="relative">
              <select
                id="select-research-formulation"
                value={selectedFormulation}
                onChange={(e) => setSelectedFormulation(e.target.value)}
                className="w-full bg-slate-950 border border-emerald-800/50 rounded-xl px-3 py-2.5 text-xs text-amber-300 font-bold appearance-none focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              >
                {FORMULATION_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-slate-400 absolute right-3 top-3 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Action Button: AI Generate vs Standard */}
        <div className="pt-2 flex items-center justify-between gap-3">
          <div className="text-xs text-slate-400 flex items-center gap-1.5">
            <Atom className="w-4 h-4 text-emerald-400" />
            <span>Targeting {selectedFormulation} with ICH Q1A Guidelines</span>
          </div>
          <button
            id="btn-regenerate-ai"
            onClick={handleGenerateAIProtocol}
            disabled={isLoading}
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-500 hover:brightness-110 text-emerald-950 font-bold text-xs shadow-md shadow-emerald-900/30 active:scale-95 transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{isLoading ? 'Generating Protocol...' : 'Generate New Protocol'}</span>
          </button>
        </div>
      </div>

      {/* Generated Protocol Display */}
      {protocol && (
        <div
          id="research-dossier"
          className="bg-slate-900/90 border border-emerald-700/50 rounded-3xl p-5 sm:p-6 space-y-6 shadow-2xl animate-in fade-in duration-200"
        >
          {/* Header Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-emerald-900/40">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-mono font-bold uppercase bg-emerald-900/70 text-emerald-300 px-2.5 py-0.5 rounded-md border border-emerald-700/40">
                  {protocol.dosageForm}
                </span>
                <span className="text-xs text-slate-400">
                  {protocol.plantPart}
                </span>
              </div>
              <h3 className="text-lg font-bold text-white leading-snug">
                {protocol.title}
              </h3>
              <p className="text-xs text-emerald-300 italic font-serif">
                {protocol.botanicalName}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                id="btn-copy-protocol"
                onClick={handleCopyProtocol}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 active:scale-95 transition-all"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Protocol</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Bioactive Target Markers */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-wider block">
              🎯 Diagnostic Bioactive Markers
            </span>
            <div className="flex flex-wrap gap-2">
              {protocol.targetActiveMarkers.map((marker, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 rounded-lg bg-emerald-950/80 border border-emerald-700/50 text-emerald-200 text-xs font-mono"
                >
                  {marker}
                </span>
              ))}
            </div>
          </div>

          {/* Extraction & Standardization Protocol */}
          <div className="bg-emerald-950/40 rounded-2xl p-4 border border-emerald-800/40 space-y-2">
            <span className="text-xs font-bold text-emerald-300 uppercase tracking-wider block">
              ⚗️ Optimized Extraction & Processing Protocol
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs">
              <div className="bg-slate-950/60 p-2.5 rounded-xl border border-emerald-900/30">
                <span className="text-emerald-400 font-bold block mb-1">Method:</span>
                <span className="text-slate-200">{protocol.extractionProtocol.method}</span>
              </div>
              <div className="bg-slate-950/60 p-2.5 rounded-xl border border-emerald-900/30">
                <span className="text-emerald-400 font-bold block mb-1">Solvent Ratio:</span>
                <span className="text-slate-200">{protocol.extractionProtocol.solventRatio}</span>
              </div>
              <div className="bg-slate-950/60 p-2.5 rounded-xl border border-emerald-900/30">
                <span className="text-emerald-400 font-bold block mb-1">Parameters:</span>
                <span className="text-slate-200">{protocol.extractionProtocol.parameters}</span>
              </div>
            </div>
          </div>

          {/* Master Excipient Formulation Matrix */}
          <div className="space-y-2">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider block">
              🧪 Master Formulation Excipient Matrix
            </span>
            <div className="overflow-x-auto rounded-xl border border-emerald-800/40">
              <table className="w-full text-left text-xs">
                <thead className="bg-emerald-950/80 text-emerald-300 font-bold uppercase text-[10px] tracking-wider border-b border-emerald-800/50">
                  <tr>
                    <th className="p-2.5">Ingredient</th>
                    <th className="p-2.5">Functional Role</th>
                    <th className="p-2.5">Concentration</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-emerald-900/30 text-slate-200">
                  {protocol.formulationMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-emerald-950/30">
                      <td className="p-2.5 font-semibold text-white">{row.ingredient}</td>
                      <td className="p-2.5 text-emerald-300/90">{row.role}</td>
                      <td className="p-2.5 font-mono text-amber-300">{row.concentration}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Comprehensive Evaluation Parameters Grid */}
          <div className="space-y-3">
            <span className="text-xs font-bold text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              <span>Evaluation Parameters (Quality Assurance & Pharmacopoeia)</span>
            </span>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
              {/* Physical */}
              <div className="bg-slate-950/60 rounded-2xl p-3.5 border border-emerald-900/40 space-y-2">
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block border-b border-emerald-900/40 pb-1">
                  1. Physical & Pharmacotechnical
                </span>
                <ul className="space-y-1.5">
                  {protocol.evaluationParameters.physical.map((item, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5">
                      <span className="font-semibold text-slate-200">{item.parameter}</span>
                      <span className="text-[11px] text-slate-400">{item.acceptanceCriteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Chemical */}
              <div className="bg-slate-950/60 rounded-2xl p-3.5 border border-emerald-900/40 space-y-2">
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block border-b border-emerald-900/40 pb-1">
                  2. Chemical & Phytochemical Assay
                </span>
                <ul className="space-y-1.5">
                  {protocol.evaluationParameters.chemical.map((item, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5">
                      <span className="font-semibold text-slate-200">{item.parameter}</span>
                      <span className="text-[11px] text-slate-400">{item.acceptanceCriteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pharmacological */}
              <div className="bg-slate-950/60 rounded-2xl p-3.5 border border-emerald-900/40 space-y-2">
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block border-b border-emerald-900/40 pb-1">
                  3. In Vitro & Pharmacological
                </span>
                <ul className="space-y-1.5">
                  {protocol.evaluationParameters.pharmacological.map((item, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5">
                      <span className="font-semibold text-slate-200">{item.parameter}</span>
                      <span className="text-[11px] text-slate-400">{item.acceptanceCriteria}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Stability */}
              <div className="bg-slate-950/60 rounded-2xl p-3.5 border border-emerald-900/40 space-y-2">
                <span className="text-[11px] font-bold text-emerald-300 uppercase tracking-wider block border-b border-emerald-900/40 pb-1">
                  4. Stability Studies (ICH Q1A)
                </span>
                <ul className="space-y-1.5">
                  {protocol.evaluationParameters.stability.map((item, idx) => (
                    <li key={idx} className="flex flex-col gap-0.5">
                      <span className="font-semibold text-slate-200">{item.parameter}</span>
                      <span className="text-[11px] text-slate-400">{item.acceptanceCriteria}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Novelty & Regulatory Summary */}
          <div className="p-4 rounded-2xl bg-amber-950/20 border border-amber-800/40 text-xs space-y-2">
            <span className="font-bold text-amber-300 block">
              💡 Scientific Novelty & Translation
            </span>
            <p className="text-slate-200 leading-relaxed">
              {protocol.noveltyAndInnovation}
            </p>
            <p className="text-[11px] text-amber-200/70 pt-1 border-t border-amber-900/30">
              {protocol.regulatoryAndICHNotes}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
