import CommonModal from "@/components/common/Modal";
import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import DocumentSavedItem from "../components/DocumentSavedItem";
import { DocumentsSalesContext } from "..";
import DocumentSaveModalItem from "../components/DocumentSaveModalItem";
import { MdSaveAlt } from "react-icons/md";

const DocumentsSalesCart = () => {
	const { projectName } = useContext(DocumentsSalesContext);
	const [data, setData] = useState([]);
	const [open, setOpen] = useState(false);
	const [apartment, setApartment] = useState("");
	const dataModal = [
		{
			title: "Bộ ảnh",
			picturePath: "/images/documents-sales/cart-1.jpg",
		},
		{
			title: "Bản đồ",
			picturePath: "/images/documents-sales/cart-2.jpg",
		},
		{
			title: "Thông tin chi tiết",
			picturePath: "/images/documents-sales/cart-3.jpg",
		},
	];

	useEffect(() => {
		if (projectName === "hungary1") {
			setData([
				{
					title: "Căn 1.1",
					picturePath: "/images/documents-sales/cart-1.jpg",
				},
				{
					title: "Căn 1.2",
					picturePath: "/images/documents-sales/cart-2.jpg",
				},
				{
					title: "Căn 1.3",
					picturePath: "/images/documents-sales/cart-3.jpg",
				},
			]);
		} else {
			setData([
				{
					title: "Căn 1.4",
					picturePath: "/images/documents-sales/cart-4.jpg",
				},
				{
					title: "Căn 1.5",
					picturePath: "/images/documents-sales/cart-5.jpg",
				},
			]);
		}
	}, [projectName]);

	const handleOpenModal = (data) => {
		setApartment(data);
		setOpen(true);
	};

	const handleCloseModal = () => {
		setOpen(false);
	};

	return (
		<div className="DocumentsSales__saved">
			<h2>Giỏ hàng</h2>

			<Row gutter={50} wrap>
				{data.map((item, index) => {
					return (
						<Col span={6} key={index}>
							<DocumentSavedItem
								title={item.title}
								picturePath={item.picturePath}
								onClick={() => handleOpenModal(item.title)}
							/>
						</Col>
					);
				})}
			</Row>

			<CommonModal open={open} onClose={handleCloseModal}>
				<div className="custom-modal-inner">
					<h2>
						Giỏ hàng | {apartment}{" "}
						<MdSaveAlt
							style={{
								fontSize: "30px",
								cursor: "pointer",
								marginLeft: "10px",
							}}
						/>
					</h2>

					<Row
						gutter={12}
						style={{ marginBottom: "20px" }}
						className="DocumentsSaved__list-modal-detail"
					>
						<Col span={16}>
							<div className="detail-image">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>
								<i>Vị trí trung tâm Budapest: 1073 Budapest</i>
							</div>
						</Col>

						<Col span={8}>
							<p>Thông tin chung:</p>
							<p>Diện tích: 45m vuông</p>
							<p>Loại hình: Căn hộ Studio</p>
							<p>01 phòng ngủ</p>
						</Col>
					</Row>

					<Row gutter={12}>
						{dataModal?.map((item, index) => {
							return (
								<Col span={12} style={{ marginBottom: "30px" }}>
									<DocumentSaveModalItem
										title={`${item.title} ${apartment}`}
										picturePath={item.picturePath}
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

export default DocumentsSalesCart;
