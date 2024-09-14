function generateResume(): void {
    // Retrieve input values
    const name = (document.getElementById('name-input') as HTMLInputElement).value;
    const fatherName = (document.getElementById('father-name-input') as HTMLInputElement).value;
    const about = (document.getElementById('about-input') as HTMLInputElement).value;
    const education = (document.getElementById('education-input') as HTMLInputElement).value;
    const skills = (document.querySelector('.skills-input') as HTMLInputElement).value;
    const github = (document.getElementById('github-input') as HTMLInputElement).value;
    const linkedin = (document.getElementById('linkedin') as HTMLInputElement).value;
    
    
    if (!name || !fatherName || !about || !education || !skills || !github || !linkedin) {
        alert("Please fill in all the fields.");
        return;
    }
    
    const skillsList = skills.split(',').map(skill => skill.trim()).filter(skill => skill).join('</li><li>');
    // Generate resume content
    const resumeContent = `
    <div id="all-content">
     <header class="Head">
        <h1><span contenteditable="true">${name.toUpperCase()}</span></h1>
        <p>  <a href="#"  containteditable === "true">LinkedIn : ${linkedin}</a>
            | <a href="#" containteditable === "true">Github : ${github}</a></p>
    </header>

    <!-- INFO SECTION -->
    <section class="main-obj">
        <h2>Objective :</h2>
        <p ><span contenteditable="true">${about}</span></p>
    </section>
    <hr>
    <!--Personal Info -->
    <div class="personal-info">
        <h2>Personal Information : </h2>
        <div>
            <div class="info-item">
                <strong>Name:</strong><span contenteditable="true"> ${name}</span>
            </div>
            <div class="info-item">
                <strong>Father's Name:</strong><span contenteditable="true"> ${fatherName}</span>
            </div>"
            <div class="info-item">
                <strong>Nationality:</strong><span contenteditable="true"> Pakistani</span>
            </div>
            <div class="info-item">
                <strong>Qualification:</strong><span contenteditable="true"> ${education}</span>
            </div>
        </div>
    </div>
    <hr>
    <!-- skills portion -->
    <div class="skill-portion">
        <h2>Skills :</h2>
         <ul><li><span contenteditable="true"> ${skillsList}</span></li></ul>
        
    </div>
    <hr>
    <!-- footer -->
    <div class="footer">
        <h4>"Thank you for considering my application; I look forward to the opportunity to contribute to your team."</h4>
    </div>
  </div>  
  
         
`;

    // Display the resume output
    (document.getElementById('resume-output') as HTMLDivElement).innerHTML = resumeContent;
}
function download() {
    // Get the element with the resume content
    const element = document.getElementById('all-content');

    if (element) {
        // Set options for html2pdf
        const options = {
            margin: 1,
            filename: 'resume.pdf',
            image: { type: 'jpeg', quality: 0.98 },
            html2canvas: { scale: 2 },
            jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
        };

        // Convert HTML to PDF and download
        html2pdf().from(element).set(options).save();
    }
}

// Add event listeners to the buttons
document.getElementById('button')?.addEventListener('click', generateResume);
document.getElementById('downloadPDF')?.addEventListener('click', download);
