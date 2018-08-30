const AFRAME = require('aframe')
const preload = require('./preload')

const images = [
    'assets/360_0056_stitched_injected.JPG',
    'assets/360_0057_stitched_injected.JPG',
    'assets/360_0058_stitched_injected.JPG',
    'assets/360_0060_stitched_injected.JPG',
    'assets/360_0061_stitched_injected.JPG',
    'assets/360_0062_stitched_injected.JPG',
    'assets/360_0063_stitched_injected.JPG',
    'assets/360_0064_stitched_injected.JPG',
    'assets/360_0065_stitched_injected.JPG',
    'assets/360_0066_stitched_injected.JPG',
    'assets/360_0069_stitched_injected.JPG',
    'assets/360_0070_stitched_injected.JPG',
    'assets/360_0071_stitched_injected.JPG',
    'assets/360_0072_stitched_injected.JPG',
    'assets/360_0073_stitched_injected.JPG',
    'assets/360_0074_stitched_injected.JPG',
    'assets/360_0075_stitched_injected.JPG',
    'assets/360_0076_stitched_injected.JPG',
    'assets/360_0077_stitched_injected.JPG',
    'assets/360_0078_stitched_injected.JPG',
    'assets/360_0079_stitched_injected.JPG',
    'assets/360_0080_stitched_injected.JPG',
    'assets/360_0081_stitched_injected.JPG',
    'assets/360_0082_stitched_injected.JPG',
    'assets/360_0083_stitched_injected.JPG',
    'assets/360_0084_stitched_injected.JPG',
    'assets/360_0085_stitched_injected.JPG',
    'assets/360_0086_stitched_injected.JPG',
    'assets/360_0087_stitched_injected.JPG',
    'assets/360_0088_stitched_injected.JPG',
    'assets/360_0089_stitched_injected.JPG',
    'assets/360_0090_stitched_injected.JPG',
    'assets/360_0091_stitched_injected.JPG',
    'assets/360_0092_stitched_injected.JPG',
    'assets/360_0093_stitched_injected.JPG',
    'assets/360_0094_stitched_injected.JPG',
    'assets/360_0095_stitched_injected.JPG',
    'assets/360_0096_stitched_injected.JPG',
    'assets/360_0097_stitched_injected.JPG',
    'assets/360_0098_stitched_injected.JPG',
    'assets/360_0099_stitched_injected.JPG',
    'assets/360_0100_stitched_injected.JPG',
    'assets/360_0101_stitched_injected.JPG',
    'assets/360_0102_stitched_injected.JPG',
    'assets/360_0103_stitched_injected.JPG',
    'assets/360_0104_stitched_injected.JPG',
    'assets/360_0105_stitched_injected.JPG',
    'assets/360_0106_stitched_injected.JPG',
    'assets/360_0107_stitched_injected.JPG',
    'assets/360_0108_stitched_injected.JPG',
    'assets/360_0109_stitched_injected.JPG',
    'assets/360_0110_stitched_injected.JPG',
    'assets/360_0112_stitched_injected.JPG',
    'assets/360_0113_stitched_injected.JPG',
    'assets/360_0114_stitched_injected.JPG',
    'assets/360_0115_stitched_injected.JPG',
    'assets/360_0116_stitched_injected.JPG',
    'assets/360_0117_stitched_injected.JPG',
    'assets/360_0118_stitched_injected.JPG'
]

var imgIndex = 0

var preloaderOverlay



const updateImage = function () {
    preloaderOverlay.classList.remove('hide')

    preload(images[imgIndex]).then(function (url) {
        document.querySelector('a-sky').setAttribute('src', url)
        preloaderOverlay.classList.add('hide')
    })
}

window.addEventListener('DOMContentLoaded', function() {
    preloaderOverlay = document.querySelector('.loader')

    updateImage()

    document.querySelector('.btn--previous').addEventListener('click', function() {
        imgIndex = (imgIndex > 0 ? imgIndex - 1 : images.length - 1)
        updateImage()
    })

    document.querySelector('.btn--next').addEventListener('click', function() {
        imgIndex = (imgIndex < (images.length - 1) ? imgIndex + 1 : 0)
        updateImage()
    })

})

