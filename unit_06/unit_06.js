//  Task 1
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// <pre>
// ***_***_***_
// </pre>
// <p>где звездочкa рисуются с помощью внутреннего цикла от 0 до 3, а _ с помощью внешнего.</p>
const out1 = document.querySelector(".out-1");
function t1() {
  let out = "";
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 3; x++) {
      out += "*";
    }
    out += "_";
  }
  out1.innerHTML = out;
}

document.querySelector(".b-1").onclick = t1;

//  Task 2
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1
// *_*_*_
// 2
// *_*_*_
// 3
// *_*_*_
// <p>Решить задачу с помощью вложенных циклов. Внешний цикл выводит цифру и перенос строки br, внутренний - *_, и после этого внешний - знак переноса.</p>
function t2() {
  let out2 = document.querySelector(".out-2");
  let out = "";
  for (i = 1; i <= 3; i++) {
    out += i + "<br>";
    for (let x = 1; x <= 3; x++) {
      out += "*_";
    }
    out += "<br>";
  }
  out2.innerHTML = out;
}

document.querySelector(".b-2").onclick = t2;

//  Task 3
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// *_*_*_
// *_*_*_
// *_*_*_
// *_*_*_

// <p>Решить задачу с помощью вложенных циклов. Внутренний цикл выводит *_,  внешний цикл выводит перенос строки br.</p>
function t3() {
  let out3 = document.querySelector(".out-3");
  let out = "";
  for (let i = 0; i < 3; i++) {
    for (let x = 0; x < 3; x++) {
      out += "*_";
    }
    out += `<br>`;
  }
  out3.innerHTML = out;
}

document.querySelector(".b-3").onclick = t3;

//  Task 4
// <p>С помощью вложенных циклов, нарисуйте строку:</p>
// 1_1*2*3*4*5*2_1*2*3*4*5*3_1*2*3*4*5*
// Внешний цикл выводит цифру и _, а внутренний выводит от 1 до 5 с *
function t4() {
  let out4 = document.querySelector(".out-4");
  let out = "";
  for (let i = 1; i <= 3; i++) {
    out += `${i}_`;
    for (let k = 1; k <= 5; k++) {
      out += `${k}*`;
    }
  }
  out4.innerHTML = out;
}

document.querySelector(".b-4").onclick = t4;

//  Task 5
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 101010
// 101010
// 101010

// <p>Вложенный цикл в зависимости от четного или нет k (счетчика цикла) рисует или 0 или 1. Внешний цикл - br.</p>
let out5 = document.querySelector(".out-5");
function t5() {
  let out = "";
  for (let k = 0; k < 3; k++) {
    for (let i = 0; i < 6; i++) {
      if (i % 2 == 0) {
        out += 1;
      } else {
        out += 0;
      }
    }
    out += "<br>";
  }

  out5.innerHTML = out;
  console.log(out);
}

document.querySelector(".b-5").onclick = t5;

//  Task 6
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 10x01x
// 10x01x
// 10x01x
const out6 = document.querySelector(".out-6");
function t6() {
  let out = "";
  for (let a = 0; a < 3; a++) {
    for (let b = 0; b < 2; b++) {
      if (b % 2 == 0) {
        out += `10x`;
      } else {
        out += `01x`;
      }
    }
    out += `<br>`;
  }
  out6.innerHTML = out;
}

document.querySelector(".b-6").onclick = t6;

//  Task 7
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *
// **
// ***
// ****
const out7 = document.querySelector(".out-7");
function t7() {
  let out = "";
  for (let i = 1; i <= 4; i++) {
    for (let x = 0; x < i; x++) {
      out += `*`;
    }
    out += `<br>`;
  }
  out7.innerHTML = out;
}

document.querySelector(".b-7").onclick = t7;

//  Task 8
// Per aspera ad astra
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// *****
// ****
// ***
// **
// *
let out8 = document.querySelector(".out-8");
function t8() {
  let out = "";
  for (let i = 0; i < 5; i++) {
    for (let k = 5; k > i; k--) {
      out += `*`;
    }
    out += `<br>`;
  }
  out8.innerHTML = out;
}

document.querySelector(".b-8").onclick = t8;

//  Task 9
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

// 1_
// 1_2_
// 1_2_3_
// 1_2_3_4_
// 1_2_3_4_5_
let out9 = document.querySelector(".out-9");
function t9() {
  let out = "";
  for (let i = 1; i <= 5; i++) {
    for (let x = 1; x <= i; x++) {
      out += `${x}_`;
      console.log(out);
    }
    out += `<br>`;
  }
  out9.innerHTML = out;
}

document.querySelector(".b-9").onclick = t9;

//  Task 10
// <p>С помощью вложенных циклов, нарисуйте строку:</p>

//01_02_03_04_05_06_07_08_09_10_
//11_12_13_14_15_16_17_18_19_20_
//21_22_23_24_25_26_27_28_29_30_
//31_32_33_34_35_36_37_38_39_40_
//41_42_43_44_45_46_47_48_49_50_
let out10 = document.querySelector(".out-10");
function t10() {
  let out = "";
  for (let i = 0; i < 5; i++) {
    for (let k = 1; k <= 9; k++) {
      out += `${i}${k}_`;
    }
    out += `${(i + 1) * 10}_<br>`;
  }
  out10.innerHTML = out;
}

document.querySelector(".b-10").onclick = t10;
