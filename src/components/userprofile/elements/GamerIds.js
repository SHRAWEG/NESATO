import { faSteam } from '@fortawesome/free-brands-svg-icons'
import { faClipboard, faEdit } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import React from 'react'
import Image from 'next/dist/client/image'
import Link from 'next/dist/client/link'

function GamerIds(props) {


    return (
        <>
            <div className="flex-col mt-10 bg-white py-5 rounded-2xl w-full h-full shadow-xl">
                <div className="flex flex-col mx-8">
                    <div className="flex justify-between items-center">
                        <h1 className="text-3xl font-bold ">Gamer Ids</h1>
                        <Link href="/userprofile/games/updategames">
                            <FontAwesomeIcon icon={faEdit} className="text-3xl text-gray-800 hover:text-gray-500" /> 
                        </Link>
                       
                    </div>
                     
                        {props.user.games && (
                            <div className="flex-col">
                                {
                                    props.user.games.map((gamerId, key) => {
                                        if(gamerId.id_name == 'steam_url') {
                                            return (
                                                <div className="mt-8" key={key}>
                                                    <div className="flex flex-col gap-2">
                                                        <div className="text-xl flex items-center">
                                                        <div className="w-5 mr-4">
                                                                <Image src={'/img/gameLogos/' + gamerId.name + '.png'} width="100" height="100" layout="responsive" />
                                                            </div> 
                                                            <div className="font-semibold">
                                                                {gamerId.id_label}
                                                            </div>
                                                            
                                                        </div> 
                                                        <div className="flex justify-between bg-gray-200 hover:bg-gray-300 rounded-xl px-4 py-0.5">  
                                                        {    gamerId.id ? (  
                                                                    <> 
                                                                        <div className="text-lg font-paragraph flex items-center"> 
                                                                
                                                                        <Link href={gamerId.id}>
                                                                            <FontAwesomeIcon icon={faSteam} className="text-2xl mr-2 text-gray-800 hover:text-gray-500" />
                                                                        </Link>     
                                                                        <div className="hover:text-yellow-600">
                                                                            <Link href={gamerId.id}>
                                                                                Profile
                                                                            </Link> 
                                                                        </div> 
                                                                                                            
                                                                    </div>
                                                                    <div className='has-tooltip'>
                                                                        <span id={gamerId.id_name} className='tooltip rounded shadow-lg p-1 bg-black text-white -mt-9 ml-5'>Copy</span>
                                                                        <CopyToClipboard text={gamerId.id} >
                                                                            <FontAwesomeIcon 
                                                                                icon = {faClipboard} 
                                                                                className="text-2xl text-green-800 ml-10 hover:text-green-400"   
                                                                                onClick={() => {
                                                                                    if(document.getElementById(gamerId.id_name)) {
                                                                                        document.getElementById(gamerId.id_name).innerHTML = "Copied"
            
                                                                                        const interval = setInterval(() => {
                                                                                            document.getElementById(gamerId.id_name).innerHTML = "Copy"
                                                                                        }, 3000);
                                                                                        return () => clearInterval(interval);
                                                                                    }
                                                                                }}
                                                                            />
                                                                        </CopyToClipboard>
                                                                    </div>
                                                                    </>
                                                            ) : (                                          
                                                                    "N/A"
                                                            )
                                                        }
                                                        </div>
                                                    </div>

                                                </div>
                                            )
                                        }

                                        return (
                                            <div className="mt-8" key={key}>
                                                <div className="flex flex-col gap-2">
                                                        <div className="text-xl flex items-center">
                                                            <div className="w-5 mr-4">
                                                            <Image src={'/img/gameLogos/' + gamerId.name.toLowerCase() + '.png'} width="100" height="100" layout="responsive" />
                                                            </div> 
                                                            <div className="font-semibold">
                                                                {gamerId.id_label}
                                                            </div>
                                                            
                                                        </div>  
                                                    <div className="flex justify-between bg-gray-200 hover:bg-gray-300 rounded-xl px-4 py-0.5"> 
                                                        
                                                            {    gamerId.id ? (  
                                                                    <> 
                                                                        <div className="text-lg font-paragraph">                                         
                                                                            {gamerId.id}
                                                                        </div>
                                                                        <div className='has-tooltip'>
                                                                            <span id={gamerId.id_name} className='tooltip rounded shadow-lg p-1 bg-black text-white -mt-9 ml-5'>Copy</span>
                                                                            <CopyToClipboard text={gamerId.id} >
                                                                                <FontAwesomeIcon 
                                                                                    icon = {faClipboard} 
                                                                                    className="text-2xl text-green-800 ml-10 hover:text-green-400"   
                                                                                    onClick={() => {
                                                                                        if(document.getElementById(gamerId.id_name)) {
                                                                                            document.getElementById(gamerId.id_name).innerHTML = "Copied"
                
                                                                                            const interval = setInterval(() => {
                                                                                                document.getElementById(gamerId.id_name).innerHTML = "Copy"
                                                                                            }, 3000);
                                                                                            return () => clearInterval(interval);
                                                                                        }
                                                                                        
                                                                                    }}
                                                                                />
                                                                            </CopyToClipboard>
                                                                        </div>
                                                                    </>
                                                                ) : (                                          
                                                                        "#Nan"
                                                                )
                                                            }
                                                        
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        )}
                </div>
            </div>
        </>
    )
}

export default GamerIds
