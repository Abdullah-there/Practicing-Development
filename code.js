document.querySelector(".icon").addEventListener("click", () => {
    document.querySelectorAll(".dis").forEach(el => {
        el.style.display = "block"
    })
})