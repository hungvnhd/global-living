import CommonModal from "@/components/common/Modal";
import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import Link from "next/link";
import React, { useState } from "react";
import DocumentSavedItem from "../components/DocumentSavedItem";
import DocumentSaveModalItem from "../components/DocumentSaveModalItem";

const DocumentsSalesSection = () => {
	const [openFlyer, setOpenFlyer] = useState(false);
	const [openSalesKit, setOpenSalesKit] = useState(false);
	const data = [
		{
			key: "salesKit",
			title: "Sales kit",
			picturePath: "/images/documents-sales/document-sale-1.png",
		},
		{
			key: "flyer",
			title: "Flyer",
			picturePath: "/images/documents-sales/document-sale-2.png",
		},
	];
	const flyerData = [
		{
			key: "flyer1",
			title: "Flyer ver 1",
			picturePath: "/images/documents-sales/document-sale-1.png",
			url: "https://drive.google.com/file/d/1H9VssdDfsw8MmoYhvBOkZIMscRMZQV_E/view?usp=sharing",
		},
		{
			key: "flyer2",
			title: "Flyer ver 2",
			picturePath: "/images/documents-sales/document-sale-1.png",
			url: "https://drive.google.com/file/d/1EyWM2fsfdPEa_cnGhAJgIV30jhQosPJi/view?usp=sharing",
		},
	];
	const salesKitData = [
		{
			key: "saleskit1",
			title: "Sales kit",
			picturePath: "/images/documents-sales/document-sale-2.png",
			url: "https://drive.google.com/file/d/1OH8eRGVp0EBFtgOLsPZ7bGH7U5GV3JJb/view?usp=sharing",
		},
	];

	const handleOpenModal = (type) => {
		if (type === "flyer") {
			setOpenFlyer(true);
		} else if (type === "salesKit") {
			setOpenSalesKit(true);
		}
	};

	const handleCloseModalFlyer = () => {
		setOpenFlyer(false);
	};

	const handleCloseModalSalesKit = () => {
		setOpenSalesKit(false);
	};

	return (
		<div className="DocumentsSales__saved">
			<h2>Tài liệu bán hàng</h2>

			<Row wrap gutter={50}>
				{data.map((item) => {
					return (
						<Col span={6} key={item.key}>
							<DocumentSavedItem
								title={item.title}
								picturePath={item?.picturePath}
								onClick={() => handleOpenModal(item.key)}
							/>
						</Col>
					);
				})}
			</Row>

			<CommonModal open={openFlyer} onClose={handleCloseModalFlyer}>
				<div className="custom-modal-inner">
					<h2>Tài liệu bán hàng | Flyer</h2>
					<Row gutter={30} wrap>
						{flyerData.map((item, index) => {
							return (
								<Col span={12} key={item.key}>
									<DocumentSaveModalItem
										title={item.title}
										picturePath={item.picturePath}
										onClick={() => window.open(item.url)}
									/>
								</Col>
							);
						})}
					</Row>
				</div>
			</CommonModal>

			<CommonModal open={openSalesKit} onClose={handleCloseModalSalesKit}>
				<div className="custom-modal-inner">
					<h2>Tài liệu bán hàng | Sales kit</h2>
					<Row gutter={12}>
						{salesKitData.map((item, index) => {
							return (
								<Col span={12} key={item.key}>
									<DocumentSaveModalItem
										title={item.title}
										picturePath={item.picturePath}
										onClick={() => window.open(item.url)}
									/>
								</Col>
							);
						})}
					</Row>
				</div>
			</CommonModal>
		</div>
	);
};

export default DocumentsSalesSection;
