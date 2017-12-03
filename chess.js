
(function(){

var oldpos,newpos,ispieceselected;

$(document).ready(function()
{

	$('td').click(function()
	{
		if($(this).find('span').length>0)
		{
			console.log(this);
		$('td').removeClass('active');
		$(this).addClass('active');
	}
		console.log('pos',oldpos);
	});

});

})();
