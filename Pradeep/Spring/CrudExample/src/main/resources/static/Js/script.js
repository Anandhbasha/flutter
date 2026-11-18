const APIURl = "/students";

const loadStudent = async()=>{
    try{
        const res = await fetch(`${APIURl}/all`);
        if(!res.ok){
            throw new Error("Unable to Students")
        }
        const students = await res.json()
//        displayStudents(students)
        document.getElementById("totalStu").innerText = students.length;
        console.log(students.length)
    }catch(error){
        console.log(error);
        alert("unable to connect Backend")
    }
}

//add
document.getElementById("studentForm").addEventListener("submit", async function(e) {
    e.preventDefault();

    const student = {
        name: document.getElementById("studentName").value,
        course: document.getElementById("studentCourse").value,
    };

    console.log(student);

    try {
        const res = await fetch(`${APIURl}/add`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // ✅ Fixed: hyphen instead of underscore
            },
            body: JSON.stringify(student)
        });

        if (!res.ok) {
                    // Read the error message sent from Spring Boot
                    const errorText = await res.text();
                    throw new Error(`Server error (${res.status}): ${errorText || "Unable to add Student"}`);
                } else {
            alert("Student Added Successfully");
            this.reset();
            loadStudent();
        }

    } catch (error) {
        console.log(error);
        alert(error.message);
    }
});
document.addEventListener("DOMContentLoaded",loadStudent)