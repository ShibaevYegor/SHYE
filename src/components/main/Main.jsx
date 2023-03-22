import React from 'react';
import m from "./Main.module.css";
import Christmas from "../assets/images/Christmas.png";
import woman from "../assets/images/woman.png";
import inst from "../assets/icons/inst.svg";
import one from "../assets/images/one.png";
import two from "../assets/images/two.png";
import three from "../assets/images/three.png";
import four from "../assets/images/four.png";
import five from "../assets/images/five.png";
import six from "../assets/images/six.png";
import seven from "../assets/images/seven.png";
import eight from "../assets/images/eight.png";
import nine from "../assets/images/nine.png";


export default function Main() {
  return (
    <div className={m.Main}>
      <img className={m.Christmas} src={Christmas}/>

      <h1 className={m.Greetings}>Здравствуйте!</h1>
      <h1 className={m.about}>Я Анастасия Подзюм, декоратор с солидным опытом и собственной командой.</h1>
      <p className={m.offer}>Поможем вам украсить фасад или помещение, разработаем уникальное оформление с учетом ваших потребностей и бюджета.</p>
      <img className={m.woman} src={woman}/>
      <a className={m.btn} href="https://instagram.com/tnenoba?igshid=ZDdkNTZiNTM=">
        <img className={m.inst} src={inst}/>
        <p className={m.nearInst}>Мой инстаграм</p>
      </a>
      <h1 className={m.examples}>Все примеры на фото — наши!</h1>

      <div className={m.cardOne}>
        <img className={m.one} src={one}/>
        <img className={m.two} src={two}/>
        <img className={m.three} src={three}/>
      </div>

      <h1 className={m.question}>Почему стоит работать с нами:</h1>

      <ul className={m.ul}>
        <li className={m.li}>Гибкие цены</li>
        <li className={m.li}>Монтируем и демонтируем сами</li>
        <li className={m.li}>Работа по договору по согласованной заранее смете</li>
        <li className={m.li}>Работаем быстро</li>
      </ul>

      <div className={m.cardTwo}>
        <img className={m.four} src={four}/>
        <img className={m.five} src={five}/>
        <img className={m.six} src={six}/>
      </div>

      <p className={m.lorem}>Мы знаем, как вызвать живые эмоции от декора и желание его
      фотографировать! <br/> <br/> Вы можете купить украшения и использовать их в будущем, либо взять их в аренду, тем самым, не переплачивая.</p>


      <div className={m.cardThree}>
        <img className={m.seven} src={seven}/>
        <img className={m.eight} src={eight}/>
        <img className={m.nine} src={nine}/>
      </div>

      <div className={m.greenCard}>
        <h1 className={m.advise}>Получите от меня бесплатный расчет
        и персональную подборку на WhatsApp:</h1>
        <a className={m.Gtel} href='tel:+998(97)754-04-57'>+998 (97) 754-04-57</a>
      </div>

      <div className={m.btnBox}>
        <a className={m.Sbtn} href="https://instagram.com/tnenoba?igshid=ZDdkNTZiNTM=">
            <img className={m.inst} src={inst}/>
            <p className={m.nearInst}>Мой инстаграм</p>
        </a>
        <a className={m.looking} href="#">Смотреть презентацию</a>
      </div>
      <p className={m.end} onClick={()=> { prompt("ЗАЧЕМ И ПОЧЕМУ ???")}}>Unsubscribe</p>
    </div>
  )
}
