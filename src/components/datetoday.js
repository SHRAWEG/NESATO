import React, {useState} from 'react';

export default function DateToday() {

    // var today = new Date("3 march 2015 20:30:00");
    var deadline = new Date("16 august 2021 15:36:00");

    var today = new Date();

    const deadlines = new Date("16 august 2021 15:37:00");
    
    const [submission, setSubmission] = useState(false);

    const checkDeadline = () => {
        const date = new Date()
        // console.log(date)
        if(date <= deadlines){
            setSubmission(true)
        } else {
            setSubmission(false)
        }
    }

    // "registration_end_date_time" : new Date(reg_end_date.getDate()+" "+reg_end_date.toLocaleString('en-us', {month: 'short'}) + " " + reg_end_date.getFullYear() + " " + registration_end_time  ),

    const handleSubmit = (e) => {
        e.preventDefault();
        const time = e.target.time.value
        const str  ="prasesh"

        console.log(today.getFullYear())
        console.log(today.getDate())
        console.log(today.getMonth())
        console.log(e.target.date.value)

        const regdate = new Date(e.target.date.value)

        console.log(regdate)
        
        const inDate = regdate.getDate()
        const inYear = regdate.getFullYear()
        const inMonth = regdate.toLocaleString('en-us', {month: 'short'})

        const nDate = new Date(inDate+" "+inMonth+" "+inYear+" "+time)

        console.log("")

        const newStr = inDate+" "+inMonth+" "+inYear+" "+time

        console.log(nDate)
        console.log(newStr)

        
    };

    

    return(
        <div className="mt-10">  
            <form
                onSubmit={handleSubmit}
            >   
            time
                <input 
                    type="time" 
                    id="time"
                    name="time"
                    // value={query.email}
                    // onChange={handleChange()}
                >

                </input>

                <br>
                </br>
            
            date 
                <input
                    type="date"
                    id="date"
                    name="date"
                >
                </input>
                
                <br/>
                <button type="submit"  onClick={ checkDeadline }>
                    Submit
                </button>
            </form>
                
            <br></br>
                {
                    submission && (
                        <>
                            Success
                        </>
                    )
                    
                }
                {
                    !submission && (
                        <>
                            Deadline expired
                        </>
                    )
                }
        </div>
    )
}
    