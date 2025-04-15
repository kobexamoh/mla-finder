import Landing from './views/Landing';
import IntroCopy from './views/IntroCopy';
import Card from './components/Card';
import SearchBar from './views/SearchBar';
import mlas from './data/mlas.json';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Landing />
      <IntroCopy />

      <SearchBar/>

      <div className="card-grid">
        {mlas.map( mla => (
          <Card
            key={mla.id}
            name={mla.name}
            party={mla.party}
            region={mla.region}
            division={mla.division}
            photo={mla.photo}
          />
        ))}
      </div>
    </div>
  );
}