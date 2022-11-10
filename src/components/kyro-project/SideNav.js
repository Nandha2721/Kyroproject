import React from "react";
import { Menu, Icon, Button } from 'antd';
import 'antd/dist/antd.css';

class SideNav extends React.Component {
  state = {
    collapsed: false,
  };

  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render() {
    return (
      <div style={{ width: 220 }}>
        <h4>KYRO</h4>
        <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
          <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <Menu
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="light"
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="1">
          <Icon type="home" theme="filled" />
            <span> Home </span>
          </Menu.Item>
          <Menu.Item key="2">
          <Icon type="home" theme="filled" />
            <span>Projects</span>
          </Menu.Item>
          <Menu.Item key="3">
          <Icon type="dashboard" />
            <span>Dashboard</span>
          </Menu.Item>
          <Menu.Item key="4">
          <Icon type="message" />
            <span>Messages</span>
          </Menu.Item>
          <Menu.Item key="5">
          <Icon type="file" theme="filled" />
            <span>Documents</span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="inbox" />
            <span>Organizations</span>
          </Menu.Item>
          <Menu.Item key="7">
          <Icon type="setting" theme="filled" />
            <span>Settings</span>
          </Menu.Item>


          <Menu.Item key="8" placement="bottom">
          <Icon type="logout" />
            <span>Log Out</span>
          </Menu.Item>
        </Menu>
      </div>
    );
  }
}
export default SideNav;