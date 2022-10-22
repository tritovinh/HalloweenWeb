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

// Login------------------------------------------------------------------------------------
document.querySelector("#changeTabLogin").onclick = () => { changeTab(event, 'login'); };
document.querySelector("#changeTabSignUp").onclick = () => { changeTab(event, 'signUp'); };
function changeTab(evt, formName) {
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
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.12.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8q5oMbAPiCzSUgLnv8NhC2TcKmh7kdOU",
  authDomain: "halloween-web-7b7a5.firebaseapp.com",
  projectId: "halloween-web-7b7a5",
  storageBucket: "halloween-web-7b7a5.appspot.com",
  messagingSenderId: "260679276121",
  appId: "1:260679276121:web:7a95ccb2e01f539b7bc348"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

document.querySelector("form#signUp").onsubmit = function (event) {
  event.preventDefault();
  const email = this.email.value.trim();
  const password = this.password.value.trim();
  const confirmPassword = this.confirmPassword.value.trim();
  if (password === confirmPassword) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        localStorage.setItem("user", email);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  }
  else {
    alert("Confirm password and password does not match")
  }
}

document.querySelector("form#login").onsubmit = (event) => {
  event.preventDefault();
  let email = this.emailLogin.value.trim();
  let password = this.password.value.trim();
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(email)
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
}


// -------------------------------------------------------------------------------------------

