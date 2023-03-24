let btnList = document.querySelectorAll(".sildeBtn button");
let slideList = document.querySelector(".slideList");

btnList.forEach((btn, idx) => {
  btn.addEventListener("click", function () {
    slideList.style.transform = `translate(${idx * -100}%)`;
  });
});
