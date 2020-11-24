import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Wallet from '../_components/Wallet'
import Dropdown from '@bit/react-bootstrap.react-bootstrap.dropdown';
import { accountService } from '@/_services';

const Wrapper = styled.div`
  margin-top: 1em;
  margin-left: 6em;
  margin-right: 6em;
`;

export class LiveTrading extends React.Component {
    constructor(props) {
        super(props)
        this.state={
            wallets: accountService.userValue,
            page: 0,
            allKeys: {},
            cryptos: [],
            pgLgth: 10
        };
    }

    componentDidMount() {
        axios.get('https://min-api.cryptocompare.com/data/all/coinlist')
            .then(res => {
                const keys = res.data.Data;
                this.setState({allKeys: keys});
            })

        axios.get(this.buildReqURI())
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({cryptos: cryptos});
            })
    }

    buildReqURI(){
        var i = 0;
        let uri = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms='
        for (let [key, value] of Object.entries(this.state.allKeys)){
            if(i >= this.state.pgLgth*this.state.page && i<this.state.pgLgth*this.state.page + 10){
                uri += key;
                i += 1;
            }
            if(i < this.state.pgLgth*this.state.page + 10){
                uri += ',';
            }
            if(i > this.state.pgLgth*this.state.page + 10){
                return (uri + '&tsyms=USD');
            }
        }
        if(uri.charAt(uri.length -1) === ','){
            uri = uri.substr(0, uri.length -1);
        }
        return (uri + '&tsyms=USD');
    }

    render(){

        return (
            <div className="container">
                <Dropdown>
                    <Dropdown.Toggle id="dropdown-item-button">
                        Select Wallet
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        {Object.keys(this.state.user).map(key) => (

                            )}
                    </Dropdown.Menu>
                </Dropdown>
                <h1>Coin Trading</h1>
                <div>
                    {Object.keys(this.state.cryptos).map((key) => (
                        <Wallet key={key} coin={key} coinValue={this.state.cryptos[key].USD} coinName={this.state.allKeys[key].CoinName}/>
                    ))}
                </div>
            </div>

        );
    }
}