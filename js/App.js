// OGÓLNA FUNKCJA



function Start() {

	var baseUrl = 'https://kodilla.com/pl/bootcamp-api';
	var myHeaders = {
		'X-Client-Id': '3481',
		'X-Auth-Token': '5752ee80fe1289013f8c59b00b24ef12'
	};

	var board = initializeBoard(baseUrl);
	var Card = initalizeCard(baseUrl);
	var Column = initalizeColumn(baseUrl);

	$.ajaxSetup({
		headers: myHeaders
	});

	$.ajax({
		url: baseUrl + '/board',
		method: 'GET',
		success: function (response) {
			setupColumns(response.columns);
		}
	});

	function setupColumns(columns) {
		columns.forEach(function (column) {
			var col = new Column(column.id, column.name);
			board.createColumn(col);
			setupCards(col, column.cards);
		});
	}

	function setupCards(col, cards) {
		cards.forEach(function (card) {
			var cardObj = new Card(card.id, card.name, card.bootcamp_kanban_column_id);
			col.createCard(cardObj);
		})
	}
}

Start ();