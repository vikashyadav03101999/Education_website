// Change NAVBAR
window.addEventListener('scroll',() =>{
document.querySelector('nav').classList.toggle
('window-scroll',window.scrollY > 0);
})

// toggle faq

const faqs=document.querySelectorAll(".faq");

faqs.forEach(faq => {
    faq.addEventListener('click' ,()=>{
        faq.classList.toggle('open');

        // change icon

        const icon=faq.querySelector(".faq_icon i");
        if(icon.className === 'fa-solid fa-plus'){
            icon.className = "fa-solid fa-minus";
        }
        else{
            icon.className = "fa-solid fa-plus";
        }
    })
})

// navmenu

const menu=document.querySelector(".nav_menu");
const openBtn=document.querySelector("#open-menu-btn");
const closeBtn=document.querySelector("#close-menu-btn");

openBtn.addEventListener('click',()=>{
    menu.style.display='flex';
    closeBtn.style.display="inline-block";
    openBtn.style.display="none";
})

const closeNav=()=>{
    menu.style.display='none';
    closeBtn.style.display="none";
    openBtn.style.display="inline-block";
}

closeBtn.addEventListener('click',closeNav);
