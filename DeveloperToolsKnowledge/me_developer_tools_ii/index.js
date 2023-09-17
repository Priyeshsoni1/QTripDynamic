// const getApiData=()=>{
//     const url="https://run.mocky.io/v3/511fa794-6bfb-4c9f-9adb-9e18d62d7003"
//     fetch(url).then((Response)=>Response.json()).then((data)=>console.log(data))
// }
// getApiData()
const getApiData=async()=>{
    try{
    let res=await fetch("https://run.mocky.io/v3/511fa794-6bfb-4c9f-9adb-9e18d62d7003")
    let data=await res.json();
   
    return data;
}
    catch(error)
    {
        console.log(error);
        throw error
    }

}

const getTableRow=(title,acRate,difficulty)=>{
    let tRow=document.createElement("tr");
    tRow.innerHTML=
    `<td>${title}</td>
    <td>${acRate}</td>
    <td>${difficulty}</td>
    `
    return tRow;
}


const populateTable=(questionsList)=>{


    console.log(questionsList)
   
    const body = document.getElementById("table-body");
   
        questionsList.forEach((data)=>{
        console.log(data)
           const {title,acRate,difficulty}=data;
      
          const rowData= getTableRow(title,acRate,difficulty);
         
          body.appendChild(rowData)
        })
   
   
       
   
   
   }



let questionsList = await getApiData()
 questionsList=questionsList.problemsetQuestionList.questions
 populateTable(questionsList)




 let acceptanceHeaderElement=document.querySelector("#questions-table > thead > tr > th:nth-child(2)")
 acceptanceHeaderElement.addEventListener('click',()=>{
     questionsList=sortQuestionsByAcceptanceRate(questionsList)
     
     populateTable(questionsList);
    
     
 })










const sortQuestionsByAcceptanceRate=(questionsList)=>{
    let sortedArray=questionsList.sort((a,b)=>b.acRate-a.acRate)
    return sortedArray

}





