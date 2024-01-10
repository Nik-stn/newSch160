const newsTabsBtn = document.querySelectorAll(".news-tabs-btn");
const newsItems = document.querySelectorAll(".news-tabs-item");
const announcementTabsBtn = document.querySelectorAll(".announcement-tabs-btn");
const announcementItems = document.querySelectorAll(".announcement-tabs-item");

newsTabsBtn.forEach(onNewsTabClick);
announcementTabsBtn.forEach(onAnnouncementTabClick)


//News
function onNewsTabClick(item) {
    item.addEventListener("click", function () {
        const currentBtn = item;
        const tabId = currentBtn.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            newsTabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            newsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');

            // Сохраняем ID активного таба в sessionStorage
            sessionStorage.setItem('activeNewsTab', tabId);
            sessionStorage.setItem('activeNewsTabBtn', currentBtn.getAttribute('id'));

        }
    });
}

// Проверяем, есть ли сохраненный ID активного таба в sessionStorage
const activeNewsTabId = sessionStorage.getItem('activeNewsTab');
if (activeNewsTabId) {
    const activeNewsTab = document.querySelector(activeNewsTabId);
    if (activeNewsTab) {
        // Если найден сохраненный таб, добавляем ему класс 'active'
        document.getElementById('news-btn-1').classList.remove('active');
        document.getElementById('news-tab-1').classList.remove('active');
        activeNewsTab.classList.add('active');
    }
}

// Проверяем, есть ли сохраненная активная константа в sessionStorage
const activeNewsTabBtnId = sessionStorage.getItem('activeNewsTabBtn');
if (activeNewsTabBtnId) {
    const activeNewsTabBtn = document.querySelector('#' + activeNewsTabBtnId);
    if (activeNewsTabBtn) {
        // Если найдена сохраненная активная константа, добавляем ей класс 'active'
        activeNewsTabBtn.classList.remove('active');
        activeNewsTabBtn.classList.add('active');
    }
}

//Announcement
function onAnnouncementTabClick(items) {
    items.addEventListener("click", function () {
        const currentBtn = items;
        const tabId = currentBtn.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            announcementTabsBtn.forEach(function (items) {
                items.classList.remove('active');
            });

            announcementItems.forEach(function (items) {
                items.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');

            // Сохраняем ID активного таба в sessionStorage
            sessionStorage.setItem('activeAnnouncementTab', tabId);
            sessionStorage.setItem('activeAnnouncementTabBtn', currentBtn.getAttribute('id'));

        }
    });
}

// Проверяем, есть ли сохраненный ID активного таба в sessionStorage
const activeAnnouncementTabId = sessionStorage.getItem('activeAnnouncementTab');
if (activeAnnouncementTabId) {
    const activeAnnouncementTab = document.querySelector(activeAnnouncementTabId);
    if (activeAnnouncementTab) {
        // Если найден сохраненный таб, добавляем ему класс 'active'
        document.getElementById('announcement-btn-1').classList.remove('active');
        document.getElementById('announcement-tab-1').classList.remove('active');
        activeAnnouncementTab.classList.add('active');
    }
}

// Проверяем, есть ли сохраненная активная константа в sessionStorage
const activeAnnouncementTabBtnId = sessionStorage.getItem('activeAnnouncementTabBtn');
if (activeAnnouncementTabBtnId) {
    const activeAnnouncementTabBtn = document.querySelector('#' + activeAnnouncementTabBtnId);
    if (activeAnnouncementTabBtn) {
        // Если найдена сохраненная активная константа, добавляем ей класс 'active'
        activeAnnouncementTabBtn.classList.remove('active');
        activeAnnouncementTabBtn.classList.add('active');
    }
}
