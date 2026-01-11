import Sidebar from "../../components/global/sidebar/Sidebar"
import Topbar from "../../components/global/topbar/Topbar"

//charts
import { ChartAreaInteractive as AreaChart } from "../../components/progress/AreaChart"


export default function ProgressPage(){
  return(
    <div className="flex flex-row overflow-x-hidden">
      <Sidebar />

      <div className="flex flex-col h-screen w-14/15"> 
        <Topbar />

        <div className="flex items-center justify-center md:mt-2 w-full px-8">
            <div className="w-full max-w-7xl">
                <AreaChart/>
            </div>
        </div>
      </div>
    </div>
)
}