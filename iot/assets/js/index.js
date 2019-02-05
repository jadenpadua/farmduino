
function setActivePage(page_id) {
	var items = document.querySelector('navbar').children;

	for (i = 1; i <items.length; i++) {
		items[i].classList.remove('active');
	}
	document.getElementById(page_id).classList.add('active');
}
