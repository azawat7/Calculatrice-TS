function clearScreen() {
	const screen =
		(document.getElementById("result") as HTMLInputElement) || null;
	if (screen != null) {
		screen.value = "";
	}
}

function display(value) {
	const screen =
		(document.getElementById("result") as HTMLInputElement) || null;
	if (screen != null) {
		screen.value += value;
	}
}

function calculate() {
	var p = (document.getElementById("result") as HTMLInputElement) || null;
	if (p != null) {
		var q = eval(p.value);
		p.value = q;
	}
}
