// Fungsi untuk menghasilkan bilangan bulat acak antara min dan max (inklusif)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  // Fungsi untuk mengisi array dengan nilai acak antara 1 dan 50
  function fillArrayWithRandomValues(length) {
    const arr = []; // Mendeklarasikan 
    for (let i = 0; i < length; i++) {
      arr.push(getRandomInt(1, 50));
    }
    return arr;
  }
  
  // Fungsi untuk membagi array menjadi dua berdasarkan indeks (genap dan ganjil)
  function splitArrayByIndex(arr) {
    const Arraygenap = [];
    const Arrayganjil = [];
    for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 0) {
        Arraygenap.push(arr[i]);
      } else {
        Arrayganjil.push(arr[i]);
      }
    }
    return [Arraygenap, Arrayganjil];
  }
  
  // Fungsi untuk menghitung nilai minimum dalam array
  function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  
  // Fungsi untuk menghitung nilai maksimum dalam array
  function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  
  // Fungsi untuk menghitung total nilai dalam array
  function calculateTotal(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
      total += arr[i];
    }
    return total;
  }
  
  // Fungsi untuk menghitung rata-rata dalam array
  function calculateAverage(arr) {
    const total = calculateTotal(arr);
    return total / arr.length;
  }
  
  // Membuat array dengan 100 nilai acak
  const randomArray = fillArrayWithRandomValues(100);
  
  // Membagi array menjadi dua (genap dan ganjil)
  const [Arraygenap, Arrayganjil] = splitArrayByIndex(randomArray);
  
  // Menghitung min, max, total, dan rata-rata untuk array genap dan ganjil
  const minGenap = findMin(Arraygenap);
  const maxGenap = findMax(Arraygenap);
  const totalGenap = calculateTotal(Arraygenap);
  const averageGenap = calculateAverage(Arraygenap);
  
  const minGanjil = findMin(Arrayganjil);
  const maxGanjil = findMax(Arrayganjil);
  const totalGanjil = calculateTotal(Arrayganjil);
  const averageGanjil = calculateAverage(Arrayganjil);
  
  // Membandingkan nilai min, max, total, dan rata-rata
  const comparisonResult = {
    minComparison: minGenap > minGanjil ? "Min lebih besar array genap" : "Min lebih besar array ganjil",
    maxComparison: maxGenap > maxGanjil ? "Max lebih besar array genap" : "Max lebih besar array ganjil",
    totalComparison: totalGenap === totalGanjil ? "Total memiliki nilai sama antara array genap dan ganjil" : "Total berbeda antara array genap dan ganjil",
    averageComparison: averageGenap > averageGanjil ? "Rata-rata lebih besar array genap" : "Rata-rata lebih besar array ganjil",
  };
  
  // Menampilkan hasil
  console.log("Array dengan jumlah index 100:", randomArray);
  console.log("Array genap dengan jumlah index 50:", Arraygenap);
  console.log("Array ganjil dengan jumlah index 50:", Arrayganjil);
  console.log("Min, Max, Total, Rata-rata pada array genap:");
  console.log("Min:", minGenap);
  console.log("Max:", maxGenap);
  console.log("Total:", totalGenap);
  console.log("Rata-rata:", averageGenap);
  console.log("Min, Max, Total, Rata-rata pada array ganjil:");
  console.log("Min:", minGanjil);
  console.log("Max:", maxGanjil);
  console.log("Total:", totalGanjil);
  console.log("Rata-rata:", averageGanjil);
  console.log("Perbandingan nilai:");
  console.log(comparisonResult);