import { Bars } from "react-loader-spinner";
import "../../../../style/components/atoms/LoadingStyle.css"

export const Loading = () => {
  return (
    <>
      <div className="loading">
        <Bars 
          color="#00BFFF"
          height={100}
          width={100}
        />
      </div>
    </>
  );
};
