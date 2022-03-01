


document.addEventListener("keydown", event => {
    if (event.code === "KeyA") {
        let audio = new Audio("./keys/A.mp3");
        audio.play();
    } else if (event.code === 'KeyS') {
        let audio = new Audio("./keys/S.mp3");
        audio.play();
    } else if (event.code === 'KeyD') {
        let audio = new Audio("./keys/D.mp3");
        audio.play();
    } else if (event.code === 'KeyF') {
        let audio = new Audio("./keys/F.mp3");
        audio.play();
    } else if (event.code === 'KeyG') {
        let audio = new Audio("./keys/G.mp3");
        audio.play();
    } else if (event.code === 'KeyH') {
        let audio = new Audio("./keys/H.mp3");
        audio.play();
    } else if (event.code === 'KeyJ') {
        let audio = new Audio("./keys/J.mp3");
        audio.play();
    } else if (event.code === 'KeyW') {
        let audio = new Audio("./keys/W.mp3");
        audio.play();
    } else if (event.code === 'KeyE') {
        let audio = new Audio("./keys/E.mp3");
        audio.play();
    } else if (event.code === 'KeyT') {
        let audio = new Audio("./keys/T.mp3");
        audio.play();
    } else if (event.code === 'KeyY') {
        let audio = new Audio("./keys/Y.mp3");
        audio.play();
    } else if (event.code === 'KeyU') {
        let audio = new Audio("./keys/U.mp3");
        audio.play();
    } else {
        console.log("Key not pressed");
    }
})

