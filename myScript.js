function golog() {
document.getElementById('login-page').style="top:0; transition: 2s ease-in-out; ";
document.getElementById('hidden').style="overflow:hidden;";
}

function lognone() {
    document.getElementById('login-page').style="top:-105%; transition: 2s ease-in-out;";
    document.getElementById('hidden').style="overflow:none;";
    }


    function change() {
        document.getElementById('arrow-up').style="display:none;";
        document.getElementById('arrow-down').style="display:block;";
        document.getElementById('s2').style="display:inline-flex;";
    }

    function change0() {
        document.getElementById('arrow-up').style="display:block;";
        document.getElementById('arrow-down').style="display:none;";
        document.getElementById('s2').style="display:none;";
    }

   

    function change1() {
        let y =  document.getElementById('s2');
        x =  document.getElementById('s1');
        a =  document.getElementById('arrow-up');
        z =  document.getElementById('arrow-down');
        

        if (y.innerHTML=="Season 2") {
            y.innerHTML="Season 1"; x.innerHTML="Season 2";  y.style="display:none";  a.style="display:block"; z.style="display:none"; 
        }
       
     else if (y.innerHTML=="Season 1") {
        y.innerHTML="Season 2"; x.innerHTML="Season 1";  y.style="display:none"; a.style="display:block"; z.style="display:none"; 
        
     }

    }


    function SEARCH() {
        let x  =  document.getElementById('search');
           
        if (x.style="display:none" == "display:none") {
            x.style="display:block"; 
        }

      else if (x.style="display:block" == "display:block") {
        x.style="display:none";  
      }

    }




    

    
    function off() {
        document.getElementById('put').type="text";
        document.getElementById('eyeclose').style="display:none;";
        document.getElementById('eyeopen').style="display:block;";
        
    }

    function open1() {
        document.getElementById('put').type="password";
        document.getElementById('eyeclose').style="display:flex;";
        document.getElementById('eyeopen').style="display:none;";
        
    }

    function shares() {
        document.getElementById('share-options').style="display:block;";
        
    }

    
    document.getElementById('saved').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved').style="display:none;";
        document.getElementById('checkd').style="display:block;";
       
        document.getElementById('watch-list').style="display:block; opacity:1";

        setTimeout(()=>{
            document.getElementById('watch-list').style="opacity:0; ";
        },1500);
    })
        

   


    document.getElementById('checkd').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved').style="display:block;";
        document.getElementById('checkd').style="display:none;";
       
        document.getElementById('watch-list').style="display:none";

       

    })


       
     document.getElementById('saved1').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved1').style="display:none;";
        document.getElementById('checkd1').style="display:block;";
       
        document.getElementById('watch-list-4').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-4').style="opacity:0;";
        },1500);
    })


    
    document.getElementById('checkd1').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved1').style="display:block;";
        document.getElementById('checkd1').style="display:none;";
        
        document.getElementById('watch-list-4').style="display:none";

       

    })


    document.getElementById('saved2').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved2').style="display:none;";
        document.getElementById('checkd2').style="display:block;";
       
        document.getElementById('watch-list-5').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-5').style="opacity:0;";
        },1500);
    })


    
    document.getElementById('checkd2').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved2').style="display:block;";
        document.getElementById('checkd2').style="display:none;";
        
        document.getElementById('watch-list-5').style="display:none";

       

    })
   

    document.getElementById('saved3').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved3').style="display:none;";
        document.getElementById('checkd3').style="display:block;";
       
        document.getElementById('watch-list-2').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-2').style="opacity:0;";
        },1500);
    })


    
    document.getElementById('checkd3').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved3').style="display:block;";
        document.getElementById('checkd3').style="display:none;";
        
        document.getElementById('watch-list-2').style="display:none";

       

    })


    document.getElementById('saved4').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved4').style="display:none;";
        document.getElementById('checkd4').style="display:block;";
       
        document.getElementById('watch-list-1').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-1').style="opacity:0;";
        },1500);
    })


    
    document.getElementById('checkd4').addEventListener('click', (event)=>{
        event.stopPropagation();
        document.getElementById('saved4').style="display:block;";
        document.getElementById('checkd4').style="display:none;";
        
        document.getElementById('watch-list-1').style="display:none";

       

    })


    


   
    
    


    function everything11(event) {
       event.stopPropagation();
        document.getElementById('saved5').style="display:none;";
        document.getElementById('checkd5').style="display:block;";
       
        document.getElementById('watch-list-main').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-main').style="opacity:0;";
        },1500);
    }

    function everything12(event) {
        event.stopPropagation();
        document.getElementById('saved5').style="display:block;";
        document.getElementById('checkd5').style="display:none;";
        
        document.getElementById('watch-list-main').style="display:none";
    }

    function everything13(event) {
        event.stopPropagation();
        document.getElementById('saved6').style="display:none;";
        document.getElementById('checkd6').style="display:block;";
       
        document.getElementById('watch-list-4-1').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-4-1').style="opacity:0;";
        },1500);
    }

    function everything14(event) {
        event.stopPropagation();
        document.getElementById('saved6').style="display:block;";
        document.getElementById('checkd6').style="display:none;";
        
        document.getElementById('watch-list-4-1').style="display:none";
    }

    function everything15(event) {
        event.stopPropagation();
        document.getElementById('saved7').style="display:none;";
        document.getElementById('checkd7').style="display:block;";
       
        document.getElementById('watch-list-5-1').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-5-1').style="opacity:0;";
        },1500);
    }

    function everything16(event) {
        event.stopPropagation();
        document.getElementById('saved7').style="display:block;";
        document.getElementById('checkd7').style="display:none;";
        
        document.getElementById('watch-list-5-1').style="display:none";
    }


    function everything17(event) {
        event.stopPropagation();
        document.getElementById('saved8').style="display:none;";
        document.getElementById('checkd8').style="display:block;";
       
        document.getElementById('watch-list-2-1').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-2-1').style="opacity:0;";
        },1500);
    }

    function everything18(event) {
        event.stopPropagation();
        document.getElementById('saved8').style="display:block;";
        document.getElementById('checkd8').style="display:none;";
        
        document.getElementById('watch-list-2-1').style="display:none";
    }


    function everything19(event) {
        event.stopPropagation();
        document.getElementById('saved9').style="display:none;";
        document.getElementById('checkd9').style="display:block;";
       
        document.getElementById('watch-list-1-1').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-1-1').style="opacity:0;";
        },1500);
    }

    function everything20(event) {
        event.stopPropagation();
        document.getElementById('saved9').style="display:block;";
        document.getElementById('checkd9').style="display:none;";
        
        document.getElementById('watch-list-1-1').style="display:none";
    }


    function everything21(event) {
        event.stopPropagation();
        document.getElementById('saved10').style="display:none;";
        document.getElementById('checkd10').style="display:block;";
       
        document.getElementById('watch-list-action').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-action').style="opacity:0;";
        },1500);
    }

    function everything22(event) {
        event.stopPropagation();
        document.getElementById('saved10').style="display:block;";
        document.getElementById('checkd10').style="display:none;";
        
        document.getElementById('watch-list-action').style="display:none";
    }


    function everything23(event) {
        event.stopPropagation();
        document.getElementById('saved11').style="display:none;";
        document.getElementById('checkd11').style="display:block;";
       
        document.getElementById('watch-list-4-m').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-4-m').style="opacity:0;";
        },1500);
    }

    function everything24(event) {
        event.stopPropagation();
        document.getElementById('saved11').style="display:block;";
        document.getElementById('checkd11').style="display:none;";
        
        document.getElementById('watch-list-4-m').style="display:none";
    }


    
    function everything25(event) {
        event.stopPropagation();
        document.getElementById('saved12').style="display:none;";
        document.getElementById('checkd12').style="display:block;";
       
        document.getElementById('watch-list-5-m').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-5-m').style="opacity:0;";
        },1500);
    }

    function everything26(event) {
        event.stopPropagation();
        document.getElementById('saved12').style="display:block;";
        document.getElementById('checkd12').style="display:none;";
        
        document.getElementById('watch-list-5-m').style="display:none";
    }


    function everything27(event) {
        event.stopPropagation();
        document.getElementById('saved13').style="display:none;";
        document.getElementById('checkd13').style="display:block;";
       
        document.getElementById('watch-list-2-m').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-2-m').style="opacity:0;";
        },1500);
    }

    function everything28(event) {
        event.stopPropagation();
        document.getElementById('saved13').style="display:block;";
        document.getElementById('checkd13').style="display:none;";
        
        document.getElementById('watch-list-2-m').style="display:none";
    }


    function everything29(event) {
        event.stopPropagation();
        document.getElementById('saved14').style="display:none;";
        document.getElementById('checkd14').style="display:block;";
       
        document.getElementById('watch-list-1-m').style="display:block";

        setTimeout(()=>{
            document.getElementById('watch-list-1-m').style="opacity:0  ";
        },1500);
    }

    function everything30(event) {
        event.stopPropagation();
        document.getElementById('saved14').style="display:block;";
        document.getElementById('checkd14').style="display:none;";
        
        document.getElementById('watch-list-1-m').style="display:none";
    }


    // document.getElementById("through").addEventListener('click', (event)=>{event.stopPropagation();})

    function clc(event) {
        event.stopPropagation();
       
    }



    function none1() {
        document.getElementById('up').style="display:block;";
        document.getElementById('up1').style="display:none;";
        document.getElementById('uP').style="display:none;";
        document.getElementById('uP1').style="display:block;";
        document.getElementById('dow').style="display:none;";
        document.getElementById('dow1').style="display:none;";
        document.getElementById('down').style="display:none;";
        document.getElementById('down1').style="display:block;";
    }

    function none2() {
        document.getElementById('up').style="display:none;";
        document.getElementById('up1').style="display:block;";
        document.getElementById('uP').style="display:block;";
        document.getElementById('uP1').style="display:none;";
        document.getElementById('dow').style="display:none;";
        
    }


    function none() {
        document.getElementById('down').style="display:block;";
        document.getElementById('down1').style="display:none;";
        document.getElementById('dow').style="display:none;";
        document.getElementById('dow1').style="display:block;";
        document.getElementById('uP').style="display:none;";
        document.getElementById('up').style="display:none;";
        document.getElementById('up1').style="display:block;";
        document.getElementById('uP1').style="display:none;";
        
        
       
    }

    function none0() {
        document.getElementById('down').style="display:none;";
        document.getElementById('down1').style="display:block;";
        document.getElementById('dow').style="display:none;";
        document.getElementById('dow1').style="display:none;";
        document.getElementById('uP').style="display:block;";
        document.getElementById('up').style="display:none;";
       
    }

    


    function CHANGE() {
        document.getElementById('glass').style="display:none;";
        document.getElementById('x_mark').style="display:block;";
        document.getElementById('search-bar').style="display:flex;";
        document.querySelector('.slider').classList.add("bottom");
        document.getElementById('search-bar-1').style="display: block; position:absolute; top:2%; z-index:10000";
    }

    function CHANGE2() {
        document.getElementById('glass').style="display:flex;";
        document.getElementById('x_mark').style="display:none;";
        document.getElementById('search-bar').style="display:none;";
        document.querySelector('.slider').classList.remove("bottom");
        document.querySelector('.slider').classList.add("bottom1")
        document.getElementById('search-bar-1').style="display:none; position:absolute; top:0%";
    }


    
    function CHANGES() {
        document.getElementById('glass_1').style="display:none;";
        document.getElementById('x_mark_1').style="display:block;";
        
        document.getElementById('search-bar-1').style=" z-index:10000";
    }

    function CHANGES2() {
        document.getElementById('glass_1').style="display:flex;";
        document.getElementById('x_mark_1').style="display:none;";
        
        document.getElementById('search-bar-1').style=" z-index:-1";
    }


    function tosave() {
        document.getElementById('mark').style="display:none;";
        document.getElementById('CHECK').style="display:flex;";
        
       
        
    }

    function tounsave() {
        document.getElementById('mark').style="display:flex;";
        document.getElementById('CHECK').style="display:none;";
        
        
       
    }


    function tosave1() {
        document.getElementById('mark1').style="display:none;";
        document.getElementById('CHECK1').style="display:flex;";
        
       
        
    }

    function tounsave1() {
        document.getElementById('mark1').style="display:flex;";
        document.getElementById('CHECK1').style="display:none;";
        
        
       
    }

    function tosave2() {
        document.getElementById('mark2').style="display:none;";
        document.getElementById('CHECK2').style="display:flex;";
    }

    function tounsave2() {
        document.getElementById('mark2').style="display:flex;";
        document.getElementById('CHECK2').style="display:none;";
    }

    function tosave3() {
        document.getElementById('mark3').style="display:none;";
        document.getElementById('CHECK3').style="display:flex;";
    }

    function tounsave3() {
        document.getElementById('mark3').style="display:flex;";
        document.getElementById('CHECK3').style="display:none;";
    }


    function checked() {
        document.getElementById('booked').style="display:none;";
        document.getElementById('checked').style="display:flex;";
    }

    function booked() {
        document.getElementById('booked').style="display:flex;";
        document.getElementById('checked').style="display:none;";
    }


    function exitform() {
        document.getElementById('exit').style="display:flex;";
        
    }

    function exitcan() {
        document.getElementById('exit').style="display:none;";
        
    }

