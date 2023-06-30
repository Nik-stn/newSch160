document.addEventListener("DOMContentLoaded", function () {
    function openHideMenu(curElem) {
        let optMenu = document.getElementById("optMenu");
        curElem.classList.toggle("active-menu");
        document.getElementById("main_nav").classList.toggle("active-main_nav");

        document.getElementById("h_menu").style.display = "none";
        if (!document.querySelector(".menu__icon").classList.contains("active-menu")) {
            document.getElementById("h_menu").removeAttribute("style");
        }
    }

    function onResize() {
        let width = document.body.clientWidth;
        let mainNav = document.getElementById("main_nav");
        if (width > 750 && mainNav.classList.contains("active-main_nav")) {
            openHideMenu(curElem);
        }
    }

    function versionForVisuallyImpairedClick(event) {
        event.preventDefault();
        this.style.display = "none";
        document.getElementById("normalVersion").style.display = "inline-block";
        document.getElementById("settings").style.display = "inline-block";
        document.body.classList.add("colorSiteBlack");
        setObjCookies('{"bg": "colorSiteBlack"}');

        let bxNext = document.querySelector(".bx-next");
        bxNext.dispatchEvent(new Event("click"));
    }

    function normalVersionClick(event) {
        event.preventDefault();
        document.body.removeAttribute("class");
        document.getElementById("layout").removeAttribute("style");
        document.getElementById("imagesYes").dispatchEvent(new Event("click"));
        document.getElementById("normalVersion").style.display = "none";
        document.getElementById("settings").style.display = "none";
        document.getElementById("optMenu").style.display = "none";
        document.getElementById("versionForVisuallyImpaired").style.display = "inline-block";
        removeCookies("havingPoorVision");

        let bxNext = document.querySelector(".bx-next");
        bxNext.dispatchEvent(new Event("click"));
    }

    function settingsClick(event) {
        event.preventDefault();
        document.getElementById("optMenu").style.display = "block";
    }

    function closeBasicSettingsClick(event) {
        event.preventDefault();
        document.getElementById("optMenu").style.display = "none";
    }

    function settingClick(event) {
        event.preventDefault();
        document.getElementById("settingMenu").style.display = "block";
    }

    function reduceFontClick(event) {
        event.preventDefault();
        let layout = document.getElementById("layout");
        let fz = parseFloat(window.getComputedStyle(layout).fontSize);
        if (fz <= 16) return;
        fz -= 1;
        layout.style.fontSize = fz + "px";
        setObjCookies('{"fz": "' + fz + '"}');
    }

    function increaseFontClick(event) {
        event.preventDefault();
        let layout = document.getElementById("layout");
        let fz = parseFloat(window.getComputedStyle(layout).fontSize);
        if (fz >= 24) return;
        fz += 1;
        layout.style.fontSize = fz + "px";
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
        let img = document.querySelectorAll("img:not('.mytree img'):not('#lng img')");
        img.forEach(function (item) {
            item.classList.remove("imagesBlackWhite");
        });
        document.querySelectorAll(".wrap-images-no > .images.no").forEach(function (item) {
            item.style.display = "none";
        });



        setObjCookies('{"images": "no"}');
    }

    function imagesYesClick(event) {
        event.preventDefault();
        let img = document.querySelectorAll("img:not('.mytree img'):not('#lng img')");
        img.forEach(function (item) {
            item.classList.add("imagesBlackWhite");
        });
        document.querySelectorAll(".wrap-images-no > .images.no").forEach(function (item) {
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
            document.querySelectorAll("img:not('.mytree img'):not('#lng img')").forEach(function (item) {
                item.classList.add("imagesBlackWhite");
            });
        } else {
            document.querySelectorAll("img:not('.mytree img'):not('#lng img')").forEach(function (item) {
                item.classList.remove("imagesBlackWhite");
            });
        }
    }

    function init() {
        document.getElementById("versionForVisuallyImpaired").addEventListener("click", versionForVisuallyImpairedClick);
        document.getElementById("normalVersion").addEventListener("click", normalVersionClick);
        document.getElementById("settings").addEventListener("click", settingsClick);
        document.getElementById("closeBasicSettings").addEventListener("click", closeBasicSettingsClick);
        document.getElementById("setting").addEventListener("click", settingClick);
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