const canvas = document.getElementById("gameCanvas");
const ctx = canvas?.getContext ? canvas.getContext("2d") : null;
const ui = {
  bootScreen: document.getElementById("bootScreen"),
  bootTitle: document.getElementById("bootTitle"),
  bootSubtitle: document.getElementById("bootSubtitle"),
  bootTagline: document.getElementById("bootTagline"),
  bootProgress: document.getElementById("bootProgress"),
  bootStatus: document.getElementById("bootStatus"),
  type: document.getElementById("type"),
  prediction: document.getElementById("prediction"),
  action: document.getElementById("action"),
  difficulty: document.getElementById("difficulty"),
  phase: document.getElementById("phase"),
  memory: document.getElementById("memoryCount"),
  objective: document.getElementById("objective"),
  telemetryDetails: document.getElementById("telemetryDetails"),
  score: document.getElementById("score"),
  best: document.getElementById("bestScore"),
  time: document.getElementById("timeSurvived"),
  healthValue: document.getElementById("healthValue"),
  dashValue: document.getElementById("dashValue"),
  healthFill: document.getElementById("healthFill"),
  dashFill: document.getElementById("dashFill"),
  message: document.getElementById("messageBox"),
  overlay: document.getElementById("overlay"),
  overlayCard: document.getElementById("overlayCard"),
  overlayEyebrow: document.getElementById("overlayEyebrow"),
  overlayTitle: document.getElementById("overlayTitle"),
  overlayText: document.getElementById("overlayText"),
  homePanel: document.getElementById("homePanel"),
  tutorialPanel: document.getElementById("tutorialPanel"),
  gamesHubPanel: document.getElementById("gamesHubPanel"),
  miniGamePanel: document.getElementById("miniGamePanel"),
  miniGameEyebrow: document.getElementById("miniGameEyebrow"),
  miniGameTitle: document.getElementById("miniGameTitle"),
  miniGameDescription: document.getElementById("miniGameDescription"),
  miniGameBack: document.getElementById("miniGameBackButton"),
  neuroDriveGame: document.getElementById("neuroDriveGame"),
  neuroDriveScore: document.getElementById("neuroDriveScore"),
  neuroDriveBest: document.getElementById("neuroDriveBest"),
  neuroDriveLives: document.getElementById("neuroDriveLives"),
  neuroDriveSpeed: document.getElementById("neuroDriveSpeed"),
  neuroDriveFocus: document.getElementById("neuroDriveFocus"),
  neuroDriveBoostState: document.getElementById("neuroDriveBoostState"),
  neuroDriveStatus: document.getElementById("neuroDriveStatus"),
  neuroDriveArena: document.getElementById("neuroDriveArena"),
  neuroDrivePlayer: document.getElementById("neuroDrivePlayer"),
  neuroDriveTraffic: document.getElementById("neuroDriveTraffic"),
  neuroDriveStart: document.getElementById("neuroDriveStartButton"),
  neuroDriveBoost: document.getElementById("neuroDriveBoostButton"),
  neuroDriveReset: document.getElementById("neuroDriveResetButton"),
  neuroDriveLeft: document.getElementById("neuroDriveLeftButton"),
  neuroDriveRight: document.getElementById("neuroDriveRightButton"),
  chaosRunnerGame: document.getElementById("chaosRunnerGame"),
  chaosRunnerScore: document.getElementById("chaosRunnerScore"),
  chaosRunnerBest: document.getElementById("chaosRunnerBest"),
  chaosRunnerLives: document.getElementById("chaosRunnerLives"),
  chaosRunnerAI: document.getElementById("chaosRunnerAI"),
  chaosRunnerStatus: document.getElementById("chaosRunnerStatus"),
  chaosRunnerArena: document.getElementById("chaosRunnerArena"),
  chaosRunnerStart: document.getElementById("chaosRunnerStartButton"),
  chaosRunnerJumpTouch: document.getElementById("chaosRunnerJumpTouchButton"),
  chaosRunnerDuckTouch: document.getElementById("chaosRunnerDuckTouchButton"),
  chaosRunnerReset: document.getElementById("chaosRunnerResetButton"),
  runnerCharacter: document.getElementById("runnerCharacter"),
  runnerObstacle: document.getElementById("runnerObstacle"),
  termsPanel: document.getElementById("termsPanel"),
  start: document.getElementById("startButton"),
  tutorial: document.getElementById("tutorialButton"),
  otherGames: document.getElementById("otherGamesButton"),
  viewResults: document.getElementById("viewResultsButton"),
  resetMemory: document.getElementById("resetMemoryButton"),
  pause: document.getElementById("pauseButton"),
  menuButton: document.getElementById("menuButton"),
  menuPanel: document.getElementById("menuPanel"),
  helpButton: document.getElementById("helpButton"),
  quitButton: document.getElementById("quitButton"),
  themeToggle: document.getElementById("themeToggle"),
  themeToggleHome: document.getElementById("themeToggleHome"),
  reducedMotion: document.getElementById("reducedMotionToggle"),
  highContrast: document.getElementById("highContrastToggle"),
  difficultySelect: document.getElementById("difficultySelect"),
  arenaSelect: document.getElementById("arenaSelect"),
  volumeSlider: document.getElementById("volumeSlider"),
  volumeValue: document.getElementById("volumeValue"),
  textScaleSlider: document.getElementById("textScaleSlider"),
  textScaleValue: document.getElementById("textScaleValue"),
  levelGrid: document.getElementById("levelGrid"),
  levelBadge: document.getElementById("levelBadge"),
  levelLabel: document.getElementById("levelLabel"),
  levelName: document.getElementById("levelName"),
  levelGoal: document.getElementById("levelGoal"),
  levelState: document.getElementById("levelState"),
  levelRank: document.getElementById("levelRank"),
  levelStarIcons: document.getElementById("levelStarIcons"),
  unlockNotice: document.getElementById("unlockNotice"),
  levelPrev: document.getElementById("levelPrev"),
  levelStars: document.getElementById("levelStars"),
  levelNext: document.getElementById("levelNext"),
  termsCheckbox: document.getElementById("termsCheckbox"),
  termsContinue: document.getElementById("termsContinue"),
  termsError: document.getElementById("termsError"),
  restart: document.getElementById("restartRunButton"),
  quitOverlay: document.getElementById("quitOverlayButton"),
  overlayMeta: document.getElementById("overlayMeta"),
  canvasFallback: document.getElementById("canvasFallback"),
  fallbackHome: document.getElementById("fallbackHomeButton"),
  resultsPanel: document.getElementById("resultsPanel"),
  resultsScore: document.getElementById("resultsScore"),
  resultsTime: document.getElementById("resultsTime"),
  resultsPhase: document.getElementById("resultsPhase"),
  resultsType: document.getElementById("resultsType"),
  resultsShards: document.getElementById("resultsShards"),
  resultsCounter: document.getElementById("resultsCounter"),
  resultsBest: document.getElementById("resultsBest"),
  resultsAdapt: document.getElementById("resultsAdapt"),
  resultsCause: document.getElementById("resultsCause"),
  resultsSummary: document.getElementById("resultsSummary"),
  resultsTip: document.getElementById("resultsTip"),
  metricAggression: document.getElementById("metricAggression"),
  metricMobility: document.getElementById("metricMobility"),
  metricPredictability: document.getElementById("metricPredictability"),
  metricAdaptability: document.getElementById("metricAdaptability")
};

const STORAGE = {
  memory: "cerebraMemoryV3",
  best: "cerebraBestScoreV3",
  legacy: "gameMemory",
  settings: "cerebraSettingsV2",
  progress: "cerebraProgressV1",
  terms: "cerebraTermsAcceptedV1",
  miniGames: "cerebraMiniGamesV1"
};
const DEFAULT_VOLUME = 85;
const LEVEL_GRID_WINDOW = 8;
const LEVEL_NAMES = [
  "Observation Chamber",
  "Route Decoder",
  "Pressure Lattice",
  "Habit Furnace",
  "Signal Drift",
  "Counter Spiral",
  "Pattern Break",
  "False Safe Lane",
  "Heuristic Bloom",
  "Perimeter Lesson",
  "Pulse Archive",
  "Threat Chorus",
  "Prediction Well",
  "Echo Collapse",
  "Director's Mirror",
  "Shard Pursuit",
  "Core Vector",
  "Mnemonic Fault",
  "Ruin Forecast",
  "Breach Corridor",
  "Ascension Gate",
  "Upload Crucible",
  "Collapse Engine",
  "Memory Singularity",
  "Mnemosyne Prime"
];
const ENDLESS_LEVEL_PREFIXES = ["Neon", "Turbo", "Quantum", "Solar", "Echo", "Velocity", "Crystal", "Nova"];
const ENDLESS_LEVEL_SUFFIXES = ["Runway", "Vault", "Circuit", "Drift", "Mirage", "Gauntlet", "Rush", "Spire"];
const RANK_LABELS = ["Unranked", "Bronze", "Silver", "Gold"];
const PHASES = [
  { name: "Observe", start: 0, diff: 0.95, action: "Mapping escape lanes" },
  { name: "Probe", start: 16, diff: 1.15, action: "Testing your preferred path" },
  { name: "Punish", start: 36, diff: 1.38, action: "Countering your favorite habit" },
  { name: "Overclock", start: 60, diff: 1.7, action: "Escalating all prediction engines" },
  { name: "Ascension", start: 84, diff: 2.05, action: "Core breach protocol engaged", final: true }
];
const DASH_CD = 1.35;
const FINAL_UPLOAD_TIME = 2.7;

const state = {
  running: false,
  over: false,
  paused: false,
  won: false,
  time: 0,
  score: 0,
  best: Number(localStorage.getItem(STORAGE.best) || 0) || 0,
  shards: 0,
  coins: 0,
  diamonds: 0,
  phaseIndex: 0,
  phase: "Observe",
  difficulty: 1,
  action: "Awaiting subject",
  objective: "Objective: Survive until CEREBRA exposes its core.",
  trapCd: 2.2,
  pulseCd: 6.2,
  shardCd: 1.5,
  specialCd: 5.6,
  moveSampleCd: 0,
  actionCd: 0,
  hitToastCd: 0,
  rewardCd: 10,
  flash: 0,
  shake: 0
};

const player = {
  x: 0, y: 0, size: 28, baseSpeed: 260, health: 100,
  dashCd: 0, dashTime: 0, dashDir: { x: 0, y: 0 },
  dir: { x: 1, y: 0 }, invuln: 0, trail: [], dashes: 0
};

const enemy = { x: 0, y: 0, size: 42, speed: 90 };
const finalCore = { active: false, x: 0, y: 0, radius: 56, charge: 0, target: 3, vulnerable: false, upload: 0, pulse: 0 };
let keys = Object.create(null);
let lastMoves = [];
let predictedMove = "none";
let playerType = "Adaptive";
let traps = [];
let pulses = [];
let beams = [];
let particles = [];
let shards = [];
let rewards = [];
let stars = [];
let msgTimer = null;
let unlockNoticeTimer = null;
let lastFrame = performance.now();
let memory = loadMemory();
let echoes = [];
let settings = loadSettings();
let progress = loadProgress();
let miniGameProgress = loadMiniGameProgress();
let overlayMode = "home";
let lastDamageSource = "CEREBRA pressure";
let audioContext = null;
const soundSystem = {
  started: false,
  checking: false,
  assetsReady: false,
  silenceUntil: 0,
  nextWhisperAt: 0,
  nextSilenceAt: 10,
  warningCooldown: 0,
  pendingEvent: "",
  sources: {
    ambient: { url: "sounds/ambient.mp3", audio: null, available: false, ready: false, target: 0, current: 0, loop: true },
    heartbeat: { url: "sounds/heartbeat.mp3", audio: null, available: false, ready: false, target: 0, current: 0, loop: true },
    thunder: { url: "sounds/thunder.mp3", audio: null, available: false, ready: false, target: 0, current: 0, loop: false },
    whisper: { url: "sounds/whisper.mp3", audio: null, available: false, ready: false, target: 0, current: 0, loop: false }
  }
};
let runStats = createRunStats();
let termsAccepted = localStorage.getItem(STORAGE.terms) === "true";
let pendingResultsVictory = false;
let menuOpen = false;
let storm = { flash: 0, cooldown: 6.5, rumble: 0 };
let psychology = { panic: 0, hesitation: 0, repetition: 0, stillness: 0, tauntCd: 2.5, jumpCd: 5.5 };
let dungeonWalls = [];
const miniGames = {
  active: null,
  neuroDrive: {
    running: false,
    lane: 1,
    score: 0,
    lives: 5,
    speed: 1,
    boost: 0,
    boostCooldown: 0,
    traffic: [],
    spawnCd: 0.8,
    lastFrame: 0,
    raf: 0,
    dodgePattern: [],
    moveTimes: [],
    aiRead: "Scanning lanes",
    nextId: 0,
    turn: "",
    turnTimer: 0,
    impact: 0
  },
  chaosRunner: {
    running: false,
    score: 0,
    lives: 5,
    streak: 0,
    obstacle: null,
    nextSpawn: 1.2,
    predictedCadence: 1.45,
    actionCadence: [],
    reactionTimes: [],
    lastActionAt: 0,
    lastFrame: 0,
    state: "run",
    stateTimer: 0,
    raf: 0
  }
};

function createRunStats() {
  return {
    pulsesTaken: 0,
    trapsTaken: 0,
    beamHits: 0,
    echoesTouched: 0,
    damageTaken: 0,
    coreShards: 0,
    heuristicsShown: 0
  };
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}
const rand = (min, max) => Math.random() * (max - min) + min;
const dist = (ax, ay, bx, by) => Math.hypot(ax - bx, ay - by);
const fmtTime = secs => `${String(Math.floor(secs / 60)).padStart(2, "0")}:${String(Math.floor(secs % 60)).padStart(2, "0")}`;
const overlap = (a, b) => a.x < b.x + b.size && a.x + a.size > b.x && a.y < b.y + b.size && a.y + a.size > b.y;

function loadSettings() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE.settings) || "{}");
    return {
      reducedMotion: Boolean(parsed.reducedMotion),
      highContrast: Boolean(parsed.highContrast),
      difficulty: parsed.difficulty || "operative",
      arena: parsed.arena || "mnemosyne",
      volume: Number.isFinite(Number(parsed.volume)) ? Number(parsed.volume) : DEFAULT_VOLUME,
      textScale: Number.isFinite(Number(parsed.textScale)) ? Number(parsed.textScale) : 100,
      theme: parsed.theme === "light" ? "light" : "dark"
    };
  } catch {
    return { reducedMotion: false, highContrast: false, difficulty: "operative", arena: "mnemosyne", volume: DEFAULT_VOLUME, textScale: 100, theme: "dark" };
  }
}

function normalizeStarProgress(rawStars) {
  const normalized = {};
  if (Array.isArray(rawStars)) {
    rawStars.forEach((value, index) => {
      const starsEarned = clamp(Number(value) || 0, 0, 3);
      if (starsEarned) normalized[index + 1] = starsEarned;
    });
    return normalized;
  }
  if (rawStars && typeof rawStars === "object") {
    Object.entries(rawStars).forEach(([levelKey, value]) => {
      const level = Math.max(1, Math.floor(Number(levelKey) || 1));
      const starsEarned = clamp(Number(value) || 0, 0, 3);
      if (starsEarned) normalized[level] = starsEarned;
    });
  }
  return normalized;
}

function starsForLevel(level) {
  return clamp(Number(progress?.stars?.[level]) || 0, 0, 3);
}

function loadProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE.progress) || "{}");
    const unlocked = Math.max(1, Math.floor(Number(parsed.unlockedLevel) || 1));
    const selected = clamp(Math.floor(Number(parsed.selectedLevel) || unlocked), 1, unlocked);
    return {
      unlockedLevel: unlocked,
      selectedLevel: unlocked,
      stars: normalizeStarProgress(parsed.stars)
    };
  } catch {
    return { unlockedLevel: 1, selectedLevel: 1, stars: {} };
  }
}

function saveProgress() {
  localStorage.setItem(STORAGE.progress, JSON.stringify(progress));
}

function loadMiniGameProgress() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE.miniGames) || "{}");
    return {
      neuroDriveBest: clamp(Number(parsed.neuroDriveBest ?? parsed.memoryPulseBest) || 0, 0, 999999),
      chaosRunnerBest: clamp(Number(parsed.chaosRunnerBest) || 0, 0, 999999)
    };
  } catch {
    return { neuroDriveBest: 0, chaosRunnerBest: 0 };
  }
}

function saveMiniGameProgress() {
  localStorage.setItem(STORAGE.miniGames, JSON.stringify({
    neuroDriveBest: miniGameProgress.neuroDriveBest,
    chaosRunnerBest: miniGameProgress.chaosRunnerBest
  }));
}

