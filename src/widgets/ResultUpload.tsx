import { GreenButton } from "../shared/ui/Buttons"
import { WhiteButton } from "../shared/ui/Buttons"

interface ResultUploadProps {
    onBtnSave: () => void,
    onBtnMore: () => void,
}

export default function ResultUpload({ onBtnSave,  onBtnMore}: ResultUploadProps){


    return(
        <section className="result-upload">
            <img className="result-upload__img" src="/res-upload.png" alt="Фотогафия результата загрузки" />
            <div className="result-upload__menu">
                <GreenButton onClick={() => onBtnSave()}>Save</GreenButton>
                <WhiteButton onClick={() => onBtnMore()}>More pics</WhiteButton>
            </div>
        </section>
    )
}