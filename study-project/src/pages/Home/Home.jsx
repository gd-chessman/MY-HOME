import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import '../global.css'
import styles from './home.module.scss';
// import '../../components/SidebarMenu/sidebarMenu.module.scss'

import avartar from '../../assets/icons/avatar.png';
import img1 from '../../assets/img/img1.gif';
import img2 from '../../assets/img/img2.png';
import img3 from '../../assets/img/img3.png';
import img4 from '../../assets/img/img4.png';
import img5 from '../../assets/img/img5.png';
import item8 from '../../assets/img/item8.png';
import item9 from '../../assets/img/item9.png';
import item10 from '../../assets/img/item10.png';
import item11 from '../../assets/img/item11.png';
import item12 from '../../assets/img/item12.png';
import item13 from '../../assets/img/item13.png';
import hot from '../../assets/icons/hot.png';
import fullStack from '../../assets/icons/fullstack.png';
import frontEnd from '../../assets/icons/frontend.png';
import backEnd from '../../assets/icons/backend.png';
import other from '../../assets/icons/code.png';

import htmlIcon from '../../assets/icons/html.png';
import cssIcon from '../../assets/icons/css.jpg';
import jsIcon from '../../assets/icons/javascript.png';
import reactJS from '../../assets/img/react-logo.png';
import bootstrap from '../../assets/img/bootstrap.png';

import fbIcon from '../../assets/icons/facebook.png';
import zaloIcon from '../../assets/icons/icons8-zalo-480.png';
import tiktokIcon from '../../assets/icons/tiktok.png';
import youtubeIcon from '../../assets/icons/youtube.png';
import SidebarMenu from '../../components/SidebarMenu/SidebarMenu';


