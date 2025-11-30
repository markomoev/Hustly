import Sidebar from "../components/global/sidebar/Sidebar"
import Topbar from "../components/global/topbar/Topbar"

import MyHustlesContent from "../components/my-hustles/MyHustlesContent"

export default function MyHustles(){
return(
    <>
        <div className = 'flex flex-row min-h-screen w-full'>
                <Sidebar/>

            <div className = "flex-1 w-full max-h-screen flex flex-col">
                <div>
                    <Topbar/>
                </div>

                {/* main content goes here */}
                <div>
                    <MyHustlesContent/>
                </div>
            </div>
        </div>
    </>
)
}