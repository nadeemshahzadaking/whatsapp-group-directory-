
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const sheetUrl = process.env.SHEET_URL;

  if (!sheetUrl) {
    return res.status(500).json({ error: 'Sheet URL not configured in Vercel' });
  }

  try {
    const response = await fetch(sheetUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    const result = await response.json();
    return res.status(200).json(result);
  } catch (error) {
    console.error('Sheet Proxy Error:', error);
    return res.status(500).json({ error: 'Failed to save data to sheet' });
  }
}
