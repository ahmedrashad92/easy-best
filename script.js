//complaintForm
document.getElementById('showComplaintFormBtn').addEventListener('click', function() {
    const complaintForm = document.getElementById('complaintForm');
    complaintForm.style.display = 'block'; 

    const Thankesbtn = document.getElementById('Thankesbtn');
    Thankesbtn.style.display = 'none';

    const showComplaintFormBtn = document.getElementById('showComplaintFormBtn');
    showComplaintFormBtn.style.display = 'none';

    const SugFormBtn = document.getElementById('SugFormBtn');
    SugFormBtn.style.display = 'none';

    const linkFormBtn = document.getElementById('linkFormBtn');
    linkFormBtn.style.display = 'none';
});

//complaintForm cancel
document.getElementById('cancelBtn').addEventListener('click', function() {
    const complaintForm = document.getElementById('complaintForm');
    complaintForm.style.display = 'none';

    const Thankesbtn = document.getElementById('Thankesbtn');
    Thankesbtn.style.display = '';

    const showComplaintFormBtn = document.getElementById('showComplaintFormBtn');
    showComplaintFormBtn.style.display = '';

    const SugFormBtn = document.getElementById('SugFormBtn');
    SugFormBtn.style.display = '';

    const linkFormBtn = document.getElementById('linkFormBtn');
    linkFormBtn.style.display = '';
});

//Thankesbtn
document.getElementById('Thankesbtn').addEventListener('click', function() {
    const Thankesform = document.getElementById('Thankesform');
    Thankesform.style.display = 'block'; 

    const Thankesbtn = document.getElementById('Thankesbtn');
    Thankesbtn.style.display = 'none';

    const showComplaintFormBtn = document.getElementById('showComplaintFormBtn');
    showComplaintFormBtn.style.display = 'none';

    const SugFormBtn = document.getElementById('SugFormBtn');
    SugFormBtn.style.display = 'none';

    const linkFormBtn = document.getElementById('linkFormBtn');
    linkFormBtn.style.display = 'none';
});

//suggestionsForm
document.getElementById('SugFormBtn').addEventListener('click', function() {
    const suggestionsForm = document.getElementById('suggestionsForm');
    suggestionsForm.style.display = 'block'; 

    const Thankesbtn = document.getElementById('Thankesbtn');
    Thankesbtn.style.display = 'none';

    const showComplaintFormBtn = document.getElementById('showComplaintFormBtn');
    showComplaintFormBtn.style.display = 'none';

    const SugFormBtn = document.getElementById('SugFormBtn');
    SugFormBtn.style.display = 'none';

    const linkFormBtn = document.getElementById('linkFormBtn');
    linkFormBtn.style.display = 'none';
});

//suggestionsForm cancel
document.getElementById('scancelBtn').addEventListener('click', function() {
    const suggestionsForm = document.getElementById('suggestionsForm');
    suggestionsForm.style.display = 'none';

    const Thankesbtn = document.getElementById('Thankesbtn');
    Thankesbtn.style.display = '';

    const showComplaintFormBtn = document.getElementById('showComplaintFormBtn');
    showComplaintFormBtn.style.display = '';

    const SugFormBtn = document.getElementById('SugFormBtn');
    SugFormBtn.style.display = '';

    const linkFormBtn = document.getElementById('linkFormBtn');
    linkFormBtn.style.display = '';
});