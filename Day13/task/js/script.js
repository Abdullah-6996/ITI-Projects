var btn = document.querySelector('#btn');
btn.addEventListener('click', (event) => {
    event.preventDefault();

    var name = document.querySelector('#name').value.trim();
    var age = document.querySelector('#age').value.trim();
    var job = document.querySelector('#job').value.trim();

    if(name === '' || age === '' || job === ''){
        alert('please fill all fields');
        return;
    }
    console.log(`Name: ${name}`);
    console.log(`Age: ${age}`);
    console.log(`Job: ${job}`);
    
    if(Number(age) < 18) {
        alert('You are under age');
    }
    else {
        alert('Registration Completed');
    }
});