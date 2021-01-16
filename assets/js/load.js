const loader = document.getElementById('js-loader');
window.addEventListener('load', () => {
  const ms = 400;
  loader.style.transition = 'opacity ' + ms + 'ms';
  
  const loaderOpacity = function(){
    loader.style.opacity = 0;
  }
  const loaderDisplay = function(){
    loader.style.display = 'none';
  }

  setTimeout(loaderOpacity, 1500);
  setTimeout(loaderDisplay, 1500 + ms);
});