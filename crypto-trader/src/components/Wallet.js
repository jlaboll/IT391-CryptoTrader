import React, {Component} from 'react';
import NumberFormat from "react-number-format";


export default class Wallet extends Component {
    state = {
        coin: '',
        count: 0

    };
    promptAmt(){
        let amount = prompt("How much?", 1);
        if(amount===null){return 0;} else {
            return amount;
        }
    }
    handleBuy = () => {
        let buyAmount = this.promptAmt();
        let value = parseFloat(this.state.count);
        let newValue = value + parseFloat(buyAmount);
        this.setState({count: newValue});
    }
    handleSell = () => {
        let sellAmount = this.promptAmt();
        let value = parseFloat(this.state.count);
        if(value === 0 && sellAmount!== 0){alert("No coins to sell");} else {
            let newValue = value - parseFloat(sellAmount);
            if(newValue < 0){alert("You don't have that much");}
            else{this.setState({count: newValue});}

        }
    }
    render(){
        // console.log('props', this.props);
        return(
            <div className="container">
                <div className="row border-bottom mb-2 pt-2 ">
                    <div className="col-sm"><span>{this.props.coin} </span></div>
                    <div className="col-sm d-flex justify-content-center"><span>{this.displayCount()} / {this.displayAmount()}</span></div>
                    <div className="col-sm mb-2">
                        <button className="btn btn-outline-dark float-right" onClick={this.handleBuy}>Buy</button>
                        <button className="btn btn-outline-dark float-right" onClick={this.handleSell}>Sell</button>
                    </div>
                </div>
            </div>
        );
    }

    displayCount(){
        return this.state.count;
    }
    calculateAmount(){
        // coinValue * count
        let coinVal = parseFloat(this.props.coinValue);
        let count = parseFloat(this.state.count);
        let amount = coinVal*count;
        amount=amount.toFixed(2);
        return amount;
    }
    displayAmount(){
        return(
            <NumberFormat value = {this.calculateAmount()} displayType={'text'} thousandSeparator={true} prefix={'$'}/>
        );
    }

}