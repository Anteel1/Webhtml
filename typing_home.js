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