const kriteriaConfig = {
    "01": { // Tambah Gedung Sekolah Baru
      C1: { checked: true, bobot: 0.5, tipe: "benefit" },
      C2: { checked: true, bobot: 0.3, tipe: "cost" },
      C3: { checked: false, bobot: 0.2, tipe: "benefit" }
    },
    "02": { // Tambah Sarana Sanitasi
      C1: { checked: false, bobot: 0.4, tipe: "cost" },
      C2: { checked: true,  bobot: 0.4, tipe: "benefit" },
      C3: { checked: true,  bobot: 0.2, tipe: "cost" }
    }
  };
  
  document.getElementById("analisis").addEventListener("change", function () {
    updateJenjangForm(this.value);
    updateKriteriaForm(this.value);
  });

  function updateJenjangForm(analisis) {
    const jenjang = document.getElementById("jenjangWrapper");
    if (analisis === "00") {
        jenjang.style.display = "none"
    } else {
        jenjang.style.display = "block"
    }
  }
  
  function updateKriteriaForm(analisis) {
    const form = document.getElementById("formKriteria");
  
    for (let i = 1; i <= 3; i++) {
      const id = `C${i}`;
      const checkbox = form.querySelector(`input[name="kriteria"][value="${id}"]`);
      const bobot = form.querySelector(`[name="bobot${id}"]`);
      const tipe = form.querySelector(`[name="tipe${id}"]`);
  
      if (analisis === "00") {
        // Custom: aktifkan semua
        checkbox.disabled = false;
        bobot.disabled = false;
        tipe.disabled = false;
        checkbox.checked = true;
        bobot.value = 1;
        tipe.value = "benefit";
      } else {
        const conf = kriteriaConfig[analisis][id];
        checkbox.checked = conf.checked;
        checkbox.disabled = true;
        bobot.value = conf.bobot;
        bobot.disabled = true;
        tipe.value = conf.tipe;
        tipe.disabled = true;
      }
    }
  }
  
  // Inisialisasi saat halaman dimuat
  window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("analisis").dispatchEvent(new Event("change"));
  });

    document.getElementById("jenjangPendidikan").addEventListener("change", function() {
        let jenjang = this.value;
        document.getElementById("outputJenjang").innerText = jenjang;
    });

    function generateForm() {
      const altCount = +document.getElementById("altCount").value;
      const critCount = +document.getElementById("critCount").value;
      let html = '<h3>Bobot dan Tipe Kriteria</h3><table><tr><th>Kriteria</th>';

      for (let j = 0; j < critCount; j++) {
        html += `<th>K${j+1}</th>`;
      }

      html += '</tr><tr><td>Bobot</td>';
      for (let j = 0; j < critCount; j++) {
        html += `<td><input type="number" step="0.01" id="bobot${j}" value="1"/></td>`;
      }

      html += '</tr><tr><td>Tipe</td>';
      for (let j = 0; j < critCount; j++) {
        html += `<td><select id="tipe${j}"><option value="benefit">Benefit</option><option value="cost">Cost</option></select></td>`;
      }
      html += '</tr></table>';

      html += '<h3>Matrix Keputusan</h3><table><tr><th>Alternatif</th>';
      for (let j = 0; j < critCount; j++) {
        html += `<th>K${j+1}</th>`;
      }
      html += '</tr>';

      for (let i = 0; i < altCount; i++) {
        html += `<tr><td>A${i+1}</td>`;
        for (let j = 0; j < critCount; j++) {
          html += `<td><input type="number" step="0.01" id="cell-${i}-${j}" /></td>`;
        }
        html += '</tr>';
      }
      html += '</table>';
      document.getElementById("formArea").innerHTML = html;
      document.getElementById("resultArea").innerHTML = "";
    }

    function getSelectedKriteria() {
        const checkboxes = document.querySelectorAll('input[name="kriteria"]:checked');
        let selected = [];
        checkboxes.forEach(cb => selected.push(cb.value));
        return selected;
    }

    let kriteriaTerpilih = getSelectedKriteria();
    console.log("Kriteria terpilih:", kriteriaTerpilih);

    function runTOPSIS() {
      const altCount = +document.getElementById("altCount").value;
      const critCount = +document.getElementById("critCount").value;

      let matrix = [];
      for (let i = 0; i < altCount; i++) {
        let row = [];
        for (let j = 0; j < critCount; j++) {
          row.push(parseFloat(document.getElementById(`cell-${i}-${j}`).value));
        }
        matrix.push(row);
      }

      let bobot = [];
      let tipe = [];
      for (let j = 0; j < critCount; j++) {
        bobot.push(parseFloat(document.getElementById(`bobot${j}`).value));
        tipe.push(document.getElementById(`tipe${j}`).value);
      }

      // Normalisasi matriks
      let normMatrix = matrix.map(row => [...row]);
      for (let j = 0; j < critCount; j++) {
        let sumSquares = matrix.reduce((sum, row) => sum + row[j] ** 2, 0);
        let norm = Math.sqrt(sumSquares);
        for (let i = 0; i < altCount; i++) {
          normMatrix[i][j] = matrix[i][j] / norm;
        }
      }

      // Bobot * Normalisasi
      let weightedMatrix = normMatrix.map(row =>
        row.map((val, j) => val * bobot[j])
      );

      // Solusi ideal positif & negatif
      let idealPos = [], idealNeg = [];
      for (let j = 0; j < critCount; j++) {
        let col = weightedMatrix.map(row => row[j]);
        idealPos[j] = tipe[j] === "benefit" ? Math.max(...col) : Math.min(...col);
        idealNeg[j] = tipe[j] === "benefit" ? Math.min(...col) : Math.max(...col);
      }

      // Jarak ke solusi ideal
      let Dplus = [], Dminus = [];
      for (let i = 0; i < altCount; i++) {
        Dplus[i] = Math.sqrt(weightedMatrix[i].reduce((sum, val, j) => sum + (val - idealPos[j]) ** 2, 0));
        Dminus[i] = Math.sqrt(weightedMatrix[i].reduce((sum, val, j) => sum + (val - idealNeg[j]) ** 2, 0));
      }

      // Preferensi
      let preferences = Dminus.map((dmin, i) => dmin / (dmin + Dplus[i]));

      // Ranking
      let ranking = preferences.map((pref, i) => ({ alt: `A${i+1}`, score: pref }));
      ranking.sort((a, b) => b.score - a.score);

      // Output
      let resultHtml = "<h3>Hasil Perhitungan TOPSIS</h3><table><tr><th>Alternatif</th><th>Skor Preferensi</th></tr>";
      for (let r of ranking) {
        resultHtml += `<tr><td>${r.alt}</td><td>${r.score.toFixed(4)}</td></tr>`;
      }
      resultHtml += "</table>";
      document.getElementById("resultArea").innerHTML = resultHtml;
    }