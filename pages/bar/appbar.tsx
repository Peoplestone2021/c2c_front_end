import Link from "next/link";
import router from "next/router";
import { useRef } from "react";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
} from "react-bootstrap";
import { store } from "../../provider";
import { Provider } from "react-redux";
import { RootState } from "../../provider";

// 임시 앱바

const Appbar = () => {
  // const userNameRef: string = useRef<HTMLFormElement>(null);

  // const isLogonCompleted=useSelector(
  //   (state:RootState)=>state.photo.isLogonCompleted
  // );
  // console.log(userNameRef);

  // const handleAddClick = () => {
  //   const user: RootState={
  //     user: userNameRef.current?.value,
  //   }
  // };

  return (
    <div className="mx-auto">
      <header className="header">
        <Provider store={store}>
          <Container>
            <Row className="align-items-center">
              <Col xs={3}>
                <div className="fs-1 fw-bold text-center mt-4">
                  환<span className="fs-6">전</span>장
                  <span className="fs-6">터</span>
                </div>
              </Col>
              <Col xs={5}></Col>
              <Col>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Input Name"
                  className="mt-4 ml-2 d-flex"
                >
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    // ref={userNameRef}
                  />
                </FloatingLabel>
              </Col>
              <Col>
                <Button
                  type="submit"
                  variant="light"
                  size="lg"
                  className="mt-4 mx-auto"
                >
                  입력
                </Button>
              </Col>
            </Row>
          </Container>
        </Provider>
      </header>
    </div>
  );
};
export default Appbar;
