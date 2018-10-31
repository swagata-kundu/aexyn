import React from 'react';

const QuestionierCompany = () => (
  <tr className="has-border">
    <td className="custom-search-tb-data">
      <div className="custom-tb-left-col">
        <i className="fa fa-building-o" aria-hidden="true" />
      </div>
      <div className="custom-tb-rght-col">
        <div className="tb-row-1">
          <a href="#">Unlimited Floors</a>
          {' '}
          <span className="devider">|</span>
          {' '}
          <span>Laguna Niguel</span>
        </div>
        <div className="tb-row-1">
          <span className="custom-tag">tag-1</span>
          <span className="custom-tag">tag-2</span>
          <span className="custom-tag">tag-3</span>
          <span className="custom-tag">tag-4</span>
          <span className="custom-tag more-tag">
+
            <i className="more-tag-val">10</i>
            {' '}
more
          </span>
        </div>
      </div>
    </td>
    <td><b>NOT INVITED TO QUALITY</b></td>
    <td>
      <i>None for this work performed</i>
    </td>
    <td>
      <div className="align-center"><a href="#" className="custom-more-btn">Click Here for Invite</a></div>
    </td>
  </tr>);

export default QuestionierCompany;
