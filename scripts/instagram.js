new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "childList") {
            for (let node of mutation.addedNodes) {
                if (node.nodeName === "ARTICLE") {
                    let text = node.textContent.trim()
                    if (text.contains("Follow")) {
                        node.style.border = "1px solid red";
                        node.style.display = "none";
                    }
                }
            }
        }
    }
}).observe(
    document,
    {
        attributes: false,
        childList: true,
        subtree: true
    }
);
