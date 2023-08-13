import clsx from "clsx"
import Slide from "./content Home Page/Slider";
import TopTrending from "./content Home Page/Top Trending";
import RecentView from "./content Home Page/RecentView";
import cssHomePage from "./HomePage.module.scss"
export default function HomePage() {


  return (
    <div className={clsx(cssHomePage.formSlider)}>
      <div id="gridSystems">
        <Slide />
        <TopTrending />
        <RecentView />
      </div>
    </div>
  )
}