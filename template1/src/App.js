import React,{Component} from 'react'
import {BrowserRouter,Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme';

import NavBar from './Components/Layouts/NavBar'
import Footer from './Components/Layouts/Footer'

import {Page1,Page2,Page3,Page4} from './Pages'


 class App extends Component {

    render(){
      return(
        <ThemeProvider theme={theme}>
         <CssBaseline />
         <BrowserRouter>
         <NavBar />
           <main>
             <Route exact path="/" component={Page1} />
             <Route exact path="/page1" component={Page1} />
             <Route exact path="/page2" component={Page2} />
             <Route exact path="/page3" component={Page3} />
             <Route exact path="/page4" component={Page4} />
           </main>
           <Footer/>
         </BrowserRouter>
       </ThemeProvider>
 )
 }
}

export default App
