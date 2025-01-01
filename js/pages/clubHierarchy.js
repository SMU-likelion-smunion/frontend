function deptMemSee(imgElement) {
  var memberInfo = imgElement.parentElement.nextElementSibling;

  if (memberInfo && memberInfo.classList.contains("memberInfo")) {
    if (memberInfo.style.display === "none") {
      memberInfo.style.display = "flex"; 
      imgElement.src = "../../assets/icons/upperVector.png"; 
    } else {
      memberInfo.style.display = "none"; 
      imgElement.src = "../../assets/icons/vector.png"; 
    }
  }
}