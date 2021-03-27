$(document).ready(function() {
  //Scroll on click
  $('a[href*="#"]').on("click", function(e) {
    e.preventDefault();

    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top
      },
      1000,
      "linear"
    );
  });

  //MAKE SOME MAGIC ON SCROLL
  //   $(window).scroll(function() {
  //     const scroll = $(this).scrollTop();

  //     $(".showcase h1").css({
  //       transform: "translate(0, " + scroll / 3 + "%)"
  //     });
  //   });
});
