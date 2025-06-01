// Configuration for different analysis types and education levels
const kriteriaConfig = {
  "01": { // Prioritas Pembangunan Gedung Sekolah Baru
    "SD": {
      "C3": { checked: true, bobot: 0.2, tipe: "cost" },    // Jumlah SD - Total
      "C13": { checked: true, bobot: 0.25, tipe: "cost" },  // Kondisi Ruang Kelas SD - Baik
      "C14": { checked: true, bobot: 0.25, tipe: "benefit" }, // Kondisi Ruang Kelas SD - Rusak Ringan
      "C15": { checked: true, bobot: 0.3, tipe: "benefit" }  // Kondisi Ruang Kelas SD - Rusak Berat
    },
    "SMP": {
      "C3": { checked: true, bobot: 0.2, tipe: "benefit" },  // Jumlah SD - Total
      "C6": { checked: true, bobot: 0.2, tipe: "cost" },     // Jumlah SMP - Total
      "C16": { checked: true, bobot: 0.15, tipe: "cost" },   // Kondisi Ruang Kelas SMP - Baik
      "C17": { checked: true, bobot: 0.2, tipe: "benefit" }, // Kondisi Ruang Kelas SMP - Rusak Ringan
      "C18": { checked: true, bobot: 0.25, tipe: "benefit" } // Kondisi Ruang Kelas SMP - Rusak Berat
    },
    "SMA": {
      "C6": { checked: true, bobot: 0.2, tipe: "benefit" },  // Jumlah SMP - Total
      "C9": { checked: true, bobot: 0.2, tipe: "cost" },     // Jumlah SMA - Total
      "C19": { checked: true, bobot: 0.15, tipe: "cost" },   // Kondisi Ruang Kelas SMA - Baik
      "C20": { checked: true, bobot: 0.2, tipe: "benefit" }, // Kondisi Ruang Kelas SMA - Rusak Ringan
      "C21": { checked: true, bobot: 0.25, tipe: "benefit" } // Kondisi Ruang Kelas SMA - Rusak Berat
    },
    "SMK": {
      "C6": { checked: true, bobot: 0.2, tipe: "benefit" },  // Jumlah SMP - Total
      "C12": { checked: true, bobot: 0.2, tipe: "cost" },    // Jumlah SMK - Total
      "C22": { checked: true, bobot: 0.15, tipe: "cost" },   // Kondisi Ruang Kelas SMK - Baik
      "C23": { checked: true, bobot: 0.2, tipe: "benefit" }, // Kondisi Ruang Kelas SMK - Rusak Ringan
      "C24": { checked: true, bobot: 0.25, tipe: "benefit" } // Kondisi Ruang Kelas SMK - Rusak Berat
    }
  },
  "02": { // Prioritas Pembangunan Sarana Sanitasi
    "SD": {
      "C37": { checked: true, bobot: 0.15, tipe: "cost" },   // Kecukupan Air - Cukup
      "C38": { checked: true, bobot: 0.2, tipe: "benefit" }, // Kecukupan Air - Kurang
      "C39": { checked: true, bobot: 0.25, tipe: "benefit" }, // Kecukupan Air - Tidak Ada
      "C49": { checked: true, bobot: 0.1, tipe: "cost" },    // Toilet - Terpisah
      "C50": { checked: true, bobot: 0.15, tipe: "benefit" }, // Toilet - Bersama
      "C51": { checked: true, bobot: 0.15, tipe: "benefit" }  // Toilet - Tidak Memiliki
    },
    "SMP": {
      "C40": { checked: true, bobot: 0.15, tipe: "cost" },
      "C41": { checked: true, bobot: 0.2, tipe: "benefit" },
      "C42": { checked: true, bobot: 0.25, tipe: "benefit" },
      "C52": { checked: true, bobot: 0.1, tipe: "cost" },
      "C53": { checked: true, bobot: 0.15, tipe: "benefit" },
      "C54": { checked: true, bobot: 0.15, tipe: "benefit" }
    },
    "SMA": {
      "C43": { checked: true, bobot: 0.15, tipe: "cost" },
      "C44": { checked: true, bobot: 0.2, tipe: "benefit" },
      "C45": { checked: true, bobot: 0.25, tipe: "benefit" },
      "C55": { checked: true, bobot: 0.1, tipe: "cost" },
      "C56": { checked: true, bobot: 0.15, tipe: "benefit" },
      "C57": { checked: true, bobot: 0.15, tipe: "benefit" }
    },
    "SMK": {
      "C46": { checked: true, bobot: 0.15, tipe: "cost" },
      "C47": { checked: true, bobot: 0.2, tipe: "benefit" },
      "C48": { checked: true, bobot: 0.25, tipe: "benefit" },
      "C58": { checked: true, bobot: 0.1, tipe: "cost" },
      "C59": { checked: true, bobot: 0.15, tipe: "benefit" },
      "C60": { checked: true, bobot: 0.15, tipe: "benefit" }
    }
  }
};

