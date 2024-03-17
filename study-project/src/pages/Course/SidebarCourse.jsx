import React from 'react';
import styles from './sidebarCourse.module.scss'

function SidebarCourse(){
    return(
        <div id={styles.frameSidebar}>
        <div className={styles.sidebarCourse}>
            <h1>Khóa học Module4</h1>
            <ul>
                <li>Bài 1</li>
                <li>Bài 2</li>
                <li>Bài 3</li>
                <li>Bài 4</li>
                <li>Bài 5</li>
            </ul>
        </div>
        </div>
    )
}
export default SidebarCourse;