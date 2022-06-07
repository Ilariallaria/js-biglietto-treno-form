const genButton = document.getElementById('gen-button');

genButton.addEventListener('click',
    function(){
        const userName = document.getElementById('user-name').value;
        const userKm = parseInt(document.getElementById('user-km').value);
        const userAge = document.getElementById('user-age').value;

        const price = userKm * 0.21;
        let discount = 0;

        if(userAge === 'minorenne'){
            discount = price * 20 / 100;
        }
        else if (userAge === 'over') {
            discount = price * 40 / 100;
        }
    
        const finalPrice = price - discount;
        console.log(finalPrice);

        document.getElementById('user').innerHTML = userName;
        document.getElementById('offer').innerHTML = userAge;
        document.getElementById('last-price').innerHTML = finalPrice;
        document.getElementById('tiket').classList.add('active');
    }
) 

