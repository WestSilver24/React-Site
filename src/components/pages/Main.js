import React from 'react';
import Header from '../include/Header';
import Contents from '../include/Contents';
import Footer from '../include/Footer';

function Info({text}){
    return <div>{text}</div>
  }
  
  const textInfo = [
    {text : "WE PROVIDE"},
    {text : "VISUAL CODING"},
    {text : "SOLUTIONS"},
    {text : "FOR YOU WEBS"}
  ]

function Main(){
    return (
        <div>
            <Header />
            <Contents>
                <section id="mainCont">
                <h2 className="sr-only">메인 컨텐츠 영역입니다.</h2>
                    <div className="main__cont">
                        {textInfo.map((txt) => (
                            <Info text={txt.text} key={txt.text} />
                        ))}
                    </div>
                </section>
            </Contents>
            <Footer />
        </div>
    )
}

export default Main;