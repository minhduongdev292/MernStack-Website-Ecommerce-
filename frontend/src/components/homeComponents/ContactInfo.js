import React from "react";

const ContactInfo = () => {
  return (
    <div className="contactInfo container">
      <h2>Vì sao chọn Sugar Store ?</h2>
      <div className="row">
        <div className="col-10 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i class="fas fa-shipping-fast"></i>
            </div>
            <h5>Giao hàng toàn quốc</h5>
          </div>
        </div>
        <div className="col-10 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i class="fas fa-user-headset"></i>
            </div>
            <h5>Tư vấn chuyên sâu</h5>
          </div>
        </div>
        <div className="col-10 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
            <i class="fas fa-rocket"></i>
            </div>
            <h5>Bảo hành siêu tốc</h5>
          </div>
        </div>
        <div className="col-10 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i class="fas fa-money-check-edit-alt"></i>
            </div>
            <h5>Thanh toán linh hoạt</h5>
          </div>
        </div>
        <div className="col-10 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i class="fas fa-handshake"></i>
            </div>
            <h5>Cam kết chính hãng</h5>
          </div>
        </div>
        <div className="col-10 col-md-4 contact-Box">
          <div className="box-info">
            <div className="info-image">
              <i class="fas fa-hands-usd"></i>
            </div>
            <h5>Cam kết giá tốt nhất</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
