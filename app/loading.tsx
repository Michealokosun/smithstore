import Image from "next/image";
import loading from "./images/loader.gif";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen justify-center items-center">
      <Image priority src={loading} alt="loder" width={90} height={90} />;
    </div>
  );
};

export default Loading;
