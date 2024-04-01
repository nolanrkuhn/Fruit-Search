document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#fruit');
    const suggestionsList = document.querySelector('.suggestions ul');

	const fruits = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

	function search(str) {
	let results = [];
	const searchString = str.toLowerCase();
	results = fruits.filter(fruit => 
		fruit.toLowerCase().includes(searchString)
	  );
	return results;
	}

	function searchHandler(e) {
	const userInput = e.target.value;
	const results = search(userInput);
	showSuggestions(results);
	}

	function highlightSuggestion(e) {
	suggestionsList.querySelectorAll('li').forEach(item => {
		item.classList.remove('highlighted');
	});
	e.target.classList.add('highlighted');
	}

	function showSuggestions(results) {
	suggestionsList.innerHTML = '';
	results.forEach(result => {
		const item = document.createElement('li');
		item.textContent = result;
		item.addEventListener('click', useSuggestion)
		suggestionsList.appendChild(item);
	});
	suggestionsList.parentNode.style.display = results.length > 0 ? 'block' : 'none';
	}
	document.getElementById('fruit').addEventListener('input', function(e) {
    const inputVal = e.target.value;
    const results = search(inputVal); 
    showSuggestions(results, inputVal);
	});

	function useSuggestion(e) {
			const selectedText = e.target.textContent;
			input.value = selectedText;
			suggestionsList.innerHTML = '';
			suggestionsList.parentNode.style.display = 'none';
		}

	input.addEventListener('keyup', searchHandler);
});