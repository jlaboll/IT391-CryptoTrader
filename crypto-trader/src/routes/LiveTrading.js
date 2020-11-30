import React from 'react';
import axios from 'axios';
import Wallet from '../components/Wallet'

//TODO: Get full list of coins
//TODO: Allow for deleting wallets
//TODO: Add cash wallet
//TODO: Allow for creation of new wallets
//TODO: Display full name for each coin

export class LiveTrading extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            coinList: [],
            cryptos: [],
            money: 10000
        };
    }

    componentDidMount() {
        //axios.get the all coins api list and store in state
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist?summary=true')
            .then(res => {
                const coinList = res.data.Data;
                console.log(coinList);
                this.setState({coinList: coinList})
            });



        //Populate a list with coin/price data objects from api
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XMR,DOGE&tsyms=USD')
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({cryptos: cryptos});
            });
    }

    render(){

        return (
            <div className="container">
                <h1>Coin Trading</h1>
                <div>
                    {Object.keys(this.state.cryptos).map((key) => (
                        <Wallet key={key} coin={key} coinValue={this.state.cryptos[key].USD}>
                            <h5>{this.state.coinList[key].FullName}</h5>
                        </Wallet>
                    ))}
                </div>
            </div>

        );
    }
}