"use strict";
class Calculator {
    constructor(element = document.querySelector("div#calculator")) {
        this.buttons = [
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
        this.wide_btns = ["0"];
        this.height_btns = ["="];
        this._element = element;
        this._element.innerHTML = `
		<header class="calculator-display">
			<h2 class="calculator-title">Calculette TS</h2>
			<input class="display-box" type="text" id="result" data-role="display" disabled/>
		</header>
		<section class="buttons grid">
			${this.buttons
            .map(b => {
            if (b == "")
                return "<span></span>";
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
    get buttonElements() {
        return [
            ...this._element.querySelectorAll("section > button"),
        ];
    }
    get screen_content() {
        return this._element.querySelector("header.calculator-display > input.display-box").value;
    }
    set screen_content(value) {
        this._element.querySelector("header.calculator-display > input.display-box").value = value;
    }
    onButtonClick(e) {
        let value = e.target.value;
        switch (value) {
            case "ac":
                this.screen_content = "";
                return;
            case "=":
                if (this.screen_content != "") {
                    this.screen_content = window.math.evaluate(this.screen_content);
                }
                return;
            default:
                this.screen_content += value;
        }
    }
}
const calc = new Calculator();
