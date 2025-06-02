# Decision Support System (DSS) - TOPSIS

A web-based decision support system for determining provincial priorities in educational infrastructure development using the TOPSIS method.

## Description

This system assists in decision-making to determine provincial priorities in educational infrastructure development by considering various criteria such as:
- Number of schools (Elementary, Junior High, Senior High, Vocational High)
- Classroom conditions
- Student ratios
- Water and sanitation availability
- And other criteria

## Prerequisites

- Python 3.x (for running local server)
- Modern web browser (Chrome, Firefox, Safari, etc.)
- Internet connection (for accessing CDN libraries)

## How to Run

1. Clone or download this repository to your computer
2. Open terminal/command prompt
3. Navigate to the repository directory:
   ```bash
   cd path/to/repository
   ```
4. Run Python server:
   ```bash
   python3 -m http.server 8000
   ```
5. Open web browser and access:
   ```
   http://localhost:8000
   ```

## File Structure

- `index.html` - Main HTML file containing the user interface
- `script.js` - JavaScript file containing application logic and TOPSIS calculations
- `dataset_spk.xlsx` - Dataset containing province and criteria data
- `README.md` - Repository documentation

## How to Use

1. Select analysis type:
   - Custom: Manually select criteria and weights
   - School Building Development Priority
   - Sanitation Facility Development Priority

2. Select education level (if not choosing Custom):
   - Elementary School (SD)
   - Junior High School (SMP)
   - Senior High School (SMA)
   - Vocational High School (SMK)

3. For custom analysis:
   - Check the criteria you want to use
   - Determine criteria type (Benefit/Cost/Match)
   - Enter weights for each criterion (total must be 100%)

4. Click "Calculate TOPSIS" button to start the calculation

5. Results will be displayed in a table containing:
   - Ranking
   - Province number
   - Province name
   - Preference score

6. Download options:
   - Click "Download Results (.pdf)" to save results in PDF format
   - Click "Download Results (.xlsx)" to save results in Excel format

## Important Notes

- Ensure total criteria weights equal 100%
- Dataset must be in Excel (.xlsx) format with the following structure:
  - First row: column headers
  - Column 1: No
  - Column 2: Province
  - Columns 3-62: C1 to C60
- Server must remain running while using the application
- To stop the server, press Ctrl+C in the terminal

## Technologies Used

- HTML5
- CSS3
- JavaScript
- SheetJS (for reading Excel files and generating XLSX)
- jsPDF (for generating PDF files)
- Chart.js (for generating charts)
- html2canvas (for chart rendering)

## Team

- Zaidurrohman (21/477632/PA/20678)
- Maritza Zahra Setyawan (22/494378/PA/21274)                    
- Aji Kusuma Putra (22/503701/PA/21657)

## License

This repository is created for academic purposes.
