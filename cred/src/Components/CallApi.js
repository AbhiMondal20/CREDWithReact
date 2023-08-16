import React, { useState, useEffect } from 'react';

function CallApi() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch data from the API
    async function fetchData() {
      try {
        const response = await fetch('http://localhost/paramount/appointment/admin/api');
        const jsonData = await response.json();
        setData(jsonData.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData(); // Call the fetchData function when the component mounts

    // You can also perform cleanup in the return function to cancel any ongoing requests
    return () => {
      // Cleanup logic, if needed
    };
  }, []); // The empty array means this effect runs only on mount and unmount

  return (
    <div>
      <h1>API Data:</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Gender</th>
              <th>Appointment Date</th>
              <th>Address</th>
              <th>User ID</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.mobile}</td>
                <td>{item.gender}</td>
                <td>{item.appt_date}</td>
                <td>{item.address}</td>
                <td>{item.user_id}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default CallApi;
