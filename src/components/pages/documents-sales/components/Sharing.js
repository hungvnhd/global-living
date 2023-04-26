import React from "react";
import { SiZalo } from "react-icons/si";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";

const Sharing = () => {
	return (
		<p>
			Chia sẻ: <SiZalo style={{ fontSize: "50px", cursor: "pointer" }} />{" "}
			|{" "}
			<RiMessengerLine style={{ fontSize: "30px", cursor: "pointer" }} />{" "}
			| <AiOutlineLink style={{ fontSize: "30px", cursor: "pointer" }} />
		</p>
	);
};

export default Sharing;
