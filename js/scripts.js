$(document).ready(function(){

$(function() {

	$('div.tabs').on('click', 'a:not(.active)', function() { 		// Вешаем обработчик событий типа "клик" на div с табами, для клика по неактивным табам
		$(this).addClass('active').siblings().removeClass('active')	// Добавляем класс "active" табу, на который кликнули, убираем класс "active" с предыдущего таба
			.closest('div.card').find('div.card__product')			// Переходим на родительский элемент "div.card", ищем в нем нужный нам "div.card__product"
			.removeClass('active')                                  // Удаляем в нужном нам "div.card__product" класс "active", 
			.eq($(this).index()).addClass('active'); 				// Ищем по индексу элемент по которому кликнули, добавляем ему класс "active"
	})

})

});