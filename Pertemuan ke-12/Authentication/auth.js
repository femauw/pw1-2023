function LogIn() {
    let nama = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    const gif = document.querySelector(".gif");

    if (nama === "Faqih Murobbie" & email === "murobbiefaqih@gmail.com" & password === "murobbie") {
        window.location.href = "success.html";
    } else {
        alert("User not Found!!!!")
    }
}