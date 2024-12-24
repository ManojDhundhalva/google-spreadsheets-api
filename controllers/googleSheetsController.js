const googleSheetsService = require("../services/googleSheetsService");

exports.storeData = async (req, res) => {
  const { spreadsheetId, sheetName, data } = req.body;

  const isValidInput = () => {
    return (
      typeof spreadsheetId === "string" &&
      spreadsheetId.trim() !== "" &&
      typeof sheetName === "string" &&
      sheetName.trim() !== "" &&
      Array.isArray(data) &&
      data.every((item) => typeof item === "string")
    );
  };

  if (!isValidInput()) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid input parameters" });
  }

  try {
    await googleSheetsService.appendDataToSheet(spreadsheetId, sheetName, data);
    return res.status(200).json({ success: true, message: "Data stored!" });
  } catch (error) {
    return res
      .status(500)
      .json({ success: false, message: error.message });
  }
};
