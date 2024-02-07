//to handle check and display of menu contents
let hiddenContent = document.querySelector('.menus ');
let clickers = document.querySelector('#menu-hold img');
function changeState() {
    if(hiddenContent.style.visibility === 'hidden'){
        hiddenContent.style.visibility = 'visible';
        clickers.style.position = "fixed";
        clickers.style.top = "20px";
    }else{
        hiddenContent.style.visibility = 'hidden';
        clickers.style.position = "absolute";
        clickers.style.top = "";

    }
    
  }
//   changeState();