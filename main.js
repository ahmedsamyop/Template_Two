const links = document.querySelectorAll(".links ul li");
const sections = document.querySelectorAll("body > div");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    let element = e.currentTarget;
    links.forEach((ele) => {
      ele.classList.remove("active");
    });
    // console.log(element.dataset.link);
    e.preventDefault();
    element.classList.add("active");
    sections.forEach((section) => {
      if (element.dataset.link === section.id) {
        section.scrollIntoView();
      }
    });
  });
});

let allList = document.querySelectorAll("ul.shuffle li");
let alldiv = document.querySelectorAll("div.imgs-container .box");

allList.forEach(function (ele) {
  ele.onclick = function () {
    allList.forEach(function (ele) {
      ele.classList.remove("active");
    });

    alldiv.forEach(function (next) {
      if (ele.id === next.id) {
        next.style.display = "block";
      } else if (ele.id === "all") {
        next.style.display = "block";
      } else {
        next.style.display = "none";
      }
    });

    ele.classList.add("active");
  };
});
