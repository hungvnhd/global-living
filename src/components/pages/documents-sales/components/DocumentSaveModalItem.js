import React from "react";
import { MdSaveAlt } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";

const DocumentSaveModalItem = ({ picturePath, title, onClick }) => {
	return (
		<div className="CartItemModal">
			<img src={picturePath} alt="image" onClick={onClick} />

			<div className="CartItemModal__detail">
				<h2>{title}</h2>
				<MdSaveAlt
					style={{
						fontSize: "30px",
						cursor: "pointer",
						marginBottom: "10px",
					}}
				/>
				<p>Chia sẻ qua:</p>
				<p>
					<SiZalo style={{ fontSize: "50px", cursor: "pointer" }} /> |{" "}
					<RiMessengerLine
						style={{ fontSize: "30px", cursor: "pointer" }}
					/>{" "}
					|{" "}
					<AiOutlineLink
						style={{ fontSize: "30px", cursor: "pointer" }}
					/>
				</p>
			</div>
		</div>
	);
};

export default DocumentSaveModalItem;
