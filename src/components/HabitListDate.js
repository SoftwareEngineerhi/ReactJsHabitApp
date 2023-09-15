import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStatus, toggleImportance } from "../reducer/HabitReducer";
// Habits past 7 day show using component
function HabitDay() {
  const dispatch = useDispatch();
  const habits = useSelector((state) => state.habits);

  // Define state to store habits
  const [currentDate, setCurrentDate] = useState(new Date());
  // Define state to store new habit input

  useEffect(() => {
    // Update the current date every second
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  // Function to toggle habit status for a specific day
  //  ============================
      // Done ,NotDone and None
  // ==============================
  const toggleStatuses = (habitIndex, dayIndex) => {
    const status = habits[habitIndex].statuses[dayIndex];
    const newStatus = status === 'none' ? 'done' : status === 'done' ? 'notdone' : 'none';

    // Dispatch the toggleStatus action
    dispatch(toggleStatus({ habitIndex, dayIndex, status: newStatus }));
  };

  //  function to get value of past 7 day
  const getLast7Days = () => {
    const last7Days = [];
    const last7week = [];
    let month = '';
    let year = '';
    for (let i = 6; i >= 0; i--) {
      const date = new Date(currentDate);
      date.setDate(currentDate.getDate()- i);
      last7Days.push(date.getDate());
      last7week.push(date.toLocaleDateString('en-US', { weekday: 'short' }));
      month = date.toLocaleDateString('en-US', { month: 'short' });
      year = date.getFullYear();
    }
    return { last7Days, last7week, month, year };
  };
  // star mark for important habit
  const toggleImportants = (habitIndex) => {
    const importance = !habits[habitIndex].importance;

    // Dispatch the toggleImportance action

    dispatch(toggleImportance({ habitIndex, importance }));
  };
  const { last7Days, last7week, month, year } = getLast7Days();

  // return the component data show past 7 day habits status
  return (
    <>
      <h1>Calender Past 7 Day</h1>
      {/* show month and year */}
      <h1>{month},{year}</h1>
      {/* ===============================
        Show past 7 day week name
      =================================== */}
      <div className="habit-row">
        {last7week.map((w, im) => (<h1 className="habit-week">{w}</h1>
        ))}
      </div>

      {habits.map((habit, habitIndex) => (
        <div key={habitIndex}>

          <div className="habit-item">
            <h2 className="habit-name">{habit.name}</h2>
            <p className="habit-times">{habit.time}</p>
            <img className='star' onClick={() => toggleImportants(habitIndex)} src={habit.importance ?
              "https://cdn-icons-png.flaticon.com/128/1828/1828884.png" : "https://cdn-icons-png.flaticon.com/128/1828/1828970.png"} />
          </div>
          <div className="habit-row">
            {habit.statuses.map((status, dayIndex) => (

              <div
                key={dayIndex}
                className="habit-day"
                onClick={() => toggleStatuses(habitIndex, dayIndex)}
              >
                {/* =================================
                Last 7 day show
                ===================================== */}
                {last7Days[dayIndex]}
                {/* =============================================
                Status Done,NotDone,none show image correct,wrong 
                ================================================= */}
                <div className={`image-div ${status}`}></div>

              </div>

            ))
            }

          </div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default HabitDay;
