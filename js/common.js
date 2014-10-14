 // var slides;

 // imagesLoaded($("#divADBox img"), function (instance, image) {
 //        slides = $('.banner').unslider({
 //            fluid: true,
 //            dots: true,
 //            delay: 3000,
 //        });


 //        $(".banner-btn-prev").click(function () {


 //            var i = 0;
 //            var result = 0;
 //            var $item= $(this).siblings('.dots').find(".dot")
 //           $item.each(function () {
 //                if ($(this).hasClass("active")) {
 //                    result = i;
 //                }
 //                i++;
 //            })
 //            //console.log(result);
 //            result = result - 1

 //            if (result < 0)
 //                result = $item.length - 1;
 //            $item.eq(result).click();
 //        })


 //        $(".banner-btn-next").click(function () {
 //            var i = 0;
 //            var result = 0;
 //             var $item= $(this).siblings('.dots').find(".dot")
 //            $item.each(function () {
 //                if ($(this).hasClass("active")) {
 //                    result = i;
 //                }
 //                i++;
 //            })
 //            //console.log(result);
 //            result = result + 1

 //            if (result > ($item.length - 1))
 //                result = 0;
 //            $item.eq(result).click();
 //        })
 //    })

$(function() {


$("#menu-icon,#blockbg").click(function(event) {
    /* Act on the event */
    $("#menu-small").slideToggle('fast');
    $("#blockbg").fadeToggle('fast');
});



  var owlbanner= $("#divADBox ul");
  owlbanner.owlCarousel({
      items : 1,
      autoPlay:3000,
       lazyLoad : true,
      pagination:true,
      navigation:false,
      singleItem:true
  });

    $("#divADBox .owl-custom-next").click(function(){
    owlbanner.trigger('owl.next');
  })
  $("#divADBox .owl-custom-prev").click(function(){
    owlbanner.trigger('owl.prev');
  })
})