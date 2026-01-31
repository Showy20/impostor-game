// Word database - single words only
const words = {
    people: ['Abogado', 'Actor', 'Astronauta', 'Bombero', 'Cantante', 'Carpintero', 'Chef', 'Chico', 'Chica', 'Científico', 'Constructor', 'Crimen', 'Doctor', 'Enfermera', 'Escritor', 'Espía', 'Ex', 'Famoso', 'Fotógrafo', 'Gamer', 'Gemelo', 'Gerente', ' Guerrero', 'Hacker', 'Héroe', 'Influencer', 'Ladrón', 'Maestro', 'Mecánico', 'Millonario', 'Mimo', 'Modelo', 'Músico', 'Ninja', 'Pirata', 'Político', 'Príncipe', 'Profesor', 'Programador', 'Rey', 'Robot', 'Sacerdote', 'Soldado', 'Tatuador', 'Vampiro', 'Vecino', 'Youtuber', 'Zombie'],

    animals: ['Araña', 'Búho', 'Ballena', 'Canguro', 'Cerdo', 'Cocodrilo', 'Elefante', 'Escorpión', 'Foca', 'Gato', 'Gorila', 'Hámster', 'Hipopótamo', 'Jirafa', 'León', 'Lobo', 'Mariposa', 'Mono', 'Mosquito', 'Murciélago', 'Oso', 'Pájaro', 'Panda', 'Perro', 'Pingüino', 'Pollo', 'Pulpo', 'Rata', 'Rinoceronte', 'Serpiente', 'Tiburon', 'Tigre', 'Tortuga', 'Vaca', 'Zorro'],

    objects: ['Anillo', 'Auto', 'Avión', 'Balón', 'Bicicleta', 'Bota', 'Cama', 'Cámara', 'Casco', 'Cepillo', 'Chupete', 'Cuchara', 'Cuchillo', 'Dinero', 'Espejo', 'Gafas', 'Guitarra', 'Huevo', 'Joya', 'Lápiz', 'Llave', 'Máscara', 'Microfono', 'Mochila', 'Moneda', 'Oro', 'Perfume', 'Pistola', 'Reloj', 'Silla', 'Sofá', 'Telefono', 'Tenedor', 'Tiara', 'Timón', 'Tocado', 'Zapato'],

    food: ['Agua', 'Alcohol', 'Arroz', 'Asado', 'Avena', 'Azeituna', 'Café', 'Cerveza', 'Chicle', 'Chicle', 'Choco', 'Chorizo', 'Coca', 'Cordero', 'Cucharra', 'Cuchillo', 'Donas', 'Durazno', 'Empanada', 'Ensalada', 'Fresa', 'Hamburguesa', 'Helado', 'Huevo', 'Jamón', 'Jugo', 'Leche', 'Limonada', 'Lomo', 'Mango', 'Manzana', 'Masa', 'Mayonesa', 'Miel', 'Milkshake', 'Mousse', 'Muffin', 'Naranja', 'Panceta', 'Papas', 'Pasta', 'Pastel', 'Pera', 'Pescado', 'Picante', 'Pizza', 'Pollo', 'Queso', 'Salsa', 'Sándwich', 'Taco', 'Té', 'Torta', 'Tostada', 'Uva', 'Vino', 'Yogur', 'Zanahoria'],

    places: ['Aeropuerto', 'Alcoba', 'Banco', 'Bar', 'Baño', 'Biblioteca', 'Cabaña', 'Cafetería', 'Calle', 'Camping', 'Casa', 'Castillo', 'Catedral', 'Cementerio', 'Cine', 'Circo', 'Club', 'Colegio', 'Cueva', 'Discoteca', 'Escuela', 'Estadio', 'Fábrica', 'Gimnasio', 'Hospital', 'Hotel', 'Iglesia', 'Isla', 'Jardín', 'Laboratorio', 'Luna', 'Mercado', 'Museo', 'Oficina', 'Parque', 'Piscina', 'Playa', 'Prisión', 'Restaurante', 'Rio', 'Supermercado', 'Teatro', 'Tienda', 'Torre', 'Zoológico'],

    actions: ['Abrazar', 'Aplaudir', 'Arañar', 'Arreglar', 'Asustar', 'Atrapar', 'Bailar', 'Bañar', 'Besarse', 'Besar', 'Bromear', 'Buscar', 'Caminar', 'Cantar', 'Cocinar', 'Correr', 'Chillar', 'Comer', 'Conducir', 'Dormir', 'Empujar', 'Enamorar', 'Esconder', 'Escribir', 'Escuchar', 'Estar', 'Gritar', 'Golpear', 'Jugar', 'Llorar', 'Luchar', 'Matar', 'Nadar', 'Oír', 'Pintar', 'Reír', 'Saltar', 'Silbar', 'Soñar', 'Tocar', 'Toser', 'Volar', 'Vomitar'],

    party: ['Amigo', 'Amor', 'Boda', 'Brindis', 'Bebible', 'Chiste', 'Copas', 'Cita', 'Despedida', 'Divorcio', 'Enamorados', 'Ex', 'Fiesta', 'Flirteo', 'Graduación', 'Invitado', 'Luna', 'Mezcal', 'Noche', 'Pareja', 'Pasión', 'Regalo', 'Risa', 'Romance', 'Ron', 'Sexo', 'Soltería', 'Tequila', 'Tía', 'Venganza', 'Vino'],

    spicy: ['Amante', 'Atrás', 'Beso', 'Cama', 'Chochete', 'Cintura', 'Consolador', 'Culo', 'Desnudo', 'Enamide', 'Entrepierna', 'Erotismo', 'Fantasía', 'Fetiche', 'Hazmerreír', 'Hot', 'Intimidad', 'Lencería', 'Libido', 'Lujuria', 'Masaje', 'Masturbación', 'Milf', 'Morbo', 'Nalgas', 'Ninfómana', 'Nocturnidad', 'Orgasmo', 'Pasión', 'Pechotes', 'Pechuga', 'Pene', 'Pijama', 'Placer', 'Porno', 'Posición', 'Profanidad', 'Provocativo', 'Pulsión', 'Puta', 'Sado', 'Seductora', 'Semen', 'Sensual', 'Sexo', 'Sexting', 'Sfoglio', 'Sofá', 'Solitario', 'Striptease', 'Sucio', 'Tabú', 'Tacones', 'Tetas', 'Tirante', 'Toque', 'Trío', 'Vajilla', 'Vibrador', 'Vicios', 'Voluptuosidad']
};

