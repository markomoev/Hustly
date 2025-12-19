import Sidebar from "../components/global/sidebar/Sidebar"
import Topbar from "../components/global/topbar/Topbar"

import MyHustlesContent from "../components/my-hustles/MyHustlesContent"

export default function MyHustles(){
return(
    <>
        <div className = 'flex flex-row h-screen w-full overflow-hidden'>
                <Sidebar/>

            <div className = "flex-1 w-full h-full flex flex-col overflow-y-auto">
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