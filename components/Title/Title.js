import React from 'react';
import {Text} from 'react-native';
import Style from './Style';
import PropTypes from 'prop-types';

const Title = props => {
  return <Text style={Style.title}>{props.title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
