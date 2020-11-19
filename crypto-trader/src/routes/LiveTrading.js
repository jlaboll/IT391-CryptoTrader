import React from 'react';
import axios from 'axios';
import Wallet from '../components/Wallet'


export class LiveTrading extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cryptos: [],
            coinlist: [],
            page_count: 0,
            page: 0
        };
    }
    getPage(pageNo){
        let print = []
        for(let i = (10 * pageNo); i < (pageNo*10 + 10); i++){
            print.concat(this.getCoin(this.state.coinlist[i].id));
        }
        this.setState({crypto: print});
    }

    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist').then(
            (res) => {
                this.setState({coinlist: res.data.Data});
            }
    );
        this.getPage(0);
    }



    getCoin(item){
        axios.get('https://min-api.cryptocompare.com/data/price?fsyms=' + item + '&tsyms=USD')
            .then(res => {
                return res.data;
            });
    }


    render() {

        return (
            <div className="container">
                <h1>Coin Trading</h1>
                <button onClick={event => this.render()}>Refresh</button>
                <div>
                    {Object.keys(this.state.cryptos).map((key) => (
                        <Wallet key={key} coin={key} coinValue={this.state.cryptos[key].USD}/>
                    ))}
                </div>
            </div>

        );
    }
}