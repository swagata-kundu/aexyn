import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import MultiSelect from '../../../../components/multi-select';
import { filterCompany, selectedFilter } from '../../../../service/qualification-manager';
import { filterCompanyData } from '../../../state/action';
import multiSelectLocation from './multiselect-location';

const DropdownForm = (props) => {
  const {
    workPerformanceOptions, tagsOptions, qualificationStatus, location, labourType,
    selectCheckbox,
  } = props;
  return (
    <form className="custom-sidebar-form">
      <div className="custom-sidebar-form-field">
        <lable>Search by Location</lable>
        <Field
          required
          component={multiSelectLocation}
          options={location}
          name="location"
          placeholder="Select Location"
        />
      </div>
      <div className="custom-sidebar-form-field">
        <lable>Work Performed</lable>
        <Field
          required
          component={MultiSelect}
          options={workPerformanceOptions}
          name="workPerformance"
          placeholder="Select "
        />
      </div>
      <div className="custom-sidebar-form-field">
        <label>Tags</label>
        <Field
          required
          component={MultiSelect}
          options={tagsOptions}
          name="tags"
          placeholder="Select "
        />
      </div>
      <div className="custom-sidebar-form-field">
        <label>Qualification Status</label>
        {qualificationStatus.length > 0
          ? qualificationStatus.map((qualification, index) => (
            <div key={qualification} className="checkbox-item">
              <Field
                key={qualification}
                name={qualification}
                id={qualification}
                component="input"
                type="checkbox"
                value={qualification}
                onChange={() => selectCheckbox(index, 'status')}
              />
              <label>{qualification}</label>
            </div>
          )) : null}
      </div>
      <div className="custom-sidebar-form-field">
        <label>Labor Requirements</label>
        {labourType.length > 0
          ? labourType.map((labour, index) => (
            <div key={labour.id} className="checkbox-item">
              <Field
                name={labour.name}
                id={labour.id}
                key={labour.id}
                component="input"
                type="checkbox"
                onChange={() => selectCheckbox(index, 'labour')}
              />
              <label>{labour.name}</label>
            </div>
          )) : null}
      </div>
    </form>
  );
};

const SideBarDropDown = reduxForm({
  form: 'company',
  destroyOnUnmount: false,
})(DropdownForm);

class SideBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount = async () => {
    const Filter = await filterCompany();
    this.props.filterCompanyData(Filter);
  }

  selectCheckbox = (index, value) => {
    selectedFilter(index, value);
  }

  render = () => {
    const { filterCompanies } = this.props;
    return (
      <div className="col-sm-2 custom-axeyn-tab-search-sidebar">
        <div className="custom-search-sidebar-col">
          <h6>
            <i className="fa fa-object-ungroup" aria-hidden="true" />
            Refine
          </h6>
        </div>
        <div className="custom-search-sidebar-col">
          {Object.keys(filterCompanies).length > 0
            ? (
              <SideBarDropDown
                workPerformanceOptions={filterCompanies.workPerformed}
                tagsOptions={filterCompanies.tasg}
                qualificationStatus={filterCompanies.status}
                location={filterCompanies.locations}
                labourType={filterCompanies.labourType}
                selectCheckbox={this.selectCheckbox}
              />
            ) : null}
        </div>
      </div>
    );
  };
}

function mapStateToProps(state) {
  return {
    filterCompanies: state.qualification.filterCompanies,
  };
}
export default connect(mapStateToProps, { filterCompanyData })(SideBar);
