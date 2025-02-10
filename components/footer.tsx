import { CopyrightIcon, Heart } from "lucide-react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer className=" p-5 border gap-2 flex  w-full text-sm text-slate-500  justify-center items-center">
      <CopyrightIcon width={20} /> <span>Copyright</span> <span>{date}</span>
      <span className=" flex items-center">
        <span> Design with love</span> <Heart color="red" width={20} />{" "}
        <span className="px-1"> MichealDev</span>
      </span>
    </footer>
  );
};

export default Footer;
