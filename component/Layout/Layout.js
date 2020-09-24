import React,{Component} from 'react';
import Aux from '../auxillary';
import Toolbar from '../Toolbar/Toolbar';
import SideMenu from '../SideMenu/SideMenu';


class Layout extends Component{

    state ={
        showSideMenu:false
    }

sideCloseMenuDrawer=()=>{
this.setState({showSideMenu:false})
}

toggleMenu=()=>{
    this.setState((preState)=>{return {showSideMenu:!preState.showSideMenu}})
}

 render(){
    return (
        <Aux>
            <Toolbar menuClicked={this.toggleMenu} logout={this.props.logout} username={this.props.username}/>
            
            <SideMenu  closed={this.sideCloseMenuDrawer} open={this.state.showSideMenu}/>
            <main style={{marginTop:'100px'}}>
                {this.props.children}
            </main>
        </Aux>
    );
     }
}



export default Layout;