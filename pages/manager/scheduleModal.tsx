import React, { ReactElement } from 'react';

interface props {
  open: boolean;
  close: () => void; // 함수 타입 정의할 때
}
const ScheduleModal = (props: props): ReactElement => {

  const { open, close } = props;


  return (
    <div>
      <div className={open ? 'bg' : ''} />
      <div className={open ? 'modal active' : 'modal'}>
        {open ? (
          <div className="area">
            <button className="close" onClick={close}> x </button>
            <p>모달 타이틀</p>
            <p>모달 내용</p>
          </div>
        ) : null}
      </div>
    </div>
  )
}
export default ScheduleModal;