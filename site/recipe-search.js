// Button toggle selection
document.querySelectorAll('.active-filters-clear, .filter-tag-btn, .allergen')
    .forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('selected');

            const dropdownArrow = button.closest('.allergen-box')?.querySelector('.dropdown-arrow');
            if (dropdownArrow) {
                dropdownArrow.classList.add('hidden');
            }
        });
    });

//Box-toggle content visibility
document.querySelectorAll('.box-toggle1, .box-toggle2, .dropdown-arrow').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        if (content) content.classList.toggle('hidden');

        const dropdownArrow = toggle.querySelector('.dropdown-arrow');
        if (dropdownArrow) {
            dropdownArrow.classList.toggle('hidden');
        }
    });
});

//Search result

document.getElementById('search-input').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        const query = event.target.value.trim();
        if (query === "") return;

        // Visa sökresultat, dölj filtervyn
        document.getElementById('filter-options').hidden = true;
        document.getElementById('recipeResults').hidden = false;
    }
});