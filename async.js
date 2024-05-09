

export function getKeres(vegpont, callback){
    fetch(vegpont)
    .then((response) => response.json())
    .then((data) => {callback(data)})
    .catch((error) => {console.log(error)});
}