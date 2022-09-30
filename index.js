$(".pattern_a").hover(
  function () {
    $(this).addClass("pattern_a_hover");
  },
  function () {
    $(this).removeClass("pattern_a_hover");
  }
);

$(".pimg1").hide();
$(".pimg2").hide();
$(".pimg3").hide();
$(".pimg4").hide();
$(".pimg5").hide();
$(".pimg6").hide();
$(".pimg7").hide();


$("#pr1").hover(
  function () {
    $(".pimg1").show();
  },
  function () {
    $(".pimg1").hide();
  }
);


$("#pr2").hover(
  function () {
    $(".pimg2").show();
  },
  function () {
    $(".pimg2").hide();
  }
);


$("#pr3").hover(
  function () {
    $(".pimg3").show();
  },
  function () {
    $(".pimg3").hide();
  }
);


$("#pr4").hover(
  function () {
    $(".pimg4").show();
  },
  function () {
    $(".pimg4").hide();
  }
);


$("#pr5").hover(
  function () {
    $(".pimg5").show();
  },
  function () {
    $(".pimg5").hide();
  }
);


$("#pr6").hover(
  function () {
    $(".pimg6").show();
  },
  function () {
    $(".pimg6").hide();
  }
);


$("#pr7").hover(
  function () {
    $(".pimg7").show();
  },
  function () {
    $(".pimg7").hide();
  }
);
