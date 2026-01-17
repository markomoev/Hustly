import {supabase} from "../../client"

export default async function useCreateMilestone(hustle_id: number, input: string){
    try{

        // inserting in the db table
        const {data: insertMilestone, error: errorInsertingMilestone} = await supabase
        .from('milestones')
        .insert({
            hustle_id: hustle_id,
            title: input,
            status: "done"
        })

        if (errorInsertingMilestone)
            console.error(errorInsertingMilestone.message)

        console.log(insertMilestone)
    }
    catch(error){
        console.error(error)
    }
}