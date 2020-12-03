import React from 'react';
import {AiFillFacebook} from "react-icons/ai/";
import {AiFillTwitterCircle} from "react-icons/ai/";
import {AiFillInstagram} from "react-icons/ai/";
import { IconContext } from "react-icons";




class SocialMedia extends React.Component{

        state={

            facebook: "https://facebook.com/freddybihozagara",
            instagram: "https://instagram.com/freddybihozagara",
            twitter: "https://twitter.com/Fbihozagara"
        }

  
    render(){

        return(

            <div>
            
            <table>
                <tbody>
                    <tr><IconContext.Provider value={{ size: "5em", color: "#003607" }}>
                        <div>                    
                        <td><a href={this.state.facebook}><AiFillFacebook/></a> </td>
                        <td><a href={this.state.instagram}><AiFillInstagram/></a> </td>
                        <td><a href={this.state.twitter}><AiFillTwitterCircle/></a> </td>
                    </div>
                    </IconContext.Provider>
                    
                    </tr>
                    
                    <tr>
                        <td><img src='https://unsplash.it/200/200?gravity=west' alt=''/></td>
                        
                    </tr>
                </tbody>
            </table>

            </div>



            
        )
    }
}


export default SocialMedia;