// Product
const product = [
  {
    "type": "chocolate",
    "section": "New",
    "price": "$5.00",
    "name": "Halloween kisses vampire milk chocolate",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dwb57f26a5/images/hi-res/hsy-318711-1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "New",
    "price": "$5.00",
    "name": "HERSHEY'S COOKIES 'N' CREME Halloween Fangs",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw2f589281/images/hi-res/hsy-479290_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "New",
    "price": "$5.00",
    "name": "REESE'S Peanut Butter Milk Chocolate Ghosts, Bats & Pumpkins Snack",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw22e4ff3c/images/hi-res/hsy-476152_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "New",
    "price": "$5.00",
    "name": "REESE'S FRANKEN-CUP Halloween Milk Chocolate Peanut Butter Cups",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dwe5b81d12/images/hi-res/hsy-939275_2.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "New",
    "price": "$5.00",
    "name": "KIT KAT® Crisp Wafers in Crème with Witch's Brew Foils",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw9e338ee2/images/hi-res/hsy-318704-1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "New",
    "price": "$5.00",
    "name": "REESE'S Halloween White Creme Peanut Butter Ghosts Snack",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw52e0f1e8/images/hi-res/hsy-476343_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "candy",
    "section": "normal",
    "price": "$16normal",
    "name": "Hershey and Mondelez Fruit Flavored Assortment Chewy and Hard Candy Bulk",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw99585a1d/images/hi-res/hsy-951802_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$24.99",
    "name": "HERSHEY'S Halloween Lovers Snack",
    "picture": "https://https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw0aca5fa2/images/hi-res/hsy-942657_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$5.00",
    "name": "REESE'S Peanut Butter Cups Snack",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw5dc547ff/images/hi-res/hsy-402113_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$7.49",
    "name": "REESE'S TAKE 5 Bar Snack",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw28b20957/images/hi-res/hsy-386260_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$7.49",
    "name": "KIT KAT Snack",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw8e563942/images/hi-res/hsy-087525_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$38.89",
    "name": "KISSES Milk Chocolates in Purple Foils",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dweae3ac19/images/hi-res/hsy-133284_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$38.89",
    "name": "KISSES Milk Chocolates in Dark Green Foils",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw1381ed65/images/hi-res/hsy-860346_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$50.19",
    "name": "Assorted Standard Size Variety 30-Pack",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw264b3d05/images/hi-res/hsy-206506_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$2.49",
    "name": "REESE'S Peanut Butter Cup",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw04e2e048/images/hi-res/hsy-004409_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$1.29",
    "name": "MR. GOODBAR Standard Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw173e6725/images/hi-res/hsy-002436_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "candy",
    "section": "normal",
    "price": "$1.61",
    "name": "YORK Peppermint Patties Standard Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw42e02a0a/images/hi-res/hsy-003303_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$1.99",
    "name": "HERSHEY'S WHATCHAMACALLIT",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw7b7abf1c/images/hi-res/hsy-002474_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$1.99",
    "name": "HERSHEY'S SPECIAL DARK Standard Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dwe289bc6a/images/hi-res/hsy-002450_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "chocolate",
    "section": "normal",
    "price": "$2.29",
    "name": "REESE'S FAST BREAK Standard Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dwf73739c7/images/hi-res/hsy-000524_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type": "candy",
    "section": "normal",
    "price": "$2.29",
    "name": "ALMOND JOY Standard Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw1705c61f/images/hi-res/hsy-003204_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$1.89",
    "name": "HERSHEY'S White Creme Almond Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw9cbfc3de/images/hi-res/hsy-241330_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$1.95",
    "name": "REESE'S Peanut Butter Cup White Creme",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw4c41c647/images/hi-res/hsy-000289_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$1.95",
    "name": "KIT KAT DUOS Mocha",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dwf02a7723/images/hi-res/hsy-318735_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$2.29",
    "name": "REESE'S STICKS Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw2b66a095/images/hi-res/hsy-001521_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"candy",
    "section":"normal",
    "price": "$2.29",
    "name": "SKOR Toffee Candy",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw17bd6e6d/images/hi-res/hsy-003709_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$1.95",
    "name": "KIT KAT Duos Dark Chocolate Mint",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw6c79f35d/images/hi-res/hsy-318285_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$1.95",
    "name": "REESE'S Big Peanut Butter Cup bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dwc7a3f80c/images/hi-res/hsy-001637_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"candy",
    "section":"normal",
    "price": "$1.95",
    "name": "TWIZZLERS NIBS Cherry Candy",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw1afc9d8b/images/hi-res/hsy-005130_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"candy",
    "section":"normal",
    "price": "$2.12",
    "name": "MOUNDS standard bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw800bf6f7/images/hi-res/hsy-000319_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$2.29",
    "name": "PAYDAY Chocalatey Peanut Caramel Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw06abca56/images/hi-res/hsy-858535-1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$1.61",
    "name": "HERSHEY'S COOKIES 'N' CREME Standard Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dwc0bad7c5/images/hi-res/hsy-002399_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$1.95",
    "name": "HERSHEY'S SPECIAL DARK with Almonds",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dwc6958978/images/hi-res/hsy-245130_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"candy",
    "section":"normal",
    "price": "$1.95",
    "name": "TWIZZLERS Strawberry Twists Standard Bar",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw168d231f/images/hi-res/hsy-005024_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"normal",
    "price": "$2.29",
    "name": "HERSHEY'S Milk Chocolate with Almonds",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw76457fa5/images/hi-res/hsy-002412_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"candy",
    "section":"normal",
    "price": "$8.49",
    "name": "HERSHEY'S HUGS Milk Chocolate and White Creme Candy",
    "picture": "https://s7d2.scene7.com/is/image/hersheysassets/0_34000_11032_2_701_11032_004_Item_Front?fmt=webp-alpha&hei=908&qlt=75"
  },
  {
    "type":"candy",
    "section":"normal",
    "price": "$8.49",
    "name": "HERSHEY'S KISSES Milk Chocolate with Almonds Candy",
    "picture": "https://s7d2.scene7.com/is/image/hersheysassets/0_34000_13453_3_701_13453_003_Item_Front?fmt=png-alpha&hei=908"
  },
  {
    "type":"chocolate",
    "section":"new",
    "price": "$6.99",
    "name": "Fall KIT KAT Pumpkin Pie Minatures",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw3f6a4a53/images/hi-res/hsy-306084_1.png?sw=400&sh=400&sm=fit"
  },
  {
    "type":"chocolate",
    "section":"new",
    "price": "$6.99",
    "name": "Fall KISSES Milk chocolate",
    "picture": "https://shop.hersheys.com/dw/image/v2/BCVS_PRD/on/demandware.static/-/Sites-master-us/default/dw8f16a5e3/images/hi-res/hsy-122752_1.png?sw=400&sh=400&sm=fit  "
  },
]