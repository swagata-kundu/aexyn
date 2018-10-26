import React, { Component } from 'react';
import { change } from 'redux-form';
import _ from 'lodash';
import { initAutocomplete, geolocate } from '../util/location';

export default class Location extends Component {
  onAddressSelect=(location) => {
    const { meta, seperator = '' } = this.props;
    const { form, dispatch } = meta;
    _.forEach(location, (v, k) => {
      dispatch(change(form, `${seperator}${k}`, v));
    });
  }

  componentDidMount=() => {
    initAutocomplete(this.onAddressSelect);
    geolocate();
  }

  render() {
    const { placeholder, input } = this.props;
    const { value, onChange } = input;
    return (
      <input id="company_address" placeholder={placeholder} type="text" value={value} onChange={onChange} />
    );
  }
}
