
import {useState} from 'react';
import './App.css';
import List from './list';
import Search from './search'

const App = () => {
  
  const stories = [
      {
      title: 'React',
      url: 'https://reactjs.org/',
      author: 'Jordan Walke',
      num_comments: 3,
      points: 4,
      objectID: 0,
      },
      {
      title: 'Redux',
      url: 'https://redux.js.org/',
      author: 'Dan Abramov, Andrew Clark',
      num_comments: 2,
      points: 5,
      objectID: 1,
      },
    ];
    
  const [searchTerm, setSearchTerm] = useState('React');

    const handleSearch = (event) => {
      setSearchTerm(event.target.value);

      localStorage.setItem('search', event.target.value);
    }

    const searchStories = stories.filter((story)=>story.title.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
    <div className="App">
      <h1>whatsup</h1>
      <Search search={searchTerm} onSearch={handleSearch}/>
      <List lists={searchStories}/>
    </div>
  );

}


export default App;
