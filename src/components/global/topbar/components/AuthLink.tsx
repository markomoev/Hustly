import { useEffect, useEffectEvent, useState } from "react"
import { NavLink } from "react-router-dom"

import {supabase} from '../../../../client'

// displaying username and avatar
import ProfileDisplay from "./ProfileDisplay"
import ProfileAvatar from "./ProfileAvatar"
// for loading username
import Loader from '../../../alerts-loaders/Loader'


export default function AuthLink(){
// username variables
const [nickname, setNickname] = useState('')
const [isLoggedIn, setIsLoggedIn] = useState(false)

// state for loading gif
const [isLoading, setIsLoading] = useState(false)

// taking the username
const handleLogin = useEffectEvent( async () => {
    const { data: { user } } = await supabase.auth.getUser()
    const user_id : any = user?.id;

    try{
        if(user_id){
            setIsLoading(true)
            const {data:fetchedUsername, error: fetchingUsernameError} = await supabase
                .from('users')
                .select('username')
                .eq('id', user_id)

            if(fetchingUsernameError){
                console.error("Error in fetching username: " + fetchingUsernameError.message);
                return;
            }
            setNickname(fetchedUsername[0]?.username)
            setIsLoggedIn(true)
            setIsLoading(false)
            return nickname;
        }
    }
    catch(error){
        console.error('An unexpected error occurred! ' + error )
    }
});

useEffect(() => {
    handleLogin();
}, []);

return(
<div className="flex flex-row gap-4 w-full justify-end items-center">
    { isLoading ? (
        <div className = '-mt-6.5'>
            <Loader />
        </div>
    ) 
    :
    isLoggedIn ? 
    ( <div className = 'w-full flex flex-row items-center justify-end gap-3'> 
            <ProfileDisplay
                nickname = {nickname}/>
            <ProfileAvatar />
        </div>
        )
    : 
    ( <>
            <NavLink
                to={'/signup'}
                className="px-5 py-2 bg-zinc-900 text-zinc-300 rounded-full text-base font-medium transition-colors duration-200 hover:bg-zinc-700 focus:outline-none focus:ring-2 focus:ring-zinc-500"
            >
                Sign up
            </NavLink>
            <NavLink
                to={'/signin'}
                className="px-5 py-2 bg-zinc-900 border-2 border-amber-700 text-white rounded-full text-base font-medium transition-colors duration-200 hover:bg-zinc-800 hover:text-amber-700 focus:outline-none focus:ring-2 focus:ring-amber-500"
            >
                Sign in
            </NavLink>
        </> )
    }
</div>
)
}