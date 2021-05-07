import React from 'react';

import './styles/login.css';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

class Login extends React.Component {
    //Levantamiento del estado

    handleChange = e => {
        // const nextForm = this.state.form;
        // nextForm[e.target.name] = e.target.value;
        this.setState({ 
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            }
        });
    };

    render() {
        return(
            <React.Fragment>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge 
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName} 
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                email={this.state.form.email}
                            />
                        </div>

                        <div className="col-6">
                            
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

export default  Login;