function getEndlessLevelName(level) {
  const seed = level - LEVEL_NAMES.length - 1;
  const prefix = ENDLESS_LEVEL_PREFIXES[seed % ENDLESS_LEVEL_PREFIXES.length];
  const suffix = ENDLESS_LEVEL_SUFFIXES[Math.floor(seed / ENDLESS_LEVEL_PREFIXES.length) % ENDLESS_LEVEL_SUFFIXES.length];
  return `${prefix} ${suffix} ${level}`;
}

function getLevelName(level) {
  return LEVEL_NAMES[level - 1] || getEndlessLevelName(level);
}

function getRankLabel(starsEarned) {
  return RANK_LABELS[clamp(starsEarned, 0, 3)] || RANK_LABELS[0];
}

function getLevelConfig(level = progress.selectedLevel) {
  const cycle = (level - 1) % 20;
  const phaseGoal = cycle < 5 ? "Probe" : cycle < 10 ? "Punish" : cycle < 15 ? "Overclock" : "Ascension";
  const requiredPhaseIndex = PHASES.findIndex(phase => phase.name === phaseGoal);
  const config = {
    level,
    name: getLevelName(level),
    factor: 1 + (level - 1) * 0.035,
    parTime: Math.max(22, 44 + level * 2.4),
    healShardTarget: cycle < 5 ? 1 + Math.floor(level / 8) : cycle < 10 ? 2 + Math.floor(level / 10) : 3 + Math.floor(level / 12),
    coreChargeTarget: cycle < 15 ? 0 : clamp(1 + Math.floor((level - 1) / 6), 1, 5),
    requiredPhaseIndex,
    fullUpload: cycle >= 15
  };
  if (cycle < 5) config.goalText = `Goal: Survive ${18 + level * 4}s without breaking rhythm.`;
  else if (cycle < 10) config.goalText = `Goal: Reach ${phaseGoal} and secure ${config.healShardTarget} healing shard${config.healShardTarget === 1 ? "" : "s"}.`;
  else if (cycle < 15) config.goalText = `Goal: Stabilize ${phaseGoal} and survive past ${Math.round(44 + level * 2.4)}s.`;
  else config.goalText = `Goal: Reach Ascension and complete a ${config.coreChargeTarget}-step core upload.`;
  return config;
}

function saveSettings() {
  localStorage.setItem(STORAGE.settings, JSON.stringify(settings));
}

function applySettings() {
  document.body.classList.toggle("high-contrast", settings.highContrast);
  document.body.classList.toggle("light-theme", settings.theme === "light");
  document.body.classList.toggle("arena-fracture", settings.arena === "fracture");
  document.body.classList.toggle("arena-eclipse", settings.arena === "eclipse");
  document.documentElement.style.setProperty("--ui-scale", String(settings.textScale / 100));
  ui.reducedMotion.checked = settings.reducedMotion;
  ui.highContrast.checked = settings.highContrast;
  ui.difficultySelect.value = settings.difficulty;
  ui.arenaSelect.value = settings.arena;
  ui.volumeSlider.value = String(settings.volume);
  ui.volumeValue.textContent = `${settings.volume}%`;
  ui.textScaleSlider.value = String(settings.textScale);
  ui.textScaleValue.textContent = `${settings.textScale}%`;
  ui.themeToggle.textContent = settings.theme === "light" ? "Dark Mode" : "Light Mode";
  if (ui.themeToggleHome) ui.themeToggleHome.lastElementChild.textContent = settings.theme === "light" ? "Dark Mode" : "Light Mode";
}

function renderLevelGrid() {
  if (!ui.levelGrid) return;
  ui.levelGrid.innerHTML = "";
  const startLevel = Math.max(1, progress.unlockedLevel - LEVEL_GRID_WINDOW + 1);
  if (startLevel > 1) {
    const historyChip = document.createElement("div");
    historyChip.className = "levelGridHistory";
    historyChip.textContent = `${startLevel - 1} cleared before this`;
    ui.levelGrid.appendChild(historyChip);
  }
  for (let level = startLevel; level <= progress.unlockedLevel; level += 1) {
    const button = document.createElement("button");
    const starsEarned = starsForLevel(level);
    const isCurrent = level === progress.selectedLevel;
    button.type = "button";
    button.className = `levelGridItem ${isCurrent ? "current" : "cleared"}`;
    button.disabled = true;
    button.innerHTML = `
      <div class="levelGridItemHeader">
        <span class="levelGridLabel">L${level}</span>
        <span class="levelGridState">${isCurrent ? "Current" : "Cleared"}</span>
      </div>
      <strong class="levelGridName">${getLevelName(level)}</strong>
      <div class="levelGridFooter">
        <div class="levelGridStars" aria-hidden="true">
          ${Array.from({ length: 3 }, (_, index) => `<span class="levelGridStar${index < starsEarned ? " earned" : ""}">${index < starsEarned ? "★" : "☆"}</span>`).join("")}
        </div>
        <span class="levelGridLabel">${getRankLabel(starsEarned)}</span>
      </div>
    `;
    ui.levelGrid.appendChild(button);
  }
}

function updateLevelUI() {
  const config = getLevelConfig();
  const earned = starsForLevel(config.level);
  const rank = getRankLabel(earned);
  ui.levelLabel.textContent = `Level ${config.level} / Endless`;
  ui.levelName.textContent = config.name;
  ui.levelGoal.textContent = `${config.goalText} Clear it to reveal Level ${config.level + 1}.`;
  ui.levelStars.textContent = `Stars: ${earned}/3`;
  ui.levelBadge.textContent = rank;
  ui.levelRank.textContent = `Rank: ${rank}`;
  ui.levelState.textContent = "Current Run Target";
  ui.levelState.className = "levelStateChip current";
  ui.levelPrev.disabled = true;
  ui.levelNext.disabled = true;
  Array.from(ui.levelStarIcons.children).forEach((star, index) => {
    star.textContent = index < earned ? "★" : "☆";
    star.classList.toggle("earned", index < earned);
  });
  renderLevelGrid();
}

function showUnlockNotice(level) {
  if (!ui.unlockNotice) return;
  ui.unlockNotice.textContent = `New level unlocked: Level ${level} - ${getLevelName(level)}`;
  ui.unlockNotice.classList.remove("hidden");
  ui.unlockNotice.classList.remove("show");
  void ui.unlockNotice.offsetWidth;
  ui.unlockNotice.classList.add("show");
  clearTimeout(unlockNoticeTimer);
  unlockNoticeTimer = setTimeout(() => {
    ui.unlockNotice.classList.add("hidden");
    ui.unlockNotice.classList.remove("show");
  }, 2800);
}

function motionFactor() {
  return settings.reducedMotion ? 0.4 : 1;
}

function challengeFactor() {
  const difficulty = settings.difficulty === "rookie" ? 0.9 : settings.difficulty === "director" ? 1.18 : 1;
  return difficulty * getLevelConfig().factor;
}

function getHunterEvolution(level = progress.selectedLevel) {
  const forms = [
    { name: "Scout Eye", body: "#ff5879", glow: "#ff5879", iris: "#ffd9df", follow: 1, weave: 0.4, orbit: 0, swayX: 2, swayY: 2.3, speedBonus: 0, snap: 0 },
    { name: "Surge Fang", body: "#ff7e5f", glow: "#ff9d5c", iris: "#ffe7c7", follow: 1.08, weave: 1.6, orbit: 2.2, swayX: 2.6, swayY: 2.9, speedBonus: 14, snap: 0.04 },
    { name: "Phantom Coil", body: "#9b8cff", glow: "#8ad0ff", iris: "#eef2ff", follow: 1.16, weave: 3.8, orbit: 5.6, swayX: 3.3, swayY: 3.8, speedBonus: 24, snap: 0.07 },
    { name: "Rift Warden", body: "#57d6ff", glow: "#7cf6ff", iris: "#06233b", follow: 1.24, weave: 5.8, orbit: 9.8, swayX: 4.1, swayY: 4.4, speedBonus: 36, snap: 0.1 },
    { name: "Mnemosyne Apex", body: "#ffd166", glow: "#ffd166", iris: "#1b0d04", follow: 1.32, weave: 7.6, orbit: 13.5, swayX: 4.8, swayY: 5.2, speedBonus: 48, snap: 0.14 }
  ];
  const tier = Math.floor((level - 1) / 5);
  return { ...forms[Math.min(forms.length - 1, tier)], tier };
}

function syncShellVisibility() {
  const hidden = !state.running;
  document.body.classList.toggle("in-game", state.running);
  document.querySelectorAll(".shell").forEach(node => node.classList.toggle("shell-hidden", hidden));
  if (hidden) setMenuOpen(false);
}

function ensureAudio() {
  if (!window.AudioContext && !window.webkitAudioContext) return null;
  if (!audioContext) {
    const Ctx = window.AudioContext || window.webkitAudioContext;
    audioContext = new Ctx();
  }
  if (audioContext.state === "suspended") audioContext.resume();
  return audioContext;
}

function playTone(kind) {
  if (!settings.volume) return;
  const ctxInstance = ensureAudio();
  if (!ctxInstance) return;
  const gain = ctxInstance.createGain();
  const osc = ctxInstance.createOscillator();
  const now = ctxInstance.currentTime;
  const palette = {
    start: { freq: 280, end: 420, wave: "triangle", dur: 0.16 },
    dash: { freq: 520, end: 760, wave: "sawtooth", dur: 0.08 },
    hit: { freq: 180, end: 90, wave: "square", dur: 0.12 },
    shard: { freq: 640, end: 820, wave: "triangle", dur: 0.09 },
    phase: { freq: 220, end: 540, wave: "triangle", dur: 0.22 },
    thunder: { freq: 90, end: 45, wave: "sawtooth", dur: 0.42 },
    win: { freq: 420, end: 860, wave: "sine", dur: 0.3 },
    lose: { freq: 230, end: 120, wave: "sawtooth", dur: 0.22 }
  };
  const tone = palette[kind] || palette.start;
  osc.type = tone.wave;
  osc.frequency.setValueAtTime(tone.freq, now);
  osc.frequency.exponentialRampToValueAtTime(Math.max(40, tone.end), now + tone.dur);
  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(Math.max(0.0001, settings.volume / 4000), now + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + tone.dur);
  osc.connect(gain);
  gain.connect(ctxInstance.destination);
  osc.start(now);
  osc.stop(now + tone.dur + 0.02);
}

function createManagedAudio(key, source) {
  const audio = new Audio();
  audio.preload = "auto";
  audio.loop = source.loop;
  audio.volume = 0;
  audio.dataset.soundKey = key;
  audio.addEventListener("canplaythrough", () => {
    source.ready = true;
  }, { once: true });
  audio.addEventListener("error", () => {
    source.available = false;
    source.ready = false;
  });
  return audio;
}

async function preloadSoundAssets() {
  if (soundSystem.checking || soundSystem.assetsReady) return;
  soundSystem.checking = true;

  const checks = Object.entries(soundSystem.sources).map(async ([key, source]) => {
    source.audio = createManagedAudio(key, source);
    try {
      const response = await fetch(source.url, { method: "HEAD", cache: "no-store" });
      if (response.ok) {
        source.available = true;
        source.audio.src = source.url;
        source.audio.load();
      }
    } catch {
      source.available = false;
    }
  });

  await Promise.all(checks);
  soundSystem.assetsReady = true;
  soundSystem.checking = false;
}

function safePlayAudio(audio, reset = false) {
  if (!audio) return;
  if (reset) audio.currentTime = 0;
  const promise = audio.play();
  if (promise && typeof promise.catch === "function") {
    promise.catch(() => {});
  }
}

function startLoopingAudio(source) {
  if (!source || !source.available || !source.audio) return;
  if (source.audio.paused) {
    safePlayAudio(source.audio);
  }
}

async function startAudio() {
  if (soundSystem.started) return;
  soundSystem.started = true;
  await preloadSoundAssets();
  ensureAudio();
  startLoopingAudio(soundSystem.sources.ambient);
  soundSystem.nextWhisperAt = state.time + rand(6, 10);
  soundSystem.nextSilenceAt = state.time + rand(11, 17);
}

function smoothAudioLevels(dt) {
  Object.values(soundSystem.sources).forEach(source => {
    if (!source.audio) return;
    source.current += (source.target - source.current) * Math.min(1, dt * 4.5);
    source.audio.volume = clamp(source.current * (settings.volume / 100), 0, 1);
    if (source.loop && source.current > 0.002) {
      startLoopingAudio(source);
    }
    if (source.loop && source.current <= 0.002 && !source.audio.paused) {
      source.audio.pause();
    }
  });
}

function updateHeartbeat(dangerLevel) {
  const source = soundSystem.sources.heartbeat;
  if (!soundSystem.started) return;
  if (performance.now() < soundSystem.silenceUntil) {
    source.target = 0;
    return;
  }
  const active = dangerLevel > 0.24;
  source.target = active ? clamp(0.08 + dangerLevel * 0.34, 0, 0.42) : 0;
  if (source.available && source.audio) {
    source.audio.playbackRate = clamp(0.82 + dangerLevel * 1.1, 0.8, 1.85);
  } else if (active && Math.random() < 0.015 + dangerLevel * 0.02) {
    playTone("hit");
  }
}

function playThunder(intensity = 1) {
  if (!soundSystem.started) return;
  const source = soundSystem.sources.thunder;
  if (source.available && source.audio && performance.now() >= soundSystem.silenceUntil) {
    source.audio.volume = clamp((0.18 + intensity * 0.22) * (settings.volume / 100), 0, 1);
    source.audio.playbackRate = clamp(0.94 + intensity * 0.08, 0.85, 1.2);
    safePlayAudio(source.audio, true);
  } else {
    playTone("thunder");
  }
  state.shake = Math.min(18, state.shake + 4 * intensity * motionFactor());
}

function playWhisper(level = 0.22) {
  if (!soundSystem.started) return;
  const source = soundSystem.sources.whisper;
  if (performance.now() < soundSystem.silenceUntil) return;
  if (source.available && source.audio) {
    source.audio.volume = clamp(level * (settings.volume / 100), 0, 0.38);
    source.audio.playbackRate = clamp(rand(0.92, 1.06), 0.88, 1.1);
    safePlayAudio(source.audio, true);
  } else {
    playTone("lose");
  }
}

function triggerSilence(eventType = "") {
  if (!soundSystem.started) return;
  const duration = rand(2, 3);
  soundSystem.silenceUntil = performance.now() + duration * 1000;
  soundSystem.pendingEvent = eventType;
  soundSystem.sources.ambient.target = 0;
  soundSystem.sources.heartbeat.target = 0;
}

function updateSoundDesign(dt, dangerLevel, vec) {
  if (!soundSystem.started) return;

  const silent = performance.now() < soundSystem.silenceUntil;
  const alone = dist(player.x, player.y, enemy.x, enemy.y) > Math.min(canvas.width, canvas.height) * 0.34;
  const idle = !vec.x && !vec.y;

  if (!silent) {
    soundSystem.sources.ambient.target = clamp(0.045 + dangerLevel * 0.09, 0.03, 0.14);
  }

  updateHeartbeat(dangerLevel);

  soundSystem.warningCooldown = Math.max(0, soundSystem.warningCooldown - dt);
  if (psychology.repetition > 0.72 && soundSystem.warningCooldown <= 0 && !silent) {
    playWhisper(0.12);
    soundSystem.warningCooldown = 4.6;
  }

  if ((alone || idle || psychology.hesitation > 0.55) && state.time >= soundSystem.nextWhisperAt && !silent) {
    playWhisper(0.18 + dangerLevel * 0.08);
    soundSystem.nextWhisperAt = state.time + rand(6, 10);
  }

  if (state.time >= soundSystem.nextSilenceAt && !silent && (dangerLevel > 0.45 || psychology.hesitation > 0.6)) {
    triggerSilence(Math.random() > 0.5 ? "thunder" : "whisper");
    soundSystem.nextSilenceAt = state.time + rand(12, 18);
  }

  if (silent && soundSystem.pendingEvent && performance.now() >= soundSystem.silenceUntil) {
    const pending = soundSystem.pendingEvent;
    soundSystem.pendingEvent = "";
    if (pending === "thunder") playThunder(1.1);
    else playWhisper(0.22);
  }

  smoothAudioLevels(dt);
}

function loadMemory() {
  try {
    const raw = localStorage.getItem(STORAGE.memory) || localStorage.getItem(STORAGE.legacy) || "[]";
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter(p => p && Number.isFinite(p.x) && Number.isFinite(p.y)).slice(-8) : [];
  } catch {
    return [];
  }
}

function saveMemory() {
  localStorage.setItem(STORAGE.memory, JSON.stringify(memory.slice(-8)));
}

