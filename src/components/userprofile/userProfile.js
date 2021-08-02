import React from 'react'

function UserProfile(props) {
    return (
        <>
            {props.user && (
                <div>
                    {props.user.firstname} 
                    {props.user.lastname}
                </div>
            )}
        </>
    )
}

export default UserProfile