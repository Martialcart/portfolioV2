document.getElementById('hamburgerContainer').addEventListener( 'click', (e) => {
   //console.log("Hamburger clicked");
    const mainNavigation = document.getElementById('mainNavigation');

    //flex makes menu visible, so need to be turned of while hidden 
    mainNavigation.classList.toggle('hamburgerMenuShow');
    mainNavigation.classList.toggle('burgerMenuHide');
});
