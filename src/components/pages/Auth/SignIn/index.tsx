import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';

import Input from '@common/Input';
import Button from '@common/Button';
import Title from '@common/Title';

import useSignInValidationSchema from '@pages/Auth/SignIn/hooks/useSignInValidationSchema.ts';

export type SignInFormDataTypes = z.infer<
  ReturnType<typeof useSignInValidationSchema>
>;

const SignIn = () => {
  const { t } = useTranslation();
  const schema = useSignInValidationSchema();

  const { control, handleSubmit } = useForm<SignInFormDataTypes>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const onSubmit: SubmitHandler<SignInFormDataTypes> = data => {
    console.error(data);
  };

  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)} noValidate>
      <Title variant="h1">👋🏻 {t('auth.sign-in.title')}</Title>
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
        autocomplete="current-password"
      />
      <Button type="submit">
        <span>Sign In</span>
      </Button>
    </form>
  );
};

export default SignIn;
