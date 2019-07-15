/*
 *
 */
$.ajax({
    url: '/api/data.json',
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
        data.forEach( (item, idx) =>{
            tableFilter(item, idx);
        });
        
        //showAll(data);
    },
    error: function(err){
        //console.log(err);
    }
});

/*
 *
 */
function showAll(json){
    json.forEach( (item) => {
        console.log(item);
    });
}

/*
 * tableFilter()
 * this function creates a table UI from JSON data.
 * this function also lets you edit the table data.
 * tableField - should take single item from ajax request data
 */
function tableFilter(tableField, idx){
    const tableBody = $('#tableBody')[0];
    const keys = Object.keys(tableField);
    const vals = Object.values(tableField);

    //console.log(tableBody);

    let output = '';
    // create new row for each
    output += '<tr>';
    // place data into table slots
    keys.forEach( (key)=> {
        switch(key){
            case "ReportId":
                    output += "<td class='fixed-side' scope='col'>"+ tableField[key] + "</td>";
                break;
            case "PartnerReportKey":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "ReportGroupType":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "ReportFrequency":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "ReportTransmissionType":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "ReportFileName":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "Datetime":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "EmailTo":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "CCTo":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "EmailFrom":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "EmailSubject":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "EmailBody":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "EmailServer":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "EmailPort":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "FTPServer":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "FTPUser":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "FTPPassword":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "FTPEncodedPassword":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "FTPPort":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "FTPDirectory":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "EnabledFlag":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "DisabledDate":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "CreationDate":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "CreatedBy":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "LastUpdateDate":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "LastUpdateBy":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "ProgramUpdateDate":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "RequestID":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "ChangeNotes":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "BusinessApprover":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "BIFolder":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "BIPath":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
            case "BIMainReportName":
                    output += "<td class='tableEditableData'>"+ tableField[key] + "</td>";
                break;
                
            default:
                break;
                
        }
    });
    output += '</tr>';
    tableBody.innerHTML += output;
    
    /*
     Event Listeners For the Table
    */
    //$('.tableEditableData').each( (idx, data) => {
        // console.log(data);
    const editBTN = document.getElementById("tableEditBtn");
    const saveBTN = document.getElementById("tableSaveBtn");
    const tableDataField = document.querySelectorAll(".tableEditableData");
    
    let newVal = [];
    let data = '';
    
    editBTN.addEventListener('click', function(e){
        tableDataField.forEach( (data, idx) => {
            let tempVal = data.innerText;
            let id = "t-input" + idx;
            
            data.innerHTML = '<input type="text" id="'+id+'" class="t-input" value="' +tempVal+ '" />'
        });
    });

    saveBTN.addEventListener('click', function(e){
        tableDataField.forEach( (data, idx) => {
            let tempVal = data.firstChild.value;
            data.innerHTML = tempVal;
        });
    });
}
