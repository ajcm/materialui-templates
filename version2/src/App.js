import React,{Component,Fragment} from 'react'
import {BrowserRouter,Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { ThemeProvider } from '@material-ui/core/styles'

import theme from './theme';

import NavBar from './Components/Layouts/NavBar'
import Footer from './Components/Layouts/Footer'

import {Home,ForecastLocation,RestRequests,Locations,Districts,Towns} from './Pages'

import Grid1 from  './Components/Containers/Grid1'
import Paper1 from  './Components/Containers/Paper1'


 class App extends Component {

    render(){
      return(
        <ThemeProvider theme={theme}>
         <CssBaseline />
         <BrowserRouter basename={'/version2'}>
         <NavBar />

           <main>
            <Route exact path='/'   render={() =><Home/>}/>
            <Route exact path='/Districts'   render={() =><Districts/>}/>
            <Route exact path='/Towns'   render={() =><Towns/>}/>
            <Route exact path='/Locations'   render={() =><Locations/>}/>

          <Route
           path="/debug"
           render={({ match: { url } }) => (
             <>

               <Route path={`${url}/RestRequests`} render={() =><Grid1><RestRequests/></Grid1>}  exact />
               <Route path={`${url}/ForecastLocation`} render={() =><ForecastLocation/>}  exact  />

             </>
           )}
         />


           </main>
           <Footer/>
         </BrowserRouter>
       </ThemeProvider>
 )
 }
}

export default App
