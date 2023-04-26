import { HomePageBox } from "./components/HomePageBox/HomePageBox";
import { HomePageDelivery } from "./components/HomePageDelivery/HomePageDelivery";
import { HomePageDiets } from "./components/HomePageDiets/HomePageDiets";
import { HomePageFast } from "./components/HomePageFast/HomePageFast";
import { HomePageHero } from "./components/HomePageHero/HomePageHero";
import { HomePageReviews } from "./components/HomePageReviews/HomePageReviews";
import { HomePageTrial } from "./components/HomePageTrial/HomePageTrial";
import { HomePageBlog } from "./components/HomePageBlog/HomePageBlog";
import { HomePageFaq } from "./components/HomePageFaq/HomePageFaq";

export const HomePage = () => {
    return (
        <>
          <HomePageHero />
          <HomePageReviews />
          <HomePageDiets />
          <HomePageDelivery />
          <HomePageTrial />
          <HomePageFast />
          <HomePageBox />
          <HomePageBlog />
          <HomePageFaq />
          

        </>
    );
}
