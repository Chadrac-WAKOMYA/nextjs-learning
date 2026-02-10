import { useState } from 'react';
        
        function Header({title}){
          return <h1>{title ? title : 'Default Title'}</h1>;
        }

        function HomePage(){
          
          const names = ['NextJs', 'NestJs', 'ReactJs'];

          const [likes, setLikes] = React.useState(0);
          
          function handleClick(){
            setLikes(likes + 1);
          }
          function handleClick2(){
            setLikes(likes -1);
          }
          return(
            <div>
              <Header title="React is the best"/>
              <Header title="Develop. Preview. Ship."/>
              <ul>
                {names.map((name)=>(
                  <li key={name}>{name}</li>
                ))}
              </ul>
              <button onClick={handleClick}>Like{likes}</button>
              <button onClick={handleClick2}>UnLike{likes}</button>
            </div>
          );
        }    
   