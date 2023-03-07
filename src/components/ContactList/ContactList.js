import PropTypes, { shape } from 'prop-types';
import { Contact } from 'components/Contact';
import { List, Item } from './ContactList.styled';

export const ContactList = ({ filteredArr, onDelete }) => (
  <>
    <List>
      {filteredArr.map(({ name, id, number }) => (
        <Item key={id}>
          <Contact
            name={name}
            number={number}
            id={id}
            onDelete={onDelete}
          ></Contact>
        </Item>
      ))}
    </List>
  </>
);

ContactList.propTypes = {
  filteredArr: PropTypes.arrayOf(
    shape({
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired,
};
