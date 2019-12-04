

function change() {
    var colors = ["blue", "green", "red", "purple", "#E6E6FA",
"#D8BFD8", "#ee7600", "#8fbc8f", "#A9A9A9", "yellow", "silver", "black  "];
    var randomize = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomize;
}