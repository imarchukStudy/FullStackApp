
import { feedbackApi } from "../../api/index";
import { FormEvent, useState,ChangeEvent} from 'react'
export const Form = ()=>{

    const data = {
        name:'',
        mail:'',
        message:''
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) =>{
            event.preventDefault();
            feedbackApi.createFeedback(data)
    }

    const handleChangeNameValue = (event:ChangeEvent<HTMLInputElement>)=>{
        data.name = event.target.value;
    }
    const handleChangeMailValue = (event:ChangeEvent<HTMLInputElement>)=>{
        data.mail = event.target.value;
    }
    const handleChangeMessageValue = (event:ChangeEvent<HTMLTextAreaElement>)=>{
        data.message = event.target.value
    }



    return (
    <div className="container">
        <div className="decore_4"></div>
        <div className="decore_5"></div>
        <div className="decore_6"></div>
        <div className="feedback_form">
            <h2>Reach out to us!</h2>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChangeNameValue} type="text" name="name" className="name input" placeholder="Your name*" />
                <input onChange={handleChangeMailValue}  type="mail" name="mail" className="name input" placeholder="Your e-mail*"/>
                <textarea onChange={handleChangeMessageValue} name="" id="" placeholder="Your message*"></textarea>
                <button type="submit">Send message</button>
            </form>
        </div>
        <div className="map"></div>
        <footer>
        <div className="container footer_container">
            <div className="decore_1"></div>
            <div className="decore_2"></div>
            <div className="decore_3"></div>

            <ul className="footer__socials">
                <li><i className="uil uil-facebook-f"></i></li>
                <li><i className="uil uil-instagram-alt"></i></li>
                <li><i className="uil uil-twitter"></i></li>
                <li><i className="uil uil-linkedin"></i></li>
            </ul>
        </div>
    </footer>
    </div>  
    )
}

