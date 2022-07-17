import s from './Dialogs.module.css';
import InputRow from './InputRow/InputRow';
import Member from './Member/Member';
import Message from './Message/Message';

const Dialogs = (props) => {
  let membersElements = props.dialogs.dataMembers.map((member) => (
    <Member name={member.name} id={member.id} />
  ));
  let messagesElements = props.dialogs.dataMessage.map((message) => (
    <Message message={message.message} />
  ));

  return (
    <div className={s.list}>
      <ul className={s.members}>{membersElements}</ul>
      <div className={s.messages_block}>
        <ul>{messagesElements}</ul>
        <InputRow
          upgradeDialogsText={props.upgradeDialogsText}
          addMessage={props.addMessage}
          inputText={props.dialogs.inputText}
        />
      </div>
    </div>
  );
};

export default Dialogs;
