// JavaScript source code
var index = 0;   //이미지에 접근하는 인덱스


window.onload = function () {
    slideShow();
}
function slideShow() {
    var i;
    var x = document.getElementsByClassName("slide1");  //slide1에 대한 dom 참조
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //처음에 전부 display를 none으로 한다.
    }
    index++;
    if (index > x.length) {
        index = 1;  //인덱스가 초과되면 1로 변경
    }
    x[index - 1].style.display = "block";  //해당 인덱스는 block으로
    setTimeout(slideShow, 4000);   //함수를 4초마다 호출

}

// 관광지 소개 팝업
function showPopUp1() {
    window.open("popup1.html", "num1", "width=360, height=480, left=50, top=100 scrollbars=no");
}
function showPopUp2() {
    window.open("popup2.html", "num1", "width=360, height=480, left=50, top=100 scrollbars=no");
}
function showPopUp3() {
    window.open("popup3.html", "num1", "width=360, height=480, left=50, top=100 scrollbars=no");
}

function openLoginPage() {
    window.open("LoginPage.html", "Login", "width=400, height=300, left=50, top=100 scrollbars=no");
}

function signUpPage() {
    window.open("signUpPage.html", "Sign Up Page");
}

function updatePage() {
    window.open("updatePage.html", "Update Page");
}

// 메뉴바 슬라이드
function showLeftMenu() {
    var circleBtObj = document.getElementById('circleBt');
    var leftMenuObj = document.getElementById('hideMenuBodyId');
    circleBtObj.style['display'] = "none";
    leftMenuObj.style['transform'] = "translate(0px, 0px)";

    leftMenuObj.style['msTransform'] = "translate(0px, 0px)";
    leftMenuObj.style['mozTransform'] = "translate(0px, 0px)";
    leftMenuObj.style['webkitTransform'] = "translate(0px, 0px)";
    leftMenuObj.style['oTransform'] = "translate(0px, 0px)";
}

function closeLeftMenu() {
    var circleBtObj = document.getElementById('circleBt');
    var leftMenuObj = document.getElementById('hideMenuBodyId');

    circleBtObj.style['display'] = "block";
    leftMenuObj.removeAttribute("style");
}

//회원가입시 이메일 선택하면 자동 채워짐
function checkemailaddy() {
    if ((form.email_select.value) == '1') {
        form.email2.readonly = false;
        form.email2.value = '';
        form.email2.focus();
    }
    else {
        form.email2.readonly = true;
        form.email2.value = form.email_select.value;
    }
}