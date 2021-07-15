// get html document

const videoE = document.getElementById('video');
const button = document.getElementById('bu');

// prompt to select media stream
async function mediaStream() {
    try {
        const stream = await navigator.mediaDevices.getDisplayMedia();
        videoE.srcObject = stream
        videoE.onloadedmetadata = () => {
            videoE.play();
        }
    } catch (error) {
        // catch error

    }
     
}

button.addEventListener('click', async () => {
    // disable button
    button.disabled = true;

    // start picture in picture
    await videoE.requestPictureInPicture();
    // reset button
    button.disabled = false;
})

mediaStream()