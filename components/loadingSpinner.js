import { Oval } from "react-loader-spinner";

const LoadingSpinner = () => {
  return (
    <>
      <div className="centered-div">
        <Oval
          height={70}
          width={70}
          color="#ffffff"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor=""
          strokeWidth={5}
          strokeWidthSecondary={0}
        />
      </div>
    </>
  );
};

export default LoadingSpinner;
