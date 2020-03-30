const playSound = () => {
   const sounds = document.querySelectorAll('.sound');
   const pads = document.querySelectorAll('.pads div');

   pads.forEach((pad, index) => {
   pad.addEventListener('click', function() {
   	   sounds[index].currentTime = 0;
       sounds[index].play();
       createBubbles(index);
   	});
   });
}

   //create a function that makes bubbles
const createBubbles = (index) => {
   const bubble = document.createElement('div');
   const visual = document.querySelector('.visual');
   const colors = ["#60d394", "#d36060", "#c060d3", "#d3d160", "#6860d3", "#60c2d3"];
   	visual.appendChild(bubble);
   	bubble.style.backgroundColor = colors[index];
   	bubble.style.animation = "jump 1s ease";
   	bubble.addEventListener("animationend", () => {
   		visual.removeChild(this);
   	})
   	console.log(bubble);
   }

window.addEventListener('load', playSound);