import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { Index, Menu, NowPage } from "./components"

const App = () => {
    return (
        <Router>
            <div className="container mb-3">
                <Menu />
            </div>
            <div className="container">
                <Switch>
                    <Route path="/map/now">
                        <NowPage />
                    </Route>
                    <Route path="/">
                        <Index />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