// Game state
const state = {
    players: [],
    impostors: 0,
    currentWord: '',
    impostorIndices: [],
    currentPlayer: 0,
    time: 60,
    timer: null,
    remaining: 60,
    category: 'random',
    votes: {}
};

// Initialize
function init() {
    // Add default players
    for (let i = 1; i <= 3; i++) {
        addPlayerInput(`Jugador ${i}`);
    }
    setTime(60);
}

// Player management
function addPlayerInput(name = '') {
    const list = document.getElementById('players-list');
    const div = document.createElement('div');
    div.className = 'player-input';
    div.innerHTML = `
        <input type="text" placeholder="Nombre" value="${name}">
        <button onclick="removePlayer(this)">×</button>
    `;
    div.querySelector('input').addEventListener('input', updatePlayers);
    list.appendChild(div);
}

function removePlayer(btn) {
    const list = document.getElementById('players-list');
    if (list.children.length > 3) {
        btn.parentElement.remove();
        updatePlayers();
    } else {
        toast('Mínimo 3 jugadores');
    }
}

function addPlayer() {
    addPlayerInput();
}

function updatePlayers() {
    state.players = Array.from(document.querySelectorAll('#players-list input'))
        .map(i => i.value.trim())
        .filter(n => n);
}

// Settings
function changeImpostors(delta) {
    const el = document.getElementById('impostor-count');
    let n = parseInt(el.textContent) + delta;
    const max = state.players.length || 3;
    if (n < 1) n = 1;
    if (n >= max) n = max - 1;
    el.textContent = n;
    state.impostors = n;
}

function setTime(seconds) {
    state.time = seconds;
    state.remaining = seconds;
    document.querySelectorAll('.time-btn').forEach(btn => {
        btn.classList.toggle('active', parseInt(btn.dataset.time) === seconds);
    });
}

