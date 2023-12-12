
import './index.css'
import Header from './components/Header';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AtfalStats from './components/AtfalStats';
import { AtfalFeedbackProvider } from './Data/AtfalData';
import Dashboard from './components/Dashboard';
import AtfalCharts from './components/AtfalCharts';
import AtfalTotalTable from './components/AtfalTotalTable';
import AtfalLists from './components/AtfalLists';
import Lists from './components/Lists';
import Footer from './components/Footer'
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
// import Testtable from './components/Testtable'

function App() {
  const client = new QueryClient()
  return (
    <QueryClientProvider client={client}>
      <AtfalFeedbackProvider>
        <Router>
        <Dashboard />
          <Header />
          <div className='container'>
            <Routes>
              <Route exact path='/' element={
                <>
                  <AtfalStats />
                  <AtfalCharts />
                  <div className='list-tab margin-top'>
                    <AtfalTotalTable />
                    <AtfalLists />
                  </div> 
                </>
              } />
              <Route path='/statistic' element={<Lists />} />
            </Routes>
          </div> 
          <Footer/> 
        </Router>
      </AtfalFeedbackProvider>     
     </QueryClientProvider>
  )
}

export default App;
