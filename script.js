// ========== GAME STATE ==========
const gameState = {
    players: [],
    impostorCount: 1,
    currentPlayerIndex: 0,
    currentWord: '',
    impostors: [],
    votes: {},
    discussionTime: 60,
    timerInterval: null,
    timeRemaining: 60,
    category: 'random',
    wordRevealed: false
};

// ========== FUN WORD DATABASE ==========
const wordDatabase = {
    absurd: [
        "Bailar macarena en una boda",
        "Asecharse a alguien en el baño",
        "Intentar ligar con una escoba",
        "Hacerse el rico en el OXXO",
        "Hablar solo en el transporte público",
        "Tiktokear de incógnito",
        "Hacer dawaii como extraterrestre",
        "Intentar sacar un selfie con un perro ajeno",
        "Salir con 10 peluques sin motivo",
        "Usar calcetines con sandalias",
        "Hacer drama por un comentario en Facebook",
        "Decir 'yo sí soy tu padre' a un niño",
        "Fingir entender de política",
        "Publicar foto de comida en Instagram",
        "Intentar hacerse viral por cualquier cosa",
        "Dormir con un peluche a los 30 años",
        "Llorar con comerciales de televisión",
        "Hacerse el difícil en el cine",
        "Reirse de sus propios chistes malos",
        "Comprar cosas por Temu que nunca llegarán"
    ],
    animals: [
        "Un perro que cree que es gato",
        "Un gato que odia las cajas",
        "Un loro que solo dice groserías",
        "Un pez con miedo al agua",
        "Un pájaro que no sabe volar",
        "Un conejo que parece山寨",
        "Un mapache ladron",
        "Un hipopótamo bailarín",
        "Un pulpo depresivo",
        "Un pingüino con calor",
        "Un loro chismoso",
        "Un gato influencer",
        "Un perro gamer",
        "Un hamster empresario",
        "Un conejo conductor",
        "Una tortuga velocista"
    ],
    activities: [
        "Hacer un unboxing inútil",
        "Livestreamear durmiendo",
        "Intentar una dieta keto",
        "Ser coach de vida sin vida",
        "Vender cursos de cómo ser rico",
        "Ser influencer de refrigeradores",
        "Hacer directo todos los días",
        "Criticar restaurantes de McDonald's",
        "Hacer talleres de éxito en TikTok",
        "Ser experto en crypto sin crypto",
        "Dar consejos de amor soltero",
        "Ser crítico de cine sin ver pelis",
        "Vender suplementos milagrosos",
        "Consultor espiritual de Instagram",
        "Fitness coach sin gym"
    ],
    objects: [
        "Una silla que no se puede sentar",
        "Un tenedor que pincha mal",
        "Una taza que se cae sola",
        "Un teléfono que solo suena a horas malas",
        "Un reloj que atrasa cuando tienes prisa",
        "Un paraguas que atrae lluvia",
        "Una almohada incómoda",
        "Un cepillo de dientes eléctrico que se apaga",
        "Una bicicleta sin cadena",
        "Un control remoto sin pilas",
        "Una cuchara sopera que es plana",
        "Un espejo que no refleja bien",
        "Una sábana siempre arrugada",
        "Un cargador que carga lento"
    ],
    celebrity: [
        "Un youtuber que promete premios mentira",
        "Un streamer que se enoja por todo",
        "Un político que no sabe leer",
        "Un actor que solo hace remakes",
        "Un cantante que usa autotune excesivo",
        "Un influencer que compra seguidores",
        "Un empresario que 'inventó' todo",
        "Una celebridad que es famosa por ser famosa",
        "Un conductor de reality show",
        "Un comentarista de fútbol apasionado",
        "Un coach de viajes de lujo",
        "Un experto en bitcoin que perdió todo"
    ]
};

// ========== PLAYER MANAGEMENT ==========
let playerCount = 0;

