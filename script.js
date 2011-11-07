$(function(){
jumping_blocks = {
	
	container : $('#container'),
	block : 'images/block.png',
	offset: { x: 76, y: 45},
	origin: { x:-76,y:-100},
	
	init : function(cols, rows){
		
		
		var img = $('<img>').attr('src', jumping_blocks.block);
		for( var c=0; c<cols; c++){
			
			var head = {x:this.origin.x, y:this.origin.y};
			
			for( var r=0; r<rows; r++ ){
				
				var current = img.clone();
				current.css( {position: 'absolute', left: this.origin.x, top: this.origin.y} );
				current.attr('otop', this.origin.y);
				
				this.container.append( current );				
				
				this.origin.x -= this.offset.x;
				this.origin.y += this.offset.y;
			}
			
			this.origin = head;
			this.origin.x += this.offset.x;
			this.origin.y += this.offset.y;
		}
		
	}
	
	,jumping: function(){
		
		this.container.children().hover(function(){
			$(this).animate({top: $(this).attr('otop')-100}, 500);
		},function(){
			$(this).animate({top: $(this).attr('otop')},{ duration: 500, easing: 'easeOutBounce' });
		});	
	}
	
}
	jumping_blocks.init(20,20);
	jumping_blocks.jumping();
});