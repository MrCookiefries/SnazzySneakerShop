$(document).ready(() => {
  // Nav Routes
  $("#home-link").on("click", () => {
    window.location.href = "/index.html";
  })
  $("#shop-link").on("click", () => {
    window.location.href = "/pages/shop.html";
  })
  // Nav Account
  $("#sign-in").on("click", () => {
    if ($("#register-form").is(":visible")) {
      $("#dark-overlay").removeClass("active");
      $("#register-form").hide();
    }
    $("#logon-form").fadeToggle(600);
    $("#dark-overlay").toggleClass("active");
  })
  $("#register").on("click", () => {
    if ($("#logon-form").is(":visible")) {
      $("#dark-overlay").removeClass("active");
      $("#logon-form").hide();
    }
    $("#register-form").fadeToggle(600);
    $("#dark-overlay").toggleClass("active");
  })
  // Button Routes
  $("#shop-btn").on("click", () => {
    window.location.href = "/pages/shop.html";
  })
})