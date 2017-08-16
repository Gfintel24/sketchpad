$(document).ready(function(){
  var numberOfRows = 8;
  var previousRows = 0;
  var btnMargin = ($('body').width()) / 2;

  createGridByTable();

  $('.newPad').css("margin", "0 " + btnMargin + "px");

  $('.newPad').click(function(){
    var currentRows = numberOfRows;
    numberOfRows = prompt ("How many squares, on each side, would you like?");
    // if (currentRows > numberOfRows){
      $(table).empty();
      createGridByTable();
    // }
    // else{
    //   increaseGrid(currentRows);
    // }
  });

  function createGridByTable(){
    var sqWidth = ($('#container').width()) / numberOfRows;
    var sqHeight = ($('#container').height()) / numberOfRows;
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

  // function increaseGrid(currentRows){
  //   var rowsToMake = numberOfRows - currentRows;
  //   var rowCount = 0;
  //   var dataCount = 0;
  //
  //   while (rowCount < numberOfRows){
  //     $('#table').append(tableRow);
  //     while (dataCount < numberOfRows){
  //       $('.row').last().append(tableData);
  //       dataCount++
  //     }
  //     dataCount = 0;
  //     rowCount++
  //   }
  // }
});
