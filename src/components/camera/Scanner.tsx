import { Html5Qrcode } from 'html5-qrcode';
const Scanner = () => {
    const getCameras = () => {
    
        const red = () => {
            console.log("bad in business")
        }
        Html5Qrcode.getCameras()
            .then(devices => {
                if(devices && devices.length) {
                    const scanner = new Html5Qrcode("reader");
                    scanner.start({
                        facingMode: "environment",
                    }, {disableFlip: false, fps: 60}, (result:string) => {
                        alert(`result: ${JSON.stringify(result)}`)
                    }, red)
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