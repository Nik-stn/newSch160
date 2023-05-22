  const mapTitle = document.createElement('div'); mapTitle.className = 'sch-map-title';
  const schMap = document.querySelector('.sch-map');

   mapTitle.textContent = 'Для активации карты нажмите по ней';
   schMap.appendChild(mapTitle);

   schMap.onclick = function() {
       this.children[0].removeAttribute('style');
       mapTitle.parentElement.removeChild(mapTitle);
   }

   schMap.onmousemove = function(event) {
       mapTitle.style.display = 'block';
       if(event.offsetY > 10) mapTitle.style.top = event.offsetY + 20 + 'px';
       if(event.offsetX > 10) mapTitle.style.left = event.offsetX + 20 + 'px';
   }
   schMap.onmouseleave = function() {
       mapTitle.style.display = 'none';
   }