function next0(){
    
          
     document.querySelector(".details").setAttribute("id", "down-bar-1"); 
     document.querySelector(".episode").setAttribute("id", "");
     document.querySelector(".epi-details-1").style="display:block";  
     document.querySelector(".relet-img-1").style="display:none";  
    
}


function next1(){
  
    
       
        document.querySelector(".details").setAttribute("id", ""); 
        document.querySelector(".episode").setAttribute("id", "down-bar-1");
        document.querySelector(".epi-details-1").style="display:none";  
        document.querySelector(".relet-img-1").style="display:inline-flex";    
           
       
}


let episode = document.querySelector(".episode");
    
episode.addEventListener('click', ()=>{
    episode.setAttribute("id", "down-bar");
document.querySelector(".details").setAttribute("id", "");
document.querySelector(".episode1").setAttribute("id", "");
document.querySelector(".ep-segment").style="display:block";
document.querySelector(".epi-details").style="display:none";
document.querySelector(".relet-img").style="display:none";
}); 


let details = document.querySelector(".details");
    
details.addEventListener('click', ()=>{
    details.setAttribute("id", "down-bar");
document.querySelector(".episode").setAttribute("id", "");
document.querySelector(".episode1").setAttribute("id", "");
document.querySelector(".ep-segment").style="display:none";
document.querySelector(".epi-details").style="display:block";
document.querySelector(".relet-img").style="display:none";
}); 

