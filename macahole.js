const one1=document.getElementById("one1");
const one2=document.getElementById("one2");
const one3=document.getElementById("one3");
const one4=document.getElementById("one4");
const one5=document.getElementById("one5");
const one6=document.getElementById("one6");
const one7=document.getElementById("one7");
const one8=document.getElementById("one8");
const one9=document.getElementById("one9");
const one10=document.getElementById("one10");
const one11=document.getElementById("one11");
const one12=document.getElementById("one12");
const one13=document.getElementById("one13");
const one14=document.getElementById("one14");
const one15=document.getElementById("one15");
const one16=document.getElementById("one16");
let score=0;
const opt=document.querySelectorAll(".opt");
const disabled=()=>{
  opt.forEach((opt)=>{
        opt.disabled=true;
        console.log("wertyuiop");  
    });
}
let item=0;
let p=0;
let q=0;
let a=0;
let b=0;
let c=0;
let d=0;
let e=0;
let f=0;
let g=0;
let h=0;
let i=0;
let j=0;
let k=0;
let l=0;
let n=0;
let o=0;
const score1=document.getElementById("score");
const clear=()=>{
    opt.forEach((opt)=>{
        opt.style.background="white";
        opt.disabled=true;
    })
}
const game=()=>{
 myFunction();
}
const newgame=()=>{
    timeleft=60;
    document.getElementById("start").innerHTML="TIME LEFT:"+timeleft; 
    clear();
    score=0;
    score1.innerHTML="YOUR SCORE:"+score;
    myFunction(item);
    opt.forEach((opt)=>{
        opt.disabled=true;
    })
}
let timeleft=60;
let high=0;
const timer=setInterval(function(){
    if(timeleft==0){
        alert("Game end!!! your points are "+score);
        if(score>high){
            alert("CONGRATULATION"+high+"is New high score");
        }
        newgame();
    }
    else if(timeleft<0){
        game();
    }
    else{
        document.getElementById("start").innerHTML="TIME LEFT:"+timeleft;
        game(); 
    } 
     timeleft=timeleft-1; 
},1500);
const fun=()=>{
    score+=2;
    score1.innerHTML="YOUR SCORE:"+score;
    disabled();
}
const fun1=()=>{
        score-=1;
        score1.innerHTML="YOUR SCORE:"+score;
        opt.disabled=true;
        disabled();
}
let color=["black","pink"];
const blocks=[["one1"],["one2"],["one3"],["one4"],["one5"],["one6"],["one7"],["one8"],["one9"],["one10"],["one11"],["one12"],["one13"],["one14"],["one15"],["one16"]];
function myFunction(){
item= Math.floor(Math.random()*15);
   console.log(item);
   if(item===0){ 
     clear();
     if(p>0){
        one1.removeEventListener("click",fun);
        p=0;
        one1.style.background=color[0]; 
        one1.addEventListener("click",fun1);
        }
    else{
        one1.removeEventListener("click",fun1);
        fun1();
        one1.style.background=color[1]; 
    one1.addEventListener("click",fun);
    p+=1;   
}  
   }

   
   else if(item===1){
    clear();
     if(q>0){
        one2.removeEventListener("click",fun);
        q=0;
        
        one2.style.background=color[0];  
        one2.addEventListener("click",fun1); 
     }
    else{   
    one2.removeEventListener("click",fun1);
    fun1();
    one2.style.background=color[1]; 
    one2.addEventListener("click",fun);
    q+=1;  
} 
   }


   else if(item==2){
    clear();
    if(a>0){
        one3.removeEventListener("click",fun);
        a=0;
        
        one3.style.background=color[0];
        one3.addEventListener("click",fun1); 
     }
    else{ 
    one3.removeEventListener("click",fun1);
    fun1();
    one3.style.background=color[1];
    one3.addEventListener("click",fun);
    a+=1;  
} 
   }
   else if(item==3){
    clear();
    if(b>0){
        one4.removeEventListener("click",fun);
        b=0;
        
         one4.style.background=color[0];
        one4.addEventListener("click",fun1); 
     }
    else{ 
    one4.removeEventListener("click",fun1);
    fun1();
    one4.style.background=color[1];
    one4.addEventListener("click",fun);
    b+=1;  
} 
   }
   else if(item==4){
    clear();
    if(c>0){
        one5.removeEventListener("click",fun);
        c=0;
        
         one5.style.background=color[0];
        one5.addEventListener("click",fun1); 
     }
    else{ 
    one5.removeEventListener("click",fun1);
    fun1();
    one5.style.background=color[1];
    one5.addEventListener("click",fun);
    c+=1;  
} 
   }
   else if(item==5){ 
    clear();
    if(d>0){
        one6.removeEventListener("click",fun);
        d=0;
        
         one6.style.background=color[0];
        one6.addEventListener("click",fun1); 
     }
    else{ 
    one6.removeEventListener("click",fun1);
    fun1();
    one6.style.background=color[1];
    one6.addEventListener("click",fun);
    d+=1;  
} 
   }
   else if(item==6){
    clear();
    if(e>0){
        one7.removeEventListener("click",fun);
        e=0;
        
         one7.style.background=color[0];
        one7.addEventListener("click",fun1); 
     }
    else{ 
    one7.removeEventListener("click",fun1);
    fun1();
    one7.style.background=color[1];
    one7.addEventListener("click",fun);
    e+=1;  
} 
   }
   else if(item==7){
    clear(); 
    if(f>0){
        one8.removeEventListener("click",fun);
        f=0;
        
         one8.style.background=color[0];
        one8.addEventListener("click",fun1); 
     }
    else{ 
    one8.removeEventListener("click",fun1);
    fun1();
    one8.style.background=color[1];
    one8.addEventListener("click",fun);
    f+=1;  
} 
   }
   else if(item==8){
    clear();  
    if(g>0){
        one9.removeEventListener("click",fun);
        g=0;
        
         one9.style.background=color[0];
        one9.addEventListener("click",fun1); 
     }
    else{ 
    one9.removeEventListener("click",fun1);
    fun1();
    one9.style.background=color[1];
    one9.addEventListener("click",fun);
    g+=1;  
} 
   }
   else if(item==9){
    clear();   
    if(h>0){
        one10.removeEventListener("click",fun);
        h=0;
        
one10.style.background=color[0];    
    one10.addEventListener("click",fun1); 
     }
    else{ 
    one10.removeEventListener("click",fun1);
    fun1();
    one10.style.background=color[1];
    one10.addEventListener("click",fun);
    h+=1;  
} 
   }
   else if(item==10){
    clear();   
    if(i>0){
        one11.removeEventListener("click",fun);
        i=0;
        
one11.style.background=color[0];  
      one11.addEventListener("click",fun1); 
     }
    else{ 
    one11.removeEventListener("click",fun1);
    fun1();
    one11.style.background=color[1];
    one11.addEventListener("click",fun);
    i+=1;  
} 
   }
   else if(item==11){
    clear();
    if(j>0){
        one12.removeEventListener("click",fun);
        j=0;
        
one12.style.background=color[0];
        one12.addEventListener("click",fun1); 
     }
    else{ 
    one12.removeEventListener("click",fun1);
    fun1();
    one12.style.background=color[1];
    one12.addEventListener("click",fun);
    j+=1;  
} 
   }
   else if(item==12){
  clear();
  if(k>0){
    one13.removeEventListener("click",fun);
    k=0;
    
  one13.style.background=color[0]; 
   one13.addEventListener("click",fun1); 
 }
else{ 
one13.removeEventListener("click",fun1);
fun1();
one13.style.background=color[1];
one13.addEventListener("click",fun);
k+=1;  
} 
}
   else if(item==13){
    clear();
    if(l>0){
        one14.removeEventListener("click",fun);
        l=0;
        
one14.style.background=color[0];    
    one14.addEventListener("click",fun1); 
     }
    else{ 
    one14.removeEventListener("click",fun1);
    fun1();
    one14.style.background=color[1];
    one14.addEventListener("click",fun);
    l+=1;  
} 
   }
   else if(item==14){
    clear();
    if(n>0){
        one15.removeEventListener("click",fun);
        n=0;
        
one15.style.background=color[0];    
    one15.addEventListener("click",fun1); 
     }
    else{ 
    one15.removeEventListener("click",fun1);
    fun1();
    one15.style.background=color[1];
    one15.addEventListener("click",fun);
    n+=1;  
} 
   }
   else if(item==15){
    clear();
    if(o>0){
        one16.removeEventListener("click",fun);
        o=0;
        
one16.style.background=color[0];    
    one16.addEventListener("click",fun1); 
     }
    else{ 
    one16.removeEventListener("click",fun1);
    fun1();
    one16.style.background=color[1];
    one16.addEventListener("click",fun);
    o+=1;  
} 
   }
   }

