// import React from 'react';

export default function TailwindComponent() {
  return (
    <div>
      <h1 className='text-xl'>전기홍 개발자, 안녕!</h1>
      <button className="bg-blue-300 round-5xl px-9">버튼</button>
    </div>
  )
}
//create-react-app에서 제공하는 postcss는 순수 css이었고 일반 css와 똑같은데 모듈이라는 걸 이름에 붙여서
//각각 화일별로 모듈성을 보장해 주었다. 스타일컴포넌트는 css화일을 작성하지 않아도 자바스크립트 화일 안에서
//스타일링된 컴포넌트를 만들어서 그 컴포넌트를 가져다 쓰는 형태이다.
//tailwind는 클래스이름에 테일윈드에서 잘 정의된 수 많은 클래스 이름 중에 우리가 원하는 것만 골라서
//조합해서 쓸 수 있었다.

