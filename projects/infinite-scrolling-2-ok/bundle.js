/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./script.js":
/*!*******************!*\
  !*** ./script.js ***!
  \*******************/
/***/ (() => {

eval("var imageContainer = document.querySelector('.image-container');\nvar loader = document.querySelector('.loader');\n\nvar imageCount = 30;\nvar apiKey = \"aJxAMhnsvA4dAe5EsdeN5Ol6OrlX25fyZYO4jzrEYoA\";\nvar apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${imageCount}`;\nvar photos = [];\nvar loadCount = 0;\nvar readyToShow = false;\nvar totalImagesCount = 0;\n\nvar imageLoaded = () => {\n  loadCount++;\n\n  if (loadCount >= imageCount) {\n    readyToShow = true;\n    loader.style.display = 'none';\n    imageContainer.style.display = 'flex';\n  }\n  else {\n    loader.style.display = 'flex';\n    imageContainer.style.display = 'none';\n  }\n}\n\nvar displayePhotos = () => {\n  totalImagesCount = photos.length;\n\n  photos.forEach(photo => {\n    var {alt_description, links, urls} = photo;\n    var item = document.createElement('a');\n    var image = document.createElement('img');\n\n    item.setAttribute('href', links.html);\n    item.setAttribute('target', '_blank');\n\n    image.title = alt_description;\n    image.src = urls.regular;\n    image.alt = alt_description;\n\n    image.addEventListener('load', () => {\n      imageLoaded();\n    });\n\n    item.appendChild(image);\n    imageContainer.appendChild(item);\n  });\n}\n\nvar getPhotos = async() => {\n  try {\n    var response = await fetch(apiUrl);\n    photos = await response.json();\n\n    displayePhotos();\n  }\n  catch (error) {\n    console.log(error);\n  }\n}\n\nwindow.addEventListener('scroll', () => {\n  if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000 && readyToShow) {\n    readyToShow = false;\n\n    getPhotos();\n  }\n});\n\ngetPhotos();\n\n\n//# sourceURL=webpack://infinite-scrolling-2-ok/./script.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./script.js"]();
/******/ 	
/******/ })()
;