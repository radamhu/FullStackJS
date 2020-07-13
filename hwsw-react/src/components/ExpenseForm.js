import React from 'react';

class ExpenseForm extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'Kiadas #',
            amount: '100',
            currency: 'huf',
        }

        // hozzá kell bind-olni a metódust az osztályunkhoz
        // handleInputChange hozzá bind-oljuk a mi this nevezető változónkra, ami jelenelg az ExpenseForm-ra mutat
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleAddExpense = this.handleAddExpense.bind(this);

    }

    // most mutáljuk a kezdeti state-t, amit incializltunk, event-et kapunk meg
    handleInputChange(event) { 
        // megmondjuk hogy mit szeretnénk mutálni
        // eventtarget.name-et állítsa be az event.target.value-re
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    
    handleAddExpense() {
        // destruction-el szétszedem a state-t
        const { name, amount, currency } = this.state;

        // ezzzel jellezük azt hogy új kiadást szeretnénk hozzáadni
        // props-on fogok visszajhívni a szülő komponens felé
        this.props.onAddExpense({
            name, amount, currency
        })
    }

    render() {
        // kiveszem a state-ből az adatokat
        const { name, amount } = this.state;
        // style={{}} property Reactban , ami JS objektumot vár 
        // ahoz hogy JS-t tudjak használni ugye JSX szintaksziban, kapcsoz zárójel, ahhoz hogy objektumot tudjak használni, dupla zárójel kell   {{ }}
        return <div style={{ marginBottom: 50 }}>
            <label>MEgnevezes</label>
            <input name='name' value={name} onChange={this.handleInputChange} />
            <label>Osszeg</label>
            <input name='amount' value={amount} onChange={this.handleInputChange} />
            <button onClick={this.handleAddExpense}>Hozzaadas</button>
        </div>;
    }
}

export default ExpenseForm;