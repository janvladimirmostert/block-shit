
const sht = [
    "here are groups you might like",
    "Follow",
    "Suggested for you",
    "Join",
    "Reels and short videos",
    "Sponsored",

    "Temu", "Shoptemu", "Disney+", "Alibaba"
]

new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "childList") {
            for (let node of mutation.addedNodes) {
                if (node.nodeName === "DIV") {
                    let count = inside_main(node)
                    if (count === 9) {
                        let text = node?.textContent?.trim() ?? ""
                        sht.forEach((s) => {
                            if (text.contains(s)) {
                                remove_node(node)
                            }
                        })
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

inside_main = (node, count = 0) => {
    if (!node) {
        return 0
    } else if (node.role === "main") {
        return count
    } else {
        return inside_main(node.parentNode, count + 1)
    }
}

remove_node = (node) => {
    try {
        node.childNodes.forEach((node) => {
            node.style.display = "none";
        });
    } catch (e) {
        console.error(e);
    }
}