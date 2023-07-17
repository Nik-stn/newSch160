document.addEventListener("DOMContentLoaded", function () {
    function tenderEyed(event) {
        event.preventDefault();
        this.style.display = "none";
        document.getElementById("normal-eyed").style.display = "inline-block";
        document.querySelector(".vision").style.display = "block";
        document.body.classList.add("colorSiteWhite");
        setObjCookies('{"bg": "colorSiteWhite"}');
        document.querySelector(".main").style.background = "0";
        document.querySelectorAll('.header-pc .parent>a, .header-pc .parent>span, .news-tabs-btn, .news-sch-content, .announcement-sch-content, .footer, .about-text, .footer-nav .parent, .count-title, .about-text-item a, .footer-nav li a, .footer-copyright a, .footer-copyright, .header-mobile .parent>a, .header-mobile .level_1>li>a').forEach(function (item) {
            item.style.color = "#000";
        });
        document.querySelectorAll('.popular-item, .btn-header-bar, .header-nav, .news-tabs-btn, .announcement-tab-btn, .news-sch-arcive-text, .announcement-sch-arcive-text, .footer, .header-mobile .level_0').forEach(function (item) {
            item.style.background = "#f8f8f8";
        });
        document.querySelectorAll('.checkbox-line span, .scrooll-to-top').forEach(function (item) {
            item.style.background = "#000";
        });
        document.querySelectorAll('.footer-flex').forEach(function (item) {
            item.style.border = "0";
        });
    }

    function normalEyed(event) {
        event.preventDefault();
        document.body.removeAttribute("class");
        document.getElementById("imagesYes").dispatchEvent(new Event("click"));
        document.getElementById("normal-eyed").style.display = "none";
        document.querySelector(".vision").style.display = "none";
        document.getElementById("tender-eyed").style.display = "inline-block";
        document.querySelectorAll('.popular-item, .btn-header-bar, .header-nav, .main, .header-pc .parent>a, .header-pc .parent>span, .news-tabs-btn, .announcement-tab-btn, .news-sch-content, .announcement-sch-content, .news-sch-arcive-text, .announcement-sch-arcive-text, .footer, .about-text, .footer-nav .parent, .count-title, .about-text-item a, .footer-nav li a, .footer-copyright a, .footer-copyright, .header-mobile .level_0, .header-mobile .parent>a, .header-mobile .level_1>li>a, .checkbox-line span, .scrooll-to-top').forEach(function (item) {
            item.removeAttribute("style");
        });
        removeCookies("havingPoorVision");
    }

    function reduceFontClick(event) {
        event.preventDefault();
        let siteContent = document.querySelectorAll(".site-content, .popular-item, .news-sch-item, .announcement-sch-item");
        siteContent.forEach(function (item) {
            let fz = parseFloat(window.getComputedStyle(item).fontSize);
            if (fz <= 16) return;
            fz -= 1;
            item.style.fontSize = fz + "px";
            setObjCookies('{"fz": "' + fz + '"}');
        });
    }

    function increaseFontClick(event) {
        event.preventDefault();
        let siteContent = document.querySelectorAll(".site-content, .popular-item, .news-sch-item, .announcement-sch-item");
        siteContent.forEach(function (item) {
            let fz = parseFloat(window.getComputedStyle(item).fontSize);
            if (fz >= 24) return;
            fz += 1;
            item.style.fontSize = fz + "px"; 
            setObjCookies('{"fz": "' + fz + '"}');
        });
    }

    function colorSiteClick(event) {
        event.preventDefault();
        document.body.removeAttribute("class");
        let id = this.getAttribute("id");
        document.body.classList.add(id);
        renderColorBorderImages();
        setObjCookies('{"bg": "' + id + '"}');
    }

    function imagesNoClick(event) {
        event.preventDefault();
        let img = document.querySelectorAll("img, .sch-map");
        img.forEach(function (item) {
            item.classList.remove("imagesBlackWhite");
            item.style.display = "none";
        });
        setObjCookies('{"images": "no"}');
    }

    function imagesYesClick(event) {
        event.preventDefault();
        let img = document.querySelectorAll("img, .sch-map, #ya-site-form0 input.ya-site-form__submit, .slider-icon, .banners-icon, .header-mobile .parent");
        img.forEach(function (item) {
            item.classList.remove("imagesBlackWhite");
            item.style.display = "block";
        });
        setObjCookies('{"images": "yes"}');
    }

    function imagesBlackWhiteClick(event) {
        event.preventDefault();
        let img = document.querySelectorAll("img, .sch-map, #ya-site-form0 input.ya-site-form__submit, .slider-icon, .banners-icon, .header-mobile .parent");
        img.forEach(function (item) {
            item.classList.add("imagesBlackWhite");
            item.style.display = "block";
        });
    }

    function setObjCookies(obj) {
        let date = new Date(new Date().getTime() + 60 * 1000 * 60 * 24 * 365);
        document.cookie = "havingPoorVision=" + obj + "; path=/; expires=" + date.toUTCString();
    }

    function removeCookies(cookieName) {
        let date = new Date(new Date().getTime() - 1000);
        document.cookie = cookieName + "=; path=/; expires=" + date.toUTCString();
    }


    function init() {
        document.getElementById("tender-eyed").addEventListener("click", tenderEyed);
        document.getElementById("normal-eyed").addEventListener("click", normalEyed);
        document.getElementById("reduceFont").addEventListener("click", reduceFontClick);
        document.getElementById("increaseFont").addEventListener("click", increaseFontClick);
        document.querySelectorAll(".colorSite").forEach(function (item) {
            item.addEventListener("click", colorSiteClick);
        });
        document.getElementById("imagesNo").addEventListener("click", imagesNoClick);
        document.getElementById("imagesYes").addEventListener("click", imagesYesClick);
        document.getElementById("imagesBlackWhite").addEventListener("click", imagesBlackWhiteClick);

        window.addEventListener("resize", onResize);

        renderColorBorderImages();
    }

    init();
});