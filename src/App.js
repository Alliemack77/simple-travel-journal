import './App.css';
import Header from './components/Header'
import Article from './components/Article'
import { articleData } from './data/article-data';

function App() {
  return (
    <div className="container">
      <Header />
      <div className="articles flex direction-column">
        {
          articleData.map(article => {
            return <Article key={article.title} {...article}/>
          })
        }

      </div>

    </div>
  );
}

export default App;
