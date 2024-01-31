const img = document.querySelectorAll("#ya-site-form0 input.ya-site-form__submit, img, .sch-map,  .slider-icon, .banners-icon, .header-mobile .parent");
const siteContent = document.querySelectorAll(".site-content, .popular-item, .news-box, .announcement-poll-item, .announcement-sch-item");
const buttons = document.querySelectorAll(".popular-item, .btn-header-bar, .btn-header-bar-blue, .header-nav, .announcement-tabs-btn, .news-tabs-btn, .announcement-tab-btn, .news-sch-arcive-text, .announcement-sch-arcive-text, .poll-link-archive-text, .footer, .header-mobile .level_0");
const checkbox = document.querySelectorAll(".checkbox-line span, .scrooll-to-top");
const noBorder = document.querySelectorAll('.footer-flex, .news-sch-item, .announcement-poll-item, .announcement-sch-item, .news-rss-content');
const links = document.querySelectorAll('.header-pc .parent>a, .btn-header-bar, .btn-header-bar-blue, .header-pc .parent>span, .announcement-tabs-btn,  .news-rss-link, .news-tabs-btn, .news-sch-content, .announcement-sch-content, .footer, .about-text, .footer-nav .parent, .count-title, .about-text-item a, .footer-nav li a, .footer-copyright a, .footer-copyright, .header-mobile .parent>a, .header-mobile .level_1>li>a, .popular-item a, .link-header-bar, .news-sch-archive-link, .announcement-poll-archive-link, .poll-link-archive, .announcement-sch-archive-link');
const mostSelectors = document.querySelectorAll('.popular-item, .btn-header-bar, .btn-header-bar-blue, .header-nav, .main, .header-pc .parent>a, .header-pc .parent>span, .announcement-tabs-btn, .news-tabs-btn, .announcement-tab-btn, .news-sch-content, .announcement-sch-content, .news-sch-arcive-text, .announcement-sch-arcive-text, .poll-link-archive-text, .footer, .about-text, .footer-nav .parent, .count-title, .about-text-item a, .footer-nav li a, .footer-copyright a, .footer-copyright, .header-mobile .level_0, .header-mobile .parent>a, .header-mobile .level_1>li>a, .checkbox-line span, .scrooll-to-top');
const noHover = document.querySelectorAll('.header-pc .parent>a:hover::before, .header-pc .parent>span:hover::before');

const normalEyeSvg = document.getElementById("normal-eyed");
const siteBody = document.querySelector('body');
const vision = document.querySelector(".vision");
const tenderEyeSvg = document.getElementById("tender-eyed");
const siteMain = document.querySelector(".main");
const normalEyeWhiteSvg = document.getElementById("normal-eyed-white");
const imgYes = document.getElementById("imagesYes");
const letterSpacing = document.querySelectorAll(".changeLetterSpacing");

function updateStyles() {
    normalEyeSvg.style.display = "inline-block";
    vision.style.display = "block";
    tenderEyeSvg.style.display = "none";
    siteMain.style.background = "0";
    normalEyeWhiteSvg.style.display = "none";
}

function applyWhiteStyles() {
    updateStyles();
    siteBody.classList.add("colorSiteWhite");
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
    updateStyles();
    siteBody.classList.add("colorSiteBlue");
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
    updateStyles();
    normalEyeSvg.style.display = "none";
    normalEyeWhiteSvg.style.display = "inline-block";
    siteBody.classList.add("colorSiteBlack");
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
    updateStyles();
    siteBody.classList.add("colorSiteBeige");
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
    localStorage.clear();
}

function tenderEyed(event) {
    event.preventDefault();
    applyWhiteStyles();
    localStorage.setItem('applyWhiteStyles', applyWhiteStyles);
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
        localStorage.removeItem('applyBlackStyles');
        localStorage.removeItem('applyWhiteStyles');
        localStorage.removeItem('applyBeigeStyles');
    } else if (id === 'colorSiteBlack') {
        applyBlackStyles();
        localStorage.setItem('applyBlackStyles', applyBlackStyles);
        localStorage.removeItem('applyBlueStyles');
        localStorage.removeItem('applyBeigeStyles');
        localStorage.removeItem('applyWhiteStyles');
    } else if (id === 'colorSiteWhite') {
        applyWhiteStyles();
        localStorage.setItem('applyWhiteStyles', applyWhiteStyles);
        localStorage.removeItem('applyBlackStyles');
        localStorage.removeItem('applyBlueStyles');
        localStorage.removeItem('applyBeigeStyles');
    } else if (id === 'colorSiteBeige') {
        applyBeigeStyles();
        localStorage.setItem('applyBeigeStyles', applyBeigeStyles);
        localStorage.removeItem('applyBlackStyles');
        localStorage.removeItem('applyWhiteStyles');
        localStorage.removeItem('applyBlueStyles');
    } else console.log('Error classlist');
}

