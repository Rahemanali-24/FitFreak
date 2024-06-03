import { FoodTable } from "./charts/FoodTable";
import {CaloriesChart}from './charts/CaloriesChart';
import { WaterIntakeChart } from "./charts/WaterIntakeChart";
import { WorkoutChart } from "./charts/WorkoutChart";
import { WorkoutDoughnut } from "./charts/WorkoutDoughnut";
function Progress(){
    return <>
     <div>
      <FoodTable />
      <CaloriesChart />
      <WaterIntakeChart />
      <WorkoutChart />
      <WorkoutDoughnut />
    </div>
    
    </>
}

export default Progress;