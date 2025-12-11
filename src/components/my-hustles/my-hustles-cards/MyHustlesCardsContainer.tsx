import MyHustlesCard from "./MyHusltesCard"
import Error from "../../alerts-loaders/Error"

import { Activity, useEffect, useState } from "react"
import useLoadHustle from "../../../hooks/my-hustles/useLoadHustle"

export default function MyHustlesCardsContainer(){
    // data from the hook
    const {data} = useLoadHustle()
    
    const [hustleData, setHustleData] = useState<any>([])
    const [isError, setIsError] = useState<boolean>(false)
    const [errorMessage, setErrorMessage] = useState<string>('')

    useEffect(() => {
        // fetch the data
        const fetchData = async () => {
            const result : any = await data()

            if(result && result.error){
                setIsError(true)
                setErrorMessage(result.error)
                return;
            }
            setHustleData(result)
        }
        fetchData()

        // update constantly, so we see the latest cards
        const interval = setInterval(() => {
            fetchData()
        }, 2000)
        return () => clearInterval(interval)
    },[])

    return( 
        <>   
            <Activity mode = {isError ? 'visible' : 'hidden'}>
                <Error message = {errorMessage}/>
            </Activity>   

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">            
                {hustleData.map((hustle : any) => (
                    <MyHustlesCard 
                        key = {hustle.id} 
                        hustle = {hustle}/>
                ))}
            </div>
        </>
    )
}