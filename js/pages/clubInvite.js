document.querySelectorAll('img').forEach(function (element) {
  element.onclick = function () {
    if (this.classList.contains('circle')) {
      this.classList.remove('circle');
      this.classList.add('checked_circle');
      this.src = "../../assets/icons/checked_circle.png";
    } else if (this.classList.contains('checked_circle')) {
      this.classList.remove('checked_circle');
      this.classList.add('circle');
      this.src = "../../assets/icons/circle.png";
    }
  };
});