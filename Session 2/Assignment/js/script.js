(function ($) {

    const UICtr = {
        navBar: $('.nav-bar'),
        navBarLogo: $('.nav-bar').find('img').attr('src'),
        scroller: $('.cursor'),
        about: $('.about'),
        scrollerTop: $('.scrollToTop'),
    };

    const main = {

        init: function () {
            this.prepare();
            this.introScroller();
            this.navigation();
            this.scrollerTop();
        },

        prepare: function () {
            $('html, body').animate({scrollTop: 0});
        },

        introScroller: function () {
            let sectionPosition = UICtr.about.offset().top - 100;
            UICtr.scroller.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: sectionPosition});
            });
        },

        navigation: function () {
            $(document).on('scroll', function () {
                let topPosition = $(this).scrollTop(),
                    navLogo     = UICtr.navBar.find('.logo').data('logo');

                if (topPosition > 200) {
                    UICtr.navBar.addClass('nav-white');
                    UICtr.navBar.find('img').attr('src', navLogo);
                } else {
                    UICtr.navBar.removeClass('nav-white');
                    UICtr.navBar.find('img').attr('src', UICtr.navBarLogo);
                }
            });

            $('.menu-item').on('click', 'a', function (e) {
                e.preventDefault();
                $('.menu-item.active').removeClass('active');
                $(this).closest('.menu-item').addClass('active');
            })
        },

        scrollerTop: function () {
            $(document).on('scroll', function () {
                let topPosition  = $(this).scrollTop(),
                    screenHeight = window.innerHeight,
                    aboutHeight  = UICtr.about.innerHeight() / 4;

                if (topPosition > (screenHeight + aboutHeight)) {
                    UICtr.scrollerTop.fadeIn();
                } else {
                    UICtr.scrollerTop.fadeOut();
                }
            });

            UICtr.scrollerTop.on('click', function (e) {
                e.preventDefault();
                $('html, body').animate({scrollTop: 0});
            });
        }

    };

    $(document).ready(function () {
        main.init();
    });

})(jQuery);
