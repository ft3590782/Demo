$(document).ready(function() {
 
  $("#newsCarousel").owlCarousel({
      items : 3,
       lazyLoad : true,
      pagination:false,
      navigation:true
  });

  $("#exclubCarousel").owlCarousel({
      items : 2,
       lazyLoad : true,
      pagination:false,
      navigation:true
  });

  $("#techCarousel").owlCarousel({
      items : 3,
       lazyLoad : true,
      pagination:false,
      navigation:true
  });

  

  var owlcollbanner= $("#collectionsADBox ul");
  owlcollbanner.owlCarousel({
      items : 1,
      autoPlay:3000,
       lazyLoad : true,
      pagination:true,
      navigation:false,
      singleItem:true
  });

    $("#collectionsADBox .owl-custom-next").click(function(){
    owlcollbanner.trigger('owl.next');
  })
  $("#collectionsADBox .owl-custom-prev").click(function(){
    owlcollbanner.trigger('owl.prev');
  })
 
});