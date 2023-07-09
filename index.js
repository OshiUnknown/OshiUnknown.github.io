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
    ];

    // Populate the gallery with images
    images.forEach(function(image) {
        const img = document.createElement("img");
        img.src = image;
        img.addEventListener("click", function() {
            showImage(image);
        });
        gallery.appendChild(img);
    });

    function showImage(image) {
        zoomedImage.src = image;
        overlay.classList.add("show");
    }

    overlay.addEventListener("click", function() {
        overlay.classList.remove("show");
    });
});
