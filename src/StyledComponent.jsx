// import React from 'react';
// import Button1 from './components/Button1';
// import Button2 from './components/Button2';
// import './App.css';

import styled, { css } from 'styled-components'; 
/* create-react-app에 포함되지 않아 "%yarn add styled-components" 로 인스톨햇고 모듈 불러옴 */
const Container = styled.div`
  display: flex;
`
//스타일컴포넌트는 요. 자바스크립트에서 css를 사용하게 해 주는 자바스크립트 라이브러리에요.
//그래서 우리가 컴포넌트에 css이름을 지정해 주는 게 아니라, 스타일링된 컴포넌트를 만들어서
//위와 같이 실제로는 div태그고요. 아래와 같이 실제로는 버튼태그에요. 개발자도구의 요소를 보시면요.
//div태그 안에 버튼태고 만들어 주고 클래스 이름 주어진 거 볼 수 있죠? 그래서 코드 상으로는 버튼으로 이런
//속성을 쓸거다 해두면,스타일 컴포넌트 라이브러리 내부에서 랜덤으로 클래스 이름을 생성해 주고요. css화일도 직접
//만들어서 이렇게 클래스 이름을 연결해줍니다. 그래서 적용된 클래스 속성들도 다 확인할 수 있지요.
//즉 css화일을 만들지 않고도 자바스크립트 화일 안에서 우리만의 스타일링된 컴포넌트를 만들어서 사용하게 해 주는 라이브러리입니다.
const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid #3c5b69;
  color: #b9eaff;
  margin: 0 1em;
  padding: 0.25em 1em;
  ${(props) =>
    props.primary &&
    css`
      background: #009cd5;
      color: white
  `}
`
export default function App() {
  return (
    <>
      {/* <Button1 />
      <Button2 /> */}
      <Container>
        <Button>Normal Button</Button>
        <Button primary>Primary Button</Button>
      </Container>
    </>
  );
}

