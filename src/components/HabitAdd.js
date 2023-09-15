import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addHabit,deletehabit, toggleImportance } from "../reducer/HabitReducer";

export default function AddnewHabbit() {
  // Define dispatch
  const dispatch = useDispatch();
  // use selector for access state value from store
  const habits = useSelector((state) => state.habits);

  const [newHabitTime, setNewHabitTime] = useState('');
  const [habitImportance, setHabitImportance] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [add, setAdd] = useState(false);
  // Define state to store new habit input
  const [newHabit, setNewHabit] = useState('');
  useEffect(() => {
    // Update the current date every second
    const timer = setInterval(() => {
      setCurrentDate(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  // Function to add a new habit
  const addHabits = () => {
    if (newHabit.trim() === '') return; // Don't add empty habits
    setAdd(false);
    const newHabitObj = {
      name: newHabit,
      importance: habitImportance, // Add the importance
      time: newHabitTime, // Add the time input
      statuses: new Array(7).fill('none'), // Initialize statuses for 7 days
    };

    // Dispatch the addHabit action
    dispatch(addHabit(newHabitObj));

    setNewHabit('');
    setNewHabitTime('');
    setHabitImportance(false);
  };

  // delete habit handle
  function handledelete(index){
    dispatch(deletehabit(index));
  }

  // Function to toggle habit status for a specific day


  const toggleImportant = (habitIndex) => {
    const importance = !habits[habitIndex].importance;
    // Dispatch the toggleImportance action
    dispatch(toggleImportance({ habitIndex, importance }));
  };
  //  time option
  const timeOptions = [
    '12:00 AM', '1:00 AM', '2:00 AM', '3:00 AM', '4:00 AM', '5:00 AM', '6:00 AM',
    '7:00 AM', '8:00 AM', '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM',
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM', '6:00 PM', '7:00 PM', '8:00 PM',
    '9:00 PM', '10:00 PM', '11:00 PM'
  ];


  return (
    <div className='habit'>
      {/* Form for add habits */}
      {add && (<div className='addhabitdiv'>
        {/* Habit form input tag */}
        <label htmlFor="inputField">Habit Name:</label>
        <input className="inputname" id="inputField"
          type="text"

          placeholder="write new habit here"
          value={newHabit}
          onChange={(e) => setNewHabit(e.target.value)}
          autoFocus
        />
        <br />
        <label htmlFor="selecttype">Habit Time:</label>
        <select className="selectoption" id="selecttype"
          value={newHabitTime}
          onChange={(e) => setNewHabitTime(e.target.value)}
        >
          <option value="">Select Time</option>
          {timeOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <br />
        <button className="addbutton" onClick={addHabits}>Add Habit</button>

      </div>)}
      {/* Add Habit button */}
      {add || <button onClick={() => setAdd(true)} className="add">+ Add Habit</button>}

      {/* ==========================================
            Show Habit List
       ============================================== */}
      <div className="habit-list-container">
        <ul className="list">
          {habits.map((habit, index) => (
            <div className='habitslist'>
              <li className={index % 2 == 0 ? "green" : "blue"}>
                <div key={index} className="habit-item">
                  {/* Habit name and time */}
                  <h1 className="habit-namelist">{habit.name}</h1>
                  <p className="habit-time">{habit.time}</p>
                  {/* Habit Important star mark */}
                  <img src={habit.importance
                        ? "https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                        : "https://cdn-icons-png.flaticon.com/128/1828/1828970.png"
                    }
                    alt={habit.importance ? "Important" : "Not Important"}
                    onClick={() => toggleImportant(index)}
                    className="habit-image"
                  />
                </div>
                <div className="delatediv"><h4> &nbsp; Day &nbsp; &nbsp;</h4> <h4>best</h4> <h4>Daily</h4> <img className='delete' onClick={()=>handledelete(index)} src="https://cdn-icons-png.flaticon.com/128/6861/6861362.png"/></div>
              </li>
              <br />
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}