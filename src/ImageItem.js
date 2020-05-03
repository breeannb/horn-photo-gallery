import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li>
                <div className="horned-animal-card">
                    <img alt="" src={this.props.hornedbeing.url} />
                    <h2>{this.props.hornedbeing.title}</h2>
                    <p>Description:{this.props.hornedbeing.description}</p>
                    <p>Keyword: {this.props.hornedbeing.keyword}</p>
                    <p>Amount of Horns: {this.props.hornedbeing.horns}</p>
                    
                </div>
            </li>
        )
    }
}
