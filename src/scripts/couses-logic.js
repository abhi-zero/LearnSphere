const cardContainer = document.getElementById('cardContainer');


const url = "/data/courses.json"

fetch(url)
.then(response => {
    if(!response.ok){
        throw new Error("Failed to Fetch courses");
    }
    return response.json()
})
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error('error', error);
    
})

function createCardSkeleton(){
    console.log("work");
    
    // Card div
    const card = document.createElement('div');
    card.classList.add('card','skeleton-card');

    cardContainer.appendChild(card);
    // img div in card
    const imgDiv = document.createElement('div');
    imgDiv.classList.add('skeleton','skeleton-img')

    card.appendChild(imgDiv);

    // textContent in card
    const textContent = document.createElement('div');
    textContent.classList.add('skeleton-textcontent');

    card.appendChild(textContent);

    // heading in text content
    const headingDiv = document.createElement('div');
    headingDiv.classList.add('skeleton', 'skeleton-heading');

    textContent.appendChild(headingDiv);

    // description div in textcontet
    const descriptionDiv = document.createElement('div');
    descriptionDiv.classList.add('skeleton', 'skeleton-description-div');

    textContent.appendChild(descriptionDiv);

    // description in description div
    const description = document.createElement('div');
    description.classList.add('skeleton', 'skeleton-description');

    descriptionDiv.appendChild(description);

    // instructorName in description div
    const instructorName = document.createElement('div');
     instructorName.classList.add('skeleton', 'skeleton-instructor-name');

    descriptionDiv.appendChild(instructorName);

    // ratingDiv in description div
    const ratingDiv = document.createElement('div');
    ratingDiv.classList.add('skeleton', 'skeleton-rating-div');

    descriptionDiv.appendChild(ratingDiv);

    // stars in  ratingDiv
    const stars = document.createElement('div');
    stars.classList.add('skeleton', 'skeleton-stars');

    ratingDiv.appendChild(stars);
    // rating in  ratingDiv
    const rating = document.createElement('div');
    rating.classList.add('skeleton', 'skeleton-rating');

    ratingDiv.appendChild(rating);

     // courseTimeDiv in description div
    const courseTimeDiv = document.createElement('div');
    courseTimeDiv.classList.add('skeleton', 'skeleton-course-timing-div');

    descriptionDiv.appendChild(courseTimeDiv);

     // ctaTechDiv in description div
    const ctaTechDiv = document.createElement('div');
    ctaTechDiv.classList.add('skeleton', 'skeleton-rating-div');

    descriptionDiv.appendChild(ctaTechDiv);
     // tech in ctaTechDiv
    const tech = document.createElement('div');
    tech.classList.add('skeleton-tech');

    ctaTechDiv.appendChild(tech);
     // cta in ctaTechDiv
    const cta = document.createElement('div');
    cta.classList.add('skeleton-cta');

    ctaTechDiv.appendChild(cta);
    return card;

}

function loadSkeletonCards(count){
    // clear html before rendring skeleton card
    cardContainer.innerHTML = "";
    for(let i = 0; i <= count; i++){
        // render skelton card
        createCardSkeleton();
    }
}

// loadSkeletonCards(3)

function createCard(){
    

}