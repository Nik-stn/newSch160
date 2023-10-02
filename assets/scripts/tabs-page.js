const tabsLink = document.querySelectorAll(".tabs-link");
const tabsItem = document.querySelectorAll(".tabs-item");
const firstLink = document.querySelector(".tabs-link");
const firstItem = document.querySelector(".tabs-item");

firstLink.classList.add('active');
firstItem.classList.add('active');

tabsLink.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function (event) {
        event.preventDefault();
        const currentLink = item;
        const tabId = currentLink.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);

        if (!currentLink.classList.contains('active')) {
            tabsLink.forEach(function (item) {
                item.classList.remove('active');
            });

            tabsItem.forEach(function (item) {
                item.classList.remove('active');
            });

            currentLink.classList.add('active');
            currentTab.classList.add('active');
        }
    });
}