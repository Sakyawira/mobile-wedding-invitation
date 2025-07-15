# Google Sheets API Setup Guide

## Step 1: Create a Google Cloud Project
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable the "Google Sheets API" in the API Library

## Step 2: Create API Key
1. Go to "Credentials" in the left sidebar
2. Click "Create Credentials" → "API key"
3. Copy your API key
4. **Optional but recommended**: Restrict the API key to only Google Sheets API

## Step 3: Create Google Spreadsheet
1. Go to [Google Sheets](https://sheets.google.com/)
2. Create a new spreadsheet
3. Add headers in the first row: `Name`, `Message`, `Timestamp`
4. Make the spreadsheet public:
   - Click "Share" button
   - Change access to "Anyone with the link can view"
   - Copy the spreadsheet ID from the URL (the long string between `/d/` and `/edit`)

## Step 4: Configure Environment Variables
1. Open `.env.local` in your project root
2. Replace the placeholder values:
   ```
   VITE_GOOGLE_SHEETS_API_KEY=your_actual_api_key_here
   VITE_GOOGLE_SHEETS_SPREADSHEET_ID=your_actual_spreadsheet_id_here
   ```

## Step 5: Security Best Practices
1. **API Key Restrictions**: 
   - In Google Cloud Console, restrict your API key to only Google Sheets API
   - Add HTTP referrer restrictions:
     - For development: `http://localhost:*` 
     - For production: `https://sakyawira.github.io/*`
     - If using custom domain: `https://yourdomain.com/*`
   
2. **Spreadsheet Permissions**:
   - Only make the spreadsheet "viewable" by anyone with the link
   - Never give "edit" permissions to the public
   
3. **Rate Limiting**: 
   - Google Sheets API has quotas (100 requests per 100 seconds per user)
   - Consider adding client-side rate limiting if needed

## Important Notes about GitHub Pages Security:
- `https://sakyawira.github.io/*` will work for ALL your GitHub Pages projects
- Each GitHub username gets its own subdomain, so other users can't access your API key
- The `*` wildcard allows any path under your domain (like `/mobile-wedding-invitation/`)
- Always include both localhost (for development) and your production domain

## Step 6: Test Your Setup
1. Run `npm run dev`
2. Try submitting a message through the form
3. Check your Google Spreadsheet to see if the data appears

## Optional: Create a Guestbook Display Component
Want to show submitted messages on your site? Here's a basic component:

```tsx
import { useState, useEffect } from 'react';
import { googleSheetsService, GuestbookEntry } from '../services/googleSheets';

const GuestbookDisplay = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchEntries = async () => {
      const data = await googleSheetsService.getEntries();
      setEntries(data.reverse()); // Show newest first
      setLoading(false);
    };

    fetchEntries();
  }, []);

  if (loading) return <div>Loading messages...</div>;

  return (
    <div>
      {entries.map((entry, index) => (
        <div key={index} style={{ marginBottom: '20px', padding: '10px', border: '1px solid #ccc' }}>
          <strong>{entry.name}</strong>
          <p>{entry.message}</p>
          <small>{new Date(entry.timestamp).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
};
```

## Troubleshooting
- **403 Forbidden**: Check API key restrictions and spreadsheet permissions
- **400 Bad Request**: Verify spreadsheet ID is correct
- **CORS Issues**: Make sure API key has proper HTTP referrer restrictions
- **Rate Limiting**: Add delays between requests if hitting quotas

## Cost
- Google Sheets API is free for most use cases
- 100 requests per 100 seconds per user
- 500 requests per 100 seconds for the entire project
- Perfect for wedding guestbook traffic levels!
