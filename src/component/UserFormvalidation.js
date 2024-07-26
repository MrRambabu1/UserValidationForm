import { fireEvent } from '@testing-library/react';
import React, { useRef } from 'react'

function UserFormvalidation() {
    let firstNameInput = useRef();
    let secondNameInput = useRef();
    let crePasswordInput = useRef();
    let conPasswordInput = useRef();
    let creEmailInput = useRef();
    let conEmailInput = useRef();
    let mobileInput = useRef();

    let spanFirstName = useRef();
    let spanSecondName = useRef();
    let spanCrePassName = useRef();
    let spanConPassName = useRef();
    let spanCreEmailName = useRef();
    let spanMobileName = useRef();

    let spanConEmailName = useRef();
    let  nameRegex = /^[A-Z][a-zA-Z'-]*$/;
    let  passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    let  mobileNumberRegex = /^\+91\d{10}$/;

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;




    let onFocusFunction = (inputRef)=>{
        inputRef.current.style.backgroundColor = "red";

    }
    let onBlurFunction = (inputRef)=>{
        inputRef.current.style.backgroundColor = "pink";
    }


    


    let validateFunction = (nameRegularEx,nameInputRes,resultSpanFunc)=>{
        let result = nameRegularEx.test(nameInputRes);
        if(result == true){
            resultSpanFunc.current.innerHTML = "valid";
            resultSpanFunc.current.style.backgroundColor = "green";

        }
        else{
            resultSpanFunc.current.innerHTML = "Invalid";
            resultSpanFunc.current.style.backgroundColor = "red";
            
        }
    }
   
  

    let validationNameFunction =  ()=>{
        let firstNameResult = firstNameInput.current.value;
        let secondNameResult = secondNameInput.current.value;
       
        if( firstNameResult == secondNameResult)

        {
            alert(` Error ${firstNameResult} ${secondNameResult} Both are same`)
             
        }
        else{

    
        }
       

    }

    let validationPasswordFunction = ()=>{
        let createPassword = crePasswordInput.current.value;
        let confirmPassword = conPasswordInput.current.value;
        if(createPassword == confirmPassword){
        }
        else{
            alert(`Error ${createPassword} and ${confirmPassword} are Not same ` )
        }  

    }
    let validationEmailFunction = ()=>{
        let createEmail = creEmailInput.current.value;
        let confirmEmail= conEmailInput.current.value;
        if(createEmail == confirmEmail){
        }
        else{
            alert(`Error ${createEmail} and ${confirmEmail} are Not same ` )
        }  

    }





















  return (
    <div>

    <form>
        <div>
            <label>FirstName</label>
            <input type="text" ref={firstNameInput} onFocus={()=>{
                onFocusFunction(firstNameInput)
            }}
            onBlur={()=>{
                onBlurFunction(firstNameInput)
            }}
            onChange={()=>{
                validateFunction(nameRegex,firstNameInput.current.value,spanFirstName)

            }}></input>
            <span ref={spanFirstName}></span>
        </div>
        <div>
            <label>SecondName</label>
            <input type="text" ref={secondNameInput}  onFocus={()=>{
                onFocusFunction(secondNameInput)}}
                onBlur={()=>{
                    onBlurFunction(secondNameInput)
                }}
                onChange={()=>{
                    validateFunction(nameRegex,secondNameInput.current.value,spanSecondName)
    
                }}></input> <span ref={spanSecondName}></span>
        </div>
        <div>
            <label>Create Password</label>
            <input type="text" ref={crePasswordInput} onFocus={()=>{
                onFocusFunction(crePasswordInput)}}
                onBlur={()=>{
                    onBlurFunction(crePasswordInput)
                }}
                onChange={()=>{
            validateFunction(passwordRegex,crePasswordInput.current.value,spanCrePassName);
                }}
                
                
                ></input> <span ref={spanCrePassName}></span>
        </div>
        <div>
            <label>Confirm Password</label>
            <input  type="text" ref={conPasswordInput} onFocus={()=>{
                onFocusFunction(conPasswordInput)}}
                onBlur={()=>{
                    onBlurFunction(conPasswordInput)
                }}
                onChange={()=>{
                validateFunction(passwordRegex,conPasswordInput.current.value,spanConPassName);
                }}></input> <span ref={spanConPassName}></span>
        </div>
        <div>
            <label>Create Email</label>
            <input type="text" ref={creEmailInput} 
            onChange={()=>{
                validateFunction(emailRegex,creEmailInput.current.value,spanCreEmailName)
            }}
            
            
            
            onFocus={()=>{
                onFocusFunction(creEmailInput);}}
                onBlur={()=>{
                    onBlurFunction(creEmailInput);
                }}></input> <span ref={spanCreEmailName}></span>
        </div>
        <div>
            <label>Confirm Email</label>
            <input type="text" ref={conEmailInput}
               onChange={()=>{
                validateFunction(emailRegex,conEmailInput.current.value,spanConEmailName)
            }} onFocus={()=>{
                onFocusFunction(conEmailInput);}}
                onBlur={()=>{
                    onBlurFunction(conEmailInput);
                }}></input> <span ref={spanConEmailName}></span>
        </div>
        <div>
            <label>Mobile Number</label>
            <input type="text" ref={mobileInput} 
            onChange={()=>{
                validateFunction(mobileNumberRegex,mobileInput.current.value,spanMobileName)
            }} onFocus={()=>{
                onFocusFunction(mobileInput);}}
                onBlur={()=>{
                    onBlurFunction(mobileInput);
                }} ></input> <span ref={spanMobileName}></span>
        </div>
        <div>
            <button type="button" onClick={()=>{
                validationNameFunction()
                validationPasswordFunction()
                validationEmailFunction()
            }}>SUBMIT</button>
        </div>
       
    </form>


    </div>
  )

  };

export default UserFormvalidation