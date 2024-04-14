import { PurpleButton } from "../shared/ui/Buttons"

interface HeaderProps {
    onBtnSignClick: () => void,
    isAuth: boolean
}

export default function Header({ onBtnSignClick, isAuth }: HeaderProps){


    return(
        <header className="header">
            <div className="container">
                <div className="header-inner">
                    <strong className="site-name">OneAI</strong>
                    {
                       !isAuth && <PurpleButton onClick={() => onBtnSignClick()}>Sign in</PurpleButton>
                    }
                </div>
            </div>
        </header>
    )
}