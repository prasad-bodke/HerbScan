var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// server.ts
var import_express = __toESM(require("express"), 1);
var import_path = __toESM(require("path"), 1);
var import_vite = require("vite");
var import_genai = require("@google/genai");
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var app = (0, import_express.default)();
var PORT = 3e3;
app.use(import_express.default.json({ limit: "25mb" }));
var aiClient = null;
function getGeminiClient() {
  if (!process.env.GEMINI_API_KEY) {
    return null;
  }
  if (!aiClient) {
    aiClient = new import_genai.GoogleGenAI({
      apiKey: process.env.GEMINI_API_KEY,
      httpOptions: {
        headers: {
          "User-Agent": "aistudio-build"
        }
      }
    });
  }
  return aiClient;
}
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    hasApiKey: !!process.env.GEMINI_API_KEY,
    timestamp: (/* @__PURE__ */ new Date()).toISOString()
  });
});
app.post("/api/scan-plant", async (req, res) => {
  try {
    const { imageBase64, mimeType = "image/jpeg", plantHint } = req.body;
    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        error: "GEMINI_API_KEY is not configured. Using offline fallback database.",
        offlineMode: true
      });
    }
    const prompt = `You are HerbScan's expert Ayurvedic Botanist and Pharmacognosy specialist.
Analyze this medicinal plant image${plantHint ? ` (User indicated or guessed: "${plantHint}")` : ""}.
Identify the medicinal plant with high accuracy.
Output STRICTLY a valid JSON object with the following schema:
{
  "id": "slug-name-lowercase",
  "name": "English common name (e.g. Bael)",
  "marathiName": "\u092E\u0930\u093E\u0920\u0940 \u0928\u093E\u0935 (\u0909\u0926\u093E. \u092C\u0947\u0932)",
  "botanicalName": "Botanical Latin name (e.g. Aegle marmelos)",
  "family": "Botanical family (e.g. Rutaceae)",
  "partUsed": "Part of plant commonly used (e.g. Fruit, Leaves, Root Bark)",
  "confidence": 94,
  "traditionalUses": [
    "Traditional/educational use 1 (e.g. Gastrointestinal disorders, chronic diarrhea, IBS)",
    "Traditional use 2 (e.g. Antimicrobial, cooling refrigerant beverage in summer)",
    "Traditional use 3 (e.g. Ulcer healing and digestive stimulant in Ayurveda)"
  ],
  "safetyPrecautions": [
    "Basic safety precaution 1 (e.g. Excessive unripe fruit consumption may cause constipation)",
    "Safety precaution 2 (e.g. Caution in pregnancy for high-dose bark extracts)"
  ],
  "phytochemicals": [
    "Marmelosin (coumarin)",
    "Aegeline (alkaloid)",
    "Tannins",
    "Pectin",
    "Essential oils (limonene)"
  ],
  "dosageForms": [
    "Churna (Herbal powder) - 3 to 6 g",
    "Avaleha / Jam - 5 to 10 g",
    "Swarasa (Fresh juice) - 10 to 20 mL",
    "Herbal syrup - 10 to 15 mL"
  ],
  "ayurvedicProperties": {
    "rasa": "Kashaya (Astringent), Tikta (Bitter)",
    "guna": "Laghu (Light), Ruksha (Dry)",
    "virya": "Ushna (Hot potency) or Sheeta (Fruit pulp varies with ripeness)",
    "vipaka": "Katu (Pungent)",
    "prabhava": "Grahini (Deepana, digestant and bowel binder)",
    "doshaKarma": "Balances Vata and Kapha, pacifies Pitta when ripe"
  },
  "researchPossibilities": [
    {
      "formulationType": "Herbal syrup",
      "plantPart": "Fruit pulp",
      "rationale": "Standardized Marmelosin syrup formulation for irritable bowel syndrome and gastric ulcers.",
      "evaluationParameters": "pH (4.5-5.5), Viscosity (Brookfield spindle 2), In vitro antimicrobial zone of inhibition against E. coli, Accelerated stability at 40\xB0C/75% RH per ICH Q1A."
    },
    {
      "formulationType": "Herbal gel",
      "plantPart": "Leaves / Fruit extract",
      "rationale": "Carbopol 940 based topical anti-inflammatory and wound healing gel.",
      "evaluationParameters": "Spreadability, Extrudability, Skin irritation patch testing (OECD 404), In vitro Franz diffusion release."
    },
    {
      "formulationType": "Herbal powder",
      "plantPart": "Unripe fruit slices",
      "rationale": "Microfine enteric-coated or direct dispersible sachet powder for antidiarrheal efficacy.",
      "evaluationParameters": "Bulk/Tapped density, Carr's index, Angle of repose, Moisture content (LOD < 5%), TLC fingerprinting."
    },
    {
      "formulationType": "Herbal tablet",
      "plantPart": "Standardized dry extract",
      "rationale": "Compressed matrix tablet for sustained gastrointestinal release targeting colitis.",
      "evaluationParameters": "Hardness (Monsanto > 5 kg/cm2), Friability (< 1%), In vitro dissolution in 0.1N HCl & pH 6.8 buffer, HPLC assay."
    }
  ],
  "quiz": {
    "question": "Which active coumarin marker is primarily responsible for Bael's gastro-protective therapeutic activity?",
    "options": ["Marmelosin", "Curcumin", "Withaferin A", "Azadirachtin"],
    "correctAnswerIndex": 0,
    "explanation": "Marmelosin is the key therapeutic furanocoumarin isolated from Aegle marmelos fruit pulp."
  }
}

Ensure the Marathi script is authentic and accurate. Return ONLY JSON without markdown fences.`;
    let contents;
    if (imageBase64) {
      const cleanBase64 = imageBase64.replace(/^data:image\/\w+;base64,/, "");
      contents = [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType,
                data: cleanBase64
              }
            },
            {
              text: prompt
            }
          ]
        }
      ];
    } else {
      contents = prompt;
    }
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents,
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (error) {
    console.error("Gemini scan error:", error);
    return res.status(500).json({
      error: error?.message || "Failed to scan plant with AI",
      offlineMode: true
    });
  }
});
app.post("/api/generate-research", async (req, res) => {
  try {
    const { plantName, botanicalName, plantPart, dosageForm, focusArea } = req.body;
    const ai = getGeminiClient();
    if (!ai) {
      return res.status(503).json({
        error: "GEMINI_API_KEY is not configured.",
        offlineMode: true
      });
    }
    const prompt = `You are a Senior Pharmaceutical Scientist & Pharmacognosy Formulation Researcher specializing in herbal drug delivery systems.
Design an innovative, publication-ready research protocol and formulation development framework for:
- Plant: ${plantName || "Bael"} (${botanicalName || "Aegle marmelos"})
- Part Used: ${plantPart || "Fruit"}
- Desired Formulation: ${dosageForm || "Herbal syrup"}
${focusArea ? `- Target Focus/Indication: ${focusArea}` : ""}

Provide a comprehensive, scientifically rigorous research protocol formatted as a JSON object with this schema:
{
  "title": "Comprehensive Formulation & In Vitro/In Vivo Evaluation of ...",
  "plantName": "${plantName || "Bael"}",
  "botanicalName": "${botanicalName || "Aegle marmelos"}",
  "plantPart": "${plantPart || "Fruit"}",
  "dosageForm": "${dosageForm || "Herbal syrup"}",
  "targetActiveMarkers": ["Key chemical marker 1", "Key marker 2"],
  "extractionProtocol": {
    "method": "Optimized Extraction method (e.g. Ultrasound-Assisted Hydroalcoholic Extraction)",
    "solventRatio": "Solvent composition and solid-to-liquid ratio",
    "parameters": "Temperature, time, yield percentage range"
  },
  "formulationMatrix": [
    {"ingredient": "Plant Active Extract", "role": "Active Herbal Ingredient (API)", "concentration": "5-10% w/v"},
    {"ingredient": "Excipient 1", "role": "Vehicle/Sweetener/Polymer", "concentration": "..."},
    {"ingredient": "Excipient 2", "role": "Preservative/Stabilizer", "concentration": "..."},
    {"ingredient": "Excipient 3", "role": "Viscosity Modifier/Surfactant", "concentration": "..."}
  ],
  "evaluationParameters": {
    "physical": [
      {"parameter": "Organoleptic", "acceptanceCriteria": "Clear, uniform color, characteristic pleasant herbal aroma"},
      {"parameter": "pH Measurement", "acceptanceCriteria": "Specific safe range"},
      {"parameter": "Viscosity / Rheology", "acceptanceCriteria": "Specific measurement at 25\xB0C"}
    ],
    "chemical": [
      {"parameter": "Assay of Marker Phytochemical (HPLC/HPTLC)", "acceptanceCriteria": "Not less than 95-105% of labeled claim"},
      {"parameter": "Heavy Metal Limits per WHO/AYUSH", "acceptanceCriteria": "Pb < 10 ppm, As < 3 ppm, Cd < 0.3 ppm, Hg < 1 ppm"}
    ],
    "pharmacological": [
      {"parameter": "In Vitro Dissolution / Diffusion or Bioassay", "acceptanceCriteria": "> 80% release at 60 mins"},
      {"parameter": "Antioxidant / Antimicrobial / Therapeutic assay", "acceptanceCriteria": "IC50 comparison with standard drug"}
    ],
    "stability": [
      {"parameter": "Accelerated Stability (ICH Q1A)", "acceptanceCriteria": "40\xB0C \xB1 2\xB0C / 75% RH \xB1 5% RH for 6 months"},
      {"parameter": "Real-time Storage", "acceptanceCriteria": "25\xB0C \xB1 2\xB0C / 60% RH for 12-24 months"}
    ]
  },
  "noveltyAndInnovation": "Why this formulation is novel (e.g. overcomes poor solubility of Marmelosin, replaces synthetic binders with natural mucilage, provides sustained gastrointestinal release).",
  "regulatoryAndICHNotes": "Key AYUSH / Pharmacopoeial monograph compliance guidelines for commercial manufacturing."
}
Return ONLY valid JSON.`;
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (error) {
    console.error("Research idea error:", error);
    return res.status(500).json({
      error: error?.message || "Failed to generate research idea",
      offlineMode: true
    });
  }
});
app.get("/api/daily-tip", async (_req, res) => {
  try {
    const ai = getGeminiClient();
    if (!ai) {
      return res.json({
        plantName: "Bael (\u092C\u0947\u0932)",
        botanicalName: "Aegle marmelos",
        tip: "A small cup of warm Bael fruit sherbet before midday balances digestive fire (Agni) and soothes intestinal inflammation according to Charaka Samhita.",
        practicalUse: "Digestive cooling and bowel regulation in hot weather.",
        doshaBenefit: "Pacifies Pitta & Kapha"
      });
    }
    const prompt = `Give a daily authentic Ayurvedic herbal tip featuring an Indian medicinal plant (e.g., Bael, Tulsi, Ashwagandha, Neem, Amla, Giloy, etc.).
Return JSON:
{
  "plantName": "English (Marathi)",
  "botanicalName": "Latin name",
  "tip": "Practical Ayurvedic insight (1-2 sentences)",
  "practicalUse": "How to consume or prepare safely",
  "doshaBenefit": "Dosha impact"
}`;
    const response = await ai.models.generateContent({
      model: "gemini-3.8-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json"
      }
    });
    const text = response.text || "{}";
    const parsed = JSON.parse(text);
    return res.json(parsed);
  } catch (error) {
    return res.json({
      plantName: "Bael (\u092C\u0947\u0932)",
      botanicalName: "Aegle marmelos",
      tip: "Bael fruit pulp boiled with cumin seeds acts as a potent home remedy for irritable bowels and indigestion.",
      practicalUse: "Bael fruit decoction with honey or unrefined sugar.",
      doshaBenefit: "Deepana (appetizer) & Grahini (digestive tonic)"
    });
  }
});
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await (0, import_vite.createServer)({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = import_path.default.join(process.cwd(), "dist");
    app.use(import_express.default.static(distPath));
    app.get("*", (_req, res) => {
      res.sendFile(import_path.default.join(distPath, "index.html"));
    });
  }
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`HerbScan server running at http://0.0.0.0:${PORT}`);
  });
}
startServer();
//# sourceMappingURL=server.cjs.map