let episode1 = document.querySelector(".episode1");
    
episode1.addEventListener('click', ()=>{
    episode1.setAttribute("id", "down-bar");
document.querySelector(".details").setAttribute("id", "");
document.querySelector(".episode").setAttribute("id", "");
document.querySelector(".ep-segment").style="display:none";
document.querySelector(".epi-details").style="display:none";
document.querySelector(".relet-img").style="display:inline-flex";
});



 
function bypass() {
    if(scrollY>270) {
        let action= document.querySelector(".entertainment");
        action.style=" opacity: 1; transition: 1.5s ease-in-out;";
        
    }
        
    if(scrollY>770) {
        let action1= document.querySelectorAll(".entertainment-1")[0];
        action1.style=" opacity: 1; transition: 1.5s ease-in-out;";
        
    }  

    if(scrollY>1370) {
        let action2= document.querySelector(".entertainment-2");
        action2.style=" opacity: 1; transition: 1.5s ease-in-out;";
        
    } 

    if(scrollY>1870) {
        let action3= document.querySelectorAll(".entertainment-1")[1];
        action3.style=" opacity: 1; transition: 1.5s ease-in-out;";
        
    } 

    if(scrollY>2370) {
        let action3= document.querySelectorAll(".entertainment-1")[2];
        action3.style=" opacity: 1; transition: 1.5s ease-in-out;";
        
    } 
};
 

  
   
   




function scleft() {
    let docu= document.querySelector(".slider-3");
        dom=  document.querySelector(".slider-4");
        back= document.querySelector(".banners");
        dot= document.querySelectorAll("#cir_cle i");
        dot1= document.querySelectorAll("#cir_cle i");

        dot[0].removeAttribute("id","activated");
        dot[1].setAttribute("id", "activated");
  
        back.style=" background: linear-gradient(to bottom,rgb(75, 75, 163) , #181818 50%,  #000000 100% );";
    docu.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
dom.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};

function scleft1() {
    let docu1= document.querySelector(".slider-4");
        dom1=  document.querySelector(".slider-5");
        back1= document.querySelector(".banners");
        back1.style=" background: linear-gradient(to bottom,rgb(23, 22, 22) , #181818 50%,  #000000 100% );";
        dot2= document.querySelectorAll("#cir_cle i");
        dot3= document.querySelectorAll("#cir_cle i");

        dot2[1].removeAttribute("id","activated");
        dot3[2].setAttribute("id", "activated");
        
    docu1.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
dom1.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4; " ;
};

