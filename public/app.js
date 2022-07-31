const output1st = document.getElementById('output_result_1st');
const output2nd = document.getElementById('output_result_2nd');
const output3rd = document.getElementById('output_result_3rd');

// Get data from CSV to JS
const csvData = dataPath => {
  const request = new XMLHttpRequest();
  request.addEventListener('load', event => {
    const response = event.target.responseText;
    csvArray(response);
  });
  request.open('GET', dataPath, true);
  request.send();
};

// Prepare JS array of datas
const csvArray = data => {
  // get csv data to js
  const dataArray = [];
  const dataString = data.split('\n');
  for (let i = 0; i < dataString.length; i++) {
    dataArray[i] = dataString[i].split(',');
  }

  // For getting name of model from array
  const modelArray = [];

  dataArray.forEach(element => {
    const modelName = element[2];
    modelArray.push(modelName);
  });

  // Delete the first element("model")
  modelArray.shift();

  const modelArrayNormarize = modelArray.map(model => {
    // For Optional bonus task: normalize model names
    return model.toLowerCase().replaceAll(' ', '-');
  });

  const ec5 = 'ec-5';
  const beryll = 'beryll';
  const et9evo = 'et-9-evo';
  const dirtDrifter3000 = 'dirt-drifter-3000';
  const velossi = 'velossi';
  const mandara = 'mandara';

  // Create counter of each models
  let ec5Counter = 0;
  let beryllCounter = 0;
  let et9evoCounter = 0;
  let dirtdrifter3000Counter = 0;
  let velossiCounter = 0;
  let mandaraCounter = 0;

  for (model of modelArrayNormarize) {
    if (model === ec5) ec5Counter++;
    if (model === beryll) beryllCounter++;
    if (model === et9evo) et9evoCounter++;
    if (model === dirtDrifter3000) dirtdrifter3000Counter++;
    if (model === velossi) velossiCounter++;
    if (model === mandara) mandaraCounter++;
  }

  // Create modelname & counter Array
  let counterArray = [];
  counterArray.push(
    {
      model: ec5,
      counter: ec5Counter,
    },
    {
      model: beryll,
      counter: beryllCounter,
    },
    {
      model: et9evo,
      counter: et9evoCounter,
    },
    {
      model: dirtDrifter3000,
      counter: dirtdrifter3000Counter,
    },
    {
      model: velossi,
      counter: velossiCounter,
    },
    {
      model: mandara,
      counter: mandaraCounter,
    }
  );

  console.log(counterArray);

  // Sort from big to small
  counterArray.sort((a, b) => b.counter - a.counter);

  // Get  model name of three biggest counters
  const firstName = counterArray[0].model;
  const secondName = counterArray[1].model;
  const thirdName = counterArray[2].model;

  // To display model name better
  const displayName = model => {
    let modelName = model[0].toUpperCase() + model.slice(1);
    return modelName;
  };

  const first = displayName(firstName);
  const second = displayName(secondName);
  const third = displayName(thirdName);

  // Output in HTML
  output1st.innerHTML = `<p class="result-model">${first}</p> <img src="img/${first}.jpg" class="result-pic">`;
  output2nd.innerHTML = `<p class="result-model">${second}</p> <img src="img/${second}.jpg" class="result-pic">`;
  output3rd.innerHTML = `<p class="result-model">${third}</p> <img src="img/${third}.jpg" class="result-pic">`;
};

csvData('data.csv');
