import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import '../../assets/styles/try.css';
import ru_logo from '../../assets/images/ru_logo.svg';
import library from '../../assets/images/library.svg';
import streets from '../../assets/images/streets.svg';
class Try extends Component {
  render(){
      return (
        <Fragment>
            <div className = "try_text">
                <p>
                TRY  
                <span> DENSITY </span>
                TODAY!
                </p>
            </div>
            <div className = "try_icons">
                <div className = "try_container">
                    <Link to = "/ruhacks">
                        <img className = "try_icon" src = {ru_logo} alt = "ru_logo"/>
                        <p className = "ru_hacks_text">RU HACKS</p>
                    </Link>
                </div>
                <div className = "try_container">
                    <img className = "try_icon" src = {library} alt = "library"/>
                    <p className = "library_text">LIBRARY</p>
                </div>
                <div className = "try_container">
                    <img className = "try_icon" src = {streets} alt = "street"/>
                    <p className = "street_text">YONGE STREET</p>
                </div>
            </div>
        </Fragment>
      );
    }
  }
export default Try;