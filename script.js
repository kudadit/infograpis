// script.js
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.nav a');

    links.forEach(link => {
        link.addEventListener('click', function() {
            links.forEach(link => link.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set the active link based on the current URL hash
    const currentHash = window.location.hash;
    if (currentHash) {
        const activeLink = document.querySelector(`.nav a[href="${currentHash}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    } else {
        // Default to the home link if no hash is present
        document.getElementById('home-link').classList.add('active');
    }   
});

function search() {
    var query = document.getElementById('searchInput').value;
    if (query) {
        window.location.href = 'search-results.html?query=' + encodeURIComponent(query);
    } else {
        alert("Please enter a search term.");
    }
}

