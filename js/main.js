$(document).ready(function(){

let $btns =$(".project-area .button-group button");

$btns.click(function(e){

	$('.project-area .button-group button').removeClass('active');
	e.target.classList.add('active')

	let selector = $(e.target).attr("data-filter")
	$('.project-area .grid').isotope({
		filter : selector
	})	

	return False 
})

// ESTO MAGICAMENTE HACE QUE LAS IMAGENES DEL CARRUSEL DE FOTOS 
// PIERDAN LA ALINEACION Y SE ARREGLEN POR SU TAMAÑO (MAGIA)
$('.project-area .button-group #btn1').trigger('click')

	// NO FUNCIONA EL PLUGGIN CON LAS IMAGENES :/ 
	$('.project-area .grid .test-popup-link').magnificPopup({
	  type: 'image',
	  gallery:{enabled:true}
	  // other options
	});

	
// INICIALIZAR EL CARRUSEL // NOT WORKING


//$('.owl-carousel').owlCarousel({
//	loop: true,
//	autoplay:true,
//	dots: true,
//	responsive:{
//		0:{
//			items:1
//		},
//		544:{
//			items:2
//		}
//	}

// Sticky navigation menu 

let nav_offset_top =$('.header_area').height() +50;

function navbarFixed(){
	if($('.header_area').length){
		$(window).scroll(function(){
			let scroll =$(window).scrollTop();
			if(scroll >= nav_offset_top){
				$('.header_area .main_menu').addClass('navbar_fixed')
			}else{
				$('.header_area .main_menu').removeClass('navbar_fixed')
			}
		})
	}
}


navbarFixed();


});




