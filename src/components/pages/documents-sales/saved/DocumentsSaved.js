import { Col, Row } from "antd";
import React from "react";

const DocumentsSaved = () => {
	return (
		<div className="DocumentsSales__saved">
			<h2>
				Tài liệu đã lưu về:
				<p>Hungary</p>
			</h2>

			<Row wrap gutter={50}>
				<Col span={6} className="DocumentsSaved__item">
					<img src="/images/documents-sales/cart-1.jpg" alt="image" />
				</Col>
			</Row>
		</div>
	);
};

export default DocumentsSaved;