function initPlayers() {
    // Start with 3 default players
    for (let i = 1; i <= 3; i++) {
        addPlayerInput(`Jugador ${i}`);
    }
}

function addPlayerInput(name = '') {
    const playersList = document.getElementById('players-list');
    const playerDiv = document.createElement('div');
    playerDiv.className = 'player-input';
    playerDiv.innerHTML = `
        <input type="text" placeholder="Nombre del jugador" value="${name}" onchange="updatePlayers()">
        <button onclick="removePlayer(this)">×</button>
    `;
    playersList.appendChild(playerDiv);
    playerCount++;
}

function removePlayer(button) {
    const playersList = document.getElementById('players-list');
    if (playersList.children.length > 3) {
        button.parentElement.remove();
        updatePlayers();
    } else {
        showToast("Mínimo 3 jugadores", "warning");
    }
}

function addPlayer() {
    addPlayerInput();
}

function updatePlayers() {
    const inputs = document.querySelectorAll('#players-list input');
    gameState.players = Array.from(inputs)
        .map(input => input.value.trim())
        .filter(name => name.length > 0);
}

// ========== GAME SETUP ==========
function changeImpostors(delta) {
    const countEl = document.getElementById('impostor-count');
    let newCount = parseInt(countEl.textContent) + delta;
    const playerCount = document.querySelectorAll('#players-list input').length;

    if (newCount < 1) newCount = 1;
    if (newCount >= playerCount) newCount = playerCount - 1;

    countEl.textContent = newCount;
    gameState.impostorCount = newCount;
}

function startGame() {
    updatePlayers();

    // Validate
    if (gameState.players.length < 3) {
        showToast("Mínimo 3 jugadores", "error");
        return;
    }

    if (gameState.impostorCount >= gameState.players.length) {
        showToast("Debe haber al menos 1 jugador no impostor", "error");
        return;
    }

    // Get settings
    gameState.category = document.getElementById('word-category').value;
    gameState.discussionTime = parseInt(document.getElementById('discussion-time').value) || 60;
    gameState.timeRemaining = gameState.discussionTime;

    // Select word
    gameState.currentWord = selectWord();

    // Assign impostors
    assignImpostors();

    // Start game
    gameState.currentPlayerIndex = 0;
    showScreen('pass-screen');
    updatePassScreen();
}

function selectWord() {
    const category = gameState.category === 'random'
        ? Object.keys(wordDatabase)[Math.floor(Math.random() * Object.keys(wordDatabase).length)]
        : gameState.category;

    const words = wordDatabase[category];
    return words[Math.floor(Math.random() * words.length)];
}

function assignImpostors() {
    const shuffled = [...gameState.players].sort(() => Math.random() - 0.5);
    gameState.impostors = shuffled.slice(0, gameState.impostorCount);
}

// ========== SCREEN NAVIGATION ==========
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function updatePassScreen() {
    const playerName = gameState.players[gameState.currentPlayerIndex];
    document.getElementById('pass-player-name').textContent = playerName;
}

// ========== WORD REVEAL ==========
function showWord() {
    const playerName = gameState.players[gameState.currentPlayerIndex];
    const isImpostor = gameState.impostors.includes(playerName);

    // Set word
    const wordDisplay = document.getElementById('secret-word');
    wordDisplay.textContent = isImpostor ? "🎭 IMPOSTOR 🎭" : gameState.currentWord;

    // Set style
    const wordContainer = document.querySelector('.word-hidden');
    wordContainer.classList.remove('revealed', 'impostor-word');

    if (isImpostor) {
        wordContainer.classList.add('impostor-word');
        document.getElementById('impostor-badge').classList.remove('hidden');
    } else {
        wordContainer.classList.add('revealed');
        document.getElementById('impostor-badge').classList.add('hidden');
    }

    // Reset reveal state
    gameState.wordRevealed = false;
    document.getElementById('word-hidden').querySelector('.blur-overlay').classList.remove('hidden');

    showScreen('word-screen');
    setupWordReveal();
}

