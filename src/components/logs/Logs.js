import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {getLogs} from '../../actions/logActions';

import LogsItem from './LogsItem';
import Preloader from '../layout/Preloader';

const Logs = ({log: {logs, loading}, getLogs}) => {

  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  },[]);

  if (loading || logs === null) {
    return <Preloader />
  }
  return (
    <ul className="collection with-header">
      <li className="collapsible-header">
        <h4 className="center">System logs</h4>
      </li>
      {!loading && logs.length === 0 ? (<p className="center"> No logs to show</p>) : (
        logs.map((log) => <LogsItem key={log.id} log={log}/>)
      )}
    </ul>
  );
};

Logs.propTypes = {
  log: PropTypes.object.isRequired,
  getLogs: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  log: state.log
});

export default connect(mapStateToProps, {getLogs})(Logs);
