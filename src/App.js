import './App.css';
import {
  ResponsiveContainer, Tooltip, XAxis,
  YAxis, LineChart, Line, CartesianGrid,
  Legend,
  AreaChart,
  Area,
  BarChart,Bar
} from 'recharts';


const Pdata = [
  {
    name: 'python',
    student: 13,
    fees: 10
  },
  {
    name: 'node',
    student: 15,
    fees: 12
  },
  {
    name: 'js',
    student: 17,
    fees: 14
  },
  {
    name: 'c#',
    student: 10,
    fees: 16
  },
  {
    name: 'c',
    student: 5,
    fees: 18
  },
  {
    name: 'c++',
    student: 30,
    fees: 38
  },

]

const App = () => {
  return (
    <>
      <h1 className='line_chart'>Line Chart </h1>


      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={Pdata} width={500} height={300}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }} >
          <Legend />
          <Line type="monotoneX" dataKey="student" stroke='red'
            activeDot={{ r: 10 }} />
          <Line type="monotoneY"
            dataKey="fees" stroke='purple' activeDot={{ r: 10 }} />
          <CartesianGrid strokeDasharray="4" />
          <XAxis dataKey="name"
            interval={'preserveStartEnd'}
            tickFormatter={(value) => value + " language"} />
          <YAxis />
          <Tooltip separator=' = ' contentStyle={{ background: 'rgb(50, 211, 174)' }} />
        </LineChart>
      </ResponsiveContainer>











      {/* Area Chart  */}
      <h1 className='line_chart' >Area-chart </h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <AreaChart data={Pdata} width={500} height={300}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

          <defs>
            <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
            </linearGradient>
          </defs>

          <CartesianGrid strokeDasharray="4 4" />
          <XAxis dataKey="name"
            interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip separator=' = ' contentStyle={{ background: 'rgb(50, 211, 174)' }} />
          <Area type="monotoneX" dataKey="student"
            stroke="red"
            fillOpacity={1} fill="url(#colorUv)" />
          <Area type="monotoneY" dataKey="fees"
            stroke="green" fillOpacity={1} fill="url(#colorPv)" />
        </AreaChart>
      </ResponsiveContainer>


      {/* bar chart  */}
      <h1 className='line_chart'>Bar Chart</h1>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart data={Pdata} width={500} height={300}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>

          <CartesianGrid strokeDasharray="4 8" />
          <XAxis dataKey="name"
            interval={'preserveStartEnd'} />
          <YAxis />
          <Tooltip separator=' = ' contentStyle={{ background: 'rgb(50, 211, 174)' }} />
          <Bar  dataKey="student"
            stroke="red"
            fillOpacity={1} fill="url(#colorUv)" />
          <Bar dataKey="fees"
            stroke="green" fillOpacity={1} fill="url(#colorPv)" />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
}

export default App;
