// document.oncontextmenu = document.body.oncontextmenu = function () {
//   return false;
// };
// const flavoursContainer = document.getElementById("bappi");
// const flavoursScrollWidth = flavoursContainer.scrollWidth;

// window.addEventListener("load", () => {
//   self.setInterval(() => {
//     console.log(flavoursContainer.scrollLeft);
//     if (flavoursContainer.scrollLeft !== flavoursScrollWidth) {
//       flavoursContainer.scrollTo(flavoursContainer.scrollLeft + 1, 0);
//     }
//   }, 15);
// });

function togglenav() {
  if (document.querySelector("#nav").classList.value.search("show") > 0) {
    document.querySelector("#nav").classList.remove("show");
  } else {
    document.querySelector("#nav").classList.add("show");
  }
}

function load() {
  if (document.querySelector("#nav").classList.value.search("show") > 0) {
    document.querySelector("#nav").classList.remove("show");
  }
}
