function checkPassword() {
    fetch('passwords.json')
        .then(response => response.json())
        .then(data => {
            if (md5(document.getElementById("password").value) === data.hashedPassword) {
                document.getElementById("message").textContent = "Password is correct!";
                setTimeout(() => {
                        window.location.href = data.redirectURL;
                    }, 2000);
            } else {
                window.location.replace = "../";
            }
        })
        .catch(error => console.warn('Error fetching JSON:', error));
}
