document.addEventListener('DOMContentLoaded', function() {
    
    const AmountInput = document.getElementById('mortgage-amount');
    const TermInput = document.querySelector('.t input:first-child');
    const RateInput = document.getElementById('mortgage-term');
    const calculateBtn = document.querySelector('.button');
    const result = document.querySelector('.image');
    
   
    function calculate() {
        const Amount = Number(AmountInput.value);
        const Term = Number(TermInput.value);
        const Rate = Number(RateInput.value);
        
        const sum = Amount + Term + Rate;
        const multiply = Amount * Term * Rate;

    
       
        result.innerHTML = `
    <div style="background-color: #0a1e2b; border-radius: 12px; color: white; ">
       
        <div style="padding: 24px 24px 24px 24px; background-color: #1a3142; text-align: left;">
            <h2 style="font-size: 24px; font-weight: bold; color: white; margin-top: 0; margin-bottom: 12px; text-align: left;">Your results</h2>
            
            <p style="color: #a9b6c0; font-size: 15px; line-height: 1.5; margin-bottom: 24px; text-align: left;">
                Your results are shown below based on the information you provided. To adjust the results, edit the form and click "calculate repayments" again.
            </p>

            <div style="width: 100%; height: 3px; background-color: #e2df36; margin: 24px 0;"></div>
        </div>

        
        <div style="padding: 0 24px 24px 24px; text-align: left;">
            <div style="padding-top: 8px; text-align: left;">
                <p style="color: #a9b6c0; font-size: 15px; margin-bottom: 8px; text-align: left;">Your monthly repayments</p>
                <p style="font-size: 56px; color: #e2df36; font-weight: 700; margin: 0; text-align: left;"> $${sum}</p>
            </div>
            
            <div style="margin-top: 24px; padding-top: 24px; border-top: 1px solid rgba(169, 182, 192, 0.1); text-align: left;">
                <p style="color: #a9b6c0; font-size: 15px; margin-bottom: 8px; text-align: left;">Total you'll repay over the term</p>
                <p style="color: white; font-size: 32px; font-weight: 600; margin: 0; text-align: left;">$${multiply}</p>
            </div>
        </div>
    </div>
`;
    }

 
    calculateBtn.addEventListener('click', calculate);
});
