const form = document.getElementById('regist-form')

function allFormFill(){

    const dataPendaftaran = {
        firstName : document.getElementById('firstname').value,
        lastName: document.getElementById('lastname').value,
        email:document.getElementById('email').value,
        nim : document.getElementById('nim').value,
        asalSekolah: document.getElementById('sma').value,
        gender:document.querySelector('input[name="gender"]').value
    }

    const result = [];

    for (const data in dataPendaftaran) {
        result.push(dataPendaftaran[data])
    }

    return result.every(value => value !== "")
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    allFormFill()
})