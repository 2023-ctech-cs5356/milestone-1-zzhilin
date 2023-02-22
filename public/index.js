// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";

// get carousel elements
const productImg = document.querySelector(".product-image img");
const productName = document.querySelector(".product-info h2");
const productDescription = document.querySelector(".product-info p");
const productPrice = document.querySelector(".product-info p:nth-of-type(2)");
const paymentLink = document.querySelector(".product-info a.payment-link");
const productFeatures = document.querySelector(".product-info ul");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

let products = [];
let currentIndex = 0;

// add to html
function updateProducts() {
  const product = products[currentIndex];
  productImg.src = product.imageUrl;
  productName.textContent = product.title;
  productDescription.textContent = product.description;
  if (productPrice) {
    productPrice.textContent = `Price: $${product.price}`;
  } else {
    console.error("Product price element not found");
  }
  productFeatures.innerHTML = "";
  for (let feature of product.highlighted_features) {
    const li = document.createElement("li");
    li.textContent = feature;
    productFeatures.appendChild(li);
  }
  if (paymentLink) {
    paymentLink.href = product.paymentLink;
  } else {
    console.error("Payment link element not found");
  }
}

// load
function loadProducts() {
  fetch("data/products.json")
    .then((response) => response.json())
    .then((data) => {
      products = data;
      updateProducts();
    })
    .catch((error) => console.error(error));
}

// buttons
prevBtn.addEventListener("click", () => {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = products.length - 1;
  }
  updateProducts();
});

nextBtn.addEventListener("click", () => {
  currentIndex++;
  if (currentIndex >= products.length) {
    currentIndex = 0;
  }
  updateProducts();
});

loadProducts();

// setup firebase

// // import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyBDL8NlNj6FCpmdE7qML_p53he9PHmMASw",
//   authDomain: "cs5356-milestone1-zl635.firebaseapp.com",
//   projectId: "cs5356-milestone1-zl635",
//   storageBucket: "cs5356-milestone1-zl635.appspot.com",
//   messagingSenderId: "726547206930",
//   appId: "1:726547206930:web:896b4ce9dbdd695e6d99cb",
//   measurementId: "G-X06YF8469M",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// // const analytics = getAnalytics(app);
