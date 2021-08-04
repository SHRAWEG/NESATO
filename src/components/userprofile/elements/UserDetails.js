import React from 'react'

function UserDetails(props) {

    let createDate = new Date(props.user.create_date)

    let month = createDate.toLocaleString('en-us', {month: 'short'});
    let year = createDate.getFullYear();
    let date = createDate.getDate();

    return (
        <>
            <div className="flex w-full justify-between gap-8 h-auto">
                <div className="flex flex-col bg-gray-200 rounded-3xl mt-10  gap-3 p-4 px-8 w-4/6">
                    <legend className="mt-1 font-bold text-3xl" htmlFor="bio">
                        About
                    </legend>

                    {props.user.bio && (
                        <p className="text-xl">
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

                <div className="flex flex-col bg-gray-200 rounded-3xl mt-10  gap-3 p-4 px-8 w-2/6 h-44">
                    <legend className="mt-1 font-bold text-3xl" htmlFor="bio">
                        Info
                    </legend>
                    <span>
                        Members since {date} {month} , {year}
                    </span>
                </div>
            </div>
            
        </>
        
    )
}

export default UserDetails
