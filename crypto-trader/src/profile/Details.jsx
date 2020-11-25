import React from 'react';
import { Link } from 'react-router-dom';

import { accountService } from '@/_services';
import {walletService} from "../_services/wallet.service";

function Details({ match }) {
    const { path } = match;
    const user = accountService.userValue;
    const wallets = walletService.getAllById(user);
    return (
        <div>
            <h1>My Profile</h1>
            <p>
                <strong>Name: </strong> {user.firstName} {user.lastName}<br />
                <strong>Email: </strong> {user.email}
            </p>
            <button>Add Wallet</button>
            {Object.keys(wallets).map((key) => (
                <>
                    <p key={key}>{wallets[key].walletName}</p>
                    <button>Delete Wallet</button>
                    <button>Wallet Overview</button>
                </>
            ))}
            <p><Link to={`${path}/update`}>Update Profile</Link></p>
        </div>
    );
}

export { Details };