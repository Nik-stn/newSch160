const img = document.querySelectorAll("#ya-site-form0 input.ya-site-form__submit, img, .sch-map,  .slider-icon, .banners-icon, .header-mobile .parent");
const siteContent = document.querySelectorAll(".site-content, .popular-item, .news-sch-item, .announcement-sch-item");
const buttons = document.querySelectorAll(".popular-item, .btn-header-bar, .header-nav, .news-tabs-btn, .announcement-tab-btn, .news-sch-arcive-text, .announcement-sch-arcive-text, .footer, .header-mobile .level_0");
const checkbox = document.querySelectorAll(".checkbox-line span, .scrooll-to-top");
const noBorder = document.querySelectorAll('.footer-flex, .news-sch-item, .announcement-sch-item');
const links = document.querySelectorAll('.header-pc .parent>a, .header-pc .parent>span, .news-tabs-btn, .news-sch-content, .announcement-sch-content, .footer, .about-text, .footer-nav .parent, .count-title, .about-text-item a, .footer-nav li a, .footer-copyright a, .footer-copyright, .header-mobile .parent>a, .header-mobile .level_1>li>a, .popular-item a, .link-header-bar, .news-sch-archive-link, .announcement-sch-archive-link');
const mostSelectors = document.querySelectorAll('.popular-item, .btn-header-bar, .header-nav, .main, .header-pc .parent>a, .header-pc .parent>span, .news-tabs-btn, .announcement-tab-btn, .news-sch-content, .announcement-sch-content, .news-sch-arcive-text, .announcement-sch-arcive-text, .footer, .about-text, .footer-nav .parent, .count-title, .about-text-item a, .footer-nav li a, .footer-copyright a, .footer-copyright, .header-mobile .level_0, .header-mobile .parent>a, .header-mobile .level_1>li>a, .checkbox-line span, .scrooll-to-top');
const noHover = document.querySelectorAll('.header-pc .parent>a:hover::before, .header-pc .parent>span:hover::before');

const normalEyeSvg = document.getElementById("normal-eyed");
const siteBody = document.querySelector('body');
const vision = document.querySelector(".vision");
const tenderEyeSvg = document.getElementById("tender-eyed");
const siteMain = document.querySelector(".main");
const normalEyeWhiteSvg = document.getElementById("normal-eyed-white");
const imgYes = document.getElementById("imagesYes");

const getWhiteSite = {
    activeNormalEye: localStorage.getItem('toggleNormalEye'),
    whiteBody: localStorage.getItem('toggleWhiteBody'),
    noneTenderEye: localStorage.getItem('toggleTenderEye'),
    boxVision: localStorage.getItem('toggleVision'),
    backgroundMain: localStorage.getItem('noBackground'),
    whiteLinks: localStorage.getItem('toggleWhiteLinks'),
    whiteButtons: localStorage.getItem('toggleWhiteButtons'),
    whiteCheckbox: localStorage.getItem('toggleWhiteCheckbox'),
    noneBorder: localStorage.getItem('toggleNoBorder'),
    noneHover: localStorage.getItem('toggleNoHover')
};

for (let key in getWhiteSite) {
    if (getWhiteSite[key]) {
        applyWhiteStyles();
        break; // Прерываем цикл после применения стилей applyWhiteStyles()
    }
}

function applyWhiteStyles() {
    normalEyeSvg.style.display = "inline-block";
    siteBody.classList.add("colorSiteWhite");
    vision.style.display = "block";
    tenderEyeSvg.style.display = "none";
    siteMain.style.background = "0";
    links.forEach(item => item.classList.add('linkColorSiteWhite'));
    buttons.forEach(item => item.classList.add('buttonColorSiteWhite'));
    checkbox.forEach(item => item.classList.add('checkboxColorSiteWhite'));
    noBorder.forEach(item => item.classList.add('footerNoBorder', 'newsNoBorder'));
    noHover.forEach(item => item.style.backgroundColor = 'inherit');
}

