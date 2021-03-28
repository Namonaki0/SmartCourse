const imageSrc = document.querySelector(".course-image");
const courseCta = document.querySelector("#course-cta");
const courseOutputWrapper = document.querySelector("#course-output-wrapper");

const courseImages = [
  { src: "Images/Image1.jpeg" },
  { src: "Images/Image2.jpg" },
  { src: "Images/Image3.jpeg" },
  { src: "Images/Image4.jpeg" },
  { src: "Images/image5.jpg" },
  { src: "Images/image6.jpeg" },
  { src: "Images/image7.jpg" },
];

console.log(courseImages[6].src);

courseCta.addEventListener("click", () => {
  imageSrc.src = courseImages[1].src;
  console.log(imageSrc);
});

const fetchImage = async () => {
  imageSrc.src = await courseImages[0].src;
  console.log(imageSrc);
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
