import "./App.scss";
import Btns from "./componets/Btns";
import Grid from "./componets/Grid";
import Header from "./componets/Header";

function App() {



	return (
		<div className="App">
			<Header/>
			<div className="container">
				<h1><span>Luxe Quality </span>Blog</h1>
			<Btns/>
			<Grid/>
			</div>
		</div>
	)
}

export default App;