function tenderEyed(event) {
    event.preventDefault();
    tenderEyeSvg.style.display = "none";
    normalEyeSvg.style.display = "inline-block";
    vision.style.display = "block";
    siteBody.classList.add("colorSiteWhite");
    siteMain.style.background = "0";
    const setWhiteSite = {
        toggleNormalEye: normalEyeSvg,
        toggleWhiteBody: siteBody,
        toggleVision: vision,
        toggleTenderEye: tenderEyeSvg,
        noBackground: siteMain,
        toggleWhiteLinks: links.forEach(item => item.classList.add('linkColorSiteWhite')),
        toggleWhiteButtons: buttons.forEach(item => item.classList.add('buttonColorSiteWhite')),
        toggleWhiteCheckbox: checkbox.forEach(item => item.classList.add('checkboxColorSiteWhite')),
        toggleNoBorder: noBorder.forEach(item => item.classList.add('footerNoBorder', 'newsNoBorder')),
        toggleNoHover: noHover.forEach(item => item.style.backgroundColor = 'inherit')
    };
    for (let key in setWhiteSite) {
        localStorage.setItem(key, setWhiteSite[key]);
    }
}

function normalEyed(event) {
    event.preventDefault();
    siteBody.removeAttribute("class");
    imgYes.dispatchEvent(new Event("click"));
    normalEyeSvg.style.display = "none";
    normalEyeWhiteSvg.style.display = "none";
    vision.style.display = "none";
    tenderEyeSvg.style.display = "inline-block";
    mostSelectors.forEach(item => item.removeAttribute("style"));
    siteContent.forEach(item => item.removeAttribute("style"));
    links.forEach(item => item.classList.remove("linkColorSiteBlue", "linkColorSiteWhite", "linkColorSiteBlack", "linkColorSiteBeige"));
    buttons.forEach(item => item.classList.remove('buttonColorSiteBlue', "buttonColorSiteWhite", "buttonColorSiteBlack", "buttonColorSiteBeige"));
    checkbox.forEach(item => item.classList.remove('checkboxColorSiteBlue', "checkboxColorSiteWhite", "checkboxColorSiteBlack", "checkboxColorSiteBeige"));
    noBorder.forEach(item => item.classList.remove('footerNoBorder', 'newsNoBorder'));
    const removeWhiteSite = {
        activeNormalEye: localStorage.removeItem('toggleNormalEye'),
        whiteBody: localStorage.removeItem('toggleWhiteBody'),
        noneTenderEye: localStorage.removeItem('toggleTenderEye'),
        boxVision: localStorage.removeItem('toggleVision'),
        backgroundMain: localStorage.removeItem('noBackground'),
        whiteLinks: localStorage.removeItem('toggleWhiteLinks'),
        whiteButtons: localStorage.removeItem('toggleWhiteButtons'),
        whiteCheckbox: localStorage.removeItem('toggleWhiteCheckbox'),
        noneBorder: localStorage.removeItem('toggleNoBorder'),
        noneHover: localStorage.removeItem('toggleNoHover')
    };
    for (let key in removeWhiteSite) {
        localStorage.removeItem(key, removeWhiteSite[key]);
    }
   
}

function updateFontSizes(changeAmount) {
    return siteContent.forEach(item => {
        let fz = parseFloat(window.getComputedStyle(item).fontSize);
        fz += changeAmount;
        if (fz >= 12 && fz <= 24) item.style.fontSize = fz + "px";
        else if (fz > 24) fz = 24;
        else fz = 12;
    });
}

