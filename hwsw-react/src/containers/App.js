import React, { Component } from 'react';
// import NAmeInput from './NAmeInput';
import ExpenseForm from '../components/ExpenseForm';
import ExpenseList from '../components/ExpenseList';
import { connect } from 'react-redux';
import { addExpense, getExpenses } from '../actions/expenseActions';
// import { getExpenses } from '../api/index';
import { incrementAsync } from '../actions/countAction';


// class alapú komponens
class App extends Component {

  constructor() {
    super()

    // koimponens belső sate-je
    this.state = {
      // azok az kaidások amiket az API ad vissza
      apiExpenses: []
    }

    // van egy kezdeti belső state-je amiben tárolunk pár változót
    // ezt űtpasszoljuk az alatta lévő komponensnek
    // !!! kimozgatom innen és berakom a végén az expensReducer.js-be
    // this.state = {
    //   expenses: [
    //     { id: 0, name: 'Kiadás #1', amount: 12312, currency: 'huf', comment: '....' },
    //     { id: 1, name: 'Kiadás #2', amount: 12312, currency: 'euor', comment: '....' }

    //   ]
    // }

    // itt is hozzá bind-olom
    this.handleAddExpense = this.handleAddExpense.bind(this);

  }

  // setState-n keresztül mutáljuk a state-et
  handleAddExpense(expense) {
    //this.setState({
      // új tömböt csinálok
      // [] destrcution egy tömbön akkor a tömb összes elemét megkapom az új tömbben + az új elem
      // új elem = object.assign új objetkumot létrehozunk és megadunk source objektum, plusz egy másik objektum id-jét és összemergelni a property-jét
      //expenses: [
        //...this.state.expenses,
        // tömbnek az elemei
        // Object.assign új kiadást összeredenlni eg ID mezőve, ami nem más mint a tömb listának az utolsó elemenek az ID-je
        //Object.assign(
        //  expense, { id: this.state.expenses[this.state.expenses.length -1].id + 1 })]
    //})

    // 
    this.props.AddExpense(expense)
      
  }

  // amikor a komponensünk vizuálisan betölt akkor hívodik meg az itteni dolog
  // tökéletes lifecícle event arra hogy kiváltsunk vmilyen eseméynt akkor az APP ténylegesn először kirenderelődött
  componentDidMount() {
    this.props.getExpenses();

    // getExpenses()
    //   // promise-oknak az eredményét a then-el lehet megszerezni
    //   // amit az axios visszaad az egy response objektum, amit meg aakrunk jeleníteni a response.data
    //   .then(response => {
    //     // state-ben tároljunk el, de hogyan tudunk mutálni? direktbe nem, hanem
    //     // response.data helyett setState metódus ahol megmondom emlyik propertyt: apiExpense változtatom meg, hogy az legyen apiExpense-el egyenlő
    //     this.setState({
    //       apiExpenses: response.data
    //     })
    //   })
    //   // .catch(err => {
        
    //   // })
  }

  // event handling és ezt az eseményt hogy kell lekezelni
  // és az osztály vmilyen belső metódusát szeretnénk használni akkor még bind-olni is kell
  // handleNameChange(key, value) {
  //   // staet direkteb nem mutálhatunk csak a setState-n keresztül
  //   this.setState({
  //     [key]: value
  //   })
  // }

  // handlePlusOneClick() { 
  //   this.setState((prevState) => {
  //     return { clickCount: prevState.clickCount + 1 } 
  //   })
  // }

  render() {
    // const { firstName, lastName } = this.state
    // const fullName = `${lastName} ${firstName}`;
    //console.log(this.props)
    return (
      <div >
        {/* Nev: { fullName.length > 3 && fullName }
        <NAmeInput
          // a saját komponensnek: NAmeInpit : átpasszolunk a props-on keresztül változót
          // mindig lefelé adunk adatot
          // visszafelé evet-en kerestül adunk adatot
          firstName={firstName}
          lastName={lastName}
          onNameChange={this.handleNameChange.bind(this)} />
        <br>
        </br>
        <button onClick={this.handlePlusOneClick.bind(this)} >+1</button> {this.state.clickCount }  */}
        {/* 2 komponens, adjunk props-ot hozzá,  */}
        <ExpenseForm onAddExpense={this.handleAddExpense} />
        <ExpenseList expenses={this.props.expenses} isLoading={this.props.isPending}/>
         {/* button megjívja a state count értéket, props-on kerseztül */}
        <button onClick={() => { this.props.increment(3) }}>{this.props.count}</button>
      </div>
    );
  }
}

// leválogatunk a store-rol adott értéke szerint
// kap egy state - et és leválogatja az információkat: store 2 ága van expense, counter
// count-ot defeniálni itt kell hogy elérhessem
// state-t a props-al összekötöttem
const mapStateToProps = (state) => {
  // olyan objektumot küldün vissza ami csak az expenseket fogja tárolni
  return {
    count: state.count,
    expenses: state.expense.expenses,
    isPending: state.expense.isPending
  }
}

// meg tudjak hivni, dispatchelni valamit, hogy meghvhassam
const mapDispatchToProps = (dispatch) => {
  // olyan objektumot küldün vissza ami csak az expenseket fogja tárolni
  return {
    AddExpense: (expense) => dispatch(addExpense(expense)),
    increment: (value) => dispatch(incrementAsync(value)),
    getExpenses: () => dispatch(getExpenses())
  }
}

// ezek után meg kell jelenjen az expense és és az onAddExpense a props-unkon

// high order componenent
// connect function : bemenő paraméter komponesn, eredmény ugyanúgy komponens
// tehát visszadja ugyanazt a komponenst + kiegészítő dolgokat, adatokkal, funkciókkal
// itt: state-ből leválogat props-ra fog ráaggatni : action-öket fog leválogatni
export default connect(mapStateToProps, mapDispatchToProps)(App);
