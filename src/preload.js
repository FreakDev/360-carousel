
module.exports = function(url) {
    return new Promise(function (resolve, reject) {
        let img = document.createElement('img')
        img.onload = function() {
            resolve(img.getAttribute('src'))
            delete img.onload
            img = null
        }
        img.setAttribute('src', url)
    })
}