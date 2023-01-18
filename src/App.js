import './App.css';
import React, {memo} from "react";
import ReduxSAgaExample from "./ReduxSagaExample";
import ReduxComponent from "./ReduxComponent";

const App = memo(() => {


	return (
		<div className="App">
			<ReduxComponent/>
			<ReduxSAgaExample/>
		</div>
	);
});

export default App;
