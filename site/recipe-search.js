// Button toggle selection
document.querySelectorAll('.active-filters-clear, .filter-tag-btn, .allergen')
    .forEach(button => {
        button.addEventListener('click', () => {
            button.classList.toggle('selected');
        });
    });

//Box-toggle content visibility
document.querySelectorAll('.box-toggle1, .box-toggle2').forEach(toggle => {
    toggle.addEventListener('click', () => {
        const content = toggle.nextElementSibling;
        if (content) content.classList.toggle('hidden');
    });
});