// Navbar background on scroll

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.style.background = "rgba(226, 55, 68, 0.95)";
        header.style.backdropFilter = "blur(8px)";
        header.style.position = "fixed";
        header.style.transition = "0.4s";
    }
    else{
        header.style.background = "transparent";
    }

});


// Search bar animation

const searchInput = document.querySelector("input");

searchInput.addEventListener("focus", () => {
    searchInput.style.border = "2px solid #e23744";
});

searchInput.addEventListener("blur", () => {
    searchInput.style.border = "none";
});


// Dynamic typing effect

const text = "Discover the best food & drinks in Hanumangarh";
const paragraph = document.querySelector("main section p");

let index = 0;

paragraph.innerHTML = "";

function typeEffect(){

    if(index < text.length){
        paragraph.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }

}

window.onload = typeEffect;


// Food cards dynamically added

const secondSection = document.querySelectorAll("main section")[1];

secondSection.innerHTML = `
    <h2 style="text-align:center; margin-bottom:50px; color:#e23744; font-size:2.5rem;">
        Popular Collections
    </h2>

    <div class="food-container">

        <div class="food-card">
            <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1200&auto=format&fit=crop" alt="">
            <div class="food-content">
                <h3>Pizza</h3>
                <p>Cheesy and delicious pizzas with fresh toppings and crispy crust.</p>
            </div>
        </div>

        <div class="food-card">
            <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1200&auto=format&fit=crop" alt="">
            <div class="food-content">
                <h3>Burgers</h3>
                <p>Juicy burgers packed with fresh veggies, cheese and crispy patties.</p>
            </div>
        </div>

        <div class="food-card">
            <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop" alt="">
            <div class="food-content">
                <h3>Biryani</h3>
                <p>Authentic biryani cooked with aromatic spices and rich flavors.</p>
            </div>
        </div>

    </div>
`;


// Scroll reveal animation

const cards = document.querySelectorAll(".food-card");

window.addEventListener("scroll", () => {

    cards.forEach((card) => {

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < window.innerHeight - 100){
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
            card.style.transition = "0.6s ease";
        }

    });

});


// Initial hidden state

cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.transform = "translateY(40px)";
});