$(document).ready(function() {
  /*
took the id submit from the html file, which is id for the submit button
then told it whatever the user puts in and presses submits it
put a new item on the list, which new item is also a id and class
in html file for the input bar and button. 
the if else statement is saying if the user doesnt put anything
in the bar then show, please enter a value. when user does put text in the 
bar then it will append, or add, to the list. 
*/

  
  //on click    
  $('#submit').click(function(){
    
    var userInput = $("#new-item").val();
     console.log("User inputted..." , userInput);      
    
    if (!userInput) {
       $('.error').text('Please enter a value!').show();
        } 
    else  {      
         $('.list-items').append("<li>" + userInput+"<i class=\"fa fa-check-square-o\"></i>" +"<i class='fa fa-trash fa-4'></i>"+"</li>");
    }
    
      $('#new-item').val("");
    
   });
  //end on click
  
  //remove list item on click of trash icon

/*
.list-items is the is the ul class. 
.fa-trash is is a trash box symbol
removes the li item you click on, 
and lets you check an item that is done. 


*/  
    $(".list-items").on("click", ".fa-trash", function() {
      $(this).closest("li").remove();
      console.log("Removing item", $(this).closest("li"));
    });
  
    $(".list-items").on("click", ".fa-check-square-o", function() {
         
          $(this).toggleClass("fa-check-square");
          console.log("Changing class for item ... ");
          
    });
  //remove error message on focusing the input
  $("#new-item").val('').focus(function() { $('.error').hide();});
  

});
