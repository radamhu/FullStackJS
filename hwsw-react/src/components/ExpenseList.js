import React from 'react';

class ExpenseList extends React.Component {
    constructor() {
        super()

        this.state = {
            amountGt: 1
        }
    }

    // renderelem a html elementbe
    render() {
        return <div> 
            <label>Összeg nagyobb min: </label>
            <input
                type='number'
                value={this.state.amountGt}
                onChange={(event) => this.setState({ amountGt: event.target.value })} />
            <table>
                <thead>
                    <tr>
                        <td>MEgnevezes</td>
                        <td>Osszeg</td>
                        <td>Note</td>
                    </tr>
                </thead>
                <tbody>
                    {/* végig itelárulnk a kiadásokn, props.expenses-en végiglépkedek, végig map-elek, a tömb elemein végigmegyek, szépen viszakpaok egy expensese-t
            minden egyes expense-re, dobjon ki egy tábláz sort
            */}
                    {this.props.loading && <p>'Betoltes allatt'</p> }
                    {this.props.expenses.map((expense) => {
                        return expense.amount > this.state.amountGt &&
                        <tr key={expense._id}>
                            <td>{expense.name || expense.title}</td>
                            <td>{expense.amount} {expense.currency}</td>
                            <td>{expense.comment} </td>
                        </tr>;
                    })}
                </tbody>
            </table>
        </div>;
    }
}


export default ExpenseList;