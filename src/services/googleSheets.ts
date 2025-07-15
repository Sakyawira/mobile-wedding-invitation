// Google Sheets API service
interface GuestbookEntry {
  name: string;
  message: string;
  timestamp: string;
}

interface GoogleSheetsResponse {
  values?: string[][];
}

class GoogleSheetsService {
  private readonly apiKey: string;
  private readonly spreadsheetId: string;
  private readonly range: string = 'Sheet1!A:C'; // Name, Message, Timestamp

  constructor() {
    this.apiKey = (import.meta.env.VITE_GOOGLE_SHEETS_API_KEY as string) || '';
    this.spreadsheetId = (import.meta.env.VITE_GOOGLE_SHEETS_SPREADSHEET_ID as string) || '';
  }

  async appendEntry(entry: GuestbookEntry): Promise<boolean> {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${this.range}:append?valueInputOption=USER_ENTERED&key=${this.apiKey}`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            values: [[entry.name, entry.message, entry.timestamp]],
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return true;
    } catch (error) {
      console.error('Error appending to Google Sheets:', error);
      return false;
    }
  }

  async getEntries(): Promise<GuestbookEntry[]> {
    try {
      const response = await fetch(
        `https://sheets.googleapis.com/v4/spreadsheets/${this.spreadsheetId}/values/${this.range}?key=${this.apiKey}`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json() as GoogleSheetsResponse;
      const rows = data.values ?? [];

      // Skip header row if it exists
      const entries: GuestbookEntry[] = rows.slice(1).map((row: string[]) => ({
        name: row[0] || '',
        message: row[1] || '',
        timestamp: row[2] || '',
      }));

      return entries;
    } catch (error) {
      console.error('Error fetching from Google Sheets:', error);
      return [];
    }
  }
}

export const googleSheetsService = new GoogleSheetsService();
export type { GuestbookEntry };
