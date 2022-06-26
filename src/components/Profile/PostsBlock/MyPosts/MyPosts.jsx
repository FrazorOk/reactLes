import MyPost from './MyPost/MyPost';
import s from './MyPosts.module.css';

let dataPosts = [
  { id: '1', message: 'Hi, first post', likes: '5' },
  { id: '2', message: 'Natasha post', likes: '11' },
  { id: '3', message: 'Dima post', likes: '13' },
];

const MyPosts = () => {
  return (
    <div className={s.posts}>
      <MyPost message={dataPosts[0].message} likes={dataPosts[0].likes} />
      <MyPost message={dataPosts[1].message} likes={dataPosts[1].likes} />
      <MyPost message={dataPosts[2].message} likes={dataPosts[2].likes} />
    </div>
  );
};

export default MyPosts;
