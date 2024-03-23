const dropzoneBox = document.getElementsByClassName("dropzone-box")[0];
const inputFiles = document.querySelectorAll(
  ".dropzone-area input[type='file']"
);

const correctChords = ["C", "D", "G"];
const inputElement = inputFiles[0];

const dropZoneElement = inputElement.closest(".dropzone-area");

// List of chords
const chords = ["C A D", "D E G", "E F A", "F C D", "G D C", "C F G", "A C E"];

// Function to get a random chord from the list
function getRandomChord() {
  const randomIndex = Math.floor(Math.random() * chords.length);
  return chords[randomIndex];
}

// Update the content of the div with a random chord
document.addEventListener("DOMContentLoaded", function() {
  // Your JavaScript code goes here
  document.getElementById('random-chord').textContent = "Play these notes: " + getRandomChord();
});

inputElement.addEventListener("change", (e) => {
  if (inputElement.files.length) {
    updateDropzoneFileList(dropZoneElement, inputElement.files[0]);
  }
});

dropZoneElement.addEventListener("dragover", (e) => {
  e.preventDefault();
  dropZoneElement.classList.add("dropzone--over");
});

["dragleave", "dragend"].forEach((type) => {
  dropZoneElement.addEventListener(type, (e) => {
    dropZoneElement.classList.remove("dropzone--over");
  });
});

dropZoneElement.addEventListener("drop", (e) => {
  e.preventDefault();

  if (e.dataTransfer.files.length) {
    inputElement.files = e.dataTransfer.files;

    updateDropzoneFileList(dropZoneElement, e.dataTransfer.files[0]);
  }

  dropZoneElement.classList.remove("dropzone--over");
});

const updateDropzoneFileList = (dropzoneElement, file) => {
  let dropzoneFileMessage = dropzoneElement.querySelector(".file-info");

  if (!file.type.startsWith("audio/")) {
    dropzoneFileMessage.innerHTML = `Invalid file type. Please upload an audio file.`;
    return;
  }

  dropzoneFileMessage.innerHTML = `
        ${file.name}, ${file.size} bytes
    `;
};

dropzoneBox.addEventListener("reset", (e) => {
  let dropzoneFileMessage = dropZoneElement.querySelector(".file-info");

  dropzoneFileMessage.innerHTML = `No Files Selected`;
});

dropzoneBox.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.getElementById('loading-screen').style.display = 'block';

  const myFile = document.getElementById("upload-file");
  var file = myFile.files[0];
  console.log(file);

  //get time now
  var date = new Date();
  var time = date.getTime();

  // Replace with your actual API key
  const apiKey = "e1582db2-6ef0-4bb7-a1cd-f08c76125a12";

  // Make a GET request to get the uploadUrl
  fetch("https://api.music.ai/api/upload", {
    method: "GET",
    headers: {
      Authorization: apiKey,
    },
  })
    .then((response) => response.json())
    .then((data) => {
      const uploadUrl = data.uploadUrl;
      const audioUrl = data.downloadUrl;

      // Convert the file to a blob
      const blob = new Blob([file], { type: file.type });

      // Make a PUT request to upload the audio file
      fetch(uploadUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "audio/mpeg",
        },
        body: blob,
      }).then((response) => {
        if (response.ok) {
          console.log("Upload successful");
          console.log(response);

          // Make a POST request to create a job
          fetch("https://api.music.ai/api/job", {
            method: "POST",
            headers: {
              Authorization: apiKey,
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              name: "Chords Website " + time,
              workflow: "chords-detection",
              params: {
                inputUrl: audioUrl,
              },
            }),
          })
            .then((response) => response.json())
            .then((data) => {
              console.log("Job created successfully", data);

              var jobId = data.id;
              // Add a delay of 5 seconds before making the GET request
              setTimeout(() => {
                // Make a GET request to get the job details
                fetch(`https://api.music.ai/api/job/${jobId}`, {
                  method: "GET",
                  headers: {
                    Authorization: apiKey,
                  },
                })
                  .then((response) => response.json())
                  .then(async (data) => {
                    console.log("Job details:", data);
                    var chordsJSON = data.result.chordsJSON;

                    const response = await fetch(chordsJSON);
                    console.log(response);
                    // Now you can access the data in the JSON
                    console.log(data);
                    document.getElementById('results').textContent = `You got ${correctLetters} notes right.`;
                    document.getElementById('loading-screen').style.display = 'none';
                    document.querySelector('.dropzone-box').style.display = 'none';
                  })
                  .catch((error) => {
                    document.getElementById('loading-screen').style.display = 'none';
                    document.getElementById('error-message').textContent = `Error: ${error.message}`;
                    console.error("Error:", error)
                  });
              }, 10000); // Delay of 5 seconds
            })
            .catch((error) => {
              console.error("Error:", error);
              document.getElementById('error-message').textContent = `Error: ${error.message}`;
              document.getElementById('loading-screen').style.display = 'none';
            });
        } else {
          console.error("Upload failed");
          document.getElementById('error-message').textContent = `Error: Upload failed. ${error.message}`;
          document.getElementById('loading-screen').style.display = 'none';
        }
      });
    })
    .catch((error) => console.error("Error:", error));
});
