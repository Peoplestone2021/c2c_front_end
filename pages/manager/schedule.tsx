
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";

import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';




const Schedule = () => {

  const [value, onChange] = useState(new Date());

  return (
    <div>
      <Appbar />
      <Sidebar />

      <div style={{ marginLeft: "20vw" }}>
        <h2>스케쥴 관리 페이지</h2>
        <Calendar
          onChange={onChange}
          value={value}
        />
      </div>
    </div>
  );
};

export default Schedule;