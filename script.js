var tl1 = gsap.timeline({paused: true, reversed: true});
var tl2 = gsap.timeline({paused: true, reversed: true});
var tl3 = gsap.timeline({paused: true, reversed: true});
var tl4 = gsap.timeline({paused: true, reversed: true});
var tl5 = gsap.timeline({paused: true, reversed: true});
var tl6 = gsap.timeline({paused: true, reversed: true});
var tl7 = gsap.timeline({paused: true, reversed: true});
var tl8 = gsap.timeline({paused: true, reversed: true});
var tl9 = gsap.timeline({paused: true, reversed: true});

tl1.to('.menu1 .bar1', 0.2, {width:'100px',ease:'back'},'start')
tl1.to('.menu1 .bar2', 0.2, {width:'55px',ease:'back'},'start')
tl1.to('.menu1 .bar3', 0.2, {width:'20px',ease:'back'},'start');

tl2.to('.menu2 .bar1', 0.2, {width:'20px',ease:Power2.easeInOut},'start')
tl2.to('.menu2 .bar2', 0.2, {width:'55px',ease:Power2.easeInOut},'start')
tl2.to('.menu2 .bar3', 0.2, {width:'100px',ease:Power2.easeInOut},'start');

tl3.to('.menu3 .bar1', 0.1, {x:50,width:'10px',ease:'back'})
tl3.to('.menu3 .bar2', 0.1, {x:50,width:'10px',ease:"back"})
tl3.to('.menu3 .bar3', 0.1, {x:50,width:'10px',ease:"back"});

tl4.to('.menu4 .bar1', 0.5, {rotation:-30,width:60,x:-5,y:12,ease:'bounce'},'start')
tl4.to('.menu4 .bar2', 0.5, { ease:"bounce.out"},'start')
tl4.to('.menu4 .bar3', 0.5, {rotation:30,width:60,x:-5,y:-12,ease:'bounce'},'start');

tl5.to('.menu5 .bar1', 0.1, {rotation:30,width:60,x:43,y:12,ease:'bounce'},'start')
tl5.to('.menu5 .bar2', 0.1, { ease:"bounce.out"},'start')
tl5.to('.menu5 .bar3', 0.1, {rotation:-30,width:60,x:43,y:-12,ease:'bounce'},'start');

tl6.to('.menu6 .bar1', 0.5, {rotation:40,width:100,x:0,y:30,ease:'power4.out'},'start')
tl6.to('.menu6 .bar2', 0.5, {opacity:0, ease:"power4.out"},'start')
tl6.to('.menu6 .bar3', 0.5, {rotation:-40,width:100,x:0,y:-20,ease:'power4.out'},'start');

tl7.to('.menu7 .bar1', 1, {rotation:400,width:100,x:0,y:30,ease:'power4.in'},'start')
tl7.to('.menu7 .bar2', 0.5, {y:50, ease:"bounce.out"},'start')
tl7.to('.menu7 .bar3', 1, {rotation:-400,width:100,x:0,y:-20,ease:'power4.in'},'start');

tl8.to('.menu8 .bar1', 1, {rotation:-90,width:100,x:25,y:30,ease:'bounce'},'start')
tl8.to('.menu8 .bar2', 1, {opacity:0, ease:"bounce.out"},'start')
tl8.to('.menu8 .bar3', 1, {rotation:90,width:100,x:-25,y:-20,ease:'bounce'},'start');


tl9.to('.menu9 .bar1', 0.3, {width:100,x:0,y:30,ease:'power4.inOut'},'-=1')
tl9.to('.menu9 .bar1', 0.3, {rotation:40,width:100,x:0,y:30,ease:'power4.inOut'},'start')
tl9.to('.menu9 .bar2', 0.1, {width:0, ease:"back.in"})
tl9.to('.menu9 .bar3', 0.3, {width:100,x:0,y:-20,ease:'power4.inOut'},'-=1');
tl9.to('.menu9 .bar3', 0.3, {rotation:-40,width:100,x:0,y:-20,ease:'power4.inOut'},'start');


document.querySelector('#menu1').addEventListener('click', function(){
  tl1.reversed() ? tl1.play() : tl1.reverse();
})
document.querySelector('#menu2').addEventListener('click', function(){
  tl2.reversed() ? tl2.play() : tl2.reverse();
})
document.querySelector('#menu3').addEventListener('click', function(){
  tl3.reversed() ? tl3.play() : tl3.reverse();
})
document.querySelector('#menu4').addEventListener('click', function(){
  tl4.reversed() ? tl4.play() : tl4.reverse();
})
document.querySelector('#menu5').addEventListener('click', function(){
  tl5.reversed() ? tl5.play() : tl5.reverse();
})
document.querySelector('#menu6').addEventListener('click', function(){
  tl6.reversed() ? tl6.play() : tl6.reverse();
})
document.querySelector('#menu7').addEventListener('click', function(){
  tl7.reversed() ? tl7.play() : tl7.reverse();
})
document.querySelector('#menu8').addEventListener('click', function(){
  tl8.reversed() ? tl8.play() : tl8.reverse();
})
document.querySelector('#menu9').addEventListener('click', function(){
  tl9.reversed() ? tl9.play() : tl9.reverse();
})


