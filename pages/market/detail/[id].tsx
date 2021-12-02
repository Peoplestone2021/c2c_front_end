import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import style from "../styles/market.module.scss";

import {
  Container,
  Collapse,
  Form,
  Button,
  Row,
  Col,
  FloatingLabel,
  Tooltip,
  OverlayTrigger,
  Modal,
  Placeholder,
} from "react-bootstrap";
import marketApi, { CommentItemRequest } from "../../../api/market";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../provider";
import Appbar from "../../bar/appbar";
import {
  requestFetchMarketItems,
  requestFetchMarketItem,
  requestFetchCommentItems,
  requestAddCommentItem,
  requestModifyCommentItem,
  requestRemoveCommentItem,
} from "../../../middleware/modules/market";
import { CommentItem, MarketItem } from "../../../provider/modules/market";
import { useEffect } from "hoist-non-react-statics/node_modules/@types/react";

const getTimeString = (unixtime: number) => {
  const dateTime = new Date(unixtime);
  const day = 24 * 60 * 60 * 1000;
  return unixtime - new Date().getTime() >= day
    ? dateTime.toLocaleDateString()
    : dateTime.toLocaleTimeString();
  // return `${dateTime.toLocaleDateString()} ${dateTime.toLocaleTimeString()}`;
};

