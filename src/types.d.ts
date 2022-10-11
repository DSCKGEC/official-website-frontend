interface IContentMovedProps {
  contentMoved: boolean;
  setContentMoved: (boolean) => void;
}

interface IContentMovedContextProps {
  contentMoved: boolean;
  setContentMoved: React.Dispatch<React.SetStateAction<boolean>>;
}

interface ILoginProps {
  loggedIn: boolean;
  setLoggedIn: (boolean) => void;
}

interface UserLoginDataType {
  email: string;
  password: string;
}
