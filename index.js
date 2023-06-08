const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const heading = document.getElementById("heading");

//dark/light mode 
darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    if (darkModeToggle.checked) {
        heading.style.color = "#fff";
    } else {
        heading.style.color = "#D2001A";
    }
});

//adding task 
document.querySelector(".add").addEventListener("click", () => {
    const inputTxt = document.querySelector(".input");
    const addList = document.querySelector(".addList");

    if (inputTxt.value === "") {
        return;
    }

    const li = document.createElement('li');
    li.innerHTML = `<span>${inputTxt.value}</span><button class="delete">x</button>`;
    addList.appendChild(li);
    inputTxt.value = "";

    const deleteButtons = li.querySelectorAll(".delete");
    deleteButtons.forEach(button => {
        button.addEventListener("click", () => {
            button.parentNode.remove();
        });
    });
});

//delete task
const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        button.parentNode.remove();
    });
});