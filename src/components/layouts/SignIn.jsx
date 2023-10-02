import { useState } from "react";
import Input from "../_atoms/Input";
import Button from "../_atoms/Button";

const SignIn = ({ handleChangeValue }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Input
        type="email"
        value={email}
        placeholder="enter you email..."
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="password"
        value={password}
        placeholder="enter your password..."
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        value="signin"
        onClick={() => {
          handleChangeValue(email, password);
        }}
      />
    </div>
  );
};

export default SignIn;
