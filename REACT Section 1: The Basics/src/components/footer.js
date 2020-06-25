import React,{ Component } from 'react';

class Footer extends Component {
    // If we ever need to use the constructor, remember that it will be undefined until we pass it through
    // the constructor.
    // How to pass through the constructor:
    constructor(props){
        super(props)

        console.log(this.props)
    }

    render(){
        return(
            <footer>
                { this.props.footerText }
            </footer>
        )
    }
}

export default Footer;