// const tabs = document.querySelector(".tabs");
// const btns = document.querySelectorAll(".button");
// const articles = document.querySelectorAll(".content");
// tabs.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;
//   if (id) {
//     // remove selected from other buttons
//     btns.forEach(function (btn) {
//       btn.classList.remove("live");
//     });
//     e.target.classList.add("live");
//     // hide other articles
//     articles.forEach(function (article) {
//       article.classList.remove("live");
//     });
//     const element = document.getElementById(id);
//     element.classList.add("live");
//   }
// });

 // Remove 'live' class from all buttons
                // btns.forEach((btn) => btn.classList.remove("live"));
                // Add 'live' class to the clicked button
                // this.classList.add("live");
                // Hide all contents

const btns = document.querySelectorAll(".button");
const contents = document.querySelectorAll(".content");

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        // Remove 'live' class from all buttons
        btns.forEach((btn) => btn.classList.remove("live"));
        // Add 'live' class to the clicked button
        this.classList.add("live");
        // Hide all contents
        contents.forEach((content) => content.classList.remove("live"));
        // Show the corresponding content
        contents[i].classList.add("live");
    });
}