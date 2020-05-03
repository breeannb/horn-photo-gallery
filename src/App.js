import React, { Component } from 'react'
import './App.css';
import Header from './Header.js';
import NameImageList from './NameImageList.js';
import HornImageList from './HornImageList.js'
import ImageItem from './ImageItem.js';
import images from './data.js';

export default class App extends Component {

  //intialize state to null 
  state = { 
    nameQuery: { selected: null},
    hornQuery: { selected: null}
   }; 
  
  handleNameChange = (event) => {
    // console.log('hello world'); successfully logs out
  //get value of the input 
  const value = event.target.value; 
  // on change, we can now get the value
    // console.log('hello world!,', value); successfully logs out
  // set state of query to value
  this.setState({ nameQuery: value});
  
  }

  handleHornChange = (event) => {
      // console.log('hello world'); successfully logs out
    //get value of the input 
    const value = event.target.value; 
    // on change, we can now get the value
      // console.log('hello world!,', value); successfully logs out
    // set state of query to value
    this.setState({ hornQuery: value});
    
    
}

  render() {
    console.log('hello', this.state.hornQuery)
    return (
      <>
        <div className="entire-page">
          <div>
            <Header />
          </div>

          <section>
            <ol>

            <NameImageList myNameCallBackHandleChange={this.handleNameChange}/>

            {/* <HornImageList myHornCallBackHandleChange={this.handleHornChange}/> */}

              {
                images
                  .filter(image => {
                    //if there is nothing selected, show ALL HORNED ANIMALS
                    if (!this.state.nameQuery) return true;
                    //otherwise only show the horned animal if the type is the same as the selected horned animal type 
                    return image.keyword === this.state.nameQuery;
                  })

                  .map(image =>{
                    // console.log(image)
                    return <ImageItem  hornedbeing={image} />
                  })
              }

              {
                images
                  .filter(image => {
                    //if there is nothing selected, show ALL HORNED ANIMALS
                    if (!this.state.hornQuery) return true;
                    //otherwise only show the horned animal if the type is the same as the selected horned animal type 
                    return image.horns === Number(this.state.hornQuery);
                  })

                  .map(image =>{
                    // console.log(image)
                    return <ImageItem  hornedbeing={image} />
                  })
              }
            </ol>
          </section>

          
      </div>
      </>
    )
  }
}

