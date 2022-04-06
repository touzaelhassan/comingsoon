const monthsElement = document.querySelector('#months');
const daysElement = document.querySelector('#days');
const hoursElement = document.querySelector('#hours');
const minutesElement = document.querySelector('#minutes');
const secondsElement = document.querySelector('#seconds');

let countDownDate = new Date('Jan 5, 2023 17:37:25').getTime();

setInterval(function () {
  let now = new Date().getTime();

  let distance = countDownDate - now;

  let months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
  let days = Math.floor(
    (distance % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24)
  );
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  monthsElement.innerHTML = months;
  daysElement.innerHTML = days;
  hoursElement.innerHTML = hours;
  minutesElement.innerHTML = minutes;
  secondsElement.innerHTML = seconds;
}, 1000);
