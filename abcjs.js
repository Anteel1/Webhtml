    // js loading trang
    var a =  document.getElementById("wrap"); 
    window.addEventListener("load",function(){
        a.style.display ="none";
    });
    // run text 
var text ="Chào các bạn đã ghé thăm";
var i = 0;
function typing(){
    if(i<text.length){
        document.getElementById("runtext").innerHTML+=text.charAt(i);
        i++;
        setTimeout(typing,300); 
       
    }
}

typing();
 // validate
function validate(){
    
		// Tên
		let ten = document.getElementById('name').value;
		if (ten.length === 0) {
			document.getElementById('loi_ten').innerHTML = 'Chưa điền tên';
		}else{
            document.getElementById('loi_ten').innerHTML='';
        }
		
		// // Email
		let email = document.getElementById('email').value;
		if (email.length === 0) {
			document.getElementById('loi_email').innerHTML = 'Chưa điền email';
	
		}else{
            document.getElementById('loi_email').innerHTML='';
        }
        // // Tài khoản
        let tk = document.getElementById('user').value;
        if(tk.length === 0 ){
            document.getElementById('loi_user').innerHTML= 'Chưa điền tài khoản';
        }else{
            document.getElementById('loi_user').innerHTML='';
        }
		// // Mật khẩu
		let mk = document.getElementById('pass').value;
        if(mk.length ===0){
            document.getElementById('loi_pass').innerHTML='Chưa điền mật khẩu';
        }else{
            document.getElementById('loi_pass').innerHTML='';
        }
		// // Nhập lại mật khẩu
        let remk = document.getElementById('repass').value;
        if(remk.length ===0){
            document.getElementById('loi_repass').innerHTML='Chưa điền mật khẩu';
        }else{
            document.getElementById('loi_repass').innerHTML='';
        }
	}

