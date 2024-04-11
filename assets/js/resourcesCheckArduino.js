const ARDUINO = 1771530423;

fetch("https://ap-southeast-1.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-duebb/auth/providers/anon-user/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    }
})
.then(response => response.json())
.then(data => {
    const accessToken = data.access_token;
    console.log("Access Token:", accessToken);

    const myHeaders = new Headers();
    myHeaders.append("Accept", "application/json");
    myHeaders.append("Authorization", "Bearer " + accessToken);

    var reflowAuth = localStorage.getItem('reflowAuth');
    var parsedReflowAuth = JSON.parse(reflowAuth);
    var userId = parsedReflowAuth.profile.id;
    const raw = JSON.stringify({
        "dataSource": "Cluster0",
        "database": "spark",
        "collection": "user-data",
        "filter": {
            "user-id": userId
        }
    });

    const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow"};

    fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/data-duebb/endpoint/data/v1/action/findOne", requestOptions)
        .then((response) => response.text())
        .then((result) => {
    const parsedResult = JSON.parse(result);
    const owned = parsedResult.document.owned;
            if (!owned.includes(ARDUINO)) {
                window.location.href = "./../../../../404.html";
                console.log("Arduino");
            }
})
        .catch((error) => {
            window.location.href = "./../../../../404.html";
        });
})
.catch(() => {
    window.location.href = "./../../../../404.html";
});