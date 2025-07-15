# Google Forms Setup Guide

This guide shows how to set up Google Forms for your wedding guestbook - **no API keys needed!**

## Why Google Forms?

- ✅ **No API keys required** - just direct form submission
- ✅ **Free forever** - no quotas or limits
- ✅ **Automatic data collection** - responses go to Google Sheets
- ✅ **Simple setup** - just create a form and get the field IDs

## Step 1: Create Google Form

1. Go to [Google Forms](https://forms.google.com)
2. Create a new form
3. Add two fields:
   - **Name** (Short answer)
   - **Message** (Paragraph)

## Step 2: Get Field IDs

1. Click "Send" on your form
2. Copy the form link
3. Open the link in a new tab
4. Right-click on the **Name** field → "Inspect Element"
5. Look for `name="entry.XXXXXXXXX"` - copy the number part
6. Repeat for the **Message** field

## Step 3: Get Form Submit URL

1. In your form, click "Send"
2. Copy the form URL (looks like: `https://docs.google.com/forms/d/e/1FAIpQLSc.../viewform`)
3. Replace `viewform` with `formResponse`

## Step 4: Set Up Google Sheets (Optional - for reading comments)

1. In your form, click "Responses" tab
2. Click the green Sheets icon to create a spreadsheet
3. Open the spreadsheet
4. Click "Share" → "Anyone with the link can view"
5. Copy the spreadsheet ID from the URL

## Step 5: Update Environment Variables

Update your `.env.local` file:

```env
# Google Forms Configuration
VITE_GOOGLE_FORM_URL=https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
VITE_GOOGLE_FORM_NAME_FIELD_ID=123456789
VITE_GOOGLE_FORM_MESSAGE_FIELD_ID=987654321

# Google Sheets Configuration (for reading entries)
VITE_GOOGLE_SHEET_ID=your-spreadsheet-id-here
```

## Example Configuration

If your form URL is:
```
https://docs.google.com/forms/d/e/1FAIpQLSc1234567890/viewform
```

Your submit URL becomes:
```
https://docs.google.com/forms/d/e/1FAIpQLSc1234567890/formResponse
```

## How It Works

1. **Submitting**: Your website submits form data directly to Google Forms
2. **Reading**: Your website reads responses from the public Google Sheets CSV export
3. **No Auth**: No API keys, OAuth, or complex authentication needed!

## Benefits

- **Simple**: Just form submission - no complex API integration
- **Reliable**: Google Forms has 99.9% uptime
- **Free**: No costs or quotas
- **Secure**: Data stored in your Google account
- **Automatic**: Responses automatically saved to Google Sheets

## Troubleshooting

### Form submission not working?
- Check that your form URL ends with `formResponse`
- Verify field IDs are correct (inspect form elements)
- Ensure form is set to accept responses

### Can't read responses?
- Make sure Google Sheet is public (anyone with link can view)
- Check that spreadsheet ID is correct
- Verify the sheet has data in the expected format

This approach is much simpler than the Google Sheets API and doesn't require any authentication!
