import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/dist/client/image'

import HeadLogo from './headLogo'

const Profile = () => {
    const [userInformation, setUserInformation] = useState({
        firstname:"",
        lastname:"",
        address:"",
        gender:"",
        phone:"",
        dob:"",
        games:{
            csgo:{
                plays:false,
                nick:"",
            },
            dota:{
                plays:false,
                nick:"",
            },
            pubgm:{
                plays:false,
                nick:"",
            },
            mobleg:{
                plays:false,
                nick:"",
            },
        },
        platform:{
            mobile:false,
            pc:false,
        },
    })

    const handleChange = async (e) => {
        // const [firstname ,lastname, address, gender, phone, dob] = [{e.firstname, e.lastname, e.address, e.gender, e.phone, e.dob}]
    }

    const router = UseRouter();

    const {firstname, lastname, address, gender, phone, dob, games, platform} = userInformation;

    return (
        <>
        <Head>
            <title>
                profile
            </title>
            <div className = "bg-gray-200 font-body flexex-col w-screen">
                <HeadLogo/>
                <div>
                    <form onSubmit = {handleSubmit}>
                        <div>
                            <label>
                                First Name
                            </label>
                            <input
                                id = "firstname"
                                type = "text"
                                placeholder = "First Name"
                                value = {firstname}
                                name = "firsttname"
                                onchange = {handleChange}
                                required 
                            />
                        </div>

                        <div>
                            <label>
                                Last Name
                            </label>
                            <input
                                id = "lastname"
                                type = "text"
                                placeholder = "Last Name"
                                value = {lastname}
                                name = "lasttname"
                                onchange = {handleChange}
                                required 
                            />
                        </div>

                        <div>
                            <label>
                                Address
                            </label>
                            <input
                                id = "address"
                                type = "text"
                                placeholder = "Address"
                                value = {address}
                                name = "address"
                                onchange = {handleChange}
                                required 
                            />
                        </div>

                        <div>
                            <label>
                                Phone Number
                            </label>
                            <input
                                id = "number"
                                type = "text"
                                placeholder = "Number"
                                value = {number}
                                name = "number"
                                onchange = {handleChange}
                                required 
                            />
                        </div>

                        <div>
                            <label>
                                Gender
                            </label>
                            <select id = "dob">
                                <option value="male">option1</option>
                                <option value="female">option2</option>
                                <option value="others">option3</option>
                            </select>
                        </div>

                        <div>
                            <label>
                                Address
                            </label>
                            <input
                                id = "dob"
                                type = "date"
                                placeholder = "dob"
                                value = {dob}
                                name = "dob"
                                onchange = {handleChange}
                                required 
                            />
                        </div>
                        
                        <div>
                            <label>Medium:</label>
                            <input type="checkbox" id= "csgo" name="games" value= "csgo" onchange = {handleChange}/><span>CS:GO</span>
                            <input type="checkbox" id="dota2" name="games" value= "dota2" onchange = {handleChange}/><span>DOTA 2</span>
                            <input type="checkbox" id="pubgm" name="games" value= "pubgm" onchange = {handleChange}/><span>PUBG Mobile</span>
                            <input type="checkbox" id="mobleg" name="medium" value= "mobleg" onchange = {handleChange}/><span>Mobile Legends</span>
                        </div>



                    </form>
                </div>
            </div>
        </Head>
        </>
    )
}