function generateInvitation(){

let groom=document.getElementById("groom").value;

let file=document.getElementById("photo").files[0];

if(groom=="" || !file){

alert("Please enter the groom's name and upload a photo.");

return;

}

let reader=new FileReader();

reader.onload=function(e){

document.getElementById("preview").src=e.target.result;

document.getElementById("groomName").innerHTML=groom;

document.getElementById("page1").style.display="none";

document.getElementById("page2").style.display="block";

}

reader.readAsDataURL(file);

}
