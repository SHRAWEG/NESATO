import React from 'react';
import GameForm from './elements/GameForm';


function AddGames(props) {

    return (
        <>
            <div className="container mx-auto flex flex-col items-center whitespace-nowrap gap-x-5">
                <div className="bg-white h-auto rounded-2xl whitespace-normal px-10 py-10 w-8/12 items-center mt-32 mb-6" id="midMain">
                    {props.self && (
                        <>
                            <GameForm self={props.self} />
                        </>
                    )}
                    
                </div>
            </div>
        </>

        
    )
}

export default AddGames;