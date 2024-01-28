function showImage(largeImagePath, imageTitle) {
    // Create a modal element
    var modal = document.createElement('div');
    modal.className = 'modal';

    // Create an image element inside the modal
    var modalImg = document.createElement('img');
    modalImg.src = largeImagePath;
    modalImg.alt = imageTitle;

    // Append the image to the modal
    modal.appendChild(modalImg);

    // Append the modal to the body
    document.body.appendChild(modal);

    // Close the modal when clicked outside the image
    modal.onclick = function () {
        document.body.removeChild(modal);
    };
}
