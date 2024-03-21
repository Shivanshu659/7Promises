let menu = document.querySelector('#menu-bar');
let head = document.querySelector('.head .navbar');

menu.onclick = () => {
    head.classList.toggle('active');
};

window.onscroll = () => {
    head.classList.remove('active');
    if (window.scrollY > 60) {
        document.querySelector('#menu-bar').classList.add('active');
    } else {
        document.querySelector('#menu-bar').classList.remove('active');
    }
    function searchFunction() {
        const vendorType = document.querySelector('select[name="vendorType"]').value;
        const city = document.querySelector('select[name="city"]').value;
    
        // Redirect the user to the search results page
        window.location.href = `/search?vendorType=${vendorType}&city=${city}`;
      }   
};