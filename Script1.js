// JavaScript source code
var index = 0;   //�̹����� �����ϴ� �ε���


window.onload = function () {
    slideShow();
}
function slideShow() {
    var i;
    var x = document.getElementsByClassName("slide1");  //slide1�� ���� dom ����
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";   //ó���� ���� display�� none���� �Ѵ�.
    }
    index++;
    if (index > x.length) {
        index = 1;  //�ε����� �ʰ��Ǹ� 1�� ����
    }
    x[index - 1].style.display = "block";  //�ش� �ε����� block����
    setTimeout(slideShow, 4000);   //�Լ��� 4�ʸ��� ȣ��

}

// ������ �Ұ� �˾�
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

// �޴��� �����̵�
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

//ȸ�����Խ� �̸��� �����ϸ� �ڵ� ä����
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