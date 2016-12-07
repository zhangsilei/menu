## menu Plugin V 0.15

### V 0.15版本说明：
	修复连续快速点击时的bug，增加渐隐渐现效果(fade)，增加下拉动画效果(slide)。

### 历史版本说明：

####v0.14：
	移动端添加了动画效果

####v0.13：
	代码重构，方便功能拓展。

### 一、插件说明

1. menu是一款基于jQuery的轻量级菜单插件，可以根据喜好进行个性化的UI定制。  
兼容性：支持Chrome、Safari、Firefox、IE7+。

2. 支持响应式布局，可在移动端使用。 

3. 默认使用fastclick.js，若页面中未引入fastclick.js也不影响功能，只是会降级到click事件，会有300ms延迟你懂的。

4. 参数说明  

	**一级菜单参数示例：**
    - `firstFontSize: '16px'`（字体大小）  
    - `firstFontColor: '#fff'`（字体颜色） 
    - `firstBgColor: '#0E90D2'`（背景颜色）
    - `firstHoverFontColor: '#fff'`（鼠标悬浮字体颜色）
    - `firstHoverBgColor: '#0C79B1'`（鼠标悬浮背景颜色）
    - `itemMargin: 1`（同级菜单间的间隙，默认为1px）
    
    **二级菜单参数示例：**
    - `secondFontSize: '16px'`（字体大小）  
    - `secondFontColor: '#fff'`（字体颜色） 
    - `secondBgColor: '#0E90D2'`（背景颜色）
    - `secondHoverFontColor: '#fff'`（鼠标悬浮字体颜色）
    - `secondHoverBgColor: '#0C79B1'`（鼠标悬浮背景颜色）
     
	**一、二级公用参数示例：**
	- `height`:（菜单宽高度，默认40px）  
	- `itemWidth: 20`（菜单宽度：除去自身内容的宽度之外，附加的横向宽度，默认20px） 
  	- `theme: 'blue'`（主题：blue | dark，默认为blue）    

    **移动端参数示例：**
  	- `menuIconColor: '#000'`（小屏幕下菜单按钮的颜色，默认黑色）
  	- `menuMaskColor: '#000'`（小屏幕下点击菜单按钮后的遮罩层颜色，默认黑色）
  	- `mFirstBgColor: '#000'`（小屏幕下一级菜单背景颜色，默认黑色）
  	- `mFirstFontColor: '#000'`（小屏幕下一级菜单字体颜色，默认白色）
  	- `mSecondBgColor: '#000'`（小屏幕下二级菜单背景颜色，默认#222）
  	- `mSecondFontColor: '#000'`（小屏幕下二级菜单字体颜色，默认白色）
  	- `closeIconColor: '#fff'`（小屏幕下关闭按钮颜色，默认白色）
  	- `animate: false`（小屏幕下的动画效果，默认关闭。暂时只支持：'fade'）
  	- `speed: 200`（小屏幕下的动画速度，随animate属性而开合。支持：'fade'，'slide'，单位：ms）

5. [效果展示](http://dreamon324.github.io/menu/demo.html)

### 二、使用说明

1. 获取 menu：[直接下载](https://github.com/DreamOn324/menu/archive/v0.15.zip)

2. 引入 menu 样式  
	```html
	<link rel="stylesheet" href="/path/menu.css"/> 
	```
  
3. 在 jQuery 之后引入 menu 插件  
	```html
	<script src="/path/jquery-1.12.2.min.js"></script>
	<script src="/path/menu.js"></script>
	```

4. 粘贴html代码块  
	```html
	<div class="ve-menu">     
		<ul class="ve-menu-pc">
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
