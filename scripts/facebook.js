inside_main = (node) => {
    if (!node) {
        return false
    } else if (node.role === "main") {
        return true
    } else {
        return inside_main(node.parentNode)
    }
}

new MutationObserver((mutations) => {
    for (const mutation of mutations) {
        if (mutation.type === "childList") {
            for (let node of mutation.addedNodes) {
                if (node.nodeName === "DIV" && node.className.contains("html-div")) {
                    node.style.border = "1px solid red";
                   //if (inside_main(node)) {
                   //     let text = node.textContent.trim()
                   //      if (text.contains("Follow")) {
                   //          node.style.border = "1px solid red";
                   //      }
                   //      if (text.contains("Reels")) {
                   //          node.style.border = "1px solid blue";
                   //      }
                   //}
                }
            }
        } else if (mutation.type === "attributes") {
            console.log(mutation.target)
        }

    }
}).observe(
    document,
    {
        attributes: true,
        childList: true,
        subtree: true
    }
);