if (!localStorage.getItem(STORAGE.memory) && localStorage.getItem(STORAGE.legacy)) saveMemory();

function showMessage(text) {
  ui.message.textContent = text;
  ui.message.classList.add("show");
  clearTimeout(msgTimer);
  msgTimer = setTimeout(() => ui.message.classList.remove("show"), 2200);
}

const wait = ms => new Promise(resolve => setTimeout(resolve, ms));

async function typeText(node, text, speed = 42) {
  node.textContent = "";
  for (let index = 0; index < text.length; index += 1) {
    node.textContent += text[index];
    await wait(settings.reducedMotion ? 3 : speed);
  }
}

function setMenuOpen(open) {
  menuOpen = open;
  ui.menuPanel.classList.toggle("hidden", !open);
  ui.menuButton.setAttribute("aria-expanded", String(open));
}

function hideContextPanels() {
  stopAllMiniGames();
  ui.homePanel.classList.add("hidden");
  ui.tutorialPanel.classList.add("hidden");
  ui.gamesHubPanel.classList.add("hidden");
  ui.miniGamePanel.classList.add("hidden");
  ui.neuroDriveGame.classList.add("hidden");
  ui.chaosRunnerGame.classList.add("hidden");
  ui.termsPanel.classList.add("hidden");
  ui.resultsPanel.classList.add("hidden");
  ui.viewResults.classList.add("hidden");
}

function setOverlayActionVisibility({
  start = true,
  tutorial = true,
  otherGames = false,
  restart = false,
  quit = false,
  resetMemory = false
} = {}) {
  ui.start.hidden = !start || !ctx;
  ui.tutorial.hidden = !tutorial;
  ui.otherGames.hidden = !otherGames;
  ui.restart.hidden = !restart;
  ui.quitOverlay.hidden = !quit;
  ui.resetMemory.hidden = !resetMemory;
}

function showCanvasFallback() {
  ui.bootScreen.classList.remove("active");
  ui.canvasFallback.classList.remove("hidden");
  ui.overlay.classList.add("visible");
  showHomeScreen();
  ui.overlayEyebrow.textContent = "Renderer fallback";
  ui.overlayTitle.textContent = "Arena renderer unavailable";
  ui.overlayText.textContent = "Canvas could not initialize, so the cinematic arena is paused. The home overview and project sections are still available.";
  setOverlayActionVisibility({ start: false, tutorial: true, otherGames: true, restart: false, quit: false, resetMemory: false });
}

function neuroDriveLaneLeft(lane) {
  return 14 + lane * 28;
}

function getNeuroDrivePanic(game) {
  const now = performance.now();
  game.moveTimes = game.moveTimes.filter(time => now - time < 2200);
  return game.moveTimes.length >= 5;
}

function getNeuroDriveBias(game) {
  const recent = game.dodgePattern.slice(-8);
  const left = recent.filter(move => move === "left").length;
  const right = recent.filter(move => move === "right").length;
  if (left >= right + 2) return "left";
  if (right >= left + 2) return "right";
  return "balanced";
}

function updateNeuroDriveUI() {
  const game = miniGames.neuroDrive;
  ui.neuroDriveScore.textContent = String(game.score);
  ui.neuroDriveBest.textContent = String(miniGameProgress.neuroDriveBest);
  ui.neuroDriveLives.textContent = String(game.lives);
  ui.neuroDriveSpeed.textContent = `${(game.speed + (game.boost > 0 ? 0.9 : 0)).toFixed(1)}x`;
  ui.neuroDriveFocus.textContent = game.aiRead;
  if (ui.neuroDriveBoostState) {
    ui.neuroDriveBoostState.textContent = game.boost > 0 ? "Active" : game.boostCooldown > 0 ? `${game.boostCooldown.toFixed(1)}s` : "Ready";
  }
}

function renderNeuroDrive() {
  const game = miniGames.neuroDrive;
  ui.neuroDrivePlayer.style.left = `${neuroDriveLaneLeft(game.lane)}%`;
  ui.neuroDriveArena.classList.toggle("boosting", game.boost > 0);
  ui.neuroDriveArena.classList.toggle("impact", game.impact > 0);
  ui.neuroDrivePlayer.classList.toggle("turn-left", game.turn === "left" && game.turnTimer > 0);
  ui.neuroDrivePlayer.classList.toggle("turn-right", game.turn === "right" && game.turnTimer > 0);
  ui.neuroDriveTraffic.innerHTML = game.traffic.map(car => `
    <div class="trafficCar ${car.paint || "magenta"}${car.dense ? " dense" : ""}" style="left:${neuroDriveLaneLeft(car.lane)}%; top:${car.y}%;"></div>
  `).join("");
}

function stopNeuroDrive() {
  const game = miniGames.neuroDrive;
  game.running = false;
  if (game.raf) cancelAnimationFrame(game.raf);
  game.raf = 0;
  game.traffic = [];
  renderNeuroDrive();
}

function resetNeuroDrive() {
  stopNeuroDrive();
  Object.assign(miniGames.neuroDrive, {
    lane: 1,
    score: 0,
    lives: 5,
    speed: 1,
    boost: 0,
    boostCooldown: 0,
    traffic: [],
    spawnCd: 1.05,
    lastFrame: 0,
    dodgePattern: [],
    moveTimes: [],
    aiRead: "Scanning lanes",
    nextId: 0,
    turn: "",
    turnTimer: 0,
    impact: 0
  });
  ui.neuroDriveStatus.textContent = "Desktop: use A/D or Left/Right. Tap Boost Burst for a louder, brighter speed surge.";
  updateNeuroDriveUI();
  renderNeuroDrive();
}

function moveNeuroDrive(direction) {
  const game = miniGames.neuroDrive;
  if (miniGames.active !== "neuro-drive") return;
  if (!game.running) {
    ui.neuroDriveStatus.textContent = "Start NeuroDrive, then steer with keyboard on desktop or touch controls on mobile.";
    return;
  }
  const nextLane = clamp(game.lane + (direction === "left" ? -1 : 1), 0, 2);
  if (nextLane === game.lane) return;
  game.lane = nextLane;
  game.turn = direction;
  game.turnTimer = 0.18;
  game.dodgePattern.push(direction);
  if (game.dodgePattern.length > 12) game.dodgePattern.shift();
  game.moveTimes.push(performance.now());
  const panic = getNeuroDrivePanic(game);
  const bias = getNeuroDriveBias(game);
  game.aiRead = panic ? "Dense traffic panic response" : bias === "left" ? "Biasing left lane" : bias === "right" ? "Biasing right lane" : "Balanced traffic read";
  ui.neuroDriveStatus.textContent = panic ? "Rapid steering detected. Traffic density is increasing." : `Lane change logged. AI read: ${game.aiRead}.`;
  playTone("dash");
  updateNeuroDriveUI();
  renderNeuroDrive();
}

function activateNeuroDriveBoost() {
  const game = miniGames.neuroDrive;
  if (miniGames.active !== "neuro-drive") return;
  if (!game.running) {
    ui.neuroDriveStatus.textContent = "Start NeuroDrive first, then use Boost Burst for a speed surge.";
    return;
  }
  if (game.boostCooldown > 0 || game.boost > 0) {
    ui.neuroDriveStatus.textContent = `Boost is cooling down for ${Math.max(0.1, game.boostCooldown).toFixed(1)}s.`;
    return;
  }
  game.boost = 1.2;
  game.boostCooldown = 3.2;
  game.aiRead = "Turbo shockwave engaged";
  ui.neuroDriveStatus.textContent = "Boost Burst engaged. Score gain and road speed are surging.";
  playTone("phase");
  updateNeuroDriveUI();
  renderNeuroDrive();
}

function getNeuroDriveLaneCounts(game) {
  const counts = [0, 0, 0];
  game.traffic.forEach(car => {
    if (car.y > -6 && car.y < 92) counts[car.lane] += 1;
  });
  return counts;
}

function getNeuroDriveLeadDistance(game, lane) {
  const laneTraffic = game.traffic
    .filter(car => car.lane === lane)
    .map(car => car.y)
    .sort((a, b) => a - b);
  return laneTraffic.length ? laneTraffic[0] : Infinity;
}

function canSpawnNeuroDriveInLane(game, lane, minLeadDistance = 28) {
  return getNeuroDriveLeadDistance(game, lane) >= minLeadDistance;
}

function chooseNeuroDriveLane(game, blockedLanes = new Set(), minLeadDistance = 28) {
  const bias = getNeuroDriveBias(game);
  const laneCounts = getNeuroDriveLaneCounts(game);
  const weights = [1, 1, 1].map((weight, lane) => {
    if (blockedLanes.has(lane)) return 0;
    const leadDistance = getNeuroDriveLeadDistance(game, lane);
    if (leadDistance < minLeadDistance) return 0;
    const spacingBoost = clamp(leadDistance / 38, 0.75, 2.4);
    if (bias === "left" && lane === 0) return weight * 2.1 * spacingBoost / (1 + laneCounts[lane] * 0.32);
    if (bias === "right" && lane === 2) return weight * 2.1 * spacingBoost / (1 + laneCounts[lane] * 0.32);
    return weight * spacingBoost / (1 + laneCounts[lane] * 0.32);
  });
  const total = weights.reduce((sum, weight) => sum + weight, 0);
  if (total <= 0) return null;
  let roll = Math.random() * total;
  for (let lane = 0; lane < weights.length; lane += 1) {
    roll -= weights[lane];
    if (roll <= 0) return lane;
  }
  return 1;
}

function spawnNeuroDriveTraffic() {
  const game = miniGames.neuroDrive;
  const panic = getNeuroDrivePanic(game);
  const minLeadDistance = panic ? 34 : 28;
  const availableLanes = [0, 1, 2].filter(lane => canSpawnNeuroDriveInLane(game, lane, minLeadDistance));
  let spawnCount = 1;
  if (availableLanes.length >= 3 && Math.random() > (panic ? 0.84 : 0.94)) spawnCount = 2;
  else if (availableLanes.length >= 2 && panic && Math.random() > 0.92) spawnCount = 2;
  const usedLanes = new Set();
  for (let index = 0; index < spawnCount; index += 1) {
    const blockedLanes = spawnCount > 1 ? new Set([game.lane, ...usedLanes]) : usedLanes;
    let lane = chooseNeuroDriveLane(game, blockedLanes, minLeadDistance);
    if (lane === null) lane = chooseNeuroDriveLane(game, usedLanes, minLeadDistance);
    if (lane === null) break;
    usedLanes.add(lane);
    const paints = ["magenta", "gold", "aqua"];
    game.traffic.push({ id: game.nextId += 1, lane, y: -18 - index * 20, dense: panic, paint: paints[(game.nextId + lane) % paints.length] });
  }
  game.aiRead = panic ? "Dense traffic panic response" : getNeuroDriveBias(game) === "left" ? "Biasing left lane" : getNeuroDriveBias(game) === "right" ? "Biasing right lane" : "Balanced traffic read";
  ui.neuroDriveStatus.textContent = spawnCount > 1
    ? "Traffic wave incoming. There is still room to switch lanes."
    : `Incoming traffic adjusted: ${game.aiRead}. Spacing is opening lane-change windows.`;
}

function neuroDriveFrame(now) {
  const game = miniGames.neuroDrive;
  if (!game.running) {
    game.raf = 0;
    return;
  }
  const dt = Math.min(0.033, ((now - game.lastFrame) / 1000) || 0.016);
  game.lastFrame = now;
  game.boost = Math.max(0, game.boost - dt);
  game.boostCooldown = Math.max(0, game.boostCooldown - dt);
  game.turnTimer = Math.max(0, game.turnTimer - dt);
  if (game.turnTimer <= 0) game.turn = "";
  game.impact = Math.max(0, game.impact - dt);
  game.speed = clamp(game.speed + dt * 0.055, 1, 3.2);
  game.spawnCd -= dt;
  if (game.spawnCd <= 0) {
    spawnNeuroDriveTraffic();
    const panic = getNeuroDrivePanic(game);
    game.spawnCd = Math.max(0.62, (panic ? 0.92 : 1.18) - game.speed * 0.07 + rand(-0.08, 0.14));
  }
  game.traffic.forEach(car => {
    car.y += dt * (18 + game.speed * 11 + (car.dense ? 4 : 0) + (game.boost > 0 ? 12 : 0));
  });
  const collision = game.traffic.find(car => car.lane === game.lane && car.y > 70 && car.y < 92);
  if (collision) {
    game.lives -= 1;
    game.impact = 0.34;
    game.traffic = game.traffic.filter(car => !(car.lane === game.lane && car.y > 58 && car.y < 98));
    game.spawnCd = Math.max(game.spawnCd, 0.58);
    if (game.lives <= 0) {
      stopNeuroDrive();
      miniGameProgress.neuroDriveBest = Math.max(miniGameProgress.neuroDriveBest, game.score);
      saveMiniGameProgress();
      ui.neuroDriveStatus.textContent = `Collision detected. Final score: ${game.score}.`;
      updateNeuroDriveUI();
      renderNeuroDrive();
      return;
    }
    ui.neuroDriveStatus.textContent = `Collision detected. ${game.lives} life${game.lives === 1 ? "" : "s"} remaining. Traffic is rebalancing to leave you an opening.`;
  }
  const escaped = game.traffic.filter(car => car.y > 110).length;
  if (escaped) {
    game.score += escaped * Math.max(1, Math.round((game.speed + (game.boost > 0 ? 0.9 : 0)) * 2.2));
    miniGameProgress.neuroDriveBest = Math.max(miniGameProgress.neuroDriveBest, game.score);
    saveMiniGameProgress();
  }
  game.traffic = game.traffic.filter(car => car.y <= 110);
  updateNeuroDriveUI();
  renderNeuroDrive();
  game.raf = requestAnimationFrame(neuroDriveFrame);
}

function startNeuroDrive() {
  resetNeuroDrive();
  const game = miniGames.neuroDrive;
  game.running = true;
  game.lastFrame = performance.now();
  ui.neuroDriveStatus.textContent = "NeuroDrive online. Steer left or right, then hit Boost Burst to punch through the rush.";
  updateNeuroDriveUI();
  renderNeuroDrive();
  game.raf = requestAnimationFrame(neuroDriveFrame);
}

function average(values, fallback = 0) {
  return values.length ? values.reduce((sum, value) => sum + value, 0) / values.length : fallback;
}

function updateChaosRunnerUI() {
  const game = miniGames.chaosRunner;
  ui.chaosRunnerScore.textContent = String(game.score);
  ui.chaosRunnerBest.textContent = String(miniGameProgress.chaosRunnerBest);
  ui.chaosRunnerLives.textContent = String(game.lives);
  const avgReaction = average(game.reactionTimes, 0.56);
  ui.chaosRunnerAI.textContent = game.actionCadence.length
    ? `${game.predictedCadence.toFixed(2)}s cadence / ${avgReaction.toFixed(2)}s read`
    : "Opening read";
}

function renderChaosRunner() {
  const game = miniGames.chaosRunner;
  ui.runnerCharacter.classList.toggle("jump", game.state === "jump");
  ui.runnerCharacter.classList.toggle("duck", game.state === "duck");
  if (!game.obstacle) {
    ui.runnerObstacle.classList.add("hidden");
    return;
  }
  const obstacleLeft = 18 + Math.max(0, 1 - game.obstacle.progress) * 62;
  ui.runnerObstacle.classList.remove("hidden");
  ui.runnerObstacle.style.left = `${obstacleLeft}%`;
  ui.runnerObstacle.classList.toggle("duck", game.obstacle.type === "duck");
  ui.runnerObstacle.textContent = game.obstacle.type === "jump" ? "Jump" : "Duck";
}

function stopChaosRunner() {
  const game = miniGames.chaosRunner;
  game.running = false;
  game.obstacle = null;
  if (game.raf) cancelAnimationFrame(game.raf);
  game.raf = 0;
  renderChaosRunner();
}

function resetChaosRunner() {
  stopChaosRunner();
  Object.assign(miniGames.chaosRunner, {
    score: 0,
    lives: 5,
    streak: 0,
    nextSpawn: 1.2,
    predictedCadence: 1.45,
    actionCadence: [],
    reactionTimes: [],
    lastActionAt: 0,
    lastFrame: 0,
    state: "run",
    stateTimer: 0
  });
  ui.chaosRunnerStatus.textContent = "Desktop: use W or Up to jump, S or Down to duck. Mobile: use the touch controls below.";
  updateChaosRunnerUI();
  renderChaosRunner();
}

