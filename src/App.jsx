import Landing from './views/Landing';
import IntroCopy from './views/IntroCopy';
import Card from './components/Card'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <Landing />
      <IntroCopy />

      <Card
        name="Julia Hayter"
        party="NDP"
        region="Southern Alberta"
        division="Calgary-Edgemont"
        photo="src/assets/headshots/member-6.png"
      />
    </div>
  );
}