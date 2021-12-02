
function scrollup() {
    $("html, body")
        .animate({ scrollTop: 0}, 1000);
}

$(document).ready(function() {

    $('.nav-list').click(function () {
        $(".nav-bar").toggleClass('toggled');
        $(".nav-items").toggleClass('toggled');
        $(".nav-logos").toggleClass('toggled');
    });


    $(document).ready(function(){
        $(".owl-carousel").owlCarousel({
            loop: true,
            items: 3,
            nav: true,
            responsive: {
                0: {
                    items: 1
                },
                500: {
                    items: 2
                },
                960: {
                    items: 3
                }
            }
        });
    });


    $('.moveup-button').click(function () {
        document.documentElement.scrollTo(
            {
                top: 0,
                duration: 3000,
                behavior: "smooth"
            }
        );
    });

    AOS.init();
});
