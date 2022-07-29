// const outputElement = document.getElementById('output_csv');

// function getCsvData(dataPath) {
//   const request = new XMLHttpRequest();
//   request.addEventListener('load', event => {
//     const response = event.target.responseText;
//     convertArray(response);
//   });
//   request.open('GET', dataPath, true);
//   request.send();
// }

// function convertArray(data) {
//   const dataArray = [];
//   const dataString = data.split('\n');
//   for (let i = 0; i < dataString.length; i++) {
//     dataArray[i] = dataString[i].split(',');
//   }
//   console.log(dataArray);
//   let insertElement = '';
//   dataArray.forEach(element => {
//     insertElement += '<tr>';
//     element.forEach(childElement => {
//       insertElement += `<td>${childElement}</td>`;
//     });
//     insertElement += '</tr>';
//   });
//   outputElement.innerHTML = insertElement;
// }

// getCsvData('./example.csv');

const output1st = document.getElementById('output_result_1st');
const output2nd = document.getElementById('output_result_2nd');
const output3rd = document.getElementById('output_result_3rd');

// Get data from CSV to JS
const csv_data = dataPath => {
  const request = new XMLHttpRequest();
  request.addEventListener('load', event => {
    const response = event.target.responseText;
    csv_array(response);
  });
  request.open('GET', dataPath, true);
  request.send();
};

// Prepare JS array of datas
const csv_array = data => {
  // get csv data to js
  const dataArray = [];
  const dataString = data.split('\n');
  for (let i = 0; i < dataString.length; i++) {
    dataArray[i] = dataString[i].split(',');
  }

  console.log(dataArray);

  //   // get model name
  //   dataArray.forEach(element => {
  //     const modelName = element[2];
  //     let popularModel = [];
  //     console.log(modelName);

  //   if (
  //     modelName.includes('EC-5') ||
  //     (modelName.includes('EC') && modelName.includes('5')) ||
  //     (modelName.includes('ec') && modelName.includes('5'))
  //   ) {
  //       console.log('[modelname] This model is EC-5');
  //       popularModel.push(modelName);
  //     } else if (
  //       modelName.includes('Beryll') ||
  //       modelName.includes('BERYLL') ||
  //       modelName.includes('beryll')
  //     ) {
  //       console.log('[modelname] This model is Beryll');
  //       popularModel.push(modelName);
  //     } else if (
  //       modelName.includes('ET-9 evo') ||
  //       (modelName.includes('ET') &&
  //         modelName.includes('9') &&
  //         modelName.includes('evo'))
  //     ) {
  //       console.log('[modelname] This model is ET-9 evo');
  //       popularModel.push(modelName);
  //     }
  //   });

  // For getting name of model from array
  const modelArray = [];

  dataArray.forEach(element => {
    const modelName = element[2];
    modelArray.push(modelName);
  });

  // Delete the first element("model")
  modelArray.shift();
  console.log('modelArray', modelArray);

  const modelArrayNormarize = modelArray.map(model => {
    return model.toLowerCase().replaceAll(' ', '-');
  });

  console.log(modelArrayNormarize);

  //   ['ec 5', 'beryll', 'juna', 'ec 5', 'et 9 evo', 'beryll', 'dirt drifter 3000', 'velossi', 'ec 5', 'ec 5', 'dirt drifter-3000', 'et 9 evo', 'beryll', 'mandara']

  let ec5Counter = 0;
  let beryllCounter = 0;
  let et9evoCounter = 0;
  let dirtdrifter3000Counter = 0;
  let velossiCounter = 0;
  let mandaraCounter = 0;

  for (model of modelArrayNormarize) {
    if (model === 'ec-5') ec5Counter++;
    if (model === 'beryll') beryllCounter++;
    if (model === 'et-9-evo') et9evoCounter++;
    if (model === 'dirt-drifter-3000') dirtdrifter3000Counter++;
    if (model === 'velossi') velossiCounter++;
    if (model === 'mandara') mandaraCounter++;
  }
  //   console.log('ec5Counter:', ec5Counter);
  //   console.log('beryllCounter:', beryllCounter);
  //   console.log('et9evoCounter:', et9evoCounter);
  //   console.log('dirtdrifter3000Counter:', dirtdrifter3000Counter);
  //   console.log('velossiCounter:', velossiCounter);
  //   console.log('mandaraCounter:', mandaraCounter);
  //   console.log(typeof ec5Counter);

  let counterArray = [];
  counterArray.push(
    {
      model: 'ec-5',
      counter: ec5Counter,
    },
    {
      model: 'beryll',
      counter: beryllCounter,
    },
    {
      model: 'et-9-evo',
      counter: et9evoCounter,
    },
    {
      model: 'dirt-drifter-3000',
      counter: dirtdrifter3000Counter,
    },
    {
      model: 'velossi',
      counter: velossiCounter,
    },
    {
      model: 'mandara',
      counter: mandaraCounter,
    }
  );

  counterArray.sort((a, b) => b.counter - a.counter);

  const firstName = counterArray[0].model;
  const secondName = counterArray[1].model;
  const thirdName = counterArray[2].model;

  console.log(firstName, secondName, thirdName);

  const displayName = model => {
    let modelName = model[0].toUpperCase() + model.slice(1);
    return modelName;
  };

  const first = displayName(firstName);
  const second = displayName(secondName);
  const third = displayName(thirdName);

  console.log(first, second, third);

  //   console.log(counterArray[0].model);
  //   console.log(counterArray[1].model);
  //   console.log(counterArray[2].model);

  //   outputElement.innerHTML = `<p class="result">${first} </p></br><p class="result">${second}</p></br><p class="result">${third}</p>`;

  output1st.innerHTML = `<p class="result-model">${first}</p> <img src="img/${first}.jpg" class="result-pic">`;
  output2nd.innerHTML = `<p class="result-model">${second}</p> <img src="img/${second}.jpg" class="result-pic">`;
  output3rd.innerHTML = `<p class="result-model">${third}</p> <img src="img/${third}.jpg" class="result-pic">`;
};

csv_data('data.csv');
