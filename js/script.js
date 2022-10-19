// ОБО МНЕ

// ~~~~~~~~~~~~~~~ script 1: смена картинки ~~~~~~~~~~~~~~~~~

const photo = document.querySelector('.about-me__photo');


setInterval(() => {
	if(photo.getAttribute('src') === '3.jpg') {
		photo.setAttribute('src', 'images/1.jpg')
	} else {
		photo.setAttribute('src', 'images/3.jpg');
	}
}, 3000);

// photo.addEventListener('mouseover', function(e) {
// 	photo.setAttribute('src', '3.jpg');
// });

// photo.addEventListener('mouseout', function(e) {
// 	photo.setAttribute('src', '1.jpg');
// });





// ~~~~~~~~~~~~~~~ script 2:  ~~~~~~~~~~~~~~~~~


