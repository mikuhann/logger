import React, {useEffect, useState} from 'react';
import axios from 'axios';

import TechListItem from './TechListItem';

const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getData();
    //eslint-disable-next-line
  },[]);

  const getData = async () => {
    setLoading(true);
    const res = await axios.get('/techs');
    setTechs(res.data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician list</h4>
        <ul className="collection">
          {!loading && techs.length === 0 ? (<p className="center">No techs to show</p>) : (
            techs.map((tech) => <TechListItem key={tech.id} tech={tech} />)
          )}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
