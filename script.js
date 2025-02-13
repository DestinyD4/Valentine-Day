let currentButton = 0;

// Правильные ответы для каждой кнопки
const correctAnswers = {
  1: "эгоист",
  2: "вротмен",
  3: "крылышки",
  4: "пост",
  5: "милашка",
  6: "бро",
  7: "жена",
  8: "информатик",
  9: "троян"
};

// Тексты, видео и цвета неона для каждого письма
const messages = {
  1: {
    text: "Невероятный, великолепный! Самый безумный эгоист на поле моей жизни. Сияй ради меня!",
    video: "Clever.mp4",
    neonColor: "#ff0080"
  },
  2: {
    text: "Самая опасный игрок в роблоксе, главный враг вротмена, а еще любимая мама! Люблю тебя, ты радуешь меня каждую встречу, ты замечательный человек! Люблю, обожаю!",
    video: "akira.mp4",
    neonColor: "#00ff80"
  },
  3: {
    text: "Мудрая, великая и непоколебимая правительница маилуршек. Лоуреант академии крылышек кфс...СЭТ! С днем святого Валентина, мама Цифарки!",
    video: "Set.mp4",
    neonColor: "#211c1e"
  },
  4: {
    text: "Я КОГДА НИБУДЬ ОТПИШУ ПОСТ...ЧЕРЕЗ ДЕНЬ..А МОЖЕТ ДВА?..ЭЭЭ, ВОТ, С ДНЕМ СВЯТОГО ВАЛЕНТИНА ТЕБЯ, РОДНАЯ!",
    video: "Witcher.mp4",
    neonColor: "#ff66b2"
  },
  5: {
    text: "Между нами такая динамика, уже вторая открытка тебе, невероятной и самой красивой Эстонке на всей планете. Не печалься, не унывай, иди вперед, ведь там тебя ждет лишь успех! С днем святого Валентина!",
    video: "Kotmy.mp4",
    neonColor: "#ff006f"
  },
  6: {
    text: "Люблю, уважая, обожаю тебя, Бро. Я никогда не забуду, никогда не оставлю тебя позади, будь моим настоящим, будь моим будущим впредь. Люблю тебя!",
    video: "Lika.mp4",
    neonColor: "#ff0099"
  },
  7: {
    text: "С днем Святого Валентина! С днем любовников, ну типо нас)0. Люблю тебя, ЖЕНА",
    video: "Ramona.mp4",
    neonColor: "#592ebd"
  },
  8: {
    text: "Ого, не ждала? А вот и я. Урса, ты не унывай, приподнимайся, иди вперед, топи всех и круши все на пути к своей мечте. С днем святого Валентина, люблю тебя!",
    video: "Ursa.mp4",
    neonColor: "#00ffff"
  },
  9: {
    text: "Я ЗАКИНУЛ НА САЙТ ТРОЯН, ТВОЕМУ УСТРОЙСТВУ ПИЗДА ЧЕРЕЗ 5 МИНУТ. С ДНЕМ СВЯТОГО ВАЛЕНТИНА РОДНОЙ",
    video: "delir.mp4",
    neonColor: "#d92020"
  }
};

/**
 * Функция открытия модального окна для ввода ключевого слова
 */
function openModal(buttonNumber) {
  currentButton = buttonNumber;
  document.getElementById("modal").classList.remove("hidden");

  // Отключаем прокрутку фона, чтобы окно не «прыгало»
  document.body.classList.add("no-scroll");
}

/**
 * Функция закрытия модального окна
 */
function closeModal() {
  document.getElementById("modal").classList.add("hidden");
  // Возвращаем прокрутку
  document.body.classList.remove("no-scroll");
}

/**
 * Проверяем ответ, если верно — показываем второе модальное окно с посланием
 */
function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase();
  if (answer === correctAnswers[currentButton]) {
    // Закрываем окно ввода
    closeModal();
    // Открываем окно с посланием
    openMessage(currentButton);
  } else {
    alert("❌Иди уебывай!");
  }
}

/**
 * Открываем окно с готовым посланием и видео
 */
function openMessage(buttonNumber) {
  const messageContent = document.getElementById("messageContent");
  const messageVideo = document.getElementById("messageVideo");
  const messageData = messages[buttonNumber];

  if (messageContent && messageVideo) {
    messageContent.innerText = messageData.text;
    messageVideo.src = messageData.video;

    // Устанавливаем неоновый цвет для текущего письма
    const modalContent = document.querySelector(".message-modal");
    if (modalContent) {
      modalContent.style.setProperty("--neon-color", messageData.neonColor);
    }

    // Показываем модальное окно
    document.getElementById("messageModal").classList.remove("hidden");
    // Снова отключаем прокрутку
    document.body.classList.add("no-scroll");
  } else {
    console.error("Элементы messageContent или messageVideo не найдены.");
  }
}

/**
 * Закрываем окно с посланием
 */
function closeMessage() {
  document.getElementById("messageModal").classList.add("hidden");
  // Включаем прокрутку обратно
  document.body.classList.remove("no-scroll");

  // Останавливаем видео
  const messageVideo = document.getElementById("messageVideo");
  if (messageVideo) {
    messageVideo.pause();
    messageVideo.src = "";
  }
}
