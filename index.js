window.onscroll = function () {
  myFunction();
};

var header = document.querySelector(".navbar_sticky");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}

// const secondSection = document.querySelector(".second_section_center_btn");
// const btn = document.getElementById("showdiv");

// btn.addEventListener("click", function () {
//   secondSection.classList.add("active");
//   console.log("clcik");
// });


let counter = 0;

function increment() {
  counter++;
}

function decrement() {
  counter--;
}

function get() {
  return counter;
}

const inc = document.getElementById("increment");
const input = document.getElementById("input");
const dec = document.getElementById("decrement");

inc.addEventListener("click", () => {
  increment();
  input.value = get();
});

dec.addEventListener("click", () => {
  if (input.value > 0) {
    decrement();
  }
  input.value = get();
});
