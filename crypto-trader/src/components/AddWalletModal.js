import React, {Component} from 'react';
import {Modal, Button} from 'react-bootstrap';
import DropdownSearch from '../components/SearchableDropdown';

export default class AddWalletModal extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <Modal
                {...this.props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        What type of coin will this wallet hold?
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Search for a coin</h4>
                    <DropdownSearch coinList={this.props.coinList}></DropdownSearch>
                </Modal.Body>
                <Modal.Footer>
                    <Button className="btn btn-danger" onClick={this.props.onHide}>Cancel</Button>
                    <Button onClick={this.props.onHide}>Submit</Button>
                </Modal.Footer>
            </Modal>
        )
    }
}



