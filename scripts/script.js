$(document).ready(function(){
  //Initial global variable declaration.
  var numberOfRows = 8;
  var penStyle = 0;
  var blackPen = 0;
  var rainbowPen = 1;
  var gradPen = 2;

  //Create initial grid based off numberOfRows.
  createGrid();

  //When clicked, prompts user for size of new pad, empties the table, and then calls the createGride function.
  $('#newPad').click(function(){
    numberOfRows = prompt ("How many squares, on each side, would you like?");
    $(table).empty();
    createGrid();
  });

  //Event listener for the rainbow button to change the pen style.
  $('#rainbow').click(function(){
    penStyle = rainbowPen;
  })

  //Need to spend more time learning how to implement this function correctly.
  // $('#gradient').click(function(){
  //   penStyle = gradPen;
  // })

  //Event listener for the black pen button to change the pen style.
  $('#black').click(function(){
    penStyle = blackPen;
  })

  //The work horse of the script. All calculated variables are called inside the function.
  function createGrid(){
    var sqWidth = ($('#container').width()) / numberOfRows;
    var sqHeight = ($('#container').height()) / numberOfRows;
    var tableRow = ("<tr class='row'></tr>");
    var tableData = ("<td class='data'></td>");
    var rowCount = 0;
    var dataCount = 0;

    //Appends table rows and data elements to the HTML table creating the grid.
    while (rowCount < numberOfRows){
      $('#table').append(tableRow);
      while (dataCount < numberOfRows){
        $('.row').last().append(tableData);
        dataCount++
      }
      dataCount = 0;
      rowCount++
    }

    //Sets row and data element dimensions based on requested rows.
    $('.row').height(sqHeight);
    $('.data').width(sqWidth);
    $('.data').height(sqHeight);

    //Switch statement for the pen functionality.
    $("td").on("mouseenter", function(){
      switch(penStyle){
        case 0:
          $(this).css("background-color", "black");
          break;

        case 1:
          var r = Math.floor((Math.random() * 255) + 1);
          var g = Math.floor((Math.random() * 255) + 1);
          var b = Math.floor((Math.random() * 255) + 1);

          $(this).css("background-color", "rgb(" + r + "," + g + "," + b + ")");
          break;

        //Need to spend more time learning how to implement this function correctly.

        // case 2:
        // var lightness = $(this).getAttribute(brightness);
        //   console.log(lightness);
        // // $(this).css("background-color", "hsl(0, 0%, )")
        //
        //   break;

        default:
          $(this).css("background-color", "black");
      }

    });
  }
});
