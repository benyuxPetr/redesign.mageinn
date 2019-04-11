;(function( $ ) {
	'use strict';
	$.fn.testPagesMenu = function(options) {
		var settings = $.extend({
			pagesList: ["index.html"],
			position: "absolute",
			menuStyle:
				'width: 35px;'+
				'height: 23px;'+
				'background-color: #000;'+
				'background-color: rgba(0,0,0,.5);'+
				'position: absolute;'+
				'z-index: 3000;'+
				'top: 0;'+
				'left: 0;'+
				'overflow: hidden;'+
				'font-family: Arial;',
			menuListStyle: 
				'max-width: 200px;'+
				'padding: 0 5px;'+
				'margin: 0;'+
				'list-style: none;'+
				'overflow: auto;'+
				'max-height: 90vh;',
			itemsStyle: 
				'color: #fff;'+
				'text-decoration: none;',
			toogleStyle: 
				"width: 30px;"+
				"height: 23px;"+
				"padding: 5px 0 0 5px;"+
				"cursor: pointer",
			toogleItemStyle: 
				"width: 20px;"+
				"height: 1px;"+
				"background-color:#fff;"+
				"margin-bottom:5px;",
			nextPageBtnStyle:
				"position: absolute;"+
				"top: 0;"+
				"right: 0;"+
				"color: #fff;"+
				"padding: 1px 3px;"+
				"cursor: pointer;"
		},options);
		var menu = {
			init: function(){
				$("body").append(this.template);
				this.bindEvents($(".page_nav .menuToggle"));
			},
			template: function(){
				return "<div class='page_nav' style='"+settings.menuStyle+"position: "+settings.position+";"+"'>"
								+"<div class='menuToggle' style='"+settings.toogleStyle+"'>"
									+"<div class='icon-bar' style='"+settings.toogleItemStyle+"'></div>"
									+"<div class='icon-bar' style='"+settings.toogleItemStyle+"'></div>"
									+"<div class='icon-bar' style='"+settings.toogleItemStyle+"'></div>"
								+"</div>"
								+"<ul class='page_nav_list' style='"+settings.menuListStyle+"'>"
									+ menu.menuItems()
								+"</ul>"
							+"</div>";
			},
			menuItems: function(){
				var items = '';
				for (var i = settings.pagesList.length - 1; i >= 0; i--) {
					items += "<li>"
										+"<a href='"+settings.pagesList[i]+"' style='"+settings.itemsStyle+"'>"+settings.pagesList[i]+"</a>"
									+"</li>";
				};
				return items;
			},
			bindEvents: function(obj){
				var $pageNav = $(".page_nav");
				obj.on("click",function(){
					if($pageNav.hasClass("active")){
						$pageNav.removeClass("active");
						$pageNav.css({
							width: "45px",
							height: "23px"
						});
					} else {
						$pageNav.addClass("active");
						$pageNav.css({
							width: "auto",
							height: "auto"
						});
					}
				});
			}
		}
		menu.init();
		return this;
	}
})(jQuery);

$.getJSON("assets/js/pages.json",function(data){
  $.fn.testPagesMenu({
    pagesList: data.pages,
    position: "fixed"
  });
});