import React, { Component } from 'react';
import AddInventory from '../inventory/addInventory';
import PreviewItem from '../inventory/previewItem';


class admin extends Component {
    constructor() {
        super();
        this.state={
            items:[]
        }
    }
    render() {
        return (
            <div style={{display:"flex", justifyContent:"space-around"}}>
                <AddInventory/>

                <div>
                    {/* will pass props from add inventory to previewitems to preview item before submitting and will confirm submit before submitting. */}
                <PreviewItem/>

                </div>

            </div>
        );
    }
}

export default admin;