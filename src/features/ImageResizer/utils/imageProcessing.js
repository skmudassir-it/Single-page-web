import pica from 'pica'

// Helper to create an image element from a URL
export const createImage = (url) =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', (error) => reject(error))
        image.setAttribute('crossOrigin', 'anonymous') // needed to avoid CORS issues on CodeSandbox
        image.src = url
    })

// Convert degrees to radians
export const getRadianAngle = (degreeValue) => {
    return (degreeValue * Math.PI) / 180
}

/**
 * Returns the new bounding area of a rotated rectangle.
 */
export function rotateSize(width, height, rotation) {
    const rotRad = getRadianAngle(rotation)

    return {
        width:
            Math.abs(Math.cos(rotRad) * width) + Math.abs(Math.sin(rotRad) * height),
        height:
            Math.abs(Math.sin(rotRad) * width) + Math.abs(Math.cos(rotRad) * height),
    }
}

/**
 * This function was adapted from the one in the ReactEasyCrop Readme
 * to use Pica for high quality resizing.
 */
export async function getCroppedImg(
    imageSrc,
    pixelCrop,
    rotation = 0,
    flip = { horizontal: false, vertical: false },
    outputFormat = 'image/jpeg',
    quality = 0.9,
    outputWidth,
    outputHeight
) {
    const image = await createImage(imageSrc)
    const canvas = document.createElement('canvas')
    const ctx = canvas.getContext('2d')

    if (!ctx) {
        return null
    }

    const rotRad = getRadianAngle(rotation)

    // calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
        image.width,
        image.height,
        rotation
    )

    // set canvas size to match the bounding box
    canvas.width = bBoxWidth
    canvas.height = bBoxHeight

    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2)
    ctx.rotate(rotRad)
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1)
    ctx.translate(-image.width / 2, -image.height / 2)

    // draw rotated image
    ctx.drawImage(image, 0, 0)

    // croppedAreaPixels values are bounding box relative
    // extract the cropped image using these values
    const data = ctx.getImageData(
        pixelCrop.x,
        pixelCrop.y,
        pixelCrop.width,
        pixelCrop.height
    )

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = pixelCrop.width
    canvas.height = pixelCrop.height

    // paste generated rotate image to the top left corner
    ctx.putImageData(data, 0, 0)

    // Requirement: Final Resize using Pica
    // If outputWidth/Height are provided (from Preset), resize to that.
    // Otherwise use crop dimensions.

    const targetWidth = outputWidth || pixelCrop.width
    const targetHeight = outputHeight || pixelCrop.height

    // If dimensions match, no need for pica (unless quality/format change is handled here)
    // But Pica is good for downscaling.

    const picaCanvas = document.createElement('canvas')
    picaCanvas.width = targetWidth
    picaCanvas.height = targetHeight

    const picaInstance = pica()

    await picaInstance.resize(canvas, picaCanvas, {
        unsharpAmount: 80,
        unsharpRadius: 0.6,
        unsharpThreshold: 2
    })

    // Return Blob
    return new Promise((resolve, reject) => {
        picaInstance.toBlob(picaCanvas, outputFormat, quality)
            .then(blob => resolve(blob))
            .catch(err => reject(err))
    })
}
