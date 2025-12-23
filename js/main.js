$("nav ul a").click(function(){
    let id = $(this).attr("href");
    let spaceToTop = $(id).offset().top;
    $("body , html").animate({scrollTop : spaceToTop} , 2000);
})

$(window).scroll(function(){
    let spaceFromAbout = $("#About").offset().top;
    if ($(window).scrollTop() >= spaceFromAbout) {
        $("nav").css("backgroundColor" , "#b0acad")
        $(".toTop").fadeIn(1000).css("display" , "flex")

    }
    else {
        $("nav").css("backgroundColor" , "#F8F9FA")
        $(".toTop").fadeOut(1000)
        
    }
})


$(".toTop").click(function(){
    $("html , body").animate({scrollTop : 0} , 3000)
})