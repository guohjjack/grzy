
  can=can.getContext('2d');
  can2=can2.getContext('2d');
  can3=can3.getContext('2d');
  can1=can1.getContext('2d');
  can4=can4.getContext('2d');
  can5=can5.getContext('2d');
  can6=can6.getContext('2d');
  can8=can8.getContext('2d');
function  time(can,du) {


  var  s=0;
  var  b=du;
function  move( ) {
 
    can.clearRect(0,0,500,500);
    s++;
    var ang=s/100*Math.PI*2;
    if(s>=b){
  	clearInterval(t)
   }
   can.strokeStyle="#fff";
   can.beginPath()
   can.save();
   can.lineWidth=50;
   can.translate(250,250);

   can.rotate(-Math.PI/2)
   can.arc(0,0,200,0,ang)
   can.stroke();
   can.restore();
   can.closePath();
  
   can.save();
   can.beginPath();
   can.translate(250,250);
   can.textAlign= "center";
   can.textBaseline="middle";
    can.font="100px arial";
   // can.fillText(s+"%",0,0);
   can.closePath();
   can.restore();



}

var t=setInterval(move,1000/b)






}

var  skill=document.getElementById('skills');
var  ch=document.documentElement.clientHeight; 
var  coniltar=document.querySelector(".container");
var  content=document.querySelector(".content");
var  left=document.querySelector(".years");



function  skills() {
  var  falg=true;

  $(window).scroll(function() {
   
var tops=$(window).scrollTop();
    if (tops>=ch) {
    content.className+=" active"

    }


  if (tops>=ch*2) {
     if (falg) {
      time(can,90)
      time(can2,88)
      time(can3,79)
      time(can4,86)
      time(can5,82)
      time(can6,87)

      time(can1,85);
      time(can8,86);

     falg=false; 
};
};
   })   
}

skills();







