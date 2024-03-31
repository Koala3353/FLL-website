const data = [
    {
        place: "Level One",
        title: "PENCILS",
        title2: "AND SKETCHING",
        description:
            "The Level 1 Pencils/Sketching Kit is a comprehensive set tailored for unleashing creativity on paper, suitable for beginners and seasoned sketch artists alike.",
        image: "https://i.ibb.co/7Q4tkRy/Screenshot-2024-03-23-090711.png",
    },
    {
        place: "Level One",
        title: "ARDUINO",
        title2: "UNO",
        description:
            "The Arduino Uno Kit is designed to introduce DIY electronics and programming to aspiring engineers and tech enthusiasts, offering an exciting gateway into the field.",
        image: "https://cdn.reflowhq.com/media/44259567/1771530423/87308582ecb3f4eb222bdb41fadf8226_lg.jpg",
    },
    {
        place: "Level One, Two, and Three",
        title: "UNSOLVED",
        title2: "CASE",
        description:
            "Unravel mysteries with Unsolved Case Kits, featuring three intriguing levels designed for both amateur sleuths and seasoned investigators to level up their detective skills.",
        image: "https://i.ibb.co/XxQJ0R9/Screenshot-2024-03-23-102313.png",
    },
    {
        place: "Level Three",
        title: "KITCHEN",
        title2: "",
        description:
            "The Level 3 Interior Design Kit - Kitchen Edition equips interior designers with essential tools to create stunning and functional kitchen spaces, suitable for both gourmet chefs and family settings.",
        image: "https://i.ibb.co/pWBPq6d/Screenshot-2024-03-23-101947.png",
    },
    {
        place: "Level One",
        title: "HYDROPONICS",
        title2: "",
        description:
            "Dive into the world of hydroponics with the comprehensive Hydroponics Kit, offering everything needed to start an indoor garden adventure and cultivate sustainable harvests.",
        image: "https://i.ibb.co/RcXqdsN/Screenshot-2024-03-23-101602.png",
    },
    {
        place: "Level Two",
        title: "ALL ABOUT",
        title2: "BLOUSES",
        description:
            "Elevate fashion design skills with the Level 2 Pattern Making Kit - Blouses Edition, perfect for creating stylish blouses with high-quality thread and buttons.",
        image: "https://i.ibb.co/VBZKLsP/Screenshot-2024-03-23-095031.png",
    },
    {
        place: "Level One",
        title: "PUZZLES",
        title2: "",
        description:
            "The Level 1 Puzzles Kit introduces the captivating Magnetic Wooden Tangram, providing endless hours of entertainment and cognitive stimulation for all ages.",
        image: "https://i.ibb.co/M53k08k/Screenshot-2024-03-23-094012.png",
    },
    {
        place: "Level One",
        title: "SKINCARE",
        title2: "",
        description:
            "Explore the benefits of nourishing oils in skincare with the Hypoallergenic Skincare Kit, designed to unlock the secrets to healthy, radiant skin.",
        image: "https://i.ibb.co/xjHmp7V/Screenshot-2024-03-23-093843.png",
    },
    {
        place: "Level Three",
        title: "HORIZONTAL",
        title2: "MATTRESS SUTURE",
        description:
            "Master horizontal mattress suturing techniques with the Level 3 Horizontal Mattress Suture Kit, featuring precision instruments and high-quality sutures for optimal wound closure.",
        image: "https://i.ibb.co/BVpd2Mf/Screenshot-2024-03-23-093453.png",
    },
    {
        place: "Level Three",
        title: "OIL",
        title2: "PASTELS",
        description:
            "Delve into the rich, creamy world of oil pastels with the Level 3 Oil Pastels Kit, inviting artists to unlock their imagination and embark on a journey of self-expression.",
        image: "https://i.ibb.co/Nr6q5Nk/Screenshot-2024-03-23-090944.png",
    },
    {
        place: "Level Two",
        title: "ACRYLICS",
        title2: "",
        description:
            "Step up artistic endeavors with the Level 2 Acrylics Kit, empowering artists to push boundaries and explore new dimensions of creativity.",
        image: "https://i.ibb.co/FxVSJFn/Screenshot-2024-03-23-084224.png",
    },
    {
        place: "Level Two",
        title: "BEDROOM",
        title2: "",
        description:
            "The Level 2 Interior Design Kit - Bedroom Edition equips designers with essential tools to create cozy and inviting bedroom spaces for personal or client projects.",
        image: "https://i.ibb.co/pWBPq6d/Screenshot-2024-03-23-101947.png",
    },
    {
        place: "Level Three",
        title: "ALL ABOUT",
        title2: "JACKETS AND SWEATERS",
        description:
            "Create stylish jackets and sweaters with the Level 3 Pattern Making Kit, tailored for fashion enthusiasts ready to tackle more advanced projects.",
        image: "https://i.ibb.co/mNDT4WL/Screenshot-2024-03-23-095157.png",
    },
    {
        place: "Level Three",
        title: "PUZZLES",
        title2: "",
        description:
            "Challenge spatial awareness with the Level 3 Puzzles Kit, featuring a captivating 3D Wooden Cube Puzzle designed to test problem-solving skills.",
        image: "https://i.ibb.co/mHzTRhP/Screenshot-2024-03-23-094345.png",
    },
    {
        place: "Level Two",
        title: "SUBTICULAR",
        title2: "SUTURE",
        description:
            "Advance suturing expertise with the Level 2 Subcuticular Suture Kit, providing all necessary instruments and materials for mastering subtler techniques.",
        image: "https://i.ibb.co/BVpd2Mf/Screenshot-2024-03-23-093453.png",
    },
    {
        place: "Level Two",
        title: "MARKERS",
        title2: "",
        description:
            "Elevate artistic journeys with the Level 2 Markers Kit, offering endless possibilities for seasoned artists and beginners alike to explore new mediums.",
        image: "https://i.ibb.co/M2yQgG1/Screenshot-2024-03-23-090825.png",
    },
    {
        place: "Level One",
        title: "WATERCOLOR",
        title2: "",
        description:
            "The Level 1 Watercolor Kit is tailored for budding artists, providing everything needed to explore the vibrant world of watercolor painting and ignite a passion for art.",
        image: "https://i.ibb.co/KG1P03t/Screenshot-2024-03-23-084418.png",
    },
    {
        place: "Level One",
        title: "DINING",
        title2: "ROOM",
        description:
            "Design stylish dining spaces with the Level 1 Interior Design Kit - Dining Edition, offering essential tools for creating inviting and functional dining areas.",
        image: "https://i.ibb.co/pWBPq6d/Screenshot-2024-03-23-101947.png",
    },
    {
        place: "Level One",
        title: "ALL ABOUT",
        title2: "PANTS",
        description:
            "Dive into the world of fashion design with the Level 1 Pattern Making Kit - All About Pants, perfect for aspiring designers starting their journey in pattern making.",
        image: "https://i.ibb.co/H7xghjm/Screenshot-2024-03-23-094922.png",
    },
    {
        place: "Level Two",
        title: "PUZZLES",
        title2: "",
        description:
            "Take cognitive skills to new heights with the Level 2 Puzzles Kit, featuring brain-teasing puzzles and games designed to sharpen intelligence.",
        image: "https://i.ibb.co/wQDNCC6/Screenshot-2024-03-23-094029.png",
    },
    {
        place: "Level One",
        title: "OVER AND UNDER",
        title2: "SUTURE",
        description:
            "Master interrupted and continuous suturing techniques with the Level 1 Over and Under Suture Kit, essential for medical students and practitioners to gain confidence in surgical suturing.",
        image: "https://i.ibb.co/BVpd2Mf/Screenshot-2024-03-23-093453.png",
    },
    {
        place: "Level Three",
        title: "OIL",
        title2: "PAINT",
        description:
            "Experience the transformative power of oil painting with the Level 3 Oil Paint Kit, inviting seasoned artists to explore depth and richness in their work.",
        image: "https://i.ibb.co/7bNH2SG/Screenshot-2024-03-23-084932.png",
    },



];

