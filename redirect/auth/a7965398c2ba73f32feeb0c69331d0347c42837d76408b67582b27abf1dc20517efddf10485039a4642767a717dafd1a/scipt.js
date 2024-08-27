function checkPassword() {
    fetch('0e874a77969412fd2d8ccd205dbe39f3664b5b8e01030fd46f6a920e785c797933bc270bb6dd4be6d4d9097d92facbcf.json')
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