// Start game
function startGame() {
    updatePlayers();

    if (state.players.length < 3) {
        toast('Mínimo 3 jugadores');
        return;
    }

    state.impostors = parseInt(document.getElementById('impostor-count').textContent);
    if (state.impostors >= state.players.length) {
        toast('Debe haber al menos 1 no impostor');
        return;
    }

    // Select word
    state.category = document.getElementById('word-category').value;
    state.currentWord = selectWord();

    // Assign impostors
    const indices = [...Array(state.players.length).keys()];
    state.impostorIndices = shuffle(indices).slice(0, state.impostors);

    state.currentPlayer = 0;
    showScreen('pass-screen');
    updatePassScreen();
}

function selectWord() {
    const cat = state.category === 'random'
        ? Object.keys(words)[Math.floor(Math.random() * Object.keys(words).length)]
        : state.category;
    const list = words[cat];
    return list[Math.floor(Math.random() * list.length)];
}

function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
}

// Screens
function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function updatePassScreen() {
    document.getElementById('pass-player-name').textContent = state.players[state.currentPlayer];
}

// Word reveal
let wordRevealTimeout = null;
let isWordRevealed = false;

function showWord() {
    const isImpostor = state.impostorIndices.includes(state.currentPlayer);
    const wordText = document.getElementById('word-text');
    const wordBlur = document.getElementById('word-blur');

    // Set word
    wordText.textContent = isImpostor ? 'IMPOSTOR' : state.currentWord;

    // Set style
    wordBlur.classList.remove('revealed', 'impostor');
    if (isImpostor) {
        wordBlur.classList.add('impostor');
    }

    // Reset state
    isWordRevealed = false;
    wordBlur.classList.remove('revealed');

    showScreen('word-screen');
    setupWordInteractions();
}

function setupWordInteractions() {
    const wordBlur = document.getElementById('word-blur');

    // Clean up previous listeners
    const newWordBlur = wordBlur.cloneNode(true);
    wordBlur.parentNode.replaceChild(newWordBlur, wordBlur);

    const el = document.getElementById('word-blur');

    // Desktop
    el.addEventListener('mousedown', startReveal);
    el.addEventListener('mouseup', endReveal);
    el.addEventListener('mouseleave', endReveal);

    // Touch
    el.addEventListener('touchstart', (e) => {
        e.preventDefault();
        startReveal();
    });
    el.addEventListener('touchend', endReveal);

    // Click to toggle
    el.addEventListener('click', toggleReveal);

    function startReveal() {
        if (wordRevealTimeout) return;
        wordRevealTimeout = setTimeout(() => {
            reveal();
        }, 200);
    }

    function endReveal() {
        if (wordRevealTimeout) {
            clearTimeout(wordRevealTimeout);
            wordRevealTimeout = null;
        }
    }

    function toggleReveal() {
        if (wordRevealTimeout) {
            clearTimeout(wordRevealTimeout);
            wordRevealTimeout = null;
        }
        if (isWordRevealed) {
            hide();
        } else {
            reveal();
        }
    }

    function reveal() {
        el.classList.add('revealed');
        isWordRevealed = true;
        wordRevealTimeout = null;
    }

    function hide() {
        el.classList.remove('revealed');
        isWordRevealed = false;
    }
}

function confirmAndPass() {
    state.currentPlayer++;
    if (state.currentPlayer >= state.players.length) {
        startDiscussion();
    } else {
        showScreen('pass-screen');
        updatePassScreen();
    }
}

// Discussion
function startDiscussion() {
    state.remaining = state.time;
    state.votes = {};

    document.getElementById('discussion-word').textContent = state.currentWord;
    updateTimerDisplay();

    // Setup votes
    const voteList = document.getElementById('vote-list');
    voteList.innerHTML = '';
    state.players.forEach(p => {
        const div = document.createElement('div');
        div.className = 'vote-item';
        div.innerHTML = `
            <span>${p}</span>
            <span class="vote-count" id="vote-${p}">0</span>
        `;
        div.onclick = () => vote(p);
        voteList.appendChild(div);
        state.votes[p] = 0;
    });

    showScreen('discussion-screen');
    startTimer();
}

