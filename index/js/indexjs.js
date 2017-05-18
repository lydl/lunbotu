function AutoScroll(obj) {
    $(obj).find("ul:first").animate({marginTop: "-25px"},500,
    function() {
		$(this).find("li:first").appendTo(this);
        $(this).css({
            marginTop: "0px"
        });
    });
}
$(document).ready(function() {
	var items = ['scrollDiv'];
	var items2 = ['scrollDiv2'];
	for (var i = 0; i < items.length; i++) {
		setInterval('AutoScroll("#' + items[i] + '")', 3000);
	}
	for (var i = 0; i < items2.length; i++) {
		setInterval('AutoScroll("#' + items2[i] + '")', 3000);
	}
});

// 导航动态
$(function(){
	$('.nav li').hover(function(){
		$('span',this).stop().css('height','2px');
		$('span',this).animate({
			left:'5%',
			width:'90%',
			right:'0'
		},700);
	},function(){
		$('span',this).stop().animate({
			left:'0',
			width:'0'
		},700);
	});
});