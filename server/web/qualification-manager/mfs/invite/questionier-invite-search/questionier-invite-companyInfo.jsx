import React from 'react';

const QuestionierCompanyInfo = () => (
    <tr>
        <td className="custom-search-tb-data">
            <div className="custom-tb-left-col">
                <img src="/static/images/aexyn-logo.png" alt="Aexyn" />
            </div>
            <div className="custom-tb-rght-col">
                <div className="tb-row-1">
                    <a href="#">All American Asphaalt</a> <span className="devider">|</span> <span>Corona</span>
                </div>
                <div className="custom-tb-select">
                    <form>
                        <select>
                            <option value="Corona">Corona</option>
                            <option value="CA">CA</option>
                        </select>
                    </form>
                </div>
                <div className="tb-row-1">
                    <a href="#" className="tb-btn">+ INVITE</a> <a href="#">Bob Loth</a> <span className="devider">|</span> <span>Project Manager</span>
                </div>
                <div className="tb-row-1">
                    <a href="#" className="tb-btn">+ INVITE</a> <a href="#">Brenda Royster</a> <span className="devider">|</span> <span>ABC</span>
                </div>
                <div className="tb-row-1">
                    <a href="#" className="tb-btn">+ INVITE</a> <a href="#">Item-2</a> <span className="devider">|</span> <span>ABC</span>
                </div>
                <div className="tb-row-1">
                    <a href="#" className="tb-btn">+ INVITE</a> <a href="#">Item-3</a> <span className="devider">|</span> <span>ABC</span>
                </div>
                <div className="tb-row-1">
                    <a href="#" className="tb-btn">+ INVITE</a> <a href="#">Item-4</a> <span className="devider">|</span> <span>ABC</span>
                </div>
            </div>
        </td>
        <td><b>NOT INVITED TO QUALITY</b></td>
        <td><i>None for this work performed</i></td>
    </tr>
);

export default QuestionierCompanyInfo;
