;
(function($, w) {

	// 取元素放在外面
	var $firstMenu = $('.ve-menu-pc'),
		$firstLinks = $firstMenu.children('li').children('a'),
		$sencondLinks = $firstMenu.find('ul').find('a'),
		hasSecond = $firstMenu.find('ul').length;

	// 菜单类构造方法
	var Menu = function(options) {
		// 自带主题: dark(黑底白字)、blue(蓝底白字)
		this.themeColor = {
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
		this.defaults = {
			firstFontSize: '16px',
			firstFontColor: this.themeColor.blue.fontColor,
			firstBgColor: this.themeColor.blue.bgColor,
			firstHoverFontColor: this.themeColor.blue.hoverFontColor,
			firstHoverBgColor: this.themeColor.blue.hoverBgColor,

			secondFontSize: '16px',
			secondFontColor: this.themeColor.blue.fontColor,
			secondBgColor: this.themeColor.blue.bgColor,
			secondHoverFontColor: this.themeColor.blue.hoverFontColor,
			secondHoverBgColor: this.themeColor.blue.hoverBgColor,

			height: 40,
			itemWidth: 20,
			itemMargin: 1,
			theme: 'blue',
			menuIconColor: '#000',
			menuMaskColor: '#000',
			mFirstBgColor: '#000',
			mFirstFontColor: '#fff',
			mSecondBgColor: '#222',
			mSecondFontColor: '#fff',
			closeIconColor: '#fff',

			animate: false
		};
		this.settings = $.extend({}, this.defaults, options);
		this.isMobile = !!navigator.userAgent.match(/AppleWebKit.*Mobile.*/);;
	}

	// 原型链上加属性和方法
	Menu.prototype = {
		setDefaultTheme: function() {
			// 设置默认主题
			switch (this.settings.theme) {
				case 'blue':
					setThemeColor(this.themeColor.blue.fontColor, this.themeColor.blue.bgColor);
					!this.isMobile && setHoverBgColor(this.themeColor.blue.hoverFontColor, this.themeColor.blue.hoverBgColor);
					break;
				case 'dark':
					setThemeColor(this.themeColor.dark.fontColor, this.themeColor.dark.bgColor);
					!this.isMobile && setHoverBgColor(this.themeColor.dark.hoverFontColor, this.themeColor.dark.hoverBgColor);
					break;
			};
			// 设置默认主题颜色
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
			// 设置鼠标滑过背景颜色
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
			return this;
		},
		setFirstMenu: function() {
			var _this = this;
			$firstLinks.css({
				height: _this.settings.height,
				lineHeight: _this.settings.height + 'px',
				fontSize: _this.settings.firstFontSize,
				color: _this.settings.firstFontColor,
				backgroundColor: _this.settings.firstBgColor
			}).parent('li').each(function(index, el) {
				var $this = $(this);
				$this.width($this.width() + _this.settings.itemWidth); // 一级菜单宽度
			}).not($firstMenu.children('li').first()).css({
				marginLeft: this.settings.itemMargin + 'px' // 菜单间隙
			});
			return _this;
		},
		setSecondMenu: function() {
			var _this = this;
			if (hasSecond) {
				$sencondLinks.css({
					height: _this.settings.height,
					lineHeight: _this.settings.height + 'px',
					fontSize: _this.settings.secondFontSize,
					color: _this.settings.secondFontColor,
					backgroundColor: _this.settings.secondBgColor
				});
				// 二级菜单宽度
				$.each($firstLinks, function(index, val) {
					var $secondMenu = $(this).next('ul');
					$secondMenu.css('top', _this.settings.height);
					if ($secondMenu.width() + _this.settings.itemWidth < $firstLinks.width()) {
						$secondMenu.width($firstLinks.width());
					} else {
						$secondMenu.width($secondMenu.width() + _this.settings.itemWidth);
					}
				});
			}
			return _this;
		},
		setHoverCss: function() {
			var _this = this;
			// 一级菜单样式
			$firstLinks.hover(function() {
				$(this).css({
					color: _this.settings.firstHoverFontColor,
					backgroundColor: _this.settings.firstHoverBgColor
				})
			}, function() {
				$(this).css({
					color: _this.settings.firstFontColor,
					backgroundColor: _this.settings.firstBgColor
				})
			});
			// 二级菜单样式
			$sencondLinks.hover(function() {
				var $this = $(this);
				$this.css({
					color: _this.settings.secondHoverFontColor,
					backgroundColor: _this.settings.secondHoverBgColor
				});
				$this.parents('ul').first().prev().css({
					color: _this.settings.firstHoverFontColor,
					backgroundColor: _this.settings.firstHoverBgColor
				});
			}, function() {
				var $this = $(this);
				$this.css({
					color: _this.settings.secondFontColor,
					backgroundColor: _this.settings.secondBgColor
				});
				$this.parents('ul').first().prev().css({
					color: _this.settings.firstFontColor,
					backgroundColor: _this.settings.firstBgColor
				});
			});
		},
		responsiveLayout: function() {
			var _this = this,
				screenWidth = $(w).width(),
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
							.css('background', _this.settings.menuMaskColor).appendTo('.ve-menu')
							.after('<ul class="ve-menu-mobile"><li class="ve-menu-close"><div></div></li>' + $firstMenu.html() + '</ul>')
							.next().find('ul, li, a').removeAttr('style');
						// 遮罩层动画
						if (_this.settings.animate) {
							_this.animate($('.ve-menu-mask'), 'fade', 100);
							_this.animate($('.ve-menu-mobile'), 'fade', 300);
						}
						// 菜单事件 
						$('.ve-menu-mobile').children('li').on('click', function() {
							var speed = 0;
							// 二级菜单动画 
							if (_this.settings.animate) {
								speed = 200;
							}
							$(this).find('ul').toggle(speed).on('click', function(event) {
								return false;
							}).find('a').css({ //  一级菜单样式
								background: _this.settings.mSecondBgColor,
								color: _this.settings.mSecondFontColor
							});
						}).children('a').css({ // 二级菜单样式
							background: _this.settings.mFirstBgColor,
							color: _this.settings.mFirstFontColor
						});
						// 关闭按钮样式、事件
						$('.ve-menu-close').css('color', _this.settings.closeIconColor)
							.children('div').on('click', function() {
								// 关闭动画
								if (_this.settings.animate) {
									$('.ve-menu-mask').fadeOut(300);
									$('.ve-menu-mobile').fadeOut(100);
								} else {
									$('.ve-menu-mask').hide();
									$('.ve-menu-mobile').hide();
								}
							});
					}).children('div').css('background', _this.settings.menuIconColor);
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

			return _this;
		},
		supportFastClick: function() {
			if (this.isMobile) { // 在移动端打开页面，将事件触发改为click
				try {
					if (FastClick) {
						FastClick.attach(document.body); // 支持fastclick
					}
				} catch (e) {
					console.log('fastclick.js is not found.You are still using normal \'click\'');
				}
			} else { // 在PC端打开页面，事件触发仍为hover
				if (hasSecond) {
					this.setHoverCss();
				}
			}
			return this;
		},
		animate: function($ele, type, speed, showOrHide) {
			var style = {};
			switch (type) {
				case 'fade':
					$ele.css('opacity', 0);
					style.opacity = 1;
					break;
			}
			$ele.animate(style, speed, 'linear', function() {});
		}
	}

	// 将插件挂到jQuery下并初始化
	$.fn.menu = function(options) {
		var menu = new Menu(options);
		menu.setDefaultTheme()
			.setFirstMenu()
			.setSecondMenu()
			.responsiveLayout()
			.supportFastClick();
		$(window).resize(function(event) {
			menu.responsiveLayout()
		});

		return this;
	}

})(jQuery, window)