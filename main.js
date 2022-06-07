
//Target all svgs to be animated
const svgTargets = document.querySelectorAll('.svg')

//Create intersection observer that will animate each SVG element with class 'svg' when scrolled into view. 
  
const animateSvg = (target)=>{
  const io = new IntersectionObserver((entries,observer)=>{
      entries.forEach(entry=>{
          if(entry.isIntersecting){
          const svg = entry.target;
          svg.style.visibility = 'visible'
          svg.classList.add('svg-animate')            
              observer.disconnect();              
          }
      })
  },{threshold:[0.7]});
  io.observe(target);
}
svgTargets.forEach(animateSvg);