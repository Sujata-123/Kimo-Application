import Image from "next/image";
const TravelGuide = () => {
  return (
    <div className="bg-white rounded-lg shadow-md lg:w-1/2 md:w-full w-full h-full flex justify-between p-5">
      <div>
        <div className=" text-2xl font-bold">Hadwin Malone</div>
        <div className=" text-base font-normal text-[#001A1A]">
          Guide since 2012
        </div>
        <button className="border rounded-md border-cyan-700 text-cyan-700 px-2 py-1 mt-5">
          Contact
        </button>
      </div>
      <div>
        <Image
          src={"/img/travel-guide.svg"}
          alt="travel-guide"
          width={100}
          height={100}
          className="mt-3 rounded-full"
        />
      </div>
    </div>
  );
};
export default TravelGuide;
