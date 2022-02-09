import Cookies from '../../node_modules/js-cookie/dist/js.cookie.mjs';

const cookiePane = document.getElementById('cookie-pane');
const cancel = document.getElementById('cancel');
const valide = document.getElementById('valide');
const cookie1 = document.getElementById('cookie-1');
const cookie2 = document.getElementById('cookie-2');
// url for apply the cookie consent
const url =
  'https://www.numerama.com/pop-culture/656316-cleopatre-et-la-societe-des-architectes.html';

const urlLocal = 'http://127.0.0.1:5500/src/index.html';

// check if cookie is true
const cookieConsent = Cookies.get('Numerama');
const googleRubicon = Cookies.get('Google-rubicon');
if (googleRubicon || cookieConsent) {
  cookiePane.style.display = 'none';
}

cancel.addEventListener('click', () => {
  animateCSS('#cookie-pane', 'fadeOut');
  setTimeout(() => {
    cookiePane.style.display = 'none';
  }, 1000);
});

valide.addEventListener('click', () => {
  if (cookie1.checked && cookie2.checked) {
    animateCSS('#cookie-pane', 'fadeOut');
    setTimeout(() => {
      cookiePane.style.display = 'none';
    }, 1000);
  }
  if (cookie1.checked) {
    Cookies.set('Numerama', 'true', { expires: 30, path: urlLocal });
  }
  if (cookie2.checked) {
    Cookies.set('Google-rubicon', 'true', { expires: 30, path: urlLocal });
  }
});

// for the animation of the box
const animateCSS = (element, animation, prefix = 'animate__') =>
  // We create a Promise and return it
  new Promise((resolve, reject) => {
    const animationName = `${prefix}${animation}`;
    const node = document.querySelector(element);

    node.classList.add(`${prefix}animated`, animationName);

    // When the animation ends, we clean the classes and resolve the Promise
    function handleAnimationEnd(event) {
      event.stopPropagation();
      node.classList.remove(`${prefix}animated`, animationName);
      resolve('Animation ended');
    }

    node.addEventListener('animationend', handleAnimationEnd, { once: true });
  });
animateCSS('#cookie-pane', 'fadeIn');
