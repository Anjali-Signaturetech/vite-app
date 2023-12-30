import { useQuery } from 'react-query';

export const fetchPostmanCollection = async (formData) => {
    const res = await fetch('https://api.postman.com/collections/1514998-7cfb5e55-bc5a-498d-ba9e-262b6a2d5660?access_key=PMAT-01H6KSBCR7P6Q41KGG04EGQPX3',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body: JSON.stringify(formData),
      });

  if (!res.ok) {
    throw new Error('Failed to fetch Postman collection');
  }

  return res.json();
};