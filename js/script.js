const hamburger = document.getElementById("HAMBURGER");
const closeHamburger = document.getElementById('HAMBURGER-X')
const responsiveHeader = document.getElementById('responsive-header');
const body = document.body;

hamburger.addEventListener('click', ()=> {
    responsiveHeader.style.display = 'flex';
    body.style.overflow = 'hidden'
});

closeHamburger.addEventListener('click', ()=>{
    responsiveHeader.style.display = 'none';
    body.style.overflow = '';
});


const dropdown = document.getElementById('clothingDropdown');
const dropDownCO = document.querySelector('.dc-dropdown');

dropdown.addEventListener('click', (event) => {
    event.stopPropagation();
    dropDownCO.classList.toggle('show');
});
document.addEventListener('click', (event) => {
        dropDownCO.classList.remove('show');
});

// display clothing section
    document.addEventListener("DOMContentLoaded", function () {
        const clothingButton = document.querySelector(".clothing-html");
        const clothingSection = document.querySelector(".clothing-women");

        clothingButton.addEventListener("click", function () {
            clothingSection.style.display = "block";
        });
    });


// price section in jackets.html code
 const minRange = document.getElementById("minRange");
    const maxRange = document.getElementById("maxRange");
    const minValue = document.getElementById("minValue");
    const maxValue = document.getElementById("maxValue");
    const sliderTrack = document.getElementById("sliderTrack");

    const minGap = 100;

    function updateSlider() {
      let minVal = parseInt(minRange.value);
      let maxVal = parseInt(maxRange.value);

      if (maxVal - minVal < minGap) {
        if (event.target.id === "minRange") {
          minRange.value = maxVal - minGap;
        } else {
          maxRange.value = minVal + minGap;
        }
        minVal = parseInt(minRange.value);
        maxVal = parseInt(maxRange.value);
      }

      minValue.textContent = `${minVal} USD`;
      maxValue.textContent = `${maxVal} USD`;

      const percent1 = (minVal / 2000) * 100;
      const percent2 = (maxVal / 2000) * 100;

      sliderTrack.style.left = percent1 + "%";
      sliderTrack.style.width = (percent2 - percent1) + "%";
    }

    minRange.addEventListener("input", updateSlider);
    maxRange.addEventListener("input", updateSlider);

    window.onload = updateSlider; 


    // quantity buttons
      document.addEventListener("DOMContentLoaded", function () {
    const quantityWrapper = document.querySelector('.quantity-wrapper');
    const qtySpan = quantityWrapper.querySelector('.qty');
    const buttons = quantityWrapper.querySelectorAll('.qty-btn');

    let quantity = parseInt(qtySpan.textContent, 10);

    buttons.forEach(button => {
      button.addEventListener('click', function () {
        if (this.textContent === '+') {
          quantity += 1;
        } else if (this.textContent === '-') {
          if (quantity > 1) quantity -= 1;
        }
        qtySpan.textContent = quantity;
      });
    });
  });

  // show the shoppingBag
    document.addEventListener("DOMContentLoaded", function () {
    const bagToggle = document.getElementById("bagToggle");
    const shoppingBag = document.getElementById("shoppingBag");

    bagToggle.addEventListener("click", function () {
      shoppingBag.classList.toggle("show");
    });

    document.addEventListener("click", function (e) {
      if (!bagToggle.contains(e.target) && !shoppingBag.contains(e.target)) {
        shoppingBag.classList.remove("show");
      }
    });
  });

  // shopping bag quantity buttons
    document.addEventListener("DOMContentLoaded", function () {
    const controls = document.querySelectorAll('.controls');

    controls.forEach(control => {
      const qtySpan = control.querySelector('.qty');
      const minusBtn = control.querySelectorAll('.qty-btn')[0];
      const plusBtn = control.querySelectorAll('.qty-btn')[1];
      const deleteBtn = control.querySelector('.delete-btn');

      let quantity = parseInt(qtySpan.textContent, 10);

      minusBtn.addEventListener('click', () => {
        if (quantity > 1) {
          quantity--;
          qtySpan.textContent = quantity;
        }
      });

      plusBtn.addEventListener('click', () => {
        quantity++;
        qtySpan.textContent = quantity;
      });

      deleteBtn.addEventListener('click', () => {
        const productCard = control.closest('.product-card');
        if (productCard) {
          productCard.remove();
        }
      });
    });
  });

  // display the login and signup buton
    document.addEventListener("DOMContentLoaded", function () {
    const checkoutBtn = document.querySelector(".checkout");
    const modal = document.getElementById("checkoutModal");
    const closeBtn = document.querySelector(".close-modal");

    checkoutBtn.addEventListener("click", function () {
      modal.classList.add("show");
    });

    closeBtn.addEventListener("click", function () {
      modal.classList.remove("show");
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  });

  // signup button
    document.getElementById('signUp').addEventListener('click', function (e) {
    e.preventDefault();
    const signupSection = document.querySelector('.signup-section');
    if (signupSection) {
      signupSection.style.display = 'flex';
    }
  });

  document.querySelector('.signup-close').addEventListener('click', function () {
    const signupSection = document.querySelector('.signup-section');
    if (signupSection) {
      signupSection.style.display = 'none';
    }
  });

  document.querySelector('.signup-section').addEventListener('click', function (e) {
    if (e.target.classList.contains('signup-section')) {
      this.style.display = 'none';
    }
  });

  // filter button working function
const filterbtn = document.getElementById('filterbtn');
const filterSection = document.getElementById('filter');

filterbtn.addEventListener('click', () => {
  filterSection.style.display = 'flex';
});


// shopcontent button to see content in responsive
const shopcontent = document.getElementById('shopcontent');
const containershopping  = document.querySelector('.shopping-bag-container');

shopcontent.addEventListener('click', function (e) {
  e.stopPropagation();
  shoppingBag.classList.add("show");
  shoppingBag.style.top = '0';
  shoppingBag.style.position = 'fixed';
  containershopping.style.padding = '20px'
  shoppingBag.style.left = '0';
  shoppingBag.style.width = '100%';
  shoppingBag.style.backgroundColor = 'white';
});

// close the shopping bag section
document.addEventListener("DOMContentLoaded", function () {
  const closeShoppingBag = document.getElementById("closeShoppingBag");
  const shoppingBag = document.getElementById("shoppingBag");

  closeShoppingBag.addEventListener("click", function () {
    shoppingBag.classList.remove("show");
  });
});

//close the log section
document.addEventListener("DOMContentLoaded", function () {
  const closeLogged = document.getElementById("closeLogged");
  const loggedSection = document.querySelector('.checkout-modal');

  closeLogged.addEventListener("click", function () {
    loggedSection.classList.remove("show");
  });
});


