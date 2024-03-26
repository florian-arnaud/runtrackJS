let footerElement = document.getElementsByTagName("footer")[0]
console.log(footerElement.style.width)
document.addEventListener("scroll", (event) => {

      footerElement.style.width = window.scrollX +"px"


});