function updateFontSizes(changeAmount) {
    let fz;
    siteContent.forEach(item => {
        fz = parseFloat(window.getComputedStyle(item).fontSize);
        fz += changeAmount;
        if (fz >= 12 && fz <= 24) item.style.fontSize = fz + "px";
        else if (fz > 24) fz = 24;
        else fz = 12;
    });
    localStorage.setItem('applyFontSize', fz);
}

function imagesNoClick(event) {
    event.preventDefault();
    const imgDelete = img.forEach(item => {
        item.classList.remove("imagesBlackWhite");
        item.style.display = "none";
    });
    localStorage.setItem('applyImgDelete', imgDelete);
    localStorage.removeItem('applyImgColor');
    localStorage.removeItem('applyImgBlackWhiteStyles');
}

function imagesYesClick(event) {
    event.preventDefault();
    const imgColor = img.forEach(item => {
        item.classList.remove("imagesBlackWhite");
        item.style.display = "block";
    });
    localStorage.setItem('applyImgColor', imgColor);
    localStorage.removeItem('applyImgDelete');
    localStorage.removeItem('applyImgBlackWhiteStyles');
}

function imagesBlackWhiteClick(event) {
    event.preventDefault();
    const imgBlackWhite = img.forEach(item => {
        item.classList.add("imagesBlackWhite");
        item.style.display = "block";
    });
    localStorage.setItem('applyImgBlackWhiteStyles', imgBlackWhite);
    localStorage.removeItem('applyImgColor');
    localStorage.removeItem('applyImgDelete');
}

function spacing() {
    const data = this.getAttribute("data-letter-spacing");
    siteContent.forEach(item => item.style.letterSpacing = data + 'px');
    localStorage.setItem('applySpaceStyles', data);
}

function changeImageFontSpacing() {
    siteContent.forEach(item => item.style.letterSpacing = getSpacing + 'px');
    siteContent.forEach(item => item.style.fontSize = getFontSize + "px");
    if (getImgColor !== null) {
        img.forEach(item => {
            item.classList.remove("imagesBlackWhite");
            item.style.display = "block";
        });
    } else if (getImgBlackWhite !== null) {
        img.forEach(item => {
            item.classList.add("imagesBlackWhite");
            item.style.display = "block";
        });
    } else if (getImgDelete !== null) {
        img.forEach(item => {
            item.classList.remove("imagesBlackWhite");
            item.style.display = "none";
        });
    }
}

const getWhiteStyles = localStorage.getItem('applyWhiteStyles');
const getBlackStyles = localStorage.getItem('applyBlackStyles');
const getBlueStyles = localStorage.getItem('applyBlueStyles');
const getBeigeStyles = localStorage.getItem('applyBeigeStyles');
const getSpacing = localStorage.getItem('applySpaceStyles');
const getFontSize = localStorage.getItem('applyFontSize');
const getImgBlackWhite = localStorage.getItem('applyImgBlackWhiteStyles');
const getImgDelete = localStorage.getItem('applyImgDelete');
const getImgColor = localStorage.getItem('applyImgColor');

if (getWhiteStyles !== null) {
    applyWhiteStyles();
    changeImageFontSpacing();
} 
else if (getBlackStyles !== null) {
    applyBlackStyles();
    changeImageFontSpacing();
} 
else if (getBlueStyles !== null) {
    applyBlueStyles();
    changeImageFontSpacing();
} 
else if (getBeigeStyles !== null) {
    applyBeigeStyles();
    changeImageFontSpacing();
}

function init() {
    tenderEyeSvg.addEventListener("click", tenderEyed);
    normalEyeSvg.addEventListener("click", normalEyed);
    normalEyeWhiteSvg.addEventListener("click", normalEyed);
    document.getElementById("reduceFont").addEventListener("click", () => updateFontSizes(-1));
    document.getElementById("increaseFont").addEventListener("click", () => updateFontSizes(1));
    document.querySelectorAll(".colorSite").forEach(item => item.addEventListener("click", colorSiteClick));
    letterSpacing.forEach(item => item.addEventListener("click", spacing));
    document.getElementById("imagesNo").addEventListener("click", imagesNoClick);
    imgYes.addEventListener("click", imagesYesClick);
    document.getElementById("imagesBlackWhite").addEventListener("click", imagesBlackWhiteClick);
}

init();