//Using Inersection Observer API - Animate object when in view
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    let el = addClassShow(entry.target.className)
    if (entry.isIntersecting) {
      entry.target.classList.add(el);
    } else if (!entry.isIntersecting) {
      entry.target.classList.remove(el);

    }
  });
}, {
  threshold: 0, //Showing an element when it is 100% visible. Default is 0
});

// Select all the elements animation class. Remember to define them in CSS
const elementsFadeIn = document.querySelectorAll(".hidden-fadeIn");
const elementsZoomIn = document.querySelectorAll(".hidden-zoomIn");
const elementsSlideLeft = document.querySelectorAll(".hidden-slideLeft");
const elementsSlideRight = document.querySelectorAll(".hidden-slideRight");
const elementsSlideUp = document.querySelectorAll(".hidden-slideUp");
const elementsSlideDown = document.querySelectorAll(".hidden-slideDown");
const elementsWipeDown = document.querySelectorAll(".hidden-wipeDown");

// Observe each element
const arr = [elementsFadeIn, elementsZoomIn, elementsSlideLeft, elementsSlideRight,elementsSlideUp,elementsSlideDown, elementsWipeDown];
arr.forEach((element) => {
  element.forEach((el) => {
    observer.observe(el);
  });
});

//If the element has a class of hidden-fadeIn, add the class of show-fadeIn
function addClassShow(elementClass) {
  let className;
  if (!elementClass.includes("show")) {
    className = elementClass.replace("hidden", "show");
    return className;
  } else {
    className = elementClass.substring(elementClass.indexOf("show"));
    return className;
  }
}
