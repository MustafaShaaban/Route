/** -----------------------------------------------------------------------------------
 *
 *   Package Name: Session 3 Assignment 3 - Main Script File
 *   Version: 1.0
 *   Author: Mustafa Shaaban
 *
 *   OBJECTS INDEX
 *   ===================
 *   01. UICtr
 *      The object which contain the most important elements to be loaded once
 *
 *   02. main
 *      The object which contain the front page functions
 *
 *      -- navigationBar
 *          The function responsible for handling the navigation-bar links (scroll to the specific section and add active class)
 *
 *      -- scrollBehavior
 *          The function responsible for handling the navigation-bar behavior on scrolling (add active class to the link when the user reaches that link area
 *          and hide the navigation-bar when scrolling down and display it when scroll to top)
 *
 *      -- filtersNav
 *          The function responsible to handle the filters link
 *
 *
 ----------------------------------------------------------------------------------*/

(function ($) {

    const UICtr = {
        navbar: {
            nav: $('.nav-bar'),
            menuItem: $('.menu-item'),
            links: {
                home: $('a[href="#home"]'),
                about: $('a[href="#about"]'),
                services: $('a[href="#services"]'),
                portfolio: $('a[href="#portfolio"]'),
                statistics: $('a[href="#statistics"]'),
                testimonial: $('a[href="#testimonial"]'),
                blog: $('a[href="#blog"]'),
                contact: $('a[href="#contact"]')
            }
        },
        about: $('#about'),
        services: $('#services'),
        portfolio: $('#portfolio'),
        statistics: $('#statistics'),
        testimonial: $('#testimonial'),
        blog: $('#blog'),
        contact: $('#contact')
    };

    const main = {

        init: function () {
            this.navigationBar();
            this.scrollBehavior();
            this.filtersNav();
        },

        navigationBar: () => {
            UICtr.navbar.menuItem.on('click', 'a', function (e) {
                e.preventDefault();
                $('.menu-item.active').removeClass('active');
                $(this).closest('.menu-item').addClass('active');
            });

            UICtr.navbar.menuItem.on('click', 'a', (e) => {
                let $this  = $(e.currentTarget),
                    target = $this.attr('href');
                if ($(target).length > 0) {
                    $('html, body').animate({
                        scrollTop: $(target).offset().top - 100
                    });
                }
            });

        },

        scrollBehavior: () => {
            let position     = $(window).scrollTop(),
                scrolledTop  = true,
                scrolledDown = true;

            let aboutTop          = UICtr.about.offset().top,
                aboutBottom       = UICtr.about.innerHeight() + aboutTop,
                servicesTop       = UICtr.services.offset().top,
                servicesBottom    = UICtr.services.innerHeight() + servicesTop,
                portfolioTop      = UICtr.portfolio.offset().top,
                portfolioBottom   = UICtr.portfolio.innerHeight() + portfolioTop,
                statisticsTop     = UICtr.statistics.offset().top,
                statisticsBottom  = UICtr.statistics.innerHeight() + statisticsTop,
                testimonialTop    = UICtr.testimonial.offset().top,
                testimonialBottom = UICtr.testimonial.innerHeight() + testimonialTop,
                blogTop           = UICtr.blog.offset().top,
                blogBottom        = UICtr.blog.innerHeight() + blogTop,
                contactTop        = UICtr.contact.offset().top,
                contactBottom     = UICtr.contact.innerHeight() + contactTop;


            $('html, body').animate({scrollTop: 0});

            $(window).on('scroll', () => {
                let scroll = $(window).scrollTop();

                if (scroll > position) {
                    if (scrolledDown) {
                        UICtr.navbar.nav.animate({
                            height: 0
                        }, function () {
                            UICtr.navbar.nav.removeClass('sticky');
                        });
                        scrolledTop = true;
                        scrolledDown = false;
                    }
                } else {
                    if (scroll <= 100) {
                        UICtr.navbar.nav.removeClass('sticky');
                    }
                    if (scrolledTop) {
                        UICtr.navbar.nav.addClass('sticky');
                        UICtr.navbar.nav.animate({
                            height: '50px'
                        });
                        scrolledTop = false;
                        scrolledDown = true;
                    }
                }

                position = scroll;

                if (scroll >= aboutTop && scroll <= aboutBottom) {
                    $('.menu-item.active').removeClass('active');
                    UICtr.navbar.links.about.closest('.menu-item').addClass('active');
                } else if (scroll >= servicesTop && scroll <= servicesBottom) {
                    $('.menu-item.active').removeClass('active');
                    UICtr.navbar.links.services.closest('.menu-item').addClass('active');
                } else if (scroll >= portfolioTop && scroll <= portfolioBottom) {
                    $('.menu-item.active').removeClass('active');
                    UICtr.navbar.links.portfolio.closest('.menu-item').addClass('active');
                } else if (scroll >= statisticsTop && scroll <= statisticsBottom) {
                    $('.menu-item.active').removeClass('active');
                    UICtr.navbar.links.statistics.closest('.menu-item').addClass('active');
                } else if (scroll >= testimonialTop && scroll <= testimonialBottom) {
                    $('.menu-item.active').removeClass('active');
                    UICtr.navbar.links.testimonial.closest('.menu-item').addClass('active');
                } else if (scroll >= blogTop && scroll <= blogBottom) {
                    $('.menu-item.active').removeClass('active');
                    UICtr.navbar.links.blog.closest('.menu-item').addClass('active');
                } else if (scroll >= contactTop && scroll <= contactBottom) {
                    $('.menu-item.active').removeClass('active');
                    UICtr.navbar.links.contact.closest('.menu-item').addClass('active');
                } else {
                    $('.menu-item.active').removeClass('active');
                    UICtr.navbar.links.home.closest('.menu-item').addClass('active');
                }
            });
        },

        filtersNav: () => {
            $('.filter-type').on('click', 'a', function (e) {
                e.preventDefault();
                $('.filter-type.active').removeClass('active');
                $(this).closest('.filter-type').addClass('active');
            });

        }
    };

    $(document).ready(function () {
        main.init();
    });

})(jQuery);
