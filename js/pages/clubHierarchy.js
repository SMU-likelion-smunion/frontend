//부서 열고 닫을수 있게
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
//편집버튼 눌었을시 부서추가 버튼 보이게 + deleteBtn보이게
document.getElementById('reviseBtn').onclick=function(){
  var deleteBtns = document.querySelectorAll('.deleteBtn');
  deleteBtns.forEach(function (btn) {
    btn.style.display = 'inline'; // deleteBtn 보이게
  });
  var deptAdd=document.getElementById('deptAdd');
  deptAdd.style.display='block'
  var addBtn=document.querySelector('.addBtn');
  addBtn.style.display='inline';
  var clubPic=document.querySelector('.clubPic');
  clubPic.style.opacity = '0.8';
  clubPic.style.filter = 'blur(3px)';
}

document.getElementById('deptAdd').onclick = function() {
  // 새로운 부서 항목을 템플릿 리터럴로 작성
  var newDeptHTML = `
  <hr>
    <div class="clubDept">
     <div class="clubinnerDept">
        <img style="width: 15px; height: 15px;" class="deleteBtn"src="../../assets/icons/deleteBtn.png">
          <p>부서명을 입력해주세요</p>
        </div>
        </div>
 `;
  // NewDept div 안에 새로운 부서 항목 추가
  document.querySelector('.NewDept').innerHTML += newDeptHTML;
};