function vote(player) {
    state.votes[player]++;
    document.getElementById(`vote-${player}`).textContent = state.votes[player];
}

function startTimer() {
    if (state.timer) clearInterval(state.timer);
    state.timer = setInterval(() => {
        state.remaining--;
        updateTimerDisplay();
        if (state.remaining <= 0) {
            clearInterval(state.timer);
            state.timer = null;
        }
    }, 1000);
}

function updateTimerDisplay() {
    const timerEl = document.getElementById('timer');
    const timerCircle = document.querySelector('.timer');
    timerEl.textContent = state.remaining;

    timerCircle.classList.remove('warning', 'danger');
    if (state.remaining <= 10) {
        timerCircle.classList.add('danger');
    } else if (state.remaining <= 30) {
        timerCircle.classList.add('warning');
    }
}

function toggleTimer() {
    const btn = document.getElementById('timer-toggle');
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
        btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>`;
    } else {
        startTimer();
        btn.innerHTML = `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="6" y="4" width="4" height="16"></rect><rect x="14" y="4" width="4" height="16"></rect></svg>`;
    }
}

function addTime(seconds) {
    state.remaining += seconds;
    updateTimerDisplay();
}

function skipTimer() {
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }
}

// Results
function showResults() {
    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }

    // Find accused
    let maxVotes = 0;
    const accused = [];
    for (const [player, votes] of Object.entries(state.votes)) {
        if (votes > maxVotes) {
            maxVotes = votes;
            accused.length = 0;
            accused.push(player);
        } else if (votes === maxVotes && votes > 0) {
            accused.push(player);
        }
    }

    // Show word
    document.getElementById('result-word').textContent = state.currentWord;

    // Show impostors
    const impostorsList = document.getElementById('impostors-list');
    impostorsList.innerHTML = '';
    state.impostorIndices.forEach(i => {
        const tag = document.createElement('span');
        tag.className = 'impostor-tag';
        tag.textContent = state.players[i];
        impostorsList.appendChild(tag);
    });

    // Determine winner
    const winnerText = document.getElementById('winner-text');
    const title = document.getElementById('result-title');

    if (accused.length === 0) {
        winnerText.textContent = '¡Los impostores ganan!';
        winnerText.className = 'winner-text lose';
        title.textContent = '¡Victoria Impostor!';
    } else {
        const correctlyIdentified = accused.some(a => {
            const idx = state.players.indexOf(a);
            return state.impostorIndices.includes(idx);
        });

        const onlyImpostors = accused.every(a => {
            const idx = state.players.indexOf(a);
            return state.impostorIndices.includes(idx);
        });

        if (correctlyIdentified && onlyImpostors && accused.length === state.impostorIndices.length) {
            winnerText.textContent = '¡Los jugadores descubren a todos los impostores!';
            winnerText.className = 'winner-text win';
            title.textContent = '¡Victoria Jugadores!';
        } else if (correctlyIdentified) {
            winnerText.textContent = 'Descubrieron al menos un impostor';
            winnerText.className = 'winner-text';
            title.textContent = 'Parcial';
        } else {
            winnerText.textContent = '¡Acusaron a inocentes! Los impostores ganan';
            winnerText.className = 'winner-text lose';
            title.textContent = '¡Victoria Impostor!';
        }
    }

    showScreen('results-screen');
}

// Reset
function resetGame() {
    state.players = [];
    state.currentPlayer = 0;
    state.currentWord = '';
    state.impostorIndices = [];
    state.votes = {};
    state.impostors = 1;

    if (state.timer) {
        clearInterval(state.timer);
        state.timer = null;
    }

    document.getElementById('impostor-count').textContent = '1';
    document.getElementById('word-category').value = 'random';

    const list = document.getElementById('players-list');
    list.innerHTML = '';
    for (let i = 1; i <= 3; i++) {
        addPlayerInput(`Jugador ${i}`);
    }
    setTime(60);

    showScreen('setup-screen');
}

// Toast
function toast(msg) {
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), 2000);
}

// Init
document.addEventListener('DOMContentLoaded', init);
