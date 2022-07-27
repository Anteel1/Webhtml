function validate(){

    // // Tài khoản
    let tk = document.getElementById('user').value;
    var check = 0;
    if(tk.length === 0 ){
       check =1;
        document.getElementById('loi_user').innerHTML= 'Chưa điền tài khoản';
    }else{
        document.getElementById('loi_user').innerHTML='';
    }
    // // Mật khẩu
    let mk = document.getElementById('pass').value;
    if(mk.length ===0){
        check =1;
        document.getElementById('loi_pass').innerHTML='Chưa điền mật khẩu';
        
    }else{
        document.getElementById('loi_pass').innerHTML='';
        
    }
    if(check ==1){
        alert("Đăng nhập thất bại");
    }else{
        alert("Đăng nhập thành công");
    }
   
}