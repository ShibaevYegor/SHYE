import React from 'react';
import h from "./Header.module.css";
import logo from "../assets/images/logo.png";
import vector from "../assets/images/Vector.png";
import phrase from "../assets/images/phrase.png";

export default function Header() {
  return (
    <div className={h.Header}>
      <div className={h.nav}>
        <a className={h.ssilka} href='#'>
          <img className={h.vector} src={vector}/>
          <img className={h.phrase} src={phrase}/>
          {/* <img className={h.logo} src={logo}/> */}
        </a>
        <div className={h.box}>
          <p className={h.item}>Получите бесплатный расчет
          и персональную подборку на WhatsApp:</p>
          <a className={h.tel} href='tel:+998(97)754-04-57'>+998 (97) 754-04-57</a>
        </div>
      </div>
    </div>
  )
}
