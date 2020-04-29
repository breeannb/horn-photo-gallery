import React, { Component } from 'react'

export default class ImageList extends Component {
    
    handleChange = (e) => {
        this.setState({ selected: e.target.value});
    };

    render() {
        return (
            <>
                <section> 
                    <select onChange={this.handleChange}> 
                        <option value="narwhal">Narwhal</option>
                        <option value="rhino">Rhino</option>
                        <option value="unicorn">Unicorn</option>
                        <option value="unilego">Unilego</option>
                        <option value="triceratops">Triceratops</option>
                        <option value="markhor">Markhor</option>
                        <option value="mouflon">Mouflon</option>
                        <option value="addax">Addax</option>
                        <option value="chameleon">Chameleon</option>
                        <option value="lizard">Lizard</option>
                        <option value="dragon">Dragon</option>
                    </select>
                </section>
            </>
        );
    }
}
