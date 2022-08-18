// HEADER STYLING
var header = document.getElementById('header');
window.addEventListener('scroll', function() {
	//on scroll
	if (pageYOffset > header.offsetHeight) {
		header.classList.add('fixed');
	} else {
		header.classList.remove('fixed');
	}
});

// TERMS
const closebutton = document.getElementById('terms-popover-close-button');
closebutton.onclick = function (e) {
	e.preventDefault();
	document.getElementById('terms-popover').classList.remove('show');
}

// TESTIMONIALS
var longest_row_width = 0;
var rows = document.getElementsByClassName('testimonials-row');
var testimonials_box = document.getElementById('testimonials-content');
//find longest row
Array.from(rows).forEach((row) => {
	if (row.offsetWidth > longest_row_width) longest_row_width = row.offsetWidth;
});
//set all rows same width
Array.from(rows).forEach((row) => {
	row.style.width = longest_row_width;
});

//set scroll position
testimonials_box.scrollLeft = (longest_row_width - testimonials_box.offsetWidth)/2;

