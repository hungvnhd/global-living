import React from "react";

const Contact = () => {
	return (
		<section className="Contact">
			<div className="Contact__inner">
				<form>
					<input type="text" placeholder="Họ và tên" />
					<input type="text" placeholder="Email" />
					<input type="text" placeholder="Số điện thoại" />
					<input type="text" placeholder="Sản phẩm quan tâm" />
					<input type="text" placeholder="Mức đầu tư dự kiến" />
					<input type="submit" value="Đăng ký" />
				</form>
				<div className="Contact__detail">
					<h2>CONTACT</h2>
					<p>
						Hãy để Global Living đồng hành cùng bạn trên hành trình
						đầu tư bất động sản quốc tế và trở thành một công dân
						đẳng cấp toàn cầu
					</p>
				</div>
			</div>
		</section>
	);
};

export default Contact;
