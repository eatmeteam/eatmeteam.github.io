## [Contributors](https://github.com/eatmeteam/eatmeteam.github.io/graphs/contributors)

 - [cjtim](https://github.com/orgs/eatmeteam/people/cjtim)
 - [tong-gg](https://github.com/tong-gg)
 - [pp-chjz](https://github.com/pp-chjz)

# Note
## How to open localhost server
<details><summary>Click here to expand</summary>
<p>

 - cd to directory
 - Run command
 `
 python -m http.server 80
`	    
	**if not working you could try** 
	`
	python3 -m http.server 80
	`
- open browser [http://localhost](http://localhost) or [http://127.0.01](http://127.0.01)
</p>
</details>

## Navigation bar store in one file
 - PRO : Easy to update navigation bar in future.
 - CON : SEO Ranking impact
### Method
 - [x] Using `document.write()` by javascript **(current use on index.html)**
 
 - [ ] Using Ajax to load navbar.html 
 - [ ] Using XMLHttpRequest to load navbar.html
<details><summary>Click here to expand</summary>
<p>


#### [1. Using `document.write()` by javascript](https://stackoverflow.com/a/7055046/11932657)
 - Create new navbar.js (with inside ``document.write(`insertyourhtmlhere`)``)
	```
	<!-- Navigation Bar -->
	<script  src="./navbar.js"></script>
	<!-- End Navigation Bar -->
	```
#### [2. Using Ajax to load navbar.html](https://stackoverflow.com/questions/31954089/how-can-i-reuse-a-navigation-bar-on-multiple-pages) 
- Create navbar.html and navbar.js
- **CON : Need to update everypage to Full version of query** (query.min does not come with Ajax)
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
#### [3.Using XMLHttpRequest to load navbar.html](https://stackoverflow.com/a/40201233/11932657)
- Create navbar.html and navbar.js
- in navbar.js insert these code
- **PRO : can use with jquery.min**
- **CON : XMLHttpRequest cannot open (File://) file need to be on server or localhost server**
	````
	function  readFile(file) {
		var  f = new  XMLHttpRequest();
		f.open("GET", file, false);
		f.onreadystatechange = function () {
			if(f.readyState === 4) {
				if(f.status === 200 || f.status == 0) {
					document.write(f.responseText)
				}
			}
		}
		f.send(null);
	}
	readFile('./navbar.html');
	````
</p>
</details>
