import {supabase} from "../../client"

export const useUserId = async () => {

    try{
        const { data: { user }, error: errorGettingUser } = await supabase.auth.getUser()
        const user_id : any = user?.id;
        // getting the email too, cause we get them both from auth
        const user_email : any = user?.email;

        if(errorGettingUser)
            return {error: errorGettingUser.message, data: null}

        return {error: null, data: [user_id, user_email]}
    }

    catch(error){
        return {erorr: "An unexpected error occurred", data: null}
    }
}