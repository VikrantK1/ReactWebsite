import React,{Component}  from 'react';
import Menu from './MenuComponent';
import {DISHES} from '../shared/dishes';
import DetailedList from './DishdetailComponent';
import Header from './HeaderComponent';
import Home from './HomeComponent';
import Footer from './FooterComponent';
import {Switch,Route, Redirect} from 'react-router-dom';
class Main extends Component  {
    constructor(props)
    {
        super(props);
        this.state={dishes:DISHES
        }
    }
    // onDishselected(dishId)
    // {
        
    //     this.setState({onSelectedDishId:dishId});
       
    // }
   
  render()
  {
   const HomePage=()=>{
     return(

      <div>
        <Home/>
      </div>
     );
   }
    return (
        <div>
           <Header/>
            <Switch>
              <Route path="/home" component={HomePage}/>
              <Route exact path="/menu" component={()=><Menu dishes={this.state.dishes}/>}/>
              <Redirect to="/home"/>
            </Switch>
          <Footer/>
        </div>
      );
  }
}
export default Main;