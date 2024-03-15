// email & password 
const emailInput = document.getElementById('email-input');
const passwordInput = document.getElementById('password-input');

// Deposit p, withdraw p, balance p
const depositP = document.getElementById('deposit-p');
const withdrawP = document.getElementById('withdraw-p');
const balanceP = document.getElementById('balance-p');

// Deposit & Withdraw input fields

const deposit = document.getElementById('deposit-input');
const withdraw = document.getElementById('withdraw-input');

// Deposit & Withdraw buttons

const depositBtn = document.getElementById('depositBtn');
const withdrawBtn = document.getElementById('withdrawBtn');

// Deposit

depositBtn.addEventListener('click', () => {
    const value = deposit.value;
    const depositValue = Number(depositP.innerText) + Number(value);
    const balanceValue = Number(balanceP.innerText) + Number(value);
    balanceP.innerText = balanceValue
    depositP.innerText = depositValue;
    deposit.value = '';
})

// Withdraw

// withdrawBtn.addEventListener('click', (w1) => {
//     w1.preventDefault()
//     let WithdrawInputValue = withdraw.value;
    
//     if(balanceP.innerText > 0) {
//         const withdrawValue = Number(balanceP.innerText) - Number(WithdrawInputValue);
//         balanceP.innerText = withdrawValue;
//     } else {
//         alert('There is no balance: ')
//     }
    
    
//     const moneyCount = Number(withdrawP.innerText) + Number(WithdrawInputValue);
//     withdrawP.innerText = moneyCount;
    
// })



withdrawBtn.addEventListener('click', (w1) => {
    w1.preventDefault()
    const value = withdraw.value;

    if(Number(balanceP.innerText) === 0) {
        alert('There is no balance to withdraw! ')
    } else{

        
        const withdrawValue = Number(withdrawP.innerText) + Number(value);
        const balanceValue = Number(balanceP.innerText) - Number(value);
        balanceP.innerText = balanceValue
        withdrawP.innerText = withdrawValue;
        withdraw.value = '';
    }
})