const MarketDetail = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();
  const id = router.query.id as string;
  const [commentList, setCommentList] = useState<CommentItem[]>([]);

  const userInput = useRef<HTMLInputElement>(null);
  const commentInput = useRef<HTMLTextAreaElement>(null);
  const modRef = useRef<HTMLInputElement>(null);

  const marketItem = useSelector((state: RootState) =>
    state.market.data.find((item) => item.marketId === +id)
  );

  const commentItems = useSelector(
    (state: RootState) => state.market.commentData
  );

  if (id) {
    if (!marketItem) {
      dispatch(requestFetchMarketItem(+id));
      dispatch(requestFetchCommentItems(+id));
    }
  }

  // ==== POST COMMENT
  const handlePostClick = () => {
    if (userInput.current?.value?.length) {
      console.log("[log] commentItems: ");
      console.log(commentItems);
    }
    if (userInput.current?.value?.length) {
      const comment: CommentItemRequest = {
        commentId: 0,
        marketId: +id,
        userName: userInput.current.value,
        commentContent: commentInput.current ? commentInput.current.value : "",
        createdTime: new Date().getTime(),
        isEmpty: true,
      };
      // console.log("[log] comment: ");
      // console.log(comment);
      console.log("[log] type_comment_content: ");
      console.log();

      dispatch(requestAddCommentItem(comment));
      setCommentList(commentItems);
      // dispatch(requestFetchCommentItems(+id));
    }
  };

  // ====   수정    ====

  const modCommentItem = (d: CommentItem) => {
    // const id = d.commentId;

    if (modRef.current?.value?.length) {
      const commentItem: CommentItem = {
        commentId: d.commentId,
        marketId: d.marketId,
        userName: d.userName,
        commentContent: modRef.current?.value,
        createdTime: d.createdTime,
        isEmpty: d.isEmpty,
      };

      console.log("[log] commentItem_mod: ");
      console.log(commentItem);

      dispatch(requestModifyCommentItem(commentItem));
      handleCloseMod();
    }
  };
  // ====   삭제    ====
  // ====   실제 삭제   ====
  const removeCommentItem = (d: CommentItem) => {
    const targetId = d.commentId;
    if (targetId) {
      dispatch(requestRemoveCommentItem(targetId));
      handleCloseDel();
    }
  };

  // ====   숨기기    ====

  // ====   ====
  const [isModify, setIsModify] = useState(false);
  const [showDel, setShowDel] = useState(false);
  const [showApply, setShowApply] = useState(false);
  const [showMod, setShowMod] = useState(false);

  const handleCloseDel = () => setShowDel(false);
  const handleShowDel = () => setShowDel(true);

  const handleCloseApply = () => setShowApply(false);
  const handleShowApply = () => setShowApply(true);

  const handleCloseMod = () => setShowMod(false);
  const handleShowMod = () => {
    setShowMod(true);
  };

  // ====    item CRUD   ====
  // if (id) {
  //   if (!commentItems) {
  //     dispatch(requestFetchCommentItems(+id));
  //   }
  // }

  // const isRemoveCompleted = useSelector(
  //   (state: RootState) => state.market.isRemoveCompleted
  // );
  // useEffect(() => {
  //   isRemoveCompleted && router.push("/market");
  // }, [isRemoveCompleted, router]);

  const [open, setOpen] = useState(true);

  return (
    <section>
      <Appbar />
      <div
        id="item-detail-container"
        style={{ width: "50vw" }}
        className="mx-auto"
      >
        <h2 className="text-center my-5 fw-bold border-bottom pb-4">
          매물 상세
        </h2>
        <span className="card mx-auto">
          <span className="card-body">
            <Container>
              <Row>
                <Col md={{ span: 1, offset: 0 }}>
                  <Image
                    src="/flag_usd.png"
                    alt="USD"
                    width={48}
                    height={48}
                  ></Image>
                </Col>
                <Col>
                  <Row>
                    <Col md={{ span: 1, offset: 0 }}>
                      <h1>
                        <i className="bi bi-person-circle" />
                      </h1>
                    </Col>
                    <Col md={{ span: 3, offset: 0 }}>
                      <h5 className="card-title">
                        <strong>{marketItem?.crcHave}</strong>
                        {marketItem?.cntHave}{" "}
                        <strong>&#62;{marketItem?.crcWant}</strong>
                        &#32;{marketItem?.cntWant}
                      </h5>
                    </Col>
                    <Col md={{ span: 6, offset: 0 }}></Col>
                  </Row>
                  <Row>
                    <Col>
                      <strong>{marketItem?.hostName}</strong>
                    </Col>
                  </Row>
                  <Row>
                    <Col>{marketItem?.content}</Col>
                  </Row>
                </Col>
              </Row>
            </Container>
            {/* <span className="card-text"></span> */}
            {/* css 그리드처리 해야함 */}
          </span>
        </span>
        <Row className="mt-2">
          <Col md={{ span: 3, offset: 0 }}>
            <Button variant="secondary" onClick={handleShowApply}>
              거래 신청
            </Button>
          </Col>
          <Col></Col>
          <Col
            md={{ span: 3, offset: 5 }}
            className="d-flex justify-content-end"
          >
            <Button
              className="justify-content-end"
              variant="secondary"
              onClick={() => {
                router.push(`/market`);
              }}
            >
              목록으로
            </Button>
          </Col>
        </Row>
        <Placeholder xs={`12`} />
        <Modal show={showApply} onHide={handleCloseApply}>
          <Modal.Header closeButton>
            <Modal.Title>
              <strong>거래 신청</strong>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>거래를 신청합니다.</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleCloseApply}>
              취소
            </Button>
            <Button variant="primary" onClick={handleCloseApply}>
              확인
            </Button>
          </Modal.Footer>
        </Modal>
        <Collapse key={id} in={open} className="mt-2">
          <div key="id" className="mx-auto" id="comment-collapse-thread">
            {/* <div className="card card-body"> */}
            <div className={`${style.imessage}`}>
              {commentItems?.map((d) => (
                <span key={d.commentId}>
                  <div className="text-bold mt-0">
                    <Row>
                      <Col xs={3}>
                        <strong>{d?.userName}</strong>
                      </Col>
                      <Col className="fs-6">
                        <small>{getTimeString(d?.createdTime)}</small>
                      </Col>
                    </Row>
                  </div>
                  <Row>
                    <Col md={{ span: 8, offset: 0 }}>
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 100 }}
                        overlay={
                          <Tooltip>
                            <strong>수정하기</strong>
                          </Tooltip>
                        }
                      >
                        <p
                          className={`${style.fromThem} ${style.zoom} ${style.hover} button`}
                          onClick={handleShowMod}
                        >
                          {d?.commentContent}
                        </p>
                      </OverlayTrigger>
                      <Modal show={showMod} onHide={handleCloseMod}>
                        <Modal.Header closeButton>
                          <Modal.Title>댓글 수정</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          <Form.Control
                            size="lg"
                            type="text"
                            placeholder="내용"
                            ref={modRef}
                          />
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleCloseMod}>
                            Close
                          </Button>
                          <Button
                            variant="primary"
                            onClick={() => modCommentItem(d)}
                          >
                            Save Changes
                          </Button>
                        </Modal.Footer>
                      </Modal>
                    </Col>
                    <Col></Col>
                    <Col
                      md={{ span: 1, offset: 2 }}
                      className="justify-content-end"
                    >
                      <OverlayTrigger
                        placement="right"
                        delay={{ show: 250, hide: 100 }}
                        overlay={
                          <Tooltip>
                            <strong>삭제하기</strong>
                          </Tooltip>
                        }
                      >
                        <Button
                          className="btn bi bi-trash"
                          variant="secondary"
                          onClick={handleShowDel}
                        />
                      </OverlayTrigger>
                    </Col>
                  </Row>
                  <Modal show={showDel} onHide={handleCloseDel}>
                    <Modal.Header closeButton>
                      <Modal.Title>
                        <strong>삭제하기</strong>
                      </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>댓글을 삭제하시겠습니까?</Modal.Body>
                    <Modal.Footer>
                      <Button variant="secondary" onClick={handleCloseDel}>
                        취소
                      </Button>
                      <Button
                        variant="primary"
                        onClick={() => removeCommentItem(d)}
                      >
                        확인
                      </Button>
                    </Modal.Footer>
                  </Modal>
                </span>
              ))}
              <div className="fs-6 mt-0">{/* created&nbsp; */}</div>
              {/* </div> */}
              <Form className="mt-4">
                <Row>
                  <Col xs={2}>
                    <FloatingLabel controlId="floatingInputGrid" label="이름">
                      <Form.Control
                        type="text"
                        placeholder="name@example.com"
                        ref={userInput}
                      />
                    </FloatingLabel>
                  </Col>
                  <Col>
                    <Form.Group
                      className="mb-3"
                      controlId="commentForm.Controltextarea1"
                    >
                      <Form.Control
                        type="text"
                        as="textarea"
                        rows={2}
                        ref={commentInput}
                      />
                    </Form.Group>
                  </Col>
                  <Col xs={1}>
                    <Button
                      variant="danger"
                      className="bi bi-arrow-up-square-fill fs-2 ml-1"
                      onClick={() => handlePostClick()}
                    />
                  </Col>
                </Row>
              </Form>
            </div>
          </div>
        </Collapse>
      </div>
    </section>
  );
};

export default MarketDetail;
