let currDate = new Date();
let year = currDate.getFullYear() - 2002;
let month = currDate.getMonth() - 7;
let date = currDate.getDate() - 19;

if (month < 0) year -= 1;
else if (month === 0) {
  if (date < 19) year -= 1;
}

const about = {
  name: "Bhanu Prakash Bindal",
  about: "Full Stack Developer, Software Developer, Graphic Designer, Competitive Programmer",
  bio: "Pursuing B. Tech at NIT Kurukshetra in Electronics & Communication Branch. 3rd Year Student.",
  longBio:
    "I'm a developer with experience in building websites for individuals and organizations. I am expert in Python, CPP, MySQL, Design. I am a competitive Programmer. I have solved more than 500 questions of DSA on various coding platforms.",
  birthday: "19 Aug 2002",
  city: "Hindaun, Rajasthan, India",
  age: year,
  degree: "UG",
};

export default about;