function Home() {
    // Làm phần xử lý cho chuyển router không kích hoạt JS Home
    let refreshInterval;
    useEffect(() => {
        sliderAnimation()
        // Cần phải trả về 1 hàm mới hoạt động
        return () => {
            clearInterval(refreshInterval);
        };   
        // return clearInterval(refreshInterval) //Cách này không được
    },[]);

    const [sidebar, setSibar] = useState(false)
    var body = document.querySelector("body")
    if(sidebar == true){
      body.style.overflow ="hidden";
    }else{
      body.style.overflow ="auto";
    }

    //Làm phần slider cho trang Home
    function sliderAnimation(){
        let sliderImage = document.getElementById("sliderImage");
        if (sliderImage == null) {
            console.log("ID trong DOM không tồn tại!")
        }else{
            console.log("ID trong DOM có tồn tại!")
            let slider = document.querySelector('.slider .list');
            let items = document.querySelectorAll('.slider .list .item');
            let next = document.getElementById('next');
            let prev = document.getElementById('prev');
            let dots = document.querySelectorAll('.slider .dots li');

            let lengthItems = items.length - 1;
            let active = 0;
            next.onclick = function(){
                active = active + 1 <= lengthItems ? active + 1 : 0;
                reloadSlider();
            }
            prev.onclick = function(){
                active = active - 1 >= 0 ? active - 1 : lengthItems;
                reloadSlider();
            }
            refreshInterval = setInterval(()=> {next.click()}, 3000);

            function reloadSlider(){
                slider.style.left = -items[active].offsetLeft + 'px';
                // 
                let last_active_dot = document.querySelector('.slider .dots li.active');
                last_active_dot.classList.remove('active');
                dots[active].classList.add('active');
                // console.log(dots)
                clearInterval(refreshInterval);
                refreshInterval = setInterval(()=> {next.click()}, 3000);
          
            }

            dots.forEach((li, key) => {
                li.addEventListener('click', ()=>{
                    active = key;
                    reloadSlider();
                })
            })
        }
    }
    return (
        <div id={styles.app}>
            <header id={styles.header}>
                <div className={styles.headerTop}>
                    <nav className={styles.navLinkHeader}>
                        <ul className={styles.nav}>
                            <li className={styles.logo}><a href="/"><img src={avartar} width="32px" style={{ borderRadius: 4 }} alt=""/>&nbsp;Chessman</a></li>
                            <li>
                                <a href="">Dịch&nbsp;vụ</a>
                                <div className={styles.navService}>
                                    <a href="">Lập trình Web</a>
                                    <a href="">Lập trình Mobile</a>
                                    <a href="">Lập trình Nhúng</a>
                                </div>
                            </li>
                            <li><a href="">Tin&nbsp;tức</a></li>
                            <li>
                                <div className={styles.group}>
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className={styles.iconSearch}>
                                        <g>
                                            <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                                        </g>
                                    </svg>
                                    <input className={styles.inputDesktop} type="search" placeholder="Tìm kiếm"/>
                                </div>
                            </li>
                            <li><a href="">Hỏi&nbsp;đáp</a></li>
                            <li><a href="./login.html">Tài&nbsp;khoản</a></li>
                            <li onClick={() => setSibar(!sidebar)}>
                                <svg xmlns="http://www.w3.org/2000/svg" class="ionicon" viewBox="0 0 512 512" width="32px" height="32px" color='#cbd5e1' style={{ cursor: 'pointer' }}>
                                    <path fill="none" stroke="currentColor" stroke-linecap="round" stroke-miterlimit="10" stroke-width="32" d="M80 160h352M80 256h352M80 352h352"/>
                                </svg>
                            </li>             
                        </ul>
                    </nav>
                </div>
            </header>
            {sidebar && <SidebarMenu />}
            {sidebar && 
                <div>
                    <button onClick={()=>setSibar(!sidebar)} className={styles.sidebarClose}>X</button>
                </div>
            }
            <div className={styles.appWithSidebar} >
            <aside className={styles.homeSidebar}>
                <h5 style={{marginBottom: 40,marginTop: 40}}>HOME</h5>
                <h5 style={{marginBottom: 40}}>POST</h5>
                <h5 style={{marginBottom: 40}}>SETTING</h5>
                <h5 style={{marginBottom: 40}}>OTHER</h5>
            </aside>   
            <main id={styles.main}>
            <div id="sliderImage">
                <div className="slider">
                    <div className="list">
                    <div className="item">
                        <img src={img1} alt />
                    </div>
                    <div className="item">
                        <img src={img2} alt />
                    </div>
                    <div className="item">
                        <img src={img3} alt />
                    </div>
                    <div className="item">
                        <a href="https://levanquy0101.github.io/My-Portfolio/" target="_blank">
                        <img src={img4} alt />
                        </a>
                    </div>
                    <div className="item">
                        <img src={img5} alt />
                    </div>
                    </div>
                    <div className="buttons">
                    <button id="prev">&lt;</button>
                    <button id="next">&gt;</button>
                    </div>
                    <ul className="dots">
                    <li className="active" />
                    <li />
                    <li />
                    <li />
                    <li />
                    </ul>
                </div>
            </div>
            </main>
            </div>
            <scroll-top class="scroll-top">
                    <a href="#">&uarr;</a>       
            </scroll-top>
            <footer id={styles.footer}>
                <div className={styles.footerContainer}>
                    <div className={styles.footerContent}>
                        <h3>Le Van Quy</h3>
                        <ul>
                            <li>Điện thoại: <a href="tel: 0382787721">0382787721</a></li>
                            <li>Email: <a href="mailto: vannn.quy@gmail.com">vannn.quy@gmail.com</a></li>
                            <li>Địa chỉ: Đà Nẵng - Việt Nam</li>
                            <li>Công việc: Là lập trình viên</li>
                            <li><a href="https://levanquy.com" target="_blank">Portfolio Admin</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerContent}>
                        <h3>Thông tin web</h3>
                        <ul>
                            <li><a href="">Giới thiệu</a></li>
                            <li><a href="">Liên hệ</a></li>
                            <li><a href="">Điều khoản & Bảo mật</a></li>
                            <li><a href="">Góp ý</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerContent}>
                        <h3>Sản phẩm</h3>
                        <ul>
                            <li><a href="">Project 1</a></li>
                            <li><a href="">Project 2</a></li>
                            <li><a href="">Project 3</a></li>
                            <li><a href="">Project 4</a></li>
                        </ul>
                    </div>
                    <div className={styles.footerContent}>
                        <h3>Liên kết</h3>
                        <ul className={styles.linkInfor}>
                            <li><a href="https://www.facebook.com/LeVanQuy0101" target="_blank"><img src={fbIcon} alt=""/></a></li>
                            <li><a href="zalo.html" target="_blank"><img src={zaloIcon} alt=""/></a></li>
                            <li><a href="https://www.tiktok.com/@gd_chessman" target="_blank"><img src={tiktokIcon} alt=""/></a></li>
                            <li><a href="time.html" target="_blank"><img src={youtubeIcon} alt=""/></a></li>
                        </ul>
                    </div>
                </div>
                <div className={styles.footerBottom}>
                    <p>&copy; Trang web công nghệ được phát triển bởi LE&nbsp;VAN&nbsp;QUY</p>
                </div>
            </footer>
        </div>
    );
}


export default Home;
