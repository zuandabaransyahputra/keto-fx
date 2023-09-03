jQuery(document).ready(function ($) {
  $(".step_1 .btn_one").click(function (e) {
    e.preventDefault();
    if (!$("input[name='gender']:checked").val()) {
      $("#gender").addClass("error");
      return false;
    } else if (!$("input[name='age']:checked").val()) {
      $("#age").addClass("error");
      return false;
    } else {
      $("#age").removeClass("error");
      $("#gender").removeClass("error");
      $(".step_1").hide();
      $(".step_2").show();
      $(".step_ind .step2").addClass("active");
    }
  });

  $(".step_2 .btn_one").click(function (e) {
    e.preventDefault();
    var lastprice = parseFloat(document.getElementById("weight").value);
    var harga = parseFloat(document.getElementById("target_weight").value);
    if (harga > lastprice) {
      $("#calc_target label.error")
        .text("You must enter target weight is less than current weight.")
        .show();
      return false;
    }

    if (!$("input[name='weight']").val()) {
      $("#calc_weight label.error").text("Please enter your weight.").show();
      return false;
    } else if ($("input[name='weight']").val() < 5) {
      $("#calc_weight label.error")
        .text("You must weigh at least 5 st.")
        .show();
      return false;
    } else if (!$("input[name='target_weight']").val()) {
      $("#calc_target label.error")
        .text(
          "You must target weigh at least 5 st and less than current weight."
        )
        .show();
      $("#calc_weight label.error").hide();
      return false;
    } else if ($("input[name='target_weight']").val() < 5) {
      $("#calc_target label.error")
        .text(
          "You must target weigh at least 5 st and less than current weight."
        )
        .show();
      $("#calc_weight label.error").hide();
      return false;
    } else if (!$("input[name='height']").val()) {
      $("#calc_height label.error").text("Please enter your height.").show();
      $("#calc_target label.error").hide();
      return false;
    } else if ($("input[name='height']").val() < 4) {
      $("#calc_height label.error")
        .text("You must be at least 4 ft tall.")
        .show();
      $("#calc_target label.error").hide();
      return false;
    } else {
      $(".step_2").hide();
      $(".step_3").show();
      $(".step_ind .step3").addClass("active");
    }
  });

  // image slider
  $(".image_slider").slick({
    infinite: true,
    autoplay: false,
    dots: false,
    speed: 600,
    autoplaySpeed: 3000,
    prevArrow:
      '<div class="slick-prev" aria-label="Previous" type="button"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" transform="matrix(-1 0 0 1 50 0)" fill="#E84654"/><path d="M34.0908 24C34.6431 24 35.0908 24.4477 35.0908 25C35.0908 25.5523 34.6431 26 34.0908 26V24ZM15.2019 25.7071C14.8114 25.3166 14.8114 24.6834 15.2019 24.2929L21.5659 17.9289C21.9564 17.5384 22.5895 17.5384 22.9801 17.9289C23.3706 18.3195 23.3706 18.9526 22.9801 19.3431L17.3232 25L22.9801 30.6569C23.3706 31.0474 23.3706 31.6805 22.9801 32.0711C22.5895 32.4616 21.9564 32.4616 21.5659 32.0711L15.2019 25.7071ZM34.0908 26H15.909V24H34.0908V26Z" fill="white"/></svg></div>',
    nextArrow:
      '<div class="slick-next" aria-label="Next" type="button"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#E84654"/><path d="M15.9092 24C15.3569 24 14.9092 24.4477 14.9092 25C14.9092 25.5523 15.3569 26 15.9092 26V24ZM34.7981 25.7071C35.1886 25.3166 35.1886 24.6834 34.7981 24.2929L28.4341 17.9289C28.0436 17.5384 27.4105 17.5384 27.0199 17.9289C26.6294 18.3195 26.6294 18.9526 27.0199 19.3431L32.6768 25L27.0199 30.6569C26.6294 31.0474 26.6294 31.6805 27.0199 32.0711C27.4105 32.4616 28.0436 32.4616 28.4341 32.0711L34.7981 25.7071ZM15.9092 26H34.091V24H15.9092V26Z" fill="white"/></svg></div>',
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rows: 0,
  });

  // image slider
  $(".image_three_slider").slick({
    infinite: true,
    autoplay: true,
    dots: true,
    speed: 600,
    autoplaySpeed: 3000,
    prevArrow:
      '<div class="slick-prev" aria-label="Previous" type="button"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" transform="matrix(-1 0 0 1 50 0)" fill="#E84654"/><path d="M34.0908 24C34.6431 24 35.0908 24.4477 35.0908 25C35.0908 25.5523 34.6431 26 34.0908 26V24ZM15.2019 25.7071C14.8114 25.3166 14.8114 24.6834 15.2019 24.2929L21.5659 17.9289C21.9564 17.5384 22.5895 17.5384 22.9801 17.9289C23.3706 18.3195 23.3706 18.9526 22.9801 19.3431L17.3232 25L22.9801 30.6569C23.3706 31.0474 23.3706 31.6805 22.9801 32.0711C22.5895 32.4616 21.9564 32.4616 21.5659 32.0711L15.2019 25.7071ZM34.0908 26H15.909V24H34.0908V26Z" fill="white"/></svg></div>',
    nextArrow:
      '<div class="slick-next" aria-label="Next" type="button"><svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="25" cy="25" r="25" fill="#E84654"/><path d="M15.9092 24C15.3569 24 14.9092 24.4477 14.9092 25C14.9092 25.5523 15.3569 26 15.9092 26V24ZM34.7981 25.7071C35.1886 25.3166 35.1886 24.6834 34.7981 24.2929L28.4341 17.9289C28.0436 17.5384 27.4105 17.5384 27.0199 17.9289C26.6294 18.3195 26.6294 18.9526 27.0199 19.3431L32.6768 25L27.0199 30.6569C26.6294 31.0474 26.6294 31.6805 27.0199 32.0711C27.4105 32.4616 28.0436 32.4616 28.4341 32.0711L34.7981 25.7071ZM15.9092 26H34.091V24H15.9092V26Z" fill="white"/></svg></div>',
    arrows: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    rows: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