const _ = (id) => document.getElementById(id);
const cards = data
    .map(
        (i, index) =>
            `<div class="card" id="card${index}" style="background-image:url(${i.image})"  ></div>`
    )
    .join("");

const cardContents = data
    .map(
        (i, index) => `<div class="card-content" id="card-content-${index}" >
<div class="content-start"></div>
<div class="content-place">${i.place}</div>
<div class="content-title-1">${i.title}</div>
<div class="content-title-2">${i.title2}</div>

</div>`
    )
    .join("");

const sildeNumbers = data
    .map(
        (_, index) =>
            `<div class="item" id="slide-item-${index}" >${index + 1}</div>`
    )
    .join("");
_("demo").innerHTML = cards + cardContents;
_("slide-numbers").innerHTML = sildeNumbers;

const range = (n) =>
    Array(n)
        .fill(0)
        .map((i, j) => i + j);
const set = gsap.set;

function getCard(index) {
    return `#card${index}`;
}
function getCardContent(index) {
    return `#card-content-${index}`;
}
function getSliderItem(index) {
    return `#slide-item-${index}`;
}

function animate(target, duration, properties) {
    return new Promise((resolve) => {
        gsap.to(target, {
            ...properties,
            duration: duration,
            onComplete: resolve,
        });
    });
}

