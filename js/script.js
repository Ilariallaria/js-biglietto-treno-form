const genButton = document.getElementById('gen-button');

genButton.addEventListener('click',
    function(){
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt(document.getElementById('user-km').value);
        const userAge = document.getElementById('user-age').value;

        const price = userKm * 0.21;
        let discount = 0;
        let offer = 'Tariffa Standard'

        if(userAge === 'minorenne'){
            discount = price * 20 / 100;
            offer = 'Tariffa Giovani'
        }
        else if (userAge === 'over') {
            discount = price * 40 / 100;
            offer = 'Tariffa Silver'
        }
    
        const finalPrice = price - discount;
        console.log(finalPrice);

        document.getElementById('user').innerHTML = userName;
        document.getElementById('offer').innerHTML = offer;
        document.getElementById('last-price').innerHTML = finalPrice;
        document.getElementById('vagon').innerHTML = Math.floor((Math.random() * 10) + 1);
        document.getElementById('code').innerHTML = Math.floor((Math.random() * 10000) + 1);
    
        document.getElementById('tiket').classList.add('active');
    }
) 


const resetButton = document.getElementById('reset');

 resetButton.addEventListener ('click',
    function(){

        document.getElementById('user').innerHTML = '';
        document.getElementById('offer').innerHTML = '';
        document.getElementById('last-price').innerHTML = '';
        document.getElementById('vagon').innerHTML = '';
        document.getElementById('code').innerHTML = '';

        document.getElementById('tiket').classList.remove('active');
    }
 )
