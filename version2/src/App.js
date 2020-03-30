import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'
import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Footer from './Components/Layouts/Footer'
import NavBar from './Components/Layouts/NavBar'
import { Home, Locations, Towns } from './Pages'
import theme from './theme'

 class App extends Component {

    render(){
      return(
        <ThemeProvider theme={theme}>
         <CssBaseline />
         <BrowserRouter basename={'/version2'}>
         <NavBar />

           <main>
            <Route exact path='/'   render={() =><Home/>}/>          
            <Route exact path='/Towns/:locationId'   render={(props) =><Towns {...props} />}/>
            <Route exact path='/Locations'   render={() =><Locations/>}/>
           </main>
           <Footer/>
         </BrowserRouter>
       </ThemeProvider>
 )
 }
}

export default App
