const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const container = document.getElementById("todo-list");


form.addEventListener("submit", function (e) {
    e.preventDefault();
    const element = document.createElement("li");
    element.innerText = input.value;

    element.addEventListener("dblclick", function(e) {
        e.preventDefault();
        e.target.style.textDecoration = "line-through";
    });
    container.append(element);
    form.reset();
    input.focus();
});




