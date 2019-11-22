$(document).ready(() => {
  // Nav Routes
  $("#home-link").on("click", () => {
    window.location.href = "/index.html";
  });
  $("#shop-link").on("click", () => {
    window.location.href = "/pages/shop.html";
  });
  // Nav Account
  $("#sign-in").on("click", () => {
    if ($("#register-form").is(":visible")) {
      $("#dark-overlay").removeClass("active");
      $("#register-form").hide();
    }
    $("#logon-form").fadeToggle(600);
    $("#dark-overlay").toggleClass("active");
  });
  $("#register").on("click", () => {
    if ($("#logon-form").is(":visible")) {
      $("#dark-overlay").removeClass("active");
      $("#logon-form").hide();
    }
    $("#register-form").fadeToggle(600);
    $("#dark-overlay").toggleClass("active");
  });
  // Button Routes
  $("#shop-btn").on("click", () => {
    window.location.href = "/pages/shop.html";
  });
  // Dynamic Shop
  function addShopCard(name, link, cost, year) {
    $("#shoes").append(`<figure class="shoe-card">
    <div style="display: none;" class="item-name">
    <h2>${name}</h2>
    </div>
    <div><img src="${link}" alt="${name}">
    <span></span>
    </div>
    <div style="display: none;" class="description">
    <p><strong>Price: </strong>$${cost}</p>
    <p><strong>Year: </strong>${year}</p>
    </div>
    </figure>`);
  }
  for (let i = 0; i < itemNames.length; i++) {
    addShopCard(itemNames[i], itemLinks[i], itemCosts[i], itemYears[i]);
  }
  // Shop Clicks
  $("#shoes").on("click", ".shoe-card", event => {
    $(event.currentTarget).children("div.description").slideToggle();
    $(event.currentTarget).children("div.item-name").slideToggle();
  });
})
// Shop Information
let itemNames = ["ARC x New Balance 1300", "Nike Zoom Eric Koston 1", "Air Jordan Retro IV LS", "Supreme x Vans Half Cab", "Nom de Guerre x Nike Air 180 iD", "KAWS x BAPE Bape STA", "Nike Zoom Huarache 2K4", "VA x adidas ZX 9000 A to ZX", "Nike Free Run+ 2", "J. Crew x New Balance 1400", "UNDFTD x Visvim FBT", "adidas Skate Busenitz", "ALIFE x adidas Grand Slam", "IRAK x adidas Rmx EQT Support Runner", "Solebox x New Balance 1500", "Clae Ellington", "Common Projects Achilles", "Nike Zoom LeBron II", "Nike Air Max", "Missoni x Converse First String Auckland Racer", "Yo! MTV Raps x Puma", "Creative Recreation Cesario", "Jeremy Scott x adidas Originals JS Bear"];
let itemLinks = ["https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/ffvxuuivjc0uzeiiyezb.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/zmhngl45azapopx3akyz.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/pknrbyh3gjmaxtyo4rxd.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/ut8fpac260ka9d0bsgkt.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/bdcbjk0ahl9zccf5lbov.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/yoeisbhtc0ohbfpox7qw.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/h27dopznizjxvcaupmdt.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/xzsdaua9bouj98fv1yqx.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/zchot85keoqxhctgkrlk.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/chzktntxhvy517agd4nq.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/xshribohj4jzhypp5ppv.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/xpdlv9eokwh2engquroa.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/c4zczpkrlkxiuni4zcit.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/j6ljzwxqxvdgz7vv4xeg.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/qtdmwere8xhultj7exss.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/onyic2utvcftuxn0etyc.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/uvlbjvnt02magynjfcql.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/jbz7zrcggutvfk9wx5gy.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/ha8az3u8lxnca4svs0tj.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/st88c6mdwgvwoangxncr.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/y1ozifxli0phgliibia7.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/b4ssra83gvqpk7buvawr.jpg", "https://images.complex.com/complex/image/upload/c_limit,dpr_auto,q_90,w_720/fl_lossy,pg_1/kysrnnrevh3nmdmrcfia.jpg"];
let itemCosts = [180, 100, 80, 150, 130, 70, 200, 280, 170, 130, 90, 210, 200, 240, 90, 50, 300, 160, 240, 60, 110, 90, 180];
let itemYears = [2009, 2011, 2006, 2006, 2005, 2006, 2004, 2008, 2011, 2011, 2008, 2011, 2003, 2007, 2005, 2010, 2008, 2004, 2009, 2012, 2007, 2003, 2011];
