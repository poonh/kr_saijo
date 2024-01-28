function showImage(largeImagePath, imageTitle) {
    // Get the modal and modal image elements
    var modal = document.getElementById('modal');
    var modalImg = document.getElementById('modalImage');

    // Set the image source and alt text
    modalImg.src = largeImagePath;
    modalImg.alt = imageTitle;

    // Display the modal
    modal.style.display = 'block';
}

function closeModal() {
    // Hide the modal
    document.getElementById('modal').style.display = 'none';
}
