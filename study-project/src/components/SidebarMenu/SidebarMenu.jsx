import './sidebarMenu.css'

function SidebarMenu(){
    const sidebarNavs = [
        { id: 1, name: 'HTML' },
        { id: 2, name: 'CSS' },
        { id: 3, name: 'JavaScript' },
        { id: 4, name: 'C++' },
        { id: 5, name: 'Python' },
        { id: 6, name: 'Java' },
        { id: 7, name: 'PHP' },
        { id: 8, name: 'NodeJS' },
        { id: 9, name: 'MySQL' },
        { id: 10, name: 'MongoDB' },
        { id: 11, name: 'Boostrap' },
        { id: 12, name: 'Sass' },
        { id: 13, name: 'ReactJS' },
        { id: 14, name: 'VueJS' },
        { id: 15, name: 'Item15' },
        { id: 16, name: 'Item16' }
    ]
    return(
        <div id='frameSidebar'>
            <div className='sidebarMenu'>
                <div className='myAccount'>
                    Tài khoản
                </div>
                <div className='listNav'>
                {sidebarNavs.map(sidebarNav =>(
                    <ul key={sidebarNav.id}>
                        <li>{sidebarNav.name}</li>
                    </ul>
                ))}
                </div>
                <div className='conttenOther'>
                    <div>
                    <h4>Dịch vụ</h4>
                    <ul>
                        <li>Lập trình Web</li>
                        <li>Lập trình Mobile App</li>
                        <li>Lập trình Nhúng</li>
                    </ul>
                    </div>
                    <div>
                    <h4>Tin tức công nghệ</h4>
                    <ul>
                        <li>Công nghệ mới</li>
                        <li>Hỏi đáp công nghệ</li>
                    </ul>
                    </div>
                </div>
                <div className='listBottom'>
                    <ul>
                        <li>Giới thiệu</li>
                    </ul>
                    <ul>
                        <li>Liên hệ: 0859737366</li>
                    </ul>
                    <ul>
                        <li>Cài đặt</li>
                        <li>Đăng xuất</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default SidebarMenu;