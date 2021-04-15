$(document).ready(() => {
  setTimeout(() => {
    $(".loader").fadeOut("slow");
    $(".page").delay("slow").fadeIn();
  }, 2000);
});

$(".main-menu li:first").addClass("active");

var showSection = function showSection(section, isAnimate) {
  var direction = section.replace(/#/, ""),
    reqSection = $(".section").filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top - 0;

  if (isAnimate) {
    $("body, html").animate(
      {
        scrollTop: reqSectionPos,
      },
      200
    );
  } else {
    $("body, html").scrollTop(reqSectionPos);
  }
};
var showSection = function showSection(section, isAnimate) {
  var direction = section.replace(/#/, ""),
    reqSection = $(".section").filter('[data-section="' + direction + '"]'),
    reqSectionPos = reqSection.offset().top - 0;

  if (isAnimate) {
    $("body, html").animate(
      {
        scrollTop: reqSectionPos,
      },
      200
    );
  } else {
    $("body, html").scrollTop(reqSectionPos);
  }
};

var checkSection = function checkSection() {
  $(".section").each(function () {
    var $this = $(this),
      topEdge = $this.offset().top - 80,
      bottomEdge = topEdge + $this.height(),
      wScroll = $(window).scrollTop();
    if (topEdge < wScroll && bottomEdge > wScroll) {
      var currentId = $this.data("section"),
        reqLink = $("a").filter("[href*=\\#" + currentId + "]");
      reqLink.closest("li").addClass("active").siblings().removeClass("active");
    }
  });
};

$(".main-menu").on("click", "a", function (e) {
  e.preventDefault();
  showSection($(this).attr("href"), true);
  if($( window ).width() < 846) close();  
});

$(window).scroll(function () {
  checkSection();
});

// Hamburger Menu Toggle
const open = () => {
  $(".menu").css("transform", "translateX(0)");
};

const close = () => {
  $(".menu").css("transform", "translateX(-900px)");
};

$(".open-menu").click(() => {
  open();
});

$(".close-menu").click(() => {
  close();
});
