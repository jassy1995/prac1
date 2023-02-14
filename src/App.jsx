import { Navbar, Hero, Stats, Business, Billing, CardDeal, Testimonials } from "./components";
import style from "./style";


const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Navbar />
      </div>
    </div>
    <div className={`${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Hero />
      </div>
    </div>
    <div className={`${style.paddingX} ${style.flexCenter}`}>
      <div className={`${style.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
      </div>
    </div>


  </div>
);

export default App;