remove_node = (node) => {
    try {
        node.childNodes.forEach((node) => {
            node.style.display = "none";
        });
    } catch(e) {
        console.error(e);
    }
}

new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "childList") {
            for (let node of mutation.addedNodes) {
                if (node.nodeName === "ARTICLE") {
                    let text = node?.textContent.trim() ?? ""
                    if (text.contains("Follow")) {
                        remove_node(node);
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
