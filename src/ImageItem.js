import React, { Component } from 'react'

export default class ImageItem extends Component {
    render() {
        return (
            <li>
                <div>
                    <h2>{this.props.hornedbeing.title}</h2>
                    <p>{this.props.hornedbeing.keyword}</p>
                    <p>{this.props.hornedbeing.horns}</p>
                </div>

                <div>
                    <img alt="" src={this.props.hornedbeing.url} />
                </div>
            </li>
        )
    }
}
