import CommonModal from "@/components/common/Modal";
import { DownloadOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import React, { useState } from "react";
import Slider from "react-slick";
import DocumentSavedItem from "../components/DocumentSavedItem";

const DocumentsSalesShowInformation = () => {
	const [open, setOpen] = useState(false);
	const [openPresentation, setOpenPresentation] = useState(false);
	const [openProgress, setOpenProgress] = useState(false);
	const settings = {
		arrows: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 1,
	};
	const data = [
		{
			key: "invest",
			title: "Đầu tư & định cư Hungary",
			picturePath: "/images/documents-sales/cart-1.jpg",
		},
		{
			key: "qa",
			title: "Q&A",
			picturePath: "/images/documents-sales/cart-2.jpg",
		},
		{
			key: "progress",
			title: "Quy trình & thủ tục",
			picturePath: "/images/documents-sales/cart-3.jpg",
		},
		{
			key: "presentation",
			title: "Bài thuyết trình",
			picturePath: "/images/documents-sales/cart-4.jpg",
		},
		{
			key: "moreAboutShow",
			title: "Các thông tin tham khảo về chương trình",
			picturePath: "/images/documents-sales/cart-5.jpg",
		},
		{
			key: "check",
			title: "Khảo sát Hungary",
			picturePath: "/images/documents-sales/document-sale-1.png",
		},
	];

	const handleOpenModal = (type) => {
		switch (type) {
			case "presentation":
				setOpenPresentation(true);
				break;
			case "progress":
				setOpenProgress(true);
				break;
			case "":
			default:
				break;
		}
	};

	const handleCloseModalPresentation = () => {
		setOpenPresentation(false);
	};

	const handleCloseModalProgress = () => {
		setOpenProgress(false);
	};

	return (
		<div className="DocumentsSales__saved">
			<h2>Thông tin chương trình</h2>

			<Slider {...settings}>
				{data.map((item) => {
					return (
						<DocumentSavedItem
							title={item.title}
							picturePath={item.picturePath}
							onClick={() => handleOpenModal(item.key)}
							isSlide
						/>
					);
				})}
			</Slider>

			<CommonModal open={openProgress} onClose={handleCloseModalProgress}>
				<div className="custom-modal-inner">
					<h2>Thông tin chương trình | Quy trình & thủ tục</h2>
					<h2>Quy trình và tiến độ</h2>
					<Row gutter={12}>
						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Quy trình đầu tư</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Chi phí và tiến độ thanh toán</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
					</Row>

					<h2>Hướng dẫn thuế & phí</h2>
					<Row gutter={12}>
						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Hướng dẫn về thuế & phí</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Thuế BDS Hungary</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</CommonModal>

			<CommonModal
				open={openPresentation}
				onClose={handleCloseModalPresentation}
			>
				<div className="custom-modal-inner">
					<h2>Thông tin chương trình | Bài thuyết trình</h2>
					<Row gutter={12}>
						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>Video đầu chương trình</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua:</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>PPT 130423</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua:</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>

						<Col span={12} style={{ marginBottom: "30px" }}>
							<div className="CartItemModal">
								<img
									src="/images/lau_dai_thanh_thang_ninh_binh_9.jpg"
									alt="image"
								/>

								<div className="CartItemModal__detail">
									<h2>PPT 080423</h2>
									<DownloadOutlined
										style={{
											fontSize: "30px",
											cursor: "pointer",
										}}
									/>
									<p>Chia sẻ qua:</p>
									<p>Zalo | Messenger | Link</p>
								</div>
							</div>
						</Col>
					</Row>
				</div>
			</CommonModal>
		</div>
	);
};

export default DocumentsSalesShowInformation;
