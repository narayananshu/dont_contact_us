import React from "react";
import styles from "./CreateForm.module.css";
import Button from "./Button/Button";
import { useState} from "react";
import { MdPermContactCalendar } from "react-icons/md";
import { BiSolidMessageRoundedEdit } from "react-icons/bi";
import { TfiEmail } from "react-icons/tfi";
const CreateForm = () => {
  var [name, setName]= useState("happy");
  const [displayName, setDisplayName] = useState('');
  // var [email, setEmail]=useState("anshu@g.com")
  // var [text, setText]=useState("hello welcome to text")

   
  // let text=""
function onSubmit(value){
 
//  const newName= event.target.getAttribute('name');
 console.log('value is ', value);
  // var newName;
  setName(
    value.target.value
  )

// console.log("email", event.target[1].value)

}
 function handleClick() {
  setDisplayName(name);
 }
  function viaChat() {
    console.log("Via chat clicked");
  }

  return (
    <div className={` ${styles.form_section}`}>
      <Button
        onClick={viaChat}
        text="VIA Support chat"
        icon={<BiSolidMessageRoundedEdit />}
      />
      <Button text="Via call" icon={<MdPermContactCalendar />} />
      <Button isOutLine={true} text="VIA EMAIL" icon={<TfiEmail />} />
      <form method="">
      <div>
        <div className={styles.form_control}>
          <label className={styles.form_label}>Name</label>
          <input type="text" name="name" className={styles.form_box} value={name} onChange={onSubmit}/>
        </div>
        {/* <div className={styles.form_control}>
          <label className={styles.form_label}>Email</label>
          <input type="email" className={styles.form_box} />
        </div>

        <div className={styles.form_control}>
          <textarea className={styles.form_textarea} />
        </div> */}
      </div>
      <Button text="Submit" type="button" onClick={handleClick}/>
      <p>{displayName}</p>
      </form>
    </div>
  );
};

export default CreateForm;
