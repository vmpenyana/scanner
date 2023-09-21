import { Html5Qrcode } from 'html5-qrcode';
import { redirect } from 'react-router-dom';
import { getOrganizer } from '../../organizers';

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

export const loader =async () => {
    let name: string = "vincent";
    console.log(name)
    return {name}
}

export const action = async (something: any) => {
    const formData = await something.request.formData();
    const name = formData.get(`organizer`);
    const password = formData.get(`password`);
    const organizer = getOrganizer(name, password);
    if(organizer) {
        return organizer;
    } else {
        return redirect('/')
    }
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