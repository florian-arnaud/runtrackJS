//J'ai utilisé un guide pour cet exercice. Lien > https://gomakethings.com/how-to-create-a-konami-code-easter-egg-with-vanilla-js/
let hiddenContent = document.getElementsByTagName("main")[0]
var pattern = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
var current = 0;

// Listen for keydown events
document.addEventListener('keydown', (event) =>
{
      	// If the key isn't in the pattern, or isn't the current key in the pattern, reset
	if (pattern.indexOf(event.key) < 0 || event.key !== pattern[current]) {
		current = 0;
		return;
	}

	// Update how much of the pattern is complete
	current++;

	// If complete, alert and reset
	if (pattern.length === current) {
		current = 0;
            hiddenContent.setAttribute("id","laplateforme_")
	}
});