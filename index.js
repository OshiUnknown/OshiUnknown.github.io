document.addEventListener("DOMContentLoaded", function() {
    const gallery = document.querySelector(".gallery");
    const overlay = document.querySelector(".overlay");
    const zoomedImage = document.querySelector(".zoomed-image");
  
    // Define your image URLs here
    const images = [
      "images/ours/1.jpg",
      "images/ours/2.jpg",
      "images/ours/3.jpg",
      "images/ours/4.jpg",
      "images/ours/5.jpg",
      "images/ours/6.jpg",
      "images/ours/7.jpg",
      "images/ours/8.jpg",
      "images/ours/9.jpg",
      "images/ours/10.jpg",
      "images/ours/11.jpg",
      "images/ours/12.jpg",
      "images/ours/13.jpg",
      "images/ours/14.jpg",
      "images/ours/15.jpg",
      "images/ours/16.jpg",
      "images/ours/17.jpg",
      "images/ours/18.jpg",
      "images/ours/19.jpg",
      "images/ours/20.jpg",
      "images/ours/21.jpg"
    ];
  
    // Define the alternative image URLs
    const alternativeImage = "images/ours/letter.jpg";
    const alternativeImage2 = "images/ours/letter2.jpg";
  
    // Populate the gallery with images
    images.forEach(function(image, index) {
      const img = document.createElement("img");
      img.src = image;
      if (index === 10 || index === 19) {
        img.classList.add("special-image");
      }else{
        img.classList.add("normies");
      }
      img.addEventListener("click", function() {
        if (index === 10) {
          showImage(alternativeImage);
        } else if (index === 19) {
          showImage(alternativeImage2);
        } else {
          showImage(image);
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
  
    overlay.addEventListener("click", function() {
      overlay.classList.remove("show");
    });
  });
  