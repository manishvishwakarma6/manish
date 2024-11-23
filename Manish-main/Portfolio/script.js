
// navbar

const toggleButton = document.querySelector('.toggle-button');
const navLinks = document.querySelector('.nav-links');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    navLinks.classList.toggle('active');
});



// Get the navbar and content elements
const navbar = document.querySelector('.navbar');
const content = document.querySelector('.content');

// Add an event listener to the window scroll event
window.addEventListener('scroll', () => {
  // Check if the user has scrolled down far enough to show the navbar
  if (window.scrollY > 200) {
    navbar.classList.add('fixed');
  } else {
    navbar.classList.remove('fixed');
  }
});



// home page 

document.querySelectorAll('.image-container').forEach(function(container) {
  container.addEventListener('click', function() {
    this.nextElementSibling.style.display = this.nextElementSibling.style.display === 'none' ? 'block' : 'none';
  });
});



// awards

let sliderWrapper = document.querySelector('.slider-wrapper7');
let imageList = document.querySelector('.image-list7');
let prevSlide = document.querySelector('#prev-slide');
let nextSlide = document.querySelector('#next-slide');
let imageItems = document.querySelectorAll('.image-item7');
let currentIndex = 0;

prevSlide.addEventListener('click', () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = imageItems.length - 1;
  }
  imageList.style.transform = `translateX(-${currentIndex * 100}%)`;
});

nextSlide.addEventListener('click', () => {
  currentIndex++;
  if (currentIndex > imageItems.length - 1) {
    currentIndex = 0;
  }
  imageList.style.transform = `translateX(-${currentIndex * 100}%)`;
  container.addEventListener('mouseout', autoSliding);
});


// card slider 

	let testSlide = document.querySelectorAll('.testItem');
	let dots = document.querySelectorAll('.dot');

	var counter = 0;
	function switchTest(currentTest){
		currentTest.classList.add('active');
		var testId = currentTest.getAttribute('attr');
		if(testId > counter){
			testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		}
		else if(testId == counter){return;}
		else{
			testSlide[counter].style.animation = 'prev1 0.5s ease-in forwards';
			counter = testId;
			testSlide[counter].style.animation = 'prev2 0.5s ease-in forwards';
		}
		indicators();
	}
	function indicators(){
		for(i = 0; i < dots.length; i++){
			dots[i].className = dots[i].className.replace(' active', '');
		}
		dots[counter].className += ' active';
	}
	function slideNext(){
		testSlide[counter].style.animation = 'next1 0.5s ease-in forwards';
		if(counter >= testSlide.length - 1){
			counter = 0;
		}
		else{
			counter++;
		}
		testSlide[counter].style.animation = 'next2 0.5s ease-in forwards';
		indicators();
	}
	function autoSliding(){
		deleteInterval = setInterval(timer, 2000);
		function timer(){
			slideNext();
			indicators();
		}
	}
	autoSliding();
	const container = document.querySelector('.indicators');
	container.addEventListener('mouseover', pause);
	function pause(){
		clearInterval(deleteInterval);
	}
	container.addEventListener('mouseout', autoSliding);



