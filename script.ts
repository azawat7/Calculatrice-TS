class Calculator {
	_element: HTMLDivElement;
	buttons: string[] = [
		"ac",
		"",
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
	wide_btns: string[] = ["0"];
	height_btns: string[] = ["="];

	get buttonElements(): HTMLButtonElement[] {
		return [
			...this._element.querySelectorAll("section > button"),
		] as HTMLButtonElement[];
	}

	get screen_content(): string {
		return (
			this._element.querySelector(
				"header.calculator-display > input.display-box",
			) as HTMLInputElement
		).value;
	}

	set screen_content(value: string) {
		(
			this._element.querySelector(
				"header.calculator-display > input.display-box",
			) as HTMLInputElement
		).value = value;
	}

	constructor(
		element: HTMLDivElement = document.querySelector(
			"div#calculator",
		) as HTMLInputElement,
	) {
		this._element = element;

		this._element.innerHTML = `
		<header class="calculator-display">
			<h2 class="calculator-title">Calculette TS</h2>
			<input class="display-box" type="text" id="result" data-role="display" disabled/>
		</header>
		<section class="buttons grid">
			${this.buttons
				.map(b => {
					if (b == "") return "<span></span>";

					if (this.wide_btns.includes(b))
						return `<button class="wide" value="${b}">${b}</button>`;

					if (this.height_btns.includes(b))
						return `<button class="height" value="${b}">${b}</button>`;

					return `<button value="${b}">${b}</button>`;
				})
				.join("")}
		`;

		this.buttonElements.forEach(e => {
			e.addEventListener("click", e => this.onButtonClick(e));
		});
	}

	onButtonClick(e: MouseEvent) {
		let value = (e.target! as HTMLButtonElement).value;
		switch (value) {
			case "ac":
				this.screen_content = "";
				return;
			case "=":
				if (this.screen_content != "") {
					this.screen_content = (
						window as Window & typeof globalThis & { math: any }
					).math.evaluate(this.screen_content);
				}
				return;
			default:
				this.screen_content += value;
		}
	}
}

const calc = new Calculator();
