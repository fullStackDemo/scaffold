import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

import App from '@pages/App';

function About(props) {
    console.log('about', props);
    return <div>page: about</div>;
}


// 路由配置
// const routerConfig = [
//     {
//         path: '/',
//         component: App
//     },
//     {
//         path: '/about',
//         component: About
//     }
// ];

// const routers = [];

// routerConfig.map(n => {
//     routers.push(<Route path={n.path} component={n.component}></Route>);
// });

function AppRouter() {
    return (
        // 只有当你的应用部署到服务器的二级目录的时候，才需要设置basename
        <Router basename="/react">
        {/* <Router> */}
            <Switch>
                <Route path="/" exact component={App}></Route>
                <Route path="/about" component={About}></Route>
            </Switch>
        </Router>
    );
}

export default AppRouter;
