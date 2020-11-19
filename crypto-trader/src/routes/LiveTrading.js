import React from 'react';
import axios from 'axios';
import Wallet from '../components/Wallet'


export class LiveTrading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cryptos: [],
            coinlist: {},
            page_count: 0,
            page: 0
        };
    }


    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist').then(
            (res) => {
                this.setState({cryptos: res.data.Data});
            }
    );

    }



    getCoin(item){
        console.log(item);
        axios.get('https://min-api.cryptocompare.com/data/price?fsyms=' + item + '&tsyms=USD')
            .then(res => {
                return res.data;
            });
    }


    render() {

        return (
            <div className="container">
                <h1>Coin Trading</h1>
                {/*<button onClick={event => this.render()}>Refresh</button>*/}
                <div>
                    {Object.keys(this.state.cryptos).map((key) => (
                        <Wallet key={key} coin={key} coinValue={this.state.cryptos[key].USD}/>
                    ))}
                </div>
            </div>

        );
    }
}