window.addEventListener('DOMContentLoaded', function() {
	let btnCreate = document.getElementById('popup-btn'),
	btnReady = document.getElementById('ready'),
	btnReset = document.getElementById('reset'),
	btnVoting = document.getElementById('voting'),
	btnСrime = document.getElementById('crime'),
	windowOverlay = document.getElementsByClassName('overlay')[0],
	mainBlock = document.querySelector('.main'),
	customBlock = document.getElementsByClassName('custom')[0],
	mCardsItem = document.getElementsByClassName('main-cards-item')[0],
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
	let maleRadio = document.querySelector("#male"),
			femaleRadio = document.querySelector("#female"),
			personEasy = document.querySelector(".person-easy"),
			sex = "male";
						
			maleRadio.addEventListener('change', function() {
				personEasy.style.background = 'url(img/construct-5.png) center no-repeat';
				personEasy.style.backgroundSize = '70%';
						let preview          = document.querySelector('.preview'),
								prev             = document.querySelector('.prev'),
								next             = document.querySelector('.next'),
								backgroundSlides = [
										"url(img/construct-5.png)",
										"url(img/construct-6.png)",
										"url(img/construct-7.png)",
										"url(img/construct-8.png)",
										],
										slideIndex = 1;

						showSlides(slideIndex);

						function showSlides(n) {
						if (n > backgroundSlides.length) {
							slideIndex = 1;
						};
						if (n < 1) {
							slideIndex = backgroundSlides.length;
						};

						preview.style.backgroundImage    = backgroundSlides[slideIndex - 1],
						personEasy.style.backgroundImage = backgroundSlides[slideIndex - 1]
						
					};

					function plusSlides (n) {
						showSlides(slideIndex += n)
					};

					prev.onclick = function() {
						plusSlides(-1);
					};
					next.onclick = function() {
						plusSlides(1);
					};

			});
			
			femaleRadio.addEventListener('change', function() {
				personEasy.style.background = 'url(img/construct-1.png) center no-repeat';
				personEasy.style.backgroundSize = '70%';
						let preview          = document.querySelector('.preview'),
								prev             = document.querySelector('.prev'),
								next             = document.querySelector('.next'),
								backgroundSlides = [
										"url(img/construct-1.png)",
										"url(img/construct-2.png)",
										"url(img/construct-3.png)",
										"url(img/construct-4.png)",
										],
										slideIndex = 1;

						showSlides(slideIndex);

						function showSlides(n) {
						if (n > backgroundSlides.length) {
							slideIndex = 1;
						};
						if (n < 1) {
							slideIndex = backgroundSlides.length;
						};

						preview.style.backgroundImage    = backgroundSlides[slideIndex - 1],
						personEasy.style.backgroundImage = backgroundSlides[slideIndex - 1]
						
					};

					function plusSlides (n) {
						showSlides(slideIndex += n)
					};

					prev.onclick = function() {
						plusSlides(-1);
					};
					next.onclick = function() {
						plusSlides(1);
					};

			});

		

//новая карточка кандидата
btnReady.addEventListener('click', function() {
	let mCards = document.getElementsByClassName('main-cards'),
	newPerson = {};
	newPerson.name = document.querySelector('#name').value;
	newPerson.age = document.querySelector('#age').value;
	newPerson.views = document.querySelector('#select').value;
	newPerson.bio = document.querySelector('#bio').value;

	valid = true;

//проверка на валидность
		if(newPerson.name !== '' && isNaN(+newPerson.name)){
			document.querySelector("#name").style.border = "none";
			document.querySelector("#name").style.background = "#1c2028";
			document.querySelector("#name").style.color = "#fff";
		} else {
			document.querySelector("#name").style.border = "1px solid red";
			document.querySelector("#name").style.background = "#ffc6c6";
			document.querySelector("#name").style.color = "#1c2028";
			valid = false;
		}
		if(document.getElementById('male').checked || document.getElementById('female').checked) {
  		newPerson.sex = document.querySelector('[name=sex]:checked').value;
		} else {
  		alert("Выберете пол кандидата!");
		}
		if(newPerson.age !== '' && !isNaN(+newPerson.age) && newPerson.age >= 30 && newPerson.age <= 65){
			document.querySelector("#age").style.border = "none";
			document.querySelector("#name").style.background = "#1c2028";
			document.querySelector("#name").style.color = "#fff";
		} else {
			document.querySelector("#age").style.border = "1px solid red";
			document.querySelector("#age").style.background = "#ffc6c6";
			document.querySelector("#age").style.color = "#1c2028";
			valid = false;
		}
		if(newPerson.bio !== '' && isNaN(+newPerson.bio)){
			document.querySelector("#bio").style.border = "none";
			document.querySelector("#name").style.background = "#1c2028";
			document.querySelector("#name").style.color = "#fff";
		} else {
			document.querySelector("#bio").style.border = "1px solid red";
			document.querySelector("#bio").style.background = "#ffc6c6";
			document.querySelector("#bio").style.color = "#1c2028";
			valid = false;
		}
		if(!valid) {
			return;
		}

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

// Провести честное голосование

let votes = [];
btnVoting.addEventListener("click", function() {
  votes = [];
  votes[0] = getRandomInt(0, 100);

  if(votes[0] < 100) {
    votes[1] = getRandomInt(0, 100 - votes[0]);
    if(votes[0] + votes[1] < 100){
      votes[2] = 100 - votes[0] - votes[1];
    } else {
      votes[2] = 0;
    }
  } else {
    votes[1] = 0;
    votes[2] = 0;
  }

  let progressBar = mainBlock.querySelectorAll(".progress-bar"),
  progressBarNumber = mainBlock.querySelectorAll(".result-count");
  for (var i = 0; i < progressBar.length; i++) {
    progressBar[i].style.height = votes[i] + "%";
    progressBarNumber[i].textContent = votes[i] + "%";
  }
});

// Получение рандомного числа

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Вмешаться в выборы

btnСrime.addEventListener("click", function() {
  let progressBar = mainBlock.querySelectorAll(".progress-bar"),
  progressBarNumber = mainBlock.querySelectorAll(".result-count"),
  popularIndex = mostPopular(votes);

  if(votes[popularIndex] >= 25 && votes[2] <= 75){
    votes[popularIndex] -= 25;
    votes[2] += 25;
  }

  for (var i = 0; i < progressBar.length; i++) {
    progressBar[i].style.height = votes[i] + "%";
    progressBarNumber[i].textContent = votes[i] + "%";
  }
});

let mostPopularIndex = 0;
function mostPopular(arr){
  let mostPopularValue = 0;
  for (var i = 0; i < votes.length - 1; i++) {
    if (votes[i] > mostPopularValue) { 
      mostPopularValue = votes[i];
      mostPopularIndex = i;
    }
  }
  return mostPopularIndex;
}

});