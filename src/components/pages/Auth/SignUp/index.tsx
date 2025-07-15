import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Input from '@common/Input';
import Button from '@common/Button';
import Title from '@common/Title';

import useSignUpValidationSchema from '@pages/Auth/SignUp/hooks/useSignUpValidationSchema.ts';

export type SignUpFormDataTypes = z.infer<
  ReturnType<typeof useSignUpValidationSchema>
>;

const SignUp = () => {
  const { t } = useTranslation();
  const schema = useSignUpValidationSchema();

  const { control, handleSubmit } = useForm<SignUpFormDataTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: '',
      username: '',
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<SignUpFormDataTypes> = data => {
    console.error(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Title variant="h1">☺️ {t('auth.sign-up.title')}</Title>
      <Input
        name="firstname"
        type="text"
        label="First name"
        placeholder="Enter your first name"
        control={control}
        autocomplete="firstname"
      />
      <Input
        name="username"
        type="text"
        label="User name"
        placeholder="Enter your user name"
        control={control}
        autocomplete="username"
      />
      <Input
        name="email"
        type="email"
        label="Email"
        placeholder="Enter your email"
        control={control}
        autocomplete="email"
      />
      <Input
        name="password"
        type="password"
        label="Password"
        placeholder="Enter your password"
        control={control}
        autocomplete="password"
      />
      <Button type="submit">
        <span>Get started</span>
      </Button>
    </form>
  );
};

export default SignUp;
