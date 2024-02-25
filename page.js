"use client"
import React from 'react';
import Card from './components/Card';
import Button from './components/Button';

const App = () => {
  return (
    <div>
      <h1>Sample React Application</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Card
          title="Example Card 1"
          description="This is a sample card component with a button."
          imageUrl="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cms.haymarketindia.net/model/uploads/modelimages/Mercedes-Benz-GLC-110820231043.jpg"
        >
          <Button text="Click me" onClick={() => alert('Button clicked!')} />
        </Card>
        <Card
          title="Example Card 2"
          description="This is another sample card component with a button."
          imageUrl="https://imgd-ct.aeplcdn.com/664x415/n/cw/ec/129907/q3-right-front-three-quarter.jpeg"
        >
          <Button
            text="Click me too"
            onClick={() => alert('Another button clicked!')}
            backgroundColor="#28a745"
            hoverBackgroundColor="#218838"
          />
        </Card>
      </div>
    </div>
  );
};

export default App;
