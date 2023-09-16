import { Html5Qrcode } from 'html5-qrcode';

enum FACING_MODE {
    ENV = "environment"
}

const handleScanSuccess = (decodeText:string, scanner:Html5Qrcode) => 
{
    scanner.stop();
    console.log(decodeText)
    fetch(`http://localhost:8080/invalidate/${decodeText}`).then(async (response) => {
        const data = await response.json();
        console.log(data);
    }).catch(e => {
        console.log("something went wrong: ", e)
    })
}

const Scanner = () => {
    const getCameras = () => {
        Html5Qrcode.getCameras()
            .then(devices => {
                if(devices && devices.length) {
                    const scanner = new Html5Qrcode("reader");
                    scanner.start({
                        facingMode: FACING_MODE.ENV,
                    }, {disableFlip: false, fps: 60}, (decodedText) => handleScanSuccess(decodedText, scanner), 
                    (e) => {e})
                }
            })
    }
    
    const handleStart = () => {
        getCameras();
    }

    return (
        <>
            <div id="reader"></div>
            <button onClick={handleStart}>Start</button>
        </>
    )
}


export default Scanner;