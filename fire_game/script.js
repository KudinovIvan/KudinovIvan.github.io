const stages = [
    {
        title: "Этап 1: СОУЭ",
        description: "Найдите и нажмите на систему оповещения и управления эвакуацией (СОУЭ).",
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
            { id: 'spray1', image: './media/spray1.png', correct: false, x: 34, y: 65, width: 3, opacity: 1, info_text: "Неверно, спрей оставили во время уборки, что приведет к увеличению пламени в случае пожара, но он никак не взаимодействует СПЗ"},
            { id: 'extinguisher', image: './media/extinguisher.png', correct: false, x: 43, y: 77, width: 7, opacity: 1, info_text: "Неправильно, это огнетушитель"}
        ]
    },
    {
        title: "Этап 4: СПЗ",
        description: "Найдите систему противопожарной защиты (СПЗ).",
        image: "./media/room4.png",
        items: [
            { id: 'spz', image: './media/spz.png', correct: true, x: 4, y: 43, width: 6, opacity: 1, info_text: "Верно, так и есть!" },
            { id: 'spray2', image: './media/spray2.png', correct: false, x: 1, y: 78, width: 4, opacity: 1, info_text: "Неверно, спрей оставили во время уборки, что приведет к увеличению пламени, но он никак не взаимодействует с системой АУП"},
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
    info_popup();
}

function loadStage() {
    const stage = stages[currentStage];

    const room = document.getElementById('room');
    room.innerHTML = '<img id="room-image" src="' + stage.image + '" alt="Комната" />';
    stage.items.forEach(item => {
        const div = document.createElement('img');
        div.className = 'item';
        div.id = item.id;
        div.src = item.image;
        var style = "left: " + item.x + "%; top: " + item.y + "%; width: " + item.width + "%; opacity: " + item.opacity + "; ";
        style = style + "padding-right: 4%; ";
        style = style + "padding-bottom: 4%; ";
        div.style = style;
        div.onclick = () => handleAction(item.correct, item.info_text);
        room.appendChild(div);
    });
}

function handleAction(correct, info_text) {

    if (correct) {
        success_popup(info_text);
    } else {
        error_popup(info_text);
    }
}

function nextStage() {
    currentStage++;
    close_popup('success_popup');
    if (currentStage < stages.length) {
        loadStage();
        info_popup();
    } else {
        document.getElementById('game-stage').style.display = 'none';
        document.getElementById('finished').style.display = 'block';
    }
}

function checkOrientation() {
    if (window.innerWidth < 600) {
        document.getElementById('info_popup').style.display = 'none';
        document.getElementById('error_popup').style.display = 'none';
        document.getElementById('success_popup').style.display = 'none';
        document.getElementById('orientation-warning').style.display = 'flex';
    } else {
        document.getElementById('orientation-warning').style.display = 'none';
    }
}


function info_popup() {
    var info_popup = document.getElementById('info_popup');
    info_popup.style.display = 'block'
    var info_popup_block = document.getElementById('info_popup_block');
    const stage = stages[currentStage];
    info_popup_block.innerHTML = "<p class='text_popup'>" + stage.description + "</p>";
    const div = document.createElement('img');
    div.src = "./media/ok_but.png";
    div.style = "width: 20%; padding-bottom:5%; cursor: pointer";
    div.onclick = () => close_popup('info_popup');
    info_popup_block.appendChild(div);
}

function error_popup(info_text) {
    var error_popup = document.getElementById('error_popup');
    error_popup.style.display = 'block'
    var error_popup_block = document.getElementById('error_popup_block');
    error_popup_block.innerHTML = "<img src='./media/cross_icon.png' style='width: 10%; padding-top: 5%'/><p class='text_popup' style='padding-top: 0%;'>" + info_text + "</p>";
    const div = document.createElement('img');
    div.src = "./media/again_but.png";
    div.style = "width: 35%; padding-bottom:5%; cursor: pointer";
    div.onclick = () => close_popup('error_popup');
    error_popup_block.appendChild(div);
}

function success_popup(info_text) {
    var success_popup = document.getElementById('success_popup');
    success_popup.style.display = 'block'
    var success_popup_block = document.getElementById('success_popup_block');
    success_popup_block.innerHTML = "<img src='./media/check_icon.png' style='width: 10%; padding-top: 5%'/><p class='text_popup' style='padding-top: 0%;'>" + info_text + "</p>";
    const div = document.createElement('img');
    div.src = "./media/next_but.png";
    div.style = "width: 35%; padding-bottom:5%; cursor: pointer";
    div.onclick = () => nextStage();
    success_popup_block.appendChild(div);
}

function close_popup(popup_id) {
    var popup = document.getElementById(popup_id)
    popup.style.display = 'none';
}

window.addEventListener('resize', checkOrientation);
window.addEventListener('load', checkOrientation);
window.addEventListener('orientationchange', checkOrientation);