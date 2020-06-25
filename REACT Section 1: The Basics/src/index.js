import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.css';
import JSON from './db.json';

import Header from './components/header';
import NewsList from './components/news_list';
// import Footer from './components/footer';
import Lifecycles from './components/lifecycles'

//Class App
class App extends Component
{
    // constructor(){
    //     super() // Allows the class to gather functions and components from parent component

    //     this.state = {
    //         news:JSON
    // }
    
    state = {
        news:JSON,
        filtered:[],
        footerText:'I am a happy footer',
        visible: true
        // name:'Bob',
        // lastname:'Billy'
    }

    getKeywords = (event) => {
        let keywords = event.target.value;
        
        // Takes the typed keywords and filters them through the title variables
        let filtered = this.state.news.filter((item) => {
            return item.title.indexOf(keywords) > -1
        });
        this.setState({
            filtered
        })

    }
    
    toggleComp = () => {
        this.setState({
            visible: !this.state.visible
        })
    }

    render(){
        // Return: returns one line at a time.
        // Can be circumvented by using div
        const state = this.state;
        let newsFiltered = state.filtered;
        let newsAll = state.news;
        
        return (
        /*
        <div className="example">
             <h1>Hello there</h1>
        </div>
        
        // React fragment: helps lessen the naming of divs
        // Can use <> or <React.Fragment>
        <>
            <h1>Hello there</h1>
            <h1>Hello there</h1>
            <h1>Hello there</h1>
            <h1>Hello there</h1>
            <h1>Hello there</h1>
            <h1>Hello there</h1>
        </>
        // This is the same as the React.createElement below
        // This is JSX. It translates HTML to JS
        // React is needed in order for the above to work.
        */
   
            
            <div>
                <Header keywords={this.getKeywords}/>
                {/* <NewsList news={this.state.news}/> */}
                {/*Child of a component*/}
                <NewsList news={newsFiltered.length === 0 ? newsAll : newsFiltered}>
                    <br/>
                    <h1>I am a child.</h1>    
                </NewsList>
                {/* <NewsList news={this.state} hello="string"/> */}
                {/* <Footer footerText={this.state.footerText}/> */}
                <button onClick={this.toggleComp}>Toggle Lifestyles</button>

                { this.state.visible ? 
                <Lifecycles/>
                :
                null
                }
            </div>
        )
    }
    // return React.createElement('h1', {className:'title'});
}

// Render takes App and displays it at the div ID of root
// ReactDOM.render(App, document.getElementById('root'))
// However, we need it to be a component, not a function

ReactDOM.render(<App/>, document.getElementById('root'))
//With the addition of < />, App is a component.