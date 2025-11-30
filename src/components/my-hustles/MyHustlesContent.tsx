import MyHustlesTopbar from "./MyHustlesTopbar"
import MyHustlesCardsContainer from "./my-hustles-cards/MyHustlesCardsContainer"

export default function MyHustlesContent(){
return(
    <>
        <div className = "w-full h-full py-10 px-8 flex flex-col gap-8">
            <div>
                <MyHustlesTopbar/>
            </div>
            <div className="flex-1">
                <MyHustlesCardsContainer />
            </div>
        </div>
    </>
)
}