
$(document).ready(function () {
    $('#openMenu').click(function (e) {
        e.preventDefault();
        $('#menuBurger').toggleClass('active');
        $('#block').toggleClass('hidden');
        $('#langueges').toggleClass('languegesHidden');
        $('#openMenu').toggleClass('active');
        $('#logo').toggleClass('active');
    });


});

$(document).ready(function () {
    $('#Services').click(function (e) {
        e.preventDefault();
        $('#ServicesMenu').toggleClass('active');
    })

});

document.onscroll = function () {
    var html = document.documentElement, body = document.body;
    var BlkStyle = document.getElementById('block').style; /*--тут или и бай КлассНаме, и икспас...---*/
    if (html.scrollTop > 50 || body.scrollTop > 50) {
        BlkStyle.backgroundColor = "#000000ff";
        BlkStyle.height = "50px";
    } else {
        BlkStyle.backgroundColor = "#00000000";
        BlkStyle.height = "0px";
    }

}

$('.owl-carousel-1').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('.owl-carousel-2').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
})
$('.owl-carousel-3').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        1000: {
            items: 3
        }
    }
})

$('.owl-carousel-4').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})
