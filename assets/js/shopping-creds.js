const randomCodes= [
    "sL79XZxOvX",
    "86vWEtOHyQ",
    "CYoEQjsqnK",
    "OJAGCvG7gG",
    "jejp6z4sAM",
    "VknjGIKdlq",
    "fyEZHCNax1",
    "hhnnoRyvYr",
    "qoskEcc342",
    "ipWRLY91DV",
    "0hsWgA74aQ",
    "BfsHQDyIRc",
    "cT94XaOm5a",
    "sUaIQjVWut",
    "LlTHlwHkWH",
    "BQdmJbPHuD",
    "oSmeJT8oDs",
    "3ttMiL53ix",
    "De0zPDujnD",
    "IHO3I1BS42"
];

const stocks = [
    {
        src: './../../assets/img/illustrations/amazon.svg',
        name: 'Amazon Gift Cards',
        ticker: 'Amazon',
        price: 3200,
        marketCap: '50 dollars',
        volume: '100 remaining',
    },
    {
        src: './../../assets/img/illustrations/apple.svg',
        name: 'Apple Gift Cards',
        ticker: 'Apple',
        price: 500,
        marketCap: '5 dollars',
        volume: '12 remaining',
    },
    {
        src: './../../assets/img/illustrations/google.svg',
        name: 'Play Store Gift Cards',
        ticker: 'Google',
        price: 500,
        marketCap: '5 dollars',
        volume: '20 remaining',
    },
    {
        src: './../../assets/img/illustrations/playstation.svg',
        name: 'Playstation Gift Cards',
        ticker: 'Playstation',
        price: 1600,
        marketCap: '25 dollars',
        volume: '15 remaining',
    },

    {
        src: './../../assets/img/illustrations/steam.svg',
        name: 'Steam Gift Cards',
        ticker: 'Steam',
        price: 1300,
        marketCap: '20 dollars',
        volume: '30 remaining',
    },
    {
        src: './../../assets/img/illustrations/xbox.svg',
        name: 'Xbox Gift Cards',
        ticker: 'Xbox',
        price: 1600,
        marketCap: '25 dollars',
        volume: '10 remaining',
    },
]


let tableRowCount = document.getElementsByClassName('table-row-count');
tableRowCount[0].innerHTML = `${stocks.length} Available`;


const mappedRecords = stocks
    .map(
        (stock) => {
            return `<tr>
    <td class="stock ">
        <div class="stock-wrapper">
            <img src="${stock.src}" alt="${stock.name}">
            <div class="stock-info">
                <span class="stock-info__ticker">
                    ${stock.ticker}
                </span>
                <span class="stock-info__name">
                    ${stock.name}
                </span>
            </div>
        </div>
    </td>
    <td>${stock.price} credits</td>
    <td>
        ${stock.marketCap}
    </td>
    <td>
        ${stock.volume}
    </td>

    <td class="sticky-right">
        <button class="btn btn-primary ${stock.ticker}">Purchase</button>
    </td>
</tr>`;
        });

const tableWrapper = document.querySelector('.table-wrapper');

tableWrapper.innerHTML = DOMPurify.sanitize(`
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Cost</th>
                <th>Amount</th>
                <th>Available</th>
                <th class="sticky-right"></th>
            </tr>
        </thead>
        <tbody id="table-rows">
            ${mappedRecords.join('')}
        </tbody>
        <!-- <tfoot>
                My footer
        </tfoot> -->
    </table>
`);

stocks.forEach(stock => {
    const button = document.querySelector(`.${stock.ticker}`);
    if (button) {
        button.addEventListener('click', () => {
            // Handle the click event here

            $(".loading").show();

            console.log(`${stock.ticker} button clicked`);
            fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/data-duebb/endpoint/getcredits?arg1=" + userId)
                .then(response => response.json())
                .then(data => {
                    let credits = parseInt(data);
                    if (credits < stock.price) {
                        alert("You do not have enough credits to purchase this item");
                        $(".loading").hide();
                        return;

                    }

                    let randomCode = randomCodes[Math.floor(Math.random() * randomCodes.length)];
                    var reflowAuth = localStorage.getItem("reflowAuth");
                    var parsedReflowAuth = JSON.parse(reflowAuth);
                    var userId = parsedReflowAuth.profile.id;
                    fetch("https://ap-southeast-1.aws.data.mongodb-api.com/app/data-duebb/endpoint/removecredits?arg1=" + userId + "&arg2=" + stock.price, {
                        method: 'POST', // or 'POST'
                        headers: {
                            'Content-Type': 'application/json',
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        }, // body data type must match "Content-Type" header
                    })
                        .then(response => response.json())
                        .then(data => {
                            console.log('Success:', data, stock.price);
                            window.location.href = `./success.html?code=${randomCode}&name=${stock.ticker}`;

                        })
                        .catch((error) => {
                            console.error('Error:', error);
                            alert("An error occured: " + error);
                            $(".loading").hide();
                        });
                })
                .catch(error => {
                    console.error('Error:', error);
                    $(".loading").hide();
                });
        });
    }
});