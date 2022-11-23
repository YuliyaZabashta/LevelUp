document.addEventListener('DOMContentLoaded', function() {
  const deadline = new Date().getTime()+60*1000*30;
  let timerId = null;
  function declensionNum(num, words) {
    return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
  }
  function countdownTimer() {
    const diff = deadline - new Date();
    if (diff <= 0) {
      clearInterval(timerId);
    }
    const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
    const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
    $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
    $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
    $minutes.dataset.title = declensionNum(minutes, ['минута', 'минуты', 'минут']);
    $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунды', 'секунд']);
  }
  const $minutes = document.querySelector('.timer__minutes');
  const $seconds = document.querySelector('.timer__seconds');
  countdownTimer();
  timerId = setInterval(countdownTimer, 1000);
});

const helpName = document.querySelector('#helpName')
const helpNum = document.querySelector('#helpNum')
const nameInfo = document.querySelector('#help-name')
const numInfo = document.querySelector('#help-num')

function show(el1, el2){
    el1.addEventListener("mouseover", function() {
        el2.classList.add('active')
    })
}
function hide(el1, el2){
    el1.addEventListener("mouseout", function() {
        el2.classList.remove('active')
    })
}
show(helpName, nameInfo)
hide(helpName, nameInfo)
show(helpNum, numInfo)
hide(helpNum, numInfo)


const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
    smoothLink.addEventListener('click', function (e) {
        e.preventDefault();
        const id = smoothLink.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
};