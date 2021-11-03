import React from 'react';
import Header from '../include/Header';
import Contents from '../include/Contents';
import Footer from '../include/Footer';
import axios from 'axios';
import PortInfo from '../info/PortInfo';
import WrapTitle from '../include/WrapTitle';

class Portfolio extends React.Component {
    state = {
        isLoading: true,
        ports : [],
    }

    getPorts = async () => {
        const {
            data: {
                data: { ports },
            },
        } = await axios.get("https://webstoryboy.github.io/react5001/src/assets/json/portfolio.json");
        //console.log(ports);
        //console.log(ports.data.data.ports);
        this.setState({ ports, isLoading : false });
    }

    componentDidMount(){
        setTimeout(() => {
            this.getPorts();
        }, 3000)
    }

    render(){
        const { isLoading, ports } = this.state;
        
        return (
            <div>
                <Header />
                <Contents>
                    <section id="portCont">
                        <div className="container">
                            <WrapTitle text={["portfolio", "site"]} />
                            <div className="port__cont">
                                {isLoading ? (
                                    <div>
                                        <span>로딩중........</span>
                                    </div>
                                ) : (
                                    <>
                                        {ports.map((port) => (
                                            <PortInfo 
                                                key={port.id}
                                                id={port.id}
                                                title={port.title}
                                                category={port.category}
                                                link={port.link}
                                                image={port.image}
                                            />
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </section>
                    
                </Contents>
                <Footer />
            </div>
        );
    }
}

export default Portfolio;