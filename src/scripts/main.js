import Lenis from 'lenis'
import { gsap } from "gsap";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { faPause } from '@fortawesome/free-solid-svg-icons';

gsap.registerPlugin(ScrollTrigger);

// Initialize a new Lenis instance for smooth scrolling
const lenis = new Lenis();

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on('scroll', ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
  lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);

function navMobile(){
  const menuBtn = document.querySelector('.menu-btn');
  const closeBtn = document.querySelector('.close-btn');
  const mobileMenu = document.querySelector('.menu ul');
  const tl = gsap.timeline();
   tl.to(mobileMenu,{
       right: "-3%",
    })
    tl.pause()
  menuBtn.addEventListener('click', ()=>{
    tl.play();
  })
  closeBtn.addEventListener('click', ()=>{
    tl.reverse();
  })

}

navMobile();




function accordion(){
  console.log("accordion");
  
  const accordions = document.querySelectorAll('.accordion');
  const accordDetails = document.querySelectorAll('.accord-detail');
  const accordSymbol = document.querySelectorAll('.accord-arrow')
  console.log(accordDetails);
  accordions.forEach((accordion,index) => {
    accordion.addEventListener('click', (e) => {
      const accord = e.currentTarget;
      const content = accordDetails[index];
      const symbol = accordSymbol[index];
      // console.log(accord);
      
      const isClose = accord.dataset.stage === "close";
      console.log(isClose);
      

      if(isClose){
       
        gsap.to(content, {
          height: "calc(100% + 20px)",
          paddingBottom: 20,
          paddingTop:20,
          ease: "power2.out",
          opacity:1,
          onComplete: () => {
            accord.dataset.stage = "open";
          }
        });
        gsap.to(symbol,{
          rotateZ : "180deg"
        })
      }else{
        gsap.to(content, {
          height: "0",
          paddingTop:0,
          paddingBottom: 0,
          ease: "power2.out",
          onComplete: () => {
            accord.dataset.stage = "close";
          }
          
        });
         gsap.to(symbol,{
          rotateZ : "0"
        })
      }
    });
  });
}

accordion()


function heroSectionAnimation(){
    const heroText = document.querySelector('.hero-heading');
    const heroSubText = document.querySelector('.hero-subtext');
    const tl = gsap.timeline()

    tl.from(heroSubText, {
      y: 20,
      opacity: 0,
      ease: "power2.in"
    })
    .from(heroText, {
      y: 30,
      opacity: 0,
      ease: "power2.in"
    })
}
heroSectionAnimation();