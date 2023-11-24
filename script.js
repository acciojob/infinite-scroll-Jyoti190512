//your code here!
document.addEventListener("DOMContentLoaded", function () {
    const infiList = document.getElementById("infi-list");

    // Function to add new list items
    function addListItem() {
        const newItem = document.createElement("li");
        newItem.textContent = "List item " + (infiList.childElementCount + 1);
        infiList.appendChild(newItem);
    }

    // Function to check if the user has reached the bottom of the list
    function isScrolledToBottom() {
        return infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight;
    }

    // Function to handle scroll events
    function handleScroll() {
        if (isScrolledToBottom()) {
            // When user reaches the bottom of the list, add new list items
            addListItem();
            addListItem();
        }
    }

    // Add initial list items
    for (let i = 1; i <= 10; i++) {
        addListItem();
    }

    // Add event listener for scrolling
    infiList.addEventListener("scroll", handleScroll);
});


