// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-1.  */

function t1() {
  document.querySelector(".out-1").textContent = block.textContent;
}
const block = document.querySelector(".div-1");
block.addEventListener("click", t1);

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */

function t2(e) {
  console.log(e);
  e.altKey ? (out.textContent = true) : (out.textContent = false);
}
document.querySelector(".div-2").addEventListener("click", t2);
let out = document.querySelector(".out-2");
// ваше событие здесь!!!

// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 10 кликов - на 50px. Ширину выводите в out-3. */

let w3 = 75;

function t3() {
  w3 += 5;
  block3.style.width = `${w3}px`;
  document.querySelector(".out-3").textContent = `${w3}px`;
}
const block3 = document.querySelector(".div-3");
block3.addEventListener("click", t3);
// ваше событие здесь!!!

// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран содержимое блока (только текст). Вывод осуществляется в out-4. */

function t4(e) {
  out4.textContent = block4.textContent;
}

let block4 = document.querySelector(".div-4");
block4.addEventListener("dblclick", t4);

let out4 = document.querySelector(".out-4");
// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он есть и добавляется если такого класса нет. */

function t5() {
  block5.classList.toggle("active");
}
let block5 = document.querySelector(".div-5");
block5.addEventListener("dblclick", t5);
// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. Скрытие и показ делайте через добавление - удаление класса .hide */

function t6() {
  document.querySelector(".ul-6").classList.toggle("hide");
}
let div6 = document.querySelector(".div-6");
div6.addEventListener("dblclick", t6);
// ваше событие здесь!!!

// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */

function t7(e) {
  div7.classList.toggle("active");
}
const div7 = document.querySelector(".div-7");
div7.addEventListener("contextmenu", t7);
// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой мыши если checkbox выбран и отключает если не выбран. */

function t8(e) {
  if (e.target.checked) {
    document.addEventListener("contextmenu", preventFunc);
  } else {
    document.removeEventListener("contextmenu", preventFunc);
  }
}
function preventFunc(e) {
  e.preventDefault();
}

let chBox = document.querySelector(".ch-8");
chBox.addEventListener("change", t8);

// ваше событие здесь!!!

// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */

function t9(e) {
  e.preventDefault();
  let image = document.querySelector(".div-9 img");
  image.src = "img/2.png";
}
document.querySelector(".div-9").addEventListener("contextmenu", t9);
// ваше событие здесь!!!

// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. */

function t10(e) {
  let image = document.querySelector(".div-10 img");
  image.src = "img/2.png";
}
document.querySelector(".div-10").addEventListener("mouseenter", t10);
// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */

function t11(e) {
  console.log(e);
  let img = document.querySelector(".div-11 img");
  if (e.type === "mouseenter") {
    img.src = "img/2.png";
  }
  if (e.type === "mouseleave") {
    img.src = "img/1.png";
  }
}
let div11 = document.querySelector(".div-11");
div11.addEventListener("mouseenter", t11);
div11.addEventListener("mouseleave", t11);
// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */
document.querySelector(".div-12").addEventListener("mousedown", () => {
  document.querySelector(".div-12").classList.add("active");
});
// функцию пишите самостоятельно

// ваше событие здесь!!!

// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
let div13 = document.querySelector(".div-13");
div13.addEventListener("mousedown", () => div13.classList.add("active"));
div13.addEventListener("mouseup", () => div13.classList.remove("active"));
// функцию пишите самостоятельно
// ваше событие здесь!!!

// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, при клике добавляем блоку div-14 класс active. */

function t14() {
  let div14 = document.querySelector(".div-14");
  div14.onclick = () => div14.classList.add("active");
}
document.querySelector(".b-14").onclick = t14;

// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let div15 = document.querySelector(".div-15");

function t15(e) {
  let val = +div15.textContent;
  val += 1;
  div15.textContent = val;
}
// ваше событие здесь!!!
div15.addEventListener("mousemove", t15);

// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let div16 = document.querySelector(".div-16");
let startW = div16.offsetWidth;
function t16(e) {
  startW += 1;
  div16.style.width = `${startW}px`;
}
// ваше событие здесь!!!
div16.addEventListener("mousemove", t16);

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move в задании 16. */

function t17On() {
  div16.addEventListener("mousemove", t16);
}
function t17Off() {
  div16.removeEventListener("mousemove", t16);
}

document.querySelector(".b-17_on").addEventListener("click", t17On);
document.querySelector(".b-17_off").addEventListener("click", t17Off);
// ваше событие здесь!!!
// ваше событие здесь!!!

// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */

function t18() {}
// ваше событие здесь!!!

// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */

function t19() {}
// ваше событие здесь!!!

// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом событии mousemove внутри progress. */

function t20() {}
// ваше событие здесь!!!
