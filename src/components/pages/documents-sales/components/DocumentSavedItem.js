import React from "react";
import { MdSaveAlt } from "react-icons/md";
import Sharing from "./Sharing";

const DocumentSavedItem = ({ onClick, picturePath, title, isSlide }) => {
	return (
		<div
			className="DocumentsSaved__item"
			style={isSlide && { margin: "0 20px" }}
		>
			<img src={picturePath} alt="image" onClick={onClick} />

			<div className="DocumentsSaved__item-content">
				<p>
					{title} |{" "}
					<MdSaveAlt
						style={{ fontSize: "30px", cursor: "pointer" }}
					/>
				</p>
				<Sharing />
			</div>
		</div>
	);
};

export default DocumentSavedItem;
