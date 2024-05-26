$(document).ready(function(){
    /* Menu */
    $('#menuPrincipalTrigger').on('click', function() {
        $('body').toggleClass('menuMov-open');
    });

    $('#menuMov .inner ul li a').on('click', function() {
        $('body').removeClass('menuMov-open');
    });
});