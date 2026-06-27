function validateForm() {

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let course = document.getElementById("course").value;

    if (name === "") {
        alert("Please enter your name.");
        return false;
    }

    if (email === "") {
        alert("Please enter your email address.");
        return false;
    }

    if (phone === "") {
        alert("Please enter your mobile number.");
        return false;
    }

    if (course === "") {
        alert("Please select a course.");
        return false;
    }

    alert("Registration submitted successfully!");

    return true;
}