// Global variable to store the dataset
let dataset = null;

// Load Excel file
async function loadDataset() {
  try {
    const response = await fetch('dataset_spk.xlsx');
    const arrayBuffer = await response.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer);
    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    
    // Convert to JSON, starting from row 2 (index 1) since row 1 is headers
    const jsonData = XLSX.utils.sheet_to_json(worksheet, { 
      range: 1,  // Start from second row (index 1)
      header: ['No', 'Provinsi', ...Array.from({length: 60}, (_, i) => `C${i+1}`)], // Explicit headers
      raw: true  // Keep numbers as numbers
    });
    
    console.log('Raw data rows:', jsonData.length); // Log number of rows before filtering
    
    // Process the data and filter out invalid rows
    dataset = jsonData
      .filter(row => {
        // Filter out rows where No is 0, undefined, or empty
        const isValid = row['No'] && row['No'] !== 0 && row['Provinsi'] && row['Provinsi'].trim() !== '';
        if (!isValid) {
          console.log('Filtered out invalid row:', row);
        }
        return isValid;
      })
      .map(row => {
        const province = {
          id: parseInt(row['No']) || 0,
          name: row['Provinsi'].trim(),
          values: []
        };
        
        // Get values for criteria C1-C60
        for (let i = 1; i <= 60; i++) {
          const key = `C${i}`;
          const value = row[key];
          // Ensure we have a valid number
          const numValue = typeof value === 'number' ? value : 
                          (typeof value === 'string' ? parseFloat(value.replace(/,/g, '')) : 0);
          console.log(`C${i} raw value:`, value, 'parsed:', numValue); // Log each value and its parsed form
          province.values.push(isNaN(numValue) ? 0 : numValue);
        }
        
        console.log('Processed province:', province); // Log processed province data
        return province;
      });

    console.log('Final dataset rows:', dataset.length); // Log number of valid provinces
    console.log('First province:', dataset[0]); // Log first province for verification
    console.log('Last province:', dataset[dataset.length - 1]); // Log last province for verification
  } catch (error) {
    console.error('Error loading dataset:', error);
    alert('Gagal memuat dataset. Silakan periksa koneksi internet Anda.');
  }
}

// Event listeners
document.getElementById("analisis").addEventListener("change", function() {
  updateJenjangForm(this.value);
  updateKriteriaForm(this.value);
});

document.getElementById("jenjangPendidikan").addEventListener("change", function() {
  const analisis = document.getElementById("analisis").value;
  if (analisis !== "00") {
    updateKriteriaForm(analisis);
  }
});

// Update form based on analysis type
function updateJenjangForm(analisis) {
  const jenjang = document.getElementById("jenjangWrapper");
  if (analisis === "00") {
    jenjang.style.display = "none";
  } else {
    jenjang.style.display = "block";
  }
}

