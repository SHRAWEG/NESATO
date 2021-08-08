import { faCalendarCheck, faStar, faTrophy, faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import React from 'react'
import Link from 'next/link';
import Image from "next/image";

import csgoLogo from '../../../../public/img/gamelogos/csgo.png'
import dota2Logo from '../../../../public/img/gamelogos/dota2.png'


function UserDetails(props) {

    let createDate = new Date(props.user.create_date)

    let month = createDate.toLocaleString('en-us', {month: 'short'});
    let year = createDate.getFullYear();
    let date = createDate.getDate();

    let captainCount = 0;

    if(props.user.teams) {
        props.user.teams.map((team) => {
            if (team.isCaptain == true) {
                captainCount = captainCount + 1
            }
        })
    }
    return (
        <>
            <div className="flex w-full justify-between gap-8 h-auto">
                <div className="flex flex-col bg-gray-100 border-2 rounded-3xl mt-10  gap-3 p-4 px-8 w-4/6">
                    <legend className="mt-1 font-bold text-3xl" htmlFor="bio">
                        About
                    </legend>

                    {props.user.bio && (
                        <p className="text-lg font-paragraph">
                        {props.user.bio.split('\n').map(function(item, key) {
                            return (
                                <span key={key}>
                                {item}
                                <br/>
                                </span>
                            )
                        })}
                        </p>
                    )}
                </div>

                <div className="flex flex-col bg-gray-100 border-2 rounded-3xl mt-10  gap-3 p-4 px-6 w-2/6">
                    <legend className="mt-1 font-bold text-3xl" htmlFor="bio">
                        Info
                    </legend>

                    <div className="flex">
                        <FontAwesomeIcon className="text-xl" icon={faCalendarCheck} />
                        <span className="font-paragraph ml-2">
                            Member since {date} {month} , {year}
                        </span>
                    </div>

                    <div className="flex">
                        <FontAwesomeIcon className="text-xl" icon={faStar} />
                        <span className="font-paragraph ml-2">
                            Captain of {captainCount} Team(s)
                        </span>
                    </div>

                    <div className="flex">
                        <FontAwesomeIcon className="text-xl" icon={faTrophy} />
                        <span className="font-paragraph ml-2">
                            0 Tournaments Played
                        </span>
                    </div>
                </div>
            </div>
            
            <div className="flex justify-between gap-8">
                <div className="flex flex-col bg-gray-100 border-2 rounded-3xl mt-10  gap-3 p-4 px-8 w-full">
                    <div className="flex justify-between"> 
                        <legend className="mt-1 font-bold text-3xl" htmlFor="bio">
                            Games of Interest
                        </legend>

                        <Link href="/userprofile/addgames">
                            <a>
                                <FontAwesomeIcon className="text-3xl z-10 hover:text-gray-600 transition duration-150 ease-in-out transform hover:scale-110" icon={faPlusCircle} />
                            </a>
                        </Link>
                        
                    </div>
                    
                    <div className="flex ">

                        <div className="w-32 mr-10">
                            <Image src={csgoLogo} />
                        </div>

                        <div className="w-32">
                            <Image src={dota2Logo} />
                        </div>   
                    </div>
                        
                </div>
            </div>
        </>
        
    )
}

export default UserDetails
