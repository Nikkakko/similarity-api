'use client';
import { signOut, useSession } from 'next-auth/react';
import { FC, useState } from 'react';
import Button from './ui/Button';

interface SignOutButtonProps {}

const SignOutButton: FC<SignOutButtonProps> = ({}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const SignUserOut = async () => {
    setIsLoading(true);

    try {
      await signOut();
    } catch (error) {
      //   toast({
      //     title: 'Error signing in',
      //     message: 'Please try again later',
      //     type: 'error',
      //   });
    }
  };

  return (
    <Button isLoading={isLoading} onClick={SignUserOut}>
      Sign Out
    </Button>
  );
};

export default SignOutButton;
