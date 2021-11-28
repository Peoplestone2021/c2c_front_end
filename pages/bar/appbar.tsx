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
              <Col md={{ span: 2, offset: 0 }}>
                <Link href="/">
                  <a>
                    <div className="fs-1 fw-bold text-center mt-4 bi bi-currency-exchange">
                      {/* bi bi-currency-exchange */}환
                      <span className="fs-6">전</span>장
                      <span className="fs-6">터</span>
                    </div>
                  </a>
                </Link>
              </Col>
              <Col md={{ span: 6, offset: 1 }}></Col>
              <Col md={{ span: 2, offset: 0 }}>
                <FloatingLabel
                  controlId="floatingInput"
                  label="Input Name"
                  className="mt-4 ml-2"
                >
                  <Form.Control
                    type="text"
                    className=" justify-content-end"
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
