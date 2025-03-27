"User strict"


// for 1st heading 
const heading_3 = document.querySelector('.h-3'); // New variable for .h-3 class
const text_3 = heading_3.textContent; // Correct property
heading_3.textContent = ''; // Clear the original text

// Split text into letters and wrap each in a span
text_3.split('').forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char; // Correct property
    span.className = 'letter';
    span.style.transitionDelay = `${index * 0.1}s`; // Delay each letter
    heading_3.appendChild(span);
});

// Intersection Observer to trigger animation on scroll
const observer_3 = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add the 'active' class to trigger animation
                document.querySelectorAll('.letter').forEach(letter => {
                    letter.classList.add('active');
                });
                observer_3.unobserve(heading_3); // Stop observing after animation
            }
        });
    },
    { threshold: 0.5 } // Trigger when 50% of the element is visible
);

observer_3.observe(heading_3);



// drop down menu links of courses which we have 

const accordingItem = document.querySelectorAll('.according-item');

   accordingItem.forEach(item =>{
    const title = item.querySelector('.according-title');
    const content = item.querySelector('.according-content');

    title.addEventListener('click',()=>{
        for(var i = 0; i < accordingItem.length; i++){
            if (accordingItem[i] != item) {
                accordingItem[i].classList.remove('active');
            }else{
                item.classList.toggle('active');
            }
        }
       
    });
});

// serch button 


 

