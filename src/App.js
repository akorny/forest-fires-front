import React from "react"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { About, Api, Index, Menu, NowPage } from "./components"

const App = () => {
    return (
        <Router>
            <div className="container mb-3">
                <Menu />
            </div>
            <div className="container">
                <Switch>
                    <Route exact path="/map/now">
                        <NowPage />
                    </Route>
                    <Route exact path="/about">
                        <About />
                    </Route>
                    <Route exact path="/use-api">
                        <Api />
                    </Route>
                    <Route exact path="/">
                        <Index />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default App
