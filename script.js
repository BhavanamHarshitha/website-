const students = [
  {
    email: "bhavanamharshithareddy@gmail.com",
    id: "H123",
    name: "B. Harshitha",
    college: "KIET College",
    domain: "Web Development",
    startDate: "Aug 01, 2025",
    duration: "4 Weeks",
    status: "Completed",
    photo: "C:/Users/harsh/OneDrive/Desktop/internship website/images/harshi.jpg",
    certificate: "C:/Users/harsh/OneDrive/Desktop/internship website/images/ibm.jpeg"
  },
  {
    email: "manisankardegala62@gmail.com",
    id: "S456",
    name: "Degala Manisankar",
    college: "ABC Institute",
    domain: "App Development",
    startDate: "July 15, 2025",
    duration: "1 Month",
    status: "Completed",
    photo: "C:/Users/harsh/OneDrive/Desktop/internship website/images/mani.jpg",
    certificate: "C:/Users/harsh/OneDrive/Desktop/internship website/images/fmml mani.jpg"
  },
  {
    email: "msravs67@gmail.com",
    id: "J789",
    name: "M.Sravani",
    college: "XYZ University",
    domain: "Python Programming",
    startDate: "Sep 01, 2025",
    duration: "6 Weeks",
    status: "In Progress",
    photo: "C:/Users/harsh/OneDrive/Desktop/internship website/images/sravani.jpg",
    certificate: "C:/Users/harsh/OneDrive/Desktop/internship website/images/certifiacte sravani.jpg"
  },
];

document.getElementById("verifyForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const input = document.getElementById("emailOrID").value.trim().toLowerCase();
  const resultBox = document.getElementById("result");

  const student = students.find(
    (s) => s.email.toLowerCase() === input || s.id.toLowerCase() === input
  );

  if (student) {
    resultBox.innerHTML = `
      <h3>Certificate Details</h3>
      <p><strong>Name:</strong> ${student.name}</p>
      <p><strong>Email:</strong> ${student.email}</p>
      <p><strong>ID:</strong> ${student.id}</p>
      <p><strong>College:</strong> ${student.college}</p>
      <p><strong>Domain:</strong> ${student.domain}</p>
      <p><strong>Start Date:</strong> ${student.startDate}</p>
      <p><strong>Duration:</strong> ${student.duration}</p>
      <p><strong>Status:</strong> ${student.status}</p>
      <div class="photos">
        <div>
          <p><strong>Photo:</strong></p>
          <img src="${student.photo}" alt="User Photo" />
        </div>
        <div>
          <p><strong>Certificate:</strong></p>
          <img src="${student.certificate}" alt="Certificate Image" />
        </div>
      </div>
    `;
  } else {
    resultBox.innerHTML = `<p style="color:red;">No certificate found for: ${input}</p>`;
  }
});
