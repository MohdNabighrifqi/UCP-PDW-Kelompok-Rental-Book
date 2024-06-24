document.addEventListener("DOMContentLoaded", function() {
    const rentButtons = document.querySelectorAll('.rent-btn');
    const rentModal = new bootstrap.Modal(document.getElementById('rentModal'));
    const bookTitleInput = document.getElementById('bookTitle');
    const bookAuthorInput = document.getElementById('bookAuthor');

    rentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const title = button.getAttribute('data-title');
            const author = button.getAttribute('data-author');

            bookTitleInput.value = title;
            bookAuthorInput.value = author;

            rentModal.show();
        });
    });

    const rentForm = document.getElementById('rentForm');
    rentForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const renterName = document.getElementById('renterName').value;
        const renterEmail = document.getElementById('renterEmail').value;
        const startDate = document.getElementById('startDate').value;
        const endDate = document.getElementById('endDate').value;

        // Simulate form submission
        alert(`Book rented successfully by ${renterName} (${renterEmail}) from ${startDate} to ${endDate}`);

        // Hide the modal after form submission
        rentModal.hide();
    });
});
