import { useCallback } from "react";
import { useRouter } from "next/router";
import styles from "./ChiTitBiVit.module.css";
import { Select, Space } from 'antd';
import { ClockCircleOutlined ,UserOutlined } from '@ant-design/icons';
import { Footer } from "@/components/common";

const ChiTitBiVit = () => {
    const router = useRouter();

    const onNgNhpIClick = useCallback(() => {
        router.push("/FromNgNhp");
    }, [router]);

    const onTinTcTextClick = useCallback(() => {
        router.push("/TinTc");
    }, [router]);
    const { Option } = Select;
    const handleChange = (value) => {
        console.log(`selected ${value}`);
    };

    return (

        <div className={styles.chiTitBiVit}>
            <div className={styles.body01}>
                <div className={styles.header1}>
                    <div className={styles.chiTitBiVitItem} />
                    <div className={styles.btNgSn}>BẤT ĐỘNG SẢN GLOVAL LIVING</div>
                    <div className={styles.tinTcTh}>Tin tức thị trường</div>
                    <div className={styles.admin}><UserOutlined />admin</div>
                    <div className={styles.div}><ClockCircleOutlined /><span className={styles.time}>28/03/2023</span></div>
                </div>
                <div className={styles.selectdropdown}>
                    
                    <Select
                        style={{
                            width: '100%',
                            height: "35px",
                        }}
                        status="warning"
                        placeholder="select one country"
                        defaultValue={['DANH MỤC NỘI DUNG1']}
                        onChange={handleChange}
                        optionLabelProp="label"
                    >
                        <Option value="DANH MỤC NỘI DUNG1" label="DANH MỤC NỘI DUNG1">
                            <Space>
                                DANH MỤC NỘI DUNG1
                            </Space>
                        </Option>
                        <Option value="DANH MỤC NỘI DUNG2" label="DANH MỤC NỘI DUNG2">
                            <Space>
                                DANH MỤC NỘI DUNG2
                            </Space>
                        </Option>
                        <Option value="DANH MỤC NỘI DUNG3" label="DANH MỤC NỘI DUNG3">
                            <Space>
                                DANH MỤC NỘI DUNG3
                            </Space>
                        </Option>
                        <Option value="DANH MỤC NỘI DUNG4" label="DANH MỤC NỘI DUNG4">
                            <Space>
                                DANH MỤC NỘI DUNG4
                            </Space>
                        </Option>
                    </Select>
                    
                </div>
                <div className={styles.thamKhoNhng}>
                    Tham khảo những gợi ý về bố cục phong thủy năm 2023 từ chuyên gia phong
                    thủy Hong Kong – ông Long Chấn Thiên, sẽ giúp bạn biết được các hướng
                    hung – cát trong ngôi nhà ra sao.
                    <img
                        className={styles.rectangleIcon}
                        alt=""
                        src="imgchitietbaiviet/rectangle-137@2x.png"
                    />
                </div>
                <div className={styles.bCcPhongContainer}>
                    <p className={styles.bCcPhong}>1. Bố cục phong thủy năm 2023 Quý Mão</p>
                    <p className={styles.theoMiPhngVTrongN}>
                        <span className={styles.doc}>
                            Theo đó, mỗi phương vị trong nhà sẽ có một sao chiếu riêng, mang
                            tới may mắn hoặc gây ra vận rủi tùy từng khu vực.
                            <br />
                            Hướng Chính Đông: Sao Nhị Hắc Cự Môn tinh chủ về bệnh tật, đau ốm
                            <br />
                            Trong năm 2023, vị trí Chính Đông trong căn nhà sẽ do sao Nhị Hắc
                            Cự Môn cư ngụ. Đây là hung tinh chủ về ốm đau, bệnh tật. Do đó,
                            nếu đặt phòng ngủ ở đây sẽ gây nhiều ảnh hưởng đến sức khỏe của
                            người trong phòng. Còn nếu vị trí này đặt bếp cũng rất xấu, có thể
                            gây bất lợi cho sức khỏe của cả nhà, đặc biệt là vùng bụng và dạ
                            dày.
                            <br />
                            Để hóa giải hung khí của vị trí Chính Đông, gia chủ có thể đặt 5
                            đồng tiền xu phong thủy hoặc 1 quả chuông đồng ở đây. Các vật phẩm
                            phong thủy này có tác dụng giúp xua đuổi tà khí, tăng cường may
                            mắn về sức khỏe cho mọi người.

                        </span>
                    </p>
                    <img
                        className={styles.chiTitBiVitChild2}
                        alt=""
                        src="imgchitietbaiviet/rectangle-138@2x.png"
                    />

                    <p className={styles.hngChnhNgSaoNhHc}>
                        Hướng Đông Nam: Tam Bích Lộc Tồn tinh chủ về thị phi, quan tai
                        <br />
                        Tại vị trí Đông Nam, năm 2023 đây là nơi sao Tam Bích Lộc Tồn tinh
                        quân làm chủ tinh. Sao Tam Bích vốn là một hung tinh chủ về thị phi,
                        quan tai. Do đó, gia chủ cần hết sức chú ý đến bài trí phong thủy ở vị
                        trí này để tránh vô tình rước thị phi cho bản thân và gia đình.
                    </p>
                </div>
                <div className={styles.hngNgNamContainer}>

                    <p className={styles.bCcPhong}>
                        2. Vị trí màu sắc phong thủy
                    </p>
                    <p className={styles.hngChnhNgSaoNhHc}>
                        <span>
                            <span>
                                Hướng Chính Nam: Sao Bát Bạch Tả Phù tinh chủ về tài lộc, sự
                                nghiệp
                                <br />
                                Chuyên gia phong thủ Long Chấn Thiên chỉ ra rằng, năm 2023, phương
                                vị Chính Nam trong nhà là nơi có sao Bát Bạch Tả Phù trú ngụ. Đây
                                là một cát tinh chủ về tài lộc, sự nghiệp. Nếu biết cách bố trí
                                phong thủy phù hợp, sẽ đem tới may mắn cho gia chủ về công danh
                                tiền bạc.
                            </span>
                        </span>
                    </p>
                    <img
                        className={styles.chiTitBiVitChild2}
                        alt=""
                        src="imgchitietbaiviet/rectangle-138@2x.png"
                    />
                </div>

                <div className={styles.iViHngContainer}>
                    <p className={styles.hngChnhNgSaoNhHc}>
                        Đối với hướng Tây Nam, Cửu cung phi tinh năm 2023 chỉ ra rằng đây là
                        phương vị nơi sao Nhất Bạch Tham Lang xuất hiện. Trong cửu tinh, sao
                        Nhất Bạch là cát tinh chủ đề đào hoa và tình duyên.
                    </p>
                </div>
                <div className={styles.ngunThamKho}>
                    Nguồn tham khảo: Trang thông tin Lịch vạn niên, Chuyên mục Phong thủy.
                </div>
                <div className={styles.rectangleDiv} />
                <div className={styles.bv01}>
                    <div className={styles.biVitTrc}>{`<<Bài viết trước`}</div>
                    <div className={styles.biVitK}>{`Bài viết kế tiếp>>`}</div>
                </div>
                <div className={styles.tinTcLin}>TIN TỨC LIÊN QUAN</div>
                <div className={styles.sp1}>
                    <div>
                        <img
                            className={styles.chiTitBiVitChild7}
                            alt=""
                            src="imgchitietbaiviet/rectangle-142@2x.png"
                        />
                        <div>
                            <span>admin</span>
                            <span> <ClockCircleOutlined />28/03/2023</span>
                        </div>
                        <div >
                            <span className={styles.bds01} >BẤT ĐỘNG SẢN</span>
                        </div>
                        <div>
                            <span className={styles.title01}>
                                Cửu cung phi tinh năm 2023 chỉ ra rằng đây là
                                phương vị nơi sao
                            </span>
                        </div>
                        <div className={styles.xt01}>
                            <span >Xem thêm</span>
                        </div>
                    </div>
                    <div>
                        <img
                            className={styles.chiTitBiVitChild7}
                            alt=""
                            src="imgchitietbaiviet/rectangle-142@2x.png"
                        />
                        <div>
                            <span>admin</span>
                            <span> <ClockCircleOutlined />28/03/2023</span>
                        </div>
                        <div > <span className={styles.bds01} >BẤT ĐỘNG SẢN</span></div>
                        <div>
                            <span className={styles.title01}>
                                Cửu cung phi tinh năm 2023 chỉ ra rằng đây là
                                phương vị nơi sao
                            </span>
                        </div>
                        <div className={styles.xt01}>Xem thêm</div>
                    </div>
                    <div>
                        <img
                            className={styles.chiTitBiVitChild7}
                            alt=""
                            src="imgchitietbaiviet/rectangle-142@2x.png"
                        />
                        <div>
                            <span>admin</span>
                            <span> <ClockCircleOutlined />28/03/2023</span>
                        </div>
                        <div > <span className={styles.bds01} >BẤT ĐỘNG SẢN</span></div>
                        <div>
                            <span className={styles.title01}>
                                Cửu cung phi tinh năm 2023 chỉ ra rằng đây là
                                phương vị nơi sao
                            </span>
                        </div>
                        <div className={styles.xt01}>Xem thêm</div>
                    </div>
                </div>
                <div className={styles.header}>
                    <img
                        className={styles.mockupLogo14}
                        alt=""
                        src="imgchitietbaiviet/mockup-logo1-42@2x.png"
                    />
                    <div className={styles.vGlobalLiving}>Về Global Living</div>
                    <div className={styles.snPhmU}>Sản phẩm đầu tư</div>
                    <div className={styles.tiLiuBn}>Tài liệu bán hàng</div>
                    <div className={styles.ngNhpI} onClick={onNgNhpIClick}>
                        Đăng nhập Đại lý/ CTV
                    </div>
                    <div className={styles.tinTc} onClick={onTinTcTextClick}>
                        Tin tức
                    </div>
                    <div className={styles.div5}>0931 626 909</div>
                    <div className={styles.headerChild} />
                    <div className={styles.headerItem} />
                    <div className={styles.headerInner} />
                    <img className={styles.facebookIcon} alt="" src="imgchitietbaiviet/facebook1@2x.png" />
                    <img className={styles.tvShowIcon} alt="" src="imgchitietbaiviet/tv-show1@2x.png" />
                    <img className={styles.image1Icon} alt="" src="imgchitietbaiviet/image-12@2x.png" />
                </div>
                <Footer></Footer>

            </div>
        </div>
    );
};

export default ChiTitBiVit;