function resolveChaosRunnerSuccess(now) {
  const game = miniGames.chaosRunner;
  if (!game.obstacle) return;
  const reaction = clamp((now - game.obstacle.spawnAt) / 1000, 0.2, 2.2);
  game.reactionTimes.push(reaction);
  game.reactionTimes = game.reactionTimes.slice(-6);
  game.streak += 1;
  game.score += 14 + game.streak * 4;
  miniGameProgress.chaosRunnerBest = Math.max(miniGameProgress.chaosRunnerBest, game.score);
  saveMiniGameProgress();
  ui.chaosRunnerStatus.textContent = `${game.obstacle.type === "jump" ? "Jump" : "Duck"} timed cleanly. The AI is recalculating your rhythm.`;
  game.obstacle = null;
  game.nextSpawn = clamp(game.predictedCadence + rand(-0.18, 0.22), 0.85, 2.1);
  updateChaosRunnerUI();
  renderChaosRunner();
}

function resolveChaosRunnerFailure(message) {
  const game = miniGames.chaosRunner;
  game.lives -= 1;
  game.streak = 0;
  game.obstacle = null;
  if (game.lives <= 0) {
    stopChaosRunner();
    miniGameProgress.chaosRunnerBest = Math.max(miniGameProgress.chaosRunnerBest, game.score);
    saveMiniGameProgress();
    ui.chaosRunnerStatus.textContent = `${message} Run terminated. Final score: ${game.score}.`;
  } else {
    ui.chaosRunnerStatus.textContent = `${message} ${game.lives} life${game.lives === 1 ? "" : "s"} remaining.`;
    game.nextSpawn = 0.9;
  }
  updateChaosRunnerUI();
  renderChaosRunner();
}

function performChaosRunnerAction(type) {
  const game = miniGames.chaosRunner;
  if (miniGames.active !== "chaos-runner") return;
  if (!game.running) {
    ui.chaosRunnerStatus.textContent = "Start the runner first, then react to incoming hazards.";
    return;
  }
  const now = performance.now();
  if (game.lastActionAt) {
    game.actionCadence.push((now - game.lastActionAt) / 1000);
    game.actionCadence = game.actionCadence.slice(-6);
    game.predictedCadence = clamp(average(game.actionCadence, game.predictedCadence), 0.85, 2.2);
  }
  game.lastActionAt = now;
  game.state = type;
  game.stateTimer = 0.42;
  if (game.obstacle && game.obstacle.progress >= 0.48 && game.obstacle.progress <= 0.86) {
    if (game.obstacle.type === type) resolveChaosRunnerSuccess(now);
    else resolveChaosRunnerFailure(`Wrong read. The AI expected ${game.obstacle.type}.`);
  } else {
    updateChaosRunnerUI();
    renderChaosRunner();
  }
}

function spawnChaosRunnerObstacle(now) {
  const game = miniGames.chaosRunner;
  const avgReaction = average(game.reactionTimes, 0.56);
  game.obstacle = {
    type: Math.random() > 0.5 ? "jump" : "duck",
    progress: 0,
    duration: clamp(0.95 + avgReaction * 0.8, 1, 1.65),
    spawnAt: now
  };
  ui.chaosRunnerStatus.textContent = `Hazard incoming. The AI is syncing to your ${game.predictedCadence.toFixed(2)}s cadence.`;
  updateChaosRunnerUI();
  renderChaosRunner();
}

function chaosRunnerFrame(now) {
  const game = miniGames.chaosRunner;
  if (!game.running) {
    game.raf = 0;
    return;
  }
  const dt = Math.min(0.033, ((now - game.lastFrame) / 1000) || 0.016);
  game.lastFrame = now;
  if (game.stateTimer > 0) {
    game.stateTimer -= dt;
    if (game.stateTimer <= 0) game.state = "run";
  }
  if (!game.obstacle) {
    game.nextSpawn -= dt;
    if (game.nextSpawn <= 0) spawnChaosRunnerObstacle(now);
  } else {
    game.obstacle.progress += dt / game.obstacle.duration;
    if (game.obstacle.progress >= 0.84) {
      if (game.state === game.obstacle.type) resolveChaosRunnerSuccess(now);
      else resolveChaosRunnerFailure(`Too late to ${game.obstacle.type}.`);
    }
  }
  updateChaosRunnerUI();
  renderChaosRunner();
  game.raf = requestAnimationFrame(chaosRunnerFrame);
}

function startChaosRunner() {
  resetChaosRunner();
  const game = miniGames.chaosRunner;
  game.running = true;
  game.lastFrame = performance.now();
  ui.chaosRunnerStatus.textContent = "Runner online. Use keyboard on desktop or touch controls on mobile.";
  updateChaosRunnerUI();
  renderChaosRunner();
  game.raf = requestAnimationFrame(chaosRunnerFrame);
}

function stopAllMiniGames() {
  stopNeuroDrive();
  stopChaosRunner();
  miniGames.active = null;
}

function showGamesHub() {
  overlayMode = "gamesHub";
  ui.overlayCard.classList.remove("elimination-mode");
  hideContextPanels();
  ui.overlayEyebrow.textContent = "Project Mnemosyne extensions";
  ui.overlayTitle.textContent = "Other Games";
  ui.overlayText.textContent = "Open a mini-game dashboard and play without leaving the main CEREBRA experience shell.";
  setOverlayActionVisibility({ start: false, tutorial: true, otherGames: false, restart: false, quit: true, resetMemory: false });
  ui.tutorial.textContent = "Back";
  ui.gamesHubPanel.classList.remove("hidden");
  ui.overlayMeta.hidden = false;
  ui.overlayMeta.textContent = "Mini-game launcher: NeuroDrive and Chaos Reaction Runner.";
  ui.overlay.classList.add("visible");
  syncShellVisibility();
}

function showMiniGameDashboard(gameId) {
  overlayMode = "miniGame";
  ui.overlayCard.classList.remove("elimination-mode");
  hideContextPanels();
  miniGames.active = gameId;
  setOverlayActionVisibility({ start: false, tutorial: false, otherGames: false, restart: false, quit: true, resetMemory: false });
  ui.miniGamePanel.classList.remove("hidden");
  if (gameId === "neuro-drive") {
    ui.overlayEyebrow.textContent = "Mnemosyne mini-game loaded";
    ui.overlayTitle.textContent = "NeuroDrive";
    ui.overlayText.textContent = "A car-avoidance survival game where the AI studies your dodge habits and bends traffic density around them.";
    ui.miniGameEyebrow.textContent = "Mini Game 01";
    ui.miniGameTitle.textContent = "NeuroDrive";
    ui.miniGameDescription.textContent = "Steer through adaptive traffic. If you always dodge the same way, the AI starts filling that lane. If you panic, the road gets denser.";
    ui.neuroDriveGame.classList.remove("hidden");
    resetNeuroDrive();
  } else {
    ui.overlayEyebrow.textContent = "Mnemosyne mini-game loaded";
    ui.overlayTitle.textContent = "Chaos Reaction Runner";
    ui.overlayText.textContent = "A timing runner where the AI learns your rhythm and slides hazards onto your predicted response beat.";
    ui.miniGameEyebrow.textContent = "Mini Game 02";
    ui.miniGameTitle.textContent = "Chaos Reaction Runner";
    ui.miniGameDescription.textContent = "The runner never stops. Jump or duck on keyboard in desktop or touch controls on mobile while the AI adapts obstacle cadence around your rhythm.";
    ui.chaosRunnerGame.classList.remove("hidden");
    resetChaosRunner();
  }
  ui.overlayMeta.hidden = false;
  ui.overlayMeta.textContent = "Press Escape or use Back to Games. Mobile players can use the on-screen controls.";
  ui.overlay.classList.add("visible");
  syncShellVisibility();
}

function showTermsScreen() {
  overlayMode = "terms";
  ui.overlayCard.classList.remove("elimination-mode");
  hideContextPanels();
  ui.overlayEyebrow.textContent = "Trust and safety layer";
  ui.overlayTitle.textContent = "Review the terms before entering";
  ui.overlayText.textContent = "This experience stores local run data and escalates visual intensity during play. Accept the terms to continue.";
  ui.termsPanel.classList.remove("hidden");
  setOverlayActionVisibility({ start: false, tutorial: false, otherGames: false, restart: false, quit: false, resetMemory: false });
  ui.overlayMeta.hidden = false;
  ui.overlayMeta.textContent = "Local storage only: score, settings, AI memory, unlocked levels, and stars earned.";
  ui.overlay.classList.add("visible");
  syncShellVisibility();
}

async function playBootSequence() {
  const statuses = [
    "Booting cognition lattice...",
    "Mounting memory vault...",
    "Synthesizing dungeon topology...",
    "Authorizing Project Mnemosyne..."
  ];
  ui.bootScreen.classList.add("active");
  ui.bootSubtitle.textContent = "Dungeon Director's Project Mnemosyne";
  ui.bootTagline.textContent = "The dungeon learns. The hunter predicts. Your fear becomes level geometry.";
  await typeText(ui.bootTitle, "CEREBRA", settings.reducedMotion ? 6 : 80);
  for (let index = 0; index < statuses.length; index += 1) {
    ui.bootStatus.textContent = statuses[index];
    ui.bootProgress.style.width = `${((index + 1) / statuses.length) * 100}%`;
    await wait(settings.reducedMotion ? 80 : 420);
  }
  await wait(settings.reducedMotion ? 80 : 520);
  ui.bootScreen.classList.remove("active");
}

function setOverlay(eyebrow, title, text, buttonLabel) {
  overlayMode = "generic";
  ui.overlayCard.classList.remove("elimination-mode");
  ui.overlayEyebrow.textContent = eyebrow;
  ui.overlayTitle.textContent = title;
  ui.overlayText.textContent = text;
  ui.start.textContent = buttonLabel;
  hideContextPanels();
  setOverlayActionVisibility({ start: true, tutorial: true, otherGames: false, restart: state.paused || state.over || state.won, quit: true, resetMemory: true });
  ui.tutorial.textContent = "How to Play";
  ui.overlayMeta.hidden = false;
  ui.overlay.classList.add("visible");
  syncShellVisibility();
}

function hideOverlay() {
  ui.overlay.classList.remove("visible");
  syncShellVisibility();
}

function getCounterLabel() {
  return ({
    Adaptive: "Predictive trap",
    "Wall Hugger": "Perimeter denial",
    Erratic: "Scatter analysis",
    "Hyper-mobile": "Twin pulse",
    "Lane Runner": "Lane strike",
    Desperate: "Pressure cascade"
  })[playerType] || "Adaptive pressure";
}

function getResultsAnalysis(victory) {
  const horizontal = lastMoves.filter(move => move === "left" || move === "right").length;
  const vertical = Math.max(1, lastMoves.length - horizontal);
  const repeated = horizontal >= vertical ? "left-right dodging" : "vertical juking";
  const cause = victory
    ? "Cause: You broke the learning loop, exposed the core, and held the upload zone under pressure."
    : `Cause: ${lastDamageSource}. CEREBRA punished ${playerType.toLowerCase()} behavior.`;
  const summary = `Analysis: Player style detected as ${playerType}. Most repeated movement was ${repeated}. AI counter used: ${getCounterLabel()}.`;
  const tip = playerType === "Lane Runner"
    ? "Tip: Break horizontal rhythm with sharper vertical dodges and late dashes."
    : playerType === "Wall Hugger"
      ? "Tip: Leave the arena edges earlier so perimeter denial has less value."
      : playerType === "Hyper-mobile"
        ? "Tip: Save dash for pulse timing instead of constant burst movement."
        : playerType === "Erratic"
          ? "Tip: Random movement works, but reset to a safe lane before scatter pressure closes in."
          : playerType === "Desperate"
            ? "Tip: Prioritize recovery shards before taking extended close-range pressure."
            : "Tip: Deliberately vary direction after each warning to make the predictor less certain.";
  return { cause, summary, tip: `Tip: ${tip.replace(/^Tip:\s*/, "")}` };
}

function getResultMetrics() {
  const moveCount = Math.max(1, lastMoves.length);
  const horizontal = lastMoves.filter(move => move === "left" || move === "right").length;
  const switches = lastMoves.reduce((count, move, index) => count + (index > 0 && move !== lastMoves[index - 1] ? 1 : 0), 0);
  const aggression = clamp(Math.round((runStats.damageTaken * 0.6 + runStats.pulsesTaken * 8 + runStats.trapsTaken * 10) / Math.max(1, state.time * 1.2)), 12, 100);
  const mobility = clamp(Math.round((player.dashes * 14 + switches * 7) / moveCount * 3.8), 10, 100);
  const predictability = clamp(Math.round((Math.abs(horizontal - (moveCount - horizontal)) / moveCount) * 100 + Math.max(0, 40 - switches * 5)), 8, 100);
  const adaptability = clamp(Math.round((state.phaseIndex * 18 + state.shards * 3 + runStats.coreShards * 14 + (state.won ? 24 : 0))), 15, 100);
  return { aggression, mobility, predictability, adaptability };
}

function isLevelComplete() {
  const config = getLevelConfig();
  const cycle = (config.level - 1) % 20;
  if (config.fullUpload) return finalCore.upload >= FINAL_UPLOAD_TIME;
  if (config.coreChargeTarget > 0) return finalCore.charge >= config.coreChargeTarget;
  if (cycle < 5) return state.time >= 18 + config.level * 4;
  if (cycle < 10) return state.phaseIndex >= config.requiredPhaseIndex && state.shards >= config.healShardTarget;
  return state.phaseIndex >= config.requiredPhaseIndex && state.time >= 44 + config.level * 2.4;
}

function getStarAward() {
  const config = getLevelConfig();
  let starsAwarded = 1;
  if (player.health >= 55 || state.time <= config.parTime) starsAwarded += 1;
  if (state.shards >= config.healShardTarget + 1 || runStats.damageTaken <= 42 + config.level * 2) starsAwarded += 1;
  return clamp(starsAwarded, 1, 3);
}

function completeLevelProgress(victory) {
  if (!victory) return;
  const previousUnlocked = progress.unlockedLevel;
  progress.stars[progress.selectedLevel] = Math.max(starsForLevel(progress.selectedLevel), getStarAward());
  progress.unlockedLevel = Math.max(progress.unlockedLevel, progress.selectedLevel + 1);
  progress.selectedLevel = progress.unlockedLevel;
  saveProgress();
  updateLevelUI();
  if (progress.unlockedLevel > previousUnlocked) {
    showUnlockNotice(progress.unlockedLevel);
    showMessage(`New level unlocked: ${getLevelName(progress.unlockedLevel)}.`);
  }
}

function showResultsScreen(victory) {
  ui.overlayCard.classList.remove("elimination-mode");
  const analysis = getResultsAnalysis(victory);
  const metrics = getResultMetrics();
  ui.resultsScore.textContent = state.score.toLocaleString();
  ui.resultsTime.textContent = fmtTime(state.time);
  ui.resultsPhase.textContent = state.phase;
  ui.resultsType.textContent = playerType;
  ui.resultsShards.textContent = String(state.shards);
  ui.resultsCounter.textContent = getCounterLabel();
  ui.resultsBest.textContent = Math.max(state.best, state.score).toLocaleString();
  ui.resultsAdapt.textContent = `${Math.round(state.difficulty * 100)}%`;
  if (ui.resultsCause) ui.resultsCause.textContent = analysis.cause;
  if (ui.resultsSummary) ui.resultsSummary.textContent = analysis.summary;
  if (ui.resultsTip) ui.resultsTip.textContent = analysis.tip;
  ui.metricAggression.style.width = `${metrics.aggression}%`;
  ui.metricMobility.style.width = `${metrics.mobility}%`;
  ui.metricPredictability.style.width = `${metrics.predictability}%`;
  ui.metricAdaptability.style.width = `${metrics.adaptability}%`;
  hideContextPanels();
  ui.resultsPanel.classList.remove("hidden");
  setOverlayActionVisibility({ start: true, tutorial: true, otherGames: false, restart: true, quit: true, resetMemory: false });
  ui.tutorial.textContent = "Home";
  ui.overlayMeta.hidden = false;
  ui.overlayMeta.textContent = `Best Score ${Math.max(state.best, state.score).toLocaleString()} · Echoes Stored ${memory.length}`;
  overlayMode = "results";
  ui.overlayMeta.textContent = `Best Score ${Math.max(state.best, state.score).toLocaleString()} | Echoes Stored ${memory.length}`;
  ui.overlay.classList.add("visible");
  syncShellVisibility();
}

