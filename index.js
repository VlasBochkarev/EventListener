document.querySelectorAll("li").forEach((value, index) => {
    value.addEventListener("click", (e) => {
        document.querySelector("li.show").classList.remove("show");
        e.target.classList.add("show")
        document.querySelector("p.show-page").classList.remove("show-page")
        document.querySelectorAll("p")[index].classList.add("show-page")
    })

})


document.querySelectorAll("button").forEach(value => {
    value.addEventListener("click", (e) => {
        e.target.closest("div").remove()
    })
})