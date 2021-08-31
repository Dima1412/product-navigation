/* Фильтры на мобильных устройствах */

let buttonToggle = () => {
    const button = document.getElementById("menu-button").classList,
    isopened = "is-opened";
    const sidebar = document.querySelector('.sidebar');
    let isOpen = button.contains(isopened);
    if(isOpen) {
      button.remove(isopened);
      sidebar.classList.remove("sidebar--mobile-active");
    } 
    else {
      button.add(isopened);
      sidebar.classList.add("sidebar--mobile-active");
    }
}

/* Показать больше карточек */

const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');


btnShowMoreCards.addEventListener('click', function () {
    hiddenCards.forEach(function (card) {
        card.classList.remove('card-link--hidden');
        });
});


/* Показать/скрыть контент внутри виджетов */
const widgets = document.querySelectorAll('.widget');

// Находим все виджеты на странице
widgets.forEach(function (widget) {

    // Слушаем клик внутри виджета
    widget.addEventListener('click', function (e) {
        // Если клик по заголовку - тогда скрываем/показывае тело виджета
        if (e.target.classList.contains('widget__title')) {
            e.target.classList.toggle('widget__title--active');
            e.target.nextElementSibling.classList.toggle('widget__body--hidden');
        }
    });
});

/* Location - кнопка Любая */
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckboxes = document.querySelectorAll('[data-location-param]');

// Выбор кнопки Любая и отключение других чекбоксов
checkBoxAny.addEventListener('change', function () {
    if (checkBoxAny.checked) {
        topLocationCheckboxes.forEach(function (item) {
			item.checked = false;
		});
    }
})

// Отключаем кнопку "Любая", при выборе других параметров
topLocationCheckboxes.forEach(function (item) {
    item.addEventListener('change', function () {
        if (checkBoxAny.checked) {
            checkBoxAny.checked = false;
        }
    })
})


/* Показать еще 3 доп опции в фильтре с чекбоксами */

const showMoreOptions = document.querySelector('.widget__show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');


showMoreOptions.onclick = function (e) {
    e.preventDefault();

    // Если блоки были скрыты - значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
		hiddenCheckBoxes.forEach(function (item) {
			item.style.display = 'block';
		});
		showMoreOptions.innerText = 'Скрыть дополнительные опции';
		showMoreOptions.dataset.options = 'visible';
	}
	// Если блоки были видны - значит скрываем
	else if (showMoreOptions.dataset.options == 'visible') {
		hiddenCheckBoxes.forEach(function (item) {
			item.style.display = 'none';
		});
		showMoreOptions.innerText = 'Показать ещё';
		showMoreOptions.dataset.options = 'hidden';
	}

}