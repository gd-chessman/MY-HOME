import React, { useEffect, useState } from 'react';
import styles from './course.module.scss'
import avartar from '../../assets/icons/avatar.png';
import SidebarCourse from './SidebarCourse';
function Course(){
  const [sidebar, setSibar] = useState(false)
  var body = document.querySelector("body")
  if(sidebar == true){
    body.style.overflow ="hidden";
  }else{
    body.style.overflow ="auto";
  }
    return(
        <div id={styles.app}>
        {/* Make Header */}
        <header id={styles.header}>
          <div className={styles.headerTop}>
            <nav className={styles.navLinkHeader}>
              <ul className={styles.nav}>
                <li className={styles.logo}>
                  <a href="/">
                    <img
                      src={avartar}
                      width="32px"
                      style={{ borderRadius: 4 }}
                    />
                    &nbsp;Chessman
                  </a>
                </li>
                <li>
                  <a href="#!">Cài đặt</a>
                </li>
              </ul>
            </nav>
          </div>
        </header>
        {/* Make Main */}
        <main id={styles.main}>
          <h2 style={{ color: "rgb(0, 0, 164)", textAlign: "center" }}>
            1. Tổng quan Spring MVC
          </h2>
          <table>
            <thead>
              <tr>
                <th>Mục</th>
                <th>Nội dung</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Khái niệm và ý nghĩa của Framework</td>
                <td>
                  Là ứng dụng có tính trừu tượng cao cung cấp các tính năng để phát
                  triển ứng dụng 1 cách nhanh chóng
                </td>
              </tr>
              <tr>
                <td>Phân biệt Framework và Libary</td>
                <td>Điểm khác biệt lớn nhất Framework và Libary nằm ở cơ chế IOC</td>
              </tr>
              <tr>
                <td>Các thành phần của Spring Framework</td>
                <td>
                  Các thành phần chính:
                  <p>
                    Data access: kết nối và tương tác với database <br />
                    Web: module hỗ trợ xây dựng web <br />
                    AOP/Aspects: Beans: xương sống của Spring core <br />
                    Singleton: sử dụng cơ chế DI để tiêm <br />
                    Core: chứa IOC và DI <br />
                    Context: nơi mọi thứ được kết nối với nhau <br />
                    SpEL: ngôn ngữ cấu hình Spring <br />
                    Test: dành cho việc testing
                  </p>
                </td>
              </tr>
              <tr>
                <td>Tổng quan về Spring MVC</td>
                <td>
                  Điểm khác nhau lớn nhất giữa Spring MVC và MVC nằm ở FrontController
                </td>
              </tr>
              <tr>
                <td>Khái niệm về View Resorve</td>
                <td>Là đối tượng ánh xạ tên view thành đối tượng view tương ứng</td>
              </tr>
            </tbody>
          </table>
        </main>
        {sidebar && <SidebarCourse />}
        {/* Make footer */}
        <footer id={styles.footer}>
          <nav className={styles.navFooter}>
            <ul>
              <li>Hỏi đáp</li>
            </ul>
            <ul>
              <li>
                <button>Bài trước</button>
              </li>
              <li>
                <button>Bài tiếp theo</button>
              </li>
            </ul>
            <ul>
              <li onClick={()=>setSibar(!sidebar)}><svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="32px" height="32px" color='#cbd5e1'><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/></svg></li>
            </ul>
          </nav>
        </footer>
      </div>      
    )
}
export default Course