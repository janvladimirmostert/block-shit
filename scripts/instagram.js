// Callback function to execute when mutations are observed
const callback = (mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "childList") {
            for (let node of mutation.addedNodes) {
                if (node.nodeName === "ARTICLE") {
                    let text = node.textContent.trim()
                    if (text.contains("•Follow")) {
                        node.style.display = "none";
                    }
                }
            }
        }
    }
};

// Start observing the target node for configured mutations
new MutationObserver(callback).observe(
    document,
    {
        attributes: false,
        childList: true,
        subtree: true
    });

// observer.disconnect();