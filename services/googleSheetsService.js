const { google } = require("googleapis");
const config = require("../config");

// Google Sheets API setup
const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];
const auth = new google.auth.JWT(
  config.GOOGLE_CLIENT_EMAIL,
  null,
  config.GOOGLE_PRIVATE_KEY,
  SCOPES
);

const sheets = google.sheets({ version: "v4", auth });

/**
 * Appends data to a specified Google Sheets range.
 *
 * @param {string} spreadsheetId - The ID of the spreadsheet.
 * @param {string} range - The range (e.g., sheet name or cell range) to append data.
 * @param {Array<string>} values - The data to append as a 2D array.
 */

exports.appendDataToSheet = async (spreadsheetId, range, data) => {
  await sheets.spreadsheets.values.append({
    spreadsheetId,
    range,
    valueInputOption: "USER_ENTERED",
    requestBody: { values: [data] },
  });
};
