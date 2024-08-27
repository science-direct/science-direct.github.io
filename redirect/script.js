function logout(Reason){
      document.querySelector('p').textContent = 'Invalid query parameter.';
      document.querySelector('h3').textContent = 'Unable to redirect.';
      document.getElementById('spinner').style.visibility = 'hidden';
      document.querySelector('img').style.display = 'block';
      console.warn("Unable to execute due to error("+Reason+").")
      localStorage.setItem("woodytai_toRedirectPage", "");
}

fetch('websites.json')
  .then(response => response.json())
  .then(data => {
    const redirectDict = data;
    const queryParam = window.location.href.split('?')[1];
    if (queryParam in redirectDict) {
      localStorage.setItem("woodytai_toRedirectPage", redirectDict[queryParam]);
      window.location.replace("loading.html");
    } else {
      localStorage.clear();
      logout("Data not located");
    }
  })
  .catch(error => {
    logout("Unable to fetch websites.json: " + error)
  });

