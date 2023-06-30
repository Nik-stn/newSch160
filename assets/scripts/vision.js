document.addEventListener("DOMContentLoaded", function () {
    function tenderEyed(event) {
        event.preventDefault();
        this.style.display = "none";
        document.getElementById("normal-eyed").style.display = "inline-block";
        document.querySelector(".vision").style.display = "block";
        document.body.classList.add("colorSiteWhite");
        setObjCookies('{"bg": "colorSiteWhite"}');
        document.querySelector(".main").style.background = "0";
        document.querySelectorAll('.header-pc .parent>a, .header-pc .parent>span, .news-tabs-btn, .news-sch-content, .announcement-sch-content').forEach(function (item) {
            item.style.color = "#000";
        });
        document.querySelectorAll('.popular-item, .btn-header-bar, .header-nav, .news-tabs-btn, .announcement-tab-btn, .news-sch-arcive-text, .announcement-sch-arcive-text').forEach(function (item) {
            item.style.background = "#f8f8f8";
        });
    }

    function normalEyed(event) {
        event.preventDefault();
        document.body.removeAttribute("class");
        document.getElementById("imagesYes").dispatchEvent(new Event("click"));
        document.getElementById("normal-eyed").style.display = "none";
        document.querySelector(".vision").style.display = "none";
        document.getElementById("tender-eyed").style.display = "inline-block";
        document.querySelectorAll('.popular-item, .btn-header-bar, .header-nav, .main, .header-pc .parent>a, .header-pc .parent>span, .news-tabs-btn, .announcement-tab-btn, .news-sch-content, .announcement-sch-content, .news-sch-arcive-text, .announcement-sch-arcive-text').forEach(function (item) {
            item.removeAttribute("style");
        });
        removeCookies("havingPoorVision");
    }

    function reduceFontClick(event) {
        event.preventDefault();
        let siteContent = document.querySelector(".site-content");
        let fz = parseFloat(window.getComputedStyle(siteContent).fontSize);
        if (fz <= 16) return;
        fz -= 1;
        siteContent.style.fontSize = fz + "px";
        setObjCookies('{"fz": "' + fz + '"}');
    }

    function increaseFontClick(event) {
        event.preventDefault();
        let siteContent = document.querySelector(".site-content");
        let fz = parseFloat(window.getComputedStyle(siteContent).fontSize);
        if (fz >= 24) return;
        fz += 1;
        siteContent.style.fontSize = fz + "px";
        setObjCookies('{"fz": "' + fz + '"}');
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
        let img = document.querySelectorAll("img");
        img.forEach(function (item) {
            item.classList.remove("imagesBlackWhite");
            item.style.display = "none";
        });
        setObjCookies('{"images": "no"}');
    }

    function imagesYesClick(event) {
        event.preventDefault();
        let img = document.querySelectorAll("img");
        img.forEach(function (item) {
            item.classList.add("imagesBlackWhite");
            item.style.display = "block";
        });
        setObjCookies('{"images": "yes"}');
    }

    function setObjCookies(obj) {
        let date = new Date(new Date().getTime() + 60 * 1000 * 60 * 24 * 365);
        document.cookie = "havingPoorVision=" + obj + "; path=/; expires=" + date.toUTCString();
    }

    function removeCookies(cookieName) {
        let date = new Date(new Date().getTime() - 1000);
        document.cookie = cookieName + "=; path=/; expires=" + date.toUTCString();
    }

    function renderColorBorderImages() {
        let bodyClass = document.body.classList;
        if (bodyClass.contains("colorSiteBlack")) {
            document.querySelectorAll("img").forEach(function (item) {
                item.classList.add("imagesBlackWhite");
            });
        } else {
            document.querySelectorAll("img").forEach(function (item) {
                item.classList.remove("imagesBlackWhite");
            });
        }
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

        window.addEventListener("resize", onResize);

        renderColorBorderImages();
    }

    init();
});