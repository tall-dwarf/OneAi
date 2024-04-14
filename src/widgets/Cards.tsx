import Card from "./Card";
import Upload from "../widgets/Upload";
import { useState } from "react";

type CardsProps = {
    isAuth: boolean
}

export default function Cards({ isAuth }: CardsProps) {
    const [isUpload, setIsUpload] = useState(false)


    return (
        <>
            {isUpload && <Upload close={() => setIsUpload(false)} />}
            <section className="cards">
                <div className="container">
                    <ul className="cards-list">
                        <li onClick={() => isAuth && setIsUpload(true)} className="cards-item">
                            <Card />
                        </li>
                        <li onClick={() => isAuth && setIsUpload(true)} className="cards-item">
                            <Card />
                        </li>
                    </ul>
                </div>
            </section>
        </>

    )
}