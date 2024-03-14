import TitleBox from "./components/titlebox";
import { League_Spartan } from "next/font/google";
import Navbar from "./components/navbar";
import SocialBar from "./components/socialbar";

const league = League_Spartan({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={`${league.className} flex justify-between`}>
      <div className="flex flex-col gap-52 items-center justify-center my-20 ml-20 fixed">
        <TitleBox name="Joshua Lee" title="Software/Web Developer" desc=""/>
        <Navbar />
        <SocialBar />
      </div>
    </div>
  );
}

