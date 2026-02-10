
import LikeButton from './app/like-button';
        
function Header({title}){
  return <h1>{title ? title : 'Default Title'}</h1>;
}

export default function HomePage(){
  
  const names = ['NextJs', 'NestJs', 'ReactJs'];

  return(
    <div>
      <Header title="React is the best"/>
      <Header title="Develop. Preview. Ship."/>
      <ul>
        {names.map((name)=>(
          <li key={name}>{name}</li>
        ))}
      </ul>
      <LikeButton />
    </div>
  );
}    
   