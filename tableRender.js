
/*
 *
 */
$.ajax({
    url: './api/data.json',
    type: 'GET',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
        let len = data.length;
        data.forEach( (item, idx) =>{
            tableFilter(item, idx, len);
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

const editBTN = document.getElementById("tableEditBtn");
const saveBTN = document.getElementById("tableSaveBtn");

var editable = true;
let tempData = [];
let count = 1;
let newJSON = {};

function tableFilter(tableField, idx, len){
    
    
    //console.log(tableField);
    
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
            case "Report ID":
                    output += "<td class='fixed-side' scope='col' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Partner Report Key":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Report Group Type":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Report Frequency":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Report Transmission Type":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Report File Name":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Datetime":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Email To":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "CC To":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Email From":
                    output += "<td class='tableEditableData'  key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Email Subject":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Email Body":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Email Server":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Email Port":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "FTP Server":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "FTP User":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "FTP Password":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "FTP Encoded Password":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "FTP Port":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "FTP Directory":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Enabled Flag":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Disabled Date":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Creation Date":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Created By":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Last Update Date":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Last Update By":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Program Update Date":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Request ID":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Change Notes":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "Business Approver":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "BI Folder":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "BI Path":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
                break;
            case "BI Main Report Name":
                    output += "<td class='tableEditableData' key='"+key+"' value='"+ tableField[key] +"'>"+ tableField[key] + "</td>";
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
    

   
}

// Global var for editable
window.editable = true;

editBTN.addEventListener('click', function(e){
    const tableDataField = document.querySelectorAll(".tableEditableData");
    
    if(window.editable){
        tableDataField.forEach( (data, idx) => {
            let tempVal = data.innerText;
            let id = "t-input" + idx;
                
            data.innerHTML = '<input type="text" id="'+id+'" class="t-input" value="' +tempVal+ '" />';
                
        });
        window.editable = false;
    }
});

saveBTN.addEventListener('click', function(e){
    // Pop up box to ensure you actually do want to save
    const popUpSaveCheck = document.getElementById("popUpSaveCheck");
    
    popUpSaveCheck.style.display = 'block';

    const saveBtn = document.getElementById("saveBtn");
    saveBtn.addEventListener('click', function(e){
        popUpSaveCheck.style.display = 'none';
        const tableDataField = document.querySelectorAll(".tableEditableData");
        let valArr = [];
        
        // 15 fields total, 6 columns
        
        // fill new table with updated data
        tableDataField.forEach( (data, idx) => {
            //editable data
            if( data.firstChild.value !== null &&
                data.firstChild.value !== undefined
            ){
                let tempVal = data.firstChild.value;
                data.innerHTML = tempVal;
                
                valArr.push(data);
            }
        });
        window.editable = true;

        const mainTable = $('.table-wrap .main-table');
        let jsonTable = mainTable.tableToJSON();
            
            // Send data to php file to update json
            $.ajax({
                url: './save_json.php',
                type: 'GET',
                data:  { data: JSON.stringify(jsonTable) },
                success: function(d){
                    console.log(d);
                },
                error: function(err){
                    console.log('ERROR!');
                    console.log(err);
                }
            });

        
    }); // End save btn event

    const cancelBtn = document.getElementById("cancelBtn");

    cancelBtn.addEventListener('click', function(e){
        popUpSaveCheck.style.display = 'none';
    });

});

