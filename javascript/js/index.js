let arr = [], update = 0
document.getElementById("formcontrol").addEventListener("submit", e => {
    e.preventDefault()
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let branch = document.getElementById("branch").value;
    let blood = document.getElementById("blood").value;

    saveRecord(fname, lname, phone, branch, blood)
})

const saveRecord = (fname, lname, phone, branch, blood) => {
    arr.push({ fname, lname, phone, branch, blood })
    showRecord()

    document.getElementById("fname").value = ""
    document.getElementById("lname").value = ""
    document.getElementById("phone").value = ""
    document.getElementById("branch").value = ""
    document.getElementById("blood").value = ""
}

const showRecord = () => {
    let table = document.getElementById('result')

    let row = ""
    arr.forEach((item, index) => {
        row += `<tr>
            <td>${item.fname}</td>
            <td>${item.lname}</td>
            <td>${item.phone}</td>
            <td>${item.branch}</td>
            <td>${item.blood}</td>
            <td><input type="button" value="Edit" id="editbtn" onclick="editfun(${index})" /></td>
            <td><input type="button" value="Delete" onclick="dltFun(${index})" /></td>
        </tr>`
    })

    table.innerHTML = row
}

const dltFun = (i) => {
    console.log(i);
    arr.splice(i, 1)
    showRecord()
}

const editfun = (t) => {
    update = t
}

document.getElementById('updatebtn').addEventListener('click', () => {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let branch = document.getElementById("branch").value;
    let blood = document.getElementById("blood").value;

    arr[update].fname = fname || arr[update].fname
    arr[update].lname = lname || arr[update].lname
    arr[update].blood = blood || arr[update].blood
    arr[update].phone = phone || arr[update].phone
    arr[update].branch = branch || arr[update].branch

    showRecord()
})