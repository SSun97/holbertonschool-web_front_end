function createElement (data) {
    let p = document.createElement("p");
    let text = document.createTextNode(`${data}`);
    p.appendChild(text);
    document.querySelector("body").appendChild(p);
};


let queryWikipedia = (callback) => {
   
    let oReq = new XMLHttpRequest();
    oReq.open("GET", "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*", true);
    oReq.onload = function() {
        if (this.status === 200) {
            const data = JSON.parse(this.response);
            const article = data.query.pages[21721040].extract;
            callback(article);
        }
    };
    oReq.send();

};
queryWikipedia(createElement);
