import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Accordian from './components/accordian'
import ImageSlider from './components/image-slider'
import StarRating from './components/star-rating'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import menus from './components/tree-view/data'
import QrCodeGenerator from './components/qr-code-generator'
import LightDarkMode from './components/light-dark-mode'
import ScrollIndicator from './components/scroll-indicator'
import TabTest from './components/customs-tabs/tabs-test'
import ModelTest from './components/custom-model-popup/Model-test'
import GithubProfileFinder from './components/github-profile-finder'
import SearchAutocomplete from './components/search-autocomplete-with-api'
import TIcTacToe from './components/tic-tac-toe'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='app'>
      {/* Accordian component */}
      {/* <Accordian /> */}

      {/* Star Rating Component */}
      {/* <StarRating noOfStars={10} /> */}

      {/* Image slider component */}
      {/* <ImageSlider
      url={"https://picsum.photos/v2/list"}
      page={"1"}
      limit={"5"}
      /> */}

      {/* Load More Component */}
      {/* <LoadMoreData /> */}

      {/* Tree view component/menu UI component / recursive navigation menu */}
      {/* <TreeView menus={menus} /> */}

      {/* Qr code generator */}
      {/* <QrCodeGenerator /> */}

      {/* Light-Dark Mode */}
      {/* <LightDarkMode /> */}

      {/* Scroll Indicator */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}

      {/* Custom Tabs Component */}
      {/* <TabTest /> */}

      {/* Custom Model PopUp Component */}
      {/* <ModelTest /> */}

      {/* Github Profile Finder */}
      {/* <GithubProfileFinder /> */}

      {/* Search Autocomplete Component */}
      {/* <SearchAutocomplete /> */}

      {/* Tic Tac Toe */}
      <TIcTacToe />
    </div>
  )
}

export default App
