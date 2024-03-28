console.log('connected')

const btn = document.querySelector('#btn'),
    numberAdvice = document.querySelector('#advice-number'),
    quoteAdvice = document.querySelector('#text-advice')

btn.addEventListener('click', randomAdvice)

async function randomAdvice() {
    const response = await fetch('https://api.adviceslip.com/advice');
    const data = await response.json();
    const advice = data.slip.advice;
    const number = data.slip.id
    numberAdvice.innerHTML = number
    quoteAdvice.innerHTML = `“${advice}”`
}
setTimeout(randomAdvice,0.1)
