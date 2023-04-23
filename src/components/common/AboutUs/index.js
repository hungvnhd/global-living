import React from "react";
import { useState } from "react";

const AboutUs = () => {
	const [isZoom, setIsZoom] = useState(false);

	const handleZoom = () => {
		setIsZoom((prev) => !prev);
	};

	return (
		<section className="AboutUs">
			<div
				className="AboutUs__bg AboutUs__locate"
				style={
					isZoom
						? {
								width: "20vw",
						  }
						: undefined
				}
			>
				<img src="/images/vision-bg-1.png" alt="icon" />
				<div className="overlay" />
				<div className="AboutUs__logo">
					<div className="AboutUs__logo-icon">
						<img src="/images/icons/vision-icon-1.png" alt="icon" />
					</div>
					<h2>ĐỊNH VỊ THƯƠNG HIỆU</h2>
				</div>
			</div>

			<div
				className="AboutUs__bg AboutUs__vision"
				onClick={handleZoom}
				style={
					isZoom
						? {
								width: "60vw",
								zIndex: 10,
								cursor: "pointer",
						  }
						: undefined
				}
			>
				<img
					src="/images/vision-bg-2-hover.png"
					alt="icon"
					className="AboutUs__vision-bg"
				/>
				<div className="AboutUs__logo" style={{ cursor: "pointer" }}>
					{!isZoom ? (
						<>
							<div className="AboutUs__logo-icon">
								<img
									src="/images/icons/vision-icon-2.png"
									alt="icon"
								/>
							</div>
							<h2>TẦM NHÌN</h2>
						</>
					) : (
						<></>
					)}
				</div>

				<div
					className="AboutUs__vision-text"
					style={{ opacity: isZoom ? 1 : 0 }}
				>
					<h3>TẦM NHÌN</h3>
					<p>
						Global Living định hướng trở thành đơn vị tiên phong
						trong lĩnh vực đầu tư và phát triển bất động sản cao
						cấp. Với sự tận tâm và chuyên nghiệp, chúng tôi luôn đặt
						mục tiêu mang đến cho khách hàng những cơ hội đầu tư đắt
						giá và tấm thẻ định cư quyền lực, tại những quốc gia mà
						sự tiến bộ và tiềm năng phát triển còn rất lớn. Chúng
						tôi luôn nỗ lực không ngừng để giữ vững được vị thế
						trong tâm trí khách hàng là một đơn vị uy tín với chất
						lượng dịch vụ hàng đầu.
					</p>
				</div>
			</div>

			<div
				className="AboutUs__bg AboutUs__mission"
				style={
					isZoom
						? {
								width: "20vw",
						  }
						: undefined
				}
			>
				<img src="/images/vision-bg-3.png" alt="icon" />
				<div className="overlay" />
				<div className="AboutUs__logo">
					<div className="AboutUs__logo-icon">
						<img src="/images/icons/vision-icon-3.png" alt="icon" />
					</div>
					<h2>SỨ MỆNH</h2>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;
