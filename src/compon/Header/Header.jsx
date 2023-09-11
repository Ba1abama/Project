import React from "react";
import logoIm from "../../im/Group 3.svg"
import {menu} from './menu'

import styles from './Header.css'


function Header() {
    return <div className={styles.header}>
        <div>
            <img src={logoIm} alt="" height='35px'/>
        </div>
        <div className={styles.wrapper}>
            <ul className={styles.menu}>
                {menu.map((item, idx)=>(
                    <li key={`menu item ${idx}`}>
                        <a href={item.link}>{item.title}</a>
                    </li>
                ))}
            </ul>
        </div>
        <div className={styles.buttons}>
            <button className={styles.singUp}>Sing Up</button>
        </div>
    </div>
}

export default Header