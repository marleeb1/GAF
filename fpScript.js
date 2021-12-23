let buttonU = document.querySelector('#USD')
let buttonB = document.querySelector('#Bitcoin')
let buttonE = document.querySelector('#Ethereum')


let oUsdPrices = [100, 200, 300, 50, 20, 1000, 400, 32000, 1600]
let usdPrices = []
let btcPrices = []
let ethPrices = []

// USD Price
async function getUsdPrice(event) {
    event.preventDefault()

        const getUsdButton = document.querySelector('#USD')
        getUsdButton.innerText = `$1.00` //writes the current BTC price to the BTC button
        
        for (i=0; i< oUsdPrices.length; i++) {
            let uPrice = oUsdPrices[i].toFixed(2)
            let uPriceCom = uPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            usdPrices.push(uPriceCom) //adds values ot the begining of the array 
        console.log(usdPrices);
        }

            const newPrice1 = document.querySelector('#price1')
            newPrice1.innerHTML = ''
            newPrice1.innerHTML = `${usdPrices[0]} USD`
    
            const newPrice2 = document.querySelector('#price2')
            newPrice2.innerHTML = ''
            newPrice2.innerHTML = `${usdPrices[1]} USD`
    
            const newPrice3 = document.querySelector('#price3')
            newPrice3.innerHTML = ''
            newPrice3.innerHTML = `${usdPrices[2]} USD`
    
            const newPrice4 = document.querySelector('#price4')
            newPrice4.innerHTML = ''
            newPrice4.innerHTML = `${usdPrices[3]} USD`
    
            const newPrice5 = document.querySelector('#price5')
            newPrice5.innerHTML = ''
            newPrice5.innerHTML = `${usdPrices[4]} USD`
    
            const newPrice6 = document.querySelector('#price6')
            newPrice6.innerHTML = ''
            newPrice6.innerHTML = `${usdPrices[5]} USD`
    
            const newPrice7 = document.querySelector('#price7')
            newPrice7.innerHTML = ''
            newPrice7.innerHTML = `${usdPrices[6]} USD`
    
            const newPrice8 = document.querySelector('#price8')
            newPrice8.innerHTML = ''
            newPrice8.innerHTML = `${usdPrices[7]} USD`
    
            const newPrice9 = document.querySelector('#price9')
            newPrice9.innerHTML = ''
            newPrice9.innerHTML = `${usdPrices[8]} USD`
    
    
    }

//Bitcoin Price
async function getBtcPrice(event) {
event.preventDefault()
const url1 = "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=USD"

fetch(url1)

.then(function (response) {
	return response.json();
})
.then(response => {
    const getBtcButton = document.querySelector('#Bitcoin')
    const bPrice = response.bitcoin.usd.toFixed(2)
    getBtcButton.innerText = `BTC:$ ${bPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}` //writes the current BTC price to the BTC button
	console.log(response);
 
    for (i=0; i< oUsdPrices.length; i++) {
        let nPrice = (oUsdPrices[i] * (1/response.bitcoin.usd)).toFixed(6)
        btcPrices.push(nPrice) //adds values to the end of the array 
    }
    btcPrices.length = 9; // Allows function to overwrite the current array and keep the array 9 values
    console.log(btcPrices);
        const newPrice1 = document.querySelector('#price1')
        newPrice1.innerHTML = ''
        newPrice1.innerHTML = `${btcPrices[0]} BTC`

        const newPrice2 = document.querySelector('#price2')
        newPrice2.innerHTML = ''
        newPrice2.innerHTML = `${btcPrices[1]} BTC`

        const newPrice3 = document.querySelector('#price3')
        newPrice3.innerHTML = ''
        newPrice3.innerHTML = `${btcPrices[2]} BTC`

        const newPrice4 = document.querySelector('#price4')
        newPrice4.innerHTML = ''
        newPrice4.innerHTML = `${btcPrices[3]} BTC`

        const newPrice5 = document.querySelector('#price5')
        newPrice5.innerHTML = ''
        newPrice5.innerHTML = `${btcPrices[4]} BTC`

        const newPrice6 = document.querySelector('#price6')
        newPrice6.innerHTML = ''
        newPrice6.innerHTML = `${btcPrices[5]} BTC`

        const newPrice7 = document.querySelector('#price7')
        newPrice7.innerHTML = ''
        newPrice7.innerHTML = `${btcPrices[6]} BTC`

        const newPrice8 = document.querySelector('#price8')
        newPrice8.innerHTML = ''
        newPrice8.innerHTML = `${btcPrices[7]} BTC`

        const newPrice9 = document.querySelector('#price9')
        newPrice9.innerHTML = ''
        newPrice9.innerHTML = `${btcPrices[8]} BTC`


})
    
.catch(err => {
	console.error(err);
})
}




//Ethereum Prices
async function getEthPrice(event) {
    event.preventDefault()
    const url2 = "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=USD"
    
    fetch(url2)
    
    .then(function (response) {
        return response.json();
    })
    .then(response => {
        const getEthButton = document.querySelector('#Ethereum')

        const ePrice = response.ethereum.usd.toFixed(2)
        getEthButton.innerText = `ETH:$ ${ePrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}`

        console.log(response);

        for (i=0; i< oUsdPrices.length; i++) {
            ethPrices.push((oUsdPrices[i] * (1/response.ethereum.usd)).toFixed(6)) //adds values ot the end of the array 
        }
        ethPrices.length = 9; // Allows function to overwrite the current array and keep the array 9 values
        console.log(ethPrices);

        const newPriceE1 = document.querySelector('#price1')
        newPriceE1.innerHTML = ''
        newPriceE1.innerHTML = `${ethPrices[0]} ETH`

        const newPriceE2 = document.querySelector('#price2')
        newPriceE2.innerHTML = ''
        newPriceE2.innerHTML = `${ethPrices[1]} ETH`

        const newPriceE3 = document.querySelector('#price3')
        newPriceE3.innerHTML = ''
        newPriceE3.innerHTML = `${ethPrices[2]} ETH`

        const newPrice4 = document.querySelector('#price4')
        newPrice4.innerHTML = ''
        newPrice4.innerHTML = `${ethPrices[3]} ETH`

        const newPrice5 = document.querySelector('#price5')
        newPrice5.innerHTML = ''
        newPrice5.innerHTML = `${ethPrices[4]} ETH`

        const newPrice6 = document.querySelector('#price6')
        newPrice6.innerHTML = ''
        newPrice6.innerHTML = `${ethPrices[5]} ETH`

        const newPrice7 = document.querySelector('#price7')
        newPrice7.innerHTML = ''
        newPrice7.innerHTML = `${ethPrices[6]} ETH`

        const newPrice8 = document.querySelector('#price8')
        newPrice8.innerHTML = ''
        newPrice8.innerHTML = `${ethPrices[7]} ETH`

        const newPrice9 = document.querySelector('#price9')
        newPrice9.innerHTML = ''
        newPrice9.innerHTML = `${ethPrices[8]} ETH`

      
    })
    .catch(err => {
        console.error(err);
    })
    }




buttonU.addEventListener('click', getUsdPrice)

buttonB.addEventListener('click', getBtcPrice)

buttonE.addEventListener('click', getEthPrice) 
//click button -> insert price text into button text, calculate price of each NFT in choosen currency 



