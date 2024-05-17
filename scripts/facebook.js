counter = 0;

show_counter = (counter) => {
    console.log("show_counter");
    console.log(chrome);
    console.log(chrome?.action);
    // chrome?.action?.setBadgeBackgroundColor({color: "green"});
    chrome?.action?.setBadgeText({
        tabId: undefined,
        text: "1234"
    });
}
show_counter(0);

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
    node.childNodes.forEach((node) => {
        node.style.display = "none";
    });
    show_counter(++counter);
}

new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "childList") {
            for (let node of mutation.addedNodes) {
                if (node.nodeName === "DIV") {
                    let count = inside_main(node)
                    if (count === 9) {
                        let text = node.textContent.trim()
                        if (text.contains("here are groups you might like")) {
                            remove_node(node);
                        } else if (text.contains("Follow")) {
                            remove_node(node);
                        } else if (text.contains("Suggested for you")) {
                            remove_node(node);
                        } else if (text.contains("Join")) {
                            remove_node(node);
                        } else if (text.contains("Reels and short videos")) {
                            remove_node(node);
                        }
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