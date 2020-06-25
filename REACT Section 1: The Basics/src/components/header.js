import React, { Component } from 'react';
//ES6 trick: don't need to refer to component later if used here.

// Name of component starts with a capital
// Use another function if I want to reference two of them

/*
Functionnal component: Header
const Header = () =>
{
    //If only returning a single element, can be written like this
    // return <div></div>
    return (
        <header>
            <div>Logo</div>
            <input/>
        </header>
        )
}
*/



// class based component: Header
// can extend (inherit) functions of other class
// can't simply return JSX, must render
class Header extends Component
{
    state = {
        // title:'The keywords are: ',
        // keywords:'',
        // In-line style change
        // active:false
        // Class style change
        active:'active'
        // count:0
    }
/*
    inputChange(event){
        // const value = event.target.value === '' ? false : true;
        const value = event.target.value === '' ? 'active' : 'non=active';
        this.setState({
            active: value,
            keywords: event.target.value
        })
        //console.log(event.target.value)
        //console.log('hey');
    }
*/  
    // addOne(){
    //     this.setState((state, props)=> ({
    //         count: state.count + 1
    //     }))
    // }

    render()
    {
            return (
                <header className={this.state.active}>
                {/* <header style={{background:`${this.state.active ? 'red' : 'blue'}`}}> */}
                    <div className="logo">Logo</div>
                    <input
                        onChange={ this.props.keywords }/>
                {
                /* 
                <div>{ this.state.title } </div>
                <div>{ this.state.keywords }</div>
                */
                }

                {
                /* 
                <br/>
                <div>{ this.state.count }</div>
                <div onClick={() => this.addOne() }>Add one</div> 
                */
                }
                </header>
            )
    }
}
export default Header;
// default: export the Header file and not the others.