// include.js
window.addEventListener("load", function () {
  var allElements = document.getElementsByTagName("*");
  Array.prototype.forEach.call(allElements, function (el) {
    var includePath = el.dataset.includePath;
    if (includePath) {
      var xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          el.outerHTML = this.responseText;
        }
      };
      xhttp.open("GET", includePath, true);
      xhttp.send();
    }
  });
});

// 모달 관련 변수
const deleteAccountModal = document.querySelector(".mypage-alert-container");
const leaveClubRequest = document.querySelector(".leave-club-request");
const deleteAccountRequest = document.querySelector(".delete-account");

const cancelBtn = document.querySelector(".cancel");
const deleteAccountdBtn = document.querySelector(".request");

// 아이디 변경 모달 열기
leaveClubRequest.addEventListener("click", () => {
  deleteAccountModal.style.display = "flex";
});

deleteAccountRequest.addEventListener("click", () => {
  deleteAccountModal.style.display = "flex";
});

// 모달 닫기
cancelBtn.addEventListener("click", () => {
  deleteAccountModal.style.display = "none";
});

deleteAccountdBtn.addEventListener("click", () => {
  deleteAccountModal.style.display = "none";
});
