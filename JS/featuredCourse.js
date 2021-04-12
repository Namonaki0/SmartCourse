//? FEATURED COURSE

const courseModalProps = () => {
  courseOutputWrapper.style.animation = "courseModal";
  courseOutputWrapper.style.animationDuration = "150ms";
  courseOutputWrapper.style.opacity = "1";
  courseOutputWrapper.style.visibility = "visible";
  courseOutputWrapper.style.pointerEvents = "all";
  courseOutputWrapper.style.zIndex = "10000";
  document.body.style.overflowY = "hidden";
};

const modalFlexLayout = () => {
  courseOutputWrapper.style.display = "flex";
  courseModalProps();
};

const modalOriginalLayout = () => {
  courseOutputWrapper.style.display = "";
  courseModalProps();
};

function modalProps() {
  if (window.screen.width >= 900 && window.screen.height >= 750) {
    modalFlexLayout();
  }
  modalOriginalLayout();
}

//? COURSE INFORMATION
const featuredCourseInfo = [
  {
    //? JAVASCRIPT BOOTCAMP
    name: "JavaScript Bootcamp",
    src: "Images/image7.jpg",
    details:
      "The most comprehensive JS course you will find online. Everything you need to know to get you hired is emphasized here.",
    instructor: "Bob Zeroll",
    enrolled: "25239 people",
    rating: "★★★★★",
  },
];

const featuredCourseBtn = document.querySelector(".explore-btn");

featuredCourseBtn.addEventListener("click", (e) => {
  if (e.target.classList.contains("javascript-bootcamp")) {
    e.preventDefault();
    modalProps();
    imageSrc.src = courseInfo[6].src;
    courseTitle.innerText = courseInfo[6].name;
    courseDetails.innerText = courseInfo[6].details;
    instructorDetails[0].innerText = featuredCourseInfo[0].instructor;
    instructorDetails[1].innerText = featuredCourseInfo[0].enrolled;
    instructorDetails[2].innerText = featuredCourseInfo[0].rating;
  }
});
