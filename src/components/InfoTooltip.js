import React from "react";
import success from "../images/success.svg";
import error from "../images/error.svg";

function InfoTooltip(props) {
    return (
      <section className={`popup ${props.isOpen ? "popup_opened" : ""}`} >
        
        <div className="popup__edit popup__edit-tooltip">
        <button className="popup__button-close popup__button-close_type_edit" type="button" onClick={props.onClose}></button>
          
          <img className="popup__status" src={success} alt="Успешная регистрация" />
          <p className="popup__message">Вы успешно зарегистрировались!</p>


          <img className="popup__status" src={error} alt="Ошибка регистрации" />
          <p className="popup__message">Что-то пошло не так! Попробуйте еще раз.</p>

        </div>

      </section>
    );
  }
  
  export default InfoTooltip;