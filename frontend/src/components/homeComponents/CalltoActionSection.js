import React from "react";

const CalltoActionSection = () => {
  return (
    <div className="subscribe-section bg-with-black">
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div className="subscribe-head">
              <h2>Bạn cần tư vấn thêm về sản phẩm?</h2>
              <p>Đăng ký để nhận thông tin về sản phẩm mới nhất.</p>
              <form className="form-section">
                <input placeholder="Email của bạn..." name="email" type="email" />
                <input value="Đồng ý" name="subscribe" type="submit" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalltoActionSection;
