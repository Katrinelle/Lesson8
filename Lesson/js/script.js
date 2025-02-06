// -----
// let elem = document.getElementById("elem");
// console.log(elem);
// elem.style.background = "red";
// elem.style.color = "yellow";

// -----

// let elements = document.querySelectorAll("ul>li:last-child");
// for (let elem of elements) {
//   alert(elem.innerHTML);
// }

// -----
// створення елементу

// let div = document.createElement("div");
// let text = document.createTextNode("Hola!");

// -----
// створення повідомлень

// // 1. Створіть елемент <div>
// let div = document.createElement("div");

// // 2. Задайте йому клас "alert"
// div.className = "alert";

// // 3. Наповніть <div> змістом
// div.innerHTML =
//   "<strong>Всім привіт!</strong> Ви прочитали важливе повідомлення.";

// // метод append - вставити десь на сторінці (body)
// document.body.append(div);

// -----

// let elem = document.getElementById("elem");
// elem.style.background = "green";

// -----
// querySelectorAll

// let elements = document.querySelectorAll("ul>li:last-child");
// for (element of elements) {
//   console.log(element);
// } // видає в консоль останню дитину

// -----
// querySelector

// let element = document.querySelector("li");
// console.log(element);

// -----

// let element = document.getElementsByTagName("div");
// console.log(element); // видає коллекцію всіх div

// -----

// let textHidden = document.getElementById("textHidden");
// textHidden.hidden = true; // текст зи сторінки ховається
// console.log(textHidden);

// -----

// let message = document.getElementById("message");
// console.log(message.value); // отримуємо текст з html.
// // якщо без value - отримаємо повністю формулу

// -----

// let text = document.querySelector(".text-message");
// console.log(text.textContent); // отримуємо текст з html.
// // // якщо без textContent - отримаємо повністю формулу

// -----

// let text = document.querySelector(".text-message");
// console.log(text.textContent); //отримуємо текст з html.
// // // якщо без textContent - отримаємо повністю формулу
// text.textContent = "Hello, Olga"; // змінюємо текст прям на сайті

// -----
// міняємо стилі

// let btn = document.querySelector(".button");

// btn.style.backgroundColor = "red";

// -----

// let text = document.querySelector("#p_text");
// console.log(text.classList); // всі class які є у елемента в HTML по цьому id
// console.log(text.classList.contains("red")); // true - перевірили чі є class="red"
// // у елемента по id="p_text"

// // видаляємо якийсь class
// text.classList.remove("red");
// console.log(text.classList.contains("red")); // false

// // додаємо class
// text.classList.add("new");
// console.log(text.classList); // є новий class="new"

// -----

// let image = document.querySelector(".image");

// console.log(image.hasAttribute("src")); // true - перевіряємо чи
// //має цей елемент атрібут src

// console.log(image.getAttribute("src")); // посилання на картинку
// // get - показує атрібут

// -----
// DOM вузли

// створюємо вузол
// const item = document.createElement("a"); // створили елемент <a>
// щоб його побачити на сторінці - треба додати деталей

// item.href = "#";
// item.classList.add("btn");
// item.textContent = "3";

// const nav = document.querySelector(".nav");
// nav.appendChild(item); // зявилось 3

// // додаємо заголовок

// const heading = document.createElement("h1");
// heading.textContent = "Hello";

// const container = document.querySelector(".conteiner");
// container.insertBefore(heading, nav); // Hello - на сайті

// видаляємо елемент

// // старий метод (працює у всіх барузерах):
// nav.removeChild(item); // зникла 3

// новий метод
// item.remove(); // зникла 3

// // клонуємо елемент, щоб використати в іншому місці
// const text = document.querySelector(".text");

// const parent = document.querySelector(".parent");

// const clone = text.cloneNode(true);

// parent.appendChild(clone); // текст продублювався

// -----

// додаємо елемент:

// --- варіант 1
// const container = document.querySelector(".conteiner");

// const text = `<p>Sorry</p>`;

// // container.innerHTML = text; // замінює заголовок Hello на Sorry
// container.innerHTML += text; // додає заголовок Sorry після Hello

// ---

// --- варіант 2 (кращий, бо не перерендує усю сторінку)

// const list = document.querySelector("#list");

// list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>"); // beforebegin перед списком
// list.insertAdjacentHTML("afterbegin", "<li>after</li>"); // after на початку списку
// list.insertAdjacentHTML("beforeend", "<li>end</li>"); // end в кінці списку
// list.insertAdjacentHTML("afterend", "<p>afterend</p>"); // afterend після списку

// -----

// const list = document.querySelector("#list");

// list.insertAdjacentHTML("beforebegin", "<p>beforebegin</p>");
// list.insertAdjacentHTML("afterbegin", "<li>afterbegin</li>");
// list.insertAdjacentHTML("beforeend", "<li>beforeend</li>");
// list.insertAdjacentHTML("afterend", "<p>afterend</p>");
