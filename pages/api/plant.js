// pages/api/plant.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { plantName } = req.body;
      
      // You can perform any processing or validation here.
      
      // Return the values back to the user as JSON.
      res.status(200).json({ plantName });
    } else {
      res.status(405).end(); // Method not allowed for other HTTP methods.
    }
  }
  