export type User = {
  readonly id: number;
  first_name: string;
  password: string;
  email: string;
};

export type Post = {
  readonly id: number;
  title: string;
  text_content: string;
};
