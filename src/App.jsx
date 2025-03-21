import AdvancedSection from "./components/AdvancedSection";
import BoostSection from "./components/BoostSection";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

import ShortenForm from "./components/ShortenForm";
import TopBannerArea from "./components/TopBannerArea";

const footerMenu = [
  {
    category: "Features",
    subcategories: ["Link Shortening", "Branded Links", "Analytics"],
    categoryLink: "/#",
    subcategoriesLinks: ["/#", "/#", "/#"],
  },
  {
    category: "Resources",
    subcategories: ["Blog", "Developers", "Support"],
    categoryLink: "/#",
    subcategoriesLinks: ["/#", "/#", "/#"],
  },
  {
    category: "Company",
    subcategories: ["About", "Our Team", "Careers", "Contact"],
    categoryLink: "/#",
    subcategoriesLinks: ["/#", "/#", "/#", "/#"],
  },
];

function App() {
  return (
    <div id="page-container" className="flex grow  flex-col 2xl:mt-12">
      <Navigation />
      <main>
        <TopBannerArea />
        <ShortenForm />

        <AdvancedSection />
        <BoostSection />
      </main>
      <Footer footerMenu={footerMenu} />
    </div>
  );
}

export default App;
