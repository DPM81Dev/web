const greeting = document.getElementById("greeting");
const time = document.getElementById("time");
const location = document.getElementById("location");

const date = new Date();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();

greeting.innerHTML = "¡Bienvenido a mi sitio web!";
time.innerHTML = `${hour}:${minute}:${second}`;
location.innerHTML = `(${Intl.DateTimeFormat().resolvedOptions().timeZone})`;