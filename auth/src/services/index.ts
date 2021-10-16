type SignInRequestProps = {
  email: string;
  password: string;
};

const delay = () => new Promise((resolve) => setTimeout(resolve, 750));

export const signInRequest = async ({
  email,
  password,
}: SignInRequestProps) => {
  await delay();

  return {
    token: 'fkdsjfhkjfhksdf-fdsfhsldhfsjdfhs.fdskfhsjhfsd',
    user: {
      _id: 'Admirafelicidade',
      name: 'Mario Jorge',
      email,
      password,
    },
  };
};
