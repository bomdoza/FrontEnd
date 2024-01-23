type Author = {
  name: string;
  image: string;
  designation: string;
};

type TopicDes = {
  title: string;
  desc: string;
  topic: string[];
};

export type Blog = {
  id: number;
  title: string;
  paragraph: string;
  image: string;
  author: Author;
  tags: string[];
  publishDate: string;
  concluding: string;
  paragraph2: string[];
  topicDes: TopicDes;
};