function showTutorialScreen() {
  overlayMode = "tutorial";
  ui.overlayCard.classList.remove("elimination-mode");
  ui.overlayEyebrow.textContent = "How the adaptive dungeon works";
  ui.overlayTitle.textContent = "Learn the loop in 30 seconds";
  ui.overlayText.textContent = "A short overview of movement, counters, memory echoes, and the final breach objective.";
  ui.start.textContent = state.over || state.won ? "Run Again" : state.paused ? "Resume" : "Start Run";
  setOverlayActionVisibility({ start: true, tutorial: true, otherGames: false, restart: state.paused || state.over || state.won, quit: true, resetMemory: true });
  ui.tutorial.textContent = "Back";
  hideContextPanels();
  ui.tutorialPanel.classList.remove("hidden");
  ui.overlayMeta.hidden = false;
  ui.overlayMeta.textContent = "Controls: WASD / Arrows to move, Space or Shift to dash, P to pause, R to restart after a run.";
  ui.overlay.classList.add("visible");
  syncShellVisibility();
}

function showHomeScreen() {
  overlayMode = "home";
  ui.overlayCard.classList.remove("elimination-mode");
  ui.overlayEyebrow.textContent = "Adaptive dungeon intelligence online";
  ui.overlayTitle.textContent = "CEREBRA: Dungeon Director's Project Mnemosyne";
  ui.overlayText.textContent = "A boss-survival experience where the dungeon studies your habits, predicts your routes, and remembers your failures.";
  ui.start.textContent = "Start Run";
  setOverlayActionVisibility({ start: Boolean(ctx), tutorial: true, otherGames: true, restart: false, quit: false, resetMemory: true });
  ui.tutorial.textContent = "How to Play";
  hideContextPanels();
  ui.homePanel.classList.remove("hidden");
  ui.overlayMeta.hidden = false;
  ui.overlayMeta.textContent = "Build v0.5 Adaptive Arena | Project Mnemosyne";
  ui.overlay.classList.add("visible");
  updateLevelUI();
  syncShellVisibility();
}

function setAction(text, message) {
  state.action = text;
  state.actionCd = 1.2;
  if (message) showMessage(message);
}

function buildStars() {
  const count = settings.reducedMotion ? 34 : Math.max(55, Math.floor((innerWidth + innerHeight) / 24));
  stars = Array.from({ length: count }, () => ({ x: Math.random() * canvas.width, y: Math.random() * canvas.height, r: rand(0.6, 2.2), t: rand(0, Math.PI * 2) }));
}

function syncEchoes() {
  echoes = memory.slice(-6).map((spot, i) => ({ x: clamp(spot.x, 40, Math.max(40, canvas.width - 40)), y: clamp(spot.y, 50, Math.max(50, canvas.height - 40)), radius: 54 + i * 7, phase: rand(0, Math.PI * 2), warned: false }));
}

function clampActors() {
  player.x = clamp(player.x, 12, canvas.width - player.size - 12);
  player.y = clamp(player.y, 12, canvas.height - player.size - 12);
  enemy.x = clamp(enemy.x, 12, canvas.width - enemy.size - 12);
  enemy.y = clamp(enemy.y, 12, canvas.height - enemy.size - 12);
}

function resize() {
  if (!canvas) return;
  canvas.width = innerWidth;
  canvas.height = innerHeight;
  if (ctx) ctx.imageSmoothingEnabled = true;
  finalCore.x = canvas.width * 0.5;
  finalCore.y = canvas.height * 0.48;
  buildStars();
  syncEchoes();
  if (!state.running && !state.over && !state.paused) {
    player.x = canvas.width * 0.5;
    player.y = canvas.height * 0.58;
    enemy.x = canvas.width * 0.15;
    enemy.y = canvas.height * 0.2;
  }
  clampActors();
}

function resetGame() {
  const levelConfig = getLevelConfig();
  Object.assign(state, {
    running: false,
    over: false,
    paused: false,
    won: false,
    time: 0,
    score: 0,
    shards: 0,
    coins: 0,
    diamonds: 0,
    phaseIndex: 0,
    phase: PHASES[0].name,
    difficulty: PHASES[0].diff,
    action: "Awaiting subject",
    objective: levelConfig.goalText,
    trapCd: 2.2,
    pulseCd: 6.2,
    shardCd: 1.5,
    specialCd: 5.6,
    moveSampleCd: 0,
    actionCd: 0,
    hitToastCd: 0,
    rewardCd: 10,
    flash: 0,
    shake: 0
  });
  Object.assign(player, { x: canvas.width * 0.5, y: canvas.height * 0.58, health: 100, dashCd: 0, dashTime: 0, dashDir: { x: 0, y: 0 }, dir: { x: 1, y: 0 }, invuln: 0, trail: [], dashes: 0 });
  Object.assign(enemy, { x: canvas.width * 0.15, y: canvas.height * 0.2, speed: 90 });
  Object.assign(finalCore, { active: false, x: canvas.width * 0.5, y: canvas.height * 0.48, radius: 56, charge: 0, target: levelConfig.fullUpload ? 3 : Math.max(1, levelConfig.coreChargeTarget || 3), vulnerable: false, upload: 0, pulse: 0 });
  keys = Object.create(null);
  lastMoves = [];
  predictedMove = "none";
  playerType = "Adaptive";
  traps = [];
  pulses = [];
  beams = [];
  particles = [];
  shards = [];
  rewards = [];
  dungeonWalls = [];
  psychology = { panic: 0, hesitation: 0, repetition: 0, stillness: 0, tauntCd: 2.5, jumpCd: 5.5 };
  storm = { flash: 0, cooldown: rand(5.5, 9.5), rumble: 0 };
  runStats = createRunStats();
  lastDamageSource = "CEREBRA pressure";
  syncEchoes();
  spawnShard(true, "heal");
  spawnShard(true, "heal");
}

function startGame() {
  if (!ctx) {
    showCanvasFallback();
    return;
  }
  if (!termsAccepted) {
    showTermsScreen();
    return;
  }
  startAudio();
  stopAllMiniGames();
  resetGame();
  state.running = true;
  hideOverlay();
  setAction("Simulation live", "CEREBRA has begun observing you.");
  playTone("start");
}

function resumeGame() {
  startAudio();
  state.paused = false;
  state.running = true;
  hideOverlay();
  showMessage("Simulation resumed.");
  playTone("start");
}

function pauseGame() {
  if (!state.running || state.over || state.won) return;
  state.running = false;
  state.paused = true;
  setOverlay("Simulation paused", "Take a breath", "CEREBRA still remembers your last pattern. Resume when you are ready to push deeper.", "Resume");
  ui.tutorial.textContent = "How to Play";
}

function clearMemory() {
  memory = [];
  echoes = [];
  localStorage.removeItem(STORAGE.memory);
  localStorage.removeItem(STORAGE.legacy);
  showMessage("AI memory wiped. Past deaths erased.");
}

function saveDeath() {
  memory.push({ x: Math.round(player.x + player.size / 2), y: Math.round(player.y + player.size / 2) });
  memory = memory.slice(-8);
  saveMemory();
  syncEchoes();
}

function finishRun(victory) {
  if ((victory && state.won) || (!victory && state.over)) return;
  state.running = false;
  state.paused = false;
  state.over = !victory;
  state.won = victory;
  if (!victory) saveDeath();
  const newBest = state.score > state.best;
  if (newBest) {
    state.best = state.score;
    localStorage.setItem(STORAGE.best, String(state.best));
  }
  const levelConfig = getLevelConfig();
  const starsAwarded = victory ? getStarAward() : 0;
  completeLevelProgress(victory);
  const learned = `CEREBRA classified you as ${playerType.toLowerCase()} and recorded ${memory.length} echo${memory.length === 1 ? "" : "es"}.`;
  if (victory) {
    const victoryCopy = levelConfig.fullUpload
      ? `You survived ${fmtTime(state.time)}, gathered ${state.shards} shards, and completed the core upload. ${learned}`
      : `Level ${levelConfig.level} - ${levelConfig.name} cleared with ${starsAwarded} star${starsAwarded === 1 ? "" : "s"}. You survived ${fmtTime(state.time)} and met the objective. ${learned}`;
    setOverlay(levelConfig.fullUpload ? "Core breach successful" : "Level cleared", levelConfig.fullUpload ? "CEREBRA contained" : `${levelConfig.name} stabilized`, victoryCopy, "Run Again");
    showResultsScreen(true);
    showMessage("Upload complete. The dungeon has been rewritten.");
    playTone("win");
  } else {
    pendingResultsVictory = false;
    setOverlay(newBest ? "Benchmark preserved" : "Adaptive hunter confirmed", "Eliminated", `Survived ${fmtTime(state.time)} with ${state.shards} shards and a score of ${state.score}. ${learned}`, "Run Again");
    ui.overlayCard.classList.add("elimination-mode");
    ui.tutorial.textContent = "Home";
    ui.viewResults.textContent = "View Results";
    ui.viewResults.classList.remove("hidden");
    showMessage("The dungeon learned enough to end the experiment.");
    playTone("lose");
  }
}

function inputVector() {
  let x = 0, y = 0;
  if (keys.KeyW || keys.ArrowUp) y -= 1;
  if (keys.KeyS || keys.ArrowDown) y += 1;
  if (keys.KeyA || keys.ArrowLeft) x -= 1;
  if (keys.KeyD || keys.ArrowRight) x += 1;
  if (!x && !y) return { x: 0, y: 0 };
  const len = Math.hypot(x, y);
  return { x: x / len, y: y / len };
}

function recordMove(vec, dt) {
  if (!vec.x && !vec.y) return;
  state.moveSampleCd -= dt;
  if (state.moveSampleCd > 0) return;
  lastMoves.push(Math.abs(vec.x) > Math.abs(vec.y) ? (vec.x < 0 ? "left" : "right") : (vec.y < 0 ? "up" : "down"));
  if (lastMoves.length > 16) lastMoves.shift();
  state.moveSampleCd = 0.08;
}

function triggerDash() {
  if (!state.running || player.dashCd > 0) return;
  const vec = inputVector();
  const dir = vec.x || vec.y ? vec : player.dir;
  if (!dir.x && !dir.y) return;
  player.dashDir = dir;
  player.dashTime = 0.14;
  player.dashCd = DASH_CD;
  player.invuln = 0.18;
  player.dashes += 1;
  burst(player.x + player.size / 2, player.y + player.size / 2, "#7cf6ff", 12, 210);
  setAction("Dash detected", "Subject burst movement logged.");
  playTone("dash");
}

function movePlayer(dt) {
  const vec = inputVector();
  if (vec.x || vec.y) {
    player.dir = vec;
    recordMove(vec, dt);
  }
  let active = vec, speed = player.baseSpeed;
  if (player.dashTime > 0) {
    active = player.dashDir;
    speed = 690;
    player.dashTime = Math.max(0, player.dashTime - dt);
  }
  player.x += active.x * speed * dt;
  player.y += active.y * speed * dt;
  if (active.x || active.y) player.trail.push({ x: player.x + player.size / 2, y: player.y + player.size / 2, life: player.dashTime > 0 ? 0.22 : 0.15, size: player.dashTime > 0 ? player.size * 0.95 : player.size * 0.55 });
  if (player.trail.length > 18) player.trail.shift();
  player.trail = player.trail.filter(t => (t.life -= dt) > 0);
  player.dashCd = Math.max(0, player.dashCd - dt);
  player.invuln = Math.max(0, player.invuln - dt);
  clampActors();
}

function predict() {
  if (!lastMoves.length) return predictedMove = "none";
  const weight = { up: 0, down: 0, left: 0, right: 0 };
  lastMoves.forEach((m, i) => weight[m] += i + 1);
  predictedMove = Object.keys(weight).reduce((best, m) => weight[m] > weight[best] ? m : best, "up");
}

function classify() {
  const h = lastMoves.filter(m => m === "left" || m === "right").length;
  const v = lastMoves.length - h;
  const edge = Math.min(player.x, player.y, canvas.width - player.x - player.size, canvas.height - player.y - player.size);
  let switches = 0;
  for (let i = 1; i < lastMoves.length; i += 1) if (lastMoves[i] !== lastMoves[i - 1]) switches += 1;
  playerType = player.health < 30 ? "Desperate" : edge < 46 ? "Wall Hugger" : switches >= Math.max(4, Math.floor(lastMoves.length * 0.6)) ? "Erratic" : player.dashes >= Math.max(2, Math.floor(state.time / 14)) ? "Hyper-mobile" : Math.abs(h - v) >= 4 ? "Lane Runner" : "Adaptive";
}

function getProfile() {
  const profiles = {
    Adaptive: { trapRate: 1, pulseRate: 1, specialRate: 1, lead: 1, special: "predictive" },
    "Wall Hugger": { trapRate: 0.9, pulseRate: 1.08, specialRate: 0.88, lead: 1.14, special: "edge" },
    Erratic: { trapRate: 0.92, pulseRate: 0.98, specialRate: 0.82, lead: 0.82, special: "scatter" },
    "Hyper-mobile": { trapRate: 1.08, pulseRate: 0.75, specialRate: 0.74, lead: 1.18, special: "twinPulse" },
    "Lane Runner": { trapRate: 1.04, pulseRate: 1.1, specialRate: 0.78, lead: 1.22, special: "lane" },
    Desperate: { trapRate: 0.82, pulseRate: 0.68, specialRate: 0.62, lead: 1.28, special: "pressure" }
  };
  return profiles[playerType] || profiles.Adaptive;
}

function activateFinalCore() {
  if (finalCore.active) return;
  finalCore.active = true;
  finalCore.charge = 0;
  finalCore.vulnerable = false;
  finalCore.upload = 0;
  showMessage("Ascension phase. Gather breach shards to expose the core.");
  setAction("Core breach protocol", "The arena is exposing its central intelligence.");
  playTone("phase");
}

function updatePhase() {
  const phase = PHASES.filter(p => state.time >= p.start).pop() || PHASES[0];
  if (state.phase !== phase.name) {
    showMessage(`Phase shift: ${phase.name}. ${phase.action}.`);
    if (phase.final) activateFinalCore();
    else playTone("phase");
  }
  state.phase = phase.name;
  state.phaseIndex = PHASES.findIndex(p => p.name === phase.name);
  state.difficulty = Number(((phase.diff + (100 - player.health) / 125 + Math.min(echoes.length * 0.04, 0.22)) * challengeFactor()).toFixed(2));
}

function target(offset = 90 + state.phaseIndex * 35) {
  const profile = getProfile();
  let x = player.x + player.size / 2, y = player.y + player.size / 2;
  const lead = offset * profile.lead;
  if (predictedMove === "left") x -= lead;
  else if (predictedMove === "right") x += lead;
  else if (predictedMove === "up") y -= lead;
  else if (predictedMove === "down") y += lead;
  if (playerType === "Erratic") {
    x += rand(-44, 44);
    y += rand(-44, 44);
  }
  return { x: clamp(x, 36, canvas.width - 36), y: clamp(y, 36, canvas.height - 36) };
}

function moveEnemy(dt) {
  const evolution = getHunterEvolution();
  const aim = state.phase === "Ascension" && finalCore.vulnerable ? { x: finalCore.x, y: finalCore.y } : target();
  const cx = enemy.x + enemy.size / 2, cy = enemy.y + enemy.size / 2;
  const follow = 0.018 * (dt * 60) * (1 + state.phaseIndex * 0.22) * evolution.follow;
  const orbitAngle = state.time * (1.4 + evolution.tier * 0.24) + progress.selectedLevel * 0.35;
  enemy.speed += (90 + state.phaseIndex * 26 + state.difficulty * 18 + evolution.speedBonus - enemy.speed) * 0.05;
  enemy.x += (aim.x - cx) * follow + Math.sin(state.time * evolution.swayX + state.phaseIndex) * evolution.weave + Math.cos(orbitAngle) * evolution.orbit;
  enemy.y += (aim.y - cy) * follow + Math.cos(state.time * evolution.swayY) * evolution.weave * 0.72 + Math.sin(orbitAngle) * evolution.orbit * 0.68;
  if (evolution.snap > 0 && Math.random() < evolution.snap * dt) {
    enemy.x += (aim.x - cx) * 0.18;
    enemy.y += (aim.y - cy) * 0.18;
    burst(cx, cy, evolution.glow, 4, 90);
  }
  clampActors();
}

function pushTrap(x, y, options = {}) {
  const size = options.size || 48 + state.phaseIndex * 4;
  traps.push({
    x: clamp(x - size / 2, 20, canvas.width - size - 20),
    y: clamp(y - size / 2, 20, canvas.height - size - 20),
    size,
    kind: options.kind || "predictive",
    mode: "warning",
    charge: options.charge || Math.max(0.35, 0.8 - state.phaseIndex * 0.08),
    life: options.life || 2.6 + state.phaseIndex * 0.4,
    spin: rand(0, Math.PI * 2),
    hitCd: 0
  });
  if (traps.length > 14) traps.shift();
}

function spawnTrap() {
  const aim = target(110 + state.phaseIndex * 28);
  const spread = 20 + state.phaseIndex * 12;
  pushTrap(aim.x + rand(-spread, spread), aim.y + rand(-spread, spread));
  setAction("Predictive trap", "CEREBRA sealed your most likely route.");
}

