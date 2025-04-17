import Landing from './views/Landing';
import IntroCopy from './views/IntroCopy';
import Card from './components/Card';
import SearchBar from './views/SearchBar';
import mlas from './data/mlas.json';

export default function App() {
  return (
    <div className="container bg-gray-100/20">
      <div className="min-h-screen text-gray-900">
        <Landing />
        <IntroCopy />

{/* TODO: Move component into/just under IntroCopy */}
        <SearchBar />

{/* TODO: better to put the mapping elsewhere so it stays clean? */}
        <div className="card-grid grid grid-cols-1 lg:grid-cols-3 gap-3 mt-5">
          {mlas.map((mla) => (
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
    </div>
  );
}