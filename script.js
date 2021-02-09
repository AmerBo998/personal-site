

function menu_collapse(){
    
    var w=document.getElementById("menu-wrap1").offsetWidth;;
    var h=document.getElementById("menu-wrap1").offsetHeight;;
   
     
   
   if(w>0 && h>0){
   document.getElementById("menu-wrap1").style.width="0px";
   document.getElementById("menu-wrap1").style.height="0px";
   document.getElementById("menu-wrap1").style.border="none";
   }
}


function menu_show(){


    document.getElementById("menu-wrap1").style.width="254px";
    document.getElementById("menu-wrap1").style.height="189px";
    document.getElementById("menu-wrap1").style.border="2px solid white";




}


function send_mail(){

    window.open('mailto:a.bogilovic998@gmail.com?body=Hello, ');



}