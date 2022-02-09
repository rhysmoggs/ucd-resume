function fetchGitHubInformation(event) {
    var username = $("#gh-username").value();
    if (!username) { //if not username
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);
}