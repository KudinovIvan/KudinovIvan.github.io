const stages = [
    {
        title: "Этап 1: СОУЭ",
        description: "Найдите и взаимодействуйте с системой оповещения и управления эвакуацией (СОУЭ).",
        image: "./media/room1.png",
        items: [
            { id: 'sou', image: './media/sou.png', correct: true, x: 86, y: 30, width: 15, opacity: 1, info_text: "Верно! Молодец!" },
            { id: 'bottle', image: './media/bottle.png', correct: false, x: 30, y: 78, width: 6, opacity: 0.8, info_text: "Неверно, балончик упал на пол во время пожара и приведет к увеличению пламени, но он никак не взаимодействует с СОУЭ"},
            { id: 'spz', image: './media/spz.png', correct: false, x: 32, y: 56, width: 3, opacity: 0.9, info_text: "Неправильно, это кнопка СПЗ"}
        ]
    },
    {
        title: "Этап 2: АУПС",
        description: "Найдите автоматическую установку пожарной сигнализации (АУПС).",
        image: "./media/room2.png",
        items: [
            { id: 'aups', image: './media/aups.png', correct: true, x: 75, y: 0, width: 15, opacity: 0.4, info_text: "Все так!" },
            { id: 'plant', image: './media/plant.png', correct: false, x: 0, y: 61, width: 12, opacity: 1, info_text: "К сожалению, неверно. Растение — источник кислорода, но никак не взаимодействует с АУПС"},
            { id: 'candle', image: './media/candle.png', correct: false, x: 54, y: 72, width: 3, opacity: 1, info_text: "Неверно, свеча — возможный источник пожара, но точно не АУПС"},
            { id: 'spz', image: './media/spz.png', correct: false, x: 44, y: 44, width: 6, opacity: 1, info_text: "Неправильно, это кнопка СПЗ"}
        ]
    },
    {
        title: "Этап 3: АУП",
        description: "Найдите автоматическую установку пожаротушения (АУП).",
        image: "./media/room3.png",
        items: [
            { id: 'aup', image: './media/aup.png', correct: true, x: 40, y: 1, width: 4, opacity: 0.7, info_text: "Да! Супер!" },
            { id: 'spray1', image: './media/spray1.png', correct: false, x: 34, y: 65, width: 3, opacity: 1, info_text: "Неверно, спрей оставили во время уборки, что приведет к увеличению пламени, но он никак не взаимодействует с системой АУП"},
            { id: 'extinguisher', image: './media/extinguisher.png', correct: false, x: 43, y: 77, width: 7, opacity: 1, info_text: "Неправильно, это огнетушитель"}
        ]
    },
    {
        title: "Этап 4: СПЗ",
        description: "Найдите систему противопожарной защиты (СПЗ).",
        image: "./media/room4.png",
        items: [
            { id: 'spz', image: './media/spz.png', correct: true, x: 4, y: 43, width: 6, opacity: 1, info_text: "Верно, так и есть!" },
            { id: 'spray2', image: './media/spray2.png', correct: false, x: 1, y: 78, width: 4, opacity: 1, info_text: "Неверно, спрей оставили во время уборки, что приведет к увеличению пламени в случае пожара, но он никак не взаимодействует СПЗ"},
            { id: 'aups', image: './media/aups.png', correct: false, x: 17, y: 0, width: 11, opacity: 0.4, info_text: "Неправильно, это АУПС"},
            { id: 'socket', image: './media/socket.png', correct: false, x: 96, y: 70, width: 3, opacity: 1, info_text: "Неверно, из-за короткого замыкания в этой комнате случился пожар, но это не СПЗ"}
        ]
    },
    {
        title: "Этап 5: Огнетушители",
        description: "Найдите огнетушитель.",
        image: "./media/room5.png",
        items: [
            { id: 'extinguisher', image: './media/extinguisher.png', correct: true, x: 85, y: 74, width: 7, opacity: 1, info_text: "Верно! Молодец!" },
            { id: 'candles', image: './media/candles.png', correct: false, x: 61, y: 69, width: 4, opacity: 1, info_text: 'Неверно, свеча — возможный источник пожара, но точно не огнетушитель'},
            { id: 'sou_front', image: './media/sou_front.png', correct: false, x: 13, y: 17, width: 5, opacity: 1, info_text: 'Неправильно, это СОУЗ'}
        ]
    }
];

let currentStage = 0;

function startGame() {
    document.getElementById('story').style.display = 'none';
    document.getElementById('game-stage').style.display = 'block';
    loadStage();
}

function loadStage() {
    const stage = stages[currentStage];
    document.getElementById('stage-title').innerText = stage.title;
    document.getElementById('stage-description').innerText = stage.description;

    const room = document.getElementById('room');
    room.innerHTML = '<img id="room-image" src="' + stage.image + '" alt="Комната" />';
    stage.items.forEach(item => {
        const div = document.createElement('img');
        div.className = 'item';
        div.id = item.id;
        div.src = item.image;
        div.style.left = item.x + '%';
        div.style.top = item.y + '%';
        div.style.width = item.width + '%';
        div.style.opacity = item.opacity;
        div.onclick = () => handleAction(item.correct, item.info_text);
        room.appendChild(div);
    });
}

function handleAction(correct, info_text) {

    if (correct) {
        document.getElementById('incorrect').style.display = 'none';
        document.getElementById('correct').style.display = 'block';
        document.getElementById('correct').innerHTML = '<p class="answer">Ответ: </p>' + info_text;
        document.getElementById('next-btn').style.display = 'block';
    } else {
        document.getElementById('correct').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
        document.getElementById('incorrect').style.display = 'block';
        document.getElementById('incorrect').innerHTML = '<p class="answer">Ответ: </p>' + info_text;
    }
}

function nextStage() {
    currentStage++;
    if (currentStage < stages.length) {
        loadStage();
        document.getElementById('correct').style.display = 'none';
        document.getElementById('next-btn').style.display = 'none';
    } else {
        document.getElementById('game-stage').style.display = 'none';
        document.getElementById('finished').style.display = 'block';
    }
}

function checkOrientation() {
    if (window.innerHeight > window.innerWidth) {
        document.getElementById('orientation-warning').style.display = 'flex';
    } else {
        document.getElementById('orientation-warning').style.display = 'none';
    }
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);