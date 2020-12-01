import React from 'react'
import { Dropdown } from 'semantic-ui-react'

const DropdownSearch = (props) => (
    <Dropdown
        placeholder='Choose coin'
        fluid
        search
        selection
        options={props.coinOptions}
    />
)

export default DropdownSearch