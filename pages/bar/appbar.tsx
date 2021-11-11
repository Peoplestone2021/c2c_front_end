import Link from "next/link";
import router from "next/router";
import {
  Container,
  Form,
  Row,
  Col,
  FloatingLabel,
  Button,
} from "react-bootstrap";

// 임시 앱바

const Appbar = () => {
  return (
    <div className="mx-auto">
      <header className="header">
        <Container>
          <Row>
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
                <Form.Control type="email" placeholder="name@example.com" />
              </FloatingLabel>
            </Col>
            <Col>
              <div className="mt-4">
                <Button variant="light" size="lg" className="mx-auto">
                  입력
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};
export default Appbar;