function scleft2() {
    let docu2= document.querySelector(".slider-5");
        dom2=  document.querySelector(".slider-2");
        back2= document.querySelector(".banners");
        
        dot4= document.querySelectorAll("#cir_cle i");
        dot5= document.querySelectorAll("#cir_cle i");

        dot4[2].removeAttribute("id","activated");
        dot5[3].setAttribute("id", "activated");
        back2.style=" background: linear-gradient(to bottom,hsl(194, 85%, 13%) , #181818 50%,  #000000 100% );";
    docu2.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
dom2.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};

function scleft3() {
    let docu3= document.querySelector(".slider-2");
        dom3=  document.querySelector(".slider-1");
        back3= document.querySelector(".banners");
       
        dot6= document.querySelectorAll("#cir_cle i");
        dot7= document.querySelectorAll("#cir_cle i");

        dot6[3].removeAttribute("id","activated");
        dot7[4].setAttribute("id", "activated");
         back3.style=" background: linear-gradient(to bottom,#56120a , #181818 50%,  #000000 100% );";
    docu3.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
dom3.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};

function scleft4() {
    let docu4= document.querySelector(".slider-1");
        dom4=  document.querySelector(".slider-3");
        back4= document.querySelector(".banners");
        back4.style=" background: linear-gradient(to bottom,hsl(11, 37%, 31%), #181818 50%,  #000000 100% );";
        dot8= document.querySelectorAll("#cir_cle i");
        dot9= document.querySelectorAll("#cir_cle i");

        dot8[4].removeAttribute("id","activated");
        dot9[0].setAttribute("id", "activated");
        
    docu4.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
dom4.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};



function circle() {
    let doc= document.querySelector(".slider-3");
    d1= document.querySelector(".slider-4");
    d_2= document.querySelector(".slider-2");
    d_3= document.querySelector(".slider-1");
    d_4= document.querySelector(".slider-5");
    backs= document.querySelector(".banners");
   
    dots1= document.querySelectorAll("#cir_cle i");
    dots2= document.querySelectorAll("#cir_cle i");
    dots3= document.querySelectorAll("#cir_cle i");
    dots4= document.querySelectorAll("#cir_cle i");
    dots5= document.querySelectorAll("#cir_cle i");
    
    
    
    dots1[0].setAttribute("id", "activated");
    backs.style= "background: linear-gradient(to bottom,hsl(11, 37%, 31%) , #181818 50%,  #000000 100% );";
    dots2[1].removeAttribute("id", "activated");
    dots3[2].removeAttribute("id", "activated");
    dots4[3].removeAttribute("id", "activated");
    dots5[4].removeAttribute("id", "activated");
   
   
   
    d1.style=" transition:1.5s; opacity:0;  z-index:-4;  transform: scale(0);";
    doc.style="";
    d_2.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    d_3.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    d_4.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
}

function circle1() {
    let do1= document.querySelector(".slider-4");
    do2= document.querySelector(".slider-3");
    do3= document.querySelector(".slider-2");
    do4= document.querySelector(".slider-1");
    do5= document.querySelector(".slider-5");
    backs1= document.querySelector(".banners");  
    
    dots6= document.querySelectorAll("#cir_cle i");
    dots7= document.querySelectorAll("#cir_cle i");
    dots8= document.querySelectorAll("#cir_cle i");
    dots9= document.querySelectorAll("#cir_cle i");
    dots10= document.querySelectorAll("#cir_cle i");
    
    
   
    dots6[0].removeAttribute("id", "activated");
    dots7[1].setAttribute("id", "activated");
    backs1.style="background: linear-gradient(to bottom,rgb(75, 75, 163) , #181818 50%,  #000000 100% );";
    dots8[2].removeAttribute("id", "activated");
    dots9[3].removeAttribute("id", "activated");
    dots10[4].removeAttribute("id", "activated");

   
   
    do2.style=" opacity:0;  z-index:-4;  transform: scale(0);";
    do1.style=" transition:1.5s;opacity:1; z-index:4;  transform: scale(1);";
    do3.style="transition:1.5s; opacity:0;z-index:-4;  transform: scale(0);";
    do4.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    do5.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
}


function circle2() {
    let do6= document.querySelector(".slider-5");
    do7= document.querySelector(".slider-4");
    do8= document.querySelector(".slider-2");
    do9= document.querySelector(".slider-1");
    do10= document.querySelector(".slider-3");
    backs2= document.querySelector(".banners");  
    
    dots11= document.querySelectorAll("#cir_cle i");
    dots12= document.querySelectorAll("#cir_cle i");
    dots13= document.querySelectorAll("#cir_cle i");
    dots14= document.querySelectorAll("#cir_cle i");
    dots15= document.querySelectorAll("#cir_cle i");
    
    
   
    dots11[0].removeAttribute("id", "activated");
    dots12[1].removeAttribute("id", "activated");
    dots13[2].setAttribute("id", "activated");
    backs2.style="background: linear-gradient(to bottom,rgb(23, 22, 22) , #181818 50%,  #000000 100% );";
    dots14[3].removeAttribute("id", "activated");
    dots15[4].removeAttribute("id", "activated");

    
    do6.style="transition:1.5s; opacity:1; z-index:4;  transform: scale(1);";
    do7.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
   
    do8.style=" transition:1.5s;opacity:0; z-index:-4;  transform: scale(0);";
    do9.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    do10.style="  z-index:-4; opacity:0;  transform: scale(0);";
}


