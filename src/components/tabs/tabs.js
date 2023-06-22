import './tabs.scss'
import {useState} from "react";

const Tabs = () => {
  const [ activeTab, setActiveTab ] = useState('all');

  return(
    <div className="tabs">
      <p className="tabs-title">Tabs</p>
      <div className="tabs-wrap">
        <div className={`tabs-wrap-cell ${activeTab === 'all' ? 'tabs-active' : ''}`}>
          <p className="tabs-wrap-cell-title" onClick={() => setActiveTab('all')}>All</p>
        </div>
        <div className={`tabs-wrap-cell ${activeTab === 'favorite' ? 'tabs-active' : ''}`}>
          <p className="tabs-wrap-cell-title" onClick={() => setActiveTab('favorite')}>My favorites</p>
        </div>
        <div className={`tabs-wrap-cell ${activeTab === 'popular' ? 'tabs-active' : ''}`}>
          <p className="tabs-wrap-cell-title" onClick={() => setActiveTab('popular')}>Popular</p>
        </div>
      </div>
    </div>
  )
}

export default Tabs
