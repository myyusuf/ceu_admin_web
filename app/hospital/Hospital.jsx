import React, { Component } from 'react';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';
import Button from 'antd/lib/button';
import Select from 'antd/lib/select';
import Input from 'antd/lib/input';
import Pagination from 'antd/lib/pagination';
import axios from 'axios';
import CEUConstant from '../CEUConstant';
import HospitalList from './HospitalList';
import HospitalDepartmentList from './HospitalDepartmentList';
import HospitalStudentList from './HospitalStudentList';

const Option = Select.Option;

export default class Hospital extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      hospitalTypes: ['1'],
      selectedHospital: null,
    };

    this.onSearchTextChange = this.onSearchTextChange.bind(this);
    this.onHospitalTypeSelect = this.onHospitalTypeSelect.bind(this);
    this.onSearch = this.onSearch.bind(this);

    this.saveHospitalListRef = this.saveHospitalListRef.bind(this);
    this.onOpenCreateHospitalForm = this.onOpenCreateHospitalForm.bind(this);
  }

  onSearchTextChange(e) {
    this.setState({ searchText: e.target.value });
  }

  onHospitalTypeSelect(values) {
    this.setState({ hospitalTypes: values });
  }

  onSearch() {
    this.hospitalList.search(this.state.searchText, this.state.hospitalTypes);
  }

  saveHospitalListRef(hospitalList) {
    this.hospitalList = hospitalList;
  }

  onOpenCreateHospitalForm() {
    this.hospitalList.onOpenCreateHospitalForm();
  }

  render() {
    const hospitalTypes = [];
    CEUConstant.HOSPITAL_TYPES.forEach((hospitalType) => {
      hospitalTypes.push(
        <Option key={hospitalType.id}>{hospitalType.type}</Option>,
      );
    });

    let hospitalDepartmentList = (
      <div className="empty-hospital-department">
        <div>
          <span>Pilih Rumah Sakit</span>
          <img src="assets/images/icons/about.png" alt="Info" />
        </div>
      </div>
      );

    if (this.state.selectedHospital !== null) {
      hospitalDepartmentList = (
        <HospitalDepartmentList />
      );
    }

    return (
      <div className="hospital">
        <div className="section-header">
          <div className="left">
            <ul>
              <li className="the-li">
                <Input
                  style={{ width: 200 }}
                  className="search-text"
                  placeholder="Kode atau Nama"
                  onChange={this.onSearchTextChange}
                />
              </li>
              <li className="the-li">
                <Select
                  mode="multiple"
                  style={{ minWidth: 100 }}
                  placeholder="Tipe Rumah Sakit"
                  defaultValue={['1']}
                  onChange={this.onHospitalTypeSelect}
                >
                  {hospitalTypes}
                </Select>
              </li>
              <li className="the-li">
                <Button
                  shape="circle"
                  icon="search" className="search-button"
                  onClick={this.onSearch}
                />
              </li>
              <li className="the-li">
                <Button shape="circle" type="primary" icon="download" />
              </li>
            </ul>
          </div>
          <div className="right">
            <ul className="the-ul">
              <li className="the-li">
                <Button
                  type="primary"
                  icon="plus"
                  className="add-button"
                  onClick={this.onOpenCreateHospitalForm}
                >
                  Rumah Sakit
                </Button>
              </li>
            </ul>
          </div>
        </div>
        <div className="content">
          <div className="left">
            <HospitalList ref={this.saveHospitalListRef} />
          </div>
          <div className="center">
            {hospitalDepartmentList}
          </div>
          <div className="right">
            <HospitalStudentList />
          </div>
        </div>
      </div>
    );
  }
}

Hospital.propTypes = {
  onShowDetails: React.PropTypes.any,
};
