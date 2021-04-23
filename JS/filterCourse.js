const filterCourseWrapper = document.querySelector(".filter-course-wrapper");
const filterCourse = document.querySelector("#filter-course");
// const filterUserInput = filterCourse[".filter-user-input"];
// const courseUserBtn = filterCourse[".course-filter-btn"];

const filterUserInput = document.querySelector(".filter-user-input");

filterUserInput.addEventListener("change", (e) => {
  console.log(e.target.value);
});
