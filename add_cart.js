// add cart
var giohang = new Array();
document.getElementById("show_Cart").style.display="none";
function add_cart(x){
 var wrap = x.parentElement.children;
 var hinh = wrap[0].src;
 var ten = wrap[2].innerText;
 var soluong = parseInt(wrap[3].value);
 var gia = wrap[4].children[0].innerText;
var array = new Array(hinh,ten,soluong,gia);
 alert("Giá sản phẩm"+wrap[4].children[0].innerText);
 // dem gio hang
 var checkgiohang = 0;
 for(let i =0 ; i < giohang.length;i++){
    if(giohang[i][1] == ten){
        checkgiohang =1;
        soluong+=parseInt(giohang[i][2]);
        giohang[i][2]=soluong;
        break;
    }
 }
    if(checkgiohang==0){
        giohang.push(array);
    }
    show_mycart();
}
function show_cart(){
 
  var c=  document.getElementById("show_Cart");
    if(c.style.display=="block"){
        c.style.display="none";
    }else{
        c.style.display="block";
       
    }
    show_mycart();
}

 function show_mycart(){
    var check_giohang=1;
    var html ='';
    var total= 0;
    for(let i = 0; i < giohang.length; i++ ){
        html+='<tr>'+
          '<td>'+(i+1)+'</td>'+
          '<td><img src="'+giohang[i][0]+'"></td>'+
          '<td>'+giohang[i][1]+'</td>'+
          '<td>'+giohang[i][2]+'</td>'+
          '<td>'+giohang[i][3]+'đ</td>'+
          '<td><div>'+parseInt(giohang[i][2]*giohang[i][3])+'đ</div></td>'+
          '<td><Button class="btn_delete" onclick="delete_sp(this)">Xóa</Button></td>'+
        '</tr>';
            total+=parseInt( giohang[i][2]*giohang[i][3]);
    }
    html+='<tr>'+
        '<th colspan="6">Tổng đơn hàng</th>'+
        '<th><div>'+total+'đ</div></th>'+
        '</tr>';
        document.getElementById("mycart()").innerHTML=html;
       
       
        
 }
 function buy(){
   var a = alert("Mua thành công");
   giohang=[];
   show_mycart();
  
 }
 function delete_sp(x){
    var tr = x.parentElement.parentElement;
    var ten = tr.children[2].innerText;
    tr.remove();
    for(let i = 0 ; i < giohang.length; i++){
        if(giohang[i][1] ==ten){
            giohang.splice(i,1);
        }
    }

    show_mycart();
 }