function EasyHTTP() {
    this.http = new XMLHttpRequest();
    this.get = function(url, callBack) {
        this.http.open('GET', url, true);
        this.http.onload = () => {
            if (this.http.status === 200){
                callBack(null, this.http.responseText)
            } else {
                callBack('Error' + this.http.status)
            }
        };
        this.http.send();
    }
}

// EasyHTTP.prototype.get = function (url) {
//     this.http.open('GET', url, true);
//     this.http.onload = function () {
//         if (this.http.status === 200){
//             console.log(this.http.responseText)
//         }
//     };
//     this.http.send();
// };