    const cardContainer = document.getElementById('cardContainer');


    const url = "/data/courses.json"
    export let courses = [];
    export let recommendedCourses = [];
    export let popularCourses =[];


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
        ctaTechDiv.classList.add('skeleton', 'skeleton-ctatech-div');

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
    if(cardContainer){
        cardContainer.innerHTML = "";
        for(let i = 0; i <= count; i++){
            // render skelton card
        const card = createCardSkeleton();
        cardContainer.appendChild(card);
        }
    }
    
    }

    loadSkeletonCards(3)

    export function createCard(cardData){
        // Card div
        const card = document.createElement('div');
        card.classList.add('card');
        card.setAttribute('data-id',cardData.id)
        card.setAttribute('data-category',cardData.category)
        card.setAttribute('data-populor', cardData.popular)
        card.setAttribute('data-recommended', cardData.recommended)
        // img div in card
        const imgDiv = document.createElement('div');
        imgDiv.classList.add('img-div');

        // img in imgDiv

        const courseImg = document.createElement('img');
        courseImg.src = cardData.thumbnail;

        imgDiv.appendChild(courseImg);
        card.appendChild(imgDiv);

        // textContent in card
        const textContent = document.createElement('div');
        textContent.classList.add('card-textcontent');

        card.appendChild(textContent);

        // headingDiv in text content
        const headingDiv = document.createElement('div');
        headingDiv.classList.add('cardheading-div');

        // heading in headingDiv
        const cardHeading = document.createElement('h3');
        cardHeading.classList.add('card-heading');
        cardHeading.textContent = cardData.title;


        headingDiv.appendChild(cardHeading);
        textContent.appendChild(headingDiv);

        // description div in textcontet
        const descriptionDiv = document.createElement('div');
        descriptionDiv.classList.add('description-div');

        textContent.appendChild(descriptionDiv);

        // description in description div
        const description = document.createElement('div');
        description.classList.add('description');

        // descriptionText in description
        const descriptionText = document.createElement('p');
        descriptionText.textContent = cardData.description;

        description.appendChild(descriptionText);
        descriptionDiv.appendChild(description);

        // instructorName in description div
        const instructorName = document.createElement('div');
        instructorName.classList.add('instructor-name');

        // instructureNameText in instructorName
        const instructureNameText = document.createElement('p');
        instructureNameText.textContent = cardData.instructor;

        
        instructorName.appendChild(instructureNameText);
        descriptionDiv.appendChild(instructorName);

        // ratingDiv in description div
        const ratingDiv = document.createElement('div');
        ratingDiv.classList.add('rating-div');

        descriptionDiv.appendChild(ratingDiv);

        // stars in  ratingDiv
        let stars = document.createElement('div');
        stars.classList.add('stars');

        cardData.stars.forEach( (star) =>{
            stars.innerHTML += star;
        })
        ratingDiv.appendChild(stars);
        // rating in  ratingDiv
        const rating = document.createElement('div');
        rating.classList.add('rating');

        // ratingText in rating
        const ratingText = document.createElement('p');
        ratingText.textContent = cardData.rating;

        rating.appendChild(ratingText)
        ratingDiv.appendChild(rating);

        // courseTimeDiv in description div
        const courseTimeDiv = document.createElement('div');
        courseTimeDiv.classList.add('course-timing-div');

        // timingText in courseTimeDiv
        const timingText = document.createElement('p');
        timingText.classList.add('timing');
        timingText.innerHTML = `<span>${cardData.duration.hours} hours</span> : <span>${cardData.duration.minutes} min</span>`

        courseTimeDiv.appendChild(timingText);
        descriptionDiv.appendChild(courseTimeDiv);

        // ctaTechDiv in description div
        const ctaTechDiv = document.createElement('div');
        ctaTechDiv.classList.add('cta-tech-div');

        descriptionDiv.appendChild(ctaTechDiv);
        // tech in ctaTechDiv
        const tech = document.createElement('div');
        tech.classList.add('tech-div');

        cardData.skills.forEach((skill) => {
            tech.innerHTML += skill;
        })

        ctaTechDiv.appendChild(tech);
        // cta in ctaTechDiv
        const cta = document.createElement('div');
        cta.classList.add('cta-div');

        // button in cta
        const button = document.createElement('button');
        button.classList.add('button', 'enroll-cta', 'primary-cta')
        button.textContent = cardData.cta[0]
        cta.appendChild(button);
        ctaTechDiv.appendChild(cta);
        return card;
    }



    export function loadCards(onDataReady){
        fetch(url)
    .then(response => {
        if(!response.ok){
            throw new Error("Failed to Fetch courses");
        }
        return response.json()
    })
    .then(data => {    
    if(cardContainer){
        cardContainer.innerHTML= "";
        courses = data.map( (cardData) =>{
            const card = createCard(cardData);
            cardContainer.appendChild(card);
            return {title: cardData.title, category: cardData.category, cardElement: card}
        } );
    }

    recommendedCourses = data.filter((cardData) => cardData.recommended);
    popularCourses= data.filter((cardData) => cardData.popular);


    // ✅ run callback after data is ready
      if (typeof onDataReady === 'function') {
        onDataReady();
      }

    })  
    .catch(error => {
        console.error('error', error);
    })
    };


    loadCards()




