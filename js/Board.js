var board = {
	name: 'Tablica Kanban',
	createColumn: function(column) {
	  this.element.append(column.element);
	  initSortable();
	},
	element: $('#board .column-container')
};

$('.create-column')
	.click(function(){
	var name = prompt("Wpisz nazwę kolumny");	
	if (name === "" || name === null) {
                  alert("Prosze podaj nazwę !") 
         }
         else {                
           board.createColumn(new Column(name));
                	}
	});

function initSortable() {
    $('.card-list').sortable({
      connectWith: '.card-list',
      placeholder: 'card-placeholder'
    }).disableSelection();
  }
