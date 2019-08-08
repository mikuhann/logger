import React, {useEffect} from 'react';
import PropTypes from 'prop-types';

import {connect} from 'react-redux';
import {getTechs} from '../../actions/techActions';

const TechSelectOptions = ({getTechs, techs: {techs, loading}}) => {
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  },[]);
  return (
    !loading && techs !== null && techs.map(({id, firstName, lastName}) =>
      <option key={id} value={`${firstName} ${lastName}`}>
        {firstName} {lastName}
      </option>)
  );
};

TechSelectOptions.propTypes = {
  techs: PropTypes.object.isRequired,
  getTechs: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  techs: state.techs
});

export default connect(mapStateToProps, {getTechs})(TechSelectOptions);
