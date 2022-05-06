
const mouseTarget = document.getElementsByClassName('img');

const moveBox = document.getElementsByClassName('move-box');


/* mouseTarget[0].addEventListener('mouseenter', e => {
    moveBox[0].classList.add('visible');
}); 

mouseTarget[0].addEventListener('mouseleave', e => {
    moveBox[0].classList.remove('visible');
  });
 */
  https://javascript.info/mouse-drag-and-drop
  moveBox.onmousedown = function(event) {

    let shiftX = event.clientX - moveBox.getBoundingClientRect().left;
    let shiftY = event.clientY - moveBox.getBoundingClientRect().top;
  
    
  
    moveAt(event.pageX, event.pageY);
  
    // moves the moveBox at (pageX, pageY) coordinates
    // taking initial shifts into account
    function moveAt(pageX, pageY) {
      moveBox.style.left = pageX - shiftX + 'px';
      moveBox.style.top = pageY - shiftY + 'px';
    }
  
    function onMouseMove(event) {
      moveAt(event.pageX, event.pageY);
    }
  
    // move the moveBox on mousemove
    document.addEventListener('mousemove', onMouseMove);
  
    // drop the moveBox, remove unneeded handlers
    moveBox.onmouseup = function() {
      document.removeEventListener('mousemove', onMouseMove);
      moveBox.onmouseup = null;
    };
  
  };
  
  moveBox.ondragstart = function() {
    return false;
  };