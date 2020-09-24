import React, {Component} from 'react';
import Spinner from '../../component/Spinner/Spinner';
import Content from '../../component/Content/Content';
import Footer from '../../component/Footer/Footer';
import Layout from '../../component/Layout/Layout';
import {Route, Switch} from 'react-router-dom';
import Nutrients from '../Nutrients/Nutrients';
import Workouts from '../Workouts/Workouts';
import Diary from '../Diary/Diary';


class UserProfile extends Component {
_isMounted=false;
    state={
        loading:true,
        isMounted:false,
       
      

    }

   
    componentDidMount() {
        this._isMounted=true;
        if(this._isMounted){
            setInterval(()=>this.setState({loading:false}), 2000)
        }
    console.log(this._isMounted)
      }

      componentWillUnmount() {
        this.setState({loading:true,isMounted:false});
    this._isMounted=false;
      console.log(this._isMounted)
      console.log(this.state.loading+','+this.state.isMounted)
       }

      

    render(){
        const spinner=this.state.loading;
    
        return (
            <div>
                {spinner ? <Spinner/> : 
                <div>
                      <Layout logout={this.props.handleLogout} username={this.props.username}>
                      <Switch>             
                         <Route path='/Workouts' component={Workouts}  />
                         <Route path='/Nutrients' component={Nutrients} />
                         <Route path='/Diary' component={Diary} /> 
                         <Route path='/' component={Content} /> 
                    </Switch>
                    <Footer /> 
                    </Layout>
           
                </div>
            } 
    
            </div>
        )
    }
}

export default UserProfile;