import React from 'react';

class NAmeInput extends React.Component {
    // props : ősosztály ad le adatot, soha nem tudok visszafelé
    constructor(props) {
        // super = a Nameinput osztály hívja meg az őosztály konstruktoruát
        super(props)

        // state = kezdeti belső állapot az alkalmazásnak
        // this.state = {
        //     firstName: props.firstName,
        //     lastName: props.lastName
        // }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    // componentWillReceiveProps(nextProps, prevProps) {
    //     this.setState({
    //         firstName: nextProps.firstName,
    //         lastName: nextProps.lastName
    //     })  
    // }

    handleInputChange(event) {
        // his.state.firstName = event.tartget.value; 
        // mert itt használom a this-t, aezért lejjebb a return résznél, ezért a handleFirstNameChange használatát hozzá kell bind-oljam
        // a a NAmeInput osztályhoz
        // this.setState({
        //     // [] kulcskést is tudom használni a válrozót
        //     [event.target.name]: event.target.value
        // }) 
        
        // szülő komponesnenek üzenjek, ey event-re van szükségem
        // this. props-on eventen keresztól visszadtuk hogy 
        // milyen kulcsú elem milyen értékkel változik, ezt az esemény utján adom fel
        // és ezt a változász az app.js a belső state-n kerseztül le is követ
        // ahhoz hogy a this-t használni tudjam bind-olni kell, expressiont kell használni az adott függvényhez
        this.props.onNameChange(event.target.name, event.target.value)
    }

    // html elementet renderelem, return-ölöm
    render() {
        // state-ből destruction = lastName, firstName-et szeretném elkérni a stateből
        // const { lastName, firstName } = this.state 
        const { lastName, firstName } = this.props; 

        return <div>
            {/* onChange = az app.js-ben a Nev: mellett szeretném megjeleneíteni az input type-ba beírt értéket  
                this az osztályra mutat ahol vagyunk és arra a handleFirstNameChange function-re
            */}
            First: <input name='firstName' onChange={this.handleInputChange} value={firstName} />
            Last: <input name='lastName' onChange={this.handleInputChange} value={lastName} />
            
        </div>;
    }
}

export default NAmeInput;