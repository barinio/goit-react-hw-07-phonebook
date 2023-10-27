import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts.selectors';
import { deleteContact } from 'redux/contactsSlice';

import { ItemRow, Table, TableBody, TabletHead } from './ContactsList.styled';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <>
      <Table>
        <TabletHead>
          <tr>
            <th>Name</th>
            <th>Phone</th>
            <th></th>
          </tr>
        </TabletHead>
        <TableBody>
          {contacts.map(({ id, name, phone }) => {
            return (
              <ItemRow key={id}>
                <td>{name}</td>
                <td>{phone}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => dispatch(deleteContact(id))}
                  >
                    Delete
                  </button>
                </td>
              </ItemRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
};
