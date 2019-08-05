import React, {useState, useEffect} from 'react';
import axios from 'axios';

import LogsItem from './LogsItem';

const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  },[]);

  const getData = async () => {
    setLoading(true);
    const res = await axios.get('/logs');
    setLogs(res.data);
    setLoading(false);
  };

  if (loading) {
    return <h4>Loading...</h4>
  }
  return (
    <ul className="collection with-header">
      <li className="collapsible-header">
        <h4 className="center">System logs</h4>
      </li>
      {!loading && logs.length === 0 ? (<p className="center"> No logs to show</p>) : (
        logs.map(({id, ...log}) => <LogsItem key={id} log={log}/>)
      )}
    </ul>
  );
};

export default Logs;