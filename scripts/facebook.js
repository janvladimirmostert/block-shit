
const sht = [
    "here are groups you might like",
    "Follow",
    "Suggested for you",
    "Join",
    "Reels and short videos",
    "Sponsored",

    "Temu", "Shoptemu", "Disney+", "Alibaba", "Superbalist.com"
]

new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "childList") {
            for (let node of mutation.addedNodes) {
                if (node.nodeName === "DIV") {
                    let count = inside_main(node)
                    if (count === 9) {
                        let text = node?.textContent?.trim() ?? ""
                        // console.log(text)
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

catify = (node) => {
    try {
        if (node.nodeName === "IMG" || node.nodeName === "VIDEO") {
            node.style.opacity = "0.0001"
            node.style.filter = "grayscale(100%)";
            node.src = null;
        }
        node.childNodes.forEach((node) => {
            catify(node)
        })
    } catch(e) {
        console.error(e)
    }
}

remove_node = (node) => {
    try {
        node.style.outline = "1px solid red";
        catify(node)
    } catch (e) {
        console.error(e);
    }
}