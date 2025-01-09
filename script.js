const mobileMenu = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    
    mobileMenu.classList.toggle('is-active');
    navLinks.classList.toggle('is-active');
});

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("slide-box");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}

$(document).ready(function() {
  if (window.innerWidth > 768) {
      $(".owl-carousel").owlCarousel({
          loop: true,
          margin: 32,
          nav: true,
          responsive: {
              0: {
                  items: 1
              },
              600: {
                  items: 2
              },
              1000: {
                  items: 3
              }
          },
          navText: [
              "<span class='owl-prev'>&#8249;</span>",
              "<span class='owl-next'>&#8250;</span>"
          ]
      });
  }
});


const fileInput = document.getElementById('file-upload');
const fileNameDisplay = document.getElementById('file-name');

fileInput.addEventListener('change', function () {
  if (fileInput.files.length > 0) {
    fileNameDisplay.textContent = `File: ${fileInput.files[0].name}`;
  } else {
    fileNameDisplay.textContent = 'Tidak ada file yang dipilih';
  }
});


document.querySelectorAll('.faq').forEach(faq => {
    faq.querySelector('.faq-header').addEventListener('click', () => {
      faq.classList.toggle('open');
      const toggle = faq.querySelector('.toggle');
      toggle.textContent = faq.classList.contains('open') ? '-' : '+';
    });
  });


  gsap.registerPlugin(ScrollTrigger);

// Animasi untuk setiap elemen dengan class "scroll-item"
gsap.utils.toArray(".scroll-item").forEach((item) => {
  gsap.fromTo(
    item,
    { opacity: 0, y: 50 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: item,
        start: "top 80%", // Mulai saat elemen 80% terlihat di viewport
        end: "top 30%",  // Selesai saat elemen 30% terlihat di viewport
        toggleActions: "play none none none",
      },
    }
  );
});


document.addEventListener("DOMContentLoaded", () => {
  let valueDisplays = document.querySelectorAll(".num");
  let interval = 1000;

  valueDisplays.forEach(valueDisplay => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    if (isNaN(endValue)) {
      console.error("data-val harus berupa angka");
      return;
    }

    let duration = Math.max(Math.floor(interval / endValue), 1); // Hindari durasi 0
    let counter = setInterval(() => {
      startValue += 1;
      valueDisplay.textContent = startValue;
      if (startValue === endValue) {
        clearInterval(counter);
      }
    }, duration);
  });
});

function openNewPage1() {
  window.open("booking.html", "_blank");
}

function openNewPage() {
  window.open("camp.html", "_blank");
}



