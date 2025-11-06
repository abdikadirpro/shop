import { useState } from "react";

const Payment = ()=>{
    const initialState = {
        zaad:false,
        evc:false,
        sahal:false
    }
    const [paymentMethod,setPaymentMethod] = useState(initialState);

    return(
        <div className="payment">
            <h2>Pay With</h2>
            <div className="payment-cards">
                <div className={`payment-card ${paymentMethod.zaad && "selected"}`}
                onClick={()=>setPaymentMethod({...initialState,zaad:true})}
                >
                    <h3>Zaad Service</h3>
                </div>
                <div className={`payment-card ${paymentMethod.evc && "selected"}`}
                onClick={()=>setPaymentMethod({...initialState,evc:true})}
                >
                    <h3>EVC Service</h3>
                </div>
                <div className={`payment-card ${paymentMethod.sahal && "selected"}`}
                onClick={()=>setPaymentMethod({...initialState,sahal:true})}
                >
                    <h3>Sahal Service</h3>
                </div>


            </div>
            <form className="form-control">
                <input type="text" placeholder="+252..." />
                <button className="proceed">proceed!</button>
            </form>
        </div>
    )
}
export default Payment;