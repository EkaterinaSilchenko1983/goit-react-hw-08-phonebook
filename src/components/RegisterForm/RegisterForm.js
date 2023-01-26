import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormRegister,
  Label,
  InputRegister,
  Button,
} from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <FormRegister onSubmit={handleSubmit} autoComplete="off">
      <Label>
        Username
        <InputRegister type="text" name="name" />
      </Label>
      <Label>
        Email
        <InputRegister type="email" name="email" />
      </Label>
      <Label>
        Password
        <InputRegister type="password" name="password" />
      </Label>
      <Button type="submit">Register</Button>
    </FormRegister>
  );
};
