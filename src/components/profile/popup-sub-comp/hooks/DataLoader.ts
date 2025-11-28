import {supabase} from '../../../../client'

export default async function DataLoader() {
    
try{
    const { data: { user }, error: errorGettingUser } = await supabase.auth.getUser()
    const user_id : any = user?.id;
    const user_email : any = user?.email;

    if(errorGettingUser){
        return {error: errorGettingUser.message, data: null}
    }

    const {data: fetchingUserDetails, error: fetchingError} = await supabase
            .from('users')
            .select('*')
            .eq('id', user_id)

    if(fetchingError){
        return{error: fetchingError.message, data: null}
    }
    const result = [fetchingUserDetails, user_email]
    return {error: null, data: result}
}
catch(error){
    return {error: "An unexpected error occured", data: null}
}

}