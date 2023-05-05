import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: false,
  }

  //   renderAuthButton = () => {                                          //if-else statement
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button type="button">Login</button>
  //     }
  //     return <button type="button">Logout</button>
  //   }

  render() {
    const {isLoggedIn} = this.state

    // let authButton                                                        //element variable */
    // const {isLoggedIn} = this.state
    // if (isLoggedIn === true) {
    //   authButton = <button type="button">Login</button>
    // } else {
    //   authButton = <button type="button">Logout</button>
    // }
    return (
      <div className="container">
        <Welcome greeting="Hi" />

        {isLoggedIn && <button type="button">Login</button>}
        {!isLoggedIn && <button type="button">Logout</button>}

        {/* {isLoggedIn ? <button type="button">Login</button> : null} */}

        {/* {authButton}                                              //element variable */}
        {/* {this.renderAuthButton()}                                 //if-else statement */}
      </div>
    )
  }
}

export default App
