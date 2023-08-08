interface IPost {
  title: string;
  link: string;
  image: string;
  id: string;
  description: string;
}

interface IPaginationProps {
  prev: string;
  current: string;
  next: string;
}

export { IPost, IPaginationProps };
