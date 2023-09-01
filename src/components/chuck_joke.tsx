import Joke from '../joke';

interface ChuckJokeProps {
    joke: String;

}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ joke }) => {
 
    return (
 <>
   <p>{joke}</p>;
 </>

)}




export default ChuckJoke;
