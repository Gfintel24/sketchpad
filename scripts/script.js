$(document).ready(function(){
var square = ("<div class='square'></div>");
var count = 0;
var numberOfSquares = 16;
var numberOfRows = Math.sqrt(numberOfSquares);
var sqWidth = ($('#container').width()) / numberOfRows;
var sqHeight = ($('#container').height()) / numberOfRows;
var btnMargin = ($('body').width()) / 2;

// createGridByInlineBlock();
createGridByTable();

$('.newPad').css("margin", "0 " + btnMargin + "px");

$('.newPad').click(function(){
  numberOfSquares = prompt ("How many squares would you like?");
  $(table).empty();
  numberOfRows = Math.sqrt(numberOfSquares);
  sqWidth = ($('#container').width()) / numberOfRows;
  sqHeight = ($('#container').height()) / numberOfRows;

  createGridByTable();
});



// $('td').hover(function (){
//   $(this).css("background-color", "black");
// }, function(){});

// function createGridByInlineBlock(){
//   while (count < numberOfSquares){
//     $('#container').append(square);
//     count++;
//   }
//   $('.square').width(sqWidth);
//   $('.square').height(sqHeight);
// }

  function createGridByTable(){
    var tableRow = ("<tr class='row'></tr>");
    var tableData = ("<td class='data'></td>");
    var rowCount = 0;
    var dataCount = 0;


    while (rowCount < numberOfRows){
      $('#table').append(tableRow);

      while (dataCount < numberOfRows){
        $('.row').last().append(tableData);
        dataCount++
      }
      dataCount = 0;
      rowCount++
    }
    $('.row').height(sqHeight);
    $('.data').width(sqWidth);
    $('.data').height(sqHeight);

    $("td").on("mouseenter", function(){
        $(this).css("background-color", "black");
    });
  }



});
