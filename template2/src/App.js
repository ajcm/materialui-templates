import React,{Component} from 'react'
import {BrowserRouter,Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme';

import NavBar from './Components/Layouts/NavBar'
import Footer from './Components/Layouts/Footer'

import {Page1,Page2,Page3,Page4,Page5,Page6} from './Pages'

import Grid1 from  './Components/Containers/Grid1'
import Paper1 from  './Components/Containers/Paper1'

import Types from './Components/Types'
import TypesShort from './Components/TypesShort'


 class App extends Component {

    render(){
      return(
        <ThemeProvider theme={theme}>
         <CssBaseline />
         <BrowserRouter basename={'/template2'} >
         <NavBar />

           <main>

           <Route exact path="/"  render={() =><Grid1><TypesShort/></Grid1>} />

            <Route exact path="/page1" render={() =><Grid1><Types/></Grid1>} />
            <Route exact path="/page2"  render={() =><Grid1></Grid1>} />
            <Route exact path="/page3"  render={() =><Grid1><Page4/></Grid1>} />
            <Route exact path="/page4"  render={() =><Grid1><Paper1><TypesShort/></Paper1></Grid1>} />
            <Route exact path="/page5"  render={() =><Grid1><Paper1><Page5/></Paper1></Grid1>} />
            <Route exact path="/page6"  render={() =><Grid1><Paper1><Page6/></Paper1></Grid1>} />



           </main>
           <Footer/>
         </BrowserRouter>
       </ThemeProvider>
 )
 }
}

export default App
