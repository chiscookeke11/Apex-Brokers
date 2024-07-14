window.addEventListener('load', function(){
	console.log('Page has finished loading.');
	document.getElementById('LoadingOverlay').style.display = 'none';
  document.getElementById('content').style.display = 'none';
	console.log('Hiding LoadingOverlay.');
	document.getElementById('content').style.display = 'block';
	console.log('Displaying content.');
});


const observer = new IntersectionObserver((entries) =>{
	entries.forEach((entry) =>{
		console.log(entry)
		if (entry.isIntersecting) {
			entry.target.classList.add('show');
		}
	})
})


const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".scroll-effect-element");

  const options = {
    threshold: 0.5, 
  };

  const callback = (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = "translateY(-10px)";
      } else {
        entry.target.style.opacity = 0;
        entry.target.style.transform = "translateY(100px)";
      }
    });
  };

  elements.forEach((element) => {
    const observer = new IntersectionObserver(callback, options);
    observer.observe(element);
  });
});


  jQuery(document).ready(function($) {
    "use strict";
    // TESTIMONIALS CAROUSEL HOOK
    $('#customers-testimonials').owlCarousel({
      loop: true,
      center: true,
      items: 3,
      margin: 0,
      autoplay: true,
      dots: true,
      autoplayTimeout: 8500,
      smartSpeed: 450,
      responsive: {
        0: {
          items: 1
        },
        768: {
          items: 2
        },
        1170: {
          items: 3
        }
      }
    });
  });
function lightUpSequentially() {
  const boxes = document.querySelectorAll('.box');

  function turnOffAllBoxes() {
    boxes.forEach(box => {
      box.style.backgroundColor = '#fff';
      box.style.boxShadow = 'none'; // Reset box shadow
    });
  }

  function lightUpBoxesSequentially() {
    let delay = 2000;

    for (let i = 0; i < boxes.length; i++) {
      setTimeout(() => {
        turnOffAllBoxes();
        boxes[i].style.boxShadow = '0 0 50px #ff6900'; // Apply box shadow
      }, delay * i);
    }
  }

  function runSequence() {
    lightUpBoxesSequentially();
    setTimeout(runSequence, boxes.length * 2000);
  }

  runSequence();
}

lightUpSequentially();


document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const rows = document.querySelectorAll('.table tbody tr');
  const nothingFound = document.getElementById("nothing-alert");
  const seeMore = document.getElementById("see-more"); // Assuming you have a "See More" element with the id "see-more"

  function filterTable(searchQuery) {
    let number = 0;

    rows.forEach(function(row) {
      const name = row.querySelector("th").textContent.toLowerCase();

      if (name.includes(searchQuery.toLowerCase())) {
        nothingFound.style.display = "none";
        row.style.display = "table-row";
        number++;
      } else {
        row.style.display = "none";
      }
    });

    if (number === 0) {
      nothingFound.style.display = "block";
      seeMore.style.display = "none"; // Hide "See More" when nothing is found
    } else {
      seeMore.style.display = "block"; // Show "See More" when something is found
    }
  }

  searchInput.addEventListener("input", function() {
    const searchQuery = searchInput.value.trim();
    filterTable(searchQuery);
  });
});






















