function clearScreen() {
    const screen = document.getElementById("result") || null;
    if (screen != null) {
        screen.value = "";
    }
}
function display(value) {
    const screen = document.getElementById("result") || null;
    if (screen != null) {
        screen.value += value;
    }
}
function calculate() {
    var p = document.getElementById("result") || null;
    if (p != null) {
        var q = eval(p.value);
        p.value = q;
    }
}
