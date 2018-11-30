/*-------------------------------- меню---------------------------  */
$(function(){
	$('.toggle-menu').on('click',function(){
		$('.main-nav').toggleClass('open');
	});
});

/*-------------------------------- табы---------------------------  */
    $(function() {  
      $('.toggles li').click(function() {    
          var get_id=this.id;  
          var get_current = $('.posts .' + get_id); 
          $('.coltabs').not(get_current).hide(500);
           get_current.show(500);                                  
      });
      
           $('#showall').click(function() {                       
             $('.coltabs').show(500);                     
           });

/*-------------------------------- карусель---------------------------  */

           $('.slickslider').slick({            /*обращаемся к блоку где слайдер и вызываем сам слайдер */
            dots:true,                         /*что б показівало точки*/
            slidesToShow:1,                                   /*что б показывало сразу 3 срайда так как у меня 3 блока лого о нас и текст*/

           });   
    }); 
/*-------------------------------- хедер---------------------------  */
    $(window).scroll(function(){console.log($(window).scrollTop());
      if($(window).scrollTop()<50&&$(window).scrollTop()<50){
          var a=document.getElementById('header');
       a.style.backgroundColor="transparent";
      }if($(window).scrollTop()>50&&$(window).scrollTop()>50){
          var a=document.getElementById('header');
          a.style.backgroundColor='black';  
          a.style.opacity=0.8;  
  }
  }
  );
  

    

         
          













