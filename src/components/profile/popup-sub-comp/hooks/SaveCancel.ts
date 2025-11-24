import {supabase} from '../../../../client'

type dbProps = {
    username: string,
    firstName: string,
    lastName: string,
    bio: string
}

export default async function SaveCancel({username, firstName, lastName, bio} : dbProps){
try{
    const { data: { user }, error: errorGettingUser } = await supabase.auth.getUser()
    const user_id : any = user?.id;

    if(errorGettingUser){
        console.error("Error in getting user id!" + " "  + errorGettingUser.message);
        return;
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
        console.error("Error in updating the database table!" + updateError.message);
        return;
    }

}
catch(error){
    console.error("An unexpected error occurred! " + error);
    return;
}
}