import CommonModal from "@/components/common/Modal";
import { Col, Row } from "antd";
import React, { useContext, useEffect, useState } from "react";
import { DocumentsSalesContext } from "..";
import { MdSaveAlt } from "react-icons/md";
import { SiZalo } from "react-icons/si";
import { RiMessengerLine } from "react-icons/ri";
import { AiOutlineLink } from "react-icons/ai";
import Sharing from "../components/Sharing";

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

			<Row wrap gutter={50}>
				<Col span={6} className="DocumentsSaved__item">
					<img
						src="/images/documents-sales/cart-1.jpg"
						alt="image"
						onClick={handleOpenModal}
					/>

					<div className="DocumentsSaved__item-content">
						<p>
							Ảnh |{" "}
							<MdSaveAlt
								style={{
									fontSize: "30px",
									cursor: "pointer",
									marginBottom: "10px",
								}}
							/>
						</p>
						<Sharing />
					</div>
				</Col>

				<Col span={6} className="DocumentsSaved__item">
					<img src="/images/documents-sales/cart-2.jpg" alt="image" />

					<div className="DocumentsSaved__item-content">
						<p>
							Video |{" "}
							<MdSaveAlt
								style={{
									fontSize: "30px",
									cursor: "pointer",
									marginBottom: "10px",
								}}
							/>
						</p>
						<Sharing />
					</div>
				</Col>

				<Col span={6} className="DocumentsSaved__item">
					<img src="/images/documents-sales/cart-3.jpg" alt="image" />

					<div className="DocumentsSaved__item-content">
						<p>
							Tư liệu thô |{" "}
							<MdSaveAlt
								style={{
									fontSize: "30px",
									cursor: "pointer",
									marginBottom: "10px",
								}}
							/>
						</p>
						<Sharing />
					</div>
				</Col>
			</Row>

			<CommonModal open={open} onClose={handleCloseModal}>
				<div className="custom-modal-inner">
					<h2>Tư liệu truyền thông | Ảnh</h2>
					<h2>Post Facebook</h2>
					<Row gutter={20}>
						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
							>
								<img
									src="/images/documents-sales/cart-1.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										Tháng 3 |{" "}
										<MdSaveAlt
											style={{
												fontSize: "30px",
												cursor: "pointer",
												marginBottom: "10px",
											}}
										/>
									</p>
									<Sharing />
								</div>
							</div>
						</Col>
						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/documents-sales/cart-2.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										Tháng 4 |{" "}
										<MdSaveAlt
											style={{
												fontSize: "30px",
												cursor: "pointer",
												marginBottom: "10px",
											}}
										/>
									</p>
									<Sharing />
								</div>
							</div>
						</Col>
					</Row>

					<h2>Ảnh KV</h2>
					<Row gutter={20}>
						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/documents-sales/cart-3.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										Sải cánh vươn xa |{" "}
										<MdSaveAlt
											style={{
												fontSize: "30px",
												cursor: "pointer",
												marginBottom: "10px",
											}}
										/>
									</p>
									<Sharing />
								</div>
							</div>
						</Col>

						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/documents-sales/cart-1.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										Giới thiệu chương trình |{" "}
										<MdSaveAlt
											style={{
												fontSize: "30px",
												cursor: "pointer",
												marginBottom: "10px",
											}}
										/>
									</p>
									<Sharing />
								</div>
							</div>
						</Col>
					</Row>

					<h2>Ảnh sự kiện</h2>
					<Row gutter={20}>
						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/documents-sales/cart-4.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										SK đào tạo HN 11.2 |{" "}
										<MdSaveAlt
											style={{
												fontSize: "30px",
												cursor: "pointer",
												marginBottom: "10px",
											}}
										/>
									</p>
									<Sharing />
								</div>
							</div>
						</Col>

						<Col span={12}>
							<div
								className="MediaMaterialItemModal"
								style={{ cursor: "pointer" }}
								onClick={handleOpenModalDetail}
							>
								<img
									src="/images/documents-sales/cart-2.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>
										SK đào tạo HN 10.3 |{" "}
										<MdSaveAlt
											style={{
												fontSize: "30px",
												cursor: "pointer",
												marginBottom: "10px",
											}}
										/>
									</p>
									<Sharing />
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</CommonModal>

			<CommonModal open={openDetail} onClose={handleCloseModalDetail}>
				<div className="custom-modal-inner">
					<h2>
						Tư liệu truyền thông | Ảnh | Post Facebook | Tháng 4
					</h2>
					<Row gutter={12} wrap>
						<Col span={12}>
							<div className="CartItemModal">
								<img
									src="/images/documents-sales/cart-3.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>20232</p>
									<MdSaveAlt
										style={{
											fontSize: "30px",
											cursor: "pointer",
											marginBottom: "10px",
										}}
									/>
									<p>Chia sẻ qua:</p>
									<p>
										<SiZalo
											style={{
												fontSize: "50px",
												cursor: "pointer",
											}}
										/>{" "}
										|{" "}
										<RiMessengerLine
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>{" "}
										|{" "}
										<AiOutlineLink
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>
									</p>
								</div>
							</div>
						</Col>

						<Col span={12}>
							<div className="CartItemModal">
								<img
									src="/images/documents-sales/cart-4.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>20232</p>
									<MdSaveAlt
										style={{
											fontSize: "30px",
											cursor: "pointer",
											marginBottom: "10px",
										}}
									/>
									<p>Chia sẻ qua:</p>
									<p>
										<SiZalo
											style={{
												fontSize: "50px",
												cursor: "pointer",
											}}
										/>{" "}
										|{" "}
										<RiMessengerLine
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>{" "}
										|{" "}
										<AiOutlineLink
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>
									</p>
								</div>
							</div>
						</Col>

						<Col span={12}>
							<div className="CartItemModal">
								<img
									src="/images/documents-sales/cart-1.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>20232</p>
									<MdSaveAlt
										style={{
											fontSize: "30px",
											cursor: "pointer",
											marginBottom: "10px",
										}}
									/>
									<p>Chia sẻ qua:</p>
									<p>
										<SiZalo
											style={{
												fontSize: "50px",
												cursor: "pointer",
											}}
										/>{" "}
										|{" "}
										<RiMessengerLine
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>{" "}
										|{" "}
										<AiOutlineLink
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>
									</p>
								</div>
							</div>
						</Col>

						<Col span={12}>
							<div className="CartItemModal">
								<img
									src="/images/documents-sales/cart-5.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<p>20232</p>
									<MdSaveAlt
										style={{
											fontSize: "30px",
											cursor: "pointer",
											marginBottom: "10px",
										}}
									/>
									<p>Chia sẻ qua:</p>
									<p>
										<SiZalo
											style={{
												fontSize: "50px",
												cursor: "pointer",
											}}
										/>{" "}
										|{" "}
										<RiMessengerLine
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>{" "}
										|{" "}
										<AiOutlineLink
											style={{
												fontSize: "30px",
												cursor: "pointer",
											}}
										/>
									</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</CommonModal>
		</div>
	);
};

export default DocumentsSalesMediaMaterial;
