document.addEventListener("DOMContentLoaded", (event) => {
    // console.log(event)
    // console.log(event.type)

    // const sprintInput = document.querySelector("#sprintFormControlInput")
    // const inputElements = document.querySelector(".form-control")
    // console.log(inputElements.previousElementSibling)
    // console.log(sprintInput.previousElementSibling)\

 

    code_review_radios = document.querySelectorAll("input[name='codeReviewRadio']")
    sonar_report_radios = document.querySelectorAll("input[name='sonarReportRadio']")
    vapt_report_radios = document.querySelectorAll("input[name='vaptRadio']")
    approval_radios = document.querySelectorAll("input[name='approvalRadio']")
    qa_resources = document.querySelectorAll("input[name='qasinoffRadio']")
    final_signoff_radio = document.querySelectorAll("input[name='signoffRadio']")


    //sonar review raido buttons
    sonar_report_radios.forEach(element => {
        element.addEventListener('change', (event)=>{
          
            sonar_report = event.currentTarget.value
            sonar_file_ele = document.getElementById("sonar_file")
            if (sonar_report == "pass"){
               soanar_file_ele.style.display = "block"
               sonar_file_ele.querySelector("input").required = true
            }
            else{
                sonar_file_ele.style.display = "none"
            }

            
        })
    });


    //code review radio buttons
    code_review_radios.forEach(element => {

        element.addEventListener('change', (event) => {

            cr_approver_value = event.currentTarget.value
            cr_approver_field = document.getElementById("cr_Approver_Name")

            if (cr_approver_value == "pass"){
                cr_approver_field.style.display = "block"
                cr_approver_field.querySelector("input").required = true
                
            }
            else{
                cr_approver_field.style.display = "none"
            }

        })
    })


    //vapt review radio buttons
    vapt_report_radios.forEach(element => {
        element.addEventListener('change', (event) => {

            vapt_report = event.currentTarget.value
            vapt_file_ele = document.getElementById("vapt_file")
            if (vapt_report == "pass") {
                vapt_file_ele.style.display = "block"
                vapt_file_ele.querySelector("input").required = true
            }
            else {
                vapt_file_ele.style.display = "none"
            }


        })
    });


    //approval review radio buttons
    approval_radios.forEach(element => {
        element.addEventListener('change', (event) => {

            approval = event.currentTarget.value
            severity_issues = document.getElementById("approval_type")
            if (approval == "conditioned") {
                severity_issues.style.display = "block"
               
            }
            else {
                severity_issues.style.display = "none"
            }


        })
    });


    //qa review radio buttons
    qa_resources.forEach(element => {
        element.addEventListener('change', (event) => {

            resource = event.currentTarget.value
            resource_field = document.getElementById("qa_resource")
            if (resource == "yes") {
                resource_field.style.display = "block"
            }
            else {
                resource_field.style.display = "none"
            }


        })
    });


    //final_signoff radio buttons
    final_signoff_radio.forEach(element => {
        element.addEventListener('change', (event) => {

            signoff = event.currentTarget.value
            signoff_field = document.querySelector("#final_signoff")
            if (signoff == "client") {
                sign_off_label = signoff_field.getElementsByTagName('label')[0]
                sign_off_label.textContent = "Client Signoff by"
                signoff_field.style.display = "block"
            }
            else {
                sign_off_label = signoff_field.getElementsByTagName('label')[0]
                sign_off_label.textContent = "Manager Signoff by"
                signoff_field.style.display = "block"
            }


        })
    });


    
    'use strict'

    console.log("using the strict")

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')



    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
        form.addEventListener('submit', event => {
            if (!form.checkValidity()) {
                event.preventDefault()
                event.stopPropagation()
            }

            form.classList.add('was-validated')
            return;

            
        }, false)
    })

    cloned_from = form.cloneNode(true)
    cloned_html = cloned_form.outerHTML


    total_tests   = document.getElementById("totalTests")
    executed_tests = document.getElementById("executedTests")
    passed_tests = document.getElementById("passedTests")
    failed_tests = document.getElementById("failedTests")

    
    executed_tests.addEventListener("input",()=>{
        if((executed_tests.value > total_tests.value) || (total_tests.value == null || total_tests.value == undefined) && (executed_tests.value != null || executed_tests.value != undefined)){
            executed_tests.style.border = "purple"
        }
    })

   


    // Example starter JavaScript for disabling form submissions if there are invalid fields


})

// (() => {
       
// })()



