// const { title } = require("node:process");

const filterCourseWrapper = document.querySelector(".filter-course-wrapper");
const filterCourse = document.querySelector("#filter-course");
// const filterUserInput = filterCourse[".filter-user-input"];
// const courseUserBtn = filterCourse[".course-filter-btn"];
const titles = document.querySelectorAll("h4");

// for (i = 0; i < titles.length; i++) {
//   console.log(titles[i].textContent);
// }

const filterUserInput = document.querySelector(".filter-user-input");

filterUserInput.addEventListener("change", (e) => {
  let inputValue = e.target.value.toLowerCase();
  titles.forEach((title) => {
    inputValue == title.textContent ? console.log("yes") : console.log("no");
  });

  console.log(inputValue);
});
