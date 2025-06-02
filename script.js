// Configuration for different analysis types and education levels
const analisisConfig = {
  "00": "Kustom",
  "01": "Prioritas Pembangunan Gedung Sekolah Baru",
  "02": "Prioritas Pembangunan Sarana Sanitasi",
  "03": "Prioritas Peningkatan Kualitas Pengajaran"
};

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
  },
  "03": { // Prioritas Peningkatan Kualitas Pengajaran
    "SD": {
      "C25": { checked: true, bobot: 0.4, tipe: "benefit" },  // Rasio Peserta Didik per Rombel - SD
      "C33": { checked: true, bobot: 0.4, tipe: "benefit" },  // Rasio Murid-Guru - SD
      "C29": { checked: true, bobot: 0.2, tipe: "benefit" }   // Rasio Rombel per Kelas - SD
    },
    "SMP": {
      "C26": { checked: true, bobot: 0.4, tipe: "benefit" },  // Rasio Peserta Didik per Rombel - SMP
      "C34": { checked: true, bobot: 0.4, tipe: "benefit" },  // Rasio Murid-Guru - SMP
      "C30": { checked: true, bobot: 0.2, tipe: "benefit" }   // Rasio Rombel per Kelas - SMP
    },
    "SMA": {
      "C27": { checked: true, bobot: 0.4, tipe: "benefit" },  // Rasio Peserta Didik per Rombel - SMA
      "C35": { checked: true, bobot: 0.4, tipe: "benefit" },  // Rasio Murid-Guru - SMA
      "C31": { checked: true, bobot: 0.2, tipe: "benefit" }   // Rasio Rombel per Kelas - SMA
    },
    "SMK": {
      "C28": { checked: true, bobot: 0.4, tipe: "benefit" },  // Rasio Peserta Didik per Rombel - SMK
      "C36": { checked: true, bobot: 0.4, tipe: "benefit" },  // Rasio Murid-Guru - SMK
      "C32": { checked: true, bobot: 0.2, tipe: "benefit" }   // Rasio Rombel per Kelas - SMK
    }
  }
};

// Global variable to store the dataset
let dataset = null;

