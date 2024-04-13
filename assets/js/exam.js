fetch(
    "https://ap-southeast-1.aws.services.cloud.mongodb.com/api/client/v2.0/app/data-duebb/auth/providers/anon-user/login",
    {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
    }
)
    .then((response) => response.json())
    .then((data) => {
        const accessToken = data.access_token;
        console.log("Access Token:", accessToken);

        let myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer " + accessToken);

        var reflowAuth = localStorage.getItem("reflowAuth");
        var parsedReflowAuth = JSON.parse(reflowAuth);
        var userId = parsedReflowAuth.profile.id;
        let raw = JSON.stringify({
            dataSource: "Cluster0",
            database: "spark",
            collection: "user-data",
            filter: {
                "user-id": userId,
            },
        });

        let requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch(
            "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-duebb/endpoint/data/v1/action/findOne",
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                const parsedResult = JSON.parse(result);
                const owned = parsedResult.document.owned;
                if (!owned.includes(2)) {
                    window.location.href = "./404.html";
                    console.log("no subscription");
                }
            })
            .catch(() => {
                window.location.href = "./404.html";
            });
        myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", "Bearer " + accessToken);

        var urlParams = new URLSearchParams(window.location.search);
        var activity_id = urlParams.get("activity");

        console.log(activity_id);
        raw = JSON.stringify({
            dataSource: "Cluster0",
            database: "spark",
            collection: "activities",
            filter: {
                activity_id: activity_id,
            },
        });

        requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow",
        };

        fetch(
            "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-duebb/endpoint/data/v1/action/findOne",
            requestOptions
        )
            .then((response) => response.text())
            .then((result) => {
                console.log(result);
                const parsedResult = JSON.parse(result);
                const activityName = parsedResult.document.title;
                let answers = [];
                $(".activity-title").text(activityName);
                let options = [];


                for (let i = 1; i <= 3; i++) {
                    let question = parsedResult.document.questions[i-1][0];
                    $(".activity-desc-" + i).html(question);
                    for (let z = 1; z <= 4; z++) {
                        options.push(parsedResult.document.questions[i-1][z]);
                    }
                    console.log(options);

                    function shuffle(array) {
                        var currentIndex = array.length, temporaryValue, randomIndex;

                        // While there remain elements to shuffle...
                        while (0 !== currentIndex) {

                            // Pick a remaining element...
                            randomIndex = Math.floor(Math.random() * currentIndex);
                            currentIndex -= 1;

                            // And swap it with the current element.
                            temporaryValue = array[currentIndex];
                            array[currentIndex] = array[randomIndex];
                            array[randomIndex] = temporaryValue;
                        }

                        return array;
                    }
                    let shuffledOptions = shuffle(options); // Shuffle the array

                    for (let j = 'a'.charCodeAt(0); j <= 'd'.charCodeAt(0); j++) {
                        let option = String.fromCharCode(j);
                        let selector = ".option" + i + option;
                        // Do something with the selected element
                        $(selector).html(shuffledOptions[j - 'a'.charCodeAt(0)]);

                    }
                    answers.push(parsedResult.document.questions[i-1][1]);
                    options = [];
                }

                console.log(answers)
                console.log("done");
                $(".loading").hide();
            })
            .catch((error) => {
                console.error("An error occurred:", error);
                $(".loading").hide();

            });
    })
    .catch((error) => {
        console.error("An error occurred:", error);
        $(".loading").hide();

    });
