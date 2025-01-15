document.getElementById('hamburger').addEventListener( 'click', (e) => {
   //console.log("Hamburger clicked");
    const mainNavigation = document.getElementById('mainNavigation');
    mainNavigation.classList.toggle('hidden');
    mainNavigation.classList.toggle('flexDown');
});
