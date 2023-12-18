var sidemenu = document.getElementById("sidemenu");
function openmenu() {
    sidemenu.style.right = '0';
}
function closemenu() {
    sidemenu.style.right = '-200px';
}
function toggleTab(tabId) {
    var tabContent = document.getElementById(tabId);
    var tabButton = document.querySelector('[data-tab="' + tabId + '"]');

    // Toggle the display of the tab content
    if (tabContent.style.display === 'block') {
        tabContent.style.display = 'none';
        tabButton.classList.remove('active');
    } else {
        // Hide all other tabs
        var allTabs = document.querySelectorAll('.tab-content');
        allTabs.forEach(function (tab) {
            tab.style.display = 'none';
        });

        // Remove 'active' class from all tab buttons
        var allTabButtons = document.querySelectorAll('.tab');
        allTabButtons.forEach(function (button) {
            button.classList.remove('active');
        });

        // Show the selected tab content
        tabContent.style.display = 'block';
        tabButton.classList.add('active');
    }
}

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");
var blinkIntervalId;

function opentab(tabname) {
    var currentTab = document.getElementById(tabname);

    // Check if the current tab is already active
    var isTabActive = currentTab.classList.contains("active-tab");

    // Clear the blinking interval if it exists
    clearInterval(blinkIntervalId);

    // Toggle the active class for the tab links
    for (var tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    event.currentTarget.classList.add("active-link");

    // Toggle the active class for the tab content
    for (var tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }

    // If the tab was not active, make it active; otherwise, hide the content
    if (!isTabActive) {
        currentTab.classList.add("active-tab");
    }
}

// Start the continuous blinking when the page loads
blinkIntervalId = setInterval(function () {
    for (var tablink of tablinks) {
        toggleVisibility(tablink);
    }
}, 300);

function toggleVisibility(element) {
    if (element.style.visibility === "hidden") {
        element.style.visibility = "visible";
    } else {
        element.style.visibility = "hidden";
    }
}            