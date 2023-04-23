import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="Navbar fixed-top">
      <div className="nav-row additional-info">
        <div className="phone">0931 626 909</div>
        <div className="icon">fb</div>
        <div className="icon">zl</div>
        <div className="icon">ytb</div>
      </div>
      <div className="nav-row logo">
        <img src="/logo.png" alt="global-living" />
      </div>
      <div className="nav-row main-nav">
        <Link href="/">Về Global Living</Link>
        <Link href="/">Sản phẩm đầu tư</Link>
        <Link href="/">Tin tức</Link>
        <Link href="/">Tài liệu bán hàng</Link>
        <Link href="/">Đăng nhập Đại lý/ CTV</Link>
      </div>
    </nav>
  );
}
