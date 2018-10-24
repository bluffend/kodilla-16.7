// OGÓLNA FUNKCJA

var baseUrl = 'https://kodilla.com/pl/bootcamp-api'; // to są zmienne globalne ?
var myHeaders = {									// to są zmienne globalne ?
	'X-Client-Id': '3481',
	'X-Auth-Token': '5752ee80fe1289013f8c59b00b24ef12'
};

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