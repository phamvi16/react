import React from 'react';
// import coder from './codersX.png'
import './App.css';
import Goback from './components/Goback';
import CodersX from './components/codersX';
import SignIn from './components/SignIn'
import Username from './components/Username'
import Password from './components/Password'
import SignUp from './components/SignUp'
import KeepSignIn from './components/KeepSignIn'
import Forgot from './components/Forgot'

function App() {
  return (
		<div className="App">
			<Goback />
			<CodersX />
			{/* <img
				src={coder}
				style={{
					height: 30,
				}}
			/> */}
      <SignIn/>
      <Username/>
      <Password/>
      <SignUp/>
      <KeepSignIn/>
      <Forgot/>
		</div>
  );
}

export default App;
