import './App.css';
import Accordion from './components/accordion/Accordion';
import CustomModal from './components/custom-modal/CustomModal';
import CustomTabs from './components/custom-tabs/CustomTabs';
import GithubProfileFinder from './components/github-profile-finder/GithubProfileFinder';
import ImageSlider from './components/image-slider/ImageSlider';
import LoadMoreData from './components/load-more-data/LoadMoreData';
import menus from './components/nested-menu/data';
import NestedMenu from './components/nested-menu/NestedMenu';
import QrCodeGenerator from './components/qr-code-generator/QrCodeGenerator';
import RandomColor from './components/random-color/RandomColor';
import ScrollIndicator from './components/scroll-indicator/ScrollIndicator';
import SearchAutocomplete from './components/search-autocomplete/SearchAutocomplete';
import StarRating from './components/star-rating/StarRating';
import ThemeSwitch from './components/theme-switch/ThemeSwitch';

const appData = [
  {
    id: '1',
    project: 'Accordion',
    component: <Accordion />,
  },
  {
    id: '2',
    project: 'Random Color Generator',
    component: <RandomColor />,
  },
  {
    id: '3',
    project: 'Star Rating',
    component: <StarRating />,
  },
  {
    id: '4',
    project: 'Image Slider',
    component: (
      <ImageSlider
        baseUrl={'https://picsum.photos/v2/list'}
        limit={'10'}
        page={'1'}
      />
    ),
  },
  {
    id: '5',
    project: 'Load More Data',
    component: <LoadMoreData />,
  },
  {
    id: '6',
    project: 'Nested Menu',
    component: <NestedMenu menus={menus} />,
  },
  {
    id: '7',
    project: 'QR Code Generator',
    component: <QrCodeGenerator />,
  },
  {
    id: '8',
    project: 'Theme Switch',
    component: <ThemeSwitch />,
  },
  {
    id: '9',
    project: 'Scroll Indicator',
    component: (
      <ScrollIndicator url={'https://dummyjson.com/products?limit=100'} />
    ),
  },
  {
    id: '10',
    project: 'Custom Tabs',
    component: <CustomTabs />,
  },
  {
    id: '11',
    project: 'Custom Modal',
    component: <CustomModal />,
  },
  {
    id: '12',
    project: 'GitHub Profile Finder',
    component: <GithubProfileFinder />,
  },
  {
    id: '13',
    project: 'Search Autocomplete',
    component: <SearchAutocomplete />,
  },
];

function App() {
  return (
    <div className="app">
      {appData.map((item) => (
        <div className="project-wrapper" key={item.id}>
          <p>
            #{item.id} {item.project}
          </p>
          {item.component}
        </div>
      ))}
    </div>
  );
}

export default App;