// Update criteria form based on analysis type and education level
function updateKriteriaForm(analisis) {
  const form = document.getElementById("formKriteria");
  const jenjang = document.getElementById("jenjangPendidikan").value;

  // Reset all criteria first
  const allCheckboxes = form.querySelectorAll('input[name="kriteria"]');
  const allBobots = form.querySelectorAll('[name^="bobot"]');
  const allTipes = form.querySelectorAll('[name^="tipe"]');

  allCheckboxes.forEach(cb => {
    cb.checked = false;
    cb.disabled = analisis !== "00";
  });
  allBobots.forEach(b => {
    b.value = "0";
    b.disabled = analisis !== "00";
  });
  allTipes.forEach(t => {
    t.value = "benefit";
    t.disabled = analisis !== "00";
  });

  if (analisis === "00") {
    // Custom mode - all criteria are unchecked and disabled
    updateTotalBobot();
    return;
  }

  // Apply configuration based on analysis type and education level
  const config = kriteriaConfig[analisis][jenjang];
  for (const [id, settings] of Object.entries(config)) {
    const checkbox = form.querySelector(`input[name="kriteria"][value="${id}"]`);
    const bobot = form.querySelector(`[name="bobot${id}"]`);
    const tipe = form.querySelector(`[name="tipe${id}"]`);

    checkbox.checked = settings.checked;
    checkbox.disabled = true;
    bobot.value = settings.bobot;
    bobot.disabled = true;
    tipe.value = settings.tipe;
    tipe.disabled = true;
  }

  updateTotalBobot();
}

function validateBobot() {
  const form = document.getElementById("formKriteria");
  const checkedKriteria = form.querySelectorAll('input[name="kriteria"]:checked');
  let totalBobot = 0;

  checkedKriteria.forEach(cb => {
    const id = cb.value;
    const bobot = parseFloat(form.querySelector(`[name="bobot${id}"]`).value) || 0;
    totalBobot += bobot;
  });

  return Math.abs(totalBobot - 1) < 0.0001; // Allow for small floating point errors
}

function getSelectedKriteria() {
  const form = document.getElementById("formKriteria");
  const checkedKriteria = form.querySelectorAll('input[name="kriteria"]:checked');
  let selected = [];

  checkedKriteria.forEach(cb => {
    const id = cb.value;
    const bobot = parseFloat(form.querySelector(`[name="bobot${id}"]`).value);
    const tipe = form.querySelector(`[name="tipe${id}"]`).value;
    selected.push({ id, bobot, tipe });
  });

  return selected;
}

// Update total bobot display
function updateTotalBobot() {
  const form = document.getElementById("formKriteria");
  const checkedKriteria = form.querySelectorAll('input[name="kriteria"]:checked');
  let totalBobot = 0;

  checkedKriteria.forEach(cb => {
    const id = cb.value;
    const bobot = parseFloat(form.querySelector(`[name="bobot${id}"]`).value) || 0;
    totalBobot += bobot;
  });

  document.getElementById("totalBobot").textContent = (totalBobot * 100).toFixed(2);
  return totalBobot;
}

// Add event listeners for bobot changes
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formKriteria");
  const bobotInputs = form.querySelectorAll('[name^="bobot"]');
  const checkboxes = form.querySelectorAll('input[name="kriteria"]');

  bobotInputs.forEach(input => {
    input.addEventListener("input", updateTotalBobot);
  });

  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", updateTotalBobot);
  });
});

