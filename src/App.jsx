import './App.css';
import Accordion from './components/accordion/Accordion';
import CustomModal from './components/custom-modal/CustomModal';
import CustomTabs from './components/custom-tabs/CustomTabs';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMoreData from './components/load-more-data/LoadMoreData';
import menus from './components/nested-menu/data';
import NestedMenu from './components/nested-menu/NestedMenu';
import QrCodeGenerator from './components/qr-code-generator/QrCodeGenerator';
import RandomColor from './components/random-color/RandomColor';
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator';
import StarRating from './components/star-rating/StarRating';
import ThemeSwitch from './components/theme-switch/ThemeSwitch';

function App() {
  return (
    <div className="app">
      <div className="project-wrapper">
        <p>#1 Accordion</p>
        <Accordion />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#2 Random Color Generator</p>
        <RandomColor />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#3 Star Rating</p>
        <StarRating />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#4 Image Slider</p>
        <ImageSlider
          baseUrl={'https://picsum.photos/v2/list'}
          limit={'10'}
          page={'1'}
        />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#5 Load More Data</p>
        <LoadMoreData />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#6 Nested Menu</p>
        <NestedMenu menus={menus} />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#7 QR Code Generator</p>
        <QrCodeGenerator />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#8 Theme Switch</p>
        <ThemeSwitch />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#9 Scroll Indicator</p>
        <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#10 Custom Tabs</p>
        <CustomTabs />
        <hr />
      </div>

      <div className="project-wrapper">
        <p>#11 Custom Modal</p>
        <CustomModal />
        <hr />
      </div>
    </div>
  );
}

export default App;
