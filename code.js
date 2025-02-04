document.querySelector(".icon").addEventListener("click", () => {
    let classes = document.getElementById("bar1").classList
    if (classes.contains('bar')) {
        document.getElementById("bar1").classList.remove('bar')
        document.getElementById("bar1").classList.add('bar1')
    }
    else {
        document.getElementById("bar1").classList.remove('bar1')
        document.getElementById("bar1").classList.add('bar')
    }
})

function toggleScroll() {
    const body = document.body;
    if (body.style.overflow === 'hidden') {
        body.style.overflow = 'auto';
    } else {
        body.style.overflow = 'hidden';
    }
}