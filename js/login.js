document.addEventListener("DOMContentLoaded", function () {
  const API_SERVER_DOMAIN = "https://smunion.shop";
  const accessToken = getCookie("accessToken");

  // 이미 로그인된 경우 home.html로 리디렉션
  if (accessToken) {
    window.location.href = "/html/pages/home.html";
    return;
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }

  function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  }

  function submitLoginForm(event) {
    event.preventDefault(); // 기본 제출 동작을 막습니다.

    // 사용자가 입력한 ID와 비밀번호를 가져옵니다.
    var email = document.getElementById("email").value.trim();
    var password = document.getElementById("pw").value.trim();
    var errorMessage = document.querySelector(
      ".error-message-container .error-message"
    );

    // 에러 메시지 초기화
    errorMessage.style.display = "none";

    // 유효성 검사
    if (!email || !password) {
      errorMessage.textContent = "*이메일과 비밀번호를 입력해주세요.";
      errorMessage.style.display = "block";
      return;
    }

    // JSON 객체 생성
    var data = JSON.stringify({
      email: email,
      password: password,
    });

    // 서버에 로그인 요청을 보냅니다.
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
      redirect: "follow",
    };

    fetch(API_SERVER_DOMAIN + "/api/v1/users/login", requestOptions)
      .then((response) => {
        if (!response.ok) {
          return response.json().then((errorData) => {
            throw new Error(errorData.message || "Login failed");
          });
        }
        return response.json();
      })
      .then((data) => {
        var accessToken = data.token;
        setCookie("accessToken", accessToken, 1);
        window.location.href = "/html/home.html"; // 로그인 성공 후 home.html로 리디렉션
      })
      .catch((error) => {
        errorMessage.textContent = `*${error.message}`;
        errorMessage.style.display = "block";
        console.error("Login error:", error);
      });
  }

  // 초기 에러 메시지 숨기기
  const errorMessage = document.querySelector(".error-message");
  errorMessage.style.display = "none";

  // 로그인 버튼에 이벤트 리스너를 추가합니다.
  document
    .querySelector(".login-btn")
    .addEventListener("click", submitLoginForm);
});
