import React from 'react';
import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";
import {useRouter} from "next/router";
import CreateTeam from '../../components/team/createTeam';


const createTeam = () => {

    return (
        <>
        {/* <div className ="container mx-auto flex justify-evenly whitespace-nowrap gap-x-5 mb-10">
            <div className="bg-white  h-auto rounded-3xl whitespace-normal px-10 py-5 mt-32"> */}
                <CreateTeam/>
            {/* </div>
        </div> */}
        </>
    )
}

export default createTeam;