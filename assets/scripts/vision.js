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



function applyWhiteStyles() {
    normalEyeSvg.style.display = "inline-block";
    siteBody.classList.add("colorSiteWhite");
    vision.style.display = "block";
    tenderEyeSvg.style.display = "none";
    siteMain.style.background = "0";
    normalEyeWhiteSvg.style.display = "none";
    links.forEach(item => {
        item.classList.add('linkColorSiteWhite');
        item.classList.remove("linkColorSiteBlue", "linkColorSiteBlack", "linkColorSiteBeige");
    });
    buttons.forEach(item => {
        item.classList.add('buttonColorSiteWhite');
        item.classList.remove("buttonColorSiteBlue", "buttonColorSiteBlack", "buttonColorSiteBeige");
    });
    checkbox.forEach(item => {
        item.classList.add('checkboxColorSiteWhite');
        item.classList.remove("checkboxColorSiteBlue", "checkboxColorSiteBlack", "checkboxColorSiteBeige");
    });
    noBorder.forEach(item => item.classList.add('footerNoBorder', 'newsNoBorder'));
    noHover.forEach(item => item.style.backgroundColor = 'inherit');
}

function applyBlueStyles() {
    normalEyeSvg.style.display = "inline-block";
    normalEyeWhiteSvg.style.display = "none";
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
}

function applyBlackStyles() {
    normalEyeSvg.style.display = "none";
    normalEyeWhiteSvg.style.display = "inline-block";
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
}

function applyBeigeStyles() {
    normalEyeSvg.style.display = "inline-block";
    normalEyeWhiteSvg.style.display = "none";
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
}

function deleteVisionStyles() {
    imgYes.dispatchEvent(new Event("click"));
    normalEyeSvg.style.display = "none";
    normalEyeWhiteSvg.style.display = "none";
    vision.style.display = "none";
    tenderEyeSvg.style.display = "inline-block";
    mostSelectors.forEach(item => item.removeAttribute("style"));
    siteContent.forEach(item => item.removeAttribute("style"));
    siteBody.removeAttribute("class");
    links.forEach(item => item.classList.remove("linkColorSiteBlue", "linkColorSiteWhite", "linkColorSiteBlack", "linkColorSiteBeige"));
    buttons.forEach(item => item.classList.remove('buttonColorSiteBlue', "buttonColorSiteWhite", "buttonColorSiteBlack", "buttonColorSiteBeige"));
    checkbox.forEach(item => item.classList.remove('checkboxColorSiteBlue', "checkboxColorSiteWhite", "checkboxColorSiteBlack", "checkboxColorSiteBeige"));
    noBorder.forEach(item => item.classList.remove('footerNoBorder', 'newsNoBorder'));
    localStorage.removeItem('applyBlackStyles', 'applyWhiteStyles', 'applyBlueStyles', 'applyBeigeStyles');
}

function tenderEyed(event) {
    event.preventDefault();
    applyWhiteStyles();
    localStorage.setItem('applyWhiteStyles', applyWhiteStyles);
    localStorage.removeItem('applyBlackStyles', 'applyBlueStyles', 'applyBeigeStyles');
}

function normalEyed(event) {
    event.preventDefault();
    deleteVisionStyles();
}

function colorSiteClick(event) {
    event.preventDefault();
    siteBody.removeAttribute("class");
    let id = this.getAttribute("id");
    siteBody.classList.add(id);
    if (id === 'colorSiteBlue') {
        applyBlueStyles();
        localStorage.setItem('applyBlueStyles', applyBlueStyles);
        localStorage.removeItem('applyBlackStyles', 'applyWhiteStyles', 'applyBeigeStyles');
    } else if (id === 'colorSiteBlack') {
        applyBlackStyles();
        localStorage.setItem('applyBlackStyles', applyBlackStyles);
        localStorage.removeItem('applyBlueStyles', 'applyWhiteStyles', 'applyBeigeStyles');
    } else if (id === 'colorSiteWhite') {
        applyWhiteStyles();
        localStorage.setItem('applyWhiteStyles', applyWhiteStyles);
        localStorage.removeItem('applyBlackStyles', 'applyBlueStyles', 'applyBeigeStyles');
    } else if (id === 'colorSiteBeige') {
        applyBeigeStyles();
        localStorage.setItem('applyBeigeStyles', applyBeigeStyles);
        localStorage.removeItem('applyBlackStyles', 'applyWhiteStyles', 'applyBlueStyles');
    } else console.log('Error classlist');
}

const getWhiteStyles = localStorage.getItem('applyWhiteStyles');
const getBlackStyles = localStorage.getItem('applyBlackStyles');
const getBlueStyles = localStorage.getItem('applyBlueStyles');
const getBeigeStyles = localStorage.getItem('applyBeigeStyles');

if (getWhiteStyles !== null) {
    applyWhiteStyles();
} else if (getBlackStyles !== null) {
    applyBlackStyles();
} else if (getBlueStyles !== null) {
    applyBlueStyles();
} else if (getBeigeStyles !== null) {
    applyBeigeStyles();
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
    tenderEyeSvg.addEventListener("click", tenderEyed);
    normalEyeSvg.addEventListener("click", normalEyed);
    normalEyeWhiteSvg.addEventListener("click", normalEyed);
    document.getElementById("reduceFont").addEventListener("click", () => updateFontSizes(-1));
    document.getElementById("increaseFont").addEventListener("click", () => updateFontSizes(1));
    document.querySelectorAll(".colorSite").forEach(item => item.addEventListener("click", colorSiteClick));
    document.querySelectorAll(".changeLetterSpacing").forEach(item => item.addEventListener("click", spacing));
    document.getElementById("imagesNo").addEventListener("click", imagesNoClick);
    imgYes.addEventListener("click", imagesYesClick);
    document.getElementById("imagesBlackWhite").addEventListener("click", imagesBlackWhiteClick);
}

init();