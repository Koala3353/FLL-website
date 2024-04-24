const READING = "361";
const PHOTOGRAPHY = "362";
const MATH = "363";
const PROGRAMMING = "364";
const DRAWING = "365";

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
    var hobbyId = urlParams.get("hobby");

    console.log(hobbyId);
    raw = JSON.stringify({
      dataSource: "Cluster0",
      database: "spark",
      collection: "hobbies",
      filter: {
        hobby_id: hobbyId,
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
        const hobbyName = parsedResult.document.hobby_name;
        const hobbyDesc = parsedResult.document.desc;
        const activities = parsedResult.document.activities;
        let hobbyImg = "";
        $(".hobby-title").text(hobbyName);
        $(".hobby-desc").text(hobbyDesc);
        if (hobbyId === READING) {
          hobbyImg = "./assets/img/hobbies/books.webp";
        }

        if (hobbyId === PHOTOGRAPHY) {
          hobbyImg = "./assets/img/hobbies/photography.jpg";
        }

        if (hobbyId === MATH) {
            hobbyImg = "./assets/img/hobbies/anatomy.webp";
        }

        if (hobbyId === PROGRAMMING) {
          hobbyImg = "./assets/img/hobbies/programmer1.png";
        }

        if (hobbyId === DRAWING) {
          hobbyImg = "./assets/img/hobbies/psychology.webp";
        }

        // Define the constant parts of the HTML content
        let htmlStart = `
<div class="act-section">
        <div class="act-container">
          <article class="act-card">
            <div class="act-background">
              <img
                src="`;
        let html1 = `"
                alt="Fetch API GraphQL Preview"
              />
            </div>
            <div class="act-content">
              <div class="act-card-header">
                <div class="act-card-type">`;

        let html2 = `
        </div>
                <div class="act-latest-article">
                  Lesson #`;

        let html3 = `
                </div>
              </div>
              <div class="act-card-content">
                <h2>`;

        let html4 = `</h2>
                <p>`;

        let html5 = `</p>
              </div>
              <div class="act-blog-preview__bottom">
                <div class="act-blog-author">
                  <img src="` + hobbyImg + `" alt="Avatar" />
                  <div class="act-blog-author__name">
                    <div class="act-blog-author__name">` + hobbyName +
        `</div>
                  </div>
                </div>
                <a
                  class="act-go-to-article-button"
                  href="./specificactivity.html?activity=`;

        let html6 = `"
                  title="Activity"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler icon-tabler-arrow-narrow-right"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M5 12l14 0" />
                    <path d="M15 16l4 -4" />
                    <path d="M15 8l4 4" />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>`;

          async function fetchActivityStatus(userId, activityElement) {
              let url = "https://ap-southeast-1.aws.data.mongodb-api.com/app/data-duebb/endpoint/activitystatus?arg1=" + userId + "&arg2=" + activityElement;
              let response = await fetch(url);
              let data = await response.json();
              return data;
          }

          async function createHtmlContent(activities, hobbyName, hobbyImg, userId) {
              for (let i = 0; i < activities.length; i++) {
                  var activityElement = activities[i][0];
                  console.log(activityElement);
                  let booleanValue = await fetchActivityStatus(userId, activityElement);
                  let rewards = booleanValue === true ? "Completed" : "30 credits";
                  console.log(booleanValue);

                  let htmlContent =
                      htmlStart + activities[i][3] + html1 + rewards + html2 + (i+1).toString() +
                      html3 + activities[i][1] + html4 + activities[i][2] +
                      html5 + activityElement + html6;

                  // Select the div with the class 'activity-load'
                  let activityLoadDiv = document.querySelector(".activity-load");

                  // Add the HTML content to the div
                  activityLoadDiv.innerHTML += htmlContent;
              }
          }

          createHtmlContent(activities, hobbyName, hobbyImg, userId);
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
