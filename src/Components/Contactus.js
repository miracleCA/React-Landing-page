import { useForm } from "react-hook-form";
import '../Assets/Contactus.css';
import tele from '../Images/Telephone.png';

function Contactus() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
        const onSubmit = (data) => {
            console.log(data);
            reset()
        }
    
    return(
        <div className="row" id="controw">
            <div className="col-md-2" id="side"></div>
            <div className="col-md-8">
                <div className="col-md-7">
                    <img alt='' src={tele} id="telimg"/>
                </div>
                <div className="col-md-5">   
                    <div id="formwrapper">
                        <form id="form" method="POST" onSubmit={handleSubmit(onSubmit)}>
                            <h2 id="formtitle">Contact Us</h2>
                            <div className="input-container">
                                <input 
                                    className="input-field" 
                                    id="name" 
                                    type="text" 
                                    placeholder="Name" 
                                    name="Name"
                                    {...register("name", { required: true, maxLength: 40 })}
                                />
                                {errors.name && <p id="error">Please input a Name</p>}
                            </div>
                            <div className="input-container">
                                <input 
                                    className="input-field" 
                                    id="email" 
                                    type="Email" 
                                    placeholder="Email" 
                                    name="Email"
                                    {...register("email", { required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ })}
                                />
                                {errors.email && <p id="error">Please input a valid Email address</p>}
                            </div>
                            <textarea 
                                 rows="6" 
                                 id="message" 
                                 placeholder="Message" 
                                 cols="50"
                                 {...register("message", { required: true, maxLength: 1001 })}
                            />
                            {errors.message && <p id="error">Please input a message</p>}
                            <button type="submit" id="btn">Send</button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="col-md-2" id="side"></div>
        </div>
    );
}

export default Contactus;