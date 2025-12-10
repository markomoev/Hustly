import MyHustlesCard from "./MyHusltesCard"

import { useEffect, useState } from "react"
import useLoadHustle from "../../../hooks/my-hustles/useLoadHustle"

export default function MyHustlesCardsContainer(){
    const {loadHustle} = useLoadHustle()

    const [hustleData, setHustleData] = useState<any>([])

    // load the data from the table
    useEffect(() => {
        const fetchData = async () => {
            const data = await loadHustle()

            if(data){
                console.log(data)
                setHustleData(data)
            }    
        }
        fetchData()

        const interval = setInterval(() => {
            fetchData()
        }, 2000)
        return () => clearInterval(interval)
    },[])

    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hustleData.map((hustle : any) => (
                <MyHustlesCard 
                    key = {hustle.id} 
                    hustle = {hustle}/>
            ))}
        </div>
    )
}