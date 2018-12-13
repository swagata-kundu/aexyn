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

            <div className="tabber-content-group mfs-layout">
              <div className="mfs-layout-top-bar">
                <div className="row">
                  <div className="col-sm-6 mfs-layout-top-bar-left-col">
                    <ul>
                      <li>
                        <a href="/qualification-manager/manage-food-suppliers/preview-questions">
                          <i className="fa fa-tasks" aria-hidden="true" />
                          {' '}
Questionnaire

                        </a>

                      </li>
                      <li>
                        <div className="single-check-grp">
                          <input type="checkbox" defaultValue="Only Show my application" />
                          <label>Only Show my application</label>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div className="col-sm-6 mfs-layout-top-bar-right-col">
                    <form>
                      <input type="Search" name placeholder="Find application by company or email" />
                      <a href="/qualification-manager/manage-food-suppliers/invite/by-search" className="custom-btn">
                        <i className="fa fa-plus" aria-hidden="true" />
                Invite Suppliers
                      </a>
                    </form>
                  </div>
                </div>
              </div>
              <div className="custom-mfs-section-1 clearfix">
                <div className="custom-mfs-section-1-inner clearfix">

                  <Invitations status="SENT" />
                  <Invitations status="IN_PROGRESS" />
                  <Invitations status="SUBMITTED" />
                  <Invitations status="APPROVED" />
                  <Invitations status="EXPIRING" />
                  <Invitations status="EXPIRED" />
                  <Invitations status="DENIED" />

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
