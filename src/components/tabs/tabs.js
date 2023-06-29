import './tabs.scss'

const Tabs = ({ tabs = [], activeTab, setActiveTab }) => {
    const isTabActive = (name) => activeTab === name;

    return(
        <div className="container">
            <div className="tabs">
                <p className="tabs-title">Blog</p>
                <div className="tabs-wrap">
                    { tabs.map(({ title, key }) => (
                        <div key={key} className={`tabs-wrap-cell ${isTabActive(key) ? 'tabs-active' : ''}`}>
                            <p className="tabs-wrap-cell-title" onClick={() => setActiveTab(key)}>{title}</p>
                        </div>
                    )) }
                </div>
            </div>
        </div>
    )
}

export default Tabs