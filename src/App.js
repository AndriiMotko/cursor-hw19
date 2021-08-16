import "./App.css";
import React from "react";
import {
	BrowserRouter as Router,
	Switch,
	Route,
	NavLink,
} from "react-router-dom";
import MainPage from "./components/MainPage";
import Post from "./components/Post.jsx";
import Photos from "./components/Photos.jsx";
import Contacts from "./components/Contacts.jsx";

import anakinIcon from "./assets/anakin.jpg";
import rayPhoto from "./assets/ray.jpg";
import lukePhoto from "./assets/luke.jpg";


function App() {
  return (
      <div className="wrapper">
        <Router basename="/cursor-hw19">
			<>
				<nav>
					<NavLink exact to="/">Home</NavLink>
					<NavLink to="/publications">Publications</NavLink>
					<NavLink to="/photos">Photos</NavLink>
					<NavLink to="/contacts">Contacts</NavLink>
				</nav>
				<Switch>
					<Route exact path="/" component={MainPage} />
					<Route path="/publications">
						<Post
							author={{
								name: "Anakin skywalker",
								photo: anakinIcon,
								nickname: "@dart_vader",
							}}
							content="WTF? Who is Ray? Why she is Skywalker? Luke...?"
							image={rayPhoto}
							date={"26 febr."}
						/>
						<Post
							author={{
								name: "Anakin skywalker",
								photo: anakinIcon,
								nickname: "@dart_vader",
							}}
							content="How are you, Luke ?"
							image={lukePhoto}
							date={"03 apr."}
						/>
					</Route>
					<Route path="/photos" component={Photos} />
					<Route path="/contacts" component={Contacts} />
				</Switch>
			</>
		</Router>
      </div>
  );
}

export default App;
