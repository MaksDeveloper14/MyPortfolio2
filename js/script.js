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



// МОИ РАБОТЫ

// ~~~~~~~~~~~~~~~ script 2: FILE API ~~~~~~~~~~~~~~~~~

// Проверяем поддержку File API 
if (window.File && window.FileReader && window.FileList && window.Blob) {

} else {
  alert('File API не поддерживается данным браузером');
}

const inputFile = document.querySelector('.input-file');
const myWorksRow = document.querySelector('.my-works__row');

inputFile.onchange = function() {
	let file = inputFile.files[0];
	let reader = new FileReader();
	let src = URL.createObjectURL(file)
	let img = new Image();
	img.src = src;

	// сниппет карточка
	let card = `
		<div class="col my-works__col">
			<div class="card" style="width: 18rem;">
			  ${img.outerHTML}
			  <div class="card-body">
			    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
			  </div>
			</div>
    </div>
	`
	myWorksRow.insertAdjacentHTML('beforeend', card);
}
