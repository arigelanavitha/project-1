function showName() {
    let nameInput = document.getElementById("name").value;
    document.getElementById("dName").textContent = nameInput;

}

function showGender() {
    let genderSelect = document.getElementById("gender");
    let selectedGender = genderSelect.options[genderSelect.selectedIndex].value;
    document.getElementById("dGender").textContent = selectedGender;
}

function showEmail() {
    let emailInput = document.getElementById("email").value;
    document.getElementById("dEmail").textContent = emailInput;
}

function showMobile() {
    let mobileInput =  document.getElementById("mobile").value;
    document.getElementById("dMobile").textContent = mobileInput;
}

function resetForm() {
    // Reset all the form elements to default values (blank "")
    document.getElementById("name").value = "";
    document.getElementById("gender").selectedIndex = 0;
    document.getElementById("mobile").value="";
    document.getElementById("email").value="";
}

function resetDisplay() {
    // Reset all the headings (h1, h2, h3, h4) to blank values
    document.getElementById("dName").textContent = "";
    document.getElementById("dGender").textContent = "";
    document.getElementById("dMobile").textContent="";
    document.getElementById("dEmail").textContent="";
}