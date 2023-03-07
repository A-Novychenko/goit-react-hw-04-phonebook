import PropTypes from 'prop-types';
import { Name, Inner, Remove } from './Contact.styled';

export const Contact = ({ name, number, id, onDelete }) => (
  <>
    <Name>{`${name}: `}</Name>
    <Inner>
      <span>{number}</span>
      <Remove type="button" onClick={() => onDelete(id)}>
        X
      </Remove>
    </Inner>
  </>
);

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};
