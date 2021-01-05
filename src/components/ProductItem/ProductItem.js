import "./ProductItem.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faHeart, faInfo } from "@fortawesome/free-solid-svg-icons";

const ProductItem = ({ imgSrc, productName, link, cost, sold }) => {
  console.log(productName);
  if (sold > 999) sold = ">999";
  return (
    <div className="col-md-3">
      <div className="motsanpham">
        <div className="layer"></div>
        <div className="layerbox"></div>
        {1 > 0 ? (
          <div className="controls">
            <button
              onClick={() => {
                // this.onClickInfo(this.state.flashdeals[i].id);
              }}
            >
              <FontAwesomeIcon icon={faInfo} className="iconcontrol" />
            </button>
          </div>
        ) : (
          <div className="controls">
            <button
              onClick={() => {
                this.onClickLove(null);
              }}
            >
              <FontAwesomeIcon icon={faHeart} className="iconcontrol" />
            </button>
            <button
              onClick={() => {
                this.onClickInfo(null);
              }}
            >
              <FontAwesomeIcon icon={faInfo} className="iconcontrol" />
            </button>
            <button
              onClick={() => {
                this.onClickaddCart(null);
              }}
            >
              <FontAwesomeIcon icon={faCartPlus} className="iconcontrol" />
            </button>
          </div>
        )}

        <img
          className="banner"
          src={"https://cf.shopee.vn/file/ba4a48478372fed12881b780ccb7c6b9"}
        ></img>

        {1 > 0 ? (
          <img
            className="anhsp"
            src={"https://cf.shopee.vn/file/ba4a48478372fed12881b780ccb7c6b9"}
            style={{ width: "100%" }}
          ></img>
        ) : (
          <img className="anhsp" src="" style={{ width: "100%" }}></img>
        )}

        {1 > 0 ? (
          <div className="tieude">Ten san pham</div>
        ) : (
          <div className="tieude"></div>
        )}

        {1 > 0 ? (
          <strong className="gia">50.000 đ</strong>
        ) : (
          <strong className="gia"></strong>
        )}

        <div className="thanhbar">
          <div className="progress">
            <div
              className="progress-bar"
              role="progressbar"
              style={{ width: "20%" }}
              aria-valuenow="25"
              aria-valuemin="0"
              aria-valuemax="100"
            ></div>

            {1 > 0 ? (
              <small className="justify-content-center d-flex position-absolute w-100">
                Đã bán 500
              </small>
            ) : (
              <small className="justify-content-center d-flex position-absolute w-100"></small>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
