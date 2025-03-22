import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import Pagination from "./pagination";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../Redux/Actions/ProductActions";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";


const ShopSection = (props) => {
  const { keyword, pagenumber } = props;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products, page, pages } = productList;
  // console.log(products);
  

  useEffect(() => {
    dispatch(listProduct(keyword, pagenumber));
  }, [dispatch, keyword, pagenumber]);


  return (
    <>
      <div className="container">
        <div className="section">
          <div className="row">
            
          <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img src="https://lh3.googleusercontent.com/90ni7bXbVGCmFrSgWZWthh5RcqMuz206bIaepQMc-C3jEza-AFiLUtP16ht59gz22ToX5HMUi9FF5qcT4KCdjVTyQL1KjPIH=rw-w1920" class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
              <img src="https://lh3.googleusercontent.com/Z9EKSE-M6wIGl2iCCx9iPjmD3BI8zYRY_braf8j3SVn22HwVzNSWyCPGtKgmjW3S64iZf9fkkBfI92BKvGKTcwqe0Vpnl97C=rw-w1920" class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
              <img src="https://lh3.googleusercontent.com/qj1ewOX6-3x_2ythkRnxLD0I_Mx1eXsr6zLzUnbFbBXh1r63uR_aON6mBXrJepDeWVAvMTTctCBbeCOz9u0sEVNPA5_OnBhf=rw-w1920" class="d-block w-100" alt="..."></img>
              </div>
              <div class="carousel-item">
              <img src="https://lh3.googleusercontent.com/4l3CMJLcn5fke5-of95C06OBrNRYGPWih3wqeDCYfyXJN3EndmMkO1yRbI5ohylxaJhQ35j5fSTPNfZGQQGd1SwRbYJYp4Q=rw-w1920" class="d-block w-100" alt="..."></img>
              </div>
              
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
              <span class="carousel-control-prev-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
              <span class="carousel-control-next-icon" aria-hidden="true"></span>
              <span class="visually-hidden">Next</span>
            </button>
          </div>
          
            <div className="col-10 col-md-4 contact-Box">
              <div className="box-info">
                <img id="img" alt="" src="https://lh3.googleusercontent.com/kwkaHEJoHTO_6Nvicrkx7MHZrzHtx5xxmxE5WXe3XKTX88PTbFLJLZL2fSaTNx400R8yXZ7fCdFFvngRmKy10cRQqn9BPoK9=w411-rw" />
              </div>
            </div>
            <div className="col-10 col-md-4 contact-Box">
              <div className="box-info">
                <img id="img" alt="" src="https://lh3.googleusercontent.com/zNJzby7rlg74sFKdqs3skrkR5hcg1heB5RPUD1TpTIUMJGS83Q6ewv7cYZIsslNBqy-lsxaADIzRcm6IeYTK_5B9IyK7AbI=w411-rw" />
              </div>
            </div>
            <div className="col-10 col-md-4 contact-Box">
              <div className="box-info">
                <img id="img" alt="" src="https://lh3.googleusercontent.com/HBlAeYFkHz5OgvglOrbMXiSfE4vDC6j4hqQZ3kz3XVF8qS1q84W-e7ZJ-nqTCbWd8J7OKGp1qnuDD2W00CViOqWpf3GPinU=w411-rw" />
              </div>
            </div>

            <div className="col-lg-12 col-md-12 article">
              
              <div className="button-category">
                <button type="button" class="btn btn-outline-info">
                   <Link to={`/products`}>Sản phẩm</Link>
                </button>
                <button type="button" class="btn btn-outline-info">
                  <img id="img" alt="" src="/images/44.png" />
                </button>
                <button type="button" class="btn btn-outline-info">
                  <img id="img" alt="" src="/images/45.png" />
                </button>
                <button type="button" class="btn btn-outline-info">
                  <img id="img" alt="" src="/images/46.png" />
                </button>
                <button type="button" class="btn btn-outline-info">
                  <img id="img" alt="" src="/images/47.png" />
                </button>
                <button type="button" class="btn btn-outline-info">
                  <img id="img" alt="" src="/images/48.png" />
                </button>
                <button type="button" class="btn btn-outline-info">
                  <img id="img" alt="" src="/images/49.png" />
                </button>
              </div>
    
              <div className="shopcontainer row">
                {loading ? (
                  <div className="mb-5">
                    <Loading />
                  </div>
                ) : error ? (
                  <Message variant="alert-danger">{error}</Message>
                ) : (
                  <>
                    {products.map((product) => (
                      <div
                        className="shop col-lg-3 col-md-6 col-sm-6"
                        key={product._id}
                      >
                        <div className="border-product">
                          <Link to={`/products/${product._id}`}>
                            <div className="shopBack">
                              <img src={product.image} alt={product.name} />
                            </div>
                          </Link>

                          <div className="shoptext">
                            <p>
                              <Link to={`/products/${product._id}`}>
                                {product.name}
                              </Link>
                            </p>

                            <Rating
                              value={product.rating}
                              text={`${product.numReviews} đánh giá`}
                            />
                            <h3>${product.price}</h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                )}

                {/* Pagination */}
                <Pagination
                  pages={pages}
                  page={page}
                  keyword={keyword ? keyword : ""}
                />
              </div>
            </div>
            <Link className="img" to="/">
              <img id="img" alt="" src="/images/22.png" />
            </Link>  
          </div>
          <div className="row">
            {/* <h4>Outstanding brand</h4> */}
            <div className="col-10 col-md-3 contact-Box">
              <div className="box-info">
                <img id="img" alt="" src="/images/24.png" />
              </div>
            </div>
            <div className="col-10 col-md-3 contact-Box">
              <div className="box-info">
                <img id="img" alt="" src="/images/25.png" />
              </div>
            </div>
            <div className="col-10 col-md-3 contact-Box">
              <div className="box-info">
                <img id="img" alt="" src="/images/26.png" />
              </div>
            </div>
            <div className="col-10 col-md-3 contact-Box">
              <div className="box-info">
                <img id="img" alt="" src="/images/27.png" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShopSection;
