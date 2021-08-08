import { faSteam } from '@fortawesome/free-brands-svg-icons'
import { faClipboard, faPaperclip } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import React from 'react'

function GamerIds(props) {

    return (
        <>
            <div className="flex-col mt-10 bg-white py-5 rounded-2xl w-full h-full shadow-xl">
                <div className="flex flex-col mx-8 gap-y-5 items-center">
                    <h1 className="text-3xl font-bold ">Gamer Ids</h1>
                        {props.user.gamer_id && (
                            <div className="flex-col">
                                {
                                    props.user.gamer_id.map((gamerId, key) => {
                                        if(gamerId.id_name == 'steam_url') {
                                            return (
                                                <div className="flex" key={key}>
                                                    <FontAwesomeIcon icon={faSteam} className="text-3xl text-gray-800 hover:text-gray-500" />
                                                    
                                                    <div className="text-lg font-paragraph ml-4 hover:text-gray-500 hover:underline">
                                                        Steam Profile
                                                    </div>

                                                    <div className='has-tooltip'>
                                                        <span id={gamerId.id_name} className='tooltip rounded shadow-lg p-1 bg-black text-white -mt-9 ml-5'>Copy</span>

                                                        <CopyToClipboard text={gamerId.id} >
                                                            <FontAwesomeIcon 
                                                                icon = {faClipboard} 
                                                                className="text-2xl text-green-800 ml-10 hover:text-green-400"   
                                                                onClick={() => {
                                                                    document.getElementById(gamerId.id_name).innerHTML = "Copied"

                                                                    const interval = setInterval(() => {
                                                                        document.getElementById(gamerId.id_name).innerHTML = "Copy"
                                                                    }, 3000);
                                                                    return () => clearInterval(interval);
                                                                }}
                                                            />
                                                        </CopyToClipboard>
                                                           
                                                       
                                                    </div>
                                                </div>
                                            )
                                        }

                                        return (
                                            <div className="mt-5" key={key}>
                                                <div className="flex flex-col gap-2">
                                                    <div className="text-xl font-semibold">
                                                        {gamerId.label}
                                                    </div>  
                                                    

                                                            <div className="flex justify-between bg-gray-200 hover:bg-gray-300 rounded-xl px-4 py-0.5">  
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
                                                                            document.getElementById(gamerId.id_name).innerHTML = "Copied"
        
                                                                            const interval = setInterval(() => {
                                                                                document.getElementById(gamerId.id_name).innerHTML = "Copy"
                                                                            }, 3000);
                                                                            return () => clearInterval(interval);
                                                                        }}
                                                                    />
                                                                </CopyToClipboard>
                                                            </div>
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
