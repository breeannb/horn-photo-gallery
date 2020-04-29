import React, { Component } from 'react'
import './App.css';
import Header from './Header.js';
import ImageList from './ImageList.js';
import ImageItem from './ImageItem.js';
import images from './data.js';

export default class App extends Component {

  //intialize state to null 
  state = { selected: null }; 

  render() {
    return (
      <>
      <div>
        <Header />
        <ImageList />
        {/* <ImageItem hornedbeing={this.props.hornedbeing}/> */}
      </div>

      <section>
        <ul>
          {
            images
              .filter(image => {
                //if there is nothing selected, show ALL HORNED ANIMALS
                if (!this.state.selected) return true;
                //otherwise only show the horned animal if the type is the same as the selected horned animal type 
                return image.keyword === this.state.selected;
              })

              .map(image =>{
                // console.log(image)
                return <ImageItem  hornedbeing={image} />
              })
          }
        </ul>
      </section>
      </>
    )
  }
}


