## Menu.js v0.17

### V 0.17版本说明： 
	修复主题参数失效bug；
	修复公共参数height导致的二级菜单高度间隙问题；

<!-- ### 历史版本说明：

####v0.15：
	修复连续快速点击时的bug，增加渐隐渐现效果(fade)，增加下拉动画效果(slide)。

####v0.14：
	移动端添加了动画效果

####v0.13：
	代码重构，方便功能拓展。 -->

### 一、插件说明

1. Menu.js是一款基于jQuery的轻量级响应式菜单插件，可以根据喜好进行个性化的UI定制。  
兼容性：支持Chrome、Safari、Firefox、IE7+ 等主流浏览器

2. 支持响应式布局，可在移动端使用。 

3. 默认加载 fastclick.js，若页面中未引入也无影响，只是会降级到原生click事件，会有300ms延迟你懂的。

4. 参数说明  

	**PC端参数示例：**

	*一级菜单参数示例：*  

    - `fontSize: '16px'`（字体大小）
    - `fontColor: '#fff'`（字体颜色）    
    - `bgColor: '#0E90D2'`（背景颜色）  
    - `hoverFontColor: '#fff'`（鼠标悬浮字体颜色）  
    - `hoverBgColor: '#0C79B1'`（鼠标悬浮背景颜色）  
    - `itemSpace: 1`（菜单间隙，默认1px）  

    *二级菜单参数示例：*  
	
    - `subFontSize: '16px'`（字体大小）  
    - `subFontColor: '#fff'`（字体颜色）  
    - `subBgColor: '#0E90D2'`（背景颜色）  
    - `subHoverFontColor: '#fff'`（鼠标悬浮字体颜色）  
    - `subHoverBgColor: '#0C79B1'`（鼠标悬浮背景颜色）  

	*公用参数示例：*  

	- `height: 40`（菜单高度，默认40px）  
	- `itemWidth: 20`（菜单宽度：除去自身内容的宽度之外，附加的横向宽度，默认20px） 
	- `theme: 'blue'`（主题：blue | dark，默认为blue）    

    **移动端参数示例：**

	*一级菜单参数示例：*

	- `mBgColor: '#000'`（背景颜色）  
	- `mFontColor: '#000'`（字体颜色）  

	*二级菜单参数示例：*  

	- `mSecondBgColor: '#000'`（背景颜色）  
	- `mSecondFontColor: '#000'`（字体颜色）  

	*公用参数示例：*  
	
	- `mMaskColor: '#000'`（遮罩层颜色）  
	- `mMenuBtnColor: '#000'`（菜单按钮颜色）  
	- `closeIconColor: '#fff'`（关闭按钮颜色）  
	- `animate: false`（动画效果，默认关闭。支持：'fade'）  
	- `speed: 200`（动画速度，随animate属性而开合。支持：'fade'、'slide'，单位：ms）  

5. [效果展示](https://zhangsilei.github.io/demo/menu/index)  

### 二、使用说明

1. 获取 menu：[直接下载](https://github.com/zhangsilei/menu/archive/v0.17.zip)

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
	<div class="ve-menu">     
	  <ul class="ve-menu-pc">
	    <li><a href="#">link</a></li>
	    <li><a href="#">link</a>
		  <ul>  
		    <li><a href="#">aaa</a></li>
		    <li><a href="#">bbb</a></li>
		    <li><a href="#">ccc</a></li> 
		  </ul>
	    </li>
	    <li><a href="#">link</a></li>
	    <li><a href="#">link</a></li>
	  </ul>
	</div>
	  ```
  
5. 初始化 menu
	```js
	$(function() {
	  $('.ve-menu').menu({
	    // settting...
	  });
	});
	```
