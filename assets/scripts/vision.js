const img = document.querySelectorAll("#ya-site-form0 input.ya-site-form__submit, img, .sch-map,  .slider-icon, .banners-icon, .header-mobile .parent");
const siteContent = document.querySelectorAll(".site-content, .popular-item, .news-sch-item, .announcement-sch-item");
const buttons = document.querySelectorAll(".popular-item, .btn-header-bar, .header-nav, .news-tabs-btn, .announcement-tab-btn, .news-sch-arcive-text, .announcement-sch-arcive-text, .footer, .header-mobile .level_0");
const checkbox = document.querySelectorAll(".checkbox-line span, .scrooll-to-top");
const noBorder = document.querySelectorAll('.footer-flex, .news-sch-item, .announcement-sch-item');
const links = document.querySelectorAll('.header-pc .parent>a, .header-pc .parent>span, .news-tabs-btn, .news-sch-content, .announcement-sch-content, .footer, .about-text, .footer-nav .parent, .count-title, .about-text-item a, .footer-nav li a, .footer-copyright a, .footer-copyright, .header-mobile .parent>a, .header-mobile .level_1>li>a, .popular-item a, .link-header-bar, .news-sch-archive-link, .announcement-sch-archive-link');
const mostSelectors = document.querySelectorAll('.popular-item, .btn-header-bar, .header-nav, .main, .header-pc .parent>a, .header-pc .parent>span, .news-tabs-btn, .announcement-tab-btn, .news-sch-content, .announcement-sch-content, .news-sch-arcive-text, .announcement-sch-arcive-text, .footer, .about-text, .footer-nav .parent, .count-title, .about-text-item a, .footer-nav li a, .footer-copyright a, .footer-copyright, .header-mobile .level_0, .header-mobile .parent>a, .header-mobile .level_1>li>a, .checkbox-line span, .scrooll-to-top');
const noHover = document.querySelectorAll('.header-pc .parent>a:hover::before, .header-pc .parent>span:hover::before');

function tenderEyed(event) {
    event.preventDefault();
    this.style.display = "none";
    document.getElementById("normal-eyed").style.display = "inline-block";
    document.querySelector(".vision").style.display = "block";
    document.body.classList.add("colorSiteWhite");
    document.querySelector(".main").style.background = "0";
    links.forEach(item => item.classList.add('linkColorSiteWhite'));
    buttons.forEach(item => item.classList.add('buttonColorSiteWhite'));
    checkbox.forEach(item => item.classList.add('checkboxColorSiteWhite'));
    noBorder.forEach(item => item.classList.add('footerNoBorder', 'newsNoBorder'));
    noHover.forEach(item => item.style.backgroundColor = 'inherit');
}

function normalEyed(event) {
    event.preventDefault();
    document.body.removeAttribute("class");
    document.getElementById("imagesYes").dispatchEvent(new Event("click"));
    document.getElementById("normal-eyed").style.display = "none";
    document.getElementById("normal-eyed-white").style.display = "none";
    document.querySelector(".vision").style.display = "none";
    document.getElementById("tender-eyed").style.display = "inline-block";
    mostSelectors.forEach( item => item.removeAttribute("style"));
    siteContent.forEach( item => item.removeAttribute("style"));
    links.forEach( item => item.classList.remove("linkColorSiteBlue", "linkColorSiteWhite", "linkColorSiteBlack" ,"linkColorSiteBeige"));
    buttons.forEach( item => item.classList.remove('buttonColorSiteBlue', "buttonColorSiteWhite", "buttonColorSiteBlack", "buttonColorSiteBeige"));
    checkbox.forEach( item => item.classList.remove('checkboxColorSiteBlue', "checkboxColorSiteWhite", "checkboxColorSiteBlack", "checkboxColorSiteBeige"));
    noBorder.forEach( item => item.classList.remove('footerNoBorder', 'newsNoBorder'));
}

