let btn = document.querySelector("#submit-btn");

btn.onclick = (event) => {
    event.preventDefault(); // Prevent form submission
    alert("Form has been submitted!");
}