function circle3() {
    let do11= document.querySelector(".slider-2");
    do12= document.querySelector(".slider-4");
    do13= document.querySelector(".slider-5");
    do14= document.querySelector(".slider-1");
    do15= document.querySelector(".slider-3");
    backs3= document.querySelector(".banners");  
    
    dots12= document.querySelectorAll("#cir_cle i");
    dots13= document.querySelectorAll("#cir_cle i");
    dots14= document.querySelectorAll("#cir_cle i");
    dots15= document.querySelectorAll("#cir_cle i");
    dots16= document.querySelectorAll("#cir_cle i");
    
    
   
    dots12[0].removeAttribute("id", "activated");
    dots13[1].removeAttribute("id", "activated");
    dots14[2].removeAttribute("id", "activated");
    backs3.style="background: linear-gradient(to bottom,hsl(194, 85%, 13%) , #181818 50%,  #000000 100% );";
    dots15[3].setAttribute("id", "activated");
    dots16[4].removeAttribute("id", "activated");

    
    do11.style="transition:1.5s; opacity:1; z-index:4;  transform: scale(1);";
    do12.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
   
    do13.style=" transition:1.5s;opacity:0; z-index:-4;  transform: scale(0);";
    do14.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    do15.style="  z-index:-4; opacity:0;  transform: scale(0);";
}


function circle4() {
    let do16= document.querySelector(".slider-1");
    do17= document.querySelector(".slider-4");
    do18= document.querySelector(".slider-5");
    do19= document.querySelector(".slider-2");
    do20= document.querySelector(".slider-3");
    backs4= document.querySelector(".banners");  
    
    dots17= document.querySelectorAll("#cir_cle i");
    dots18= document.querySelectorAll("#cir_cle i");
    dots19= document.querySelectorAll("#cir_cle i");
    dots20= document.querySelectorAll("#cir_cle i");
    dots21= document.querySelectorAll("#cir_cle i");
    
    
   
    dots17[0].removeAttribute("id", "activated");
    dots18[1].removeAttribute("id", "activated");
    dots19[2].removeAttribute("id", "activated");
    backs4.style="background: linear-gradient(to bottom,#56120a , #181818 50%,  #000000 100% );";
    dots20[3].removeAttribute("id", "activated");
    dots21[4].setAttribute("id", "activated");

    
    do16.style="transition:1.5s; opacity:1; z-index:4;  transform: scale(1);";
    do17.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
   
    do18.style=" transition:1.5s;opacity:0; z-index:-4;  transform: scale(0);";
    do19.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    do20.style="  z-index:-4; opacity:0;  transform: scale(0);";
}





function scleft9() {
    let sl= document.querySelector(".slider-3-1");
        sl1=  document.querySelector(".slider-4-1");
        backS= document.querySelector(".bannerss");
        Dot= document.querySelectorAll("#cir_cle i");
        Dot1= document.querySelectorAll("#cir_cle i");

        Dot[0].removeAttribute("id","activated");
        Dot[1].setAttribute("id", "activated");
  
        backS.style=" background: linear-gradient(to bottom,#2D314A, #181818 50%,  #000000 100% );";
    sl.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
sl1.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};

function scleft8() {
    let sl2= document.querySelector(".slider-4-1");
        sl3=  document.querySelector(".slider-5-1");
        backS1= document.querySelector(".bannerss");
        backS1.style=" background: linear-gradient(to bottom, hsl(11, 33%, 32%) , #181818 50%,  #000000 100% );";
        Dot2= document.querySelectorAll("#cir_cle i");
        Dot3= document.querySelectorAll("#cir_cle i");

        Dot2[1].removeAttribute("id","activated");
        Dot3[2].setAttribute("id", "activated");
        
    sl2.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
sl3.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4; " ;
};

function scleft7() {
    let sl4= document.querySelector(".slider-5-1");
    sl5=  document.querySelector(".slider-2-1");
        backS2= document.querySelector(".bannerss");
        
        Dot4= document.querySelectorAll("#cir_cle i");
        Dot5= document.querySelectorAll("#cir_cle i");

        Dot4[2].removeAttribute("id","activated");
        Dot5[3].setAttribute("id", "activated");
        backS2.style=" background: linear-gradient(to bottom,hsl(194, 85%, 13%) , #181818 50%,  #000000 100% );";
        sl4.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
        sl5.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};

function scleft6() {
    let sl6= document.querySelector(".slider-2-1");
    sl7=  document.querySelector(".slider-1-1");
        backS3= document.querySelector(".bannerss");
       
        Dot6= document.querySelectorAll("#cir_cle i");
        Dot7= document.querySelectorAll("#cir_cle i");

        Dot6[3].removeAttribute("id","activated");
        Dot7[4].setAttribute("id", "activated");
         backS3.style=" background: linear-gradient(to bottom,#56120a , #181818 50%,  #000000 100% );";
        sl6.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
        sl7.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};

function scleft5() {
    let sl8= document.querySelector(".slider-1-1");
    sl9=  document.querySelector(".slider-3-1");
        backS4= document.querySelector(".bannerss");
        backS4.style=" background: linear-gradient(to bottom,#475258, #181818 50%,  #000000 100% );";
        Dot8= document.querySelectorAll("#cir_cle i");
        Dot9= document.querySelectorAll("#cir_cle i");

        Dot8[4].removeAttribute("id","activated");
        Dot9[0].setAttribute("id", "activated");
        
        sl8.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
        sl9.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};






function circle5() {
    let slides= document.querySelector(".slider-3-1");
    slides1= document.querySelector(".slider-4-1");
    slides2= document.querySelector(".slider-2-1");
    slides3= document.querySelector(".slider-1-1");
    slides4= document.querySelector(".slider-5-1");
    Backs= document.querySelector(".bannerss");
   
    Dots1= document.querySelectorAll("#cir_cle i");
    Dots2= document.querySelectorAll("#cir_cle i");
    Dots3= document.querySelectorAll("#cir_cle i");
    Dots4= document.querySelectorAll("#cir_cle i");
    Dots5= document.querySelectorAll("#cir_cle i");
    
    
    
    Dots1[0].setAttribute("id", "activated");
    Backs.style= "background: linear-gradient(to bottom,#475258, #181818 50%,  #000000 100% );";
    Dots2[1].removeAttribute("id", "activated");
    Dots3[2].removeAttribute("id", "activated");
    Dots4[3].removeAttribute("id", "activated");
    Dots5[4].removeAttribute("id", "activated");
   
   
   
    slides1.style=" transition:1.5s; opacity:0;  z-index:-4;  transform: scale(0);";
    slides.style="";
    slides2.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    slides3.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    slides4.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
}

