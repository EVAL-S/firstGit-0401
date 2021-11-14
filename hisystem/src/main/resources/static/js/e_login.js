
function login() {
    var username;
    var pass;
    var character = document.getElementsByName("t1");

    for(var i =0 ; i<character.length; i++ )
    {
        if( character[i].checked == true) {
            if(character[i].value=="admin")
            {
                username = document.getElementById("username");
                pass = document.getElementById("password");
                if(username.value == "admin" && pass.value == "123456"){
                    window.location.href="r_main.html";
                    console.log("aaa");
                }else if(username.value == ""){
                    alert("请输入用户名");
                }else if(pass.value  == ""){
                    alert("请输入密码");
                }else{
                    alert("请输入正确的用户名和密码！");
                }
            }else if(character[i].value=="doctor") {
                username = document.getElementById("username");
                pass = document.getElementById("password");
                if(username.value == "doctor" && pass.value == "123456"){
                    window.location.href="doc_main.html";
                    console.log("aaa");
                }else if(username.value == ""){
                    alert("请输入用户名");
                }else if(pass.value  == ""){
                    alert("请输入密码");
                }else{
                    alert("请输入正确的用户名和密码！");
                }
            }
        }
    }
}