function setupWordReveal() {
    const wordContainer = document.getElementById('word-hidden');
    const blurOverlay = wordContainer.querySelector('.blur-overlay');
    let revealTimeout;
    let isPressed = false;

    // Desktop: click and hold
    wordContainer.addEventListener('mousedown', startReveal);
    wordContainer.addEventListener('mouseup', endReveal);
    wordContainer.addEventListener('mouseleave', endReveal);

    // Touch: hold
    wordContainer.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startReveal();
    });
    wordContainer.addEventListener('touchend', endReveal);

    // Touch: swipe
    let touchStartY = 0;
    wordContainer.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    wordContainer.addEventListener('touchmove', (e) => {
        const touchY = e.touches[0].clientY;
        const diff = touchStartY - touchY;

        if (diff > 50) { // Swipe up
            revealWord();
        }
    });

    function startReveal() {
        if (!isPressed) {
            isPressed = true;
            revealTimeout = setTimeout(() => {
                revealWord();
            }, 500);
        }
    }

    function endReveal() {
        isPressed = false;
        if (revealTimeout) {
            clearTimeout(revealTimeout);
        }
    }

    // Click to reveal (for quick reveal)
    wordContainer.addEventListener('click', () => {
        if (!gameState.wordRevealed) {
            revealWord();
        } else {
            hideWord();
        }
    });
}

function revealWord() {
    document.getElementById('word-hidden').querySelector('.blur-overlay').classList.add('hidden');
    gameState.wordRevealed = true;
}

function hideWord() {
    document.getElementById('word-hidden').querySelector('.blur-overlay').classList.remove('hidden');
    gameState.wordRevealed = false;
}

function confirmWord() {
    gameState.currentPlayerIndex++;

    if (gameState.currentPlayerIndex >= gameState.players.length) {
        // All players have seen their words
        startDiscussion();
    } else {
        showScreen('pass-screen');
        updatePassScreen();
    }
}

// ========== DISCUSSION PHASE ==========
function startDiscussion() {
    document.getElementById('discussion-word-display').textContent = gameState.currentWord;
    gameState.timeRemaining = gameState.discussionTime;
    updateTimerDisplay();

    // Setup vote list
    setupVoteList();

    showScreen('discussion-screen');
    startTimer();
}

function startTimer() {
    gameState.timerInterval = setInterval(() => {
        gameState.timeRemaining--;
        updateTimerDisplay();

        if (gameState.timeRemaining <= 0) {
            clearInterval(gameState.timerInterval);
            showToast("¡Tiempo terminado!", "warning");
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    const timerCircle = document.querySelector('.timer-circle');
    timerEl.textContent = gameState.timeRemaining;

    timerCircle.classList.remove('warning', 'danger');
    if (gameState.timeRemaining <= 10) {
        timerCircle.classList.add('danger');
    } else if (gameState.timeRemaining <= 30) {
        timerCircle.classList.add('warning');
    }
}

function toggleTimer() {
    const btn = document.getElementById('timer-toggle');
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
        btn.textContent = '▶️ Reanudar';
    } else {
        startTimer();
        btn.textContent = '⏸️ Pausar';
    }
}

function addTime(seconds) {
    gameState.timeRemaining += seconds;
    updateTimerDisplay();
}

function skipTimer() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }
    showToast("Timer pausado", "info");
}

function setupVoteList() {
    const voteList = document.getElementById('vote-list');
    voteList.innerHTML = '';

    gameState.players.forEach(player => {
        const voteItem = document.createElement('div');
        voteItem.className = 'vote-item';
        voteItem.innerHTML = `
            <span>${player}</span>
            <span class="vote-count" id="vote-count-${player}">0</span>
        `;
        voteItem.onclick = () => addVote(player);
        voteList.appendChild(voteItem);
    });
}

