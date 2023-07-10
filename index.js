document.addEventListener("DOMContentLoaded", function() {
  const gallery = document.querySelector(".gallery");
  const overlay = document.querySelector(".overlay");
  const zoomedImage = document.querySelector(".zoomed-image");
  let isZoomed = false; // Track if image is currently zoomed in

  // Define your image URLs here
  const images = [];
  const totalImages = 27; // The total number of images
  
  for (let i = 1; i <= totalImages; i++) {
    const imageUrl = `images/ours/${i}.jpg`;
    images.push(imageUrl);
  }

  // Define the alternative image URLs
  const alternativeImage = "images/ours/letter.jpg";
  const alternativeImage2 = "images/ours/letter2.jpg";

  // Populate the gallery with images
  images.forEach(function(image, index) {
    const img = document.createElement("img");
    img.src = image;
    if (index === 10 || index === 19) {
      img.classList.add("special-image");
    } else {
      img.classList.add("normies");
    }
    img.addEventListener("click", function() {
      if (isZoomed) {
        zoomOutImage();
      } else {
        if (index === 10) {
          showImage(alternativeImage);
        } else if (index === 19) {
          showImage(alternativeImage2);
        } else {
          showImage(image);
        }
        zoomInImage();
      }
    });
    gallery.appendChild(img);
  });

  // Calculate and set the height of each image in the grid
  function adjustImageHeight() {
    const galleryImages = gallery.querySelectorAll("img");
    let maxHeight = 300;

    galleryImages.forEach(function(img) {
      img.style.height = "auto"; // Reset height before calculating

      if (img.offsetHeight > maxHeight) {
        maxHeight = img.offsetHeight;
      }
    });

    galleryImages.forEach(function(img) {
      img.style.height = `${maxHeight}px`;
    });
  }

  // Call adjustImageHeight initially and on window resize
  adjustImageHeight();
  window.addEventListener("resize", adjustImageHeight);

  function showImage(image) {
    zoomedImage.src = image;
    overlay.classList.add("show");
  }

  function zoomInImage() {
    zoomedImage.classList.add("zoom-in");
    isZoomed = true;
  }

  function zoomOutImage() {
    zoomedImage.classList.remove("zoom-in");
    isZoomed = false;
  }

  overlay.addEventListener("click", function() {
    if (isZoomed) {
      zoomOutImage();
    }
    overlay.classList.remove("show");
  });
});
