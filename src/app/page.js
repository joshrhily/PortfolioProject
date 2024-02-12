import TitleBox from "./components/titlebox";
import { League_Spartan } from "next/font/google";

const leage = League_Spartan({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={leage.className}>
      <h1>Hello, World!</h1>
      <TitleBox name="Joshua Lee" title="Software/Web Developer" desc="I develop apps/web apps to help with everyday life"/>
    </div>
  );
}