function circle6() {
    let Do1= document.querySelector(".slider-4-1");
    Do2= document.querySelector(".slider-3-1");
    Do3= document.querySelector(".slider-2-1");
    Do4= document.querySelector(".slider-1-1");
    Do5= document.querySelector(".slider-5-1");
    Backs1= document.querySelector(".bannerss");  
    
    Dots6= document.querySelectorAll("#cir_cle i");
    Dots7= document.querySelectorAll("#cir_cle i");
    Dots8= document.querySelectorAll("#cir_cle i");
    Dots9= document.querySelectorAll("#cir_cle i");
    Dots10= document.querySelectorAll("#cir_cle i");
    
    
   
    Dots6[0].removeAttribute("id", "activated");
    Dots7[1].setAttribute("id", "activated");
    Backs1.style="background: linear-gradient(to bottom,#2D314A, #181818 50%,  #000000 100% );";
    Dots8[2].removeAttribute("id", "activated");
    Dots9[3].removeAttribute("id", "activated");
    Dots10[4].removeAttribute("id", "activated");

   
   
    Do2.style=" opacity:0;  z-index:-4;  transform: scale(0);";
    Do1.style=" transition:1.5s;opacity:1; z-index:4;  transform: scale(1);";
    Do3.style="transition:1.5s; opacity:0;z-index:-4;  transform: scale(0);";
    Do4.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Do5.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
}


function circle7() {
    let Do6= document.querySelector(".slider-5-1");
        Do7= document.querySelector(".slider-4-1");
        Do8= document.querySelector(".slider-2-1");
        Do9= document.querySelector(".slider-1-1");
       Do10= document.querySelector(".slider-3-1");
    Backs2= document.querySelector(".bannerss");  
    
    Dots11= document.querySelectorAll("#cir_cle i");
    Dots12= document.querySelectorAll("#cir_cle i");
    Dots13= document.querySelectorAll("#cir_cle i");
    Dots14= document.querySelectorAll("#cir_cle i");
    Dots15= document.querySelectorAll("#cir_cle i");
   
   
   Dots11[0].removeAttribute("id", "activated");
   Dots12[1].removeAttribute("id", "activated");
   Dots13[2].setAttribute("id", "activated");
    Backs2.style="background: linear-gradient(to bottom, hsl(11, 33%, 32%) , #181818 50%,  #000000 100% );";
    Dots14[3].removeAttribute("id", "activated");
    Dots15[4].removeAttribute("id", "activated");

    
    Do6.style="transition:1.5s; opacity:1; z-index:4;  transform: scale(1);";
    Do7.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
   
    Do8.style=" transition:1.5s;opacity:0; z-index:-4;  transform: scale(0);";
    Do9.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Do10.style="  z-index:-4; opacity:0;  transform: scale(0);";
}


function circle8() {
    let Do11= document.querySelector(".slider-2-1");
        Do12= document.querySelector(".slider-4-1");
        Do13= document.querySelector(".slider-5-1");
        Do14= document.querySelector(".slider-1-1");
        Do15= document.querySelector(".slider-3-1");
    Backs3= document.querySelector(".bannerss");  
    
    Dots12= document.querySelectorAll("#cir_cle i");
    Dots13= document.querySelectorAll("#cir_cle i");
    Dots14= document.querySelectorAll("#cir_cle i");
    Dots15= document.querySelectorAll("#cir_cle i");
    Dots16= document.querySelectorAll("#cir_cle i");
    
    
   
    Dots12[0].removeAttribute("id", "activated");
    Dots13[1].removeAttribute("id", "activated");
    Dots14[2].removeAttribute("id", "activated");
    Backs3.style="background: linear-gradient(to bottom,hsl(194, 85%, 13%) , #181818 50%,  #000000 100% );";
    Dots15[3].setAttribute("id", "activated");
    Dots16[4].removeAttribute("id", "activated");

    
    Do11.style="transition:1.5s; opacity:1; z-index:4;  transform: scale(1);";
    Do12.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
  
    Do13.style=" transition:1.5s;opacity:0; z-index:-4;  transform: scale(0);";
    Do14.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Do15.style="  z-index:-4; opacity:0;  transform: scale(0);";
}


function circle9() {
    let Do16= document.querySelector(".slider-1-1");
        Do17= document.querySelector(".slider-4-1");
        Do18= document.querySelector(".slider-5-1");
        Do19= document.querySelector(".slider-2-1");
        Do20= document.querySelector(".slider-3-1");
    Backs4= document.querySelector(".bannerss");  
    
    Dots17= document.querySelectorAll("#cir_cle i");
    Dots18= document.querySelectorAll("#cir_cle i");
    Dots19= document.querySelectorAll("#cir_cle i");
    Dots20= document.querySelectorAll("#cir_cle i");
    Dots21= document.querySelectorAll("#cir_cle i");
    
    
   
    Dots17[0].removeAttribute("id", "activated");
    Dots18[1].removeAttribute("id", "activated");
    Dots19[2].removeAttribute("id", "activated");
    Backs4.style="background: linear-gradient(to bottom,#56120a , #181818 50%,  #000000 100% );";
    Dots20[3].removeAttribute("id", "activated");
    Dots21[4].setAttribute("id", "activated");

    
    Do16.style="transition:1.5s; opacity:1; z-index:4;  transform: scale(1);";
    Do17.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
   
    Do18.style=" transition:1.5s;opacity:0; z-index:-4;  transform: scale(0);";
    Do19.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Do20.style="  z-index:-4; opacity:0;  transform: scale(0);";
}




