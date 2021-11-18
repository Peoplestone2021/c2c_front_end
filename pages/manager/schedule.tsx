import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";

import Modal from "./scheduleModal";

import React, {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import common from "@fullcalendar/common";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";

import axios from "axios";
import { ReactElement } from "react-transition-group/node_modules/@types/react";

interface EventItemState {
  id?: number;
  title: string | undefined;
  start?: string | undefined;
  end?: string | undefined;
  memo?: string | undefined;
}

// interface ModalProp {
//   item: EventItemState;
//   onClose: () => void;
//   onSave: (editItem: EventItemState) => void;
// }

// const Schedule = () => {
const Schedule = (): ReactElement => {
  const [showReq, setShowReq] = useState<boolean>(false);
  const [events, setEvents] = useState([
    { groupId: "999", title: "initial event", start: new Date() },
  ]);

  function openReq() {
    setShowReq(!showReq);
  }

  function closeReq() {
    setShowReq(!showReq);
  }

  // // const crHave = useRef() as MutableRefObject<HTMLSelectElement>

  // const inputTitle = useRef() as MutableRefObject<HTMLInputElement>;

  // const addevent = () => {
  //   const event: EventItemState = {
  //     title: inputTitle.current.value,

  //   }
  // }
  // document.addEventListener('DOMContentLoaded', function () {

  // })
  let calendarEl = document.getElementById("calendar");
  let title;
  if (calendarEl) {
    let calendar = new Calendar(calendarEl, {
      plugins: [interactionPlugin],
      select: function(arg) {
        // 캘린더에서 드래그로 이벤트를 생성할 수 있다.
        var title = prompt("Event Title:");
        if (title) {
          calendar.addEvent({
            title: title,
            start: arg.start,
            end: arg.end,
            allDay: arg.allDay,
          });
        }
        calendar.unselect();
      },
      eventClick: function(e) {
        alert(e.event.title);
      },
      dateClick: function(info) {
        alert("Clicked on: " + info.dateStr);
        alert("Coordinates: " + info.jsEvent.pageX + "," + info.jsEvent.pageY);
        alert("Current view: " + info.view.type);
        // change the day's background color just for fun
        info.dayEl.style.backgroundColor = "red";
      },
    });
  }

  return (
    <div>
      <Appbar />
      <Sidebar />
      <div
        style={{ marginLeft: "20vw", marginRight: "10vw" }}
        className="card text-center"
      >
        <FullCalendar
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView="dayGridMonth"
          customButtons={{
            myButton: {
              text: "이벤트추가",

              click: function() {
                alert("이벤트를 추가하시겠습니까?");
              },
            },
            // today: {
            //   text: "오늘",
            // },
            // dayGridMonth: {
            //   text: "월",
            // },
            // timeGridWeek: {
            //   text: "주",
            // },
            // timeGridDay: {
            //   text: "일",
            // },
          }}
          headerToolbar={{
            start: "dayGridMonth timeGridWeek timeGridDay",
            center: "title",
            end: "myButton today prev,next",
          }}
          // initialEvents={[{ title: "initial event", start: new Date() }]}

          drop={function(info) {}}
          events={events}
          dateClick={function(e) {
            console.log(e.dateStr);
          }}
          eventClick={function(e) {
            alert(e.event.title);
          }}
          nowIndicator={true}
          navLinks={true}
          locale={"ko"}
          editable={true}
          droppable={true}
          selectable={true}
          dayMaxEvents={true}
          eventAdd={function(obj) {
            console.log(obj);
          }}
          eventChange={function(obj) {
            console.log(obj);
          }}
          eventRemove={function(obj) {
            console.log(obj);
          }}
          select={function(arg) {
            title = prompt("이벤트 이름을 작성하세요:");
            if (title) {
              setEvents([
                {
                  groupId: `${title}-${arg.startStr}-${arg.endStr}`,
                  title: title ? title : "",
                  start: arg.start,
                },
                ...events,
              ]);
            }
            // if (title) {
            //   // <Modal open={showReq} close={closeReq} />

            // }
          }}
        />
      </div>
      <button className="request_btn" onClick={openReq}>
        모달창 보기
      </button>
      <Modal open={showReq} close={closeReq} />
    </div>
  );
};

export default Schedule;
