import React from 'react';
import axios from 'axios';
import Wallet from '../components/Wallet'


export class LiveTrading extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            cryptos: []
        };
    }

    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XMR,DOGE&tsyms=USD')
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({cryptos: cryptos});
            })
    }

    render(){

        return (
            <div className="container">
                <h1>Coin Trading</h1>
                <div>
                    {Object.keys(this.state.cryptos).map((key) => (
                        <Wallet key={key} coin={key} coinValue={this.state.cryptos[key].USD}/>
                    ))}
                </div>
            </div>

        );
    }
}