// Run TOPSIS calculation
function runTOPSIS() {
  if (!dataset) {
    alert('Dataset belum dimuat. Silakan tunggu sebentar.');
    return;
  }

  if (!validateBobot()) {
    alert("Total bobot harus sama dengan 1 (100%)");
    return;
  }

  const selectedKriteria = getSelectedKriteria();
  if (selectedKriteria.length === 0) {
    alert("Pilih minimal satu kriteria");
    return;
  }

  console.log('Selected criteria:', selectedKriteria); // Log selected criteria
  console.log('First province values:', dataset[0].values); // Log first province values

  // Extract values and weights
  const matrix = dataset.map(p => 
    selectedKriteria.map(k => {
      const value = p.values[parseInt(k.id.substring(1)) - 1];
      console.log(`Value for ${k.id}:`, value, 'type:', typeof value); // Log each value being used
      return value;
    })
  );
  console.log('Matrix:', matrix[0]); // Log first row of matrix

  const weights = selectedKriteria.map(k => k.bobot);
  const types = selectedKriteria.map(k => k.tipe);

  // Normalize matrix
  const normMatrix = matrix.map(row => [...row]);
  for (let j = 0; j < selectedKriteria.length; j++) {
    const sumSquares = matrix.reduce((sum, row) => sum + row[j] ** 2, 0);
    const norm = Math.sqrt(sumSquares);
    for (let i = 0; i < dataset.length; i++) {
      normMatrix[i][j] = matrix[i][j] / norm;
    }
  }

  // Calculate weighted normalized matrix
  const weightedMatrix = normMatrix.map(row =>
    row.map((val, j) => val * weights[j])
  );

  // Find ideal positive and negative solutions
  const idealPos = [], idealNeg = [];
  for (let j = 0; j < selectedKriteria.length; j++) {
    const col = weightedMatrix.map(row => row[j]);
    idealPos[j] = types[j] === "benefit" ? Math.max(...col) : Math.min(...col);
    idealNeg[j] = types[j] === "benefit" ? Math.min(...col) : Math.max(...col);
  }

  // Calculate distances to ideal solutions
  const Dplus = [], Dminus = [];
  for (let i = 0; i < dataset.length; i++) {
    Dplus[i] = Math.sqrt(weightedMatrix[i].reduce((sum, val, j) => 
      sum + (val - idealPos[j]) ** 2, 0));
    Dminus[i] = Math.sqrt(weightedMatrix[i].reduce((sum, val, j) => 
      sum + (val - idealNeg[j]) ** 2, 0));
  }

  // Calculate preference scores
  const preferences = Dminus.map((dmin, i) => dmin / (dmin + Dplus[i]));

  // Create ranking
  const ranking = dataset.map((province, i) => ({
    id: province.id,
    name: province.name,
    score: preferences[i]
  }));
  ranking.sort((a, b) => b.score - a.score);

  // Display results
  const resultArea = document.getElementById("resultArea");
  let resultHtml = `
    <h3>Hasil Perhitungan TOPSIS</h3>
    <table>
      <tr>
        <th>Ranking</th>
        <th>No.</th>
        <th>Provinsi</th>
        <th>Skor Preferensi</th>
      </tr>
  `;

  ranking.forEach((r, index) => {
    resultHtml += `
      <tr>
        <td>${index + 1}</td>
        <td>${r.id}</td>
        <td>${r.name}</td>
        <td>${r.score.toFixed(4)}</td>
      </tr>
    `;
  });

  resultHtml += "</table>";
  resultArea.innerHTML = resultHtml;

  // Enable download button
  document.getElementById("downloadBtn").disabled = false;
}

// Download results as PNG
function downloadResults() {
  const resultArea = document.getElementById("resultArea");
  if (!resultArea.innerHTML) {
    alert("Tidak ada hasil untuk diunduh");
    return;
  }

  // Use html2canvas to convert the result area to PNG
  html2canvas(resultArea).then(canvas => {
    const link = document.createElement('a');
    link.download = 'hasil-topsis.png';
    link.href = canvas.toDataURL();
    link.click();
  });
}

// Initialize form and load dataset on page load
window.addEventListener("DOMContentLoaded", () => {
  document.getElementById("analisis").dispatchEvent(new Event("change"));
  loadDataset();
});