// Load Excel file
async function loadDataset() {
  try {
    const response = await fetch('dataset.xlsx');
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
  
// Function to get criteria label from checkbox label
function getCriteriaLabel(criteriaId) {
  const checkbox = document.querySelector(`input[name="kriteria"][value="${criteriaId}"]`);
  if (!checkbox) return criteriaId;
  const label = checkbox.parentElement.textContent.trim();
  return label.replace(/^\s*\d+\s*-\s*/, ''); // Remove leading number and dash
}

// Function to update selected criteria display
function updateSelectedKriteriaDisplay() {
  const tbody = document.querySelector('#selectedKriteriaTable tbody');
  const selectedKriteria = getSelectedKriteria();
  
  // Clear existing rows
  tbody.innerHTML = '';
  
  // Add new rows for each selected criteria
  selectedKriteria.forEach(k => {
    const row = document.createElement('tr');
    const label = getCriteriaLabel(k.id);
    
    row.innerHTML = `
      <td>${k.id}</td>
      <td>${label}</td>
      <td>${k.tipe.charAt(0).toUpperCase() + k.tipe.slice(1)}</td>
      <td>${k.bobot}%</td>
    `;
    
    tbody.appendChild(row);
  });
}

// Function to update controls state based on checkbox
function updateControlsState(checkbox) {
  const id = checkbox.value;
  const bobot = document.querySelector(`[name="bobot${id}"]`);
  const tipe = document.querySelector(`[name="tipe${id}"]`);
  const analisis = document.getElementById("analisis").value;
  const isCustom = analisis === "00";
  
  // Enable/disable controls based on checkbox state and analysis type
  if (isCustom) {
    // In custom mode, enable controls if checked, disable if unchecked
    bobot.disabled = !checkbox.checked;
    tipe.disabled = !checkbox.checked;
    
    // Reset values if unchecked
    if (!checkbox.checked) {
      bobot.value = "0";
      tipe.value = "benefit";
    }
  } else {
    // In predefined mode, controls are always disabled
    bobot.disabled = true;
    tipe.disabled = true;
  }
}

// Function to validate weight input
function validateWeight(input) {
  let value = parseInt(input.value, 10);
  
  // If input is empty or not a number, set to 0
  if (isNaN(value)) {
    value = 0;
  }
  
  // Only enforce range [0,100] for individual weight
  if (value < 0) {
    value = 0;
  } else if (value > 100) {
    value = 100;
  }
  
  // Update input value
  input.value = value;
  
  // Update displays without any total weight validation
  updateTotalBobot();
  updateSelectedKriteriaDisplay();
}

// Update total bobot display
function updateTotalBobot() {
  const selectedKriteria = getSelectedKriteria();
  const totalBobot = selectedKriteria.reduce((sum, k) => sum + k.bobot, 0);
  document.getElementById("totalBobot").textContent = totalBobot;
  return totalBobot;
}

// Get selected criteria with their types and weights
function getSelectedKriteria() {
  const form = document.getElementById("formKriteria");
  const checkedKriteria = form.querySelectorAll('input[name="kriteria"]:checked');
  let selected = [];

  checkedKriteria.forEach(cb => {
    const id = cb.value;
    const bobot = parseInt(form.querySelector(`[name="bobot${id}"]`).value) || 0;
    const tipe = form.querySelector(`[name="tipe${id}"]`).value;
    selected.push({ id, bobot, tipe });
  });

  return selected;
}

// Function to validate total bobot (only called when TOPSIS button is clicked)
function validateBobot() {
  const totalBobot = updateTotalBobot();
  if (totalBobot !== 100) {
    alert("Total bobot harus sama dengan 100");
    return false;
  }
  return true;
}

// Update criteria form based on analysis type and education level
  function updateKriteriaForm(analisis) {
    const form = document.getElementById("formKriteria");
  const jenjang = document.getElementById("jenjangPendidikan").value;
  const isCustom = analisis === "00";

  // Reset all criteria first
  const allCheckboxes = form.querySelectorAll('input[name="kriteria"]');
  const allBobots = form.querySelectorAll('[name^="bobot"]');
  const allTipes = form.querySelectorAll('[name^="tipe"]');

  // Reset and disable all controls first
  allCheckboxes.forEach(cb => {
    cb.checked = false;
    cb.disabled = !isCustom;
  });
  
  allBobots.forEach(bobot => {
    bobot.value = "0";
    bobot.disabled = true;
  });
  
  allTipes.forEach(tipe => {
    tipe.value = "benefit";
    tipe.disabled = true;
  });

  if (isCustom) {
    // Custom mode - just reset the form
    updateTotalBobot();
    updateSelectedKriteriaDisplay();
    return;
  }

  // Apply configuration based on analysis type and education level
  const config = kriteriaConfig[analisis][jenjang];
  for (const [id, settings] of Object.entries(config)) {
      const checkbox = form.querySelector(`input[name="kriteria"][value="${id}"]`);
      const bobot = form.querySelector(`[name="bobot${id}"]`);
      const tipe = form.querySelector(`[name="tipe${id}"]`);
  
    if (checkbox) {
      checkbox.checked = settings.checked;
        checkbox.disabled = true;
      if (bobot) {
        // Convert decimal weight to percentage
        bobot.value = Math.round(settings.bobot * 100);
        bobot.disabled = true;
      }
      if (tipe) {
        tipe.value = settings.tipe;
        tipe.disabled = true;
      }
    }
  }
  
  updateTotalBobot();
  updateSelectedKriteriaDisplay();
}

// Run TOPSIS calculation
function runTOPSIS() {
  if (!dataset) {
    alert('Dataset belum dimuat. Silakan tunggu sebentar.');
    return;
  }

  // Validate total bobot only when TOPSIS button is clicked
  if (!validateBobot()) {
    return;
  }

  const selectedKriteria = getSelectedKriteria();
  if (selectedKriteria.length === 0) {
    alert("Pilih minimal satu kriteria");
    return;
  }

  // Convert percentage weights back to decimal for TOPSIS calculation
  const weights = selectedKriteria.map(k => k.bobot / 100);
  const types = selectedKriteria.map(k => k.tipe);

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

  resultHtml += `
    </table>
    <div style="margin-top: 30px;">
      <h3>Grafik Ranking Provinsi</h3>
      <div style="height: 800px; width: 100%; position: relative; display: flex; justify-content: center;">
        <div style="width: 80%; position: relative; padding-left: 200px;">
          <canvas id="rankingChart"></canvas>
        </div>
      </div>
    </div>
  `;
  
  resultArea.innerHTML = resultHtml;

  // Create bar chart
  const ctx = document.getElementById('rankingChart').getContext('2d');
  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ranking.map(r => r.name),
      datasets: [{
        label: 'Skor Preferensi',
        data: ranking.map(r => r.score),
        backgroundColor: 'rgba(41, 128, 185, 0.7)',
        borderColor: 'rgba(41, 128, 185, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      layout: {
        padding: {
          left: 0,
          right: 20,
          top: 20,
          bottom: 20
        }
      },
      plugins: {
        legend: {
          display: false
        },
        title: {
          display: true,
          text: 'Skor Preferensi per Provinsi',
          font: {
            size: 14,
            weight: 'bold'
          },
          padding: {
            bottom: 20
          },
          align: 'center'
        },
        tooltip: {
          enabled: true,
          mode: 'index',
          intersect: false
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Skor Preferensi',
            font: {
              size: 12,
              weight: 'bold'
            },
            align: 'center'
          },
          ticks: {
            font: {
              size: 10
            }
          },
          grid: {
            display: true,
            drawBorder: true
          }
        },
        y: {
          title: {
            display: true,
            text: 'Provinsi',
            font: {
              size: 12,
              weight: 'bold'
            }
          },
          ticks: {
            font: {
              size: 11
            },
            padding: 5,
            align: 'end',
            mirror: false
          },
          grid: {
            display: false
          },
          position: 'left'
        }
      }
    }
  });

  // Enable download buttons
  document.getElementById("downloadBtn").disabled = false;
  document.getElementById("downloadXLSXBtn").disabled = false;
}

