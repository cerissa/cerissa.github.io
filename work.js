/*  setting up global variables */

var colCount = 0;
var colWidth = 0;
var margin = 20;
var windowWidth = 0;
var blocks = [];

// allows the windwo to be resized without messing up the code.



/*   setting up the setup blocks from html file
we grab the width of the window and the width of the blocks. we set the window with as windowWidth and the blocks widht as colWidth
the next line calculates the number of columsns that will fit in current window
we add the margin to the width of each colum and then divde the window width by this number. finally the
number is rounded down to five us a whole integer
we creat a loop which creates values for each column to if there are 4 possible columns that could fit in the window three will be 4 values in the array
 */

 function setupBlocks(){
 windowWidth =$(window).width();
 colWidth = $('.block').outerWidth();
 blocks = [];
	console.log(blocks);
 colCount = Math.floor(windowWidth/(colWidth+margin*2));
 for( var i=0; i < colCount; i++){
 	blocks.push(margin);
 	
 }
 positionBlocks();
}



/*  setting up the postioning of the blocks. 
set up the function. then we loop thru every element with the class block. then two variable are set, min which 
represents the lowest value in the array, which is also the column with the lowest height. the next variable is index  which represents the 
index number of this value, along with the column numbe we need to place.  we then calculate the position from the left of the screen
*/

function positionBlocks(){
 $('.block').each(function(){
 	var min=Array.min(blocks);
 	var index = $.inArray(min, blocks);
 	var leftPos = margin+(index*(colWidth+margin));
 	$(this).css({
 		'left':leftPos+'px',
 		'top':min+'px'
 	});
 	blocks[index]=min+$(this).outerHeight()+margin;
 	});
}

//function to get the min value in Array
Array.min = function(array){
	return Math.min.apply(Math,array);
};





