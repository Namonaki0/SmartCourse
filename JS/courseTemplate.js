//? GLOBAL
const imageSrc = document.querySelector(".course-img");
const courses = document.querySelectorAll(".course-desc img");
const courseCta = document.querySelector("#course-cta");
const courseCtaAll = document.querySelectorAll(".cta-course-page");
const courseOutputWrapper = document.querySelector("#course-output-wrapper");
const courseTitle = courseOutputWrapper.querySelector("h4");
const courseDetails = courseOutputWrapper.querySelector("p");
const closeBtn = courseOutputWrapper.querySelector(".close-btn");
const bottomDetails = document.querySelector(".bottom-details");
const instructorDetails = bottomDetails.querySelectorAll("span");
const classVideos = document.querySelectorAll(".classVideo span:last-child");

//? COURSE INFORMATION
const courseInfo = [
  {
    //? PATTERN DESIGN
    name: "pattern design",
    src: "Images/Image1.jpeg",
    details:
      "The most comprehensive course on how to create the best looking patterns for your web and mobile applications. Highly rated by the best in the business.",
    instructor: "Anthony Jenkins",
    enrolled: "624 people",
    rating: "★★★★★",
  },
  {
    //? DESIGN THINKING
    name: "Design Thinking",
    src: "Images/Image2.jpg",
    details:
      "From conception to prototyping and everything else you need to know about the design for web applications. Dive deep into what is essential.",
    instructor: "Mark Rogers",
    enrolled: "522 people",
    rating: "★★★★",
  },
  {
    //? UX/UI FUNDAMENTALS
    name: "UX/UI Fundamentals",
    src: "Images/Image3.jpeg",
    details:
      "Get familiarized with all the important terminology when it comes to UX/UI and learn about key concepts such as 'user journey' and 'empathy'.",
    instructor: "Pablo Francisco",
    enrolled: "972 people",
    rating: "★★★★★",
  },
  {
    //? PYTHON BOOTCAMP
    name: "Python Bootcamp",
    src: "Images/Image4.jpeg",
    details:
      "One of the most interesting and diverse language you can learn. This bootcamp will teach the most important core concepts and implementations for your future projects.",
    instructor: "Robert Stevens",
    enrolled: "1634 people",
    rating: "★★★★★",
  },
  {
    //? COMPUTER SCIENCE
    name: "Computer Science",
    src: "Images/Image5.jpg",
    details:
      "Get to know the ins and outs of your computer by diving deep into our CS course. It will provide you with invaluable knowledge and make sure you are left with great confidence.",
    instructor: "Amelia Borges",
    enrolled: "2652 people",
    rating: "★★★★★",
  },
  {
    //? HTML & CSS BOOTCAMP
    name: "HTML & CSS Bootcamp",
    src: "Images/Image6.jpeg",
    details:
      "Go from absolute beginner to a pro by creating visually pleasing webpages in this project based course. Leave your 'footprint' in the vast world that is Web Development. See you inside.",
    instructor: "Kevin Powell",
    enrolled: "10239 people",
    rating: "★★★★★",
  },
  {
    //? JAVASCRIPT BOOTCAMP
    name: "JavaScript Bootcamp",
    src: "Images/Image7.jpg",
    details:
      "The most comprehensive JS course you will find online. Everything you need to know to get you hired is emphasized here.",
    instructor: "Bob Zeroll",
    enrolled: "25239 people",
    rating: "★★★★★",
  },
];

//? MODAL SHARED PROPERTIES
const modalSharedProps = () => {
  courseOutputWrapper.style.animation = "courseModal";
  courseOutputWrapper.style.animationDuration = "150ms";
  courseOutputWrapper.style.opacity = "1";
  courseOutputWrapper.style.visibility = "visible";
  courseOutputWrapper.style.pointerEvents = "all";
  courseOutputWrapper.style.zIndex = "10000";
  document.body.style.overflowY = "hidden";
};

