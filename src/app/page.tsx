import DividingBlack from "./components/DividingBlack";
import Footer from "./components/Footer";
import GalileoFXVideo from "./components/GalileoFXVideo";
import Header from "./components/Header";
import JudgingCriteria from "./components/JudgingCriteria";
import Main from "./components/Main";
import VideoSection from "./components/VideoSection";

export default function Home() {
  return (
    <div className="bg-[#050716] h-[3580px] ">
      <Header/>
      <Main />
    <div className="flex justify-center">
    <DividingBlack/>
    </div>
    <div className="flex justify-center">
    <JudgingCriteria/>
    </div>
    <VideoSection/>
    <div className="">
    <GalileoFXVideo/>
    </div>
    <Footer/>
    </div>
  );
}
