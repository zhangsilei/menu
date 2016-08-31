;
(function($) {
	$.fn.menu = function(options) {
		// 自带主题: dark(黑底白字)、blue(蓝底白字)
		var themeColor = {
			blue: {
				fontColor: '#fff',
				bgColor: '#0E90D2',
				hoverFontColor: '#fff',
				hoverBgColor: '#0C79B1'
			},
			dark: {
				fontColor: '#9D9D9D',
				bgColor: '#1F1F1F',
				hoverFontColor: '#fff',
				hoverBgColor: '#000'
			}
		}
		var firstMenu = this.children('ul');
		var firstLinks = firstMenu.children('li').children('a');
		var sencondLinks = firstMenu.find('ul').find('a');

		var defaults = {
			firstFontSize: '16px',
			firstFontColor: themeColor.blue.fontColor,
			firstBgColor: themeColor.blue.bgColor,
			firstHoverFontColor: themeColor.blue.hoverFontColor,
			firstHoverBgColor: themeColor.blue.hoverBgColor,

			secondFontSize: '16px',
			secondFontColor: themeColor.blue.fontColor,
			secondBgColor: themeColor.blue.bgColor,
			secondHoverFontColor: themeColor.blue.hoverFontColor,
			secondHoverBgColor: themeColor.blue.hoverBgColor,

			itemWidth: 20,
			itemMargin: 1,

			theme: 'blue'
		}
		var settings = $.extend({}, defaults, options);

		// 设置默认主题
		switch (settings.theme) {
			case 'blue':
				setThemeColor(themeColor.blue.fontColor, themeColor.blue.bgColor);
				setHoverBgColor(themeColor.blue.hoverFontColor, themeColor.blue.hoverBgColor);
				break;
			case 'dark':
				setThemeColor(themeColor.dark.fontColor, themeColor.dark.bgColor);
				setHoverBgColor(themeColor.dark.hoverFontColor, themeColor.dark.hoverBgColor);
				break;
		}

		// 一级菜单样式
		firstLinks.css({
				fontSize: settings.firstFontSize,
				color: settings.firstFontColor,
				backgroundColor: settings.firstBgColor
			})
			.hover(function() {
				$(this).css({
					color: settings.firstHoverFontColor,
					backgroundColor: settings.firstHoverBgColor
				})
			}, function() {
				$(this).css({
					color: settings.firstFontColor,
					backgroundColor: settings.firstBgColor
				})
			})
			.parent('li').each(function(index, el) {
				$(this).width($(this).width() + settings.itemWidth); // 一级菜单宽度
			})
			.not(firstMenu.children('li').first()).css({
				marginLeft: settings.itemMargin + 'px' // 菜单间隙
			})

		// 二级菜单样式 
		if (firstMenu.find('ul').length > 0) {
			sencondLinks.css({
				fontSize: settings.secondFontSize,
				color: settings.secondFontColor,
				backgroundColor: settings.secondBgColor
			}).hover(function() {
				$(this).css({
					color: settings.secondHoverFontColor,
					backgroundColor: settings.secondHoverBgColor
				});
			}, function() {
				$(this).css({
					color: settings.secondFontColor,
					backgroundColor: settings.secondBgColor
				});
			});
			// 二级菜单宽度
			$.each(firstLinks, function(index, val) {
				var secondMenu = $(this).next('ul');
				if (secondMenu.width() + settings.itemWidth < firstLinks.width()) {
					secondMenu.width(firstLinks.width());
				} else {
					secondMenu.width(secondMenu.width() + settings.itemWidth);
				}
			});
		}

		/**
		 * 设置默认主题颜色
		 */

		// 自带的配色方案是一、二级菜单保持相同颜色
		function setThemeColor(fontColor, bgColor) {
			firstLinks.css({
				color: fontColor,
				backgroundColor: bgColor
			});
			sencondLinks.css({
				color: fontColor,
				backgroundColor: bgColor
			});
		}

		// 设置鼠标滑过颜色
		function setHoverBgColor(fontColor, bgColor) {
			var normalFontColor, normalBgColor;
			firstMenu.find('a').hover(function() {
				normalFontColor = $(this).css('color');
				normalBgColor = $(this).css('backgroundColor');
				$(this).css({
					color: fontColor,
					backgroundColor: bgColor
				});
			}, function() {
				$(this).css({
					color: normalFontColor,
					backgroundColor: normalBgColor
				});
			});
		}

		return this;
	}
})(jQuery)