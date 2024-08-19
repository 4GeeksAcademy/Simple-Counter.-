import React from "react";
import Card from "./Card.jsx";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = ({seconds}) => {
	return (
		<div className="container-fluid d-flex h-full justify-content-center gap-2 mt-5">
			<Card number={<i class="fa-solid fa-clock" style={{ fontSize: '30px' }}></i>}/>
			<Card number={Math.floor(seconds % 1000000 / 10000)}/>
			<Card number={Math.floor(seconds % 100000 / 10000)}/>
			<Card number={Math.floor(seconds % 10000 / 1000)}/>
			<Card number={Math.floor(seconds % 1000 / 100)}/>
			<Card number={Math.floor(seconds % 100 / 10)}/>
			<Card number={seconds % 10}/>
		</div>
	
	);
};

export default Home;
