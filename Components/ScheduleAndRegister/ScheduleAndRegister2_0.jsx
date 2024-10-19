import "./ScheduleAndRegister2_0.css";
// import ScheduleImage from "../../src/assets/Schedule2-0.jpg"; // Correct path for your schedule image
import ScheduleImage from "../../src/assets/Schedule2-0.png"
import Registration2 from "../Registration/Registration2";
const NewsSchedule2 = () => {
 
  return (
   <div id="NewsSchedule">
    <div id="schedule" className="NewsSchedule-container">
      <div className="NewsSchedule-header">
        <h1>Schedule</h1>
      </div>
      <div className="NewsSchedule-body">
        <img src={ScheduleImage} alt="Workshop Schedule" />
      </div>
    </div>
    <div id="news">
     <Registration2 />
    </div>
    </div>
  );
};

export default NewsSchedule2;
