import {supabase} from "../../client"

//user id
import {useUserId} from "../global/UserId"

export default function useLoadHustle(){
    
    const loadHustle = async () => {
        try {
            const userReturn: any = await useUserId();            
            const userId = userReturn.data[0];

            if(!userId){
                console.error("No user ID found");
                return;
            }

            const { data: hustleLoad, error: hustleLoadingError } = await supabase
            .from('hustles')
            .select('*')
            .eq("user_id", userId)

            if(hustleLoadingError){
                console.error(hustleLoadingError.message)
                return
            }

            return hustleLoad
        } catch(error){
            console.error(error)
        }
    }

    return { loadHustle };
}