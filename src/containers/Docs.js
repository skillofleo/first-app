import React from "react";
import { Route, Link } from "react-router-dom";
import Page1 from "./page1";

const Doc = ({ match, children }) => {
  return (
    <>
      <h3>
        Requested Param: {match.params.name} {match.params.id}{" "}
      </h3>
      {children}
    </>
  );
};

const Docs = ({ match }) => {
  return (
    <div className="row">
      <article>
        <Route path={`${match.path}/:id`} component={Doc} />
        {/* <Route path={`${match.path}`} component={Doc} /> */}
        {/* <Route path={`${match.path}/page1`} component={Page1} /> */}

        <Route
          exact
          path={match.path}
          render={() => <h3>Please select a document.</h3>}
        />
      </article>

      <div className="nav-left">
        <div>
          <ul>
            <li>
              <Link to={`${match.url}/page1`}>Page1</Link>
            </li>

            <li>
              <Link to={`${match.url}/document_01`}>document_01</Link>
            </li>
            <li>
              <Link to={`${match.url}/document_02`}>document_02</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Docs;
