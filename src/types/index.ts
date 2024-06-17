export type TActiveLinkProps = {
    url: string;
    children: React.ReactNode;
  };
  export type TMenuItem = {
    url: string;
    title: string;
    icon: React.ReactNode;
  };
  // User
  export type TCreateUserParams = {
    clerkId: string;
    username: string;
    email_address: string;
    name?: string;
    avatar?: string;
  };
  export { TActiveLinkProps, TCreateUserParams, TMenuItem };