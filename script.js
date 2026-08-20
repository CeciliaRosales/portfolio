const button = document.getElementById('theme-toggle');
button.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    //document.documentElement.classList.toggle('dark-mode');
});

//theme-toggle.addEventListener('click', toggleDarkMode);