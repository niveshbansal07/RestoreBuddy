function includeHTML(filePath, placeholderId){
    fetch(filePath)
    .then(response => {
        if(!response.ok) throw new Error("Network error");
        return response.text();
    })
    .then(data => {
        document.getElementById(placeholderId).innerHTML = data;
        // After loading navbar, attach search functionality
        if(placeholderId === "navbar-placeholder"){
            const form = document.querySelector('.navbar-search');
            if(form){
                form.addEventListener('submit', function(e){
                    e.preventDefault();
                    const query = this.q.value.trim();
                    if(!query) return;
                    localStorage.setItem('searchQuery', query);
                    window.location.href = 'product.html';
                });
            }

            // Highlight active link
            const navLinks = document.querySelectorAll('.nav-links a');
            navLinks.forEach(link => {
                if(link.href === window.location.href){
                    link.classList.add('active');
                }
            });
        }
    })
    .catch(err => console.error("Error loading HTML:", err));
}

// Load navbar and footer
includeHTML('navbar.html', 'navbar-placeholder');
includeHTML('footer.html', 'footer-placeholder');
