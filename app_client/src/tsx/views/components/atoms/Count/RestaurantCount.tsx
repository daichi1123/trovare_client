import "../../../../style/components/atoms/RestaurantCount.css"

export const RestaurantCount = () => {
  return (
    <>
      <div className="page-count">
        <span className="num">
          <strong>1</strong>
        </span>
        ~
        <span className="num">
          <strong>20</strong>
        </span>
        <span className="line">/</span>全
        <span className="num">
          <strong>2000</strong>
        </span>
        件
      </div>
    </>
  );
};
