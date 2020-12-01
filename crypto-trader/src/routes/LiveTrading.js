import React from 'react';
import axios from 'axios';
import Wallet from '../components/Wallet';
import AddWalletModal from '../components/AddWalletModal';


//TODO: Allow for creation of new wallets (hook up button)
    //get button to pop up a modal
    //get modal to properly display the external search bar
    //take string from search bar and add the (key) to userCoins
    //forceUpdate if necessary
//TODO: fix decimal precision issue
//TODO: Make Selling add to money and not allow negatives in either input or result
//TODO: Make Buying remove from money and not allow purchase if too poor

export class LiveTrading extends React.Component {

    constructor(props) {
        super(props)
        this.state={
            coinList: [],  //list of every single crypto currency populated by api call
            userCoins: ["BTC","ETH","LTC","XMR","DOGE"], //coins that the user has chosen to have wallets for
            cryptos: [],   //the list/object that the wallet components are mapped from. Populated by api call
            money: 10000,   //dollars, moolah, skrilla, dosh
            modalVisibile: false
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
        var apiCall = this.buildAPICall();
        axios.get(apiCall)
            .then(res => {
                const cryptos = res.data;
                console.log(cryptos);
                this.setState({cryptos: cryptos});
            });
    }

    componentDidUpdate(prevState){
        if(this.state.userCoins !== prevState.userCoins){
            var apiCall = this.buildAPICall();
            axios.get(apiCall)
                .then(res => {
                    const cryptos = res.data;
                    console.log(cryptos);
                    this.setState({cryptos: cryptos});
                });
        }
    }



    handleDelete = (walletKey) => {
        console.log("Deleting wallet: ", walletKey);
        const userCoins = this.state.userCoins.filter(c => c !== walletKey);
        this.setState({userCoins: userCoins});
        this.forceUpdate();
    }

    buildAPICall = () => {
        const firstChunk = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=';
        var [first, ...rest] = this.state.userCoins;
        let secondChunk = first;
        console.log(rest);
        rest.forEach(el => secondChunk = secondChunk.concat(",",el));
        console.log(secondChunk);
        let apiCall = firstChunk.concat("",secondChunk);
        apiCall=apiCall.concat("","&tsyms=USD");
        return apiCall;
    }

    render(){
    let addModalClose = () => this.setState({modalVisibile:false});
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm"><h1>Coin Trading</h1></div>
                    <div className="col-sm"><h1 className='text-success'> Money: ${this.state.money} </h1></div>
                    <div className="col-sm"><button className="btn btn-outline-dark float-right mt-2" onClick={()=>this.setState({modalVisibile: true})}>Add New Wallet</button>
                        <AddWalletModal show={this.state.modalVisibile} onHide={addModalClose} coinList={this.state.coinList}/>
                    </div>
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