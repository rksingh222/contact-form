const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", navToggle);

function navToggle(){
    navToggler.classList.toggle("active");
    const navigation = document.querySelector(".navigation");
    navigation.classList.toggle("open");
    if(navigation.classList.contains("open")){
        navigation.style.maxHeight = navigation.scrollHeight + "px";
    }
    else{
        navigation.removeAttribute("style");
    }

}
