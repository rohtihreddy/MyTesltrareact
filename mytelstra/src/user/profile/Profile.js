import AppHeader from 'common/AppHeader';
import React, { Component } from 'react';
import { Button } from 'reactstrap';
import './Profile.css';
import { ACCESS_TOKEN, UserAuthenticated, USER } from 'constants/index';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/slide.css';


class Profile extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    render() {
        return (
            <div className="profile-container">
                <Button href="/" onClick = {() => {
                    localStorage.removeItem(ACCESS_TOKEN);
                    localStorage.removeItem(UserAuthenticated);
                    localStorage.removeItem(USER);
                    this.setState({
                    authenticated: false,
                    currentUser: null,
                    
                    });
                    Alert.success("You're safely logged out!");
                }}>Log out</Button>
                <div className="container">
                    <div className="profile-info">
                        <div className="profile-avatar">
                            { 
                                this.props.currentUser.imageUrl ? (
                                    <img src={this.props.currentUser.imageUrl} alt={this.props.currentUser.name}/>
                                ) : (
                                    <div className="text-avatar">
                                        <span>{this.props.currentUser.name && this.props.currentUser.name[0]}</span>
                                    </div>
                                )
                            }
                        </div>
                        <div className="profile-name">
                           <h2>{this.props.currentUser.name}</h2>
                           <p className="profile-email">{this.props.currentUser.email}</p>
                           <p className="profile-email">{this.props.currentUser.id}</p>
                        </div>
                        
                    </div>
                </div>    
            </div>
        );
    }
}

export default Profile