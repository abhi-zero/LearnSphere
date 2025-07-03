import { loadCards, courses,recommendedCourses,createCard, popularCourses } from "./courses-logic";

//  logic for course page

const searchBar = document.getElementById("searchBar");
const ul = document.querySelector(".suggestions ul");
const clearBtn = document.querySelector('button[type="clear"]');
const recommendedCourseContainer = document.querySelector('#recommendedCardContainer')
const popularCourseContainer = document.querySelector('#popularCardContainer')
let value;

// Attach clear button event listener only once
clearBtn.addEventListener("click", () => {
  searchBar.value = "";
  courses.forEach((course)=>{
    course.cardElement.classList.remove('hide');
  })
});

searchBar.addEventListener("input", (e) => {
  // console.log(courses); // Remove or comment out in production
  ul.innerHTML = "";
  value = e.target.value.toLowerCase();
  if (value.trim() === "") {
    ul.innerHTML = "";
    return;
  }
  courses.forEach((course) => {
    const isVisible = course.title.toLowerCase().includes(value);
    if (isVisible) {
      const li = document.createElement("li");
      li.innerHTML = `${course.title}`;
      li.addEventListener("click", () => {
        // console.log("work"); // Remove or comment out in production
        searchBar.value = li.innerText;
  // Manually trigger input event to update suggestions and filtering
  searchBar.dispatchEvent(new Event("input", { bubbles: true }));
});
      ul.appendChild(li);
    }
    if (course.cardElement) {
      course.cardElement.classList.toggle("hide", !isVisible);
    }
  });
});


loadCards(() => {
  if (recommendedCourses.length === 0) {
  recommendedCourseContainer.textContent = "No recommended courses available.";
} else {
  recommendedCourses.forEach((course) => {
    const card = createCard(course);
    recommendedCourseContainer.appendChild(card);
  });
}
})
loadCards(() => {
  if (popularCourses.length === 0) {
  popularCourseContainer.textContent = "No recommended courses available.";
} else {
  popularCourses.forEach((course) => {
    const card = createCard(course);
    popularCourseContainer.appendChild(card);
  });
}
})

