//to handle check and display of menu contents
let hiddenContent = document.querySelector('.menus ');
function changeState() {
    if(hiddenContent.style.visibility === 'hidden'){
        hiddenContent.style.visibility = 'visible';
    }else{
        hiddenContent.style.visibility = 'hidden';
    }
    
  }
//   changeState();