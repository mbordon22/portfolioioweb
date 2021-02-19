document.addEventListener("DOMContentLoaded", () => {
    
    
    //Filter Portfolio
    const portfolioFilter = document.querySelector(".portfolio-filter"),
          buttonFilter = portfolioFilter.children;
          totalFilter = buttonFilter.length;
    const portfolioItems = document.querySelectorAll(".portfolio-item");
          totalItems = portfolioItems.length;

          for(let i = 0; i < totalFilter; i++){
              const boton = buttonFilter[i];
              boton.addEventListener("click", function(){
                portfolioFilter.querySelector(".active").classList.remove("active");
                this.classList.add("active");
                
                const filterValue = this.getAttribute("data-filter");
                for(let k = 0; k < totalItems; k++){
                    if(filterValue === portfolioItems[k].getAttribute("data-category")){
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                    }else{
                        portfolioItems[k].classList.remove("show");
                        portfolioItems[k].classList.add("hide");
                    }

                    if(filterValue === "all"){
                        portfolioItems[k].classList.remove("hide");
                        portfolioItems[k].classList.add("show");
                    }
                }
              });
          }


    //Portfolio Lightbox
    const lightbox = document.querySelector(".lightbox"),
          lightboxClose = lightbox.querySelector(".lightbox-close i"),
          lightboxImg = lightbox.querySelector(".lightbox-img");
    
    let itemIndex = 0;

    for(let i = 0; i < totalItems; i++){
        portfolioItems[i].addEventListener("click", function(){
            itemIndex = i;
            changeItem();
            toggleLightbox();
        })
    }

    function toggleLightbox(){
        lightbox.classList.toggle("open");
    }

    function changeItem(){
        imgSrc = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
        lightboxImg.src = imgSrc;
    }

    lightbox.addEventListener("click", function(e){
        if(e.target === lightboxClose || e.target === lightbox){
            toggleLightbox();
        }
    })
});

