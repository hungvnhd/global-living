import CommonModal from "@/components/common/Modal";
import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { DocumentsSalesContext } from "..";
import DocumentsSalesItem from "../SalesItem";
import ShowInfoItemModal from "./ShowInfoItemModal";

const DocumentsSalesShowInformation = () => {
	const { projectName } = useContext(DocumentsSalesContext);
	const [data, setData] = useState([]);
	const [open, setOpen] = useState(false);

	useEffect(() => {
		if (projectName === "hungary1") {
			setData([1, 2, 3]);
		} else {
			setData([1, 2]);
		}
	}, [projectName]);

	const handleOpenModal = () => {
		setOpen(true);
	};

	const handleCloseModal = () => {
		setOpen(false);
	};

	return (
		<div className="DocumentsSales__saved">
			<h2>Thông tin chương trình</h2>

			<div className="DocumentsSaved__list">
				{data?.map((item, index) => {
					return <DocumentsSalesItem onClick={handleOpenModal} />;
				})}
			</div>

			<CommonModal open={open} onClose={handleCloseModal}>
				<div className="custom-modal-inner">
					<h2>Quy trình & thủ tục</h2>
					<h2>Quy trình và tiến độ</h2>
					<Row gutter={12}>
						{[1, 2]?.map((item, index) => {
							return (
								<Col span={12} style={{ marginBottom: "30px" }}>
									<ShowInfoItemModal />
								</Col>
							);
						})}
					</Row>

					<h2>Hướng dẫn thuế & phí</h2>
					<Row gutter={12}>
						{[1, 2]?.map((item, index) => {
							return (
								<Col span={12} style={{ marginBottom: "30px" }}>
									<ShowInfoItemModal />
								</Col>
							);
						})}
					</Row>
				</div>
			</CommonModal>
		</div>
	);
};

export default DocumentsSalesShowInformation;
