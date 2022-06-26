import s from './Dialogs.module.css';
import Member from './Member/Member';
import Message from './Message/Message';

let dataMembers = [
  { id: '1', name: 'Dima' },
  { id: '2', name: 'Vasya' },
  { id: '3', name: 'Natasha' },
  { id: '4', name: 'Maks' },
  { id: '5', name: 'Petya' },
];
let daraMessage = [
  { id: '1', message: 'Hi' },
  { id: '2', message: 'How are you?' },
  { id: '3', message: 'Wow, Bro!' },
];

const Dialogs = () => {
  return (
    <div className={s.list}>
      <ul className={s.members}>
        <Member name={dataMembers[0].name} id={dataMembers[0].id} />
        <Member name={dataMembers[1].name} id={dataMembers[1].id} />
        <Member name={dataMembers[2].name} id={dataMembers[2].id} />
        <Member name={dataMembers[3].name} id={dataMembers[3].id} />
        <Member name={dataMembers[4].name} id={dataMembers[4].id} />
      </ul>
      <ul className={s.messages}>
        <Message message={daraMessage[0].message} />
        <Message message={daraMessage[1].message} />
        <Message message={daraMessage[2].message} />
      </ul>
    </div>
  );
};

export default Dialogs;
