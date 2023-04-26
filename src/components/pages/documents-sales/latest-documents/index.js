import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DocumentSavedItem from "../components/DocumentSavedItem";

const documents = [
	{
		key: "hungary",
		name: "Hungary",
	},
];

const LatestDocuments = () => {
	const [documentName, setDocumentName] = useState("");
	const [data, setData] = useState([1, 2, 3]);

	useEffect(() => {
		if (documentName === "hungary") {
			setData([1, 2, 3]);
		} else {
			setData([1, 2]);
		}
	}, [documentName]);

	return (
		<div className="DocumentsSales__saved">
			<h2>
				Tài liệu mới nhất về:
				{documents?.map((document) => {
					return (
						<p
							key={document?.key}
							onClick={() => setDocumentName(document?.key)}
						>
							{document?.name}
						</p>
					);
				})}
			</h2>

			<Row wrap gutter={50}>
				<Col span={6}>
					<DocumentSavedItem
						title={"Đầu tư & định cư Hungary"}
						picturePath={"/images/documents-sales/cart-3.jpg"}
					/>
				</Col>
				<Col span={6}>
					<DocumentSavedItem
						title={"Đầu tư & định cư Hungary"}
						picturePath={"/images/documents-sales/cart-1.jpg"}
					/>
				</Col>
				<Col span={6}>
					<DocumentSavedItem
						title={"Branding Guidelines"}
						picturePath={"/images/documents-sales/cart-2.jpg"}
					/>
				</Col>
			</Row>
		</div>
	);
};

export default LatestDocuments;