function addVote(player) {
    if (!gameState.votes[player]) {
        gameState.votes[player] = 0;
    }
    gameState.votes[player]++;
    document.getElementById(`vote-count-${player}`).textContent = gameState.votes[player];

    const voteItem = document.querySelector(`.vote-item:has(#vote-count-${player})`);
    voteItem.classList.add('selected');
    setTimeout(() => voteItem.classList.remove('selected'), 300);
}

// ========== RESULTS ==========
function showResults() {
    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
    }

    // Find most voted
    let maxVotes = 0;
    let accused = [];
    for (const [player, votes] of Object.entries(gameState.votes)) {
        if (votes > maxVotes) {
            maxVotes = votes;
            accused = [player];
        } else if (votes === maxVotes && votes > 0) {
            accused.push(player);
        }
    }

    // Show results
    document.getElementById('result-word').textContent = gameState.currentWord;

    const impostorsList = document.getElementById('impostors-list');
    impostorsList.innerHTML = '';
    gameState.impostors.forEach(imp => {
        const tag = document.createElement('div');
        tag.className = 'impostor-tag';
        tag.textContent = `🎭 ${imp}`;
        impostorsList.appendChild(tag);
    });

    // Determine winner
    const winnersDiv = document.getElementById('winners-announcement');
    const titleEl = document.getElementById('result-title');

    if (accused.length === 0) {
        winnersDiv.innerHTML = '<p style="color: var(--warning);">Nadie votó... Los impostores ganan 😈</p>';
        titleEl.textContent = '🎭 ¡Ganan los Impostores!';
    } else {
        const correctlyIdentified = accused.some(a => gameState.impostors.includes(a));
        const allImpostorsFound = gameState.impostors.every(i => accused.includes(i));
        const onlyImpostorsAccused = accused.every(a => gameState.impostors.includes(a));

        if (allImpostorsFound && onlyImpostorsAccused && gameState.impostors.length === accused.length) {
            winnersDiv.innerHTML = '<p style="color: var(--success);">🎉 ¡Los jugadores descubrieron a todos los impostores!</p>';
            titleEl.textContent = '🏆 ¡Victoria de los Jugadores!';
        } else if (correctlyIdentified) {
            winnersDiv.innerHTML = '<p style="color: var(--warning);">Descubrieron al menos un impostor... pero no todos 🤔</p>';
            titleEl.textContent = '😅 Victoria Parcial';
        } else {
            winnersDiv.innerHTML = '<p style="color: var(--accent);">Acusaron a los equivocados... ¡Los impostores ganan! 😈</p>';
            titleEl.textContent = '🎭 ¡Ganan los Impostores!';
        }
    }

    showScreen('results-screen');
}

// ========== RESET ==========
function resetGame() {
    gameState.players = [];
    gameState.currentPlayerIndex = 0;
    gameState.currentWord = '';
    gameState.impostors = [];
    gameState.votes = {};
    gameState.wordRevealed = false;

    if (gameState.timerInterval) {
        clearInterval(gameState.timerInterval);
        gameState.timerInterval = null;
    }

    // Reset UI
    document.getElementById('impostor-count').textContent = '1';
    document.getElementById('word-category').value = 'random';
    document.getElementById('discussion-time').value = '60';

    // Reset players
    const playersList = document.getElementById('players-list');
    playersList.innerHTML = '';
    initPlayers();

    showScreen('setup-screen');
}

// ========== UTILITIES ==========
function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        padding: 12px 24px;
        border-radius: 8px;
        color: white;
        font-weight: 600;
        z-index: 1000;
        animation: fadeIn 0.3s ease;
    `;

    const colors = {
        info: 'var(--primary)',
        success: 'var(--success)',
        warning: 'var(--warning)',
        error: 'var(--danger)'
    };

    toast.style.background = colors[type] || colors.info;
    document.body.appendChild(toast);

    setTimeout(() => {
        toast.style.animation = 'fadeIn 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 2500);
}

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', () => {
    initPlayers();
});
