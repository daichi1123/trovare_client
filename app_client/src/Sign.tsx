import { useState} from "react";


export default function Sing () {
  interface User {
    email: string
    password: string
  }
  const initialUser: User = {
    email: "",
    password: ""
  }
  const [data, setData] = useState<User>(initialUser);

  const onChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({ ...data, email: value });
    console.log('email', value)
  }
  const onChangePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setData({ ...data, password: value });
    console.log('password', value)
  }

  return(
    <div>
      <input name="email" value={data.email} onChange={onChangeEmail} />
      <input name="password" value={data.password} onChange={onChangePassword} />
    </div>
  );
}