// Download results as PDF
function downloadResults() {
  const resultArea = document.getElementById("resultArea");
  if (!resultArea.innerHTML) {
    alert("Tidak ada hasil untuk diunduh");
    return;
  }

  try {
    // Get analysis type and education level
    const analisis = document.getElementById("analisis");
    const jenjang = document.getElementById("jenjangPendidikan");
    const analisisText = analisis.options[analisis.selectedIndex].text;
    const jenjangText = analisis.value === "00" ? "-" : jenjang.value;

    // Create new PDF document using window.jspdf
    const doc = new window.jspdf.jsPDF();
    
    // Set font to support Indonesian characters
    doc.setFont("helvetica");
    
    // Add title
    doc.setFontSize(16);
    doc.text("Hasil Analisis TOPSIS", 105, 15, { align: "center" });
    
    // Add analysis info
    doc.setFontSize(12);
    doc.text(`Jenis Analisis: ${analisisText}`, 14, 25);
    doc.text(`Jenjang Pendidikan: ${jenjangText}`, 14, 32);
    
    // Add selected criteria table
    const selectedKriteriaTable = document.getElementById("selectedKriteriaTable");
    if (selectedKriteriaTable) {
      const criteriaData = [];
      const rows = selectedKriteriaTable.querySelectorAll('tbody tr');
      
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 4) {
          criteriaData.push([
            cells[0].textContent.trim(), // Kode
            cells[1].textContent.trim(), // Kriteria
            cells[2].textContent.trim(), // Tipe
            cells[3].textContent.trim()  // Bobot
          ]);
        }
      });

      if (criteriaData.length > 0) {
        doc.setFontSize(14);
        doc.text("Kriteria Terpilih", 14, 45);
        
        doc.autoTable({
          startY: 50,
          head: [['Kode', 'Kriteria', 'Tipe', 'Bobot']],
          body: criteriaData,
          theme: 'grid',
          headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 10 },
          bodyStyles: { fontSize: 9 },
          columnStyles: {
            0: { cellWidth: 25 }, // Kode
            1: { cellWidth: 80 }, // Kriteria
            2: { cellWidth: 30 }, // Tipe
            3: { cellWidth: 25 }  // Bobot
          }
        });
      }
    }

    // Add ranking table
    const rankingTable = resultArea.querySelector('table');
    if (rankingTable) {
      const rankingData = [];
      const rows = rankingTable.querySelectorAll('tbody tr');
      
      rows.forEach(row => {
        const cells = row.querySelectorAll('td');
        if (cells.length >= 4) {
          rankingData.push([
            cells[0].textContent.trim(), // Ranking
            cells[1].textContent.trim(), // No.
            cells[2].textContent.trim(), // Provinsi
            cells[3].textContent.trim()  // Skor
          ]);
        }
      });

      if (rankingData.length > 0) {
        // Get the Y position after the criteria table
        const finalY = doc.lastAutoTable ? doc.lastAutoTable.finalY : 50;
        
        doc.setFontSize(14);
        doc.text("Hasil Ranking Provinsi", 14, finalY + 15);
        
        doc.autoTable({
          startY: finalY + 20,
          head: [['Ranking', 'No.', 'Provinsi', 'Skor Preferensi']],
          body: rankingData,
          theme: 'grid',
          headStyles: { fillColor: [41, 128, 185], textColor: 255, fontSize: 10 },
          bodyStyles: { fontSize: 9 },
          columnStyles: {
            0: { cellWidth: 25 }, // Ranking
            1: { cellWidth: 20 }, // No.
            2: { cellWidth: 80 }, // Provinsi
            3: { cellWidth: 35 }  // Skor
          }
        });

        // Add chart
        const chartCanvas = document.getElementById('rankingChart');
        if (chartCanvas) {
          // Get the actual dimensions of the chart canvas
          const canvasWidth = chartCanvas.width;
          const canvasHeight = chartCanvas.height;
          const aspectRatio = canvasWidth / canvasHeight;

          // Calculate dimensions that maintain aspect ratio and fit the page
          const pageWidth = doc.internal.pageSize.width;
          const pageHeight = doc.internal.pageSize.height;
          const maxChartWidth = pageWidth - 40; // Leave 20px margin on each side
          const maxChartHeight = pageHeight - 100; // Leave space for title and timestamp

          // Calculate dimensions that maintain aspect ratio
          let chartWidth = maxChartWidth;
          let chartHeight = chartWidth / aspectRatio;

          // If height is too large, scale based on height instead
          if (chartHeight > maxChartHeight) {
            chartHeight = maxChartHeight;
            chartWidth = chartHeight * aspectRatio;
          }

          const chartImage = chartCanvas.toDataURL('image/png');
          const chartY = doc.lastAutoTable.finalY + 20;
          const chartX = (pageWidth - chartWidth) / 2;

          // Check if we need a new page
          if (chartY + chartHeight + 40 > pageHeight) {
            doc.addPage();
            doc.setFontSize(14);
            doc.text("Grafik Ranking Provinsi", pageWidth / 2, 20, { align: "center" });
            // Add chart on new page with proper spacing
            doc.addImage(chartImage, 'PNG', chartX, 30, chartWidth, chartHeight, undefined, 'FAST');
          } else {
            doc.setFontSize(14);
            doc.text("Grafik Ranking Provinsi", pageWidth / 2, chartY, { align: "center" });
            // Add chart on current page with proper spacing
            doc.addImage(chartImage, 'PNG', chartX, chartY + 5, chartWidth, chartHeight, undefined, 'FAST');
          }

          // Add timestamp on the last page
          const timestamp = new Date().toLocaleString('id-ID');
          doc.setFontSize(8);
          doc.text(`Dihasilkan pada: ${timestamp}`, 14, pageHeight - 10);
        }
      }
    }

    // Save the PDF
    const fileName = `hasil-topsis-${analisisText.toLowerCase().replace(/\s+/g, '-')}-${jenjangText.toLowerCase()}.pdf`;
    doc.save(fileName);
  } catch (error) {
    console.error('Error generating PDF:', error);
    alert('Terjadi kesalahan saat mengunduh hasil. Silakan coba lagi.');
  }
}

