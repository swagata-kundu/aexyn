import React from 'react';
import Tabs from '../../components/tabs';
import Invitations from '../components/invitationlist';

const DashBoard = () => (
  <section className="custom-body-container-wrapper" style={{ paddingLeft: 50 }}>
    <div className="custom-body-container">
      <div className="custom-section">
        <div className="custom-sidebar-tab" id="tab1">
          <div className="custom-tabber-group">

            <Tabs />

            <div className="tabber-content-group qualification-layout">
              <div className="qualification-layout-top-bar">
                <div className="row">
                  <div className="col-sm-6 qualification-layout-top-bar-left-col">
                    <form>
                      <input type="Search" placeholder="Find" />
                      {' '}
                      <i className="fa fa-search" aria-hidden="true" />
                    </form>
                  </div>
                  <div className="col-sm-6 qualification-layout-top-bar-right-col text-right">
                    <span className="video-btn"> View our introductory video &gt;&gt;</span>
                  </div>
                </div>
              </div>
              <div className="custom-qualification-section-1 clearfix">
                <div className="custom-qualification-section-1-inner clearfix">
                  <Invitations status="SENT" />
                  <Invitations status="REVISION" />
                  <Invitations status="IN_PROGRESS" />
                  <Invitations status="SUBMITTED" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default DashBoard;
