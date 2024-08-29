import "./ScheduleAndRegister.css";
import ScheduleImage from "../../src/assets/CyberTEA-Schedule of the Workshop.jpg"; // Correct path for your schedule image

const NewsSchedule = () => {
  return (
    <div id="schedule" className="NewsSchedule-container">
      <div className="NewsSchedule-header">
        <h1>Schedule</h1>
      </div>
      <div className="NewsSchedule-body">
        <img src={ScheduleImage} alt="Workshop Schedule" />
      </div>
    </div>
  );
};

export default NewsSchedule;
