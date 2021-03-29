const imageSrc = document.querySelector(".course-img");
const courses = document.querySelectorAll(".course-desc img");
const courseCta = document.querySelector("#course-cta");
const courseOutputWrapper = document.querySelector("#course-output-wrapper");
const courseCtaAll = document.querySelectorAll(".cta-course-page");

const courseImages = [
  { src: "Images/Image1.jpeg" },
  { src: "Images/Image2.jpg" },
  { src: "Images/Image3.jpeg" },
  { src: "Images/Image4.jpeg" },
  { src: "Images/image5.jpg" },
  { src: "Images/image6.jpeg" },
  { src: "Images/image7.jpg" },
];

courseCtaAll.forEach((cta) => {
  cta.addEventListener("click", (e) => {
    cta.href = "#course-output-wrapper";
    courseOutputWrapper.style.display = "grid";
    courseOutputWrapper.style.animation = ".2s courseModal";
    courseOutputWrapper.style.opacity = "1";
    courseOutputWrapper.style.visibility = "visible";
    courseOutputWrapper.style.pointerEvents = "all";
    const btnTarget = e.target;
    if (btnTarget.classList.contains("python-bootcamp")) {
      // console.log("CONTAINS");
      imageSrc.src = courseImages[3].src;
      // console.log(imageSrc.src);
    } else {
      imageSrc.src = courseImages[0].src;
      // console.log("DOES NOT");
    }
  });
});

const fetchImage = async () => {
  imageSrc.src = await courseImages[0].src;
  // console.log(imageSrc);
};

fetchImage();

const ctaPage = document.querySelector(".cta-course-page");

ctaPage.addEventListener("click", () => {
  courseOutputWrapper.style.display = "grid";
  courseOutputWrapper.style.animation = ".5s courseModal";
  courseOutputWrapper.style.opacity = "1";
  courseOutputWrapper.style.visibility = "visible";
  courseOutputWrapper.style.pointerEvents = "all";
});

// //? CLOSE MODAL BY CLICKING OUTSIDE

window.onclick = function (event) {
  if (event.target == courseOutputWrapper) {
    courseOutputWrapper.style.display = "none";
  }
};
