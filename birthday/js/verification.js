$('#login-button').click(function (event) {
    let userName = document.getElementById("userName").value;
    let pwd = document.getElementById("pwd").value;
    if (userName == "林思瀚" && pwd == "061027") {
        $('#h').text("欢迎我的宝！Hallie");
        event.preventDefault();
        $('form').fadeOut(500);
        $('.wrapper').addClass('form-success');
        setTimeout(function () {
            location.href = "BirthdayCake.html";
        }, 4000);
    } else {
        alert("用户名或密码不正确！你的姓名忘记了？还是我最常用的密码忘记了？ps：密码是纯数字6位数");
    }
});
