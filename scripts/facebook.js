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
    // node.style.display = "none";
    node.style.border = "1px solid #1c1e21;";
    node.childNodes.forEach((node) => {
        node.style.display = "none";
    });
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
                            node.style.border = "1px solid pink";
                            remove_node(node);
                        } else if (text.contains("Follow")) {
                            node.style.border = "1px solid red";
                            remove_node(node);
                        } else if (text.contains("Suggested for you")) {
                            node.style.border = "1px solid blue";
                            remove_node(node);
                        } else if (text.contains("Join")) {
                            node.style.border = "1px solid green";
                            remove_node(node);
                        } else if (text.contains("Reels and short videos")) {
                            node.style.border = "1px solid yellow";
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