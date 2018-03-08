var logoul=document.querySelectorAll(`.logoul>li`);
var logolis=document.querySelectorAll(`.logoul>li>ul`);
console.log(logoul,logolis)
logoul.forEach(function(value,index){
     value.onmouseenter=function(){
     	logolis[index].classList.add(`hover`);
     }
     value.onmouseleave=function(){
     	logolis[index].classList.remove(`hover`);
     }
})
var barlis=document.querySelectorAll(`.banner-img`);
var now=0;
var next=1;
var flag=true;
function move(){	
    if(flag){
    	flag=false;
    	if(next>barlis.length-1){
		next=0;
	}
    barlis[now].classList.remove(`active`);
	barlis[next].classList.add(`active`);
	animate(barlis[now],{opacity:0},2000,function(){
		flag=true;
	});
	animate(barlis[next],{opacity:1},2000,function(){
		flag=true;
	});
	now=next;
	next++;	
    }
	
}
var t=setInterval(move, 2500);
var time;
var barleft=document.querySelector(`.banner-left`);
var barright=document.querySelector(`.banner-right`);
barleft.onclick=function(){
    if(flag){
    	flag=false;
    	next=now-1;
    	if(next<0){
    		next=barlis.length-1;
    	}
    barlis[now].classList.remove(`active`);
	barlis[next].classList.add(`active`);
	animate(barlis[now],{opacity:0},2000,function(){
		flag=true;
	});
	animate(barlis[next],{opacity:1},2000,function(){
		flag=true;
	})
	now=next;
    }    	   
}
barright.onclick=function(){
	t=setInterval(move,2500);
}