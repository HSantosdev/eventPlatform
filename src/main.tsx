import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
import {App} from './App';
=======
import { App } from './App';
import { client } from './lib/apollo';
import { ApolloProvider } from '@apollo/client';
>>>>>>> dev

import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<ApolloProvider client={client}>
			<App />
		</ApolloProvider>
	</React.StrictMode>
)