function updateFontSizes(changeAmount) {
   return siteContent.forEach(item => {
      let fz = parseFloat(window.getComputedStyle(item).fontSize);
      fz += changeAmount;
      if (fz >= 12 && fz <= 24) item.style.fontSize = fz + "px";
      else if (fz > 24) fz = 24;
      else fz = 12
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
        links.forEach( item => {
            item.classList.add('linkColorSiteBlue');
            item.classList.remove("linkColorSiteWhite", "linkColorSiteBlack", "linkColorSiteBeige");
        });
        buttons.forEach( item => {
            item.classList.add('buttonColorSiteBlue');
            item.classList.remove("buttonColorSiteWhite", "buttonColorSiteBlack", "buttonColorSiteBeige");
        });
        checkbox.forEach( item=> {
            item.classList.add('checkboxColorSiteBlue');
            item.classList.remove("checkboxColorSiteWhite", "checkboxColorSiteBlack", "checkboxColorSiteBeige");
        });
    } else if (id === 'colorSiteBlack') {
        document.getElementById("normal-eyed").style.display = "none";
        document.getElementById("normal-eyed-white").style.display = "inline-block";    
        links.forEach( item=> {
            item.classList.add('linkColorSiteBlack');
            item.classList.remove("linkColorSiteWhite", "linkColorSiteBlue", "linkColorSiteBeige");
        });
        buttons.forEach( item=> {
            item.classList.add('buttonColorSiteBlack');
            item.classList.remove("buttonColorSiteWhite", "buttonColorSiteBlue", "buttonColorSiteBeige");
        });
        checkbox.forEach( item=> {
            item.classList.add('checkboxColorSiteBlack');
            item.classList.remove("checkboxColorSiteWhite", "checkboxColorSiteBlue", "checkboxColorSiteBeige");
        });
    } else if (id === 'colorSiteWhite') {
        document.getElementById("normal-eyed").style.display = "inline-block";
        document.getElementById("normal-eyed-white").style.display = "none";
        links.forEach( item=> {
            item.classList.add('linkColorSiteWhite');
            item.classList.remove("linkColorSiteBlack", "linkColorSiteBlue", "linkColorSiteBeige");
        });
        buttons.forEach( item=> {
            item.classList.add('buttonColorSiteWhite');
            item.classList.remove("buttonColorSiteBlack", "buttonColorSiteBlue", "buttonColorSiteBeige");
        });
        checkbox.forEach( item=> {
            item.classList.add('checkboxColorSiteWhite');
            item.classList.remove("checkboxColorSiteBlack", "checkboxColorSiteBlue", "checkboxColorSiteBeige");
        });
    } else if (id === 'colorSiteBeige') {
        document.getElementById("normal-eyed").style.display = "inline-block";
        document.getElementById("normal-eyed-white").style.display = "none";
        links.forEach( item=> {
            item.classList.add('linkColorSiteBeige');
            item.classList.remove("linkColorSiteBlack", "linkColorSiteBlue", "linkColorSiteWhite");
        });
        buttons.forEach( item=> {
            item.classList.add('buttonColorSiteBeige');
            item.classList.remove("buttonColorSiteBlack", "buttonColorSiteBlue", "buttonColorSiteWhite");
        });
        checkbox.forEach( item=> {
            item.classList.add('checkboxColorSiteBeige');
            item.classList.remove("checkboxColorSiteBlack", "checkboxColorSiteBlue", "checkboxColorSiteWhite");
        });
    } else console.log('Error classlist');
}

function imagesNoClick(event) {
    event.preventDefault();
    img.forEach( item => {
        item.classList.remove("imagesBlackWhite");
        item.style.display = "none";
    });
}

function imagesYesClick(event) {
    event.preventDefault();
    img.forEach( item => {
        item.classList.remove("imagesBlackWhite");
        item.style.display = "block";
    });
}

function imagesBlackWhiteClick(event) {
    event.preventDefault();
    img.forEach( item => {
        item.classList.add("imagesBlackWhite");
        item.style.display = "block";
    });
}

function spacing() {
    const data = this.getAttribute("data-letter-spacing");
    siteContent.forEach( item => item.style.letterSpacing = data + 'px');
}

function init() {
    document.getElementById("tender-eyed").addEventListener("click", tenderEyed);
    document.getElementById("normal-eyed").addEventListener("click", normalEyed);
    document.getElementById("reduceFont").addEventListener("click", () => updateFontSizes(-1));
    document.getElementById("increaseFont").addEventListener("click", () => updateFontSizes(1));
    document.querySelectorAll(".colorSite").forEach( item => item.addEventListener("click", colorSiteClick));
    document.querySelectorAll(".changeLetterSpacing").forEach( item => item.addEventListener("click", spacing));
    document.getElementById("imagesNo").addEventListener("click", imagesNoClick);
    document.getElementById("imagesYes").addEventListener("click", imagesYesClick);
    document.getElementById("imagesBlackWhite").addEventListener("click", imagesBlackWhiteClick);
}

init();