function spawnScatterTraps() {
  const aim = target(72);
  for (let i = 0; i < 3; i += 1) pushTrap(aim.x + rand(-90, 90), aim.y + rand(-90, 90), { kind: "scatter", size: 44, charge: 0.55 });
  setAction("Scatter analysis", "CEREBRA widened the prediction cone.");
}

function spawnEdgeTraps() {
  const edges = [
    { wall: "top", value: player.y },
    { wall: "bottom", value: canvas.height - (player.y + player.size) },
    { wall: "left", value: player.x },
    { wall: "right", value: canvas.width - (player.x + player.size) }
  ];
  const nearest = edges.sort((a, b) => a.value - b.value)[0].wall;
  if (nearest === "top" || nearest === "bottom") {
    const y = nearest === "top" ? 56 : canvas.height - 56;
    pushTrap(player.x + player.size / 2 - 70, y, { kind: "edge", size: 40, charge: 0.42, life: 3.4 });
    pushTrap(player.x + player.size / 2 + 70, y, { kind: "edge", size: 40, charge: 0.42, life: 3.4 });
  } else {
    const x = nearest === "left" ? 56 : canvas.width - 56;
    pushTrap(x, player.y + player.size / 2 - 70, { kind: "edge", size: 40, charge: 0.42, life: 3.4 });
    pushTrap(x, player.y + player.size / 2 + 70, { kind: "edge", size: 40, charge: 0.42, life: 3.4 });
  }
  setAction("Perimeter denial", "Wall hugging path compromised.");
}

function spawnLaneStrike() {
  const horizontalMoves = lastMoves.filter(m => m === "left" || m === "right").length;
  const verticalMoves = Math.max(1, lastMoves.length - horizontalMoves);
  const axis = horizontalMoves >= verticalMoves ? "y" : "x";
  beams.push({
    axis,
    pos: axis === "y" ? clamp(player.y + player.size / 2, 48, canvas.height - 48) : clamp(player.x + player.size / 2, 48, canvas.width - 48),
    width: 56 + state.phaseIndex * 4,
    mode: "warning",
    charge: 0.62,
    life: 0.5,
    hit: false
  });
  setAction("Lane strike", "Your favorite corridor has been marked.");
}

function updateTraps(dt) {
  traps = traps.filter(t => {
    t.spin += dt * (t.mode === "warning" ? 1.8 : 4.5);
    t.hitCd = Math.max(0, t.hitCd - dt);
    if (t.mode === "warning") {
      t.charge -= dt;
      if (t.charge <= 0) {
        t.mode = "active";
        burst(t.x + t.size / 2, t.y + t.size / 2, t.kind === "edge" ? "#ffd166" : "#ff5aa0", 8, 120);
      }
      return true;
    }
    t.life -= dt;
    return t.life > 0;
  });
}

function spawnPulse(count = 1, speedBoost = 0) {
  for (let i = 0; i < count; i += 1) {
    pulses.push({
      x: enemy.x + enemy.size / 2,
      y: enemy.y + enemy.size / 2,
      r: enemy.size * 0.55 + i * 22,
      speed: (210 + state.phaseIndex * 48 + speedBoost) * challengeFactor(),
      max: Math.min(canvas.width, canvas.height) * 0.52 + state.phaseIndex * 24,
      thick: 16 + state.phaseIndex * 2,
      hit: false
    });
  }
  setAction("Wave cast", count > 1 ? "Twin pressure waves emitted." : "Pressure wave emitted. Time your dash.");
}

function updatePulses(dt) {
  pulses = pulses.filter(p => (p.r += p.speed * dt) < p.max);
}

function updateBeams(dt) {
  beams = beams.filter(beam => {
    if (beam.mode === "warning") {
      beam.charge -= dt;
      if (beam.charge <= 0) beam.mode = "active";
      return true;
    }
    beam.life -= dt;
    return beam.life > 0;
  });
}

function triggerLightning(intensity = 0.22) {
  storm.flash = Math.max(storm.flash, intensity);
  storm.rumble = Math.max(storm.rumble, intensity * 1.4);
  state.flash = Math.max(state.flash, intensity * 0.7);
  state.shake = Math.min(18, state.shake + 2.2 * intensity * 10 * motionFactor());
  playThunder(intensity);
}

function pushWallSegment(x, y, w, h, label = "route collapse") {
  dungeonWalls.push({
    x: clamp(x, 20, canvas.width - w - 20),
    y: clamp(y, 20, canvas.height - h - 20),
    w,
    h,
    label,
    mode: "warning",
    charge: 0.85,
    life: 6.4,
    hitCd: 0
  });
  if (dungeonWalls.length > 10) dungeonWalls.shift();
}

function spawnDungeonShift() {
  const horizontalBias = lastMoves.filter(move => move === "left" || move === "right").length >= Math.max(1, lastMoves.length / 2);
  const gapSize = 120;
  const corridor = horizontalBias
    ? { axis: "x", wall: clamp(player.x + player.size / 2 + rand(-100, 100), 90, canvas.width - 90), gap: clamp(player.y + player.size / 2 + rand(140, 220), 120, canvas.height - 120) }
    : { axis: "y", wall: clamp(player.y + player.size / 2 + rand(-100, 100), 90, canvas.height - 90), gap: clamp(player.x + player.size / 2 + rand(140, 220), 120, canvas.width - 120) };
  if (corridor.axis === "x") {
    pushWallSegment(corridor.wall - 18, 54, 36, Math.max(40, corridor.gap - gapSize * 0.5 - 54), "safe lane revoked");
    pushWallSegment(corridor.wall - 18, corridor.gap + gapSize * 0.5, 36, Math.max(40, canvas.height - corridor.gap - gapSize * 0.5 - 54), "safe lane revoked");
  } else {
    pushWallSegment(54, corridor.wall - 18, Math.max(40, corridor.gap - gapSize * 0.5 - 54), 36, "route severed");
    pushWallSegment(corridor.gap + gapSize * 0.5, corridor.wall - 18, Math.max(40, canvas.width - corridor.gap - gapSize * 0.5 - 54), 36, "route severed");
  }
  setAction("Dungeon shift", "CEREBRA reshaped the arena around your habit.");
}

function updateDungeonWalls(dt) {
  dungeonWalls = dungeonWalls.filter(wall => {
    wall.hitCd = Math.max(0, wall.hitCd - dt);
    if (wall.mode === "warning") {
      wall.charge -= dt;
      if (wall.charge <= 0) wall.mode = "solid";
      return true;
    }
    wall.life -= dt;
    return wall.life > 0;
  });
}

function resolveWallCollision(rect, wall, dt) {
  const actor = { x: rect.x, y: rect.y, size: rect.size };
  const segment = { x: wall.x, y: wall.y, size: 0, w: wall.w, h: wall.h };
  const overlaps = actor.x < segment.x + segment.w && actor.x + actor.size > segment.x && actor.y < segment.y + segment.h && actor.y + actor.size > segment.y;
  if (!overlaps) return false;
  const left = actor.x + actor.size - segment.x;
  const right = segment.x + segment.w - actor.x;
  const top = actor.y + actor.size - segment.y;
  const bottom = segment.y + segment.h - actor.y;
  const push = Math.min(left, right, top, bottom);
  if (push === left) rect.x -= left;
  else if (push === right) rect.x += right;
  else if (push === top) rect.y -= top;
  else rect.y += bottom;
  clampActors();
  if (wall.hitCd <= 0) {
    wall.hitCd = 0.45;
    drain((6 + state.phaseIndex) * dt * 10);
    showMessage(`Shifting wall engaged: ${wall.label}.`);
  }
  return true;
}

function updatePsychology(dt, vec) {
  const danger = 1 - clamp(dist(player.x, player.y, enemy.x, enemy.y) / Math.max(canvas.width, canvas.height), 0, 1);
  psychology.stillness = vec.x || vec.y ? 0 : psychology.stillness + dt;
  const switches = lastMoves.reduce((count, move, index) => count + (index > 0 && move !== lastMoves[index - 1] ? 1 : 0), 0);
  psychology.panic = clamp(psychology.panic + ((switches > 8 ? 0.55 : -0.28) + danger * 0.7) * dt, 0, 1);
  psychology.hesitation = clamp(psychology.hesitation + ((psychology.stillness > 1.3 ? 0.6 : -0.35) + danger * 0.35) * dt, 0, 1);
  psychology.repetition = clamp(psychology.repetition + ((predictedMove !== "none" && playerType !== "Erratic" ? 0.44 : -0.24) + Math.max(0, 0.55 - switches * 0.05)) * dt, 0, 1);
  psychology.tauntCd -= dt;
  psychology.jumpCd -= dt;
  if (psychology.panic > 0.82 && psychology.tauntCd <= 0) {
    showMessage("Increasing pressure. Panic makes your route brighter.");
    psychology.tauntCd = 6;
    state.shake = Math.min(18, state.shake + 5 * motionFactor());
    spawnPulse(1, 35);
  } else if (psychology.repetition > 0.78 && psychology.tauntCd <= 0) {
    showMessage("You are repeating yourself. Let me help you fail.");
    psychology.tauntCd = 6.4;
    spawnDungeonShift();
  } else if (psychology.hesitation > 0.72 && psychology.jumpCd <= 0 && danger > 0.45) {
    showMessage("You slowed down. I noticed.");
    psychology.jumpCd = 8.5;
    triggerLightning(0.28);
  }
}

function safePoint() {
  let p = { x: canvas.width * 0.5, y: canvas.height * 0.5 };
  for (let i = 0; i < 12; i += 1) {
    p = { x: rand(56, canvas.width - 56), y: rand(70, canvas.height - 56) };
    if (dist(p.x, p.y, enemy.x, enemy.y) > 180 && dist(p.x, p.y, player.x + player.size / 2, player.y + player.size / 2) > 90) break;
  }
  return p;
}

function spawnReward(kind = "coin", point = safePoint()) {
  rewards.push({
    x: point.x,
    y: point.y,
    kind,
    size: kind === "diamond" ? 14 : 9,
    life: kind === "diamond" ? 14 : 10,
    pulse: rand(0, Math.PI * 2)
  });
}

function spawnRewardWave() {
  const center = safePoint();
  const coinCount = clamp(4 + Math.floor(progress.selectedLevel / 3), 4, 10);
  for (let index = 0; index < coinCount; index += 1) {
    spawnReward("coin", {
      x: clamp(center.x + rand(-110, 110), 48, canvas.width - 48),
      y: clamp(center.y + rand(-90, 90), 60, canvas.height - 52)
    });
  }
  spawnReward("diamond", {
    x: clamp(center.x + rand(-36, 36), 52, canvas.width - 52),
    y: clamp(center.y + rand(-36, 36), 64, canvas.height - 56)
  });
  showMessage("Reward rush: coins and a diamond just spawned.");
  setAction("Reward lane opened", "Collect the rush drops while the hunter adapts.");
}

function spawnShard(initial = false, kind = "heal") {
  const p = kind === "core"
    ? { x: rand(canvas.width * 0.22, canvas.width * 0.78), y: rand(canvas.height * 0.2, canvas.height * 0.72) }
    : safePoint();
  shards.push({ x: p.x, y: p.y, kind, size: kind === "core" ? 16 : initial ? 11 : 13, life: kind === "core" ? 18 : 10, pulse: rand(0, Math.PI * 2) });
}

function updateShards(dt) {
  shards = shards.filter(s => {
    s.life -= dt;
    s.pulse += dt * 3.4;
    return s.life > 0;
  });
}

function updateRewards(dt) {
  rewards = rewards.filter(reward => {
    reward.life -= dt;
    reward.pulse += dt * (reward.kind === "diamond" ? 4.8 : 6);
    return reward.life > 0;
  });
}

function burst(x, y, color, count, speed) {
  const scaledCount = Math.max(4, Math.round(count * motionFactor()));
  for (let i = 0; i < scaledCount; i += 1) {
    const a = rand(0, Math.PI * 2), v = rand(speed * 0.35, speed);
    particles.push({ x, y, vx: Math.cos(a) * v, vy: Math.sin(a) * v, life: rand(0.18, 0.55), size: rand(2, 5), color });
  }
}

function updateParticles(dt) {
  particles = particles.filter(p => {
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.vx *= 0.985;
    p.vy *= 0.985;
    p.life -= dt;
    return p.life > 0;
  });
}

function spawnAdaptiveAttack() {
  const profile = getProfile();
  if (state.phase === "Ascension" && finalCore.vulnerable) {
    spawnLaneStrike();
    spawnPulse(1, 55);
    if (Math.random() > 0.45) spawnDungeonShift();
    return;
  }
  switch (profile.special) {
    case "edge":
      spawnEdgeTraps();
      break;
    case "scatter":
      spawnScatterTraps();
      break;
    case "twinPulse":
      spawnPulse(2, 35);
      break;
    case "lane":
      spawnLaneStrike();
      break;
    case "pressure":
      spawnPulse(2, 65);
      spawnTrap();
      break;
    default:
      spawnTrap();
      break;
  }
  if (progress.selectedLevel >= 8 && Math.random() > 0.5) spawnDungeonShift();
}

function updateFinalCore(dt) {
  if (!finalCore.active) return;
  finalCore.pulse += dt * (settings.reducedMotion ? 1.4 : 2.8);
  const coreShards = shards.filter(shard => shard.kind === "core").length;
  if (!finalCore.vulnerable && coreShards < 1) spawnShard(false, "core");
  if (!finalCore.vulnerable && finalCore.charge >= finalCore.target) {
    finalCore.vulnerable = true;
    finalCore.upload = 0;
    showMessage("Core exposed. Stay inside the breach ring to upload.");
    setAction("Core exposed", "Hold the center while the boss panics.");
  }
  if (!finalCore.vulnerable) return;
  const px = player.x + player.size / 2;
  const py = player.y + player.size / 2;
  const inside = dist(px, py, finalCore.x, finalCore.y) < finalCore.radius * 0.86;
  if (inside) finalCore.upload = clamp(finalCore.upload + dt, 0, FINAL_UPLOAD_TIME);
  else finalCore.upload = clamp(finalCore.upload - dt * 0.5, 0, FINAL_UPLOAD_TIME);
  if (finalCore.upload >= FINAL_UPLOAD_TIME) finishRun(true);
}

function drain(amount) {
  player.health = clamp(player.health - amount, 0, 100);
  runStats.damageTaken += amount;
  state.flash = Math.max(state.flash, 0.08);
}

function hit(amount, message) {
  if (player.invuln > 0) return;
  player.health = clamp(player.health - amount, 0, 100);
  player.invuln = 0.22;
  state.flash = Math.max(state.flash, 0.22);
  state.shake = Math.min(18, state.shake + 6 * motionFactor());
  triggerLightning(0.2);
  burst(player.x + player.size / 2, player.y + player.size / 2, "#ff5879", 14, 180);
  playTone("hit");
  if (message) showMessage(message);
}

