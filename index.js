import React from 'react';           // Step 1: to  load the libraries/modules
import ReactDOM from 'react-dom'
 
class App extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Electronics brand="Samsung" name="LED TV" price="34000"/>
                <Clothing brand="Puma" name="jeans" price="2400"/>
                <Footer/>
            </div>
        )
    }
}
 
class Electronics extends React.Component{
 render(){
    return(
     <div>
         <p> Details of the Product below:</p>
         Product: {this.props.name} is costing me at {this.props.price} and is of good brand {this.props.brand}
         <h2> Other Electronics Products below</h2>
         <Microwave brand={this.props.brand}/>
         <WashingMachine brand={this.props.brand}/>
     </div>
    )
 }
}
 
class Microwave extends React.Component{
    render(){
        return(
            <p> The Microwave is of brand {this.props.brand}</p>  
        )
    }
}
 
class WashingMachine extends React.Component{
    render(){
        return(
          <p> The WashingMachine is of brand {this.props.brand}</p>  
        )
    }
}
 
class Clothing extends React.Component{
 render(){
    return(
        <div>
            <p> Details of the Product below:</p>
             Product: {this.props.name} is costing me at {this.props.price} and is of good brand {this.props.brand}
             <h2> Clothing Products below</h2>
             <Jeans brand={this.props.brand}/>
             <Tshirts brand={this.props.brand}/>
        </div>
    )
 }
}
 
class Jeans extends React.Component{
    render(){
        return(
            <p> The Jeans is of brand {this.props.brand}</p>  
        )
    }
}
 
class Tshirts extends React.Component{
    render(){
        return(
          <p> The Tshirts is of brand {this.props.brand}</p>  
        )
    }
}
 
class Header extends React.Component{
    render(){
        return(
            <h2> Welcome to Shopiy Home Page</h2>
        )
    }
}
 
class Footer extends React.Component{
    render(){
        return(
            <h4> Copyright 2024@ Shopiy website. All rights reserved.</h4>
        )
    }
}
 
ReactDOM.render(<App/>, document.getElementById("root"))
