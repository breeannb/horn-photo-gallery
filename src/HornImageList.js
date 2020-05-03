import React, { Component } from 'react'

export default class HornImageList extends Component {
    


    render() {
        return (
            <>
            <section>
                <select onChange={this.props.myHornCallBackHandleChange}> 
                    <option value='' defaultValue>All Amount</option>
                    <option value='1' min="1" max="1">1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='100'>100</option>
                </select>
            </section>
            </>
        );
    }
}
