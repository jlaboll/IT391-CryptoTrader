import React from 'react';
import axios from 'axios';
import Wallet from '../components/Wallet'

//TODO: Allow for deleting wallets (Hook up button)
//TODO: Allow for creation of new wallets (hook up button)
//TODO: fix decimal precision issue
//TODO: Dynamically run API call to populate cryptos
//TODO: Make Selling add to money and not allow negatives in either input or result
//TODO: Make Buying remove from money and not allow purchase if too poor

export class LiveTrading extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            coinList: [],
            cryptos: [],
            money: 10000
        };

        //axios.get the all coins api list and store in state
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist?summary=true')
            .then(res => {
                const coinList = res.data.Data;
                console.log(coinList);
                this.setState({coinList: coinList})
            });
    }

    componentDidMount() {

        //Populate a list with coin/price data objects from api
        axios.get('https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC,XMR,DOGE&tsyms=USD')
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({cryptos: cryptos});
            });
    }

    handleDelete = () => {
        console.log("Deletin this bih");
    }

    render(){

        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm"><h1>Coin Trading</h1></div>
                    <div className="col-sm"><h1 className='text-success'> Money: ${this.state.money} </h1></div>
                    <div className="col-sm"><button className="btn btn-outline-dark float-right mt-2">Add New Wallet</button></div>
                </div>

                <div>
                    {Object.keys(this.state.cryptos).map((key) => (
                        <Wallet key={key} coin={key} coinValue={this.state.cryptos[key].USD} onDelete={this.handleDelete}>
                            <h5>{this.state.coinList[key].FullName}</h5>
                        </Wallet>
                    ))}
                </div>
            </div>

        );
    }
}