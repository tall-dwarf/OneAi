import React from "react"

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: string | JSX.Element,
}

export function PurpleButton({ children, ...attr }: ButtonProps){

    return(
        <button {...attr} className="btn btn-purple">{children}</button>
    )
} 


export function GreenButton({ children, ...attr }: ButtonProps){

    return(
        <button {...attr} className="btn btn-green">{children}</button>
    )
} 

export function WhiteButton({ children, ...attr }: ButtonProps){

    return(
        <button {...attr} className="btn btn-white">{children}</button>
    )
} 



interface ImagesButtonProps extends ButtonProps{
  url: string  
}

// Внутри кнопки можно размещать картинку, проверено с помощью W3c
export function ImagesButton({url, children, ...attr }: ImagesButtonProps){

    return(
        <button {...attr} className="btn btn-img">
            <img src={url} alt="Картинка на кнопке" />
            <span>{children}</span>
        </button>
    )
}


export function ButtonPref({children, ...attr }: ButtonProps){

    return(
        <button {...attr} className="btn btn-pref">
            <img className="btn-pref__img" src="/arrow-left.png" alt="Стрелочка влево" />
            <span className="btn-pref__text">{children}</span>
        </button>
    )
}