//prendo gli elementi dal DOM
const photoBox = document.getElementById("photo-box");
const overlay = document.getElementById("overlay");
const overlayBtn = document.getElementById("btn-overlay");
const overlayPhoto = document.getElementById("photo-overlay");

console.log(overlay);
console.log(overlayBtn);
console.log(overlayPhoto);

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

    photoPic.forEach((item, id) => {
        //quando clicco sulla foto apre l'overlay
        item.addEventListener("click", ()=>{
            overlay.classList.remove("d-none");
            //cambio il source dell'immagine
            overlayPhoto.src = `${photoInfo[id].url}`
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
                    <div class="container position-relative photo-card">
                        <img class="position-absolute pin" src="./img/pin.svg">
                        <img class="img-fluid photo" src="${url}">
                        <h2 class="mt-4 text-end date">${date}</h2>
                        <h2 class="mt-4 text-end title">${title}</h2>
                    </div>
                </div>`;
                
    return photoCard;
};

//funzione per inserire nel DOM
const renderIntoDOM = (element, where) =>{
    where.innerHTML += element;
};