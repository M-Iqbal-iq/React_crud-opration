import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidbare  = () => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 bg-light shadow" style={{ width: '250px', height: '100vh',borderRight:'1px solid lightgray' }}>
      <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
        <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap" /></svg>
        <span className="fs-4">Admin Panel</span>
      </a>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/admin/" className="nav-link " aria-current="page">
            <i className="bi bi-speedometer2 me-2"></i>
            Dashboard
          </a>
        </li>
        <li>
          <NavLink to="user-list" className="nav-link text-dark">
            <i className="bi bi-people me-2"></i>
            Users
          </NavLink>
        </li>
        <li>
          <NavLink to="products" className="nav-link text-dark">
            <i className="bi bi-people me-2"></i>
            Products
          </NavLink>
        </li>
        <li>
          <a href="/admin/settings" className="nav-link text-dark">
            <i className="bi bi-gear me-2"></i>
            Settings
          </a>
        </li>
        <li>
          <a href="/admin/reports" className="nav-link text-dark">
            <i className="bi bi-bar-chart me-2"></i>
            Reports
          </a>
        </li>
        <li>
          <a href="/logout" className="nav-link text-dark">
            <i className="bi bi-box-arrow-right me-2"></i>
            Logout
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Sidbare;
