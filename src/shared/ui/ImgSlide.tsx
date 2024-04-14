

interface ImgSlideProps {
    imgFirst: string,
    imgSecond: string
}

export default function ImgSlide({imgFirst, imgSecond}: ImgSlideProps){


    return(
        <div className="img-slide">
            <img className="img-slide__first" src={imgFirst} alt="Картинка 1" />
            <div className="img-slide__second" style={{
                backgroundImage: `url(${imgSecond})` 
                }}></div>
        </div>
    )
}