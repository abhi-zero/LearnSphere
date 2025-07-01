import { gsap } from "gsap";

const url = '/data/testimonial_data.json';
const testimonialContainer = document.querySelector(".testimonials");

gsap.to(testimonialContainer,{
    
})
function createTestimonialSkeletons() {
  // testimonial div

  const testimonial = document.createElement("div");
  testimonial.classList.add("testimonial");

  // quoteSymbol in testimonial

  const quoteSymbol = document.createElement("div");
  quoteSymbol.classList.add("quote-symbol");
  quoteSymbol.setAttribute("id", "1");
  quoteSymbol.innerHTML = `<i class="ri-double-quotes-r"></i>`;

  testimonial.appendChild(quoteSymbol);

  // userMessage in testimonial
  const userMessage = document.createElement("div");
  userMessage.classList.add("skeleton", "skeleton-user-message");

  testimonial.appendChild(userMessage);

  // userImg in testimonial
  const userImg = document.createElement("div");
  userImg.classList.add("skeleton", "skeleton-user-img");

  testimonial.appendChild(userImg);

  // userName in testimonial
  const userName = document.createElement("div");
  userName.classList.add("skeleton", "skeleton-user-name");

  testimonial.appendChild(userName);

  // postTiming in testimonial
  const postTiming = document.createElement("div");
  postTiming.classList.add("skeleton", "skeleton-post-timing");

  testimonial.appendChild(postTiming);

  return testimonial;
}

function loadSkeletonTestimonials(count) {
  testimonialContainer.innerhtml = "";
  for (let i = 0; i < count; i++) {
    const testimonial = createTestimonialSkeletons();
    testimonialContainer.appendChild(testimonial);
  }
}

loadSkeletonTestimonials(3);

function createTestimonial(testData) {
  // testimonial div

  const testimonial = document.createElement("div");
  testimonial.classList.add("testimonial");

  // quoteSymbol in testimonial

  const quoteSymbol = document.createElement("div");
  quoteSymbol.classList.add("quote-symbol");
  quoteSymbol.setAttribute("id", testData.id);
  quoteSymbol.innerHTML = `<i class="ri-double-quotes-r"></i>`;

  testimonial.appendChild(quoteSymbol);

  // userMessage in testimonial
  const userMessage = document.createElement("div");
  userMessage.classList.add("user-message");
  // userMessageText in userMessage
  const userMessageText = document.createElement("p");
  userMessageText.classList.add("message");
  userMessageText.textContent = testData.message

  userMessage.appendChild(userMessageText);
  testimonial.appendChild(userMessage);

  // userImg in testimonial
  const userImg = document.createElement("div");
  userImg.classList.add("user-img");
 // img in userImg
  const img = document.createElement("img");
  img.src = testData.img;

  userImg.appendChild(img);
  testimonial.appendChild(userImg);

  // userName in testimonial
  const userName = document.createElement("div");
  userName.classList.add("user-name");
   // userNameText in userName
  const userNameText = document.createElement("p");
  userNameText.classList.add("name");
  userNameText.textContent = testData.name;

  userName.appendChild(userNameText);
  testimonial.appendChild(userName);

  // postTiming in testimonial
  const postTiming = document.createElement("div");
  postTiming.classList.add("post-timing");
 // postTimingText in userMessage
  const postTimingText = document.createElement("p");
  postTimingText.textContent = testData.date;

  postTiming.appendChild(postTimingText);
  testimonial.appendChild(postTiming);

  return testimonial;
}

function loadTestimonials(){
   

    fetch(url)
    .then((response) => {
        if(!response.ok){
            throw new Error('Faild to fetch Testimonials')
        }
        return response.json();
    })
    .then((data) => {
        testimonialContainer.innerHTML= "";
        data.forEach(testData =>{
            const testimonial = createTestimonial(testData);
            testimonialContainer.appendChild(testimonial);
        })
    })
    .catch((error)=>{
        console.error("Error :", error);
    })
}

loadTestimonials();
