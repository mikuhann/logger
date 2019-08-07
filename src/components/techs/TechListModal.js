import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getTechs} from '../../actions/techActions';

import TechListItem from './TechListItem';

const TechListModal = ({getTechs, techs:{techs, loading}}) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  },[]);

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4>Technician list</h4>
        <ul className="collection">
          {!loading && techs !== null &&
            techs.map((tech) => <TechListItem key={tech.id} tech={tech} />)}
        </ul>
      </div>
    </div>
  );
};

TechListModal.propTypes = {
  techs: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  techs: state.techs,
});

export default connect(mapStateToProps, {getTechs})(TechListModal);
