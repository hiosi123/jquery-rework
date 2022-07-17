var bigPic = document.querySelector('#cup'); //큰 이미지 찾아옴
var smallPic = document.querySelectorAll('.small'); //작은 이미지 찾아옴

for(var i=0; i<smallPic.length; i++){
  //작은 이미지 리스트들을 클릭을 하면 changePic()가 호출이 된다.
  smallPic[i].addEventListener('click', changePic);
}

function changePic() {
  //click 이벤트가 발생한 대상 this의 src 속성을 newPic 에 저장
  var newPic = this.src;
  //newPic 의 값을 큰 이미지의 속성으로 사용이 된다.
  bigPic.setAttribute('src',newPic)
}