function collisions(dt) {
  const px = player.x + player.size / 2, py = player.y + player.size / 2, ex = enemy.x + enemy.size / 2, ey = enemy.y + enemy.size / 2;
  dungeonWalls.forEach(wall => {
    if (wall.mode === "solid") resolveWallCollision(player, wall, dt);
  });
  if (dist(px, py, ex, ey) < (player.size + enemy.size) * 0.62) {
    lastDamageSource = "Hunter contact";
    drain((16 + state.phaseIndex * 4) * dt);
    state.shake = Math.min(12, state.shake + 0.6 * motionFactor());
    if (state.hitToastCd <= 0) {
      showMessage("Hunter contact. Break away.");
      state.hitToastCd = 0.8;
      triggerLightning(0.18);
    }
  }
  traps.forEach(t => {
    if (t.mode === "active" && overlap(player, t)) {
      lastDamageSource = t.kind === "edge" ? "Perimeter denial trap" : "Predictive trap";
      runStats.trapsTaken += dt;
      drain((13 + state.phaseIndex * 3) * dt);
      if (t.hitCd <= 0) {
        t.hitCd = 0.8;
        showMessage(t.kind === "edge" ? "Perimeter trap connected." : "Predictive trap connected.");
      }
    }
  });
  echoes.forEach(e => {
    if (dist(px, py, e.x, e.y) < e.radius) {
      lastDamageSource = "Memory echo field";
      runStats.echoesTouched += dt;
      drain((5 + state.phaseIndex) * dt);
      if (!e.warned) {
        e.warned = true;
        showMessage("A past failure is corrupting the arena.");
      }
    }
  });
  pulses.forEach(p => {
    if (!p.hit && Math.abs(dist(px, py, p.x, p.y) - p.r) < p.thick + player.size * 0.4) {
      p.hit = true;
      lastDamageSource = "Pressure wave";
      runStats.pulsesTaken += 1;
      hit(11 + state.phaseIndex * 3, "Wave impact. Dash through the next one.");
    }
  });
  beams.forEach(beam => {
    if (beam.mode !== "active" || beam.hit) return;
    const inBeam = beam.axis === "x"
      ? Math.abs(px - beam.pos) < beam.width * 0.5 + player.size * 0.35
      : Math.abs(py - beam.pos) < beam.width * 0.5 + player.size * 0.35;
    if (inBeam) {
      beam.hit = true;
      lastDamageSource = "Lane strike";
      runStats.beamHits += 1;
      hit(16 + state.phaseIndex * 3, "Lane strike locked onto your route.");
    }
  });
  shards = shards.filter(s => {
    if (dist(px, py, s.x, s.y) < player.size + s.size + 6) {
      state.shards += 1;
      if (s.kind === "core") {
        finalCore.charge += 1;
        runStats.coreShards += 1;
        burst(s.x, s.y, "#ffd166", 14, 160);
        setAction("Breach shard captured", `Core charge ${finalCore.charge}/${finalCore.target}.`);
      } else {
        player.health = clamp(player.health + 10, 0, 100);
        burst(s.x, s.y, "#6ce8ff", 12, 160);
        setAction("Data secured", "Shard captured. Vitality restored.");
      }
      playTone("shard");
      return false;
    }
    return true;
  });
  rewards = rewards.filter(reward => {
    if (dist(px, py, reward.x, reward.y) < player.size + reward.size + 10) {
      if (reward.kind === "diamond") {
        state.diamonds += 1;
        burst(reward.x, reward.y, "#ffd166", 16, 180);
        setAction("Diamond captured", `Diamonds banked: ${state.diamonds}.`);
      } else {
        state.coins += 1;
        burst(reward.x, reward.y, "#ffe58c", 8, 120);
      }
      playTone("shard");
      return false;
    }
    return true;
  });
  state.hitToastCd = Math.max(0, state.hitToastCd - dt);
}

function updateObjective() {
  const config = getLevelConfig();
  const cycle = (config.level - 1) % 20;
  if (finalCore.vulnerable) {
    state.objective = config.fullUpload
      ? `Objective: Hold the breach ring ${finalCore.upload.toFixed(1)} / ${FINAL_UPLOAD_TIME.toFixed(1)}s`
      : `Objective: Core exposed. Stay alive or hold for bonus pressure relief.`;
    return;
  }
  if (finalCore.active) {
    state.objective = `Objective: Gather breach shards ${finalCore.charge}/${finalCore.target}`;
    return;
  }
  if (cycle < 5) {
    state.objective = `Objective: Survive ${Math.max(0, Math.ceil(18 + config.level * 4 - state.time))}s more`;
    return;
  }
  if (cycle < 10) {
    state.objective = `Objective: Reach ${PHASES[config.requiredPhaseIndex].name} and collect ${config.healShardTarget} shards`;
    return;
  }
  if (cycle < 15) {
    state.objective = `Objective: Hold through ${PHASES[config.requiredPhaseIndex].name} until ${Math.round(44 + config.level * 2.4)}s`;
    return;
  }
  const nextPhase = PHASES[state.phaseIndex + 1];
  state.objective = nextPhase
    ? `Objective: Survive until ${nextPhase.name} (${Math.max(0, Math.ceil(nextPhase.start - state.time))}s)`
    : config.goalText.replace(/^Goal:\s*/, "Objective: ");
}

function updateAI(dt) {
  updatePhase();
  updateObjective();
  const profile = getProfile();
  const challenge = challengeFactor();
  state.trapCd -= dt;
  state.pulseCd -= dt;
  state.shardCd -= dt;
  state.specialCd -= dt;
  if (state.actionCd > 0) state.actionCd -= dt;
  else state.action = PHASES[state.phaseIndex].action;
  if (state.time > 3 && state.trapCd <= 0) {
    spawnTrap();
    state.trapCd = Math.max(1.1, ((3.4 - state.phaseIndex * 0.48) * profile.trapRate) / challenge);
  }
  if (state.time > 8 && state.pulseCd <= 0) {
    spawnPulse(1, profile.special === "pressure" ? 50 : 0);
    state.pulseCd = Math.max(2.8, ((6.8 - state.phaseIndex * 0.95) * profile.pulseRate) / challenge);
  }
  if (state.time > 12 && state.specialCd <= 0) {
    spawnAdaptiveAttack();
    state.specialCd = Math.max(2.6, ((6 - state.phaseIndex * 0.65) * profile.specialRate) / challenge);
  }
  if (state.shardCd <= 0 && shards.filter(shard => shard.kind !== "core").length < 3 && !finalCore.vulnerable) {
    spawnShard(false, "heal");
    state.shardCd = Math.max(3.2, 6 - state.phaseIndex * 0.7);
  }
  state.rewardCd -= dt;
  if (state.rewardCd <= 0) {
    spawnRewardWave();
    state.rewardCd = 10;
  }
}

function update(dt) {
  state.time += dt;
  state.flash = Math.max(0, state.flash - dt * 1.7);
  state.shake = Math.max(0, state.shake - dt * 18);
  storm.flash = Math.max(0, storm.flash - dt * 1.9);
  storm.rumble = Math.max(0, storm.rumble - dt * 1.5);
  storm.cooldown -= dt;
  const vec = inputVector();
  movePlayer(dt);
  predict();
  classify();
  updatePsychology(dt, vec);
  const dangerLevel = clamp(
    (1 - clamp(dist(player.x, player.y, enemy.x, enemy.y) / Math.max(canvas.width, canvas.height), 0, 1)) * 0.65 +
    (1 - player.health / 100) * 0.35,
    0,
    1
  );
  moveEnemy(dt);
  updateAI(dt);
  updateTraps(dt);
  updatePulses(dt);
  updateBeams(dt);
  updateDungeonWalls(dt);
  updateShards(dt);
  updateRewards(dt);
  updateParticles(dt);
  updateFinalCore(dt);
  collisions(dt);
  updateSoundDesign(dt, dangerLevel, vec);
  if (!settings.reducedMotion && storm.cooldown <= 0) {
    triggerLightning(0.16 + Math.random() * 0.1);
    storm.cooldown = rand(6, 11);
  }
  state.score = Math.floor(state.time * 40) + state.shards * 170 + state.coins * 35 + state.diamonds * 180 + Math.floor(player.health * 1.8) + Math.floor(finalCore.upload * 120);
  if (!state.won && isLevelComplete()) {
    finishRun(true);
    return;
  }
  if (player.health <= 0) finishRun(false);
}

function bg() {
  const arenaPalette = settings.arena === "fracture"
    ? { inner: "#0d241a", mid: "#081610", outer: "#030806", grid: "rgba(139,255,224,0.08)" }
    : settings.arena === "eclipse"
      ? { inner: "#241022", mid: "#120a18", outer: "#060309", grid: "rgba(255,140,99,0.08)" }
      : { inner: "#0c1830", mid: "#091122", outer: "#030610", grid: "rgba(124,246,255,0.08)" };
  const g = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.45, 40, canvas.width * 0.5, canvas.height * 0.5, Math.max(canvas.width, canvas.height) * 0.66);
  g.addColorStop(0, arenaPalette.inner);
  g.addColorStop(0.45, arenaPalette.mid);
  g.addColorStop(1, arenaPalette.outer);
  ctx.fillStyle = g;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let arch = 0; arch < 4; arch += 1) {
    const width = canvas.width * (0.2 + arch * 0.18);
    const height = canvas.height * (0.18 + arch * 0.1);
    ctx.fillStyle = `rgba(0, 0, 0, ${0.08 + arch * 0.04})`;
    ctx.beginPath();
    ctx.ellipse(canvas.width * 0.5, canvas.height * (0.16 + arch * 0.08), width, height, 0, Math.PI, 0, true);
    ctx.fill();
  }
  stars.forEach(s => {
    ctx.fillStyle = `rgba(160,214,255,${0.45 + Math.sin(state.time * 1.4 + s.t) * 0.35})`;
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
    ctx.fill();
  });
  const gap = 64, ox = (state.time * 18) % gap, oy = (state.time * 10) % gap;
  ctx.strokeStyle = arenaPalette.grid;
  ctx.lineWidth = 1;
  for (let x = -gap; x < canvas.width + gap; x += gap) { ctx.beginPath(); ctx.moveTo(x + ox, 0); ctx.lineTo(x + ox, canvas.height); ctx.stroke(); }
  for (let y = -gap; y < canvas.height + gap; y += gap) { ctx.beginPath(); ctx.moveTo(0, y + oy); ctx.lineTo(canvas.width, y + oy); ctx.stroke(); }
  for (let depth = 0; depth < 7; depth += 1) {
    const inset = 32 + depth * 38;
    ctx.strokeStyle = `rgba(255,255,255,${0.015 + depth * 0.01})`;
    ctx.strokeRect(inset, inset * 0.74, canvas.width - inset * 2, canvas.height - inset * 1.48);
  }
  if (predictedMove !== "none") {
    const t = target(), pulse = 12 + Math.sin(state.time * 5) * 4 * motionFactor();
    ctx.save();
    ctx.translate(t.x, t.y);
    ctx.strokeStyle = "rgba(255,88,121,0.35)";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(0, 0, 24 + pulse, 0, Math.PI * 2); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(-14, 0); ctx.lineTo(14, 0); ctx.moveTo(0, -14); ctx.lineTo(0, 14); ctx.stroke();
    ctx.restore();
  }
}

function drawEchoes() {
  echoes.forEach(e => {
    const r = e.radius + Math.sin(state.time * 2.4 + e.phase) * 8 * motionFactor();
    const g = ctx.createRadialGradient(e.x, e.y, 0, e.x, e.y, r);
    g.addColorStop(0, "rgba(255,88,121,0.16)");
    g.addColorStop(0.65, "rgba(255,88,121,0.06)");
    g.addColorStop(1, "rgba(255,88,121,0)");
    ctx.fillStyle = g;
    ctx.beginPath(); ctx.arc(e.x, e.y, r, 0, Math.PI * 2); ctx.fill();
    ctx.strokeStyle = "rgba(255,88,121,0.24)";
    ctx.lineWidth = 1.5;
    ctx.beginPath(); ctx.arc(e.x, e.y, r, 0, Math.PI * 2); ctx.stroke();
  });
}

function drawShards() {
  shards.forEach(s => {
    ctx.save();
    ctx.translate(s.x, s.y);
    ctx.rotate(s.pulse * 0.45);
    ctx.shadowBlur = 20;
    ctx.shadowColor = s.kind === "core" ? "#ffd166" : "#6ce8ff";
    ctx.fillStyle = s.kind === "core" ? "rgba(255,209,102,0.92)" : "rgba(108,232,255,0.88)";
    ctx.beginPath();
    ctx.moveTo(0, -s.size);
    ctx.lineTo(s.size * 0.72, 0);
    ctx.lineTo(0, s.size);
    ctx.lineTo(-s.size * 0.72, 0);
    ctx.closePath();
    ctx.fill();
    ctx.restore();
  });
}

