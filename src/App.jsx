import { Navbar, Hero, Stats } from "./components";
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
      </div>
    </div>


  </div>
);

export default App;