// Download results as XLSX
function downloadXLSX() {
  const resultArea = document.getElementById("resultArea");
  if (!resultArea.innerHTML) {
    alert("Tidak ada hasil untuk diunduh");
    return;
  }

  try {
    // Get analysis type and education level
    const analisis = document.getElementById("analisis");
    const jenjang = document.getElementById("jenjangPendidikan");
    const analisisText = analisis.options[analisis.selectedIndex].text;
    const jenjangText = analisis.value === "00" ? "-" : jenjang.value;

    // Get ranking data
    const rankingTable = resultArea.querySelector('table');
    if (!rankingTable) {
      throw new Error("Tabel ranking tidak ditemukan");
    }

    const rankingData = [];
    const rows = rankingTable.querySelectorAll('tbody tr');
    
    // Add headers
    rankingData.push(['Ranking', 'No.', 'Provinsi', 'Skor Preferensi']);
    
    // Add data rows
    rows.forEach(row => {
      const cells = row.querySelectorAll('td');
      if (cells.length >= 4) {
        rankingData.push([
          cells[0].textContent.trim(), // Ranking
          cells[1].textContent.trim(), // No.
          cells[2].textContent.trim(), // Provinsi
          cells[3].textContent.trim()  // Skor
        ]);
      }
    });

    // Create worksheet
    const ws = XLSX.utils.aoa_to_sheet(rankingData);

    // Set column widths
    const wscols = [
      {wch: 10}, // Ranking
      {wch: 8},  // No.
      {wch: 30}, // Provinsi
      {wch: 15}  // Skor
    ];
    ws['!cols'] = wscols;

    // Create workbook
    const wb = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, "Hasil Ranking");

    // Add metadata
    wb.Props = {
      Title: `Hasil Analisis TOPSIS - ${analisisText}`,
      Subject: `Jenjang Pendidikan: ${jenjangText}`,
      Author: "Sistem Pendukung Keputusan",
      CreatedDate: new Date()
    };

    // Generate filename
    const fileName = `hasil-topsis-${analisisText.toLowerCase().replace(/\s+/g, '-')}-${jenjangText.toLowerCase()}.xlsx`;

    // Save file
    XLSX.writeFile(wb, fileName);
  } catch (error) {
    console.error('Error generating XLSX:', error);
    alert('Terjadi kesalahan saat mengunduh hasil. Silakan coba lagi.');
  }
}

