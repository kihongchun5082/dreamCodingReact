import React from 'react';
// import './Button1.css';
import styles from './Button1.module.css'
/* 이렇게 import해 왔다면, className을 스트링으로 하면 안되고 자바스크립트 객체에 접근하니까
postcss를 쓰면, 자동으로 이름을 감싸 준 naming space를 더해서 객체에 전달해 줍니다. 객체의 이름은 원하는대로 정하면 되고요
여기서는 styles이고 자바스크립트 문법을 이용해 중괄호를 사용해 {styles.button}이라고 해 주면 되요 */

export default function Button1() {
  return <button className={styles.button}>성범이 버튼</button>
    /* ( <button className='button'>Button1</button>);  */
}

