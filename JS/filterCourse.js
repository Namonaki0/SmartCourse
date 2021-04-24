const filterUserInput = document.querySelector(".filter-user-input");
const courseDesc = document.querySelectorAll(".course-desc");
const filterCourseWrapper = document.querySelector(".filter-course-wrapper");
const filterCourses = document.querySelector(".filter-course");

function filterCourse() {
  let userInput = filterUserInput.value.toLowerCase();
  for (i = 0; i < courseDesc.length; i++) {
    const courseTitle = courseDesc[i].getElementsByTagName("h4");
    let filterResult = courseTitle[0].textContent.toLowerCase();
    filterResult.indexOf(userInput) > -1
      ? (courseDesc[i].style.display = "")
      : (courseDesc[i].style.display = "none");
  }
  userInput
    ? (filterCourses.style.width = "100%")
    : (filterCourses.style.width = "");
}
