import React, { Component } from "react";
import { reduxForm, Field } from 'redux-form';
import MultiSelect from '../../../../components/multi-select';

const DropdownForm = (props) => {
  const { selectOptions, workPerformanceOptions, tagsOptions } = props;

  return (
    <form className="custom-sidebar-form">
      <div className="custom-sidebar-form-field">
        <lable>Willing to traval to:</lable>
        <Field
          required
          component={MultiSelect}
          options={selectOptions}
          name="company"
          placeholder="Select "
        />
        <span className="tagline">
          Search by office location instead
                <i className="fa fa-angle-double-right" aria-hidden="true" />
        </span>
      </div>
      <div className="custom-sidebar-form-field">
        <lable>Work Performed</lable>
        <Field
          required
          component={MultiSelect}
          options={workPerformanceOptions}
          name="company"
          placeholder="Select "
        />
      </div>
      <div className="custom-sidebar-form-field">
        <lable>Tags</lable>
        <Field
          required
          component={MultiSelect}
          options={tagsOptions}
          name="company"
          placeholder="Select "
        />
      </div>
      <div className="custom-sidebar-form-field">
        <lable>Qualification Status</lable>
        <div className="checkbox-item">
          <Field name="Invitation Sent" id="InvitationSent" component="input" type="checkbox" />
          <label >Invitation Sent</label>
        </div>
        <div className="checkbox-item">
          <Field name="Progress" id="Progress" component="input" type="checkbox" />
          <label >In Progress</label>
        </div>
        <div className="checkbox-item">
          <Field name="Submitted" id="Submitted" component="input" type="checkbox" />
          <label >Submitted</label>
        </div>
        <div className="checkbox-item">
          <Field name="Approved" id="Approved" component="input" type="checkbox" />

          <label >Approved</label>
        </div>
        <div className="checkbox-item">
          <Field name="Approved" id="Approve" component="input" type="checkbox" />
          <label >
            Approved with Exceptions
                </label>
        </div>
        <div className="checkbox-item">
          <Field name="Denied" id="Denied" component="input" type="checkbox" />

          <label >Denied</label>
        </div>
      </div>
      <div className="custom-sidebar-form-field">
        <lable>Labor Requirements</lable>
        <div className="checkbox-item">
          <Field name="Union" id="Union" component="input" type="checkbox" />
          <label >Union</label>
        </div>
        <div className="checkbox-item">
          <Field name="nonUnion" id="nonUnion" component="input" type="checkbox" />
          <label >Non-Union</label>
        </div>
        <div className="checkbox-item">
          <Field name="Wages" id="Wages" component="input" type="checkbox" />
          <label >Prevalling Wages</label>
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

  render = () => {
    const selectOptions = [
      { id: 'Costa', name: 'Costa' },
      { id: 'Mesa', name: 'Mesa' },
      { id: 'CA', name: 'CA' },
      { id: 'USA', name: 'USA' }
    ];
    const workPerformanceOptions = [
      { id: 'AC Dike', name: 'AC Dike' },
      { id: 'Item 2', name: 'Item 2' }
    ];
    const tagsOptions = [
      { id: 'Item -1', name: 'Item -1' },
      { id: 'Item -2', name: 'Item -2' },
    ];
    return (
      <div className="col-sm-3 custom-axeyn-tab-search-sidebar">
        <div className="custom-search-sidebar-col">
          <h6>
            <i className="fa fa-object-ungroup" aria-hidden="true" />
            Refine
          </h6>
        </div>
        <div className="custom-search-sidebar-col">
          <SideBarDropDown
            selectOptions={selectOptions}
            workPerformanceOptions={workPerformanceOptions}
            tagsOptions={tagsOptions}
          />
        </div>
      </div>
    );
  };
}

export default SideBar;
