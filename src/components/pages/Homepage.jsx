import { Footer, Navbar } from "../common";

export default function HomePage() {
  return (
    <>
      <Navbar></Navbar>
      <header className="Header">
        <video autoPlay muted loop id="myVideo">
          <source src="/header-video.mp4" type="video/mp4" />
        </video>
        <div className="nav-card">
          <h3>THE VILLA HOUSE</h3>
          <article>
            <ul>
              <li>VỊ TRÍ: Thảo Điền, Tp. Hồ Chí Minh</li>
              <li>TỔNG DIỆN TÍCH XÂY DỰNG: 423m2 - 3 tầng</li>
              <li>HẠNG MỤC THI CÔNG: Xây dựng cơ bản và hoàn thiện nội thất</li>
              <li>
                PHONG CÁCH THIẾT KẾ: concept Indochine (phong cách Đông Dương
              </li>
            </ul>
            <button>
              <img src="/Eye.png" alt="btn-icon" />
            </button>
          </article>
        </div>
      </header>
      <section className="About-section">About section</section>
      <Footer></Footer>
    </>
  );
}
