import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";
import { DocumentsSalesContext } from "..";
import DocumentSavedItem from "../components/DocumentSavedItem";

const DocumentsSalesIndentifier = () => {
	const { projectName } = useContext(DocumentsSalesContext);
	const [data, setData] = useState([]);

	useEffect(() => {
		if (projectName === "hungary1") {
			setData([1, 2, 3]);
		} else {
			setData([1, 2]);
		}
	}, [projectName]);

	return (
		<div className="DocumentsSales__saved">
			<h2>Bộ nhận diện</h2>

			<Row wrap gutter={50}>
				<Col span={6}>
					<DocumentSavedItem
						title={"Logo"}
						picturePath={"/images/documents-sales/cart-1.jpg"}
						onClick={() =>
							window.open(
								"https://drive.google.com/drive/folders/1ZlbuMuSjTVY8Uu9yVypOznQ1Kh5fCR1G?usp=sharing"
							)
						}
					/>
				</Col>

				<Col span={6}>
					<DocumentSavedItem
						title={"Branding Guidelines"}
						picturePath={"/images/documents-sales/cart-2.jpg"}
						onClick={() =>
							window.open(
								"https://drive.google.com/file/d/1r9mUB579425cq0h9jlzJr_8G85OAeRF8/view?usp=sharing"
							)
						}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default DocumentsSalesIndentifier;
