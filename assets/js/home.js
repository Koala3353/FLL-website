const data = [
    {
        place: "Level One",
        title: "PENCILS",
        title2: "AND SKETCHING",
        description:
            "Introducing our Level 1 Pencils/Sketching Kit - a comprehensive set designed to unleash your creativity on paper! This all-in-one kit offers endless possibilities for artistic expression, whether you're a beginner or a seasoned sketch artist. Unlock your potential and bring your imagination to life with our Level 1 Pencils/Sketching Kit.",
        image: "https://i.ibb.co/7Q4tkRy/Screenshot-2024-03-23-090711.png",
    },
    {
        place: "Level One",
        title: "ARDUINO",
        title2: "UNO",
        description:
            "Our Arduino Uno Kit is crafted for aspiring engineers, tech enthusiasts, and hobbyists of all levels, offering an exciting gateway into the realm of DIY electronics and programming. Whether you're an experienced engineer or a curious beginner, this kit is designed to spark your imagination and empower you to bring your electronic projects to life with the Arduino Uno board.",
        image: "https://i.ibb.co/BnGsQDp/Screenshot-2024-03-22-140658.png",
    },
    {
        place: "Level One, Two, and Three",
        title: "UNSOLVED",
        title2: "CASE",
        description:
            "Unravel mysteries with our Unsolved Case Kits, tailored for amateur sleuths and seasoned investigators alike! Level up your detective skills and crack the case with our three intriguing levels.",
        image: "https://i.ibb.co/XxQJ0R9/Screenshot-2024-03-23-102313.png",
    },
    {
        place: "Level Three",
        title: "KITCHEN",
        title2: "",
        description:
            "Step into the realm of culinary creativity with our Level 3 Interior Design Kit - Kitchen Edition! Crafted for interior designers and home enthusiasts alike, this comprehensive set is designed to help you envision and create stunning kitchen spaces that blend functionality with style.  Whether you're designing a gourmet chef's paradise or a cozy family kitchen, our Level 3 kit provides the essential tools to turn your kitchen dreams into reality. Elevate your interior design skills and create kitchens that inspire culinary delights with our Interior Design Kit - Kitchen Edition.",
        image: "https://i.ibb.co/pWBPq6d/Screenshot-2024-03-23-101947.png",
    },
    {
        place: "Level One",
        title: "HYDROPONICS",
        title2: "",
        description:
            "Aspiring botanists, immerse yourselves in the world of hydroponics with our comprehensive Hydroponics Kit! This all-in-one set equips you with everything you need to start your indoor garden adventure. Unleash your green thumb and cultivate a thriving garden with our Hydroponics Kit - your gateway to sustainable and bountiful harvests.",
        image: "https://i.ibb.co/RcXqdsN/Screenshot-2024-03-23-101602.png",
    },
    {
        place: "Level Two",
        title: "ALL ABOUT",
        title2: "BLOUSES",
        description:
            "Introducing our Level 2 Pattern Making Kit - Blouses Edition! Elevate your fashion design skills with this comprehensive set tailored for creating stylish blouses.Ensure your blouses have the perfect finishing touches with 3 pieces of high-quality thread and a selection of buttons. Unlock your creativity and design beautiful blouses with our Level 2 kit, ideal for fashion enthusiasts ready to expand their repertoire.",
        image: "https://i.ibb.co/VBZKLsP/Screenshot-2024-03-23-095031.png",
    },
    {
        place: "Level One",
        title: "PUZZLES",
        title2: "",
        description:
            "Introducing our Level 1 Puzzles Kit, featuring the captivating Magnetic Wooden Tangram! This classic puzzle offers endless hours of entertainment and cognitive stimulation. Crafted from high-quality wood with magnetic pieces, it's perfect for all ages. Challenge yourself or enjoy it with friends and family. Dive into the world of puzzles and enhance your problem-solving skills with our engaging Magnetic Wooden Tangram.",
        image: "https://i.ibb.co/M53k08k/Screenshot-2024-03-23-094012.png",
    },
    {
        place: "Level One",
        title: "SKINCARE",
        title2: "",
        description:
            "Introducing our Hypoallergenic Skincare Kit, a comprehensive collection designed to help you delve into the benefits of each nourishing oil and understand their role in skincare. Explore the unique qualities of each oil and unlock the secrets to healthy, radiant skin with our educational Hypoallergenic Skincare Kit.",
        image: "https://i.ibb.co/xjHmp7V/Screenshot-2024-03-23-093843.png",
    },
    {
        place: "Level Three",
        title: "HORIZONTAL",
        title2: "MATTRESS SUTURE",
        description:
            "Introducing our Level 3 Horizontal Mattress Suture Kit - the pinnacle of surgical proficiency for mastering horizontal mattress suturing techniques! Elevate your surgical skills to new heights with precision instruments and high-quality sutures, crucial for achieving secure wound closure and optimal tissue approximation. Whether you're refining your technique or preparing for complex surgical procedures, our Level 3 Horizontal Mattress Suture Kit is your ultimate tool for surgical excellence.",
        image: "https://i.ibb.co/BVpd2Mf/Screenshot-2024-03-23-093453.png",
    },
    {
        place: "Level Three",
        title: "OIL",
        title2: "PASTELS",
        description:
            "Introducing our Level 3 Oil Pastels Kit - an exquisite collection for artists ready to explore the rich, creamy world of oil pastels! Whether you're a seasoned artist or a budding creative, our Level 3 Oil Pastels Kit invites you to unlock your imagination and discover the endless possibilities of this versatile medium. Elevate your artwork and embark on a journey of self-expression with this luxurious and inspiring kit.",
        image: "https://i.ibb.co/Nr6q5Nk/Screenshot-2024-03-23-090944.png",
    },
    {
        place: "Level Two",
        title: "ACRYLICS",
        title2: "",
        description:
            "Step up your artistic game with our Level 2 Acrylics Kit, the perfect upgrade for those ready to tackle more challenging projects! Whether you're experimenting with textures, exploring abstract compositions, or diving into intricate details, our Level 2 Acrylics Kit empowers you to push the boundaries of your creativity and take your artistic endeavors to new heights. Unlock the potential of acrylic painting and unleash your imagination with this exceptional kit, designed to inspire and challenge artists of all levels.",
        image: "https://i.ibb.co/FxVSJFn/Screenshot-2024-03-23-084224.png",
    },
    {
        place: "Level Two",
        title: "BEDROOM",
        title2: "",
        description:
            "Welcome to Level 2 of our Interior Design Kit - Bedroom Edition! Dive deeper into the art of interior design with this comprehensive set, tailored specifically for crafting cozy and inviting bedroom spaces. Whether you're redesigning a personal bedroom or creating dreamy spaces for clients, our Level 2 kit equips you with the essential tools to transform any bedroom into a haven of comfort and style. Elevate your interior design skills and create bedrooms that inspire rest and relaxation with our Interior Design Kit - Bedroom Edition.",
        image: "https://i.ibb.co/pWBPq6d/Screenshot-2024-03-23-101947.png",
    },
    {
        place: "Level Three",
        title: "ALL ABOUT",
        title2: "JACKETS AND SWEATERS",
        description:
            "Introducing our Level 3 Pattern Making Kit - Jackets and Sweaters Edition! Take your fashion design skills to the next level with this comprehensive set, curated for crafting stylish jackets and cozy sweaters. Dive into the world of outerwear design and create stunning pieces with our Level 3 kit, perfect for fashion enthusiasts ready to tackle more advanced projects.",
        image: "https://i.ibb.co/mNDT4WL/Screenshot-2024-03-23-095157.png",
    },
    {
        place: "Level Three",
        title: "PUZZLES",
        title2: "",
        description:
            "Introducing our Level 3 Puzzles Kit - the ultimate challenge awaits with our 3D Wooden Cube Puzzle! Crafted intricately to test your spatial awareness and problem-solving skills, this puzzle provides hours of immersive entertainment. Construct the cube from its wooden pieces, navigating through twists and turns to complete the intricate design. Perfect for puzzle enthusiasts looking for a satisfying challenge. Elevate your puzzling experience to new dimensions with our captivating 3D Wooden Cube Puzzle.",
        image: "https://i.ibb.co/mHzTRhP/Screenshot-2024-03-23-094345.png",
    },
    {
        place: "Level Two",
        title: "SUBTICULAR",
        title2: "SUTURE",
        description:
            "Introducing our Level 2 Subcuticular Suture Kit - the next step in advancing your suturing expertise! Perfect for medical students and practitioners looking to master subtler techniques, this comprehensive kit equips you with all the essential instruments and materials needed for both interrupted and continuous subcuticular suturing. Elevate your surgical skills and refine your technique with precision instruments and high-quality sutures, essential for achieving optimal wound closure and cosmesis. Take your suturing proficiency to the next level with our Level 2 Subcuticular Suture Kit.",
        image: "https://i.ibb.co/BVpd2Mf/Screenshot-2024-03-23-093453.png",
    },
    {
        place: "Level Two",
        title: "MARKERS",
        title2: "",
        description:
            "Level up your artistic journey with our Level 2 Markers Kit - an exciting upgrade for those ready to explore new dimensions of creativity! Whether you're a seasoned artist looking to expand your toolkit or a beginner eager to experiment with new mediums, our Level 2 Markers Kit is your passport to endless artistic possibilities. Elevate your artwork and unleash your creativity with this dynamic and versatile kit - the perfect upgrade from our Level 1 Pencil/Sketching Kit.",
        image: "https://i.ibb.co/M2yQgG1/Screenshot-2024-03-23-090825.png",
    },
    {
        place: "Level One",
        title: "WATERCOLOR",
        title2: "",
        description:
            "Introducing our Level 1 Watercolor Kit, a comprehensive set tailored for budding artists! With everything you need to dive into the captivating world of watercolor painting, this kit is designed to inspire creativity and elevate your artistic journey. Each component has been carefully selected to ensure a seamless painting experience, from the quality sketchpad to the essential paint brushes. Unleash your imagination and explore the vibrant possibilities of watercolor with this exceptional kit. Whether you're a novice or a seasoned painter, this set is sure to ignite your passion for art.",
        image: "https://i.ibb.co/KG1P03t/Screenshot-2024-03-23-084418.png",
    },
    {
        place: "Level One",
        title: "DINING",
        title2: "ROOM",
        description:
            "Introducing our Level 1 Interior Design Kit - Dining Edition! Elevate your interior design skills with this comprehensive set, curated specifically for designing stylish dining spaces. Whether you're a novice designer or a seasoned pro, our Level 1 kit provides the essential tools you need to create inviting and functional dining areas that reflect your unique style. Unlock your creativity and transform any space into a stunning dining experience with our Interior Design Kit - Dining Edition.",
        image: "https://i.ibb.co/pWBPq6d/Screenshot-2024-03-23-101947.png",
    },
    {
        place: "Level One",
        title: "ALL ABOUT",
        title2: "PANTS",
        description:
            "Introducing our Level 1 Pattern Making Kit - All About Pants! Dive into the world of fashion design and master the art of creating stylish pants with this comprehensive set.Start your journey in pattern making and design with our Level 1 kit, tailored for aspiring fashion designers.",
        image: "https://i.ibb.co/H7xghjm/Screenshot-2024-03-23-094922.png",
    },
    {
        place: "Level Two",
        title: "PUZZLES",
        title2: "",
        description:
            "Welcome to Level 2 of our Puzzles Kit, where the challenge gets even more thrilling with our 120 Challenges Intelligence Games! This comprehensive set offers a diverse array of brain-teasing puzzles and games designed to sharpen your cognitive skills and enhance your problem-solving abilities. Embark on a new level of puzzling adventure and elevate your intelligence with our Level 2 Puzzles Kit.",
        image: "https://i.ibb.co/wQDNCC6/Screenshot-2024-03-23-094029.png",
    },
    {
        place: "Level One",
        title: "OVER AND UNDER",
        title2: "SUTURE",
        description:
            "Introducing our Level 1 Over and Under Suture Kit - the essential companion for mastering interrupted and continuous suturing techniques! Designed for medical students and practitioners, this comprehensive kit includes all the necessary instruments and materials to hone your skills in surgical suturing. With precision instruments and high-quality sutures, you'll learn the fundamentals of both interrupted and continuous techniques, vital for surgical proficiency. Elevate your surgical skills and gain confidence in suturing with our Level 1 Over and Under Suture Kit.",
        image: "https://i.ibb.co/BVpd2Mf/Screenshot-2024-03-23-093453.png",
    },
    {
        place: "Level Three",
        title: "OIL",
        title2: "PAINT",
        description:
            "Elevate your artistry to new heights with our Level 3 Oil Paint Kit, the ultimate upgrade for seasoned artists seeking depth and richness in their work. Whether you're drawn to the luminous glow of oil pigments or eager to delve into the complexities of this traditional medium, our Level 3 Oil Paint Kit invites you to embark on a journey of artistic discovery and unlock the full potential of your creativity. Immerse yourself in the timeless allure of oil painting and experience the transformative power of this exquisite medium with our exceptional kit.",
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
        (i, index) => `<div class="card-content" id="card-content-${index}">
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