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
        document.getElementById('btn-1').classList.remove('active');
        document.getElementById('tab-1').classList.remove('active');
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


/* FOR SPOILERS */
var split_symbol = "/";


$('.show-hide').click(function(event) {
        event.preventDefault();

        var spoiler_div = $(this).closest('.entry_spoiler').find('.spoiler');
        var str_first = $.trim( $(this).attr('text-string').split(split_symbol)[0] );
        var str_last = $.trim( $(this).attr('text-string').split(split_symbol)[1] );

        if ( spoiler_div.is(":visible") ) {
           $(this).closest('.entry_spoiler').find('.show-hide').text(str_first);
        } else {
            $(this).closest('.entry_spoiler').find('.show-hide').text(str_last);
        }

        spoiler_div.slideToggle(400);

});
