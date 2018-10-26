import React, { Component } from 'react';
import { Field } from 'redux-form';
import { connect } from 'react-redux';
import LocationSearch from '../../components/location-search';


class OfficeFields extends Component {
  constructor(props) {
    super(props);
    this.state = {
      states: [],
    };
  }

  changeCountry=(e, v) => {
    if (!v) {
      return this.setState({ states: [] });
    }
    const { common } = this.props;
    const country = common.country ? common.country : [];
    const selected = _.find(country, c => c.id === parseInt(v, 10));
    if (!_.isEmpty(selected)) {
      const states = selected.states.map(s => ({ id: s.state_id, name: s.state_name }));
      this.setState({ states });
    }
  }

  render=() => {
    const { baseName, common } = this.props;
    const country = common.country ? common.country : [];
    const seperator = baseName ? `${baseName}.` : '';
    const { states } = this.state;
    return (
      <div className="form-field">
        <div className="label">
          <label>Office Address</label>
        </div>
        <div className="input">
          <Field
            component={LocationSearch}
            seperator={seperator}
            name={`${seperator}address1`}
            placeholder="Street / P.O Box"
          />
          <Field
            component="input"
            type="text"
            name={`${seperator}address2`}
            placeholder="Suite / Floor"
            required
          />
          <Field
            required
            component="input"
            type="text"
            name={`${seperator}city`}
            placeholder="City"
          />
          <Field
            required
            component="select"
            onChange={this.changeCountry}
            name={`${seperator}country_id`}
          >
            <option value="">Select Country</option>
            {country.map(c => (<option key={c.id} value={c.id}>{c.name}</option>))}
          </Field>
          <div className="two-col-right-input">
            <Field
              required
              component="select"
              name={`${seperator}state_id`}
              className="state"
            >
              <option value="">Select State</option>
              {states.map(c => (<option key={c.id} value={c.id}>{c.name}</option>))}
            </Field>
            <Field
              required
              component="input"
              type="text"
              name={`${seperator}zip`}
              placeholder="Zip"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default connect(state => ({
  common: state.common.get('masterData').toJS(),
}))(OfficeFields);
