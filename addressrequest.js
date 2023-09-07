import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AddressRequest = ({ ipv6 }) => {
  const [ipAddress, setIpAddress] = useState('');
  const ipAddressType = ipv6 ? 'IPv6' : 'IPv4';

  useEffect(() => {
    // Define the API URL based on IPv4 or IPv6 request
    const apiUrl = ipv6
      ? 'https://api64.ipify.org?format=json'
      : 'https://api.ipify.org?format=json';

    axios.get(apiUrl)
      .then((response) => {
        setIpAddress(response.data.ip);
      })
      .catch((error) => {
        console.error('Error fetching IP address:', error);
      });
  }, [ipv6]);

  return (
    <div className="address-request">
      <h3>{ipAddressType} Address:</h3>
      <p>{ipAddress}</p>
    </div>
  );
};

export default AddressRequest;