function scleft14() {
    let Sl= document.querySelector(".slider-3-action");
        Sl1=  document.querySelector(".slider-4-m");
        backed= document.querySelector(".bannersss");
        Doted= document.querySelectorAll("#cir_cle i");
        Doted1= document.querySelectorAll("#cir_cle i");

        Doted[0].removeAttribute("id","activated");
        Doted1[1].setAttribute("id", "activated");
  
        backed.style=" background: linear-gradient(to bottom,rgb(75, 75, 163), #181818 50%,  #000000 100% );";
    Sl.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Sl1.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};

function scleft13() {
    let Sl2= document.querySelector(".slider-4-m");
       Sl3=  document.querySelector(".slider-5-m");
       backed1= document.querySelector(".bannersss");
       backed1.style=" background: linear-gradient(to bottom, rgb(23, 22, 22), #181818 50%,  #000000 100% );";
        Doted2= document.querySelectorAll("#cir_cle i");
        Doted3= document.querySelectorAll("#cir_cle i");

        Doted2[1].removeAttribute("id","activated");
        Doted3[2].setAttribute("id", "activated");
        
    Sl2.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Sl3.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4; " ;
};

function scleft12() {
    let Sl4= document.querySelector(".slider-5-m");
        Sl5=  document.querySelector(".slider-2-m");
        backed2= document.querySelector(".bannersss");
        
        Doted4= document.querySelectorAll("#cir_cle i");
        Doted5= document.querySelectorAll("#cir_cle i");

        Doted4[2].removeAttribute("id","activated");
        Doted5[3].setAttribute("id", "activated");
        backed2.style=" background: linear-gradient(to bottom,#3f4322 , #181818 50%,  #000000 100% );";
        Sl4.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
        Sl5.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};

function scleft11() {
    let Sl6= document.querySelector(".slider-2-m");
        Sl7=  document.querySelector(".slider-1-m");
        backed3= document.querySelector(".bannersss");
       
        Doted6= document.querySelectorAll("#cir_cle i");
        Doted7= document.querySelectorAll("#cir_cle i");

        Doted6[3].removeAttribute("id","activated");
        Doted7[4].setAttribute("id", "activated");
        backed3.style=" background: linear-gradient(to bottom,#6a2821 , #181818 50%,  #000000 100% );";
        Sl6.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
        Sl7.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};

function scleft10() {
    let Sl8= document.querySelector(".slider-1-m");
        Sl9=  document.querySelector(".slider-3-action");
         backed4= document.querySelector(".bannersss");
         backed4.style=" background: linear-gradient(to bottom,#2f2b22, #181818 50%,  #000000 100% );";
        Doted8= document.querySelectorAll("#cir_cle i");
        Doted9= document.querySelectorAll("#cir_cle i");

        Doted8[4].removeAttribute("id","activated");
        Doted9[0].setAttribute("id", "activated");
        
        Sl8.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
        Sl9.style="transition:1.5s;opacity:1; transform: scale(1);z-index:4;" ;
};




function circle10() {
let     Slides= document.querySelector(".slider-3-action");
        Slides1= document.querySelector(".slider-4-m");
        Slides2= document.querySelector(".slider-2-m");
        Slides3= document.querySelector(".slider-1-m");
        Slides4= document.querySelector(".slider-5-m");
    Backed= document.querySelector(".bannersss");
   
    Doteed1= document.querySelectorAll("#cir_cle i");
    Doteed2= document.querySelectorAll("#cir_cle i");
    Doteed3= document.querySelectorAll("#cir_cle i");
    Doteed4= document.querySelectorAll("#cir_cle i");
    Doteed5= document.querySelectorAll("#cir_cle i");
    
    
    Backed.style= "background: linear-gradient(to bottom,#2f2b22, #181818 50%,  #000000 100% );";
    Doteed1[0].setAttribute("id", "activated");
    
    Doteed2[1].removeAttribute("id", "activated");
    Doteed3[2].removeAttribute("id", "activated");
    Doteed4[3].removeAttribute("id", "activated");
    Doteed5[4].removeAttribute("id", "activated");
      
   
   
    Slides1.style=" transition:1.5s; opacity:0;  z-index:-4;  transform: scale(0);";
    Slides.style="";
    Slides2.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Slides3.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Slides4.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
}

function circle11() {
    let Dos1= document.querySelector(".slider-4-m");
        Dos2= document.querySelector(".slider-3-action");
        Dos3= document.querySelector(".slider-2-m");
        Dos4= document.querySelector(".slider-1-m");
        Dos5= document.querySelector(".slider-5-m");
    Backed1= document.querySelector(".bannersss");  
    
    Dotes6= document.querySelectorAll("#cir_cle i");
    Dotes7= document.querySelectorAll("#cir_cle i");
    Dotes8= document.querySelectorAll("#cir_cle i");
    Dotes9= document.querySelectorAll("#cir_cle i");
    Dotes10= document.querySelectorAll("#cir_cle i");
    
    
   
    Dotes6[0].removeAttribute("id", "activated");
    Dotes7[1].setAttribute("id", "activated");
    Backed1.style="background: linear-gradient(to bottom,rgb(75, 75, 163), #181818 50%,  #000000 100% );";
    Dotes8[2].removeAttribute("id", "activated");
    Dotes9[3].removeAttribute("id", "activated");
    Dotes10[4].removeAttribute("id", "activated");

   
   
    Dos2.style=" opacity:0;  z-index:-4;  transform: scale(0);";
    Dos1.style=" transition:1.5s;opacity:1; z-index:4;  transform: scale(1);";
    Dos3.style="transition:1.5s; opacity:0;z-index:-4;  transform: scale(0);";
    Dos4.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Dos5.style="transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
}


