import { Html5Qrcode } from 'html5-qrcode';
const Scanner = () => {
    const getCameras = () => {
        const green = () => {
            console.log("good in business");
        }
    
        const red = () => {
            console.log("bad in business")
        }
        Html5Qrcode.getCameras()
            .then(devices => {
                if(devices && devices.length) {
                    const cameraId = devices[0].id
                    const scanner = new Html5Qrcode("reader");
                    scanner.start(cameraId, undefined, green, red)
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