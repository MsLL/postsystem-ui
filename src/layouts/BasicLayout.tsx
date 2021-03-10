import React from 'react';
import 'antd/dist/antd.css';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom'
import styles from './style.less'

// todo 一键换肤
function mapColorModeClass(colorMode?: any) {
    return styles.background_color_white
}
// ui参照多抓鱼：https://www.duozhuayu.com/
function BasicLayout(props: any) {
    const { Header, Content, Footer } = Layout;
    return (
        <div style={{ backgroundColor: 'rgba(242,242,242)' }}>
            {   // vh是可视区窗口的高度viewport height
                // 宽度width设置为600，多出来的width用margin左右自动填充
            }
            <Layout style={{ maxWidth: 600, margin: '0px auto', height: '100vh' }} className={mapColorModeClass()}>
                <Header className={mapColorModeClass()}>
                    <Menu theme="light" mode="horizontal" defaultSelectedKeys={['0']}>
                        {
                            // here q means question
                        }
                        <Menu.Item key="0"><Link to='/q/hub'>Hub</Link></Menu.Item>
                        <Menu.Item key="1"><Link to='/q/post'>PostQ</Link></Menu.Item>
                        <Menu.Item key="2"><Link to='/q/fish'>FishQ</Link></Menu.Item>
                        <Menu.Item key="3"><Link to='/q/my'>MyQ</Link></Menu.Item>
                    </Menu>
                </Header>

                <Content style={{ padding: 10 }}>
                    {props.children}
                </Content>
                <Footer style={{ textAlign: 'center' }} className={mapColorModeClass()}>Post System By upup??</Footer>
            </Layout>
        </div>
    )
}

export default BasicLayout;
