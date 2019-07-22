"use strict";

const editBTN = document.getElementById("tableEditBtn");
const saveBTN = document.getElementById("tableSaveBtn");

var editable = true; // for edit not to break if user hits edit twice

// Get JSON data that is saved for this specific table, and render the data to the page.
// function main(){
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
        },
        error: function(err){
            //console.log(err);
        }
    });
// }

/* tableFilter - takes json data and fills this table with SPECIFIC structured data
 * this function creates a table UI from JSON data.
 * tableField - should take single item from ajax request data ( table row, or json {} )
 */
function tableFilter(tableField, idx, len){
    const tableBody = $('#tableBody')[0];
    const keys = Object.keys(tableField);
    const vals = Object.values(tableField);

    let output = '';
    output += '<tr>';

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
}
function init(){
    /*
        Event Listeners For the Table
    */
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
        const popUpSaveCheck = document.getElementById("popUpSaveCheck"); // pop up div
        const saveBtn = document.getElementById("saveBtn"); // saveBtn for pop up check 

        popUpSaveCheck.style.display = 'block';

        saveBtn.addEventListener('click', function(e){
            popUpSaveCheck.style.display = 'none';
            const tableDataField = document.querySelectorAll(".tableEditableData");

            // fill new table with updated data
            tableDataField.forEach( (data, idx) => {
                //editable data
                if( data.firstChild.value !== null &&
                    data.firstChild.value !== undefined
                ){
                    let tempVal = data.firstChild.value;
                    data.innerHTML = tempVal;
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
                        console.log('ERROR SAVING!');
                        console.log(err);
                    }
                });
        }); // End save btn event

        const cancelBtn = document.getElementById("cancelBtn");
        cancelBtn.addEventListener('click', function(e){
            popUpSaveCheck.style.display = 'none';
        });

    });

    
}

// run it all!
$(document).ready( function(){
    // main function to call others
    //main();
   //  setTimeout( function(){
        init(); 
   //  }, 1000)
    
});




//module.exports = tableFilter;