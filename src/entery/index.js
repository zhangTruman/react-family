import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import store from '../store/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/App/App';
import getRouter from 'router/router';
import '../../mock/mock';
// 初始化
renderWithHotReload(App);

// 热更新
if (MOCK) {
    require('../../mock/mock');
}
if(module.hot) {
	module.hot.accept('components/App/App', () => {
		const NextApp = require('components/App/App').default;
		renderWithHotReload(NextApp);
	});
}

function renderWithHotReload(RootElement) {
	ReactDom.render(
		<AppContainer>
			<Provider store={store}>
				<Router>
					<RootElement/>
				</Router>
			</Provider>
		</AppContainer>
		,document.getElementById('app')
	)
}


