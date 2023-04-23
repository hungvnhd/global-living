import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
	const { register, handleSubmit, reset } = useForm();

	const onSubmit = (data) => {
		console.log("jtadd", data);
		axios.post(
			`https://global-living-backend.vercel.app/api/v1/customerinfo`,
			data
		);
		reset();
	};

	return (
		<section className="Contact">
			<div className="Contact__inner">
				<form onSubmit={handleSubmit(onSubmit)}>
					<input
						type="text"
						placeholder="Họ và tên"
						required
						{...register("full_name")}
					/>
					<input
						type="email"
						placeholder="Email"
						required
						{...register("email")}
					/>
					<input
						type="text"
						placeholder="Số điện thoại"
						required
						{...register("phone")}
					/>
					<input
						type="text"
						placeholder="Sản phẩm quan tâm"
						required
						{...register("product")}
					/>
					<input
						type="number"
						placeholder="Mức đầu tư dự kiến"
						required
						{...register("investment")}
					/>
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
