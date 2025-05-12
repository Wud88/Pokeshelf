$(document).ready(function () {
    var sheight = $(".shelf").height();
    var swidth = $(".shelf").width();
    var booknum = 11;
    var bwidth = swidth / booknum;
  
    function randombooks() {
      $(".shelf").html("");
  
      var i = 0;
      for (i = 0; i < booknum; i++) {
        var randombookcolor = bookcolors.randomDiffElement(randombookcolor);
  

        var randomheight =
          Math.floor(Math.random() * (sheight - (sheight - 50) + 1)) +
          (sheight - 50);
  
        var randomwidth =
          Math.floor(Math.random() * (bwidth - (bwidth - 20) + 1)) +
          (bwidth - 20);
  
        var randomwhirlybat = whirlybats.randomDiffElement(whirlybats);
  

        var randomword1 = smallwords1.randomDiffElement(smallwords1);
        var randomword2 = smallwords2.randomDiffElement(smallwords2);
  
        $(".shelf").append(
          "<div class='book' style='width:" +
            randomwidth +
            "px; height:" +
            randomheight +
            "px; background-color:" +
            randombookcolor +
            "'>" +
            "<div class='booktitle'>" +
            randomword1 +
            " " +
            randomword2 +
            "</div></div>"
        );
      }
  
      var randlight = lightcolors.randomDiffElement(lightcolors);
      var randdark = darkcolors.randomDiffElement(darkcolors);
  
      $(".book").each(function () {
        if ($(this).css("background-color") == "rgb(70, 77, 51)") {
          $(this).css("color", randlight);
        }
  
        if ($(this).css("background-color") == "rgb(20, 54, 104)") {
          $(this).css("color", randlight);
        }
  
        if ($(this).css("background-color") == "rgb(213, 53, 64)") {
          $(this).css("color", randlight);
        }
  
        if ($(this).css("background-color") == "rgb(255, 255, 255)") {
          $(this).css("color", randdark);
        }
  
        if ($(this).css("background-color") == "rgb(173, 108, 47)") {
          $(this).css("color", randlight);
        }
      });
  
//length 
  
      $(".booktitle").each(function () {
        var randomsize = randomrange(25, 30);
        var randomwidth = randomrange(50, 70);
  
        $(this).css("font-size", randomsize + "px");
  
        if ($(this).text().length > 13) {
          $(this).css(
            "font-variation-settings",
            "'wght' 60, 'wdth' 50, 'ital' 0"
          );
        }
  
        if ($(this).text().length == 12) {
          $(this).css(
            "font-variation-settings",
            "'wght' 70, 'wdth' 50, 'ital' 0"
          );
        }
  
        if ($(this).text().length == 11) {
          $(this).css(
            "font-variation-settings",
            "'wght' 80, 'wdth' 50, 'ital' 10"
          );
        }
  
        if ($(this).text().length == 10) {
          $(this).css(
            "font-variation-settings",
            "'wght' 60, 'wdth' 50, 'ital' 0"
          );
        }
  
        if ($(this).text().length == 9) {
          $(this).css(
            "font-variation-settings",
            "'wght' 90, 'wdth' 60, 'ital' 0"
          );
        }
  
        if ($(this).text().length == 8) {
          $(this).css(
            "font-variation-settings",
            "'wght' 100, 'wdth' 50, 'ital' 0"
          );
        }
  
        if ($(this).text().length == 7) {
          $(this).css(
            "font-variation-settings",
            "'wght' 50, 'wdth' 100, 'ital' 0"
          );
        }
  
        if ($(this).text().length == 6) {
          $(this).css(
            "font-variation-settings",
            "'wght' " + randomrange(50, 100) + ", 'wdth' 100, 'ital' 0"
          );
        }
  
        if ($(this).text().length == 5) {
          $(this).css(
            "font-variation-settings",
            "'wght' " + randomrange(60, 100) + ", 'wdth' 120, 'ital' 0"
          );
        }
  
        if ($(this).text().length == 4) {
          $(this).addClass("smalltitle");
        }
  
        var randomwhirlybat = whirlybats.randomDiffElement(whirlybats);
  
        if ($(this).text().length < 13) {
          $(this)
            .parent()
            .prepend(
              "<div style='" +
                "' class='whirlybatbook'>" +
                randomwhirlybat +
                "</div>"
            );
        }
      });
  
      $(".book:last-child").addClass("rotatedbook");
    }
  
    randombooks();
  
    $(".shelf").click(function () {
      randombooks();
  

      $(".book").addClass("hide");
  

      $(".book").each(function (i) {
        var row = $(this);
        setTimeout(function () {
          row.removeClass("hide");
        }, 70 * i);
      });
    });
  });


  