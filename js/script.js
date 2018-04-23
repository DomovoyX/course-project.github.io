window.addEventListener('DOMContentLoaded', function() {
	let btnCreate = document.getElementById('popup-btn'),
	btnReady = document.getElementById('ready'),
	btnReset = document.getElementById('reset'),
	btnVoting = document.getElementById('voting'),
	btnСrime = document.getElementById('crime'),
	windowOverlay = document.getElementsByClassName('overlay')[0],
	mainBlock = document.querySelector('.main'),
	customBlock = document.getElementsByClassName('custom')[0],
	info = document.getElementsByClassName('custom-info')[0],
	char = document.getElementsByClassName('custom-char')[0],
	style = document.getElementsByClassName('custom-style')[0];

	//создаю кандидата
	btnCreate.addEventListener('click', function() {
		windowOverlay.style.display = 'none';
		mainBlock.style.display = 'none';
		customBlock.style.display = "flex";
		
		for (var i = 0; i < customBlock.children.length; i++) {
			customBlock.children[i].style.display = "block";
		}
	});

	//выбор пола, настройка слайдера
	let sexMaleRadio = document.querySelector("#male"),
			sexFemaleRadio = document.querySelector("#female"),
			personEasy = document.querySelector(".person-easy"),	// кандидат
			personSlide = document.querySelector(".preview"),			// выбор кандидата
			btnPrev = document.querySelector(".prev"),
			btnNext = document.querySelector(".next"),
			counter = 0,
			sex = "male";
			
			personEasy.style.backgroundImage = "url(img/construct-5.png)";
			personSlide.style.backgroundImage = "url(img/construct-5.png)";
			
			sexMaleRadio.addEventListener("change", function() {
				sex = "male";
				personEasy.style.backgroundImage = "url(img/construct-5.png)";
				personSlide.style.backgroundImage = "url(img/construct-5.png)";
			});
			
			sexFemaleRadio.addEventListener("change", function() {
				sex = "female";
				personEasy.style.backgroundImage = "url(img/construct-1.png)";
				personSlide.style.backgroundImage = "url(img/construct-1.png)";
			});

//новая карточка кандидата
btnReady.addEventListener('click', function() {
	let mCards = document.getElementsByClassName('main-cards'),
	mCardsItem = document.getElementsByClassName('main-cards-item')[0],
	newPerson = {};
	newPerson.name = document.querySelector('#name').value;
	newPerson.age = document.querySelector('#age').value;
	newPerson.sex = document.querySelector('[name=sex]:checked').value;
	newPerson.views = document.querySelector('#select').value;
	newPerson.bio = document.querySelector('#bio').value;

	mCardsItem.classList.remove('main-cards-item-active');
	newCardsItem = mCardsItem.cloneNode(true);

		//заполняю карточку
		newCardsItem.querySelector('.name').textContent = newPerson.name;
		newCardsItem.querySelector('.age').textContent = newPerson.age + " лет";
		newCardsItem.querySelector('.sex').textContent = newPerson.sex;
		newCardsItem.querySelector('.views').textContent = newPerson.views;
		newCardsItem.querySelector('.bio').textContent = newPerson.bio;
		newCardsItem.querySelector('.photo').classList.remove('photo-1');
		newCardsItem.querySelector(".photo").style.backgroundImage = personEasy.style.backgroundImage;
		
		mCards[0].appendChild(newCardsItem);

		//обнуляю голоса
		let progressBar = mainBlock.querySelectorAll('.progress-bar'),
		progressBarNumber = mainBlock.querySelectorAll('.result-count');
		
		for (var i = 0; i < progressBar.length; i++) {
			progressBar[i].style.height = '0%';
			progressBarNumber[i].textContent = '0%';
		};

		mainBlock.style.display = 'block';
		customBlock.style.display = "none";
		for (let i = 0; i < customBlock.children.length; i++) {
			customBlock.children[i].style.display = "none";
		}
	});


//кнопка сбросить результаты
btnReset.addEventListener('click', function() {
	let progressBar = mainBlock.querySelectorAll('.progress-bar'),
	mainCardsItem = mainBlock.querySelectorAll('.main-cards-item'),
	progressBarNumber = mainBlock.querySelectorAll('.result-count');
	for (let i = 0; i < progressBar.length; i++) {
		progressBar[i].style.height = '0%';
		progressBarNumber[i].textContent = '0%';
	};

	for (let i = 0; i < mainCardsItem.length; i++) {
		if (i == 2) {
			mainCardsItem[i].remove();
		}
	};
	
	mainBlock.style.display = 'none';
	customBlock.style.display = "flex";
	for (let i = 0; i < customBlock.children.length; i++) {
		customBlock.children[i].style.display = "block";
	}
});

//кнопка провести честное голование
btnVoting.addEventListener('click', function() {
	let progressBar = mainBlock.querySelectorAll('.progress-bar'),
	progressBarNumber = mainBlock.querySelectorAll('.result-count');
	mCardsItem = document.querySelectorAll('.main-cards-item ');
	function getRandomInt(min, max){
		let result = Math.floor(Math.random() * (max - min) + min);
		result2 = Math.floor(Math.random()* (max - result) + min);
		result3 = max - result - result2;
		if (result > result2 && result > result3) {
			mCardsItem[0].classList.add("main-cards-item-active");
			mCardsItem[1].classList.remove("main-cards-item-active");
			mCardsItem[2].classList.remove("main-cards-item-active");
		} else if (result2 > result && result2 > result3) {
			mCardsItem[0].classList.remove("main-cards-item-active");
			mCardsItem[1].classList.add("main-cards-item-active");
			mCardsItem[2].classList.remove("main-cards-item-active");
		} else {
			mCardsItem[0].classList.remove("main-cards-item-active");
			mCardsItem[1].classList.remove("main-cards-item-active");
			mCardsItem[2].classList.add("main-cards-item-active");
		};
		progressBar[0].style.height = result + "%";
		progressBar[1].style.height = result2 + "%";
		progressBar[2].style.height = result3 + "%";
		progressBarNumber[0].textContent = progressBar[0].style.height;
		progressBarNumber[1].textContent = progressBar[1].style.height;
		progressBarNumber[2].textContent = progressBar[2].style.height;
	};
	getRandomInt(0, 100);
});

//кнопка вмешаться в выборы
btnСrime.addEventListener('click', function() {
	let progressBar = mainBlock.querySelectorAll('.progress-bar'),
	progressBarNumber = mainBlock.querySelectorAll('.result-count');
	function getRandomInt(min, max){
		let result = Math.floor(Math.random() * (max - min) + min);
		result2 = Math.floor(Math.random()* (max - result) + min);
		result3 = max - result - result2 + 25;
		if (result > result2 && result > result3) {
			mCardsItem[0].classList.add("main-cards-item-active");
			mCardsItem[1].classList.remove("main-cards-item-active");
			mCardsItem[2].classList.remove("main-cards-item-active");
		} else if (result2 > result && result2 > result3) {
			mCardsItem[0].classList.remove("main-cards-item-active");
			mCardsItem[1].classList.add("main-cards-item-active");
			mCardsItem[2].classList.remove("main-cards-item-active");
		} else {
			mCardsItem[0].classList.remove("main-cards-item-active");
			mCardsItem[1].classList.remove("main-cards-item-active");
			mCardsItem[2].classList.add("main-cards-item-active");
		};
		progressBar[0].style.height = result + "%";
		progressBar[1].style.height = result2 + "%";
		progressBar[2].style.height = result3 + "%";
		progressBarNumber[0].textContent = progressBar[0].style.height;
		progressBarNumber[1].textContent = progressBar[1].style.height;
		progressBarNumber[2].textContent = progressBar[2].style.height;
	};
	getRandomInt(0, 75);
});
});