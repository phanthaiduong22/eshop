import callAPI from "../../utils/apiCaller";

const SellerProductItem = ({ product, token }) => {
  const onDelete = () => {
    callAPI("/deletesellerproduct", "POST", { image_id: product.id }, token)
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
    window.location.reload();
  };
  return (
    <tr>
      <td scope="row">
        <img
          src={product.image_url}
          className="img-fluid img-thumbnail"
          style={{ width: "20vh", height: "20vh" }}
          alt="productimage"
        />
      </td>
      <td>{product.product_name}</td>
      <td>{product.stock}</td>
      <td>{product.price}</td>
      <td>{product.origin}</td>
      <td>
        <button type="button" className="btn btn-primary">
          Chỉnh sửa
        </button>
        <button
          type="button"
          className="btn btn-danger mr-3"
          onClick={onDelete}
        >
          Xóa
        </button>
      </td>
    </tr>
  );
};

export default SellerProductItem;