function colorSiteClick(event) {
    event.preventDefault();
    document.body.removeAttribute("class");
    let id = this.getAttribute("id");
    document.body.classList.add(id);
    if (id === 'colorSiteBlue') {
        document.getElementById("normal-eyed").style.display = "inline-block";
        document.getElementById("normal-eyed-white").style.display = "none";
        links.forEach(item => {
            item.classList.add('linkColorSiteBlue');
            item.classList.remove("linkColorSiteWhite", "linkColorSiteBlack", "linkColorSiteBeige");
        });
        buttons.forEach(item => {
            item.classList.add('buttonColorSiteBlue');
            item.classList.remove("buttonColorSiteWhite", "buttonColorSiteBlack", "buttonColorSiteBeige");
        });
        checkbox.forEach(item => {
            item.classList.add('checkboxColorSiteBlue');
            item.classList.remove("checkboxColorSiteWhite", "checkboxColorSiteBlack", "checkboxColorSiteBeige");
        });
    } else if (id === 'colorSiteBlack') {
        document.getElementById("normal-eyed").style.display = "none";
        document.getElementById("normal-eyed-white").style.display = "inline-block";
        links.forEach(item => {
            item.classList.add('linkColorSiteBlack');
            item.classList.remove("linkColorSiteWhite", "linkColorSiteBlue", "linkColorSiteBeige");
        });
        buttons.forEach(item => {
            item.classList.add('buttonColorSiteBlack');
            item.classList.remove("buttonColorSiteWhite", "buttonColorSiteBlue", "buttonColorSiteBeige");
        });
        checkbox.forEach(item => {
            item.classList.add('checkboxColorSiteBlack');
            item.classList.remove("checkboxColorSiteWhite", "checkboxColorSiteBlue", "checkboxColorSiteBeige");
        });
    } else if (id === 'colorSiteWhite') {
        document.getElementById("normal-eyed").style.display = "inline-block";
        document.getElementById("normal-eyed-white").style.display = "none";
        links.forEach(item => {
            item.classList.add('linkColorSiteWhite');
            item.classList.remove("linkColorSiteBlack", "linkColorSiteBlue", "linkColorSiteBeige");
        });
        buttons.forEach(item => {
            item.classList.add('buttonColorSiteWhite');
            item.classList.remove("buttonColorSiteBlack", "buttonColorSiteBlue", "buttonColorSiteBeige");
        });
        checkbox.forEach(item => {
            item.classList.add('checkboxColorSiteWhite');
            item.classList.remove("checkboxColorSiteBlack", "checkboxColorSiteBlue", "checkboxColorSiteBeige");
        });
    } else if (id === 'colorSiteBeige') {
        document.getElementById("normal-eyed").style.display = "inline-block";
        document.getElementById("normal-eyed-white").style.display = "none";
        links.forEach(item => {
            item.classList.add('linkColorSiteBeige');
            item.classList.remove("linkColorSiteBlack", "linkColorSiteBlue", "linkColorSiteWhite");
        });
        buttons.forEach(item => {
            item.classList.add('buttonColorSiteBeige');
            item.classList.remove("buttonColorSiteBlack", "buttonColorSiteBlue", "buttonColorSiteWhite");
        });
        checkbox.forEach(item => {
            item.classList.add('checkboxColorSiteBeige');
            item.classList.remove("checkboxColorSiteBlack", "checkboxColorSiteBlue", "checkboxColorSiteWhite");
        });
    } else console.log('Error classlist');
}

function imagesNoClick(event) {
    event.preventDefault();
    img.forEach(item => {
        item.classList.remove("imagesBlackWhite");
        item.style.display = "none";
    });
}

function imagesYesClick(event) {
    event.preventDefault();
    img.forEach(item => {
        item.classList.remove("imagesBlackWhite");
        item.style.display = "block";
    });
}

function imagesBlackWhiteClick(event) {
    event.preventDefault();
    img.forEach(item => {
        item.classList.add("imagesBlackWhite");
        item.style.display = "block";
    });
}

function spacing() {
    const data = this.getAttribute("data-letter-spacing");
    siteContent.forEach(item => item.style.letterSpacing = data + 'px');
}

function init() {
    document.getElementById("tender-eyed").addEventListener("click", tenderEyed);
    document.getElementById("normal-eyed").addEventListener("click", normalEyed);
    document.getElementById("normal-eyed-white").addEventListener("click", normalEyed);
    document.getElementById("reduceFont").addEventListener("click", () => updateFontSizes(-1));
    document.getElementById("increaseFont").addEventListener("click", () => updateFontSizes(1));
    document.querySelectorAll(".colorSite").forEach(item => item.addEventListener("click", colorSiteClick));
    document.querySelectorAll(".changeLetterSpacing").forEach(item => item.addEventListener("click", spacing));
    document.getElementById("imagesNo").addEventListener("click", imagesNoClick);
    document.getElementById("imagesYes").addEventListener("click", imagesYesClick);
    document.getElementById("imagesBlackWhite").addEventListener("click", imagesBlackWhiteClick);
}

init();