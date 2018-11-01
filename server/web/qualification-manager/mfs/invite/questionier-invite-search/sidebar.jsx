import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import MultiSelect from '../../../../components/multi-select';
import { filterCompany } from '../../../../service/qualification-manager';
import { filterCompanyData } from '../../../state/action';

const DropdownForm = (props) => {
  const {
    selectOptions, workPerformanceOptions, tagsOptions, qualificationStatus, location,
  } = props;
  return (
    <form className="custom-sidebar-form">
      <div className="custom-sidebar-form-field">
        <lable>Search by Location</lable>
        <Field
          required
          component={MultiSelect}
          options={selectOptions}
          name="company"
          placeholder="Select "
        />
      </div>
      <div className="custom-sidebar-form-field">
        <lable>Work Performed</lable>
        <Field
          required
          component={MultiSelect}
          options={workPerformanceOptions}
          name="company1"
          placeholder="Select "
        />
      </div>
      <div className="custom-sidebar-form-field">
        <label>Tags</label>
        <Field
          required
          component={MultiSelect}
          options={tagsOptions}
          name="company2"
          placeholder="Select "
        />
      </div>
      <div className="custom-sidebar-form-field">
        <label>Qualification Status</label>
        {qualificationStatus.length > 0
          ? qualificationStatus.map(qualification => (
            <div className="checkbox-item">
              <Field key={qualification} name={qualification} id={qualification} component="input" type="checkbox" />
              <label>{qualification}</label>
            </div>
          )) : null}
      </div>
      <div className="custom-sidebar-form-field">
        <label>Labor Requirements</label>
        <div className="checkbox-item">
          <Field name="Union" id="Union" component="input" type="checkbox" />
          <label>Union</label>
        </div>
        <div className="checkbox-item">
          <Field name="nonUnion" id="nonUnion" component="input" type="checkbox" />
          <label>Non-Union</label>
        </div>
        <div className="checkbox-item">
          <Field name="Wages" id="Wages" component="input" type="checkbox" />
          <label>Prevalling Wages</label>
        </div>
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
                selectOptions={filterCompanies.workPerformed}
                workPerformanceOptions={filterCompanies.workPerformed}
                tagsOptions={filterCompanies.workPerformed}
                qualificationStatus={filterCompanies.status}
                location={filterCompanies.locations}
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
