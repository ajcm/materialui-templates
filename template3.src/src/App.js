import React,{Component,Fragment} from 'react'
import {BrowserRouter,Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme';

import NavBar from './Components/Layouts/NavBar'
import Footer from './Components/Layouts/Footer'

import {Page1,Debug,ForecastLocation,RestRequests} from './Pages'

import Grid1 from  './Components/Containers/Grid1'
import Paper1 from  './Components/Containers/Paper1'


 class App extends Component {

    render(){
      return(
        <ThemeProvider theme={theme}>
         <CssBaseline />
         <BrowserRouter>
         <NavBar />

           <main>

            <Route exact path='/' basename={'/template3'}  render={() =><Grid1><Page1/></Grid1>}/>


          <Route
           path="/debug"
           render={({ match: { url } }) => (
             <>
               <Route path={`${url}/`} render={() =><Grid1><Debug/></Grid1>} exact />
               <Route path={`${url}/RestRequests`} render={() =><Grid1><RestRequests/></Grid1>}  exact />
               <Route path={`${url}/ForecastLocation`} render={() =><ForecastLocation/>}  exact  />

             </>
           )}
         />

          {/*  <Route exact path="/debug/Debug"  render={() =><Grid1><Debug/></Grid1>}/>
            <Route exact path="/debug/ForecastLocation"  render={() =><Grid1><ForecastLocation/></Grid1>}/>
            <Route exact path="/debug/RestRequests"  render={() =><Grid1><RestRequests/></Grid1>}/ */}

           </main>
           <Footer/>
         </BrowserRouter>
       </ThemeProvider>
 )
 }
}

export default App
