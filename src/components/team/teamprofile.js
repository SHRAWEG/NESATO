import React, {useState, useRef, useCallback, useEffect} from 'react';
// import { getStaticProps } from '../../pages/team/[id]';
import SearchPlayers from './elements/searchplayers';
import TeamInfo from './elements/teamInfo';
import TeamLogo from './elements/teamLogo';


import Router from 'next/router'
import Image from 'next/image'

function TeamProfile(props) {
    let createDate = new Date(props.team.create_date)

    let month = createDate.toLocaleString('en-us', {month: 'short'});
    let year = createDate.getFullYear();
    let date = createDate.getDate();

    const [isOpen, setIsOpen] = useState(false);
    const [uId, setUId] = useState("");
    const [usName , setUsName] = useState("");

    const modalRef = useRef()

    const togglePopup = (uid, uname) => {
        setIsOpen(!isOpen)  
        console.log(isOpen, uid, uname)
        setUId(uid)     
        setUsName(uname)
    }

    const CloseModal = e => {
        if(modalRef.current === e.target) {
            setIsOpen(false)
        }
    }

    const keyPress = useCallback(e => {
        if(e.key === 'Escape' && isOpen) {
            setIsOpen(false)
        }
    },[setIsOpen, isOpen])

    useEffect(() => {
            document.addEventListener('keydown', keyPress);
            return () => document.removeEventListener('keydown', keyPress);
        }, [keyPress]
    )



    const handleKick = async (e) => {
        // console.log(uId)
        const userid = uId
        try {
            const response = await fetch('/api/team/kickApi',{
                method: 'POST',
                headers: {
                    'Content-Type' : 'application/JSON'
                },
                body: JSON.stringify({
                    user_id: userid,
                    team_id: props.team._id,
                }),
            })

            const json = await response.json();
            console.log(json.message);
         

            if (response.status == 200) {
                alert('Kicked'+'successfully sent')
                // router.replace("/team/"+props.team_id)
                Router.reload(window.location.pathname);
                console.log(window.location.pathname)
                
            }

            else {
                alert(json.message)
            }

        } catch (error){
            console.log(
                error
            );
        }
    }

        return(
            <>
                {/* Profile and Team content on the left section */}
                <div className="flex flex-col fixed w-2/12 mt-32 bg-scroll">
                    {props.user._id == props.team.team_cap && (
                        <SearchPlayers  user={props.user} team={props.team} users={props.users} invitations={props.invitations}/>
                    )}
                </div>

                {/* Right Section */}
                <div className="flex flex-col right-10 gap-2 fixed w-2/12 mt-32">
                    <div className="flex-col bg-white py-5 rounded-2xl right-10 font-bold p-4">
                        {/* to be created page */}
                        Achievements
                    </div>
                </div>

                {/* centre main area */}
                <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5 mb-10">
                            <TeamInfo user = {props.user} team = {props.team} />   
                </div>
            </>
    )  
}


export default TeamProfile;
