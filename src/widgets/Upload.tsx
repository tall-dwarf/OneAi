import ImgSlide from "../shared/ui/ImgSlide"
import { ImagesButton } from "../shared/ui/Buttons"
import { ButtonPref } from "../shared/ui/Buttons"
import ResultUpload from "./ResultUpload"
import { useState } from "react"

interface UploadProps {
    close: () => void
}

export default function Upload({ close }: UploadProps){
    const [res, setRes] = useState(false)

    if(res){
        return <ResultUpload onBtnMore={() => close()} onBtnSave={() => 123} />
    }
   

    return(
        <div className="upload">
            <div className="container">
                <div className="upload-inner">
                    <ButtonPref onClick={() => close()}>Go back</ButtonPref>
                    <ImgSlide imgSecond="/girl.jpg"  imgFirst="/lego.jpg" />
                    <div className="upload__menu">
                        <ImagesButton onClick={() => setRes(true)} url="/g.png">Choose photo from gallery</ImagesButton>
                        <ImagesButton onClick={() => setRes(true)} url="/camera.png">Choose photo from gallery</ImagesButton>
                    </div>
                </div>
            </div>
        </div>
    )
}