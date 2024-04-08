"use strict";

const monSign = document.querySelector(".mon__sign");
const money = document.querySelector(".money");
const tueSign = document.querySelector(".tue__sign");
const moneyTwo = document.querySelector(".money__two");
const wedSign = document.querySelector(".wed__sign");
const moneyThree = document.querySelector(".money__three");
const thuSign = document.querySelector(".thu__sign");
const moneyFour = document.querySelector(".money__four");
const friSign = document.querySelector(".fri__sign");
const moneyFive = document.querySelector(".money__five");
const satSign = document.querySelector(".sat__sign");
const moneySix = document.querySelector(".money__six");
const sunSign = document.querySelector(".sun__sign");
const moneySeven = document.querySelector(".money__seven");

monSign.addEventListener("mouseover", function () {
  money.classList.toggle("hidden");
  monSign.style.backgroundColor = "hsl(10, 88%, 80%)";
});

monSign.addEventListener("mouseout", function () {
  money.classList.toggle("hidden");
  monSign.style.backgroundColor = "hsl(10, 79%, 65%)";
});

tueSign.addEventListener("mouseover", function () {
  moneyTwo.classList.toggle("hidden");
  tueSign.style.backgroundColor = "hsl(10, 88%, 80%)";
});

tueSign.addEventListener("mouseout", function () {
  moneyTwo.classList.toggle("hidden");
  tueSign.style.backgroundColor = "hsl(10, 79%, 65%)";
});

wedSign.addEventListener("mouseover", function () {
  moneyThree.classList.toggle("hidden");
  wedSign.style.backgroundColor = "hsl(186, 44%, 81%)";
});

wedSign.addEventListener("mouseout", function () {
  moneyThree.classList.toggle("hidden");
  wedSign.style.backgroundColor = "hsl(186, 33%, 63%)";
});

thuSign.addEventListener("mouseover", function () {
  moneyFour.classList.toggle("hidden");
  thuSign.style.backgroundColor = "hsl(10, 88%, 80%)";
});

thuSign.addEventListener("mouseout", function () {
  moneyFour.classList.toggle("hidden");
  thuSign.style.backgroundColor = "hsl(10, 79%, 65%)";
});

friSign.addEventListener("mouseover", function () {
  moneyFive.classList.toggle("hidden");
  friSign.style.backgroundColor = "hsl(10, 88%, 80%)";
});

friSign.addEventListener("mouseout", function () {
  moneyFive.classList.toggle("hidden");
  friSign.style.backgroundColor = "hsl(10, 79%, 65%)";
});

satSign.addEventListener("mouseover", function () {
  moneySix.classList.toggle("hidden");
  satSign.style.backgroundColor = "hsl(10, 88%, 80%)";
});

satSign.addEventListener("mouseout", function () {
  moneySix.classList.toggle("hidden");
  satSign.style.backgroundColor = "hsl(10, 79%, 65%)";
});

sunSign.addEventListener("mouseover", function () {
  moneySeven.classList.toggle("hidden");
  sunSign.style.backgroundColor = "hsl(10, 88%, 80%)";
});

sunSign.addEventListener("mouseout", function () {
  moneySeven.classList.toggle("hidden");
  sunSign.style.backgroundColor = "hsl(10, 79%, 65%)";
});
