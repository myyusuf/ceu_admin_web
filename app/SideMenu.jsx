
import React, { Component } from 'react';
import Menu from 'antd/lib/menu';
import Icon from 'antd/lib/icon';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

const SideMenu = () => {

  const handleClick = (e) => {
    console.log('click ', e);
  }

  return (
    <Menu className="side-menu"
        height={300}
        onClick={handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
      >
        <Menu.Item key="dashboard"><Icon type="dot-chart" />Dashboard</Menu.Item>
        <SubMenu key="mahasiswa" title={<span><Icon type="user" /><span>Mahasiswa</span></span>}>
          <Menu.Item key="daftarSiswa">Daftar Siswa</Menu.Item>
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
}

export default SideMenu;
