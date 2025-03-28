import React, { useEffect, useState } from "react";
import Header from "./../components/Header";
import Rating from "../components/homeComponents/Rating";
import { Link } from "react-router-dom";
import Message from "./../components/LoadingError/Error";
import { useDispatch, useSelector } from "react-redux";
import {
  createProductReview,
  listProductDetails,
} from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import { PRODUCT_CREATE_REVIEW_RESET } from "../Redux/Constants/ProductConstants";
import moment from "moment";

const SingleProduct = ({ history, match }) => {
  const [qty, setQty] = useState(1);
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const productId = match.params.id;
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const { loading, error, product } = productDetails;
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const productReviewCreate = useSelector((state) => state.productReviewCreate);
  const {
    loading: loadingCreateReview,
    error: errorCreateReview,
    success: successCreateReview,
  } = productReviewCreate;

  useEffect(() => {
    if (successCreateReview) {
      alert("Review Submitted");
      setRating(0);
      setComment("");
      dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
    }
    dispatch(listProductDetails(productId));
  }, [dispatch, productId, successCreateReview]);

  const AddToCartHandle = (e) => {
    e.preventDefault();
    history.push(`/cart/${productId}?qty=${qty}`);
  };
  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      createProductReview(productId, {
        rating,
        comment,
      })
    );
  };
  return (
    <>
      <Header />
      <div className="container single-product">
        {loading ? (
          <Loading />
        ) : error ? (
          <Message variant="alert-danger">{error}</Message>
        ) : (
          <>
            <div className="row">
                <div className="col-md-6">
                    <div className="single-image">
                        <img src={product.image} alt={product.name} />
                    </div>
                    <div class="single-commit">
                    <h5>SugarStore cam kết về sản phẩm, giá cả, chất lượng:</h5>
                        <li>
                            Cam kết mang đến cho quý khách hàng những sản phẩm chính hãng chất lượng nhất.
                        </li>
                        <li>
                            Cam kết giá cả phù hợp với thị trường, nhu cầu sử dụng của khách hàng.
                        </li>
                        <li>
                            Chữ tín luôn được đặt lên hàng đầu, luôn đứng về phía khách hàng để thấu hiểu.
                        </li>
                        <li>
                            Chúng tôi luôn sẵn sàng hỗ trợ khách hàng 24/7.
                        </li>

                    </div>
                </div>
                <div className="col-md-6">
                    <div className="product-dtl">
                    <div className="product-info">
                        <div className="product-name">{product.name}</div>
                    </div>
                    <p>{product.description}</p>
                    <div class="single-commit">
                      <h5>Bạn sẽ nhận được:</h5>
                      <li>Thẻ thành viên Sugar Store.</li>
                      <li>Gói vệ sinh laptop miễn phí 3 lần.</li>
                      <li>Chuột logitech G304 phiên bản limited.</li>
                      <li>Mã giảm giá 200k khi mua màn hình từ 23inch trở lên.</li>
                      <li>Giảm 10% khi mua kèm combo Gaming Gear cho sinh viên.</li>
                    </div>

                    <div className="product-count col-lg-10">
                        <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Giá bán</h6>
                            <span>${product.price}</span>
                        </div>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Thể loại</h6>
                            <span>{product.category}</span>
                        </div>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                        <h6>Trạng thái</h6>
                            {product.countInStock > 0 ? (
                                <span>Trong kho</span>
                            ) : (
                                <span>không có sẵn</span>
                            )}
                        </div>
                        <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Đánh giá</h6>
                            <Rating
                                value={product.rating}
                                text={`${product.numReviews} đánh giá`}
                            />
                        </div>
                        {product.countInStock > 0 ? (
                        <>
                            <div className="flex-box d-flex justify-content-between align-items-center">
                            <h6>Số lượng</h6>
                            <select
                                value={qty}
                                onChange={(e) => setQty(e.target.value)}
                            >
                                {[...Array(product.countInStock).keys()].map(
                                (x) => (
                                    <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                    </option>
                                )
                                )}
                            </select>
                            </div>
                            <button
                            onClick={AddToCartHandle}
                            className="round-black-btn"
                            >
                            Thêm vào giỏ hàng
                            </button>
                        </>
                        ) : null}
                      </div>
                    </div>
                       <div className="product-policy">
                            <div className="col-md-6">
                                <h5>Chính sách bán hàng</h5>
                                    <li>Miễn phí giao hàng cho đơn hàng từ 2000k</li>
                                    <li>Cam kết chính hãng 100%</li>
                                    <li>Đổi trả trong vòng 10 ngày</li>
                                <h5>Dịch vụ khác</h5>
                                    <li>Sửa chữa đồng giá 200k.</li>
                                    <li>Kiểm tra và vệ sinh laptop.</li>
                                    <li>Bảo hành tại nhà.</li>
                            </div>
                       </div>
                </div>
            </div>

            {/* RATING */}
            <div className="row my-5">
              <div className="col-md-6">
                <h6 className="mb-3">Đánh giá</h6>
                {product.reviews.length === 0 && (
                  <Message variant={"alert-info mt-3"}>Không có bài đánh giá nào</Message>
                )}
                {product.reviews.map((review) => (
                  <div
                    key={review._id}
                    className="mb-5 mb-md-3 bg-light p-3 shadow-sm rounded"
                  >
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <span>{moment(review.createdAt).calendar()}</span>
                    <div className="alert alert-info mt-3">
                      {review.comment}
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-6">
                <h6>Viết bài đánh giá của khách hàng</h6>
                <div className="my-4">
                  {loadingCreateReview && <Loading />}
                  {errorCreateReview && (
                    <Message variant="alert-danger">
                      {errorCreateReview}
                    </Message>
                  )}
                </div>
                {userInfo ? (
                  <form onSubmit={submitHandler}>
                    <div className="my-4">
                      <strong>Xếp hạng</strong>
                      <select
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      >
                        <option value="">Lựa chọn...</option>
                        <option value="1">1 - Kém</option>
                        <option value="2">2 - Bình thường</option>
                        <option value="3">3 - Tốt</option>
                        <option value="4">4 - Rất tốt</option>
                        <option value="5">5 - Xuất sắc</option>
                      </select>
                    </div>
                    <div className="my-4">
                      <strong>Bình luận</strong>
                      <textarea
                        row="3"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        className="col-12 bg-light p-3 mt-2 border-0 rounded"
                      ></textarea>
                    </div>
                    <div className="my-3">
                      <button
                        disabled={loadingCreateReview}
                        className="col-12 bg-black border-0 p-3 rounded text-white"
                      >
                        GỬI ĐI
                      </button>
                    </div>
                  </form>
                ) : (
                  <div className="my-3">
                    <Message variant={"alert-warning"}>
                      Vui lòng{" "}
                      <Link to="/login">
                        " <strong>Đăng nhập</strong> "
                      </Link>{" "}
                      để viết đánh giá{" "}
                    </Message>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SingleProduct;
