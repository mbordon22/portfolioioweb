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
          lightboxImg = lightbox.querySelector(".lightbox-img"),
          lightboxRepo = lightbox.querySelector("#lightbox-repositorio"),
          lightboxLink = lightbox.querySelector("#lightbox-link");

    
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
        linkPagina = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("data-link");
        repoPagina = portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("data-repo");
        lightboxImg.src = imgSrc;
        lightboxLink.setAttribute("href", linkPagina);
        lightboxRepo.setAttribute("href", repoPagina);
    }

    lightbox.addEventListener("click", function(e){
        if(e.target === lightboxClose || e.target === lightbox){
            toggleLightbox();
        }
    });




    //Sidebar nav

    const nav = document.querySelector(".nav"),
          navList = nav.querySelectorAll("li"),
          totalNavList = navList.length,
          allSection = document.querySelectorAll(".section"),
          totalSection = allSection.length;
          


    for(let i = 0; i < totalNavList; i++){
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function(){
            for(let i = 0; i < totalSection; i++){
                allSection[i].classList.remove("back-section");
            }

            for(j = 0; j < totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("active")){
                    allSection[j].classList.add("back-section");
                }
                navList[j].querySelector("a").classList.remove("active");
            }

            this.classList.add("active");
            showSection(this);
            if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
            }
        });
    }

    function showSection(element){
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("active");
        }
        const target = element.getAttribute("href").split("#")[1];
        document.querySelector("#"+target).classList.add("active");
    }


    const navToggleBtn = document.querySelector(".menu-toggle"),
          sidebar = document.querySelector(".sidebar");

    navToggleBtn.addEventListener("click", function(){
              asideSectionTogglerBtn();
    })

    function asideSectionTogglerBtn(){
        sidebar.classList.toggle("open");
        navToggleBtn.classList.toggle("open");
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.toggle("open");
        }
    }


    //Btn contact
    const btnContacto = document.querySelector("#btnContacto");
    btnContacto.addEventListener("click", () => {
        for(let i = 0; i < totalSection; i++){
            allSection[i].classList.remove("active");
        }
        document.querySelector("#contact").classList.add("active");
    });





    //Body Dark
    const btnDark = document.querySelector(".btn-dark"),
          icon = btnDark.querySelector("i"),
          body = document.querySelector("body");

    btnDark.addEventListener("click", () => {
        if(icon.classList.contains("fa-moon")){
            icon.classList.remove("fa-moon");
            icon.classList.add("fa-sun");
        }
        else if(icon.classList.contains("fa-sun")){
            icon.classList.remove("fa-sun");
            icon.classList.add("fa-moon");
        }
        body.classList.toggle("dark");
    });



    //Boton para quitar notificacion
    document.querySelector("#cerrar-mensaje").addEventListener("click", () => {

        document.querySelector("#confirmacion-envio-formulario").classList.add("hide");
    });
});

