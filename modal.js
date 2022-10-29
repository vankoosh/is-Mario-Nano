// this TOTALLY needs to be refactored and simplified with a function factory
// 

export default function Modal() {
  // SASS certificate
  const modalSS = document.getElementById("myModalSS");
  const imgSS = document.getElementById("certImgSass");
  const modalImgSS = document.getElementById("imgSS");
  // Bootstrap certificate
  const modalBS = document.getElementById("myModalBS");
  const imgBS = document.getElementById("certImgBS");
  const modalImgBS = document.getElementById("imgBS");

  // JS certificate
  const modalJS = document.getElementById("myModalJS");
  const imgJS = document.getElementById("certImgJS");
  const modalImgJS = document.getElementById("imgJS");

  // JS II certificate
  const modalJSS = document.getElementById("myModalJSS");
  const imgJSS = document.getElementById("certImgJSS");
  const modalImgJSS = document.getElementById("imgJSS");

  // React II certificate
  const modalRE = document.getElementById("myModalRE");
  const imgRE = document.getElementById("certImgRE");
  const modalImgRE = document.getElementById("imgRE");

  // give each modal background functionality to close on click
  document.querySelectorAll(".modal").forEach((modal) => {
    modal.onclick = function () {
      modal.style.display = "none";
    };
  });

  // SASS onclick event
  imgSS.onclick = function () {
    modalSS.style.display = "block";
    modalImgSS.src = this.src;
    if (window.innerWidth < 700) {
      modalImgSS.style.width = "95vw";
    } else {
      modalImgSS.style.width = "55vw";
    }
  };

  // Boostrap onclick event
  imgBS.onclick = function () {
    modalBS.style.display = "block";
    modalImgBS.src = this.src;
    if (window.innerWidth < 700) {
      modalImgBS.style.width = "95vw";
    } else {
      modalImgBS.style.width = "55vw";
    }
  };

  // JS onclick event
  imgJS.onclick = function () {
    modalJS.style.display = "block";
    modalImgJS.src = this.src;
    if (window.innerWidth < 700) {
      modalImgJS.style.width = "95vw";
    } else {
      modalImgJS.style.width = "55vw";
    }
  };

  // JS II onclick event
  imgJSS.onclick = function () {
    modalJSS.style.display = "block";
    modalImgJSS.src = this.src;
    if (window.innerWidth < 700) {
      modalImgJSS.style.width = "95vw";
    } else {
      modalImgJSS.style.width = "55vw";
    }
  };

  // React II onclick event
  imgRE.onclick = function () {
    modalRE.style.display = "block";
    modalImgRE.src = this.src;
    if (window.innerWidth < 700) {
      modalImgRE.style.width = "95vw";
    } else {
      modalImgRE.style.width = "55vw";
    }
  };
}
