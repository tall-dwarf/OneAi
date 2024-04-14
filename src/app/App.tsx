import Header from "../widgets/Header";
import "./style.sass"
import LoginForm from "../widgets/LoginForm";
import Footer from "../widgets/Footer";
import Modal from "../shared/hoc/Modal";
import { useState } from "react";
import Cards from "../widgets/Cards";

export default function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  const [userIsAuth, setUserIsAuth] = useState(false)
  
  return (
    <div className="wrapper">
      <Modal isOpen={modalIsOpen} onClose={() => setModalIsOpen(false)}><LoginForm onSubmit={() => {setUserIsAuth(true); setModalIsOpen(false)}} /></Modal>
      <Header isAuth={userIsAuth} onBtnSignClick={() => setModalIsOpen(true)} />
      <Cards isAuth={userIsAuth} />
      <Footer />
    </div>
  )
}