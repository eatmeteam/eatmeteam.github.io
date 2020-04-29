


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

#### 1. Using `document.write()` by javascript
 - Please replace navigation bar code in every page with these.
	```
	<!-- Navigation Bar -->
	<script  src="./navbar.js"></script>
	<!-- End Navigation Bar -->
	```
#### 2. Using Ajax to load navbar.html 
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
