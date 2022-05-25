import logo from './logo.svg';
import './App.css';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from './components/Dashboard/Dashboard';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/' element={<Dashboard/>}></Route>
				<Route index path='/login' element={<Login/>}></Route>
				<Route path='/signup' element={<Signup/>}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
