const yourURL = document.querySelector("#yourUrl");
const qrCode = document.querySelector("#qr-code");


const isValidUrl = (url) => {
  // Regular expression for a valid URL
  const urlRegex = /^(https?:\/\/)?([\w.]+)\.([a-z]{2,})(\/.*)?$/i;
  return urlRegex.test(url);
};

const generateSubmit = (e) => {
  e.preventDefault();
  clearQR();
 
  const url = document.querySelector("#urlData").value;
  console.log(url);
 
  //form validation
  if (!isValidUrl(url)) {
    alert("please enter a valid url");
  } else {
    generateQrCode(url);
  }
};
 
const generateQrCode = (url) => {
  const qr = new QRCode(document.getElementById("qr-code"), {
    text: url,
    width: 128,
    height: 128,
  });
};
 
const clearQR = () => {
  qrCode.innerHTML = "";
};

yourURL.addEventListener("submit", generateSubmit);

document.addEventListener('DOMContentLoaded', () => {

  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

  // Add a click event on each of them
  $navbarBurgers.forEach( el => {
    el.addEventListener('click', () => {

      // Get the target from the "data-target" attribute
      const target = el.dataset.target;
      const $target = document.getElementById(target);

      // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
      el.classList.toggle('is-active');
      $target.classList.toggle('is-active');

    });
  });

});