    var scroll = new SmoothScroll('a[href*="#"]');
    $(window).resize(function () {
        if ($(window).width() > 770) {
            $("#mobile-input").css("display", "none");
        } else {
            $("#mobile-input").css("display", "block");
        }

    }).resize();



    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    var x = 0;
    var y = 0;
    var z = 0;
    var t = 0;
    var oneInterval;
    var twoInterval;
    var threeInterval;
    var fourInterval;

    oneInterval = setInterval(function () {
        $('.oneInterval').text(
            x += 1)
        if (x == 10) {
            clearInterval(oneInterval)
            $('.oneInterval').text("10+")
        }
    }, 10)
    twoInterval = setInterval(function () {
        $('.twoInterval').text(
            y += 1)
        if (y == 20) {
            clearInterval(twoInterval)
            $('.twoInterval').text("20+")
        }
    }, 10)
    threeInterval = setInterval(function () {
        $('.threeInterval').text(
            z += 3)
        if (z == 150) {
            clearInterval(threeInterval)
            $('.threeInterval').text("150+")
        }
    }, 10)
    fourInterval = setInterval(function () {
        $('.fourInterval').text(t += 5)
        if (t == 500) {
            clearInterval(fourInterval)
            $('.fourInterval').text("500+")
        }

    }, 10)


    $("#carouselExample").on("slide.bs.carousel", function (e) {
        var $e = $(e.relatedTarget);
        var idx = $e.index();
        var itemsPerSlide = 3;
        var totalItems = $(".carousel-item").length;

        if (idx >= totalItems - (itemsPerSlide - 1)) {
            var it = itemsPerSlide - (totalItems - idx);
            for (var i = 0; i < it; i++) {
                // append slides to end
                if (e.direction == "left") {
                    $(".carousel-item")
                        .eq(i)
                        .appendTo(".carousel-inner");
                } else {
                    $(".carousel-item")
                        .eq(0)
                        .appendTo(".carousel-inner");
                }
            }
        }
    });

    $("#searchB").click(function () {
        $(".mobile-search").slideToggle(2000);
    });
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    });