//? SCREEN RESPONSIVENESS
function modalProps() {
  if (window.screen.width >= 900 && window.screen.height >= 750) {
    courseOutputWrapper.style.display = "flex";
    modalSharedProps();
  } else {
    courseOutputWrapper.style.display = "";
    modalSharedProps();
  }
}

//? VIDEO DURATION FOR EACH LESSON
const videoDuration = [
  "30mins",
  "1h 05mins",
  "2h 15mins",
  "1h 05mins",
  "2h 30mins",
  "3h 10mins",
  "2h 30mins",
  "2h 50mins",
  "2h 20mins",
  "3h 15mins",
  "2h 45mins",
  "35mins",
];

//? ADDING VIDEO DURATION TO EACH LESSON
for (i = 0; i < classVideos.length; i++) {
  classVideos[i].textContent = videoDuration[i];
}

//? CTA - MODAL DISPLAY FOR EACH COURSE
courseCtaAll.forEach((cta) => {
  cta.addEventListener("click", (e) => {
    e.preventDefault();
    modalProps();

    const btnTargetClass = e.target.classList;
    switch (btnTargetClass[1]) {
      case "pattern-design":
        imageSrc.src = courseInfo[0].src;
        courseTitle.innerText = courseInfo[0].name;
        courseDetails.innerText = courseInfo[0].details;
        instructorDetails[0].innerText = courseInfo[0].instructor;
        instructorDetails[1].innerText = courseInfo[0].enrolled;
        instructorDetails[2].innerText = courseInfo[0].rating;
        break;
      case "design-thinking":
        imageSrc.src = courseInfo[1].src;
        courseTitle.innerText = courseInfo[1].name;
        courseDetails.innerText = courseInfo[1].details;
        instructorDetails[0].innerText = courseInfo[1].instructor;
        instructorDetails[1].innerText = courseInfo[1].enrolled;
        instructorDetails[2].innerText = courseInfo[1].rating;
        break;
      case "ux-ui-fundamentals":
        imageSrc.src = courseInfo[2].src;
        courseTitle.innerText = courseInfo[2].name;
        courseDetails.innerText = courseInfo[2].details;
        instructorDetails[0].innerText = courseInfo[2].instructor;
        instructorDetails[1].innerText = courseInfo[2].enrolled;
        instructorDetails[2].innerText = courseInfo[2].rating;
        break;
      case "python-bootcamp":
        imageSrc.src = courseInfo[3].src;
        courseTitle.innerText = courseInfo[3].name;
        courseDetails.innerText = courseInfo[3].details;
        instructorDetails[0].innerText = courseInfo[3].instructor;
        instructorDetails[1].innerText = courseInfo[3].enrolled;
        instructorDetails[2].innerText = courseInfo[3].rating;
        break;
      case "computer-science":
        imageSrc.src = courseInfo[4].src;
        courseTitle.innerText = courseInfo[4].name;
        courseDetails.innerText = courseInfo[4].details;
        instructorDetails[0].innerText = courseInfo[4].instructor;
        instructorDetails[1].innerText = courseInfo[4].enrolled;
        instructorDetails[2].innerText = courseInfo[4].rating;
        break;
      case "html-css-bootcamp":
        imageSrc.src = courseInfo[5].src;
        courseTitle.innerText = courseInfo[5].name;
        courseDetails.innerText = courseInfo[5].details;
        instructorDetails[0].innerText = courseInfo[5].instructor;
        instructorDetails[1].innerText = courseInfo[5].enrolled;
        instructorDetails[2].innerText = courseInfo[5].rating;
        break;
      default:
        imageSrc.src = courseInfo[1].src;
        break;
    }
  });
});

//? CLOSE MODAL VIA CLOSE BUTTON
closeBtn.onclick = () => {
  document.body.style.overflowY = "unset";
  courseOutputWrapper.style.display = "none";
};
