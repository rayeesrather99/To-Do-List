const darkModeToggle = document.getElementById("dark-mode-toggle");
const body = document.body;
const heading = document.getElementById("heading");

darkModeToggle.addEventListener("change", () => {
    body.classList.toggle("dark-mode");
    if (darkModeToggle.checked) {
        heading.style.color = "#fff";
    } else {
        heading.style.color = "#D2001A";
    }
});

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

// remove task 
const deleteButtons = document.querySelectorAll(".delete");
deleteButtons.forEach(button => {
    button.addEventListener("click", () => {
        if(confirm("Are you sure!")){
            button.parentNode.remove();
        }
        
    });
});

//search button 
    
    const searchInput = document.querySelector('.search-input');
    searchInput.addEventListener('keyup', filterTasks);

    function filterTasks() {
        const searchTerm = searchInput.value.toLowerCase();

        // all the list items
        const listItems = document.querySelectorAll('.addList li');

        // Iterate over each item in the list
        listItems.forEach((item) => {
            const taskName = item.querySelector('span').textContent.toLowerCase();

            // taskName.includes(searchTerm) -->[ here it means ,is the taskname that appeared in search input is in the list of items if yes then it will displayed otherwise none]
            if (taskName.includes(searchTerm)) {
                item.style.display = 'flex'; // Show the list item
            } else {
                item.style.display = 'none'; // Hide the list item
            }
        });
    }
