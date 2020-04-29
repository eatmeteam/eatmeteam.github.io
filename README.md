



## [contributors](https://github.com/eatmeteam/eatmeteam.github.io/graphs/contributors)

 - [cjtim](https://github.com/orgs/eatmeteam/people/cjtim)
 - [tong-gg](https://github.com/tong-gg)
 - [pp-chjz](https://github.com/pp-chjz)

# Note
## Navigation bar store in one file
 - PRO : Easy to update navigation bar in future.
 - CON : SEO Ranking impact
### Method
 - [x] Using `document.write()` by javascript **(current use on index.html)**
 
 - [ ] Using Ajax to load navbar.html 

#### [1. Using `document.write()` by javascript](https://stackoverflow.com/a/7055046/11932657)
 - Create new navbar.js (with inside ``document.write(`insertyourhtmlhere`)``)
	```
	<!-- Navigation Bar -->
	<script  src="./navbar.js"></script>
	<!-- End Navigation Bar -->
	```
#### [2. Using Ajax to load navbar.html](https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages) 
- Create navbar.html
- **Need to update everypage to Full version of query** (query.min does not come with Ajax)
	```
	<!--Navigation bar-->
	<div id="nav-placeholder">

	</div>

	<script>
	$(function(){
	  $("#nav-placeholder").load("./navbar.html");
	});
	</script>
	<!--end of Navigation bar-->
	```
