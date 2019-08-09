import React from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {deleteTech} from '../../actions/techActions';

import M from 'materialize-css/dist/js/materialize.min';

const TechListItem = ({tech, deleteTech}) => {
  const {id, firstName, lastName} = tech;
  const onDelete = () => {
    deleteTech(id);
    M.toast({
      html: `Tech ${firstName} ${lastName} has been deleted`
    });
  };
  return (
    <li className="collection-item">
      <div>
        {firstName} {lastName}
        <a href="#!" onClick={onDelete} className="secondary-content">
          <i className="material-icons grey-text">delete</i>
        </a>
      </div>
    </li>
  );
};

TechListItem.propTypes = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};

export default connect(null, {deleteTech})(TechListItem);
