import './tabs.scss'

const Tabs = () => {
    const activeTab = () => {
        let tabs = document.getElementsByClassName("tabs-wrap-cell");
        for (let i = 0; i < tabs.length; i++) {
            tabs[i].addEventListener("click", function() {
                let current = document.getElementsByClassName("tabs-active");
                current[0].className = current[0].className.replace(" tabs-active", "");
                this.className += " tabs-active";
            });
        }
    }

    return(
        <div className="tabs">
            <p className="tabs-title">Tabs</p>
            <div className="tabs-wrap">
                <div className="tabs-wrap-cell tabs-active">
                    <p className="tabs-wrap-cell-title" onClick={activeTab}>All</p>
                </div>
                <div className="tabs-wrap-cell">
                    <p className="tabs-wrap-cell-title" onClick={activeTab}>My favorites</p>
                </div>
                <div className="tabs-wrap-cell">
                    <p className="tabs-wrap-cell-title" onClick={activeTab}>Popular</p>
                </div>
            </div>
        </div>
    )
}

export default Tabs