import Sidebar from "../../components/global/sidebar/Sidebar"
import Topbar from "../../components/global/topbar/Topbar"

//charts
import { ChartAreaInteractive as AreaChart } from "../../components/progress/AreaChart"
import { ChartPieInteractive as PieChart } from "../../components/progress/PieChart"
import { ChartRadialStacked as RadialChart } from "../../components/progress/RadialChart"

export default function ProgressPage(){
  return(
    <div className="flex flex-row overflow-x-hidden">
      <Sidebar />

      <div className="flex flex-col h-screen w-14/15"> 
        <Topbar />

                <div className="flex flex-col gap-4 items-center justify-center md:mt-2 w-full px-8 pb-4 h-full">
            <div className="w-full max-w-8xl flex-1 min-h-0">
                <AreaChart/>
            </div>

            <div className="w-full flex-1 min-h-0 flex gap-4">
              <div className="w-1/2 h-full">
                <PieChart/>
              </div>
              <div className="w-1/2 h-full">
                <RadialChart />
              </div>
            </div>
        </div>
      </div>
    </div>
)
}