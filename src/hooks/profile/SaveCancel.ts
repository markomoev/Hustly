import {supabase} from '../../client'

type dbProps = {
    username: string,
    firstName: string,
    lastName: string,
    bio: string
}

export default async function useSaveCancel({username, firstName, lastName, bio} : dbProps){
try{
    const { data: { user }, error: errorGettingUser } = await supabase.auth.getUser()
    const user_id : any = user?.id;

    if(errorGettingUser){
        return {error: errorGettingUser.message, data: null}
    }

    const { error: updateError } = await supabase
    .from('users')
    .update({ 
        username: username,
        firstName: firstName,
        lastName: lastName,
        bio: bio
     })
    .eq('id', user_id)

    if(updateError){
        return {error: updateError.message, data: null}
    }

}
catch(error){
    console.error("An unexpected error occurred! " + error);
    return {error: error || "An unexpected error occurred", data: null}
}
}