import React from 'react';
import Banner from './Banner';
import Exhibit from './Exhibit';
import AddressRequest from  AddressRequest;

function App() {
  return (
    <div>
      <Banner title="My React Website" />
      <Exhibit title="IP Addresses">
        <AddressRequest ipv6={false} />
        <AddressRequest ipv6={true} />
      </Exhibit>
    </div>
  );
}

export default App;
