axios.get("https://lanciweb.github.io/demo/api/pictures/").then((resp) => {

    // prendo i dati dell'API
    const photoInfo = resp.data
    console.log(photoInfo)

    // ciclo gli oggetti
    for(let i=0; i<photoInfo.length; i++){
        console.log(photoInfo[i])
    }
});