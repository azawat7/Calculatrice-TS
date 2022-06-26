function clearScreen() {
	const screen = document.getElementById("result") as HTMLInputElement;

	screen.value = "";
}

function display(value) {
	const screen = document.getElementById("result") as HTMLInputElement;

	screen.value += value;
}

function calculate() {
	var p = document.getElementById("result") as HTMLInputElement;

	var q = eval(p.value);
	p.value = q;
}

class Calculator {
	constructor() {}

	init(): void {
		var htmlString = "";
		var calculator = document.getElementById("calculator");
		const buttons = [
			"ac",
			"span",
			"/",
			"*",
			"7",
			"8",
			"9",
			"-",
			"4",
			"5",
			"6",
			"+",
			"1",
			"2",
			"3",
			"=",
			"0",
			".",
		];

		htmlString += `<header class="calculator_display">`;
		htmlString += `<h2 class="calculator_title">Calculette TS</h2>`;
		htmlString += `<input class="display-box" type="text" id="result" data-role="display" disabled/>`;
		htmlString += `</header>`;

		htmlString += `<section class="buttons grid">`;
		for (var i = 0; i < buttons.length; i++) {
			if (buttons[i] == "span") {
				htmlString += "<span></span>";
			} else if (buttons[i] == "0") {
				htmlString += `<button class="zero" onclick="display('${buttons[i]}')" value="${buttons[i]}">${buttons[i]}</button>`;
			} else if (buttons[i] == "=") {
				htmlString += `<button onclick="calculate()" class="equals" value="${buttons[i]}">${buttons[i]}</button>`;
			} else if (buttons[i] == "ac") {
				htmlString += `<button onclick="clearScreen()" value="${buttons[i]}">AC</button>`;
			} else {
				htmlString += `<button onclick="display('${buttons[i]}')" value="${buttons[i]}">${buttons[i]}</button>`;
			}
		}
		htmlString += `</section>`;

		calculator.innerHTML = htmlString;
	}
}

const calc = new Calculator();
calc.init();
