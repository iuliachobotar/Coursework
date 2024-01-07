const filterContainer = document.querySelector(".button_menu"),
galleryItems = document.querySelectorAll(".card_list");

filterContainer.addEventListener("click", (event) => {
    if(event.target.classList.contains("button_item")){
        filterContainer.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");
        const filterValue = event.target.getAttribute("data-filter");
        galleryItems.forEach((item) => {
            if(item.classList.contains(filterValue) || filterValue === 'all'){
                item.classList.remove("hide");
                item.classList.add("show");
            }
            else{
                item.classList.remove("show");
                item.classList.add("hide");
            }
        });
    }
});