import React from "react";
import {Container} from "react-bootstrap";

var Client = require('coinbase').Client;
var client = new Client({
    'apiKey': 'API KEY',
    'apiSecret': 'API SECRET'
});
client.getCurrencies(function (err, currencies) {
    CoinWindow(currencies);
});

class CoinWindow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {

        const {data} = this.state;
        return (
            <Container>
                {
                    data.map((data) => {
                        return (
                            <CoinItem id={data.id}
                                      name={data.name}
                                      min_size={data.min_size}/>
                        )
                    })
                }
            </Container>
        )

    }
}

class CoinItem extends React.Component{

    constructor(props) {
        super(props);
        var Client = require('coinbase').Client;
        var client = new Client({'apiKey': 'API KEY',
            'apiSecret': 'API SECRET'});

        client.getExchangeRates({'currency': 'BTC'}, function(err, rates) {
            console.log(rates);
        });
    }

    render() {
        return undefined;
    }
}
