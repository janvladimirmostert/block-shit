chrome.action.setBadgeBackgroundColor(
    {color: [0, 255, 0, 0]},  // Green
    () => { /* ... */
    },
);

chrome.action.setBadgeBackgroundColor(
    {color: '#00FF00'},  // Also green
    () => { /* ... */
    },
);

chrome.action.setBadgeBackgroundColor(
    {color: 'green'},  // Also, also green
    () => { /* ... */
    },
);


chrome.action.setBadgeText({
    text: ":-)",
    tabId: undefined,
})