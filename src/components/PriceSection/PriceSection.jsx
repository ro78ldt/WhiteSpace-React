import React from 'react';
import { Card, CardContent, Typography, Button, Grid } from '@mui/material';
import './PriceSection.css';

function PriceSection() {
  const plans = [
    { title: 'Free', price: '$0', features: ['Capture ideas and find them quickly', 'Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets', 'Connect primary Google Calendar account'] },
    { title: 'Personal', price: '$11.99', features: ['Capture ideas and find them quickly', 'Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets', 'Connect primary Google Calendar account'] },
    { title: 'Organization', price: '$39.99', features: ['Capture ideas and find them quickly', 'Sync unlimited devices', '10 GB monthly uploads', '200 MB max. note size', 'Customize Home dashboard and access extra widgets', 'Connect primary Google Calendar account'] },
  ];

  return (
    <div className="pricing-section">
      <Typography variant="h4" className="section-title" sx={{color: "#212529", fontWeight: 700, fontSize: "72px", lineHeight: "88px"}}>Choose Your Plan</Typography>
      <Typography className="pricing-paragraph" sx={{ fontWeight: 400, fontSize: "18px", lineHeight: "30px", color: "#212529", textAlign:"center"}}>Whether you want to get organized, keep your personal life on track, or boost workplace productivity, Evernote has the right plan for you.</Typography>
      <Grid container spacing={3} className="pricing-cards">
        {plans.map((plan, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card className="pricing-card">
              <CardContent>
                <Typography variant="h5">{plan.title}</Typography>
                <Typography variant="h6">{plan.price}</Typography>
                <ul>
                  {plan.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
                <Button variant="contained" color="primary">Get Started</Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default PriceSection;
