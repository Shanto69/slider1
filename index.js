var slidItem = document.querySelectorAll(".slider_item");
var slidLeft = document.querySelector(".prev");
var slidRight = document.querySelector(".next");

var current = 0;

function reset(){
	for(var i = 0; i < slidItem.length; i++){
		slidItem[i].style.display = 'none';
	}
}

function startSlide(){
	reset();
	slidItem[0].style.display = 'block';
}
startSlide();

function leftSlide(){
	reset();
	if(current > 0){
		slidItem[current - 1].style.display = 'block';
		current--;
	}else if(current===0){
		slidItem[current].style.display = 'block';
	}
}

function rightSlide(){
	reset();
	if(current < 4){
		slidItem[current + 1].style.display = 'block';
		current++;
	}else if(current===4){
		slidItem[current].style.display = 'block';
	}
	
}

slidLeft.addEventListener('click',function(){
	if( current === slidItem.length +1){
		current = +1;
	}
	leftSlide();
})

slidRight.addEventListener('click',function(){
	if( current === slidItem.length +1){
		current = -1;
	}
	rightSlide();
})
setInterval(rightSlide, 2000);

















