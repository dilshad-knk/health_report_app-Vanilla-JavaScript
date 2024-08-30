import { plotBloodPressure } from "./chart.js";
import { profile } from "./section3.js";




export function loadsection1(data){
    data && data.map(
        patient => {
            const section1Main = document.getElementById('section-1-main')
            const patientContainer = document.createElement('div');
            patientContainer.classList.add('patient-container-section1');


            const part1 = document.createElement('div');
            part1.classList.add('patient-part1-section1');

            

            const profileImg = document.createElement('img');
            profileImg.classList.add('profile-image-section1');
            profileImg.src = patient.profile_picture;

            const patientDetails = document.createElement('div');
            patientDetails.classList.add('patient-details-section1');


            part1.appendChild(profileImg);
            part1.appendChild(patientDetails);




            const name = document.createElement('h5');
            name.classList.add('patient-name-section1');
            name.textContent = patient.name;

            const detailContainer = document.createElement('div');
        

            const gender = document.createElement('span');
            gender.classList.add('patient-gender-section1');
            gender.textContent = patient.gender;

            const age = document.createElement('span');
            age.classList.add('patient-age-section1');
            age.textContent = patient.age;


            detailContainer.appendChild(gender);
            detailContainer.appendChild(age);
            patientDetails.appendChild(name);
            patientDetails.appendChild(detailContainer);



            const more = document.createElement('div');
            patientDetails.classList.add('patient-details-section1');

       
            
            const svgString = `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="3.714" viewBox="0 0 18 3.714">
                <path id="more_horiz_FILL0_wght300_GRAD0_opsz24" d="M191.09-536.285a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312A1.788,1.788,0,0,1,191.09-540a1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,191.09-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312A1.788,1.788,0,0,1,198.233-536.285Zm7.143,0a1.788,1.788,0,0,1-1.312-.546,1.788,1.788,0,0,1-.546-1.312,1.788,1.788,0,0,1,.546-1.312,1.788,1.788,0,0,1,1.312-.546,1.788,1.788,0,0,1,1.312.546,1.788,1.788,0,0,1,.546,1.312,1.788,1.788,0,0,1-.546,1.312,1.788,1.788,0,0,1-1.312.546Z" transform="translate(-189.233 539.999)" fill="#072635" />
            </svg>`;
            
            more.innerHTML = svgString; 
            
            const svgElement = more.firstElementChild; 
            svgElement.classList.add('patient-more-section1');


            patientContainer.appendChild(part1);
            patientContainer.appendChild(svgElement);


            section1Main.appendChild(patientContainer);


            patientContainer.addEventListener('click', () => {
               profile(patient)
               plotBloodPressure(patient);
            });


            


    
            

        }
    )
}
