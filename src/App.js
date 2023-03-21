import React, { useState } from 'react';
import { Card, Grid, Tab, TabList, Text, Title } from '@tremor/react';

import KpiCardGrid from './components/KpiCards';
import ChartView from './components/Charts';
import TableView from './components/secondTable'

const App = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  const handleTabChange = (index) => {
    setSelectedTab(index);
  };

  return (
    <div className="bg-slate-50 p-6 sm:p-10">
      <Title>Dashboard</Title>
      <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr.</Text>

      <TabList
        defaultValue={selectedTab}
        onValueChange={handleTabChange}
        marginTop="mt-6"
      >
        <Tab value={0} text="Overview" />
        <Tab value={1} text="Detail" />
      </TabList>

      {selectedTab === 0 ? (
        <>
          <Card className="mt-6 bg-slate-500">

            <KpiCardGrid />
            <ChartView />
          </Card>
        </>
      ) : (
        <Card className="mt-6  bg-slate-500">
          {/* <div className="h-96" /> */}
          <TableView />
        </Card>
      )}
    </div>
  );
};

export default App;

