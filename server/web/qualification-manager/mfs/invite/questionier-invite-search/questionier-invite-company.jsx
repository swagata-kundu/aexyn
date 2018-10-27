import React from 'react';

const QuestionierCompany = () => (
    <tr>
        <td className="custom-search-tb-data">
            <div className="custom-tb-left-col">
                <i className="fa fa-building-o" aria-hidden="true" />
            </div>
            <div className="custom-tb-rght-col">
                <div className="tb-row-1">
                    <a href="#">Unlimited Floors</a> <span className="devider">|</span> <span>Laguna Niguel</span>
                </div>
                <div className="tb-row-1">
                    <a href="#" className="tb-btn">+ INVITE</a> <a href="#">Charles Denney</a> <span className="devider">|</span> <span>Steve</span>
                </div>
                <div className="tb-row-1">
                    <a href="#" className="tb-btn">+ INVITE</a> <a href="#">Tyler Garner</a>
                </div>
                <div className="tb-row-1">
                    <a href="#" className="tb-more-btn">SHOW MORE<i className="fa fa-angle-down" aria-hidden="true" /></a>
                </div>
            </div>
        </td>
        <td><b>NOT INVITED TO QUALITY</b></td>
        <td><i>None for this work performed</i></td>
    </tr>);

export default QuestionierCompany;
