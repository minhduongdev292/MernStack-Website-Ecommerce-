import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="contactInfo container">
        <div className="row">
            <div className="col-10 col-md-3 contact-Box">
                <ul class="footer__list">
                <h5>Hỗ trợ khách hàng</h5>
                <li class="footer__list-item">
                    <p>Trung tâm bảo hành</p>
                </li>
                <li class="footer__list-item">
                    <p>Thanh toán và giao hàng</p>
                </li>
                <li class="footer__list-item">
                    <p>Dịch vụ sửa chữa và bảo trì</p>
                </li>
                <li class="footer__list-item">
                    <p>Khách hàng VIP</p>
                </li>    
                </ul>
            </div>
            <div className="col-10 col-md-3 contact-Box">
                <ul class="footer__list">
                <h5>Mua hàng và bảo hành</h5>
                <li class="footer__list-item">
                    <p>Chính sách bảo mật thông tin</p>
                </li>
                <li class="footer__list-item">
                    <p>Chính sách bảo hành</p>
                </li>
                <li class="footer__list-item">
                    <p>Chính sách đổi trà và hoàn tiền</p>
                </li>
                <li class="footer__list-item">
                    <p>Chính sách trả góp</p>
                </li>    
                </ul>
            </div>
            <div className="col-10 col-md-3 contact-Box">
                <ul class="footer__list">
                <h5>Thông tin Sugar Store</h5>
                <li class="footer__list-item">
                    <p>Giới thiệu Sugar Store</p>
                </li>
                <li class="footer__list-item">
                    <p>Thông tin liên hệ</p>
                </li>
                <li class="footer__list-item">
                    <p>Hệ thống Showroom</p>
                </li>
                <li class="footer__list-item">
                    <p>Hỏi đáp</p>
                </li>    
                </ul>
            </div>
            <div className="col-10 col-md-3 contact-Box"> 
                <ul class="footer__list">
                <h5>Email liên hệ</h5>
                <li class="footer__list-item">
                    <p>Hỗ trợ khách hàng: cskh@sugar.vn</p>
                </li>
                <li class="footer__list-item">
                    <p>Liên hệ báo giá: baogia@sugar.vn</p>
                </li>
                <li class="footer__list-item">
                    <p>Hợp tác phát triển: hoptac@sugar.vn</p>
                </li>
                <li class="footer__list-item">
                    <p>Email: sugar.it292@gmail.com</p>
                </li>    
                </ul>
            </div>
        </div>    
    </div>
        <div className="justify-content-center d-flex">
            <div className="card-name">
                <img
                    alt="mastercard"
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/MasterCard_Logo.svg/1200px-MasterCard_Logo.svg.png"
                />
            </div>
            <div className="card-name">
                <img
                    alt="visa"
                    src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png"
                />
            </div>
            <div className="card-name">
                <img
                    alt="paypal"
                    src="https://kieutruong.com/wp-content/uploads/2019/11/huong-dan-dang-ky-tai-khoan-paypal-1024x512.jpg"
                />
            </div>
            <div className="card-name">
                <img
                    alt="express"
                    src="https://icons.iconarchive.com/icons/designbolts/credit-card-payment/256/American-Express-icon.png"
                />
            </div>
            <div className="card-name">
                <img
                    alt="discover"
                    src="https://icons-for-free.com/iconfiles/png/512/cash+checkout+discover+network+online+shopping+payment+method-1320191225548835050.png"
                />
            </div>
        </div>
    </div>
  );
};

export default Footer;