function circle12() {
    let Dos6= document.querySelector(".slider-5-m");
        Dos7= document.querySelector(".slider-4-m");
        Dos8= document.querySelector(".slider-2-m");
        Dos9= document.querySelector(".slider-1-m");
        Dos10= document.querySelector(".slider-3-action");
        Backed2= document.querySelector(".bannersss");  
    
    Dotes11= document.querySelectorAll("#cir_cle i");
    Dotes12= document.querySelectorAll("#cir_cle i");
    Dotes13= document.querySelectorAll("#cir_cle i");
    Dotes14= document.querySelectorAll("#cir_cle i");
    Dotes15= document.querySelectorAll("#cir_cle i");
   
   
   Dotes11[0].removeAttribute("id", "activated");
   Dotes12[1].removeAttribute("id", "activated");
   Dotes13[2].setAttribute("id", "activated");
   Backed2.style="background: linear-gradient(to bottom, rgb(23, 22, 22) , #181818 50%,  #000000 100% );";
    Dotes14[3].removeAttribute("id", "activated");
    Dotes15[4].removeAttribute("id", "activated");

    
    Dos6.style="transition:1.5s; opacity:1; z-index:4;  transform: scale(1);";
    Dos7.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
   
    Dos8.style=" transition:1.5s;opacity:0; z-index:-4;  transform: scale(0);";
    Dos9.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Dos10.style="  z-index:-4; opacity:0;  transform: scale(0);";
}


function circle13() {
    let Dos11= document.querySelector(".slider-2-m");
        Dos12= document.querySelector(".slider-4-m");
        Dos13= document.querySelector(".slider-5-m");
        Dos14= document.querySelector(".slider-1-m");
        Dos15= document.querySelector(".slider-3-action");
        Backed3= document.querySelector(".bannersss");  
    
    Dotes12= document.querySelectorAll("#cir_cle i");
    Dotes13= document.querySelectorAll("#cir_cle i");
    Dotes14= document.querySelectorAll("#cir_cle i");
    Dotes15= document.querySelectorAll("#cir_cle i");
    Dotes16= document.querySelectorAll("#cir_cle i");
    
    
   
    Dotes12[0].removeAttribute("id", "activated");
    Dotes13[1].removeAttribute("id", "activated");
    Dotes14[2].removeAttribute("id", "activated");
    Backed3.style="background: linear-gradient(to bottom,#3f4322  , #181818 50%,  #000000 100% );";
    Dotes15[3].setAttribute("id", "activated");
    Dotes16[4].removeAttribute("id", "activated");

    
    Dos11.style="transition:1.5s; opacity:1; z-index:4;  transform: scale(1);";
    Dos12.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
  
    Dos13.style=" transition:1.5s;opacity:0; z-index:-4;  transform: scale(0);";
    Dos14.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Dos15.style="  z-index:-4; opacity:0;  transform: scale(0);";
}


function circle14() {
    let Dos16= document.querySelector(".slider-1-m");
        Dos17= document.querySelector(".slider-4-m");
        Dos18= document.querySelector(".slider-5-m");
        Dos19= document.querySelector(".slider-2-m");
        Dos20= document.querySelector(".slider-3-action");
        Backed4= document.querySelector(".bannersss");  
    
    Dotes17= document.querySelectorAll("#cir_cle i");
    Dotes18= document.querySelectorAll("#cir_cle i");
    Dotes19= document.querySelectorAll("#cir_cle i");
    Dotes20= document.querySelectorAll("#cir_cle i");
    Dotes21= document.querySelectorAll("#cir_cle i");
    
    
   
    Dotes17[0].removeAttribute("id", "activated");
    Dotes18[1].removeAttribute("id", "activated");
    Dotes19[2].removeAttribute("id", "activated");
    Backed4.style="background: linear-gradient(to bottom,#6a2821, #181818 50%,  #000000 100% );";
    Dotes20[3].removeAttribute("id", "activated");
    Dotes21[4].setAttribute("id", "activated");

    
    Dos16.style="transition:1.5s; opacity:1; z-index:4;  transform: scale(1);";
    Dos17.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
   
    Dos18.style=" transition:1.5s;opacity:0; z-index:-4;  transform: scale(0);";
    Dos19.style=" transition:1.5s; opacity:0; z-index:-4;  transform: scale(0);";
    Dos20.style="  z-index:-4; opacity:0;  transform: scale(0);";
}


function bar1() {
    let serv=  document.querySelector(".search");
    serv.style.display= "none";
  
  }

function ground() {
  let gr=  document.getElementById("share-options");
  gr.style="opacity:0; ";

  let ser2 = document.querySelector(".search");
          input1 = document.getElementById("inpu");
          bullian1= false;
  
          if(input1.value == bullian1) {
              ser2.style.display= "block";
          }
  
          else if (input1.value == !bullian1) {
              ser2.style.display= "none";
          }
  
}


function copied() {
    navigator.clipboard.writeText(window.location);
}

function copied1() {
    navigator.clipboard.writeText(window.location);
}



function bar() {
  let ser=  document.getElementById("search");
  ser.style.display= "none";

}

function don() {
    let ser1 = document.getElementById("search");
        input = document.getElementById("put5");
        bullian= false;

        if(input.value == bullian) {
            ser1.style.display= "block";
        }

        else if (input.value == !bullian) {
            ser1.style.display= "none";
        }



}



function loa() {
  Notification.requestPermission(()=>{
    if(Notification.permission ==="granted") {
new Notification("Welcome to AnimeHub",{
    icon:'Group 1 (5).png'
});
    }

    
  });
  
}
