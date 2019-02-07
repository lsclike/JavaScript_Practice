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
    };
    
    this.post = function (url, data, cb) {
        this.http.open('POST', url, true);
        this.http.setRequestHeader('Content-type', 'application/json');
        this.http.onload = () => {
            // return this.status = 201
            if (this.http.status !== 201){
                cb('Error' + this.http.status)
            }else {
                cb(null, this.http.responseText)
            }

        };
        this.http.send(JSON.stringify(data));
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