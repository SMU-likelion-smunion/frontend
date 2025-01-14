document.addEventListener("DOMContentLoaded", function () {
  var API_SERVER_DOMAIN = "https://smunion.shop";

  function submitSignUpForm(event) {
    event.preventDefault(); // 기본 제출 동작을 막습니다.

    // 사용자가 입력한 정보 가져오기
    var email = document.getElementById("email").value.trim();
    var major = document.getElementById("major").value.trim();
    var name = document.getElementById("name").value.trim();
    var password = document.getElementById("pw").value.trim();
    var passwordCheck = document.getElementById("pw-check").value.trim();
    var errorMessage = document.querySelector(".error-message");

    // 비밀번호 확인
    if (password !== passwordCheck) {
      errorMessage.style.display = "block"; // 에러 메시지 표시
      return;
    } else {
      errorMessage.style.display = "none"; // 에러 메시지 숨기기
    }

    // JSON 객체 생성
    var data = JSON.stringify({
      email: email,
      password: password,
      major: major,
      name: name,
    });

    // 서버에 회원가입 요청 보내기
    var requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
      redirect: "follow",
    };

    fetch(API_SERVER_DOMAIN + "/api/v1/users/signup", requestOptions)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((result) => {
        console.log(result);
        if (result.isSuccess) {
          alert("회원가입이 성공적으로 완료되었습니다!");
          // 로그인 페이지로 이동
          window.location.replace("login.html");
        } else {
          alert(`회원가입 실패: ${result.message}`);
        }
      })
      .catch((error) => {
        console.log("error", error);
        alert("회원가입 중 오류가 발생했습니다. 다시 시도해주세요.");
      });
  }

  // 초기 에러 메시지 숨기기
  const errorMessage = document.querySelector(".error-message");
  errorMessage.style.display = "none";

  // 회원가입 버튼에 이벤트 리스너 추가
  document
    .getElementById("submit-button")
    .addEventListener("click", submitSignUpForm);
});
