window.addEventListener("DOMContentLoaded", () => {
	// categories

	const categoriesList = document.querySelector(".categories__list");
	const buttons = document.querySelectorAll(".categories__filter");
	const menButton = buttons[0];
	const womenButton = buttons[1];
	categoriesList.style.listStyleType = "none";
	categoriesList.classList.add("base-list");

	const input = document.querySelector(".categories__input");
	const clearButton = document.querySelector(".categories__button");

	const menList = [
		{
			src: "img/categories/Rectangle 20.png",
			name: "Shirts",
			gender: "men",
		},
		{
			src: "img/categories/Rectangle 21.png",
			name: "Printed T-Shirts",
			gender: "men",
		},
		{
			src: "img/categories/Rectangle 22.png",
			name: "Plain T-Shirt",
			gender: "men",
		},
		{
			src: "img/categories/Rectangle 23.png",
			name: "Polo T-Shirt",
			gender: "men",
		},
		{
			src: "img/categories/Rectangle 24.png",
			name: "Hoodies & Sweetshirt",
			gender: "men",
		},
		{
			src: "img/categories/Rectangle 25.png",
			name: "Jeans",
			gender: "men",
		},
		{
			src: "img/categories/Rectangle 26.png",
			name: "Activewear",
			gender: "men",
		},
		{
			src: "img/categories/Rectangle 27.png",
			name: "Boxers",
			gender: "men",
		},
	];

	const womenList = [
		{
			src: "img/categories/Rectangle 28.png",
			name: "Hoodies & Sweetshirt",
			gender: "women",
		},
		{
			src: "img/categories/Rectangle 29.png",
			name: "Coats & Parkas",
			gender: "women",
		},
		{
			src: "img/categories/Rectangle 30.png",
			name: "Tees & T-Shirt",
			gender: "women",
		},
		{
			src: "img/categories/Rectangle 31.png",
			name: "Boxers",
			gender: "women",
		},
	];

	function renderGenderList() {
		categoriesList.innerHTML = "";

		currentList.forEach((item) => {
			const li = document.createElement("li");
			const img = document.createElement("img");
			const h3 = document.createElement("h3");

			img.src = item.src;
			h3.textContent = item.name;
			li.classList.add("categories__card");

			li.append(img, h3);
			categoriesList.append(li);
		});
	}

	let currentList = menList.filter((item) => item.gender === "men");
	menButton.style.color = "#8a33fd";
	renderGenderList();

	menButton.addEventListener("click", () => {
		currentList = [...menList];
		renderGenderList();
		menButton.style.color = "#8a33fd";
		womenButton.style.color = "#000";
	});

	womenButton.addEventListener("click", () => {
		currentList = [...womenList];
		renderGenderList();
		womenButton.style.color = "#8a33fd";
		menButton.style.color = "#000";
	});

	input.addEventListener("input", (e) => {
		const term = e.target.value;

		if (menButton.style.color === "rgb(138, 51, 253)") {
			currentList = [...menList].filter((item) =>
				item.name.includes(term),
			);
		} else {
			currentList = [...womenList].filter((item) =>
				item.name.includes(term),
			);
		}
		renderGenderList();
	});

	clearButton.addEventListener("click", () => {
		input.value = "";
		currentList = menList.filter((item) => item.gender === "men");
		menButton.style.color = "#8a33fd";
		womenButton.style.color = "#000";
		renderGenderList();
	});

	// slider

	const slides = document.querySelectorAll(".slider__block");
	const prevArrow = document.querySelector(".slider__arrow_prev");
	const nexrArrow = document.querySelector(".slider__arrow_next");
	const mini = document.querySelectorAll(".mini div");

	let currentSlide = 0;

	slides.forEach((slide) => {
		slide.style.display = "none";
	});
	slides[currentSlide].style.display = "block";
	if (currentSlide === 0) {
		prevArrow.style.display = "none";
	}

	nexrArrow.addEventListener("click", () => {
		slides.forEach((slide, i) => {
			slide.style.display = "none";
			mini[i].style.backgroundColor = "black";
		});

		currentSlide++;

		if (currentSlide === slides.length - 1) {
			nexrArrow.style.display = "none";
		} else {
			nexrArrow.style.display = "block";
		}
		if (currentSlide !== 0) {
			prevArrow.style.display = "block";
		}

		slides[currentSlide].style.display = "block";
		mini[currentSlide].style.backgroundColor = "#8a33fd";
	});

	prevArrow.addEventListener("click", () => {
		slides.forEach((slide, i) => {
			slide.style.display = "none";
			mini[i].style.backgroundColor = "black";
		});

		currentSlide--;

		if (currentSlide === 0) {
			prevArrow.style.display = "none";
		} else {
			prevArrow.style.display = "block";
		}
		if (currentSlide !== slides.length - 1) {
			nexrArrow.style.display = "block";
		}

		slides[currentSlide].style.display = "block";
		mini[currentSlide].style.backgroundColor = "#8a33fd";
	});

	mini.forEach((button, i) => {
		button.addEventListener("click", () => {
			mini.forEach((item) => {
				item.style.backgroundColor = "black";
			});
			button.style.backgroundColor = "#8a33fd";
			slides.forEach((item) => {
				item.style.display = "none";
			});
			currentSlide = i;
			slides[i].style.display = "block";

			if (currentSlide === slides.length - 1) {
				nexrArrow.style.display = "none";
			} else {
				nexrArrow.style.display = "block";
			}
			if (currentSlide !== 0) {
				prevArrow.style.display = "block";
			}
			if (currentSlide === 0) {
				prevArrow.style.display = "none";
			} else {
				prevArrow.style.display = "block";
			}
			if (currentSlide !== slides.length - 1) {
				nexrArrow.style.display = "block";
			}
		});
	});

	// accordion
	const accordionButtons = document.querySelectorAll(".accordion__body");
	const accordionText = document.querySelectorAll(".accordion__text");
	const accordionArrow = document.querySelectorAll(".accordion__arrow");

	accordionButtons.forEach((button, i) => {
		button.addEventListener("click", () => {
			accordionText.forEach((text) => (text.style.height = 0));
			accordionArrow.forEach((arrow) => (arrow.style.rotate = "0deg"));
			accordionArrow[i].style.rotate = "180deg";
			accordionText[i].style.height = button.scrollHeight * 1.7 + "px";
		});
	});

	//hamburger

	const hamburger = document.querySelector(".hamburger");
	const nav = document.querySelector(".nav");

	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		nav.classList.toggle("nav_active");
	});

	//

	const shopButton = document.querySelector(".promo__button");
	const modal = document.querySelector(".modal");
	const closeModal = document.querySelector(".modal__close");

	shopButton.addEventListener("click", () => {
		modal.classList.add("modal_active");
	});

	closeModal.addEventListener("click", () => {
		modal.classList.remove("modal_active");
	});
});