function drawRewards() {
  rewards.forEach(reward => {
    ctx.save();
    ctx.translate(reward.x, reward.y);
    ctx.rotate(reward.pulse * 0.28);
    if (reward.kind === "diamond") {
      ctx.shadowBlur = 24;
      ctx.shadowColor = "#ffd166";
      ctx.fillStyle = "rgba(255,209,102,0.95)";
      ctx.beginPath();
      ctx.moveTo(0, -reward.size);
      ctx.lineTo(reward.size * 0.62, 0);
      ctx.lineTo(0, reward.size);
      ctx.lineTo(-reward.size * 0.62, 0);
      ctx.closePath();
      ctx.fill();
    } else {
      ctx.shadowBlur = 16;
      ctx.shadowColor = "#ffe58c";
      ctx.fillStyle = "rgba(255,229,140,0.95)";
      ctx.beginPath();
      ctx.arc(0, 0, reward.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.fillStyle = "rgba(120,78,0,0.42)";
      ctx.beginPath();
      ctx.arc(0, 0, reward.size * 0.42, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();
  });
}

function drawPulses() {
  pulses.forEach(p => {
    ctx.strokeStyle = "rgba(255,209,102,0.45)";
    ctx.lineWidth = p.thick * 0.25;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
    ctx.stroke();
  });
}

function drawBeams() {
  beams.forEach(beam => {
    ctx.save();
    ctx.fillStyle = beam.mode === "warning" ? "rgba(255,209,102,0.16)" : "rgba(255,88,121,0.26)";
    if (beam.axis === "x") ctx.fillRect(beam.pos - beam.width * 0.5, 0, beam.width, canvas.height);
    else ctx.fillRect(0, beam.pos - beam.width * 0.5, canvas.width, beam.width);
    ctx.restore();
  });
}

function drawDungeonWalls() {
  dungeonWalls.forEach(wall => {
    ctx.save();
    if (wall.mode === "warning") {
      ctx.fillStyle = "rgba(255, 209, 102, 0.12)";
      ctx.strokeStyle = "rgba(255, 209, 102, 0.55)";
      ctx.lineWidth = 2;
    } else {
      ctx.fillStyle = "rgba(24, 30, 42, 0.82)";
      ctx.strokeStyle = "rgba(124, 246, 255, 0.28)";
      ctx.lineWidth = 1.5;
      ctx.shadowBlur = 16;
      ctx.shadowColor = "rgba(0, 0, 0, 0.4)";
    }
    ctx.fillRect(wall.x, wall.y, wall.w, wall.h);
    ctx.strokeRect(wall.x, wall.y, wall.w, wall.h);
    ctx.restore();
  });
}

function drawTraps() {
  traps.forEach(t => {
    const cx = t.x + t.size / 2, cy = t.y + t.size / 2;
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(t.spin);
    if (t.mode === "warning") {
      ctx.strokeStyle = t.kind === "edge" ? "rgba(255,209,102,0.95)" : "rgba(255,144,188,0.95)";
      ctx.lineWidth = 2;
      ctx.strokeRect(-t.size * 0.5, -t.size * 0.5, t.size, t.size);
      ctx.strokeRect(-t.size * 0.34, -t.size * 0.34, t.size * 0.68, t.size * 0.68);
    } else {
      ctx.shadowBlur = 20;
      ctx.shadowColor = t.kind === "edge" ? "#ffd166" : "#ff5aa0";
      ctx.fillStyle = t.kind === "edge" ? "rgba(255,209,102,0.86)" : "rgba(255,90,160,0.86)";
      ctx.fillRect(-t.size * 0.5, -t.size * 0.5, t.size, t.size);
      ctx.strokeStyle = "rgba(255,255,255,0.34)";
      ctx.lineWidth = 2;
      ctx.beginPath(); ctx.moveTo(-t.size * 0.5, 0); ctx.lineTo(t.size * 0.5, 0); ctx.moveTo(0, -t.size * 0.5); ctx.lineTo(0, t.size * 0.5); ctx.stroke();
    }
    ctx.restore();
  });
}

function drawCore() {
  if (!finalCore.active) return;
  ctx.save();
  ctx.translate(finalCore.x, finalCore.y);
  const pulse = finalCore.radius + Math.sin(finalCore.pulse) * 6 * motionFactor();
  const g = ctx.createRadialGradient(0, 0, 0, 0, 0, pulse * 1.5);
  g.addColorStop(0, finalCore.vulnerable ? "rgba(255,209,102,0.26)" : "rgba(124,246,255,0.2)");
  g.addColorStop(1, "rgba(0,0,0,0)");
  ctx.fillStyle = g;
  ctx.beginPath();
  ctx.arc(0, 0, pulse * 1.5, 0, Math.PI * 2);
  ctx.fill();
  ctx.strokeStyle = finalCore.vulnerable ? "rgba(255,209,102,0.9)" : "rgba(124,246,255,0.55)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.arc(0, 0, pulse, 0, Math.PI * 2);
  ctx.stroke();
  ctx.strokeStyle = "rgba(255,255,255,0.35)";
  ctx.lineWidth = 5;
  ctx.beginPath();
  ctx.arc(0, 0, finalCore.radius + 16, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (finalCore.charge / finalCore.target));
  ctx.stroke();
  if (finalCore.vulnerable) {
    ctx.strokeStyle = "rgba(255,88,121,0.88)";
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.arc(0, 0, finalCore.radius + 30, -Math.PI / 2, -Math.PI / 2 + Math.PI * 2 * (finalCore.upload / FINAL_UPLOAD_TIME));
    ctx.stroke();
  }
  ctx.restore();
}

function drawPlayer() {
  player.trail.forEach(t => {
    ctx.save();
    ctx.globalAlpha = t.life * 1.6;
    ctx.fillStyle = "rgba(124,246,255,0.45)";
    ctx.beginPath(); ctx.arc(t.x, t.y, t.size * 0.45, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  });
  const cx = player.x + player.size / 2, cy = player.y + player.size / 2, ang = Math.atan2(player.dir.y, player.dir.x) + Math.PI / 2;
  ctx.save();
  ctx.translate(cx, cy);
  ctx.rotate(ang);
  ctx.shadowBlur = 22;
  ctx.shadowColor = "#7cf6ff";
  ctx.fillStyle = "#7cf6ff";
  ctx.beginPath(); ctx.moveTo(0, -player.size * 0.9); ctx.lineTo(player.size * 0.64, 0); ctx.lineTo(0, player.size * 0.9); ctx.lineTo(-player.size * 0.64, 0); ctx.closePath(); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#04203a";
  ctx.beginPath(); ctx.moveTo(0, -player.size * 0.38); ctx.lineTo(player.size * 0.28, 0); ctx.lineTo(0, player.size * 0.38); ctx.lineTo(-player.size * 0.28, 0); ctx.closePath(); ctx.fill();
  if (player.dashTime > 0) {
    ctx.strokeStyle = "rgba(124,246,255,0.75)";
    ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(0, 0, player.size * 1.25, 0, Math.PI * 2); ctx.stroke();
  }
  ctx.restore();
}

function drawEnemy() {
  const evolution = getHunterEvolution();
  const cx = enemy.x + enemy.size / 2, cy = enemy.y + enemy.size / 2, ang = Math.atan2(player.y + player.size / 2 - cy, player.x + player.size / 2 - cx);
  ctx.save();
  ctx.translate(cx, cy);
  ctx.shadowBlur = 24;
  ctx.shadowColor = evolution.glow;
  ctx.fillStyle = evolution.body;
  ctx.beginPath(); ctx.arc(0, 0, enemy.size * 0.52, 0, Math.PI * 2); ctx.fill();
  ctx.shadowBlur = 0;
  ctx.fillStyle = "#19040a";
  ctx.beginPath(); ctx.arc(0, 0, enemy.size * 0.28, 0, Math.PI * 2); ctx.fill();
  ctx.strokeStyle = evolution.glow;
  ctx.lineWidth = 2.5;
  ctx.beginPath();
  ctx.arc(0, 0, enemy.size * 0.72 + Math.sin(state.time * 4) * 2, 0, Math.PI * 2);
  ctx.stroke();
  ctx.rotate(ang);
  ctx.fillStyle = evolution.iris;
  ctx.beginPath(); ctx.ellipse(enemy.size * 0.1, 0, enemy.size * 0.18, enemy.size * 0.11, 0, 0, Math.PI * 2); ctx.fill();
  ctx.fillStyle = "#19040a";
  ctx.beginPath(); ctx.arc(enemy.size * 0.2, 0, enemy.size * 0.08, 0, Math.PI * 2); ctx.fill();
  ctx.restore();
}

function drawParticles() {
  particles.forEach(p => {
    ctx.save();
    ctx.globalAlpha = p.life * 1.8;
    ctx.fillStyle = p.color;
    ctx.beginPath(); ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2); ctx.fill();
    ctx.restore();
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const shake = settings.reducedMotion ? 0 : state.shake;
  const sx = shake > 0 ? rand(-shake, shake) : 0, sy = shake > 0 ? rand(-shake, shake) : 0;
  const px = player.x + player.size / 2;
  const py = player.y + player.size / 2;
  const enemyDx = enemy.x + enemy.size / 2 - px;
  const enemyDy = enemy.y + enemy.size / 2 - py;
  const chaseX = clamp(enemyDx / Math.max(canvas.width * 0.5, 1), -1, 1);
  const chaseY = clamp(enemyDy / Math.max(canvas.height * 0.5, 1), -1, 1);
  const camX = state.running ? (canvas.width * 0.5 - px) * 0.09 : 0;
  const camY = state.running ? (canvas.height * 0.48 - py) * 0.07 : 0;
  const skewX = settings.reducedMotion ? 0 : (player.dir.x || 0) * 0.08 + chaseX * 0.035;
  const skewY = settings.reducedMotion ? 0 : (player.dir.y || 0) * 0.04 + chaseY * 0.02;
  const rotation = settings.reducedMotion ? 0 : (player.dir.x || 0) * 0.035 + chaseX * 0.02;
  ctx.save();
  ctx.translate(canvas.width * 0.5 + sx, canvas.height * 0.5 + sy);
  ctx.rotate(rotation);
  ctx.transform(1, skewY, skewX, 1, 0, 0);
  const scaleX = canvas.width < 720 ? 1.03 : 1.08;
  const scaleY = canvas.height < 620 ? 1.02 : 1.05;
  ctx.scale(scaleX, scaleY);
  ctx.translate(-canvas.width * 0.5 + camX, -canvas.height * 0.5 + camY);
  bg();
  drawEchoes();
  drawCore();
  drawShards();
  drawRewards();
  drawPulses();
  drawBeams();
  drawDungeonWalls();
  drawTraps();
  drawEnemy();
  drawPlayer();
  drawParticles();
  ctx.fillStyle = "rgba(237,244,255,0.7)";
  ctx.font = '16px "Bahnschrift","Trebuchet MS",sans-serif';
  ctx.fillText(`Shards: ${state.shards}  Coins: ${state.coins}  Diamonds: ${state.diamonds}`, 24, canvas.height - 28);
  ctx.restore();
  const vignette = ctx.createRadialGradient(canvas.width * 0.5, canvas.height * 0.45, canvas.width * 0.1, canvas.width * 0.5, canvas.height * 0.5, canvas.width * 0.78);
  vignette.addColorStop(0, "rgba(0,0,0,0)");
  vignette.addColorStop(1, "rgba(0,0,0,0.45)");
  ctx.fillStyle = vignette;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  if (storm.rumble > 0) {
    ctx.fillStyle = `rgba(30, 40, 52, ${storm.rumble * 0.08})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  if (storm.flash > 0) {
    ctx.fillStyle = `rgba(235, 244, 255, ${storm.flash * 0.55})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
  if (state.flash > 0) {
    ctx.fillStyle = `rgba(255,88,121,${state.flash * 0.35})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}

function updateUI() {
  const hunter = getHunterEvolution();
  ui.score.textContent = state.score.toLocaleString();
  ui.best.textContent = Math.max(state.best, state.score).toLocaleString();
  ui.time.textContent = fmtTime(state.time);
  ui.phase.textContent = `Phase: ${state.phase}`;
  ui.type.textContent = `Type: ${playerType} / ${hunter.name}`;
  ui.prediction.textContent = `Prediction: ${predictedMove === "none" ? "scanning" : predictedMove}`;
  ui.action.textContent = `Action: ${state.action}`;
  ui.difficulty.textContent = `Difficulty: ${state.difficulty.toFixed(2)}x`;
  ui.memory.textContent = `Echoes: ${echoes.length}`;
  ui.objective.textContent = `${state.objective} | Next reward rush in ${Math.max(1, Math.ceil(state.rewardCd))}s`;
  ui.healthValue.textContent = Math.ceil(player.health);
  ui.healthFill.style.width = `${player.health}%`;
  const ready = clamp(1 - player.dashCd / DASH_CD, 0, 1);
  ui.dashFill.style.width = `${ready * 100}%`;
  ui.dashValue.textContent = player.dashCd > 0 ? `${player.dashCd.toFixed(1)}s` : "Ready";
  ui.pause.textContent = state.paused ? "Resume" : "Pause";
  ui.telemetryDetails.classList.toggle("hidden", state.running);
}

function loop(now) {
  if (!ctx) return;
  const dt = Math.min(0.033, (now - lastFrame) / 1000 || 0.016);
  lastFrame = now;
  if (state.running) update(dt);
  else {
    state.flash = Math.max(0, state.flash - dt * 1.7);
    state.shake = Math.max(0, state.shake - dt * 18);
    if (soundSystem.started) {
      soundSystem.sources.ambient.target = overlayMode === "home" ? 0.035 * (settings.volume / 100 ? 1 : 0) : 0.015;
      soundSystem.sources.heartbeat.target = 0;
      smoothAudioLevels(dt);
    }
  }
  draw();
  updateUI();
  requestAnimationFrame(loop);
}

function bindTouchControls() {
  document.querySelectorAll("[data-key]").forEach(button => {
    const release = () => {
      keys[button.dataset.key] = false;
    };
    button.addEventListener("pointerdown", e => {
      e.preventDefault();
      if (button.dataset.key === "Space") triggerDash();
      else keys[button.dataset.key] = true;
    });
    button.addEventListener("pointerup", release);
    button.addEventListener("pointercancel", release);
    button.addEventListener("pointerleave", release);
  });
}

function handleTutorialButton() {
  if (overlayMode === "terms") return;
  if (overlayMode === "gamesHub") {
    showHomeScreen();
    return;
  }
  if (overlayMode === "miniGame") {
    showGamesHub();
    return;
  }
  if (overlayMode === "tutorial") {
    if (state.over || state.won) showResultsScreen(state.won);
    else if (state.paused) setOverlay("Simulation paused", "Take a breath", "CEREBRA still remembers your last pattern. Resume when you are ready to push deeper.", "Resume");
    else showHomeScreen();
    return;
  }
  if (overlayMode === "generic" && (state.over || state.won)) {
    showHomeScreen();
    return;
  }
  if (overlayMode === "results") {
    showHomeScreen();
    return;
  }
  showTutorialScreen();
}

function shiftSelectedLevel(delta) {
  progress.selectedLevel = progress.unlockedLevel;
  updateLevelUI();
  showMessage(delta < 0 ? "Old levels stay cleared. The next level appears only after a win." : `Finish Level ${progress.unlockedLevel} to reveal Level ${progress.unlockedLevel + 1}.`);
}

function acceptTerms() {
  if (!ui.termsCheckbox.checked) {
    ui.termsError.classList.remove("hidden");
    return;
  }
  ui.termsError.classList.add("hidden");
  termsAccepted = true;
  localStorage.setItem(STORAGE.terms, "true");
  showHomeScreen();
}

function quitToHome() {
  state.running = false;
  state.paused = false;
  setMenuOpen(false);
  resetGame();
  showHomeScreen();
  showMessage("Simulation aborted. Returned to home.");
}

document.addEventListener("keydown", e => {
  if (["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "Space"].includes(e.code)) e.preventDefault();
  if (overlayMode === "miniGame") {
    if (!e.repeat && miniGames.active === "neuro-drive") {
      if (["ArrowLeft", "KeyA"].includes(e.code)) moveNeuroDrive("left");
      if (["ArrowRight", "KeyD"].includes(e.code)) moveNeuroDrive("right");
      if (["ArrowUp", "KeyW", "Space"].includes(e.code)) activateNeuroDriveBoost();
    }
    if (!e.repeat && miniGames.active === "chaos-runner") {
      if (["ArrowUp", "KeyW", "Space"].includes(e.code)) performChaosRunnerAction("jump");
      if (["ArrowDown", "KeyS", "ShiftLeft", "ShiftRight"].includes(e.code)) performChaosRunnerAction("duck");
    }
    if (e.code === "Escape") showGamesHub();
    return;
  }
  keys[e.code] = true;
  if (e.code === "Enter" && !state.running && !state.paused && ["home", "tutorial", "generic", "results"].includes(overlayMode)) startGame();
  if ((e.code === "Space" || e.code === "ShiftLeft" || e.code === "ShiftRight") && !e.repeat) triggerDash();
  if (e.code === "KeyR" && (state.over || state.won)) startGame();
  if (e.code === "KeyP" && !state.over && !state.won && (state.running || state.paused)) {
    if (state.paused) resumeGame();
    else pauseGame();
  }
  if (e.code === "Escape" && menuOpen) setMenuOpen(false);
});

document.addEventListener("keyup", e => keys[e.code] = false);
window.addEventListener("blur", () => keys = Object.create(null));
window.addEventListener("resize", resize);
window.addEventListener("pointerdown", startAudio, { passive: true });
window.addEventListener("keydown", startAudio, { passive: true });
ui.start.addEventListener("click", () => {
  if (state.paused) resumeGame();
  else startGame();
});
ui.tutorial.addEventListener("click", handleTutorialButton);
ui.otherGames.addEventListener("click", showGamesHub);
ui.restart.addEventListener("click", startGame);
ui.quitOverlay.addEventListener("click", quitToHome);
ui.viewResults.addEventListener("click", () => showResultsScreen(pendingResultsVictory));
ui.pause.addEventListener("click", () => {
  if (state.paused) resumeGame();
  else if (state.running) pauseGame();
});
ui.menuButton.addEventListener("click", () => setMenuOpen(!menuOpen));
ui.helpButton.addEventListener("click", () => {
  setMenuOpen(false);
  showTutorialScreen();
  ui.overlayEyebrow.textContent = "Help and troubleshooting";
  ui.overlayTitle.textContent = "Need help inside the dungeon?";
  ui.overlayText.textContent = "If movement feels hard, reduce motion, lower difficulty, switch arena theme, or reset AI memory to clear old echo hazards before your next run.";
});
ui.quitButton.addEventListener("click", quitToHome);
if (ui.fallbackHome) ui.fallbackHome.addEventListener("click", () => {
  ui.canvasFallback.classList.add("hidden");
  showHomeScreen();
});
const handleThemeToggle = () => {
  settings.theme = settings.theme === "light" ? "dark" : "light";
  applySettings();
  saveSettings();
};
ui.themeToggle.addEventListener("click", handleThemeToggle);
if (ui.themeToggleHome) ui.themeToggleHome.addEventListener("click", handleThemeToggle);
ui.resetMemory.addEventListener("click", clearMemory);
ui.miniGameBack.addEventListener("click", showGamesHub);
ui.neuroDriveStart.addEventListener("click", startNeuroDrive);
if (ui.neuroDriveBoost) ui.neuroDriveBoost.addEventListener("click", activateNeuroDriveBoost);
ui.neuroDriveReset.addEventListener("click", resetNeuroDrive);
ui.neuroDriveLeft.addEventListener("click", () => moveNeuroDrive("left"));
ui.neuroDriveRight.addEventListener("click", () => moveNeuroDrive("right"));
ui.chaosRunnerStart.addEventListener("click", startChaosRunner);
ui.chaosRunnerJumpTouch.addEventListener("click", () => performChaosRunnerAction("jump"));
ui.chaosRunnerDuckTouch.addEventListener("click", () => performChaosRunnerAction("duck"));
ui.chaosRunnerReset.addEventListener("click", resetChaosRunner);
document.querySelectorAll("[data-open-game]").forEach(button => {
  button.addEventListener("click", () => showMiniGameDashboard(button.dataset.openGame));
});
ui.levelPrev.addEventListener("click", () => shiftSelectedLevel(-1));
ui.levelNext.addEventListener("click", () => shiftSelectedLevel(1));
ui.termsContinue.addEventListener("click", acceptTerms);
ui.termsCheckbox.addEventListener("change", () => ui.termsError.classList.add("hidden"));
ui.difficultySelect.addEventListener("change", e => {
  settings.difficulty = e.target.value;
  saveSettings();
});
ui.arenaSelect.addEventListener("change", e => {
  settings.arena = e.target.value;
  applySettings();
  saveSettings();
});
ui.volumeSlider.addEventListener("input", e => {
  settings.volume = Number(e.target.value);
  ui.volumeValue.textContent = `${settings.volume}%`;
  saveSettings();
});
ui.textScaleSlider.addEventListener("input", e => {
  settings.textScale = Number(e.target.value);
  applySettings();
  saveSettings();
});
ui.reducedMotion.addEventListener("change", e => {
  settings.reducedMotion = e.target.checked;
  saveSettings();
  buildStars();
});
ui.highContrast.addEventListener("change", e => {
  settings.highContrast = e.target.checked;
  applySettings();
  saveSettings();
});
document.querySelectorAll("[data-section]").forEach(button => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.section);
    if (target) target.scrollIntoView({ behavior: settings.reducedMotion ? "auto" : "smooth", block: "start" });
  });
});
document.querySelectorAll("[data-nav-action='tutorial']").forEach(button => {
  button.addEventListener("click", showTutorialScreen);
});
document.addEventListener("pointerdown", e => {
  if (!menuOpen) return;
  if (!ui.menuPanel.contains(e.target) && !ui.menuButton.contains(e.target)) setMenuOpen(false);
});

bindTouchControls();
applySettings();
resize();
resetGame();
updateLevelUI();
if (ctx) {
  requestAnimationFrame(loop);
  playBootSequence().then(() => {
    if (termsAccepted) showHomeScreen();
    else showTermsScreen();
  });
} else {
  showCanvasFallback();
}
