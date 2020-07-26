
      
 var count =0;
 var dcount=0;
 var v;
 
      function result(e) {
      return v = e
      }

var counter=document.getElementById("counter");
var dcounter=document.getElementById("dcounter");
//ans1  

 function result1(){
    if(v =='Islamabad'){
         document.getElementById("ans1").innerHTML="rigt ans is "+v ;
         document.getElementById("ans1").style.color="green";
         count++;
         
       }
    else{
         document.getElementById("ans1").innerHTML="wrong ans "+v+"</br> rigt answer is Islamabad";
         document.getElementById("ans1").style.color="red";
         dcount++;
         
         
       }
     document.getElementById("tdd1").parentNode.parentNode.remove();
     document.getElementById("counter").innerHTML=count;
     document.getElementById("dcounter").innerHTML=dcount;
       }
 
 //ans2       

 function result2(){
    if(v =='karachi'){
         document.getElementById("ans2").innerHTML="rigt answer is "+v ;
         document.getElementById("ans2").style.color="green";
         count++;
       }
    else{
         document.getElementById('ans2').innerHTML="wrong answer "+v+" </br> rigt answer is karachi";
         document.getElementById('ans2').style.color="red";
         dcount++;
         
       }
       document.getElementById('tdd2').parentNode.parentNode.remove();
     document.getElementById('counter').innerHTML=count;
     document.getElementById('dcounter').innerHTML=dcount;
       }
       
   //ans3

 function result3(){
    if(v =='England'){
         document.getElementById('ans3').innerHTML="rigt ans is "+v ;
         document.getElementById('ans3').style.color="green";
         count++;
       }
    else{
         document.getElementById('ans3').innerHTML="wrong answer "+v+"</br>rigt answer is England";
         document.getElementById("ans3").style.color="red";
         dcount++;
         
       }
     document.getElementById("tdd3").parentNode.parentNode.remove();
     document.getElementById("counter").innerHTML=count;
     document.getElementById("dcounter").innerHTML=dcount;
       }
   
   
   //ans4

 function result4(){
    if(v ==206){
         document.getElementById("ans4").innerHTML="rigt ans is"+v ;
         document.getElementById("ans4").style.color="green";
         count++;
       }
    else{
         document.getElementById("ans4").innerHTML="wrong answers "+v+"</br>rigt answer is 206";
         document.getElementById("ans4").style.color="red";
         dcount++;
         
       }
     document.getElementById("tdd4").parentNode.parentNode.remove();
     document.getElementById("counter").innerHTML=count;
     document.getElementById("dcounter").innerHTML=dcount;
       }
