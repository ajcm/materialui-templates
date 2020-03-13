import React,{Component,Fragment} from 'react'
import {BrowserRouter,Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme';

import NavBar from './Components/Layouts/NavBar'
import Footer from './Components/Layouts/Footer'

import {Home,Location} from './Pages'
import {Debug,ForecastLocation,RestRequests,Assets} from './Pages'

import Grid1 from  './Components/Containers/Grid1'
import Paper1 from  './Components/Containers/Paper1'


 class App extends Component {

    render(){
      return(
        <ThemeProvider theme={theme}>
         <CssBaseline />
         <BrowserRouter  basename={'/version1'} >
          <main>

          <Route exact path='/'  render={() =><Home/>}/>
          <Route path='/location/:id'  render={(props) => <Location {...props} />}/>

          <Route
           path="/debug"
           render={({ match: { url } }) => (
             <>
               <Route path={`${url}/`} render={() =><Grid1><Debug/></Grid1>} exact />


               <Route path={`${url}/RestRequests`} render={() =><Grid1><RestRequests/></Grid1>}  exact />
               <Route path={`${url}/ForecastLocation`} render={() =><ForecastLocation/>}  exact  />
               <Route path={`${url}/Assets`} render={() =><Grid1><Assets/></Grid1>}  exact  />

             </>
           )}
         />

        </main>
         </BrowserRouter>
       </ThemeProvider>
 )
 }
}

export default App
