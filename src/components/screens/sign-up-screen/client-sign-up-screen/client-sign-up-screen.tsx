import React, {useState} from 'react';
import ClientSignUpScreenView from "./client-sign-up-screen-view";

const ClientSignUpScreen = () => {

  const [ email, setEmail ] = useState<string>('');
  const [ password, setPassword ] = useState<string>('');
  const [ confirmedPassword, setConfirmedPassword ] = useState<string>('');
  const [ phoneNumber, setPhoneNumber ] = useState<string>('');
  const [ lastName, setLastName ] = useState<string>('');
  const [ firstName, setFirstName ] = useState<string>('');

  return (
    <ClientSignUpScreenView
      setEmail={setEmail}
      setPassword={setPassword}
      setConfirmedPassword={setConfirmedPassword}
      setPhoneNumber={setPhoneNumber}
      setLastName={setLastName}
      setFirstName={setFirstName}
    />
  )
}

export default ClientSignUpScreen