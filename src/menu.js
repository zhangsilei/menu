;
(function($, w) {
	$.fn.menu = function(options) {
		// 自带主题: dark(黑底白字)、blue(蓝底白字)
		var themeColor;
		themeColor = {
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
		};
		var $firstMenu = $('.ve-menu-pc'),
			$firstLinks = $firstMenu.children('li').children('a'),
			$sencondLinks = $firstMenu.find('ul').find('a'),
			hasSecond = $firstMenu.find('ul').length;

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

			height: 40,
			itemWidth: 20,
			itemMargin: 1,
			theme: 'blue',
			menuIconColor: '#000',
			menuMaskColor: '#000',
			menuFirstListBgColor: '#000',
			menuFirstListFontColor: '#fff',
			menuSecondListBgColor: '#222',
			menuSecondListFontColor: '#fff',
			closeIconColor: '#fff'
		};

		var settings = $.extend({}, defaults, options);
		var isMobile = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);

		// 设置默认主题
		switch (settings.theme) {
			case 'blue':
				setThemeColor(themeColor.blue.fontColor, themeColor.blue.bgColor);
				!isMobile && setHoverBgColor(themeColor.blue.hoverFontColor, themeColor.blue.hoverBgColor);
				break;
			case 'dark':
				setThemeColor(themeColor.dark.fontColor, themeColor.dark.bgColor);
				!isMobile && setHoverBgColor(themeColor.dark.hoverFontColor, themeColor.dark.hoverBgColor);
				break;
		}

		// 一级菜单样式
		$firstLinks.css({

			height: settings.height,
			lineHeight: settings.height + 'px',
			fontSize: settings.firstFontSize,
			color: settings.firstFontColor,
			backgroundColor: settings.firstBgColor

		}).parent('li').each(function(index, el) {

			var $this = $(this);
			$this.width($this.width() + settings.itemWidth); // 一级菜单宽度

		}).not($firstMenu.children('li').first()).css({

			marginLeft: settings.itemMargin + 'px' // 菜单间隙

		});

		// 二级菜单样式
		if (hasSecond) {

			$sencondLinks.css({
				height: settings.height,
				lineHeight: settings.height + 'px',
				fontSize: settings.secondFontSize,
				color: settings.secondFontColor,
				backgroundColor: settings.secondBgColor
			});

			// 二级菜单宽度
			$.each($firstLinks, function(index, val) {
				var $secondMenu = $(this).next('ul');

				$secondMenu.css('top', settings.height);
				if ($secondMenu.width() + settings.itemWidth < $firstLinks.width()) {
					$secondMenu.width($firstLinks.width());
				} else {
					$secondMenu.width($secondMenu.width() + settings.itemWidth);
				}
			});

		}

		if (isMobile) { // 在移动端打开页面，将事件触发改为click
			try {
				if (FastClick) {
					FastClick.attach(document.body); // 支持fastclick
				}
			} catch (e) {
				console.log('fastclick.js is not found.You are still using normal \'click\'');
			}
		} else { // 在PC端打开页面，事件触发仍为hover
			if (hasSecond) {
				setHoverCss();
			}
		}

		/**
		 * 设置默认主题颜色
		 * @description 自带的配色方案是一、二级菜单保持相同颜色
		 * @param {String} fontColor 字体颜色
		 * @param {String} bgColor   背景颜色
		 */
		function setThemeColor(fontColor, bgColor) {
			$firstLinks.css({
				color: fontColor,
				backgroundColor: bgColor
			});
			$sencondLinks.css({
				color: fontColor,
				backgroundColor: bgColor
			});
		}

		/**
		 * 设置鼠标滑过颜色
		 * @param {String} fontColor 字体颜色
		 * @param {String} bgColor   背景颜色
		 */
		function setHoverBgColor(fontColor, bgColor) {
			var normalFontColor, normalBgColor;

			$firstMenu.find('a').hover(function() {
				var $this = $(this),
					normalFontColor = $this.css('color');
				normalBgColor = $this.css('backgroundColor');
				$this.css({
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

		/**
		 * 设置鼠标悬浮样式
		 */
		function setHoverCss() {
			// 一级菜单样式
			$firstLinks.hover(function() {
				$(this).css({
					color: settings.firstHoverFontColor,
					backgroundColor: settings.firstHoverBgColor
				})
			}, function() {
				$(this).css({
					color: settings.firstFontColor,
					backgroundColor: settings.firstBgColor
				})
			});

			// 二级菜单样式
			$sencondLinks.hover(function() {
				var $this = $(this);
				$this.css({
					color: settings.secondHoverFontColor,
					backgroundColor: settings.secondHoverBgColor
				});
				$this.parents('ul').first().prev().css({
					color: settings.firstHoverFontColor,
					backgroundColor: settings.firstHoverBgColor
				});
			}, function() {
				var $this = $(this);
				$this.css({
					color: settings.secondFontColor,
					backgroundColor: settings.secondBgColor
				});
				$this.parents('ul').first().prev().css({
					color: settings.firstFontColor,
					backgroundColor: settings.firstBgColor
				});
			});
		}

		// 根据屏幕大小进行响应式布局
		function responsiveLayout() {
			var screenWidth = $(w).width(),
				$menuIcon = $('.ve-menu-icon');

			if (screenWidth <= 768) {
				if (!$menuIcon.length) {
					// 隐藏原菜单
					$firstMenu.hide();
					// 添加菜单按钮
					$firstMenu.after('<div class="ve-menu-icon"><div></div><div></div><div></div></div>');
					$menuIcon = $('.ve-menu-icon');
					$menuIcon.css('marginTop', (($firstLinks.height() - $menuIcon.height()) / 2)).on('click', function() {
						// 创建遮罩和一、二级菜单
						$('<div class="ve-menu-mask"></div>')
							.css('background', settings.menuMaskColor).appendTo('.ve-menu')
							.after('<ul class="ve-menu-mobile"><li class="ve-menu-close"><div></div></li>' + $firstMenu.html() + '</ul>')
							.next().find('ul, li, a').removeAttr('style');
						// 菜单事件
						$('.ve-menu-mobile').children('li').on('click', function() {
							$(this).find('ul').toggle().on('click', function(event) {
								return false;
							}).find('a').css({ //  一级菜单样式
								background: settings.menuSecondListBgColor,
								color: settings.menuSecondListFontColor
							});
						}).children('a').css({ // 二级菜单样式
							background: settings.menuFirstListBgColor,
							color: settings.menuFirstListFontColor
						});
						// 关闭按钮样式、事件
						$('.ve-menu-close').css('color', settings.closeIconColor)
							.children('div').on('click', function() {
								$('.ve-menu-mask').hide();
								$('.ve-menu-mobile').hide();
							});
					}).children('div').css('background', settings.menuIconColor);
				} else {
					$firstMenu.hide();
					$menuIcon.show();
				}
			} else {
				if ($menuIcon.length) {
					$firstMenu.show();
					$menuIcon.hide();
				}
			}
		}

		responsiveLayout();

		$(window).resize(function(event) {
			responsiveLayout()
		});

		return this;
	}
})(jQuery, window);