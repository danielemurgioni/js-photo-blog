//prendo gli elementi dal DOM
const photoBox = document.getElementById("photo-box");
const overlay = document.getElementById("overlay");
console.log(overlay);
const overlayBtn = document.getElementById("btn-overlay")
console.log(overlayBtn)

// foto dell'album
axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {
    
    // prendo i dati dell'API
    const photoInfo = resp.data
    console.log(photoInfo);

    // ciclo gli oggetti
    for(let i=0; i<photoInfo.length; i++){
        const photoCard = createPhotoCard(photoInfo[i]);
        renderIntoDOM(photoCard, photoBox);
    };

    //prendo l'elemento del DOM dentro alla chiamata per via dell'asincronicità
    const photoPic = document.querySelectorAll("#photo-card");
    console.log(photoPic);

    photoPic.forEach((item) => {
        //quando clicco sulla foto apre l'overlay
        item.addEventListener("click", ()=>{
            overlay.classList.remove("d-none");
        });
    });
});

//bottone che chiude l'overlay
overlayBtn.addEventListener("click", ()=>{
    overlay.classList.add("d-none");
});

//funzione per creare la struttura html delle photo-card
const createPhotoCard = (photo) => {
    
    //destrutturazione degli oggetti
    const {title, date, url} = photo;
    
    //scrittura in html e uso i dati dall'API
    const photoCard = `<div class="col-12 col-md-6 col-lg-4 mt-5">
                    <div id="photo-card" class="container position-relative">
                        <img id="pin" class="position-absolute" src="./img/pin.svg">
                        <img id="photo" class="img-fluid" src="${url}">
                        <h2 id="date" class="mt-4 text-end">${date}</h2>
                        <h2 id="title" class="mt-4 text-end">${title}</h2>
                    </div>
                </div>`;
                
    return photoCard;
};

//funzione per inserire nel DOM
const renderIntoDOM = (element, where) =>{
    where.innerHTML += element;
};