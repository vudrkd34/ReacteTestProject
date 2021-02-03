import logo from './logo.svg';
import './App.css';
import Customer from './component/Customer'

const customers = [
  {
   id : 1,
   profile_img : 'https://placeimg.com/64/64/1',
   name : '홍길동',
   privacy_num : '961222',
   sex : '남자',
   job : '대학생'
  },
  {
    id : 2,
    profile_img : 'https://placeimg.com/64/64/2',
    name : '김평강',
    privacy_num : '930829',
    sex : '남자',
    job : '개발자'
   },
   {
    id : 3,
    profile_img : 'https://placeimg.com/64/64/3',
    name : '이순신',
    privacy_num : '943020',
    sex : '남자',
    job : '디자이너'
   }

]


function App() {
  return (
    <div>
      {
        customers.map(c => {
          return (
            <Customer 
              id={c.id}
              profile_img={c.profile_img}
              name={c.name}
              privacy_num={c.privacy_num}
              sex={c.sex}
              job={c.job}
            />
          );
        })
      }

    </div>
  );
}

export default App;
