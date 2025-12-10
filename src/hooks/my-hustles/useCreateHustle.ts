import {supabase} from "../../client"

// user id import
import { useUserId } from "../global/UserId"

export default async function useCreateHuslte(inputs: any) {
    try{
        const userResponse: any = await useUserId();
        const userId: any = userResponse.data[0];

        // in case anything is wrong with the user
            // TODO: get rid of the console error and make and error message
        if(!userId){
            console.error('Problem with getting user id!')
            return;
        }


        const {data: insertHustle, error: errorInsertingHustle} = await supabase
        .from('hustles')
        .insert({
            user_id: userId,
            title: inputs.title,
            description: inputs.description,
            status: inputs.status,
            category: inputs.category,
            tags: inputs.tags,
            visibility: inputs.visibility,
            initial_progress: inputs.initialProgress === '' ? 0 : parseInt(inputs.initialProgress),
        })

        // in case of error while inserting data in the hsutles table
        if(errorInsertingHustle){
            console.error(errorInsertingHustle.message);
            return;
        }

        return insertHustle;

    }
    catch(error){
        console.error(error)
    }
}