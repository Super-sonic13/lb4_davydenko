const clickableElem1 = document.getElementById('clickable-elem1')
const clickableElem2 = document.querySelector('.clickable-elem2')

if(clickableElem1) {
   clickableElem1.addEventListener('click', function(e) {
      clickableElem1.classList.toggle('elem-1-color')
   })
}
if(clickableElem2) {
   clickableElem2.addEventListener('click', function(e) {
      clickableElem2.classList.toggle('elem-2-color')
   })
}

function addImage() {
   const img = document.getElementById('city-image');
   img.style.display = 'block';
 }
 
 function enlargeImage() {
   const img = document.getElementById('city-image');
   const currentWidth = img.clientWidth;
   const currentHeight = img.clientHeight;
   img.style.width = (currentWidth * 1.1) + 'px'; // Increase width by 10%
   img.style.height = (currentHeight * 1.1) + 'px'; // Increase height by 10%
 }
 
 function reduceImage() {
   const img = document.getElementById('city-image');
   const currentWidth = img.clientWidth;
   const currentHeight = img.clientHeight;
   img.style.width = (currentWidth * 0.9) + 'px'; // Reduce width by 10%
   img.style.height = (currentHeight * 0.9) + 'px'; // Reduce height by 10%
 }
 
 function removeImage() {
   const img = document.getElementById('city-image');
   img.style.display = 'none';
 }

document.querySelector('.add').addEventListener('click', addImage);
document.querySelector('.enlarge').addEventListener('click', enlargeImage);
document.querySelector('.reduce').addEventListener('click', reduceImage);
document.querySelector('.remove').addEventListener('click', removeImage);