// Add event listeners for form changes
document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("formKriteria");
  const checkboxes = form.querySelectorAll('input[name="kriteria"]');
  const bobotInputs = form.querySelectorAll('[name^="bobot"]');
  const tipeSelects = form.querySelectorAll('[name^="tipe"]');

  // Add change event listeners to checkboxes
  checkboxes.forEach(checkbox => {
    checkbox.addEventListener("change", () => {
      updateControlsState(checkbox);
      updateTotalBobot();
      updateSelectedKriteriaDisplay();
    });
  });

  // Add input event listeners to weight inputs
  bobotInputs.forEach(input => {
    input.addEventListener("input", () => {
      updateTotalBobot();
      updateSelectedKriteriaDisplay();
    });
  });

  // Add change event listeners to type selects
  tipeSelects.forEach(select => {
    select.addEventListener("change", () => {
      updateSelectedKriteriaDisplay();
    });
  });

  // Initial form update
  document.getElementById("analisis").dispatchEvent(new Event("change"));
});

// Function to populate analysis type select element
function populateAnalisisSelect() {
  const select = document.getElementById("analisis");
  
  // Clear existing options
  select.innerHTML = '';
  
  // Add options from config
  Object.entries(analisisConfig).forEach(([value, text]) => {
    const option = document.createElement('option');
    option.value = value;
    option.textContent = text;
    select.appendChild(option);
  });
}

// Initialize form and load dataset on page load
window.addEventListener("DOMContentLoaded", () => {
  populateAnalisisSelect();
  document.getElementById("analisis").dispatchEvent(new Event("change"));
  loadDataset();
});