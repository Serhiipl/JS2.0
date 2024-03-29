//  Task 1
// Кнопка b-1 запускает функцию t1. Функция должна выводить в .out-1 строку вида (... это просто для сокращения здесь. Вы выводите все числа от 1 до 50. Все. Три точки мы не выводим!!!!!):
//     1_2_3_4_5_6_7_8_9_ ... 49_50_
// от 1 до 50 включительно. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла.

let out1 = document.querySelector(".out-1");
function t1() {
  let outStr = "";
  let i = 1;
  while (i <= 50) {
    outStr += i + `_`;
    i++;
  }
  out1.textContent = outStr;
}

document.querySelector(".b-1").onclick = t1;

//  Task 2
// Кнопка b-2 запускает функцию t2. Функция должна выводить в .out-2 строку вида (вы выводите все числа с шагом 2 без пропуска. Три точки не выводите! Пропуска чисел с 6 по 44 нет. ):
//     2_4_6_ ... 44_46_
// от 2 до 46 c шагом 2. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.
let out2 = document.querySelector(".out-2");
function t2() {
  let outStr = "";
  let i = 2;
  while (i <= 46) {
    outStr += i + `_`;
    i += 2;
  }
  out2.textContent = outStr;
}

document.querySelector(".b-2").onclick = t2;

//  Task 3
// Кнопка .b-3 запускает функцию t3. Функция должна выводить в .out-3 строку вида:
// 25_24_23_22_21_20_19_18_17_16_15_14_13_12_11_10_9_8_7_
// от 25 до 7 c шагом 1. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.
let out3 = document.querySelector(".out-3");
function t3() {
  let outStr = "";
  let i = 25;
  while (i >= 7) {
    outStr += i + `_`;
    i--;
  }
  out3.textContent = outStr;
}

document.querySelector(".b-3").onclick = t3;

//  Task 4
// Кнопка b-4 запускает функцию t4. Функция должна выводить в .out-4 строку вида:
// 77_74_71_68_65_62_59_56_53_50_47_44_41_38_35_
// от 77 до 35 c шагом 3. Разделитель - нижнее подчеркивание. Задача решается с помощью цикла  while.
let out4 = document.querySelector(".out-4");
function t4() {
  let outStr = "";
  let i = 77;
  while (i >= 35) {
    outStr += i + `_`;
    i -= 3;
  }
  out4.textContent = outStr;
}

document.querySelector(".b-4").onclick = t4;

//  Task 5
// Кнопка .b-5 запускает функцию t5. Функция должна выводить в .out-5 строку вида:
// 1_*2_**3_*4_**5_*6_**7_*8_**9_*10_**11_*12_**13_*14_**15_*16_**17_*
// от 1 до 17 c шагом 1. Разделитель - знак подчеркивания и одна звездочка если число нечетное, и две звездочки если четное. Задача решается с помощью цикла  while.
let out5 = document.querySelector(".out-5");
function t5() {
  let outStr = "";
  let i = 1;
  while (i <= 17) {
    if (i % 2 === 0) {
      outStr += i + `_**`;
    } else {
      outStr += i + `_*`;
    }
    i++;
  }
  console.log(outStr);
  out5.textContent = outStr;
}

document.querySelector(".b-5").onclick = t5;

//  Task 6
// Кнопка .b-6 запускает функцию t6. Функция должна выводить в .out-6 строку вида:
// ******
// ******
// ******
// Задача решается с помощью цикла. В каждой итерации цикл выводит 6 звездочек без пробелов и символ переноса строки br.
// Количество строк (итераций, повторений) цикла  while вводит пользователь в .i-6.
let out6 = document.querySelector(".out-6");
let inp6 = document.querySelector(".i-6");
function t6() {
  let out = "";
  let inp = inp6.value;
  let i = 1;

  while (i <= inp) {
    out += `******<br>`;
    i++;
  }
  out6.innerHTML = out;
}

document.querySelector(".b-6").onclick = t6;

//  Task 7
// Есть input .i-7 куда пользователь может ввести число больше нуля (проверок не делаем, принимаем как факт).
// По нажатию кнопки .b-7 должна запускаться функция f7, которая выводит в .out-7 числа от введенного пользователем включительно до нуля включительно.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и нажал кнопку, мы получим:
//     4_3_2_1_0_
// Задача решается с помощью цикла  while.
let out7 = document.querySelector(".out-7");
let inp7 = document.querySelector(".i-7");
function t7() {
  let inp = inp7.value;
  let out = "";

  while (inp >= 0) {
    out += `${inp}_`;
    inp--;
  }
  out7.textContent = out;
}

document.querySelector(".b-7").onclick = t7;

//  Task 8
// Есть input .i-81 и .i-82 куда пользователь может ввести числа больше нуля (проверок не делаем, принимаем как факт).
// Считаем, что второе число всегда больше первого.
// По нажатию кнопки .b-8  должна запускаться функция f8, которая выводит в .out-8 числа от первого введенного включительно до второго включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// Задача решается с помощью цикла  while.
let out8 = document.querySelector(".out-8");
let inp81 = document.querySelector(".i-81");
let inp82 = document.querySelector(".i-82");
function t8() {
  let inp1 = inp81.value;
  let inp2 = inp82.value;
  let out = "";
  while (inp1 <= inp2) {
    out += `${inp1}_`;
    inp1++;
  }
  out8.textContent = out;
}

