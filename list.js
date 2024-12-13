const input = document.querySelector("input");
const addBtn = document.querySelector("button");
const list = document.querySelector("ul");
const listBox = document.querySelector(".list")

addBtn.addEventListener("click", () => {
    let task = input.value;
    if (task) {
        let listItems = document.createElement("li");
        
        listItems.innerHTML = task;
        list.appendChild(listItems);
        input.value = ""
    }
    else {
        alert("type something you lazy fool!")
    }
});
