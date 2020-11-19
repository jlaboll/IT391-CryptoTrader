import React from 'react';
import {TextBubble} from "../resources/Styles";

export class AccountBox extends React.Component {
    render() {
        return (
            <TextBubble>
                {document.getElementById('Application')}
            </TextBubble>
        )
    }

}