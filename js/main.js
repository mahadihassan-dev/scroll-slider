


if (jQuery(window).width() > 990 && jQuery(".canopy-cadence").length > 0) {
    var lock_stat = "flow";
    jQuery(window).scroll(function () {
        var eTop = jQuery(".canopy-cadence").offset();
        var windowTop = jQuery(window).scrollTop();
        eTop = eTop.top + 500;
        if (windowTop < eTop && jQuery(".canopy-cadence .content1").length) {
            eTop = eTop;
            jQuery(".cadence-carousel").trigger("to.owl.carousel", [0, 500, !0]);
            jQuery(".canopy-cadence .canopy-contentbox").removeClass("active");
            jQuery(".canopy-cadence .content1").addClass("active");
        }
        if (windowTop > eTop && jQuery(".canopy-cadence .content2").length) {
            eTop = eTop + 600;
            jQuery(".cadence-carousel").trigger("to.owl.carousel", [1, 500, !0]);
            jQuery(".canopy-cadence .canopy-contentbox").removeClass("active");
            jQuery(".canopy-cadence .content2").addClass("active");
        }
        if (windowTop > eTop && jQuery(".canopy-cadence .content3").length) {
            eTop = eTop + 600;
            jQuery(".cadence-carousel").trigger("to.owl.carousel", [2, 500, !0]);
            jQuery(".canopy-cadence .canopy-contentbox").removeClass("active");
            jQuery(".canopy-cadence .content3").addClass("active");
        }
        if (windowTop > eTop && jQuery(".canopy-cadence .content4").length) {
            eTop = eTop + 600;
            jQuery(".cadence-carousel").trigger("to.owl.carousel", [3, 500, !0]);
            jQuery(".canopy-cadence .canopy-contentbox").removeClass("active");
            jQuery(".canopy-cadence .content4").addClass("active");
        }
        if (windowTop > eTop && jQuery(".canopy-cadence .content5").length) {
            eTop = eTop + 600;
            jQuery(".cadence-carousel").trigger("to.owl.carousel", [4, 500, !0]);
            jQuery(".canopy-cadence .canopy-contentbox").removeClass("active");
            jQuery(".canopy-cadence .content5").addClass("active");
        }
        if (windowTop > eTop && jQuery(".canopy-cadence .content6").length) {
            eTop = eTop + 600;
            jQuery(".cadence-carousel").trigger("to.owl.carousel", [5, 500, !0]);
            jQuery(".canopy-cadence .canopy-contentbox").removeClass("active");
            jQuery(".canopy-cadence .content6").addClass("active");
        }
    });
}