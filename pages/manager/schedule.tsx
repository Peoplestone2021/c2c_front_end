
import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";

import React, { useState } from 'react';

import FullCalendar, { DatesSetArg, EventInput } from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import "@fullcalendar/common/main.css";
import "@fullcalendar/daygrid/main.css";




const Schedule = () => {
  const [events, setEvents] = useState<EventInput[]>([
    { title: "initial event1", start: new Date() },
  ]);


  return (
    <div>
      <Appbar />
      <Sidebar />
      {/* <FullCalendar
        plugins={[dayGridPlugin]}
        events={events}
        datesSet={(arg: DatesSetArg) => {
          setEvents([...events, { title: "additional", start: arg.start }]);
        }}
      /> */}

    </div>
  );
};

export default Schedule;


