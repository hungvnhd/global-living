import CommonModal from "@/components/common/Modal";
import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { DocumentsSalesContext } from "..";
import DocumentsSalesItem from "../SalesItem";
import MediaMaterialItemModal from "./MediaMaterialItemModal";
import DetailItemModal from "./DetailItemModal";

const DocumentsSalesMediaMaterial = () => {
	const { projectName } = useContext(DocumentsSalesContext);
	const [data, setData] = useState([]);
	const [open, setOpen] = useState(false);
	const [openDetail, setOpenDetail] = useState(false);

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

	const handleOpenModalDetail = () => {
		setOpenDetail(true);
	};

	const handleCloseModalDetail = () => {
		setOpenDetail(false);
	};

	return (
		<div className="DocumentsSales__saved">
			<h2>Tư liệu truyền thông</h2>

			<div className="DocumentsSaved__list">
				{data?.map((item, index) => {
					return <DocumentsSalesItem onClick={handleOpenModal} />;
				})}
			</div>

			<CommonModal open={open} onClose={handleCloseModal}>
				<div className="custom-modal-inner">
					<h2>Ảnh</h2>
					<h2>Post Facebook</h2>
					<Row gutter={12}>
						{[1, 2]?.map((item, index) => {
							return (
								<Col span={12}>
									<MediaMaterialItemModal
										onClick={handleOpenModalDetail}
									/>
								</Col>
							);
						})}
					</Row>

					<h2>Ảnh KV</h2>
					<Row gutter={12}>
						{[1, 2]?.map((item, index) => {
							return (
								<Col span={12}>
									<MediaMaterialItemModal />
								</Col>
							);
						})}
					</Row>

					<h2>Ảnh sự kiện</h2>
					<Row gutter={12}>
						{[1, 2]?.map((item, index) => {
							return (
								<Col span={12}>
									<MediaMaterialItemModal />
								</Col>
							);
						})}
					</Row>
				</div>
			</CommonModal>

			<CommonModal open={openDetail} onClose={handleCloseModalDetail}>
				<div className="custom-modal-inner">
					<h2>Ảnh | Post Facebook | Tháng 3</h2>
					<Row gutter={12}>
						{[1, 2]?.map((item, index) => {
							return (
								<Col span={12}>
									<DetailItemModal />
								</Col>
							);
						})}
					</Row>
				</div>
			</CommonModal>
		</div>
	);
};

export default DocumentsSalesMediaMaterial;
