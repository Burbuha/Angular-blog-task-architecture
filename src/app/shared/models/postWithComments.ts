export interface PostWithComments {
  id: number;
  title: string;
  body: string;
  comments: [{ id: number; name: string; body: string }];
}
