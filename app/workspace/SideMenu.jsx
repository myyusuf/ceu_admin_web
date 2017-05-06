
import React from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
// import { Link } from 'react-router-dom';

const SubMenu = Menu.SubMenu;

const SideMenu = () => {
  const handleClick = (e) => {
    // console.log(`click : ${e.key}`);
    if(e.key === 'pretest') {
      window.location.href = `#score/${e.key}`;
    }else{
      window.location.href = `#${e.key}`;
    }

  };

  return (
    <Menu
      className="side-menu"
      height={300}
      style={{ border: 0 }}
      onClick={handleClick}
      defaultSelectedKeys={['1']}
      defaultOpenKeys={['sub1']}
      mode="inline"
    >
      <Menu.Item key="dashboard"><Icon type="dot-chart" />Dashboard</Menu.Item>
      <Menu.Item key="student"><Icon type="user" />Mahasiswa</Menu.Item>
      <Menu.Item key="hospital"><Icon type="home" />Rumah Sakit</Menu.Item>
      <SubMenu key="nilai" title={<span><Icon type="file-text" /><span>Nilai</span></span>}>
        <Menu.Item key="pretest">Pre Test</Menu.Item>
        <Menu.Item key="posttest">Post Test</Menu.Item>
      </SubMenu>
      <SubMenu key="jadwal" title={<span><Icon type="idcard" /><span>Jadwal</span></span>}>
        <Menu.Item key="jadwalRs">Jadwal Rumah Sakit</Menu.Item>
        <Menu.Item key="jadwalKlinik">Jadwal Klinik</Menu.Item>
      </SubMenu>
      <SubMenu key="laporan" title={<span><Icon type="contacts" /><span>Laporan</span></span>}>
        <Menu.Item key="jadwalRs">Jadwal Rumah Sakit</Menu.Item>
        <Menu.Item key="jadwalKlinik">Jadwal Klinik</Menu.Item>
      </SubMenu>
      <SubMenu key="settings" title={<span><Icon type="appstore" /><span>Settings</span></span>}>
        <Menu.Item key="5">Option 5</Menu.Item>
        <Menu.Item key="6">Option 6</Menu.Item>
        <SubMenu key="sub3" title="Submenu">
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
      </SubMenu>
      <SubMenu key="help" title={<span><Icon type="question-circle-o" /><span>Help</span></span>}>
        <Menu.Item key="jadwalRs">Jadwal Rumah Sakit</Menu.Item>
        <Menu.Item key="jadwalKlinik">Jadwal Klinik</Menu.Item>
      </SubMenu>
    </Menu>
  );
};

export default SideMenu;