let order = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21];
let detailsEven = true;

let offsetTop = 200;
let offsetLeft = 700;
let cardWidth = 200;
let cardHeight = 300;
let gap = 40;
let numberSize = 50;
const ease = "sine.inOut";

function init() {
    const [active, ...rest] = order;
    const detailsActive = detailsEven ? "#details-even" : "#details-odd";
    const detailsInactive = detailsEven ? "#details-odd" : "#details-even";
    const { innerHeight: height, innerWidth: width } = window;
    offsetTop = height - 430;
    offsetLeft = width - 830;

    gsap.set("#pagination", {
        top: offsetTop + 330,
        left: offsetLeft,
        y: 200,
        opacity: 0,
        zIndex: 60,
    });
    gsap.set("nav", { y: -200, opacity: 0 });

    gsap.set(getCard(active), {
        x: 0,
        y: 0,
        width: window.innerWidth,
        height: window.innerHeight,
    });
    gsap.set(getCardContent(active), { x: 0, y: 0, opacity: 0 });
    gsap.set(detailsActive, { opacity: 0, zIndex: 22, x: -200 });
    gsap.set(detailsInactive, { opacity: 0, zIndex: 12 });
    gsap.set(`${detailsInactive} .text`, { y: 100 });
    gsap.set(`${detailsInactive} .title-1`, { y: 100 });
    gsap.set(`${detailsInactive} .title-2`, { y: 100 });
    gsap.set(`${detailsInactive} .desc`, { y: 50 });
    gsap.set(`${detailsInactive} .cta`, { y: 60 });

    gsap.set(".progress-sub-foreground", {
        width: 500 * (1 / order.length) * (active + 1),
    });

    rest.forEach((i, index) => {
        gsap.set(getCard(i), {
            x: offsetLeft + 400 + index * (cardWidth + gap),
            y: offsetTop,
            width: cardWidth,
            height: cardHeight,
            zIndex: 30,
            borderRadius: 10,
        });
        gsap.set(getCardContent(i), {
            x: offsetLeft + 400 + index * (cardWidth + gap),
            zIndex: 40,
            y: offsetTop + cardHeight - 100,
        });
        gsap.set(getSliderItem(i), { x: (index + 1) * numberSize });
    });

    gsap.set(".indicator", { x: -window.innerWidth });

    const startDelay = 0.6;

    gsap.to(".cover", {
        x: width + 400,
        delay: 0.5,
        ease,
        onComplete: () => {
            setTimeout(() => {
                loop();
            }, 500);
        },
    });
    rest.forEach((i, index) => {
        gsap.to(getCard(i), {
            x: offsetLeft + index * (cardWidth + gap),
            zIndex: 30,
            delay: 0.05 * index,
            ease,
            delay: startDelay,
        });
        gsap.to(getCardContent(i), {
            x: offsetLeft + index * (cardWidth + gap),
            zIndex: 40,
            delay: 0.05 * index,
            ease,
            delay: startDelay,
        });
    });
    gsap.to("#pagination", { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to("nav", { y: 0, opacity: 1, ease, delay: startDelay });
    gsap.to(detailsActive, { opacity: 1, x: 0, ease, delay: startDelay });
}

let clicks = 0;

function step() {
    return new Promise((resolve) => {
        order.push(order.shift());
        detailsEven = !detailsEven;

        const detailsActive = detailsEven ? "#details-even" : "#details-odd";
        const detailsInactive = detailsEven ? "#details-odd" : "#details-even";

        document.querySelector(`${detailsActive} .place-box .text`).textContent =
            data[order[0]].place;
        document.querySelector(`${detailsActive} .title-1`).textContent =
            data[order[0]].title;
        document.querySelector(`${detailsActive} .title-2`).textContent =
            data[order[0]].title2;
        document.querySelector(`${detailsActive} .desc`).textContent =
            data[order[0]].description;

        gsap.set(detailsActive, { zIndex: 22 });
        gsap.to(detailsActive, { opacity: 1, delay: 0.4, ease });
        gsap.to(`${detailsActive} .text`, {
            y: 0,
            delay: 0.1,
            duration: 0.7,
            ease,
        });
        gsap.to(`${detailsActive} .title-1`, {
            y: 0,
            delay: 0.15,
            duration: 0.7,
            ease,
        });
        gsap.to(`${detailsActive} .title-2`, {
            y: 0,
            delay: 0.15,
            duration: 0.7,
            ease,
        });
        gsap.to(`${detailsActive} .desc`, {
            y: 0,
            delay: 0.3,
            duration: 0.4,
            ease,
        });
        gsap.to(`${detailsActive} .cta`, {
            y: 0,
            delay: 0.35,
            duration: 0.4,
            onComplete: resolve,
            ease,
        });
        gsap.set(detailsInactive, { zIndex: 12 });

        const [active, ...rest] = order;
        const prv = rest[rest.length - 1];

        gsap.set(getCard(prv), { zIndex: 10 });
        gsap.set(getCard(active), { zIndex: 20 });
        gsap.to(getCard(prv), { scale: 1.5, ease });

        gsap.to(getCardContent(active), {
            y: offsetTop + cardHeight - 10,
            opacity: 0,
            duration: 0.3,
            ease,
        });
        gsap.to(getSliderItem(active), { x: 0, ease });
        gsap.to(getSliderItem(prv), { x: -numberSize, ease });
        gsap.to(".progress-sub-foreground", {
            width: 500 * (1 / order.length) * (active + 1),
            ease,
        });

        gsap.to(getCard(active), {
            x: 0,
            y: 0,
            ease,
            width: window.innerWidth,
            height: window.innerHeight,
            borderRadius: 0,
            onComplete: () => {
                const xNew = offsetLeft + (rest.length - 1) * (cardWidth + gap);
                gsap.set(getCard(prv), {
                    x: xNew,
                    y: offsetTop,
                    width: cardWidth,
                    height: cardHeight,
                    zIndex: 30,
                    borderRadius: 10,
                    scale: 1,
                });

                gsap.set(getCardContent(prv), {
                    x: xNew,
                    y: offsetTop + cardHeight - 100,
                    opacity: 1,
                    zIndex: 40,
                });
                gsap.set(getSliderItem(prv), { x: rest.length * numberSize });

                gsap.set(detailsInactive, { opacity: 0 });
                gsap.set(`${detailsInactive} .text`, { y: 100 });
                gsap.set(`${detailsInactive} .title-1`, { y: 100 });
                gsap.set(`${detailsInactive} .title-2`, { y: 100 });
                gsap.set(`${detailsInactive} .desc`, { y: 50 });
                gsap.set(`${detailsInactive} .cta`, { y: 60 });
                clicks -= 1;
                if (clicks > 0) {
                    step();
                }
            },
        });

        rest.forEach((i, index) => {
            if (i !== prv) {
                const xNew = offsetLeft + index * (cardWidth + gap);
                gsap.set(getCard(i), { zIndex: 30 });
                gsap.to(getCard(i), {
                    x: xNew,
                    y: offsetTop,
                    width: cardWidth,
                    height: cardHeight,
                    ease,
                    delay: 0.1 * (index + 1),
                });

                gsap.to(getCardContent(i), {
                    x: xNew,
                    y: offsetTop + cardHeight - 100,
                    opacity: 1,
                    zIndex: 40,
                    ease,
                    delay: 0.1 * (index + 1),
                });
                gsap.to(getSliderItem(i), { x: (index + 1) * numberSize, ease });
            }
        });
    });
}

async function loop() {
    await animate(".indicator", 2, { x: 0 });
    await animate(".indicator", 0.8, { x: window.innerWidth, delay: 0.3 });
    set(".indicator", { x: -window.innerWidth });
    await step();
    loop();
}

async function loadImage(src) {
    return new Promise((resolve, reject) => {
        let img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src;
    });
}

async function loadImages() {
    const promises = data.map(({ image }) => loadImage(image));
    return Promise.all(promises);
}

async function start() {
    try {
        await loadImages();
        init();
    } catch (error) {
        console.error("One or more images failed to load", error);
    }
}

start();