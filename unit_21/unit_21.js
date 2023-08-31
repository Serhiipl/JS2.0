// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */
function t1(e) {
  document.querySelector(".out-1").textContent = "touch";
}
let touch1 = document
  .querySelector(".div-1")
  .addEventListener("touchstart", t1);

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */
let num = "";
function t2(e) {
  num++;
  document.querySelector(".out-2").textContent = num;
}
let touch2 = document
  .querySelector(".div-2")
  .addEventListener("touchstart", t2);

// ваше событие здесь!!!
// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */
// 1 варіант
//
// function t3(e) {
//   if (e.target.classList.contains("div-3_1")) {
//     document.querySelector(".out-3").textContent = 1;
//   } else if (e.target.classList.contains("div-3_2")) {
//     document.querySelector(".out-3").textContent = 2;
//   }
// }
// let touch31 = document
//   .querySelector(".div-3_1")
//   .addEventListener("touchstart", t3);
// let touch32 = document
//   .querySelector(".div-3_2")
//   .addEventListener("touchstart", t3);

let touch31 = document.querySelector(".div-3_1");
let touch32 = document.querySelector(".div-3_2");

function t3(e) {
  if (e.target == touch31) {
    document.querySelector(".out-3").textContent = 1;
  } else if (e.target == touch32) {
    document.querySelector(".out-3").textContent = 2;
  }
}
touch31.addEventListener("touchstart", t3);
touch32.addEventListener("touchstart", t3);

// ваше событие здесь!!!

// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */
let block4 = document.querySelector(".div-4");

function btnEvt() {
  block4.addEventListener("touchstart", t4);
}

function t4(e) {
  document.querySelector(".out-4").textContent = block4.textContent;
  console.log(e);
}
let btn4 = (document.querySelector(".b-4").onclick = btnEvt);

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

function t5(e) {
  block4.removeEventListener("touchstart", t4);
}
let btn5 = (document.querySelector(".b-5").onclick = t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

function t6(e) {
  document.querySelector(".out-6").textContent = "touchend";
}
block4.ontouchend = t6;
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
let block7 = document.querySelector(".div-7");

function t7(e) {
  block7.style.backgroundColor = "red";
}
block7.addEventListener("touchstart", t7);

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */
let a8 = ["red", "green", "blue", "orange", "pink", "yellow"];

let block8 = document.querySelector(".div-8");

function t8(e) {
  let colour = Math.floor(0 + Math.random() * (a8.length + 1));
  block8.style.backgroundColor = a8[colour];
}
block8.addEventListener("touchstart", t8);

// ваше событие здесь!!!

// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */
let block9 = document.querySelector(".div-9");

function t9(e) {
  console.log(e);
  document.querySelector(".out-9").textContent = e.targetTouches.length;
}
block9.addEventListener("touchstart", t9);

// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - увеличивайте его ширину на 1. */
let w = 75;
let block10 = document.querySelector(".div-10");
function t10(e) {
  w++;
  block10.style.width = `${w}px`;
}
block10.addEventListener("touchmove", t10);

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус события radiusX, radiusY. */
let block11 = document.querySelector(".div-11");

function t11(e) {
  console.log(e);
  document.querySelector(
    ".out-11"
  ).textContent = `radiusX:${e.targetTouches[0].radiusX}, radiusY:${e.targetTouches[0].radiusY}`;
}
block11.addEventListener("touchstart", t11);

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12.
<p>Изучите html код внутри div-12-wrapper.</p>
<p>1. Добавьте на кнопку nex событие click, touch так, чтобы при событии запускалась функция nextFunction и активным становилось изображение следующее за выделенным классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>2. Добавьте на кнопку prev событие click, touch так, чтобы при событии запускалась функция prevFunction и активным становилось изображение до выделенного классом active-img (рамкой). Соответственно, на активном изображении появляется рамка, а остальные - лишаются рамки.</p>
<p>3. Учтите краевые эффекты - когда мы доходим до конца или начала, то нажатие кнопки должно приводить к перемещению рамки в начало или конец изображений.</p>
<p>4. Добавьте кнопку reset (функция resetFunction), нажатие которой сбрасывает активное изображение на нулевое. </p>
<p>5. Добавьте во все действия следующее - в изображении img-12-max заменяется src на активную. Т.е. произошло событие - заменилась главная картинка.</p>
*/

const images = document.querySelectorAll(".img-12-min");

let count = 0; // переменная, которая указывает на номер активного изображения в images

const next = document.querySelector(".next");
next.onclick = nextFunction;

const prev = document.querySelector(".prev");
prev.onclick = prevFunction;

const reset = document.querySelector(".reset");
reset.onclick = resetFunction;

let imgMax = document.querySelector(".img-12-max");

function nextFunction() {
  for (let i = 0; i < images.length; i++) {
    if (images[i].classList.contains("active-img")) {
      images[i].classList.remove("active-img");
      if (i === images.length - 1) {
        images[0].classList.add("active-img");
        count = 0;
      } else {
        images[i].nextElementSibling.classList.add("active-img");
        count = i + 1;
      }
      break;
    }
  }
  imgMax.src = images[count].src;
  console.log(images[count].src);
}

function prevFunction() {
  for (let i = images.length - 1; i >= 0; i--) {
    if (images[i].classList.contains("active-img")) {
      images[i].classList.remove("active-img");
      if (i === 0) {
        images[images.length - 1].classList.add("active-img");
      } else {
        images[i].previousElementSibling.classList.add("active-img");
        count = i - 1;
      }
      break;
    }
  }
  imgMax.src = images[count].src;
}

function resetFunction() {
  for (let i = images.length - 1; i >= 0; i--) {
    if (images[i].classList.contains("active-img")) {
      images[i].classList.remove("active-img");
      images[0].classList.add("active-img");
      count = 0;
      break;
    }
  }
  imgMax.src = images[count].src;
}
// ваше событие здесь!!!
