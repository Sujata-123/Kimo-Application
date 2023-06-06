import Image from "next/image";
const Footer = () => {
  return (
    <footer className="w-full h-20 flex bg-[#001A1A]">
      <Image
        src={"/img/Aloha.svg"}
        alt="copy"
        width={94}
        height={35}
        className="lg:ml-36 md:ml-36 ml-6"
        style={{ filter: "invert(100%)" }}
      />
    </footer>
  );
};
export default Footer;
