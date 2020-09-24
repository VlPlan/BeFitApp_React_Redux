import React,{Component} from 'react';
import Modal from './component/Modal/Modal';
import Aux from './component/auxillary';

const errorHandler=(WrappedComponent, axios)=>{

    return class extends Component {
        state={error:null}
        componentWillMount(){
            this.requestInterceptor = axios.interceptors.request.use(req=>{
                this.setState({error:null})
                return req;
            })
            this.resolveInterceptor = axios.interceptors.response.use(null,err=>{
this.setState({error:err});
return err;
            })
        }

        componentWillUnmount(){
            console.log("Unmounting:",this.requestInterceptor,this.resolveInterceptor)
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.resolveInterceptor);
        }

        errorConfirmation=()=>{
            this.setState({error:null});
        }

        render(){
return (
    <Aux>
        <Modal show={this.state.error} modalClose={this.errorConfirmation}>
           {this.state.error?this.state.error.message:null}
        </Modal>
<WrappedComponent {...this.props}/>
    </Aux>

);
    }
}
}

export default errorHandler