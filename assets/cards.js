export const DEFAULT_CARD_ID = "hechengqi";

export const markerResourceMap = {
  hechengqi: {
    markerUrl: "./assets/markers/pattern-synth.patt?v=20260528-pattern-1111-v3",
    markerImageUrl: "./assets/markers/synth-marker.png",
    instrumentType: "synthesizer",
    modelUrl: "runtime:synth-workstation",
    initAudioEngineName: "initSynthesizer",
    playHandlerName: "playSynthesizerNote",
    cardId: "hechengqi"
  }
};

export const instrumentTextMap = {
  "合成器": "synthesizer",
  synthesizer: "synthesizer",
  synth: "synthesizer"
};

export const CARD_TARGETS = {
  hechengqi: {
    id: "hechengqi",
    instrumentId: "synthesizer",
    title: "合成器",
    markerText: ["合成器", "hechengqi"],
    recognizedText: "合成器",
    resolvedInstrument: instrumentTextMap["合成器"],
    encodedPayload: "instrument=synthesizer;card=hechengqi;markerText=合成器",
    image: markerResourceMap.hechengqi.markerImageUrl,
    markerResource: markerResourceMap.hechengqi,
    cardAspect: 1,
    qrCenterYOffset: 0,
    cornerMarkerRatio: {
      x: 0.84,
      y: 0.855
    },
    textSignatureMinConfidence: 0.18,
    textSignatureRegions: [
      { x: 0.25, y: 0.25, w: 0.50, h: 0.50, minDarkRatio: 0.08 },
      { x: 0.30, y: 0.30, w: 0.40, h: 0.40, minDarkRatio: 0.12 }
    ],
    textPanel: {
      x: 0.25,
      y: 0.25,
      w: 0.50,
      h: 0.50,
      minWhiteRatio: 0.24,
      minDarkSurroundRatio: 0.20,
      minTextDarkRatio: 0.045
    },
    patternPanel: {
      x: 0.25,
      y: 0.25,
      w: 0.50,
      h: 0.50
    },
    patternPanelCandidates: [
      { x: 0.24, y: 0.24, w: 0.52, h: 0.52 },
      { x: 0.25, y: 0.25, w: 0.50, h: 0.50 },
      { x: 0.26, y: 0.26, w: 0.48, h: 0.48 },
      { x: 0.28, y: 0.28, w: 0.44, h: 0.44 }
    ],
    hiroMarker: {
      enabled: true,
      anchorRegion: "textPanel",
      requireTextPanelOnly: true,
      decodedInstrument: "synthesizer"
    },
    recognition: {
      minPatternConfidence: 0.26,
      minPatternCandidateConfidence: 0.20,
      minTextConfidence: 0.08,
      minDataConfidence: 0.20,
      minCombinedConfidence: 0.20,
      minCornerConfidence: 0.12,
      strictDataSignature: false
    },
    anchor: {
      anchorMode: "card-center",
      liftPortrait: 1.10,
      liftLandscape: 0.74,
      modelScale: 1.0,
      yOffset: 0.08,
      zOffset: 0.10
    }
  },
  "card-synth-v1": {
    id: "card-synth-v1",
    instrumentId: "synthesizer",
    title: "合成器",
    markerText: ["合成器"],
    recognizedText: "合成器",
    resolvedInstrument: instrumentTextMap["合成器"],
    encodedPayload: "instrument=synthesizer;card=card-synth-v1;markerText=合成器",
    image: markerResourceMap.hechengqi.markerImageUrl,
    cardAspect: 1,
    qrCenterYOffset: 0,
    cornerMarkerRatio: {
      x: 0.84,
      y: 0.855
    },
    textSignatureMinConfidence: 0.36,
    textSignatureRegions: [
      { x: 0.278, y: 0.350, w: 0.444, h: 0.242, minDarkRatio: 0.080 },
      { x: 0.318, y: 0.410, w: 0.364, h: 0.145, minDarkRatio: 0.130 }
    ],
    textPanel: {
      x: 0.25,
      y: 0.25,
      w: 0.50,
      h: 0.50,
      minWhiteRatio: 0.28,
      minDarkSurroundRatio: 0.20,
      minTextDarkRatio: 0.045
    },
    patternPanel: {
      x: 0.25,
      y: 0.25,
      w: 0.50,
      h: 0.50
    },
    patternPanelCandidates: [
      { x: 0.24, y: 0.24, w: 0.52, h: 0.52 },
      { x: 0.25, y: 0.25, w: 0.50, h: 0.50 },
      { x: 0.26, y: 0.26, w: 0.48, h: 0.48 },
      { x: 0.28, y: 0.28, w: 0.44, h: 0.44 }
    ],
    hiroMarker: {
      enabled: true,
      anchorRegion: "textPanel",
      decodedInstrument: "synth"
    },
    recognition: {
      minPatternConfidence: 0.26,
      minPatternCandidateConfidence: 0.20,
      minTextConfidence: 0.10,
      minDataConfidence: 0.20,
      minCombinedConfidence: 0.24,
      minCornerConfidence: 0.14,
      strictDataSignature: false
    },
    anchor: {
      anchorMode: "card-center",
      liftPortrait: 1.10,
      liftLandscape: 0.74,
      modelScale: 1.0,
      yOffset: 0.08,
      zOffset: 0.10
    }
  }
};

export function getCardTarget(id = DEFAULT_CARD_ID) {
  return CARD_TARGETS[id] || CARD_TARGETS[DEFAULT_CARD_ID];
}
