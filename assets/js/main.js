// Img Slider
$(document).ready(function () {
    $('.body__slider').slick({
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1000,
        arrows: false,
        dots: true,
        swipe: false,
    });
});

// Text Slider
$(document).ready(function () {
    $('.text__slider').slick({
        slidesToShow: 1,
        speed: 800,
        swipe: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="ti-arrow-left"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="ti-arrow-right"></i></button>`,
    });
});

// Login
function openTab(evt, formName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(formName).style.display = "block";
    evt.currentTarget.className += " active";
}

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAbS3gyky8BGjMW4kBWSaIwHJN-EoU_ItE",
  authDomain: "halloween-web-fc6d2.firebaseapp.com",
  projectId: "halloween-web-fc6d2",
  storageBucket: "halloween-web-fc6d2.appspot.com",
  messagingSenderId: "602386531768",
  appId: "1:602386531768:web:03a162782d1cdc1371fb4d",
  measurementId: "G-0V5M97WT2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);