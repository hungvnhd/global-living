import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import DocumentsSalesItem from "../SalesItem";

const documents = [
	{
		key: "hungary1",
		name: "Hungary1",
	},
	{
		key: "hungary2",
		name: "Hungary2",
	},
];

const LatestDocuments = () => {
	const [documentName, setDocumentName] = useState("");
	const [data, setData] = useState([]);

	useEffect(() => {
		if (documentName === "hungary1") {
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

			<div className="DocumentsSaved__list">
				{data?.map((item, index) => {
					return <DocumentsSalesItem />;
				})}
			</div>
		</div>
	);
};

export default LatestDocuments;
