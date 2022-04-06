scrollTo({top:0, left: 0});


// declarations
const controller = new ScrollMagic.Controller();
let mainImage = document.querySelector('#main_image');

let centerGrid = Math.round(innerWidth - 100);
let otherGrid = Math.round((innerWidth * 0.634765625) - 100);

// for screen size
const onLoadTimeCheck = innerWidth > 1024 ? true : false;








// text animation
const textTween = TweenLite.to('#text', 2, {
	y: -300,
	autoAlpha: 0,
	ease: Power0.easeOut
});

// adding text tween to scroll magic
new ScrollMagic.Scene({
	triggerElement: 'body',
	triggerHook: 0,
	duration: 300
})
.setTween(textTween)
.addTo(controller);




function largeScreenImageAnimation() {
	// image animation
	let imageTween = TweenLite.fromTo('#main_image', 1,
	{
		marginBottom: innerWidth > 1024 ? '61rem' : '8rem',
		borderRadius: '0',
		height: `${innerWidth <= 1024 ? innerHeight : (mainImage.offsetWidth) * 1.3}px`,
		ease: Power0.linear
	},
	{
		marginBottom: '4rem',
		borderRadius: '3.6rem',
		height: `${mainImage.offsetWidth * 1.5}px`,
	});

	// adding image tween to scroll magic
	new ScrollMagic.Scene({
		triggerElement: '.mb_container',
		triggerHook: 0,
		duration: 400
	})
	.setTween(imageTween)
	.addTo(controller);
}
innerWidth > 1024 && largeScreenImageAnimation();



function addAnimationToGrid() {
	let leftGalleryTween = TweenLite.fromTo('.mb_container--row', .5, {
		gridTemplateColumns: `${otherGrid}px ${innerWidth - (innerWidth <= 500 ? 40 : 80)}px ${otherGrid}px`,
		ease: Power0.easeNone
	}, {
		gridTemplateColumns: `${otherGrid}px ${Math.round(innerWidth / 2)}px ${otherGrid}px`
	})
	// adding left gallery tween to scroll magic
	new ScrollMagic.Scene({
		triggerElement: '.mb_container',
		triggerHook: 0,
		duration: 200
	})
	.setTween(leftGalleryTween)
	.setPin('.mb_container')
	.addTo(controller);

	let imageHeight = TweenLite.fromTo('#main_image', 1, {
		height: innerWidth < 600 ? '80vh' : '95vh',
		borderRadius: '0',
		ease: Power0.easeNone
	}, {
		borderRadius: '2rem',
		height: centerGrid * 1.2 +'px'
	});
	// adding left gallery tween to scroll magic
	new ScrollMagic.Scene({
		triggerElement: '.mb_container',
		triggerHook: 0,
		duration: 150
	})
	.setTween(imageHeight)
	.setPin('.mb_container')
	.addTo(controller);
}
innerWidth <= 1024 && addAnimationToGrid();



function equalSizeImage() {
	let _images = document.querySelectorAll('.im_sm');
	_images.forEach(im => {
		im.style.height = (im.offsetWidth * (.5)) +'px';
	});
}

function mediumSizeImage() {
	let _images = document.querySelectorAll('.im_md');
	_images.forEach(im => {
		im.style.height = (im.offsetWidth * (innerWidth < 600 ? 1.59 : .8)) +'px';
	});
}

function largeSizeImage() {
	let _images = document.querySelectorAll('.im_lg:not(#main_image)');
	_images.forEach(im => {
		im.style.height = (im.offsetWidth * (innerWidth < 600 ? 1.97 : 1.2)) +'px';
	});
}




// left gallery animation
const leftGalleryTween = TweenLite.from('.mb_left .mb_imgs', 1, {
	x: -300,
	autoAlpha: 0.5,
	ease: Power0.ease
});
// adding left gallery tween to scroll magic
const scene2 = new ScrollMagic.Scene({
	triggerElement: 'mb_left',
	triggerHook: 0.2,
	duration: innerWidth > 1024 ? 400 : 100
})
.setTween(leftGalleryTween)
.addTo(controller);

// right gallery animation
const rightGalleryTween = TweenLite.from('.mb_right .mb_imgs', 1, {
	x: 300,
	autoAlpha: 0.5,
	ease: Power0.ease
});
// adding right gallery tween to scroll magic
const scene3 = new ScrollMagic.Scene({
	triggerElement: 'mb_right',
	triggerHook: 0.2,
	duration: innerWidth > 1024 ? 400 : 100
})
.setTween(rightGalleryTween)
.addTo(controller);






equalSizeImage();
	mediumSizeImage()
	largeSizeImage();

onresize = function() {
	equalSizeImage();
	mediumSizeImage()
	largeSizeImage();
	centerGrid = Math.round(innerWidth - 100);
	otherGrid = Math.round((innerWidth * 0.634765625) - 100);

	if (onLoadTimeCheck !== (innerWidth > 1024)) {
		window.location.reload();
	}
}