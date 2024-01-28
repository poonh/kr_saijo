function openModal(imageSrc, description) {
    var modal = document.getElementById('myModal');
    var modalImage = document.getElementById('modalImage');
    var captionText = document.getElementById('caption');

    modal.style.display = 'block';
    modalImage.src = imageSrc;
    captionText.innerHTML = description;
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
