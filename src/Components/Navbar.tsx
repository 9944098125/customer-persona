import React from "react";
import logo from "../Assets/logo.webp";

const Navbar = () => {
	return (
		<React.Fragment>
			<div className="bg-white fixed shadow-lg w-full h-[70px] px-10 flex items-center">
				{/* logo */}
				<div className="flex items-center space-x-2">
					<img
						src={logo}
						alt=""
						style={{ height: "40px", width: "40px", borderRadius: "50%" }}
					/>
					<h4 className="text-xl text-violet-700 font-bold">
						Customer 360 View
					</h4>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Navbar;
