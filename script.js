const burgerBtn = document.querySelector('.burger_btn');
const lMenu = document.querySelector('.login_menu');
const navLinks = document.querySelector('.navbar_ul');
const navLinksChildren = Array.from(navLinks.children);
const login = document.querySelector('#account');

const left_selector = document.querySelector('#left_selector');
const right_selector = document.querySelector('#right_selector');

const select_img = Array.from(document.querySelector(".hero_pods_select_img"));
const selections = Array.from(document.querySelector(".selections").children);

left_selector.addEventListener("click", leftSelect);
right_selector.addEventListener("click", rightSelect);

function leftSelect() {
    let i = 0;

    try {
        for (i ; i < selections.length; i++) {
            if (selections[i].classList.contains("selected_item") === true) return i;
        } 
    } finally {
        selections.forEach(box => box.classList.remove("selected_item"))
        if (i !== 0) selections[i-1].classList.add("selected_item");
        else {
            i = selections.length;
            selections[i-1].classList.add("selected_item");
        }
        
        const images = Array.from(document.querySelector('.hero_pods_select_img').children);

        let color = selections[i-1].getAttribute('data-color');
            images.forEach(img => {
            img.classList.remove("img_opacity");
        })

        if (color === "pink") document.querySelector('#pink_pods').classList.add('img_opacity');
        if (color === "blue") document.querySelector('#blue_pods').classList.add('img_opacity');
        if (color === "white") document.querySelector('#white_pods').classList.add('img_opacity');
    }  
}
function rightSelect() {
    let i = 0;

    try {
        for (i ; i < selections.length; i++) {
            if (selections[i].classList.contains("selected_item") === true) return i;
        } 
    } finally {
        selections.forEach(box => box.classList.remove("selected_item"))
        if (i !== selections.length - 1) selections[i+1].classList.add("selected_item");
        else {
            i = -1;
            selections[i+1].classList.add("selected_item");
        }

        const images = Array.from(document.querySelector('.hero_pods_select_img').children);
        let color = selections[i+1].getAttribute('data-color');

        images.forEach(img => {
            img.classList.remove("img_opacity");
        })

        if (color === "pink") document.querySelector('#pink_pods').classList.add('img_opacity');
        if (color === "blue") document.querySelector('#blue_pods').classList.add('img_opacity');
        if (color === "white") document.querySelector('#white_pods').classList.add('img_opacity');
    }  
}

selections.forEach(btn => btn.addEventListener("click", () => {
    selections.forEach(selection => selection.classList.remove("selected_item"));
    btn.classList.add("selected_item");

    const images = Array.from(document.querySelector('.hero_pods_select_img').children);

    let color = btn.getAttribute('data-color');
    images.forEach(img => {
        img.classList.remove("img_opacity");
    })
    if (color === "pink") document.querySelector('#pink_pods').classList.add('img_opacity');
    if (color === "blue") document.querySelector('#blue_pods').classList.add('img_opacity');
    if (color === "white") document.querySelector('#white_pods').classList.add('img_opacity');
}));

burgerBtn.addEventListener("click", () => {
    burgerBtn.classList.toggle('active');
    if (burgerBtn.classList.contains('active')) {
        navLinks.classList.add('nav_active');
        document.body.style.overflow = 'hidden';
    }    
    else {
        navLinks.classList.remove('nav_active');
        document.body.style.overflow = 'visible';
    };
});

let linkActive = () => {
    let link = this.querySelector('a');
    link.classList.add('link_active');
};

navLinksChildren.forEach(link => link.addEventListener("click", () => {
    navLinksChildren.forEach(tag => tag.classList.remove("link_active"));
    link.classList.add('link_active');
}));

const hoverText = Array.from(document.querySelectorAll(".hover_text"));
let text = Array.from(hoverText[0].innerText);
hoverText[0].innerText = "";
hoverText[1].innerText = "";
    for (let i = 0; i < text.length; i++) {
        let cover = document.createElement("span");
        cover.innerText = text[i];
        hoverText[0].appendChild(cover);
        let spanCopy = Array.from(document.querySelector(".hover_text").children);
        let mama = spanCopy[i].cloneNode(true);  
        hoverText[1].appendChild(mama);
}