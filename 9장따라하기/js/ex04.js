var pic = document.querySelector("#pic")
//pic선택자인 pic 에게 마우스가 올라가면 changePic() 이라는 함수를 호출하고,
//false 는 버블링을 하지 않겠다라는 뜻이다. 버블링이란? 이벤트가 하위요소에서 발생하면
//이게 상위요소까지 전파되는 형태를 버블링이라고 칭한다.  

//아래와 같이 하나의 선택자에게 다중으로 이벤트를 등록할 수 있다.
pic.addEventListener('mouseover', changePic, false);
pic.addEventListener('mouseout', originPic, false);

function changePic(){
  pic.src = 'images/boy.png'

}

function originPic() {
  pic.src = 'images/girl.png'
}

//getElementById() : id선택자가 있는 웹 요소에 접근할때 사용하는 한가지의 방법
//DOM 노드 중에서 요소 노드 까지만 접근이 가능한다.
//querySelector() : 노드요소 뿐만 아니라 텍스트 노드와 속성 노드까지 접근 가능하다.
