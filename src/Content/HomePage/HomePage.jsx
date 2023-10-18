import clsx from "clsx"
import Slide from "./content Home Page/Slider";
import TopTrending from "./content Home Page/Top Trending";
import RecentLike from './content Home Page/RecentLike'
import cssHomePage from "./HomePage.module.scss"
export default function HomePage() {


  return (
    <div className={clsx(cssHomePage.formSlider)}>
      <div id="gridSystems">
        <Slide />
        <TopTrending />
        <RecentLike />
      </div>
    </div>
  )
}