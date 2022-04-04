var prevBtn = document.querySelector('.prev');
var nextBtn = document.querySelector('.next');

var currentStep = 1;

if (currentStep === 1) {
  prevBtn.disabled = true;
}

if (currentStep === 4) {
  nextBtn.disabled = true;
}

nextBtn.addEventListener('click', () => {
  if (currentStep < 4) {
    var nextDistance = document.querySelector(`[data-index="${currentStep}"] .distance-complete`);
    nextDistance.style.width = '100%';
    currentStep++;

    if (currentStep === 4) {
      nextBtn.disabled = true;
      nextBtn.style.backgroundColor = '#fb8500';
    }
    prevBtn.disabled = false;
    prevBtn.style.backgroundColor = '#a8dadc';

    var nextStep = document.querySelector(`[data-index="${currentStep}"] .step`);
    
    setTimeout(() => nextStep.style.borderColor = '#fb8500', 700);
  }
});

prevBtn.addEventListener('click', () => {
  if (currentStep > 1) {
    var prevStep = document.querySelector(`[data-index="${currentStep}"] .step`);
    prevStep.style.borderColor = '#a8dadc';
    currentStep--;

    if (currentStep === 1) {
      prevBtn.disabled = true;
      prevBtn.style.backgroundColor = '#fb8500';
    }
    nextBtn.disabled = false;
    nextBtn.style.backgroundColor = '#a8dadc';

    var prevDistance = document.querySelector(`[data-index="${currentStep}"] .distance-complete`);
    prevDistance.style.width = '0';
  }
});

