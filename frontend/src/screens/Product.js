import React, { useEffect } from 'react'
import Header from "./../components/Header";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../Redux/Actions/ProductActions";
import Loading from "../components/LoadingError/Loading";
import Message from "../components/LoadingError/Error";
import Pagination from "../components/homeComponents/pagination";
import Rating from "../components/homeComponents/Rating";


const Product = (props) =>{

    const { keyword, pagenumber } = props;
    const dispatch = useDispatch();


    const productList = useSelector((state) => state.productList);
    const { loading, error, products, page, pages  } = productList;

  
    useEffect(() => {
        dispatch(listProduct(keyword, pagenumber));
    }, [dispatch, keyword, pagenumber]);


    return (
        <>
        <Header/>
          <div className="container">
            <div className="section">
              <div className="row">
              
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
                                <p>
                                  <Link to={`/products/${product._id}`}>
                                    Thương hiệu: {product.category}
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
              </div>
            </div>
          </div>
        </>
      );
}

export default Product