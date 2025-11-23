import {supabase} from '../../../../client'

export default async function DataLoader() {
    
try{
    const { data: { user }, error: errorGettingUser } = await supabase.auth.getUser()
    const user_id : any = user?.id;
    const user_email : any = user?.email;

    if(errorGettingUser){
        console.error("Error in retrieving user! " + errorGettingUser.message);
        return
    }

    const {data: fetchingUserDetails, error: fetchingError} = await supabase
            .from('users')
            .select('*')
            .eq('id', user_id)

    if(fetchingError){
        console.error('Error in fetching data!' + fetchingError.message)
        return;
    }
    const result = [fetchingUserDetails, user_email]
    return result;

}
catch(error){
    console.error("An unexpected error occured! " + error)
    return;
}

}