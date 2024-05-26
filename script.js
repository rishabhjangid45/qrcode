

let qrimg = document.getElementById("qrimg");
let imgbox =document.getElementById("imgbox");
let qrtext =document.getElementById("qrtext");
 
function generateqr(){
if(qrtext.value.length > 0){

    qrimg.src =  "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrtext.value;

}
}