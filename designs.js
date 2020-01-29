// Select color input
// Select size input
var rows, columns, color;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function(event) {
    rows = $('#inputHeight').val();
    columns = $('#inputWidth').val();
    event.preventDefault();
    $('#pixelCanvas').find('tr').remove(); //to remove recent grid, if there's any
    makeGrid(rows, columns);
});


function makeGrid(rows, columns) {

// Your code goes here!

    for (var i = 1; i <= rows; i++) {
        $('#pixelCanvas').append('<tr id=row' + i + '></tr>');
        for (var j = 1; j <= columns; j++) {
            $('#row' + i).append('<td></td>');
        };
    };
    
    //add eventListener to color the cells

    $('td').click(function paintTheCell() {
        color = $('#colorPicker').val();
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        };
    });
};


