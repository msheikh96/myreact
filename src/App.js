import logo from './logo.svg';
import './App.css';
import UProfile from './UProfile';
import GetTodaysDate from './GetTodaysDate';
import UImages from './UImages';

function App() {
  return (
    <>
    <UProfile Name="Farrukh" Details="Software Developer" Designation="senior"></UProfile>
    <UProfile Name="Um E Hani" Details="Project Manager" Designation="senior"></UProfile>
    <UProfile Name="Irfan" Details="Business" Designation="junior"></UProfile>
    <GetTodaysDate></GetTodaysDate>
    <UImages></UImages>
    </>
  );
}

export default App;
