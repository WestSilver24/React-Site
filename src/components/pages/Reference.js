import React from 'react';
import Header from '../include/Header';
import Contents from '../include/Contents';
import Footer from '../include/Footer';
import WrapTitle from '../include/WrapTitle';
import Loading from '../include/Loading';
import ReferInfo from '../info/ReferInfo';
import axios from 'axios';

class Reference extends React.Component {
    state = {
        isLoading: true,
        refers : []
    }

    getRefer = async () => {
        const {
            data: {
                data: {htmlRefer},
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/refer.json");
        this.setState({ htmlRefer, isLoading: false });
        console.log(this.state)
    }

    componentDidMount(){
        setTimeout(() => {
            this.getRefer();
        }, 2000)
    }

    render(){
        const {isLoading, htmlRefer} = this.state;

        return (
            <div>
                {isLoading ? (
                    <Loading />
                ) : (
                    <div>
                <Header />
                <Contents>
                    <section id="referCont">
                    <div className="container">
                        <WrapTitle text={["reference","book"]} />
                        <div className="refer__cont">
                            <div className="table">
                                <h3>HTML</h3>
                                <ul>
                                    {htmlRefer.map((refer) => (
                                        <ReferInfo 
                                            key={refer.id}
                                            id={refer.id}
                                            title={refer.title}
                                            desc1={refer.desc1}
                                            desc2={refer.desc2}
                                            element={refer.element}
                                            tag={refer.tag}
                                            version={refer.version}
                                            view={refer.view}
                                            use={refer.use}
                                            definition={refer.definition}
                                        />
                                    ))}
                                </ul>
                            </div>
                        
                        </div>
                    </div>
                </section>
                </Contents>
                <Footer />
            </div>
                )}
            </div>
        )
    }
}

export default Reference;