document.querySelector(".b-8").onclick = t8;

//  Task 9
// Есть input .i-91 и .i-92 куда пользователь может ввести числа.
// По нажатию кнопки .b-9 должна запускаться функция f9, которая выводит в .out-9 числа от меньшего введенного до большего включительно, с шагом 1.
// Разделитель знак подчеркивания. Если пользователь ввел 4 и 8  и нажал кнопку, мы получим:
//     4_5_6_7_8_
// если ввел 8 и 6, то получим
// 6_7_8_
// Задача решается с помощью цикла. Подсказка - вначале делаем проверку и при необходимости поменять местами значения в переменных местами, а потом запускаем цикл  while.
let out9 = document.querySelector(".out-9");
let inp91 = document.querySelector(".i-91");
let inp92 = document.querySelector(".i-92");
function t9() {
  let inp1 = inp91.value;
  let inp2 = inp92.value;
  console.log(inp1);
  let out = "";

  if (inp1 < inp2) {
    while (inp1 <= inp2) {
      out += `${inp1}_`;
      inp1++;
    }
  } else if (inp1 > inp2) {
    while (inp1 >= inp2) {
      out += `${inp2}_`;
      inp2++;
    }
  }
  out9.textContent = out;
}
document.querySelector(".b-9").onclick = t9;

//  Task 10
// Кнопка .b-10 запускает функцию t10. Функция должна выводить в .out-10 четные годы от 1950 до 1966 включительно.
// Разделитель знак подчеркивания. Задача решается через цикл, а четность - через шаг (равный 2).

function t10() {
  let i = 1950;
  let out = "";
  while (i <= 1966) {
    out += `${i}_`;
    i += 2;
  }
  document.querySelector(".out-10").textContent = out;
}

document.querySelector(".b-10").onclick = t10;

//  Task 11
// Кнопка b-11 запускает функцию t11.  Функция должна:
//     получить все div.div-11
// перебрать их с помощью цикла  while. Обращение к div выглядит так ваша_переменная[i]
// вывести в .out-11 содержимое каждого блока. Разделитель - знак подчеркивания.
//     В результате должно получиться так:
//     one_3_4_two_
let divs = document.querySelectorAll(".div-11");
let out11 = document.querySelector(".out-11");
function t11() {
  let out = "";
  let i = 0;
  while (i < divs.length) {
    out += `${divs[i].textContent}_`;
    i++;
  }
  out11.textContent = out;
}

document.querySelector(".b-11").onclick = t11;

//  Task 12
// Кнопка .b-12 запускает функцию t12.  Функция должна:
//     получить все div.div-12
// перебрать их с помощью цикла  while. Обращение к div выглядит так elem[i]
// применить к каждому elem[i].style.background = 'orange'
let divs12 = document.querySelectorAll(".div-12");
function t12() {
  let i = 0;
  while (i < divs12.length) {
    divs12[i].style.background = "orange";
    i++;
  }
}

document.querySelector(".b-12").onclick = t12;

//  Task 13
// Кнопка .b-13 запускает функцию t13.  Функция должна:
//     получить все input.i-13
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// применить к каждому elem[i].value, причем к value первого должно равняться 1, второго - 2, третьего - 3...
let inputs = document.querySelectorAll(".i-13");
function t13() {
  let i = 0;
  let out = "";
  while (i < inputs.length) {
    out += inputs[i].value = i + 1;
    i++;
  }
}

document.querySelector(".b-13").onclick = t13;

//  Task 14
// Кнопка .b-14 запускает функцию t14  Функция должна:
//     получить все input.i-14
// перебрать их с помощью цикла  while. Обращение к элементу выглядит так elem[i]
// вывести в .out-14 value выбранного. Проверить выбран ли элемент можно с помощью elem[i].checked.
let inp14 = document.querySelectorAll(".i-14");
let out14 = document.querySelector(".out-14");
function t14() {
  let i = 0;
  // let
  while (i < inp14.length) {
    if (inp14[i].checked) {
      out14.innerHTML = inp14[i].value;
    }
    i++;
  }
}

document.querySelector(".b-14").onclick = t14;

//  Task 15
// Кнопка .b-15 запускает функцию t15  Функция должна выводить следующую последовательность в .out-15:
// 77_88_99_77_88_99_77_88_99_
// Для вывода использовать цикл  while. Разделитель подчеркивание.
let out15 = document.querySelector(".out-15");
function t15() {
  let out = "";
  let i = 0;
  while (i < 3) {
    out += `77_`;
    i++;
    let k = 0;
    while (k < 1) {
      out += `88_`;
      k++;
      let f = 0;
      while (f < 1) {
        out += `99_`;
        f++;
      }
    }
  }
  out15.textContent = out;
}

document.querySelector(".b-15").onclick = t15;
