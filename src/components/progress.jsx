import {CaloriesChart}from './charts/CaloriesChart';
import { WaterIntakeChart } from "./charts/WaterIntakeChart";
import { WorkoutChart } from "./charts/WorkoutChart";
import { WorkoutDoughnut } from "./charts/WorkoutDoughnut";
function Progress(){
    return <>
     <div>
      <CaloriesChart />
      <WaterIntakeChart />
      <WorkoutChart />
      <WorkoutDoughnut />
    </div>
    
    </>
}

export default Progress;