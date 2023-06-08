const tabsBtn = document.querySelectorAll(".news-tabs-btn");
const newsItems = document.querySelectorAll(".news-tabs-item");

tabsBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        const currentBtn = item;
        const tabId = currentBtn.getAttribute("data-tab");
        const currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });

            newsItems.forEach(function (item) {
                item.classList.remove('active');
            });

            currentBtn.classList.add('active');
            currentTab.classList.add('active');

            // Сохраняем ID активного таба в sessionStorage
            sessionStorage.setItem('activeTab', tabId);
            sessionStorage.setItem('activeTabBtn', currentBtn.getAttribute('id'));

        }
    });
}

// Проверяем, есть ли сохраненный ID активного таба в sessionStorage
const activeTabId = sessionStorage.getItem('activeTab');
if (activeTabId) {
    const activeTab = document.querySelector(activeTabId);
    if (activeTab) {
        // Если найден сохраненный таб, добавляем ему класс 'active'
        activeTab.classList.add('active');
    }
}

// Проверяем, есть ли сохраненная активная константа в sessionStorage
const activeTabBtnId = sessionStorage.getItem('activeTabBtn');
if (activeTabBtnId) {
    const activeTabBtn = document.querySelector('#' + activeTabBtnId);
    if (activeTabBtn) {
        // Если найдена сохраненная активная константа, добавляем ей класс 'active'
        activeTabBtn.classList.remove('active');
        activeTabBtn.classList.add('active');
    }
}

