import React from 'react';
import Header from '../include/Header';
import Contents from '../include/Contents';
import Footer from '../include/Footer';
import WrapTitle from '../include/WrapTitle';

function Script(){
    return (
        <div>
            <Header />
            <Contents>
                <section id="scriptCont">
                    <div className="container">
                        <WrapTitle text={["script","reference"]} />
                        <div className="script__cont">
                            
                        </div>
                    </div>
                </section>
            </Contents>
            <Footer />
        </div>
    )
}

export default Script;