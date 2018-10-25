function initializeBoard(baseUrl) {
	var board = {
		name: 'Tablica Kanban',
		createColumn: function (column) {
			this.element.append(column.element);
			initSortable();
		},
		element: $('#board .column-container')
	};

	var Column = initalizeColumn(baseUrl);

	$('.create-column')
		.click(function () {
			var inputColumnName = prompt('Enter a column name');

			if (inputColumnName === null) { // klinięcie "anuluj"
				return;
			}
			else {
				if (inputColumnName === "") {
					columnName = "No name";
				}
				else {
					columnName = inputColumnName;
				}
				$.ajax({
					url: baseUrl + '/column',
					method: 'POST',
					data: {
						name: columnName
					},
					success: function (response) {
						var column = new Column(response.id, columnName);
						board.createColumn(column);
					}
				});
			}
		});

	function initSortable() {
		$('.card-list').sortable({
			connectWith: '.card-list',
			placeholder: 'card-placeholder'
		}).disableSelection();
	}
	return board;
} 