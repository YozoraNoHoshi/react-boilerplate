/* eslint-disable no-restricted-syntax */
import styled from 'styled-components';

const Flex = styled.div`
  display: flex;
  flex-direction: ${props => {
    if (props.column) return 'column';
    return 'row';
  }};
  justify-content: ${jContent};
  align-items: ${alContent};
`;

export default Flex;

function jContent(props) {
  return getCSSProperties(
    props,
    {
      jCenter: 'center',
      jStart: 'flex-start',
      jEnd: 'flex-end',
    },
    'flex-start',
  );
}
function alContent(props) {
  return getCSSProperties(
    props,
    {
      alCenter: 'center',
      alStart: 'flex-start',
      alEnd: 'flex-end',
    },
    'flex-start',
  );
}

/**
 * Pulls a CSS value from props based on the mapping object. Used with a helper function that takes a StyledComponent's props as its only argument.
 * styleObj and defaultValue should be defined/provided in the helper function
 * @param {Object} props Props passed to component.
 * @param {Object} styleObj Mapping object for possible styles. By convention, they live in ../config/styles.js
 * @param {*} defaultValue Fallback value if nothing found in mapping object. By convention, they live in ../config/styles/DEFAULTS
 * @returns {*} The actual CSS value
 * */
function getCSSProperties(props, styleObj, defaultValue) {
  const values = [defaultValue];
  for (const key in props) {
    if (props[key] && styleObj[key]) values.push(styleObj[key]);
  }
  // The last match in props will be the CSS value selected in cases of multiple matches.
  return values[values.length - 1];
}
