// src/App.jsx
import Header from "./components/Header";
import StudentCard from "./components/StudentCard";
function App() {
  return (
    <div>
      <Header title="📋 Student App" />
<StudentCard name="Aman" marks={92} />
      <StudentCard name="Priya" marks={78} />
      <StudentCard name="Rahul" marks={85} />
    </div>
  );
}
export default App;