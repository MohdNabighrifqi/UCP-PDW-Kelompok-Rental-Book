
function searchTable(inputId, tableId) {
var input, filter, table, tr, td, i, j, txtValue;
    input = document.getElementById(inputId);
    filter = input.value.toUpperCase();
    table = document.getElementById(tableId);
    tr = table.getElementsByTagName("tr");
    for (i = 1; i < tr.length; i++) {
        tr[i].style.display = "none";
        td = tr[i].getElementsByTagName("td");
        for (j = 0; j < td.length; j++) {
            if (td[j]) {
                txtValue = td[j].textContent || td[j].innerText;
                if (txtValue.toUpperCase().indexOf(filter) > -1) {
                    tr[i].style.display = "";
                    break;
                }
            }
        }
    }
}


        function showSection(sectionId) {
            // Hide all sections
            document.querySelectorAll('section').forEach(section => {
                section.style.display = 'none';
            });

            // Show the selected section
            document.getElementById(sectionId).style.display = 'block';
        }

        function searchTable(inputId, tableId) {
            let input, filter, table, tr, td, i, txtValue;
            input = document.getElementById(inputId);
            filter = input.value.toUpperCase();
            table = document.getElementById(tableId);
            tr = table.getElementsByTagName("tr");

            for (i = 0; i < tr.length; i++) {
                td = tr[i].getElementsByTagName("td")[0]; // Adjust index as per your requirement
                if (td) {
                    txtValue = td.textContent || td.innerText;
                    if (txtValue.toUpperCase().indexOf(filter) > -1) {
                        tr[i].style.display = "";
                    } else {
                        tr[i].style.display = "none";
                    }
                }
            }
        }


        // admin.js

// Function to add a new book
function addBook() {
    // Get input field values
    let title = document.getElementById('book-title').value;
    let author = document.getElementById('book-author').value;
    let genre = document.getElementById('book-genre').value;

    // Validate input (you can add more validation as needed)
    if (title.trim() === '' || author.trim() === '' || genre.trim() === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Generate a unique ID (you may adjust this based on your backend logic)
    let bookId = generateUniqueId();

    // Construct new table row with the entered data
    let newRow = `
        <tr>
            <td>${bookId}</td>
            <td>${title}</td>
            <td>${author}</td>
            <td>${genre}</td>
            <td>
                <button class="btn btn-primary btn-sm">Edit</button>
                <button class="btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
    `;

    // Append the new row to the books table
    let tableBody = document.querySelector('#books-table tbody');
    tableBody.innerHTML += newRow;

    // Clear input fields after adding
    document.getElementById('book-title').value = '';
    document.getElementById('book-author').value = '';
    document.getElementById('book-genre').value = '';

    alert('Book added successfully!');
}

// Function to generate a unique ID (dummy implementation)
function generateUniqueId() {
    // In a real application, this should generate a unique ID dynamically
    // For now, using a simple incrementing counter as an example
    let counter = document.getElementById('books-table').rows.length; // Get current row count
    return counter + 1;
}
