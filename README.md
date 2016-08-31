## menu Plugin V 1.0 

#### 一、插件说明

1. menu是一款基于jQuery的轻量级菜单插件，可以根据喜好进行个性化的UI定制。  
兼容性：支持Chrome、Safari、Firefox、IE8+（暂不支持IE7及以下版本）。

2. 参数说明  
  - 一级菜单参数示例
    - firstFontSize: '16px',  
    - firstFontColor: '#fff',  
    - firstBgColor: '#0E90D2',  
    - firstHoverFontColor: '#fff',  
    - firstHoverBgColor: '#0C79B1',

  - 二级菜单参数示例
    - secondFontSize: '16px',  
    - secondFontColor: '#fff',  
    - secondBgColor: '#0E90D2',  
    - secondHoverFontColor: '#fff',  
    - secondHoverBgColor: '#0C79B1',

  - 菜单宽度（除去自身内容的宽度之外，附加的横向宽度。一二级菜单相同）  
    itemWidth: 20,

  - 菜单间隙（仅限一级菜单）  
    itemMargin: 1,

  - 默认主题  
  theme: 'blue'     // 包含：blue、dark

3. [效果展示](http://dreamon324.github.io/menu/src/demo.html)

#### 二、使用说明

1. 获取 menu  

	[直接下载](https://github.com/DreamOn324/menu/archive/1.1.zip)

2. 引入 menu 样式
	```html
	<link rel="stylesheet" href="/path/menu.min.css"/>
	```
  
3. 在 jQuery 之后引入 menu 插件
	```html
	<script src="/path/jquery-1.12.2.min.js"></script>
	<script src="/path/menu.min.js"></script>
	```

4. 粘贴html代码块
	```html
	<div class="nav-menu">     
		<ul>
			<li><a href="#">link</a></li>
			<li><a href="#">link</a>
				<ul>  
					<li><a href="#">affdf</a></li>
					<li><a href="#">basdf</a></li>
					<li><a href="#">casdfasdf</a></li> 
				</ul>
			</li>
			<li><a href="#">link</a></li>
			<li><a href="#">link</a></li>
			<li><a href="#">link</a></li>
		</ul>
	</div>
	```
  
5. 初始化 menu
	```js
	$(function() {
	  $('.nav-menu').menu({
	    // settting...
	  });
	});
	```
