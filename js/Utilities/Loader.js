export function loadImage(url, ID) {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.id = ID || "";

        image.addEventListener('load', ()=> {
            resolve(image);
        });


        image.onerror = error => {
            reject(new Error("can't load " + url));
        };

        image.src = "img/" + url;
    })
}

export function loadJson(FileName) {
    return fetch(`json/${FileName}.json`).then(
        r => r.json()
    );
}