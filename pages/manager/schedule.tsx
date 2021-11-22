import Sidebar from "./about/sidebar";
import Appbar from "../bar/appbar";
import api from "./scheduleApi";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
// import { AppDispatch, RootState } from "../../store";
// import { requestFetchContacts } from "./contactSaga";

import React, {
  MutableRefObject,
  useEffect,
  useRef,
  useState,
  useCallback,
} from "react";

import common, { identity } from "@fullcalendar/common";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import { Calendar } from "@fullcalendar/core";
import interactionPlugin from "@fullcalendar/interaction";
import { Modal, Form, Row, Col, Button } from "react-bootstrap";

import axios from "axios";
import { ReactElement } from "react-transition-group/node_modules/@types/react";
import { useRouter } from "next/router";
import produce from "immer";
import { TextCenter } from "react-bootstrap-icons";

interface EventItemState {
  id?: number;
  groupId: number;
  title: string | undefined;
  memo?: string | undefined;
  start?: string | undefined;
  // end?: string | undefined;
}

// interface ModalProp {
//   item: EventItemState;
//   onClose: () => void;
//   onSave: (editItem: EventItemState) => void;
// }

const getTimeString = (unixtime: number) => {
  // 1초: 1000
  // 1분: 60 * 1000
  // 1시간: 60 * 60 * 1000
  // 1일: 24 * 60 * 60 * 1000
  const day = 24 * 60 * 60 * 1000;

  // Locale: timezone, currency 등
  // js에서는 브라우저의 정보를 이용함
  const dateTime = new Date(unixtime);

  // 현재시간보다 24시간 이전이면 날짜를 보여주고
  // 현재시간보다 24시간 미만이면 시간을 보여줌
  return unixtime - new Date().getTime() >= day
    ? dateTime.toLocaleDateString()
    : dateTime.toLocaleTimeString();
};

const Schedule = () => {
  // const Schedule = (): ReactElement => {

  const [event, setEvent] = useState({
    id: 1,
    groupId: 999,
    title: "",
    memo: "",
    start: new Date(),
    // end: new Date(),
  });
  const [showReq, setShowReq] = useState<boolean>(false);
  const [events, setEvents] = useState([
    {
      id: 1,
      groupId: 999,
      title: "",
      memo: "",
      start: new Date(),
      // end: new Date(),
    },
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
  // let title;
  const inputTitle = useRef() as MutableRefObject<HTMLInputElement>;
  const inputMemo = useRef() as MutableRefObject<HTMLInputElement>;

  const eventHandler = () => {};

  const fetchData = async () => {
    // 백엔드에서 데이터 받아옴
    const res = await api.fetch();
    const events2 = res.data.map((item) => ({
      id: item.id,
      groupId: item.groupId,
      title: item.title,
      memo: item.memo,
      start: item.start,
      // end: item.end,
    })) as EventItemState[];
    console.log(res);
    // setLoading(false); // 로딩중 여부 state 업데이트
    console.log(res.data);
    console.log(events2);
    setEvents(res.data); // event state 업데이트
  };
  useEffect(() => {
    fetchData();
  }, []);

  const add = async (e: React.PointerEvent<HTMLInputElement> | null) => {

    try {
      const result = await api.add({
        title: inputTitle
      })
    }
  }
  const del = (id: string, index: number) => {
    setEvents(
      produce((state) => {
        state.splice(index, 1);
        console.log(events[0].id);
        
      })
    );
  };

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
          dateClick={(e) => {
            setEvent({ ...event, start: new Date(e.dateStr) });
          }}
          eventClick={function(e) {
            // alert(e.event.title);
            console.log(e.event.id);
            del(e.event.id);
            setEvent;
          }}
          nowIndicator={true}
          navLinks={true}
          locale={"ko"}
          editable={true}
          droppable={true}
          selectable={true}
          dayMaxEvents={true}
          // weekNumbers={false}

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
            setShowReq(true);

            // title = prompt("이벤트 이름을 작성하세요:");
            // if (title) {
            //   setEvents([
            //     {
            //       groupId: `${title}-${arg.startStr}-${arg.endStr}`,
            //       title: title ? title : "",
            //       start: arg.start,
            //     },
            //     ...events,
            //   ]);
            // }
            // if (title) {
            //   // <Modal open={showReq} close={closeReq} />

            // }
          }}
        />
      </div>
      <Modal
        size="lg"
        centered
        show={showReq}
        onHide={() => {
          closeReq();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>이벤트 추가</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label as={Col} md={2} className="text-left">
                이벤트명
              </Form.Label>
              <Col md={10} className="text-center">
                <Form.Control type="text" placeholder="event" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label as={Col} md={2} className="text-left">
                시작시간
              </Form.Label>
              <Col md={5} className="text-center">
                <Form.Control type="date" placeholder="event" />
              </Col>
              <Col md={5} className="text-center">
                <Form.Control type="time" placeholder="event" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label as={Col} md={2} className="text-left">
                종료시간
              </Form.Label>
              <Col md={5} className="text-center">
                <Form.Control type="date" placeholder="event" />
              </Col>
              <Col md={5} className="text-center">
                <Form.Control type="time" placeholder="event" />
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3" controlId="formBasicEmail">
              <Form.Label as={Col} md={2} className="text-left">
                내용
              </Form.Label>
              <Col md={10} className="text-center">
                <Form.Control as="textarea" rows={5} placeholder="context" />
              </Col>
            </Form.Group>

            <Row className="text-center">
              <Col md={4} />
              <Col md={2}>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    setEvents([event, ...events]);
                    closeReq();
                  }}
                >
                  저장
                </Button>
              </Col>
              <Col md={2}>
                <Button
                  variant="outline-secondary"
                  onClick={() => {
                    closeReq();
                  }}
                >
                  취소
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Schedule;
