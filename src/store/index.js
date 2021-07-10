import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: ["testing"],
    candidates: [
      {
        candidateID: 1,
        first: "John",
        last: "Smith",
        email: "john@email.com",
        dateAdded: "7/5/2021",
        resume: "MyResume.pdf",
        portfolio: "https://coberapps.com",
        profileImage:
          "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        candidateID: 2,
        first: "John",
        last: "Smith",
        email: "john@email.com",
        dateAdded: "7/5/2021",
        resume: "MyResume.pdf",
        portfolio: "https://coberapps.com",
        profileImage:
          "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
      {
        candidateID: 3,
        first: "John",
        last: "Smith",
        email: "john@email.com",
        dateAdded: "7/5/2021",
        resume: "MyResume.pdf",
        portfolio: "https://coberapps.com",
        profileImage:
          "https://images.pexels.com/photos/1486058/pexels-photo-1486058.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
      },
      {
        candidateID: 4,
        first: "John",
        last: "Smith",
        email: "john@email.com",
        dateAdded: "7/5/2021",
        resume: "MyResume.pdf",
        portfolio: "https://coberapps.com",
        profileImage:
          "https://images.pexels.com/photos/3684516/pexels-photo-3684516.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      },
    ],
    vacancies: [
      {
        vacancyID: 1,
        title: "Vue Frontend Developer",
        company: "Opsy",
        location: "Remote",
        jobType: "Full-time",
        salary: "USD 75000",
        createdDate: "4/25/2021",
        companyInfo: [
          {
            logo: "https://vuejobs.com/storage/avatars/5E4Y4UPCdT1tdVmpcxJHWxVsFsvfNrjPmrqC9kVs.png",
            website: "",
          },
        ],
        summary:
          "Innovative start-up looking for Vuetify artisan with part-time availability. About us: We are California based, 100% remote-ok team of developers on a mission to disrupt pest control industry with our SaaS. We love scalable products, with good APIs and simple but modern design.",
        jobDescription: `<p>Innovative start-up looking for Vuetify artisan with part-time availability.</p>
<p><strong>About us:</strong></p>
<p>We are California based, 100% remote-ok team of developers on a mission to disrupt pest control industry with our SaaS. We love scalable products, with good APIs and simple but modern design.</p>
<p><strong>Our stack:</strong> We are working with the Google Cloud stack including Cloud Functions, Firestore, Firebase Authentication and App Engine. We got solid CI process modern RESTful API and full front-end/back-end separation.</p>
<p>We are big fans of the simplicity and flexibility that Vuetify provides.</p>
<p><strong>About the job:</strong></p>
<p>We need a front-end developer with solid experience in developing SaaS using Vuetify. At current stage our main focus is capacity to quickly turn mock-ups developed with Adobe XD, to front-end code. We are using standard set of components available in Vuetify together with Adobe XD Vuetify UI Kit.</p>
<p>We are working 100% remotely, and we are flexible with time availability. We are looking for part-time involvement and we are open to make it full-time.</p>
<p><strong>Recruitment process:</strong> We will ask you to fill-up a <a href="https://forms.gle/3sY2NXgsWaC9zg3YA">quick form</a> with couple simple questions about your coding preferences, experience and portfolio(&lt;15 min). Next step will be a quick interview with the COO and CTO.</p>
<p><strong>Skills:</strong></p>
<p>Required:</p>
<ul>
<li>Experience with Vue + Vuetify (2 years minimum).</li>
<li>Solid experience with js / node.</li>
<li>Experience with Github/Gitlab (clean commits, merge requests, multiple branches).</li>
<li>Experience with Vuex.</li>
</ul>
<p>Great to have:</p>
<ul>
<li>Experience with API development.</li>
<li>Experience with Firestore.</li>
<li>Experience with Flutter.</li>
</ul>
<p><strong>Salary:</strong></p>
<p>$25 - $45/hour</p></div>`,
        skills: [
          "Vuetify",
          "API Integration",
          "Firestore",
          "Google Cloud",
          "Vuetify",
        ],
        applyLink: "https://forms.gle/3sY2NXgsWaC9zg3YA",
      },
      {
        vacancyID: 2,
        title: "Vue Frontend Developer",
        company: "Opsy",
        location: "Remote",
        jobType: "Full-time",
        salary: "USD 75000",
        createdDate: "4/25/2021",
        companyInfo: [
          {
            logo: "https://vuejobs.com/storage/avatars/5E4Y4UPCdT1tdVmpcxJHWxVsFsvfNrjPmrqC9kVs.png",
            website: "",
          },
        ],
        summary:
          "Innovative start-up looking for Vuetify artisan with part-time availability. About us: We are California based, 100% remote-ok team of developers on a mission to disrupt pest control industry with our SaaS. We love scalable products, with good APIs and simple but modern design.",
        jobDescription: `<p>Innovative start-up looking for Vuetify artisan with part-time availability.</p>
<p><strong>About us:</strong></p>
<p>We are California based, 100% remote-ok team of developers on a mission to disrupt pest control industry with our SaaS. We love scalable products, with good APIs and simple but modern design.</p>
<p><strong>Our stack:</strong> We are working with the Google Cloud stack including Cloud Functions, Firestore, Firebase Authentication and App Engine. We got solid CI process modern RESTful API and full front-end/back-end separation.</p>
<p>We are big fans of the simplicity and flexibility that Vuetify provides.</p>
<p><strong>About the job:</strong></p>
<p>We need a front-end developer with solid experience in developing SaaS using Vuetify. At current stage our main focus is capacity to quickly turn mock-ups developed with Adobe XD, to front-end code. We are using standard set of components available in Vuetify together with Adobe XD Vuetify UI Kit.</p>
<p>We are working 100% remotely, and we are flexible with time availability. We are looking for part-time involvement and we are open to make it full-time.</p>
<p><strong>Recruitment process:</strong> We will ask you to fill-up a <a href="https://forms.gle/3sY2NXgsWaC9zg3YA">quick form</a> with couple simple questions about your coding preferences, experience and portfolio(&lt;15 min). Next step will be a quick interview with the COO and CTO.</p>
<p><strong>Skills:</strong></p>
<p>Required:</p>
<ul>
<li>Experience with Vue + Vuetify (2 years minimum).</li>
<li>Solid experience with js / node.</li>
<li>Experience with Github/Gitlab (clean commits, merge requests, multiple branches).</li>
<li>Experience with Vuex.</li>
</ul>
<p>Great to have:</p>
<ul>
<li>Experience with API development.</li>
<li>Experience with Firestore.</li>
<li>Experience with Flutter.</li>
</ul>
<p><strong>Salary:</strong></p>
<p>$25 - $45/hour</p>

                </div>`,
        skills: [
          "Vuetify",
          "API Integration",
          "Firestore",
          "Google Cloud",
          "Vuetify",
        ],
        applyLink: "https://forms.gle/3sY2NXgsWaC9zg3YA",
      },
      {
        vacancyID: 3,
        title: "Vue Frontend Developer",
        company: "Opsy",
        location: "Remote",
        jobType: "Full-time",
        salary: "USD 75000",
        createdDate: "4/25/2021",
        companyInfo: [
          {
            logo: "https://vuejobs.com/storage/avatars/5E4Y4UPCdT1tdVmpcxJHWxVsFsvfNrjPmrqC9kVs.png",
            website: "",
          },
        ],
        summary:
          "Innovative start-up looking for Vuetify artisan with part-time availability. About us: We are California based, 100% remote-ok team of developers on a mission to disrupt pest control industry with our SaaS. We love scalable products, with good APIs and simple but modern design.",
        jobDescription: `<p>Innovative start-up looking for Vuetify artisan with part-time availability.</p>
<p><strong>About us:</strong></p>
<p>We are California based, 100% remote-ok team of developers on a mission to disrupt pest control industry with our SaaS. We love scalable products, with good APIs and simple but modern design.</p>
<p><strong>Our stack:</strong> We are working with the Google Cloud stack including Cloud Functions, Firestore, Firebase Authentication and App Engine. We got solid CI process modern RESTful API and full front-end/back-end separation.</p>
<p>We are big fans of the simplicity and flexibility that Vuetify provides.</p>
<p><strong>About the job:</strong></p>
<p>We need a front-end developer with solid experience in developing SaaS using Vuetify. At current stage our main focus is capacity to quickly turn mock-ups developed with Adobe XD, to front-end code. We are using standard set of components available in Vuetify together with Adobe XD Vuetify UI Kit.</p>
<p>We are working 100% remotely, and we are flexible with time availability. We are looking for part-time involvement and we are open to make it full-time.</p>
<p><strong>Recruitment process:</strong> We will ask you to fill-up a <a href="https://forms.gle/3sY2NXgsWaC9zg3YA">quick form</a> with couple simple questions about your coding preferences, experience and portfolio(&lt;15 min). Next step will be a quick interview with the COO and CTO.</p>
<p><strong>Skills:</strong></p>
<p>Required:</p>
<ul>
<li>Experience with Vue + Vuetify (2 years minimum).</li>
<li>Solid experience with js / node.</li>
<li>Experience with Github/Gitlab (clean commits, merge requests, multiple branches).</li>
<li>Experience with Vuex.</li>
</ul>
<p>Great to have:</p>
<ul>
<li>Experience with API development.</li>
<li>Experience with Firestore.</li>
<li>Experience with Flutter.</li>
</ul>
<p><strong>Salary:</strong></p>
<p>$25 - $45/hour</p>

                </div>`,
        skills: [
          "Vuetify",
          "API Integration",
          "Firestore",
          "Google Cloud",
          "Vuetify",
        ],
        applyLink: "https://forms.gle/3sY2NXgsWaC9zg3YA",
      },
    ],
  },
  mutations: {},
  actions: {},
  modules: {},
});
