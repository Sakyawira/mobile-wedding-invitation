// Google Forms service - no API key needed!
interface GuestbookEntry {
  name: string;
  message: string;
  timestamp: string;
}

class GoogleFormsService {
  private readonly formUrl: string;
  private readonly nameFieldId: string;
  private readonly messageFieldId: string;

  constructor() {
    // These come from your Google Form
    this.formUrl = (import.meta.env.VITE_GOOGLE_FORM_URL as string) || '';
    this.nameFieldId = (import.meta.env.VITE_GOOGLE_FORM_NAME_FIELD_ID as string) || '';
    this.messageFieldId = (import.meta.env.VITE_GOOGLE_FORM_MESSAGE_FIELD_ID as string) || '';
  }

  async appendEntry(entry: GuestbookEntry): Promise<boolean> {
    try {
      console.log('Attempting to submit to Google Form:', entry);
      
      // Create form data
      const formData = new FormData();
      formData.append(`entry.${this.nameFieldId}`, entry.name);
      formData.append(`entry.${this.messageFieldId}`, entry.message);
      
      const response = await fetch(this.formUrl, {
        method: 'POST',
        body: formData,
        mode: 'no-cors' // Important for Google Forms
      });

      console.log('Form submission response status:', response.status);
      
      // With no-cors, we can't read the response, but if no error is thrown, it worked
      return true;
    } catch (error) {
      console.error('Error submitting to Google Form:', error);
      return false;
    }
  }

  // For reading, we'll use the public CSV export of the Google Sheet
  async getEntries(): Promise<GuestbookEntry[]> {
    try {
      const spreadsheetId = (import.meta.env.VITE_GOOGLE_SHEET_ID as string) || '';
      
      if (!spreadsheetId) {
        console.warn('No spreadsheet ID configured for reading entries');
        return [];
      }

      // Google Sheets public CSV export URL
      const csvUrl = `https://docs.google.com/spreadsheets/d/${spreadsheetId}/export?format=csv&gid=0`;
      
      const response = await fetch(csvUrl);
      
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const csvText = await response.text();
      const lines = csvText.split('\n');
      
      // Skip header row and parse CSV
      const entries: GuestbookEntry[] = lines.slice(1)
        .filter(line => line.trim())
        .map(line => {
          const [timestamp, name, message] = line.split(',').map(cell => 
            cell.replace(/"/g, '').trim()
          );
          return {
            name: name || '',
            message: message || '', 
            timestamp: timestamp || ''
          };
        });

      return entries;
    } catch (error) {
      console.error('Error fetching from Google Sheets:', error);
      return [];
    }
  }
}

export const googleSheetsService = new GoogleFormsService();
export type { GuestbookEntry };
