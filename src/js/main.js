import ScrollReveal from "scrollreveal";

$('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  if (
    location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
    location.hostname == this.hostname
  ) {
    let target = $(this.hash);
    target = target.length ? target : $(`[name=${this.hash.slice(1)}]`);
    if (target.length) {
      $("html, body").animate(
        {
          scrollTop: target.offset().top - 54,
        },
        1000,
        "easeInOutExpo",
      );
      return false;
    }
  }
});

$(".js-scroll-trigger").click(() => {
  $(".navbar-collapse").collapse("hide");
});

$("body").scrollspy({
  target: "#mNav",
  offset: 57,
});

const navbarCollapse = function() {
  if ($("#mNav").offset().top > 100) {
    $("#mNav").addClass("navbar-shrink");
  } else {
    $("#mNav").removeClass("navbar-shrink");
  }
  if ($(window).scrollTop() > 100) {
    $("#mNav").removeClass("d-none");
  } else {
    $("#mNav").addClass("d-none");
  }
};

navbarCollapse();

$(window).scroll(navbarCollapse);

window.iconOrder = ScrollReveal();

iconOrder.reveal(".about-icon-reveal", {
  delay: 200,
  scale: 0,
});
iconOrder.reveal(".offer-icon-order-1", {
  delay: 200,
  scale: 0,
});
iconOrder.reveal(".offer-icon-order-2", {
  delay: 400,
  scale: 0,
});
iconOrder.reveal(".offer-icon-order-3", {
  delay: 600,
  scale: 0,
});
iconOrder.reveal(".offer-icon-order-4", {
  delay: 800,
  scale: 0,
});
iconOrder.reveal(".contact-icon-order-1", {
  delay: 200,
  scale: 0,
});
iconOrder.reveal(".contact-icon-order-2", {
  delay: 400,
  scale: 0,
});

$(".popup-gallery").magnificPopup({
  delegate: "a",
  type: "image",
  tLoading: "Loading image #%curr%...",
  mainClass: "mfp-img-mobile",
  gallery: {
    enabled: true,
    navigateByImgClick: true,
    preload: [0, 1],
  },
  image: {
    tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
  },
});
